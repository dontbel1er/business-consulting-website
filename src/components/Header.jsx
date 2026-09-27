import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import LeadForm from './LeadForm.jsx'

function Header() {
  const { t, i18n } = useTranslation()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <header className="global-nav">
        <div className="nav-inner">
          <NavLink to="/" className="logo">{t('logo')}</NavLink>
          <nav className="nav-links">
            <NavLink to="/services">{t('nav.services', 'Услуги')}</NavLink>
            <NavLink to="/portfolio">{t('nav.portfolio')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/contacts">{t('nav.contacts')}</NavLink>
          </nav>
          <div className="nav-right">
            <div className="lang-switcher">
              <button
                className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLang('ru')}
              >
                RU
              </button>
              <button
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLang('en')}
              >
                EN
              </button>
            </div>
            <button className="nav-cta" onClick={() => setIsFormOpen(true)}>
              {t('nav.cta')}
            </button>
          </div>
        </div>
      </header>
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default Header
