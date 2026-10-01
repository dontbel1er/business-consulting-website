import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import LeadForm from './LeadForm.jsx'

function Header() {
  const { t, i18n } = useTranslation()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <header className="global-nav">
        <div className="nav-inner">
          <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>{t('logo')}</NavLink>

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
            <button
              className="nav-burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`nav-dropdown ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>{t('nav.services', 'Услуги')}</NavLink>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>{t('nav.portfolio')}</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</NavLink>
          <NavLink to="/contacts" onClick={() => setMenuOpen(false)}>{t('nav.contacts')}</NavLink>
        </div>
      </header>
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default Header
