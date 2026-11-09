import { useTranslation } from 'react-i18next'
import { Reveal } from '../lib/motion.jsx'

function ServicesGrid() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <section className="tile-parchment">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="t-display-lg">{t('services.title')}</h2>
            <p className="t-lead">{t('services.lead')}</p>
          </div>
        </Reveal>

        <div className="services-grid">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <article className="service-card">
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

export default ServicesGrid
