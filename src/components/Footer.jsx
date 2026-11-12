import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Reveal } from '../lib/motion.jsx'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <Reveal>
          <div className="footer-grid">
            <div className="footer-nav">
              <h5>{t('footer.nav_title', 'Navigation')}</h5>
              <ul>
                <li><Link to="/services">{t('nav.services', 'Services')}</Link></li>
                <li><Link to="/portfolio">{t('nav.portfolio', 'Portfolio')}</Link></li>
                <li><Link to="/about">{t('nav.about', 'About')}</Link></li>
                <li><Link to="/contacts">{t('nav.contacts', 'Contacts')}</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h5>{t('footer.contact_title', 'Contacts')}</h5>
              <ul>
                <li><a href="tel:+79999999999">+7 999 999 999</a></li>
                <li><a href="mailto:something@gmail.com">something@gmail.com</a></li>
                <li><a>{t('contacts.address_value')}</a></li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <div className="footer-meta">
            <p className="footer-copy">{t('footer.copy', '© 2026 Bconsult. All rights reserved.')}</p>
            {/* Заглушка — заменить на реальный адрес страницы политики */}
            <a
              className="footer-privacy"
              href="#"
              onClick={(e) => e.preventDefault()}
              title={t('footer.privacy_placeholder', 'Ссылка-заглушка: укажите адрес страницы политики конфиденциальности')}
            >
              {t('footer.privacy', 'Политика конфиденциальности')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
