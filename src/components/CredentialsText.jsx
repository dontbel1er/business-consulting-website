import { useTranslation } from 'react-i18next'

function CredentialsText() {
  const { t } = useTranslation()

  const stats = [
    {
      num: '12+',
      label: t('credentials.stat1', 'лет опыта')
    },
    {
      num: '150+',
      label: t('credentials.stat2', 'проектов')
    },
    {
      num: '3x',
      label: t('credentials.stat3', 'рост прибыли')
    }
  ]

  const features = [
    t('credentials.feat1', 'MBA, Высшая школа менеджмента'),
    t('credentials.feat2', 'PMP-сертификация'),
    t('credentials.feat3', 'Опыт работы в Big 4'),
    t('credentials.feat4', 'Эксперт Forbes и РБК'),
    t('credentials.feat5', '80% клиентов возвращаются')
  ]

  return (
    <section className="tile-light">
      <div className="container">
        <div className="credentials-section">
          <div className="stats-cards">
            {stats.map((s, i) => (
              <div className="stats-card" key={i}>
                <span className="stats-card-num">{s.num}</span>
                <span className="stats-card-label">{s.label}</span>
              </div>
            ))}
          </div>

          <h2 className="features-title">{t('credentials.heading', 'Почему выбирают меня')}</h2>

          <ul className="features-list">
            {features.map((f, i) => (
              <li className="feature-item" key={i}>
                <span className="feature-check">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2 8 6 12 14 4" />
                  </svg>
                </span>
                <span className="feature-text">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CredentialsText
