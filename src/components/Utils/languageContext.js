import React, { createContext, useState } from 'react';

export const LanguageContext = createContext(
  {
    language: "en",
    setLanguage: () => {},
  }
);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
