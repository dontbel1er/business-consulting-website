import { useTranslation } from 'react-i18next'
import { Reveal } from '../lib/motion.jsx'

function ContactsGrid() {
  const { t } = useTranslation()

  const telegramPath =
    'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'
  const youtubePath =
    'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  const vkPath =
    'M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.033-1.49-1.171-1.744-1.171-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.993 4 8.535c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.203.508.322.508.22 0 .407-.136.814-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.44 0 .542.22.44.644-.186 1.017-2.032 3.674-2.032 3.674-.169.288-.237.406 0 .712.169.237 1.016 1.015 1.575 1.727.97 1.287 1.422 2.286 1.592 2.678.17.39-.085.644-.475.644z'

  const cards = [
    {
      key: 'email',
      label: t('contacts.email_label'),
      value: (
        <a href="mailto:birukov.nikolay@gmail.com">something@gmail.com</a>
      ),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
          <path d="m3 7 8.1 5.6a1.6 1.6 0 0 0 1.8 0L21 7" />
        </svg>
      )
    },
    {
      key: 'phone',
      label: t('contacts.phone_label'),
      value: <a href="tel:+79218458135">+7 999 999 999</a>,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.6 3h2.7l1.6 4-2 1.4a12 12 0 0 0 5.7 5.7l1.4-2 4 1.6v2.7a2.4 2.4 0 0 1-2.6 2.4A17.4 17.4 0 0 1 4.2 5.6 2.4 2.4 0 0 1 6.6 3Z" />
        </svg>
      )
    },
    {
      key: 'address',
      label: t('contacts.address_label'),
      value: <p>{t('contacts.address_value')}</p>,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      )
    },
    {
      key: 'telegram',
      label: t('contacts.telegram_label'),
      value: (
        <a href="" target="_blank" rel="noopener noreferrer">
          
        </a>
      ),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={telegramPath} />
        </svg>
      )
    },
    {
      key: 'youtube',
      label: 'YouTube',
      value: (
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      ),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={youtubePath} />
        </svg>
      )
    },
    {
      key: 'vk',
      label: 'VK',
      value: (
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          vk.com
        </a>
      ),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={vkPath} />
        </svg>
      )
    }
  ]

  return (
    <section className="tile-parchment">
      <div className="container">
        <div className="contacts-grid">
          {cards.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.05}>
              <div className="contact-card">
                <span className="contact-icon">{c.icon}</span>
                <h3>{c.label}</h3>
                {c.value}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactsGrid
