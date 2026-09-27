import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function FAQ() {
  const { t } = useTranslation()
  const [openIdx, setOpenIdx] = useState(null)
  const items = t('faq.items', { returnObjects: true })

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className="tile-light">
      <div className="container">
        <div className="section-header">
          <h2>{t('faq.title')}</h2>
          <p>{t('faq.lead')}</p>
        </div>
        <div className="faq-list">
          {items.map((item, idx) => (
            <div className={`faq-item ${openIdx === idx ? 'open' : ''}`} key={idx}>
              <button className="faq-question" onClick={() => toggle(idx)}>
                {item.q}
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
