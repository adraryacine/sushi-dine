import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section section--about">
      <div className="container about__inner">
        <div className="about__media">
          <img src="/images/brand/logo.jpg" alt="Sushidine" className="about__logo" />
          <div className="about__badge" aria-hidden="true">
            日本料理
          </div>
        </div>

        <div className="about__text">
          <span className="section__kicker">🥢 {t.nav.about}</span>
          <h2 className="section__title">{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>

          <div className="about__stats">
            <div className="about__stat">
              <strong>60+</strong>
              <span>{t.about.stat1}</span>
            </div>
            <div className="about__stat">
              <strong>100%</strong>
              <span>{t.about.stat2}</span>
            </div>
            <div className="about__stat">
              <strong>★</strong>
              <span>{t.about.stat3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
