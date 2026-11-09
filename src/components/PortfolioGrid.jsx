import { useTranslation } from 'react-i18next'
import { Reveal } from '../lib/motion.jsx'

function PortfolioGrid() {
  const { t } = useTranslation()
  const items = t('portfolio.items', { returnObjects: true })

  return (
    <section className="tile-dark">
      <div className="container">
        <div className="portfolio-grid">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.07}>
              <article className="portfolio-item">
                <span className="portfolio-index">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid
