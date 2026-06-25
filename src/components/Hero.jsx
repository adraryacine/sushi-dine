import { useLanguage } from '../i18n/LanguageContext.jsx'
import { telLink } from '../utils/links.js'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero">
      <div className="hero__petals" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="petal" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__content">
        <img src="/images/brand/logo.jpg" alt="Sushidine" className="hero__logo" />
        <p className="hero__tagline">{t.hero.tagline}</p>
        <h1 className="hero__title">{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn--primary">
            {t.hero.ctaMenu}
          </a>
          <a href={telLink()} className="btn btn--ghost">
            {t.hero.ctaOrder}
          </a>
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,80 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
