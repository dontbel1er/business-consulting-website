import Hero from '../components/Hero.jsx'
import ContactsGrid from '../components/ContactsGrid.jsx'
import YandexMap from '../components/YandexMap.jsx'

function Contacts() {
  return (
    <>
      <Hero showActions={false} />
      <ContactsGrid />
      <section className="tile-parchment">
        <div className="container">
          <YandexMap />
        </div>
      </section>
    </>
  )
}

export default Contacts
