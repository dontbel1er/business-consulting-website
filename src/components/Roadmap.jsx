import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LeadForm from './LeadForm.jsx'
import { Reveal } from '../lib/motion.jsx'

function Roadmap() {
  const { t } = useTranslation()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const tags = [
    t('roadmap.tag1', 'Стратегия'),
    t('roadmap.tag2', 'Аудит'),
    t('roadmap.tag3', 'Рост')
  ]

  const meta = [
    {
      label: t('roadmap.meta_region', 'География'),
      value: t('roadmap.meta_region_val', 'Россия, СНГ')
    },
    {
      label: t('roadmap.meta_format', 'Формат'),
      value: t('roadmap.meta_format_val', 'Проектно, под ключ')
    },
    {
      label: t('roadmap.meta_focus', 'Фокус'),
      value: t('roadmap.meta_focus_val', 'Рост и прибыль')
    }
  ]

  return (
    <>
      <section className="tile-dark">
        <div className="container">
          <div className="roadmap-card">
            <Reveal>
              <div className="roadmap-header">
                <span className="roadmap-brand">{t('logo', 'BConsult')}</span>
                <div className="roadmap-tags">
                  {tags.map((tag) => (
                    <span className="roadmap-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="roadmap-body">
                <h2 className="roadmap-title">{t('roadmap.title', 'Консалтинг для роста бизнеса')}</h2>

                <p className="roadmap-subtitle">
                  {t('roadmap.subtitle', 'Стратегический аудит + управленческий консалтинг')}
                </p>

                <p className="roadmap-desc">
                  {t('roadmap.desc', 'Комплексная диагностика бизнес-процессов, выявление узких мест и разработка плана масштабирования. Работаем с компаниями от стартапов до среднего бизнеса.')}
                </p>

                <div className="roadmap-actions">
                  <button className="btn btn-primary" onClick={() => setIsFormOpen(true)}>
                    {t('hero.cta_primary')}
                  </button>
                </div>

                <div className="roadmap-meta">
                  {meta.map((m) => (
                    <div className="roadmap-meta-col" key={m.label}>
                      <span className="roadmap-meta-label">{m.label}</span>
                      <span className="roadmap-meta-value">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default Roadmap
