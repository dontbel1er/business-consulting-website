import { useTranslation } from 'react-i18next'
import photoSrc from './photo_2024-10-26_15-06-30.jpg'

function AboutContent() {
  const { t } = useTranslation()

  return (
    <section className="tile-parchment">
      <div className="container">
        <div className="about-content">
          <img
            className="about-photo"
            src={photoSrc}
            alt={t('about.photo_alt', 'Фото')}
          />
          <div className="about-text">
            <h2>{t('about.title')}</h2>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
