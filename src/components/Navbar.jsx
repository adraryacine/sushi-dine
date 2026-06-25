import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { siteConfig } from '../data/siteConfig'

const links = [
  { id: 'menu', href: '#menu' },
  { id: 'gallery', href: '#gallery' },
  { id: 'about', href: '#about' },
  { id: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={close}>
          <img src="/images/brand/logo.jpg" alt="Sushidine" className="nav__logo" />
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.id} href={l.href} onClick={close}>
              {t.nav[l.id]}
            </a>
          ))}
          <a href="#contact" className="nav__cta" onClick={close}>
            {t.nav.order}
          </a>
        </nav>

        <div className="nav__actions">
          <button className="lang-switch" onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'fr' ? 'is-active' : ''}>FR</span>
            <span className="lang-switch__sep">/</span>
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
          </button>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
