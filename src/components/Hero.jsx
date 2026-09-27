import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LeadForm from './LeadForm.jsx'

function Hero({ showActions = true }) {
  const { t } = useTranslation()
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <section className="tile-light hero">
        <div className="container">
          <h1>{t('hero.name')}</h1>
          <p className="lead">{t('hero.subtitle')}</p>
          {showActions && (
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setIsFormOpen(true)}>
                {t('hero.cta_primary')}
              </button>
              <Link to="/services" className="btn btn-secondary">{t('hero.cta_secondary')}</Link>
            </div>
          )}
        </div>
      </section>
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default Hero
