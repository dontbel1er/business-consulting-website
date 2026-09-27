import { useTranslation } from 'react-i18next'

function PortfolioGrid() {
  const { t } = useTranslation()
  const items = t('portfolio.items', { returnObjects: true })

  return (
    <section className="tile-dark">
      <div className="container">
        <div className="section-header">
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.lead')}</p>
        </div>
        <div className="portfolio-grid">
          {items.map((item, idx) => (
            <div className="portfolio-item" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid
