import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero.jsx'
import AboutContent from '../components/AboutContent.jsx'

function About() {
  const { t } = useTranslation()

  return (
    <>
      <Hero
        showActions={false}
        title={t('about.title')}
        lead={t('about.hero_lead')}
      />
      <AboutContent />
    </>
  )
}

export default About
