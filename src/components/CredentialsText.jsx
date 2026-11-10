import { useTranslation } from 'react-i18next'
import { CountUp, Reveal } from '../lib/motion.jsx'

function CredentialsText() {
  const { t } = useTranslation()

  const stats = [
    { value: 12, suffix: '+', label: t('credentials.stat1', 'лет опыта') },
    { value: 150, suffix: '+', label: t('credentials.stat2', 'проектов') },
    { value: 3, suffix: 'x', label: t('credentials.stat3', 'рост прибыли') }
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
          <Reveal>
            <div className="stats-cards">
              {stats.map((s) => (
                <div className="stats-card" key={s.label}>
                  <span className="stats-card-num">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="stats-card-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="t-display-md features-title">
              {t('credentials.heading', 'Почему выбирают меня')}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="features-list">
              {features.map((f) => (
                <li className="feature-item" key={f}>
                  <span className="feature-check">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3.5 10.5 8 15 16.5 5.5" />
                    </svg>
                  </span>
                  <span className="feature-text">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default CredentialsText
