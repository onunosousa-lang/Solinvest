import { useState, useEffect } from 'react';
import type { Language } from '@/lib/investorFormTranslations';

/**
 * Hook to detect and track the current language from localStorage
 * Syncs with the language switcher in the navigation
 */
export function useLanguage(): Language {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'nl' || saved === 'pt') {
        return saved;
      }
    }
    return 'en'; // Default to English
  });

  useEffect(() => {
    // Listen for language changes from localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'language' && e.newValue) {
        const newLang = e.newValue;
        if (newLang === 'en' || newLang === 'nl' || newLang === 'pt') {
          setLanguage(newLang);
        }
      }
    };

    // Listen for custom language change events
    const handleLanguageChange = ((e: CustomEvent<Language>) => {
      setLanguage(e.detail);
    }) as EventListener;

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return language;
}
