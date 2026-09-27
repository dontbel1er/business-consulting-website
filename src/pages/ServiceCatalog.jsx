import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LeadForm from '../components/LeadForm.jsx'

function ServiceCatalog() {
  const { t } = useTranslation()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const services = [
    {
      id: 'strategy',
      title: t('catalog.services.strategy.title'),
      shortDesc: t('catalog.services.strategy.shortDesc'),
      fullDesc: t('catalog.services.strategy.fullDesc'),
      tags: t('catalog.services.strategy.tags', { returnObjects: true }),
      price: t('catalog.services.strategy.price')
    },
    {
      id: 'marketing',
      title: t('catalog.services.marketing.title'),
      shortDesc: t('catalog.services.marketing.shortDesc'),
      fullDesc: t('catalog.services.marketing.fullDesc'),
      tags: t('catalog.services.marketing.tags', { returnObjects: true }),
      price: t('catalog.services.marketing.price')
    },
    {
      id: 'finance',
      title: t('catalog.services.finance.title'),
      shortDesc: t('catalog.services.finance.shortDesc'),
      fullDesc: t('catalog.services.finance.fullDesc'),
      tags: t('catalog.services.finance.tags', { returnObjects: true }),
      price: t('catalog.services.finance.price')
    },
    {
      id: 'hr',
      title: t('catalog.services.hr.title'),
      shortDesc: t('catalog.services.hr.shortDesc'),
      fullDesc: t('catalog.services.hr.fullDesc'),
      tags: t('catalog.services.hr.tags', { returnObjects: true }),
      price: t('catalog.services.hr.price')
    },
    {
      id: 'digital',
      title: t('catalog.services.digital.title'),
      shortDesc: t('catalog.services.digital.shortDesc'),
      fullDesc: t('catalog.services.digital.fullDesc'),
      tags: t('catalog.services.digital.tags', { returnObjects: true }),
      price: t('catalog.services.digital.price')
    },
    {
      id: 'legal',
      title: t('catalog.services.legal.title'),
      shortDesc: t('catalog.services.legal.shortDesc'),
      fullDesc: t('catalog.services.legal.fullDesc'),
      tags: t('catalog.services.legal.tags', { returnObjects: true }),
      price: t('catalog.services.legal.price')
    }
  ]

  return (
    <>
      <section className="tile-light">
        <div className="container">
          <div className="catalog-hero">
            <h1>{t('catalog.title')}</h1>
            <p className="catalog-lead">{t('catalog.lead')}</p>
          </div>
        </div>
      </section>

      <section className="tile-parchment">
        <div className="container">
          <div className="catalog-grid">
            {services.map((service) => (
              <article className="catalog-card" key={service.id}>
                <div className="catalog-card-header">
                  <h3>{service.title}</h3>
                  <span className="catalog-card-price">{service.price}</span>
                </div>
                <p className="catalog-card-short">{service.shortDesc}</p>
                <p className="catalog-card-full">{service.fullDesc}</p>
                <div className="catalog-card-tags">
                  {service.tags.map((tag) => (
                    <span className="catalog-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <button
                  className="btn btn-primary btn-small"
                  onClick={() => { setSelectedService(service.title); setIsFormOpen(true) }}
                >
                  {t('catalog.cta')}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        defaultService={selectedService}
      />
    </>
  )
}

export default ServiceCatalog
