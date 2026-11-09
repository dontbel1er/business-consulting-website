import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LeadsProvider } from './contexts/LeadsContext.jsx'
import './i18n'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LeadsProvider>
      <App />
    </LeadsProvider>
  </StrictMode>,
)
