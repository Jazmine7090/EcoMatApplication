import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('ecomat_lang') || 'en';
  });

  const setLanguage = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('ecomat_lang', newLang);
  };

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang] || translations.en;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const isArabic = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage, t, dir, isArabic }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
