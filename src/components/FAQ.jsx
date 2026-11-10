import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { Reveal, useCalm } from '../lib/motion.jsx'

function FAQ() {
  const { t } = useTranslation()
  const [openIdx, setOpenIdx] = useState(null)
  const items = t('faq.items', { returnObjects: true })
  const calm = useCalm()

  const toggle = (idx) => setOpenIdx((prev) => (prev === idx ? null : idx))

  return (
    <section className="tile-light faq-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="t-display-lg">{t('faq.title')}</h2>
            <p className="t-lead">{t('faq.lead')}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="faq-list">
            {items.map((item, idx) => {
              const open = openIdx === idx
              return (
                <div className={`faq-item ${open ? 'open' : ''}`} key={item.q}>
                  <button
                    className="faq-question"
                    onClick={() => toggle(idx)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span>{item.q}</span>
                    <motion.svg
                      className="faq-chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      initial={false}
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={calm ? { duration: 0.15 } : { type: 'spring', bounce: 0, duration: 0.4 }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </button>

                  <motion.div
                    id={`faq-answer-${idx}`}
                    className="faq-answer"
                    initial={false}
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                    transition={
                      calm
                        ? { duration: 0.18 }
                        : open
                          ? { type: 'spring', bounce: 0, duration: 0.45 }
                          : { duration: 0.24, ease: [0.7, 0, 0.84, 0] }
                    }
                  >
                    <p>{item.a}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FAQ
