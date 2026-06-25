import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Add your food & decoration photos here as you get them:
//   put files in  public/images/gallery/  then add { src, alt } below.
// `null` slots render as a styled "coming soon" placeholder.
const galleryItems = [
  { src: '/images/menu-boards/storefront.jpg', alt: 'Sushidine — devanture' },
  { src: null, alt: '' },
  { src: null, alt: '' },
  { src: null, alt: '' },
  { src: null, alt: '' },
  { src: null, alt: '' },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="section section--gallery">
      <div className="container">
        <header className="section__head">
          <span className="section__kicker">📸 Gallery</span>
          <h2 className="section__title">{t.gallery.title}</h2>
          <p className="section__subtitle">{t.gallery.subtitle}</p>
        </header>

        <div className="gallery__grid">
          {galleryItems.map((g, i) =>
            g.src ? (
              <button key={i} className="gallery__item" onClick={() => setLightbox(g)}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </button>
            ) : (
              <div key={i} className="gallery__item gallery__item--ph">
                <span>🍣</span>
                <small>{t.gallery.soon}</small>
              </div>
            ),
          )}
        </div>
      </div>

      {lightbox && (
        <div className="modal" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setLightbox(null)} aria-label="Close">
              ✕
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </section>
  )
}
