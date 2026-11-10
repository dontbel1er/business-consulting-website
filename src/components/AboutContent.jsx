import { useTranslation } from 'react-i18next'
import photoSrc from './photo_2024-10-26_15-06-30.jpg'
import { Reveal } from '../lib/motion.jsx'

function AboutContent() {
  const { t } = useTranslation()

  return (
    <section className="tile-light">
      <div className="container">
        <div className="about-content">
          <Reveal>
            <img
              className="about-photo"
              src={photoSrc}
              alt={t('about.photo_alt', 'Фото')}
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="about-text">
              <h2 className="t-display-lg">{t('about.subtitle', 'Специализация и подход')}</h2>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
