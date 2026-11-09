import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLeads } from '../contexts/LeadsContext.jsx'

const STATUS_LABELS = {
  new: { label: 'Новая', color: '#ff9500' },
  in_progress: { label: 'В обработке', color: '#007aff' },
  done: { label: 'Завершена', color: '#34c759' },
  cancelled: { label: 'Отменена', color: '#8e8e93' }
}

function LeadsDashboard() {
  const { t } = useTranslation()
  const { leads, updateLeadStatus, deleteLead } = useLeads()

  const [filterStatus, setFilterStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLead, setSelectedLead] = useState(null)

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus = filterStatus === 'all' || lead.status === filterStatus
      const matchesSearch =
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.service.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesStatus && matchesSearch
    })
  }, [leads, filterStatus, searchQuery])

  const handleStatusChange = (id, newStatus) => {
    updateLeadStatus(id, newStatus)
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus })
    }
  }

  const handleDelete = (id) => {
    deleteLead(id)
    if (selectedLead && selectedLead.id === id) setSelectedLead(null)
  }

  const formatDate = (iso) => {
    const d = new Date(iso)
    return d.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <>
      <section className="tile-light">
        <div className="container">
          <div className="leads-header">
            <h1>{t('leads.title', 'Заявки')}</h1>
            <div className="leads-toolbar">
              <input
                type="text"
                className="leads-search"
                placeholder={t('leads.search_placeholder', 'Поиск по имени, телефону, email...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="leads-filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">{t('leads.filter_all', 'Все статусы')}</option>
                {Object.entries(STATUS_LABELS).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="tile-parchment">
        <div className="container">
          <div className="leads-layout">
            <div className="leads-table-wrapper">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th>{t('leads.col_name', 'Имя')}</th>
                    <th>{t('leads.col_service', 'Услуга')}</th>
                    <th>{t('leads.col_status', 'Статус')}</th>
                    <th>{t('leads.col_date', 'Дата')}</th>
                    <th>{t('leads.col_actions', '')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className={selectedLead?.id === lead.id ? 'selected' : ''}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td>
                        <div className="leads-name">{lead.name}</div>
                        <div className="leads-contact">{lead.phone}</div>
                      </td>
                      <td>{lead.service}</td>
                      <td>
                        <span
                          className="leads-status-badge"
                          style={{ background: STATUS_LABELS[lead.status].color + '1a', color: STATUS_LABELS[lead.status].color }}
                        >
                          {STATUS_LABELS[lead.status].label}
                        </span>
                      </td>
                      <td>{formatDate(lead.date)}</td>
                      <td>
                        <button
                          className="leads-delete-btn"
                          onClick={(e) => { e.stopPropagation(); handleDelete(lead.id) }}
                          title="Удалить"
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="leads-empty">
                        {t('leads.empty', 'Ничего не найдено')}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {selectedLead && (
              <aside className="leads-detail">
                <h3>{selectedLead.name}</h3>
                <div className="leads-detail-row">
                  <span className="leads-detail-label">{t('leads.detail_phone', 'Телефон')}</span>
                  <span>{selectedLead.phone}</span>
                </div>
                <div className="leads-detail-row">
                  <span className="leads-detail-label">{t('leads.detail_email', 'Email')}</span>
                  <span>{selectedLead.email}</span>
                </div>
                <div className="leads-detail-row">
                  <span className="leads-detail-label">{t('leads.detail_service', 'Услуга')}</span>
                  <span>{selectedLead.service}</span>
                </div>
                <div className="leads-detail-row">
                  <span className="leads-detail-label">{t('leads.detail_date', 'Дата')}</span>
                  <span>{formatDate(selectedLead.date)}</span>
                </div>
                <div className="leads-detail-row">
                  <span className="leads-detail-label">{t('leads.detail_message', 'Сообщение')}</span>
                  <p className="leads-detail-message">{selectedLead.message}</p>
                </div>
                <div className="leads-detail-row">
                  <span className="leads-detail-label">{t('leads.detail_status', 'Статус')}</span>
                  <div className="leads-status-buttons">
                    {Object.entries(STATUS_LABELS).map(([key, { label, color }]) => (
                      <button
                        key={key}
                        className={`leads-status-btn ${selectedLead.status === key ? 'active' : ''}`}
                        style={{ '--status-color': color }}
                        onClick={() => handleStatusChange(selectedLead.id, key)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadsDashboard
