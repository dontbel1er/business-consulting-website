import { useTranslation } from 'react-i18next'

function TrustBadges() {
  const { t } = useTranslation()

  const stats = [
    {
      num: '12+',
      label: t('trust.years', 'лет консалтинга')
    },
    {
      num: '150+',
      label: t('trust.projects', 'реализованных проектов')
    },
    {
      num: '80%',
      label: t('trust.retention', 'клиентов возвращаются')
    },
    {
      num: '3x',
      label: t('trust.growth', 'средний рост прибыли')
    }
  ]

  const badges = [
    {
      title: t('trust.badge1_title', 'MBA'),
      desc: t('trust.badge1_desc', 'Высшая школа менеджмента')
    },
    {
      title: t('trust.badge2_title', 'PMP'),
      desc: t('trust.badge2_desc', 'Сертифицированный управляющий проектами')
    },
    {
      title: t('trust.badge3_title', 'Big 4'),
      desc: t('trust.badge3_desc', 'Опыт работы в «большой четвёрке»')
    },
    {
      title: t('trust.badge4_title', 'Forbes'),
      desc: t('trust.badge4_desc', 'Эксперт в рейтингах Forbes')
    }
  ]

  return (
    <section className="tile-parchment">
      <div className="container">
        <div className="section-header">
          <h2>{t('trust.title', 'Почему доверяют')}</h2>
          <p>{t('trust.lead', 'Реальный опыт и измеримые результаты.')}</p>
        </div>

        <div className="trust-stats">
          {stats.map((s, idx) => (
            <div className="trust-stat" key={idx}>
              <span className="trust-stat-num">{s.num}</span>
              <span className="trust-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="trust-badges">
          {badges.map((b, idx) => (
            <div className="trust-badge" key={idx}>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
