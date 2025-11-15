import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { Resend } from "resend";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    send: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Nome é obrigatório"),
          email: z.string().email("Email inválido"),
          whatsapp: z.string().optional(),
          message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
          language: z.enum(["en", "nl", "pt"]).default("en"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const { data, error } = await resend.emails.send({
            from: "Solinvest Contact <onboarding@resend.dev>",
            to: ["info@solinvest.net"],
            subject: `New Contact Form Submission from ${input.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${input.name}</p>
              <p><strong>Email:</strong> ${input.email}</p>
              ${input.whatsapp ? `<p><strong>WhatsApp:</strong> ${input.whatsapp}</p>` : ""}
              <p><strong>Language:</strong> ${input.language.toUpperCase()}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p>${input.message.replace(/\n/g, "<br>")}</p>
            `,
          });

          if (error) {
            console.error("[Resend Error]", error);
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Failed to send email. Please try again later.",
            });
          }

          return {
            success: true,
            messageId: data?.id,
          };
        } catch (error) {
          console.error("[Contact Form Error]", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to send email. Please try again later.",
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
