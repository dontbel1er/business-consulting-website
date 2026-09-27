import { useTranslation } from 'react-i18next'

function ServicesGrid() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <section className="tile-parchment">
      <div className="container">
        <div className="section-header">
          <h2>{t('services.title')}</h2>
          <p>{t('services.lead')}</p>
        </div>
        <div className="services-grid">
          {items.map((item, idx) => (
            <div className="service-card" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
