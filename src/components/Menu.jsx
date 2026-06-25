import { useMemo, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { menu, menuGroups } from '../data/menu.js'
import MenuItemModal from './MenuItemModal.jsx'

export default function Menu() {
  const { t, pick } = useLanguage()
  const [activeGroup, setActiveGroup] = useState(menuGroups[0].id)
  const [selected, setSelected] = useState(null)

  const categories = useMemo(
    () => menu.filter((c) => c.group === activeGroup),
    [activeGroup],
  )

  return (
    <section id="menu" className="section section--menu">
      <div className="container">
        <header className="section__head">
          <span className="section__kicker">🍣 Menu</span>
          <h2 className="section__title">{t.menu.title}</h2>
          <p className="section__subtitle">{t.menu.subtitle}</p>
        </header>

        <div className="menu__tabs" role="tablist">
          {menuGroups.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={activeGroup === g.id}
              className={`menu__tab ${activeGroup === g.id ? 'is-active' : ''}`}
              onClick={() => setActiveGroup(g.id)}
            >
              {pick(g.name)}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {categories.map((cat) => (
            <article key={cat.id} className="menu-card">
              <div className="menu-card__head">
                <h3>{pick(cat.name)}</h3>
                {cat.note && <span className="menu-card__note">{pick(cat.note)}</span>}
                {cat.variants && (
                  <div className="menu-card__variants">
                    {cat.variants.map((v) => (
                      <span key={v.id}>{pick(v.label)}</span>
                    ))}
                  </div>
                )}
              </div>

              <ul className="menu-card__list">
                {cat.items.map((item) => (
                  <li key={item.id}>
                    <button className="menu-item" onClick={() => setSelected({ item, cat })}>
                      <span className="menu-item__thumb" aria-hidden="true">
                        {item.image ? (
                          <img src={item.image} alt="" loading="lazy" />
                        ) : (
                          <span className="menu-item__thumb-ph">🍱</span>
                        )}
                        <span className="menu-item__zoom">⊕</span>
                      </span>

                      <span className="menu-item__body">
                        <span className="menu-item__name">
                          {pick(item.name)}
                          {item.tags?.includes('veg') && <span className="tag tag--veg">🌱</span>}
                        </span>
                        {item.desc && <span className="menu-item__desc">{pick(item.desc)}</span>}
                      </span>

                      <span className="menu-item__price">
                        {cat.variants ? (
                          cat.variants.map((v) => (
                            <span key={v.id} className="price">
                              {item.price[v.id]}
                              <em>{t.menu.currency}</em>
                            </span>
                          ))
                        ) : (
                          <span className="price">
                            {item.price}
                            <em>{t.menu.currency}</em>
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <MenuItemModal item={selected.item} cat={selected.cat} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
