import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLeads } from '../contexts/LeadsContext.jsx'

function LeadForm({ isOpen, onClose, defaultService = '' }) {
  const { t } = useTranslation()
  const { addLead } = useLeads()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  if (!isOpen) return null

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = t('form.error_name')
    if (!form.phone.trim()) errs.phone = t('form.error_phone')
    if (!form.service) errs.service = t('form.error_service')
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    addLead(form)
    setSubmitted(true)
    setErrors({})
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', email: '', service: defaultService, message: '' })
      onClose()
    }, 2000)
  }

  const services = t('form.service_list', { returnObjects: true })

  return (
    <div className="lead-form-overlay" onClick={onClose}>
      <div className="lead-form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="lead-form-close" onClick={onClose}>×</button>
        {submitted ? (
          <div className="lead-form-success">
            <h3>{t('form.success_title')}</h3>
            <p>{t('form.success_text')}</p>
          </div>
        ) : (
          <>
            <h3>{t('form.title')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="lead-form-field">
                <label>{t('form.name')} *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t('form.name_placeholder')}
                />
                {errors.name && <span className="lead-form-error">{errors.name}</span>}
              </div>

              <div className="lead-form-field">
                <label>{t('form.phone')} *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={t('form.phone_placeholder')}
                />
                {errors.phone && <span className="lead-form-error">{errors.phone}</span>}
              </div>

              <div className="lead-form-field">
                <label>{t('form.email')}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t('form.email_placeholder')}
                />
              </div>

              <div className="lead-form-field">
                <label>{t('form.service')} *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">{t('form.service_placeholder')}</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <span className="lead-form-error">{errors.service}</span>}
              </div>

              <div className="lead-form-field">
                <label>{t('form.message')}</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('form.message_placeholder')}
                />
              </div>

              <button type="submit" className="btn btn-primary lead-form-submit">
                {t('form.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default LeadForm
