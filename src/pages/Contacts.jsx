import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero.jsx'
import ContactsGrid from '../components/ContactsGrid.jsx'
import YandexMap from '../components/YandexMap.jsx'

function Contacts() {
  const { t } = useTranslation()

  return (
    <>
      <Hero
        showActions={false}
        title={t('contacts.title')}
        lead={t('contacts.lead')}
      />
      <ContactsGrid />
      <section className="tile-parchment section-follow">
        <div className="container">
          <YandexMap />
        </div>
      </section>
    </>
  )
}

export default Contacts
