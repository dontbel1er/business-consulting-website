import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero.jsx'
import PortfolioGrid from '../components/PortfolioGrid.jsx'

function Portfolio() {
  const { t } = useTranslation()

  return (
    <>
      <Hero
        showActions={false}
        title={t('portfolio.title')}
        lead={t('portfolio.lead')}
      />
      <PortfolioGrid />
    </>
  )
}

export default Portfolio
