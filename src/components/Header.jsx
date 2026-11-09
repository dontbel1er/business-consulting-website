import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import LeadForm from './LeadForm.jsx'
import { SPRING } from '../lib/motion.jsx'

const NAV_ITEMS = [
  { to: '/services', key: 'nav.services', fallback: 'Услуги' },
  { to: '/portfolio', key: 'nav.portfolio', fallback: 'Портфолио' },
  { to: '/about', key: 'nav.about', fallback: 'Обо мне' },
  { to: '/contacts', key: 'nav.contacts', fallback: 'Контакты' }
]

function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const linksRef = useRef(null)
  const linkEls = useRef([])
  const [indicator, setIndicator] = useState({ x: 0, width: 0, opacity: 0 })

  const changeLang = (lng) => i18n.changeLanguage(lng)

  /* The bar condenses and turns to glass once content passes beneath it. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close the sheet whenever the route or the language changes. */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, i18n.language])

  /* The sheet only exists on narrow viewports. */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 834px)')
    const sync = () => { if (mq.matches) setMenuOpen(false) }
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  /* The active underline is measured, then handed to a spring. */
  useLayoutEffect(() => {
    const measure = () => {
      const list = linksRef.current
      if (!list) return
      const active = linkEls.current.find((el) => el && el.classList.contains('active'))
      if (!active) {
        setIndicator((p) => ({ ...p, opacity: 0 }))
        return
      }
      setIndicator({ x: active.offsetLeft, width: active.offsetWidth, opacity: 1 })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (linksRef.current) ro.observe(linksRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [location.pathname, i18n.language, t])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header className={`global-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
            {t('logo')}
          </NavLink>

          <nav className="nav-links" ref={linksRef}>
            {NAV_ITEMS.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                ref={(el) => { linkEls.current[i] = el }}
              >
                {t(item.key, item.fallback)}
              </NavLink>
            ))}
            <motion.span
              className="nav-indicator"
              aria-hidden="true"
              initial={false}
              animate={{ x: indicator.x, width: indicator.width, opacity: indicator.opacity }}
              transition={{ type: 'spring', bounce: 0, duration: 0.45 }}
            />
          </nav>

          <div className="nav-right">
            <div className="lang-switcher" role="group" aria-label="Language">
              <button
                className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLang('ru')}
                aria-pressed={i18n.language === 'ru'}
              >
                RU
              </button>
              <button
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLang('en')}
                aria-pressed={i18n.language === 'en'}
              >
                EN
              </button>
            </div>

            <button className="nav-cta" onClick={() => setIsFormOpen(true)}>
              {t('nav.cta')}
            </button>

            <button
              className="nav-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
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

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-dropdown"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.12, duration: 0.42 }}
            >
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                  {t(item.key, item.fallback)}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default Header
