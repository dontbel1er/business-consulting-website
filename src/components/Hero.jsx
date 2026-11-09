import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import LeadForm from './LeadForm.jsx'
import { useCalm } from '../lib/motion.jsx'

function Hero({ showActions = true, title, lead }) {
  const { t } = useTranslation()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const calm = useCalm()

  const rise = (delay) => ({
    initial: calm ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', bounce: 0, duration: 0.55, delay },
  })

  const credentials = [
    t('hero.cred1', 'MBA'),
    t('hero.cred2', 'PMP'),
    t('hero.cred3', 'Big 4'),
    t('hero.cred4', 'Forbes и РБК')
  ]

  return (
    <>
      <section className={`tile-light hero ${showActions ? '' : 'hero-compact'}`}>
        <div className="container">
          <motion.h1 className="t-display-hero" {...rise(0)}>
            {title || t('hero.name')}
          </motion.h1>

          <motion.p className="t-lead" {...rise(0.06)}>
            {lead || t('hero.subtitle')}
          </motion.p>

          {showActions && (
            <motion.div className="hero-actions" {...rise(0.12)}>
              <button className="btn btn-primary" onClick={() => setIsFormOpen(true)}>
                {t('hero.cta_primary')}
              </button>
              <Link to="/services" className="btn btn-secondary">{t('hero.cta_secondary')}</Link>
            </motion.div>
          )}

          {showActions && (
            <motion.p className="hero-credentials" {...rise(0.18)}>
              {credentials.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </motion.p>
          )}
        </div>
      </section>
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default Hero
