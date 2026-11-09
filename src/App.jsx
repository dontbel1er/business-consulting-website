import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'motion/react'
import { LeadsProvider } from './contexts/LeadsContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import ServiceCatalog from './pages/ServiceCatalog.jsx'
import { useCalm } from './lib/motion.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function PageTitle() {
  const { t } = useTranslation()
  const location = useLocation()
  const pathMap = {
    '/': 'meta.title_home',
    '/services': 'meta.title_services',
    '/portfolio': 'meta.title_portfolio',
    '/about': 'meta.title_about',
    '/contacts': 'meta.title_contacts'
  }
  useEffect(() => {
    const key = pathMap[location.pathname] || 'meta.title_home'
    document.title = t(key)
  }, [location.pathname, t])
  return null
}

function Shell() {
  const location = useLocation()
  const calm = useCalm()

  return (
    <>
      <ScrollToTop />
      <PageTitle />
      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={calm ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={calm ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={calm ? { duration: 0.15 } : { type: 'spring', bounce: 0, duration: 0.4 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServiceCatalog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}

export default App
