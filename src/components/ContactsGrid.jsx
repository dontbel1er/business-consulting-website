import { useTranslation } from 'react-i18next'
import { Reveal } from '../lib/motion.jsx'

function ContactsGrid() {
  const { t } = useTranslation()

  const cards = [
    {
      key: 'email',
      label: t('contacts.email_label'),
      value: <a href="mailto:something@gmail.com">something@gmail.com</a>
    },
    {
      key: 'phone',
      label: t('contacts.phone_label'),
      value: <a href="tel:+79999999999">+7 999 999 999</a>
    },
    {
      key: 'address',
      label: t('contacts.address_label'),
      value: <p>{t('contacts.address_value')}</p>
    }
  ]

  return (
    <div className="contacts-grid">
      {cards.map((c, i) => (
        <Reveal key={c.key} delay={i * 0.05}>
          <div className="contact-card">
            <h3>{c.label}</h3>
            {c.value}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default ContactsGrid
