import { useTranslation } from 'react-i18next'

function Roadmap() {
  const { t } = useTranslation()

  const tags = [
    t('roadmap.tag1', 'Стратегия'),
    t('roadmap.tag2', 'Аудит'),
    t('roadmap.tag3', 'Рост')
  ]

  return (
    <section className="tile-light">
      <div className="container">
        <div className="roadmap-card">
          {/* Верхняя часть — Header */}
          <div className="roadmap-header">
            <span className="roadmap-brand">{t('logo', 'BConsult')}</span>

            <div className="roadmap-tags">
              {tags.map((tag, i) => (
                <span className="roadmap-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Основная информация */}
          <div className="roadmap-body">
            <h1 className="roadmap-title">{t('roadmap.title', 'Консалтинг для роста бизнеса')}</h1>

            <p className="roadmap-subtitle">
              {t('roadmap.subtitle', 'Стратегический аудит + управленческий консалтинг')}
            </p>

            <p className="roadmap-desc">
              {t('roadmap.desc', 'Комплексная диагностика бизнес-процессов, выявление узких мест и разработка плана масштабирования. Работаем с компаниями от стартапов до среднего бизнеса.')}
            </p>

            <div className="roadmap-meta">
              <div className="roadmap-meta-col">
                <span className="roadmap-meta-label">{t('roadmap.meta_region', 'География')}</span>
                <span className="roadmap-meta-value">{t('roadmap.meta_region_val', 'Россия, СНГ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
