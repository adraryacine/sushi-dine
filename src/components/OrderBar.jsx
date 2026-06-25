import { useLanguage } from '../i18n/LanguageContext.jsx'
import { telLink, whatsappLink } from '../utils/links.js'

// Floating quick-order buttons (visible on every screen, esp. mobile).
export default function OrderBar() {
  const { t, lang } = useLanguage()

  return (
    <div className="order-bar" aria-label="Quick order">
      <a
        href={whatsappLink(lang)}
        className="order-bar__btn order-bar__btn--wa"
        target="_blank"
        rel="noreferrer"
        aria-label={t.order.whatsapp}
      >
        <span className="order-bar__icon">💬</span>
        <span className="order-bar__label">{t.order.whatsapp}</span>
      </a>
      <a href={telLink()} className="order-bar__btn order-bar__btn--call" aria-label={t.order.call}>
        <span className="order-bar__icon">📞</span>
        <span className="order-bar__label">{t.order.call}</span>
      </a>
    </div>
  )
}
