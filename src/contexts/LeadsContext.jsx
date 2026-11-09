import { createContext, useContext, useState } from 'react'

const LeadsContext = createContext(null)

export function LeadsProvider({ children }) {
  const [leads, setLeads] = useState([
    { id: 1, name: 'Иван Петров', phone: '+7 921 123 4567', email: 'ivan@example.com', service: 'Стратегический консалтинг', status: 'new', date: '2024-10-25T14:30:00', message: 'Хочу обсудить стратегию развития на 3 года' },
    { id: 2, name: 'Мария Сидорова', phone: '+7 921 234 5678', email: 'maria@example.com', service: 'Маркетинг и брендинг', status: 'in_progress', date: '2024-10-24T10:15:00', message: 'Нужен ребрендинг и SMM для ресторана' },
    { id: 3, name: 'Алексей Кузнецов', phone: '+7 921 345 6789', email: 'alex@example.com', service: 'Финансовый консалтинг', status: 'done', date: '2024-10-22T09:00:00', message: 'Аудит финансов перед инвестраундом' },
  ])

  const addLead = (lead) => {
    const newLead = {
      ...lead,
      id: Date.now(),
      status: 'new',
      date: new Date().toISOString()
    }
    setLeads((prev) => [newLead, ...prev])
    return newLead
  }

  const updateLeadStatus = (id, status) => {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: status } : l)))
  }

  const deleteLead = (id) => {
    setLeads((prev) => prev.filter((l) => l.id !== id))
  }

  return (
    <LeadsContext.Provider value={{ leads, addLead, updateLeadStatus, deleteLead }}>
      {children}
    </LeadsContext.Provider>
  )
}

export function useLeads() {
  const ctx = useContext(LeadsContext)
  if (!ctx) throw new Error('useLeads must be inside <LeadsProvider>')
  return ctx
}
