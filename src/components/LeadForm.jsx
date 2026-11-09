import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'motion/react'
import { useLeads } from '../contexts/LeadsContext.jsx'
import { EASE_IN, EASE_OUT, useCalm } from '../lib/motion.jsx'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'

function LeadForm({ isOpen, onClose, defaultService = '' }) {
  const { t } = useTranslation()
  const { addLead } = useLeads()
  const calm = useCalm()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const modalRef = useRef(null)
  const firstFieldRef = useRef(null)

  /* Reset the sheet every time it opens. */
  useEffect(() => {
    if (!isOpen) return
    setForm({ name: '', phone: '', email: '', service: defaultService, message: '' })
    setSubmitted(false)
    setErrors({})
    setTouched({})
  }, [isOpen, defaultService])

  /* Focus the first field once the material has arrived. */
  useEffect(() => {
    if (!isOpen) return
    const id = window.setTimeout(() => firstFieldRef.current?.focus(), 220)
    return () => window.clearTimeout(id)
  }, [isOpen])

  /* Escape closes; Tab is trapped inside the modal. */
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const nodes = modalRef.current?.querySelectorAll(FOCUSABLE)
      if (!nodes || nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  /* The page behind the sheet must not move. */
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isOpen])

  const validateField = (field, values) => {
    if (field === 'name') return values.name.trim() ? null : t('form.error_name')
    if (field === 'phone') return values.phone.trim() ? null : t('form.error_phone')
    if (field === 'service') return values.service ? null : t('form.error_service')
    return null
  }

  const validate = (values) => {
    const errs = {}
    for (const field of ['name', 'phone', 'service']) {
      const err = validateField(field, values)
      if (err) errs[field] = err
    }
    return errs
  }

  const update = (field, value) => {
    const next = { ...form, [field]: value }
    setForm(next)
    /* Validate inline, the moment the field is satisfied — not on submit. */
    if (touched[field]) {
      const err = validateField(field, next)
      setErrors((prev) => {
        const copy = { ...prev }
        if (err) copy[field] = err
        else delete copy[field]
        return copy
      })
    }
  }

  const blur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const err = validateField(field, form)
    setErrors((prev) => {
      const copy = { ...prev }
      if (err) copy[field] = err
      else delete copy[field]
      return copy
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    setTouched({ name: true, phone: true, service: true })
    if (Object.keys(errs).length > 0) {
      const firstInvalid = modalRef.current?.querySelector('.lead-form-field.invalid input, .lead-form-field.invalid select')
      firstInvalid?.focus()
      return
    }
    addLead(form)
    setSubmitted(true)
  }

  const services = t('form.service_list', { returnObjects: true })

  const fieldProps = (field) => ({
    value: form[field],
    onChange: (e) => update(field, e.target.value),
    onBlur: () => blur(field),
  })

  const enter = calm
    ? { duration: 0.15, ease: EASE_OUT }
    : { type: 'spring', bounce: 0, duration: 0.42 }
  const exit = calm
    ? { duration: 0.12, ease: EASE_IN }
    : { duration: 0.22, ease: EASE_IN }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lead-form-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: calm ? 0.15 : 0.24, ease: EASE_OUT }}
        >
          <motion.div
            className="lead-form-modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            onClick={(e) => e.stopPropagation()}
            initial={calm ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            animate={calm ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={calm ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            transition={enter}
          >
            <button className="lead-form-close" onClick={onClose} aria-label="Close">
              ×
            </button>

            {submitted ? (
              <motion.div
                className="lead-form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={enter}
              >
                <div className="lead-form-success-mark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 12.5 9.5 18 20 6.5" />
                  </svg>
                </div>
                <h3>{t('form.success_title')}</h3>
                <p>{t('form.success_text')}</p>
                <button className="btn btn-secondary" style={{ marginTop: 24 }} onClick={onClose}>
                  {t('form.close')}
                </button>
              </motion.div>
            ) : (
              <>
                <h3 id="lead-form-title">{t('form.title')}</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className={`lead-form-field ${errors.name ? 'invalid' : ''}`}>
                    <label htmlFor="lead-name">{t('form.name')} *</label>
                    <input
                      id="lead-name"
                      ref={firstFieldRef}
                      type="text"
                      autoComplete="name"
                      placeholder={t('form.name_placeholder')}
                      {...fieldProps('name')}
                    />
                    {errors.name && <span className="lead-form-error">{errors.name}</span>}
                  </div>

                  <div className={`lead-form-field ${errors.phone ? 'invalid' : ''}`}>
                    <label htmlFor="lead-phone">{t('form.phone')} *</label>
                    <input
                      id="lead-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={t('form.phone_placeholder')}
                      {...fieldProps('phone')}
                    />
                    {errors.phone && <span className="lead-form-error">{errors.phone}</span>}
                  </div>

                  <div className="lead-form-field">
                    <label htmlFor="lead-email">{t('form.email')}</label>
                    <input
                      id="lead-email"
                      type="email"
                      autoComplete="email"
                      placeholder={t('form.email_placeholder')}
                      {...fieldProps('email')}
                    />
                  </div>

                  <div className={`lead-form-field ${errors.service ? 'invalid' : ''}`}>
                    <label htmlFor="lead-service">{t('form.service')} *</label>
                    <select id="lead-service" {...fieldProps('service')}>
                      <option value="">{t('form.service_placeholder')}</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <span className="lead-form-error">{errors.service}</span>}
                  </div>

                  <div className="lead-form-field">
                    <label htmlFor="lead-message">{t('form.message')}</label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      placeholder={t('form.message_placeholder')}
                      {...fieldProps('message')}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary lead-form-submit">
                    {t('form.submit')}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default LeadForm
