"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "english" | "japanese" | "french" | "";

type Context = { language: Language; setLanguage: (language: Language) => void };
const LanguageContext = createContext<Context | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("");

  // When user refresh the page, get language data from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("language") as Language | null;
      if (stored) setLanguage(stored);
    } catch { }
  }, []);

  // when language data is changed, the new language data is stored
  useEffect(() => {
    try {
      if (language) localStorage.setItem("language", language);
      else localStorage.removeItem("language");
    } catch { }
  }, [language]);


  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
