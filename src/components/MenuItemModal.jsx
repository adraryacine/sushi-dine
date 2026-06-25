import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { telLink, whatsappLink } from '../utils/links.js'

export default function MenuItemModal({ item, cat, onClose }) {
  const { t, pick, lang } = useLanguage()

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal__media">
          {item.image ? (
            <img src={item.image} alt={pick(item.name)} />
          ) : (
            <div className="modal__placeholder">
              <span className="modal__placeholder-emoji">🍣</span>
              <span>{t.menu.photoSoon}</span>
            </div>
          )}
        </div>

        <div className="modal__info">
          <span className="modal__cat">{pick(cat.name)}</span>
          <h3 className="modal__title">
            {pick(item.name)}
            {item.tags?.includes('veg') && <span className="tag tag--veg">🌱</span>}
          </h3>
          {item.desc && <p className="modal__desc">{pick(item.desc)}</p>}

          <div className="modal__prices">
            {cat.variants ? (
              cat.variants.map((v) => (
                <div key={v.id} className="modal__price">
                  <span className="modal__price-label">{pick(v.label)}</span>
                  <span className="modal__price-value">
                    {item.price[v.id]} {t.menu.currency}
                  </span>
                </div>
              ))
            ) : (
              <div className="modal__price">
                <span className="modal__price-value">
                  {item.price} {t.menu.currency}
                </span>
              </div>
            )}
          </div>

          <div className="modal__actions">
            <a href={whatsappLink(lang)} className="btn btn--primary" target="_blank" rel="noreferrer">
              {t.order.whatsapp}
            </a>
            <a href={telLink()} className="btn btn--ghost-dark">
              {t.order.call}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
