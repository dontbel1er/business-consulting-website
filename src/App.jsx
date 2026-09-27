import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LeadsProvider } from './contexts/LeadsContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import ServiceCatalog from './pages/ServiceCatalog.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceCatalog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
