"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import type { Language, Translations } from "./i18n"
import { getTranslation, isRTL } from "./i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("osis-armata-language") as Language
    if (savedLanguage && ["id", "ar", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem("osis-armata-language", language)

    // Update document direction for RTL support
    document.documentElement.dir = isRTL(language) ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = getTranslation(language)
  const rtl = isRTL(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL: rtl }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
