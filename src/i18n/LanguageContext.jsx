import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'sushidine-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)
    return saved === 'en' || saved === 'fr' ? saved : 'fr'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))

  // t = current UI string table; pick = helper to resolve a {fr,en} object
  const value = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
    pick: (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.fr : obj),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
