import { useLanguage } from '../i18n/LanguageContext.jsx'
import { siteConfig } from '../data/siteConfig'
import { telLink, whatsappLink } from '../utils/links.js'

export default function Contact() {
  const { t, pick, lang } = useLanguage()
  const { social } = siteConfig

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <header className="section__head">
          <span className="section__kicker">📍 {t.nav.contact}</span>
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="section__subtitle">{t.contact.subtitle}</p>
        </header>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__row">
              <span className="contact__icon">📍</span>
              <div>
                <h4>{t.contact.addressLabel}</h4>
                <p>{pick(siteConfig.address)}</p>
                <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="contact__link">
                  Google Maps →
                </a>
              </div>
            </div>

            <div className="contact__row">
              <span className="contact__icon">📞</span>
              <div>
                <h4>{t.contact.phoneLabel}</h4>
                <a href={telLink()} className="contact__link">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact__row">
              <span className="contact__icon">🕑</span>
              <div>
                <h4>{t.contact.hoursLabel}</h4>
                <p>
                  {t.contact.days.monSat} : {siteConfig.hours.monSat}
                  <br />
                  {t.contact.days.sun} : {siteConfig.hours.sun}
                </p>
              </div>
            </div>

            <div className="contact__row">
              <span className="contact__icon">💬</span>
              <div>
                <h4>{t.contact.followLabel}</h4>
                <div className="contact__social">
                  {social.instagram && (
                    <a href={social.instagram} target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  )}
                  {social.facebook && (
                    <a href={social.facebook} target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  )}
                  {social.tiktok && (
                    <a href={social.tiktok} target="_blank" rel="noreferrer">
                      TikTok
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="contact__order">
              <h4>{t.contact.orderTitle}</h4>
              <p>{t.contact.orderText}</p>
              <div className="contact__order-btns">
                <a href={whatsappLink(lang)} className="btn btn--primary" target="_blank" rel="noreferrer">
                  {t.order.whatsapp}
                </a>
                <a href={telLink()} className="btn btn--ghost-dark">
                  {t.order.call}
                </a>
              </div>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="Sushidine map"
              src={siteConfig.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
