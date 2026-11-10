import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero.jsx'
import ContactsGrid from '../components/ContactsGrid.jsx'
import YandexMap from '../components/YandexMap.jsx'

function Contacts() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero остаётся белым — фон меняется только под карточками контактов */}
      <Hero
        showActions={false}
        title={t('contacts.title')}
        lead={t('contacts.lead')}
      />
      <section className="contacts-section">
        <div className="container">
          <ContactsGrid />
          <div className="contacts-map">
            <YandexMap />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts
