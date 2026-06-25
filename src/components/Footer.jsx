import { useLanguage } from '../i18n/LanguageContext.jsx'
import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  const { t, pick } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/images/brand/logo.jpg" alt="Sushidine" />
          <p>{pick(siteConfig.tagline)} · 日本料理</p>
        </div>

        <nav className="footer__nav">
          <a href="#menu">{t.nav.menu}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>
          © {year} {siteConfig.name} — {t.footer.madeWith}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
