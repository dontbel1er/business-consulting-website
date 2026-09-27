import { useTranslation } from 'react-i18next'

function ContactsGrid() {
  const { t } = useTranslation()

  return (
    <section className="tile-parchment">
      <div className="container">
        <div className="contacts-grid">
          <div className="contact-card">
            <h3>{t('contacts.email_label')}</h3>
            <p><a href="mailto:birukov.nikolay@gmail.com">birukov.nikolay@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <h3>{t('contacts.phone_label')}</h3>
            <p>+7 921 845 8135</p>
          </div>
          <div className="contact-card">
            <h3>{t('contacts.address_label')}</h3>
            <p>{t('contacts.address_value')}</p>
          </div>
          <div className="contact-card">
            <h3>{t('contacts.telegram_label')}</h3>
            <a href="https://t.me/nikolyabb" target="_blank" rel="noopener noreferrer" className="contact-telegram-link">
              <svg className="contact-telegram-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            
            </a>
          </div>
          <div className="contact-card">
            <h3>YouTube</h3>
            <svg className="contact-youtube-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <div className="contact-card">
            <h3>VK</h3>
            <svg className="contact-vk-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.033-1.49-1.171-1.744-1.171-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.993 4 8.535c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.203.508.322.508.22 0 .407-.136.814-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.44 0 .542.22.44.644-.186 1.017-2.032 3.674-2.032 3.674-.169.288-.237.406 0 .712.169.237 1.016 1.015 1.575 1.727.97 1.287 1.422 2.286 1.592 2.678.17.39-.085.644-.475.644z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsGrid
