import { useState } from 'react'
import FadeUp from './FadeUp'

const fieldCls = 'w-full px-4 py-3 text-[15px] text-primary font-body rounded-[10px] outline-none transition-colors duration-200 border border-accent/25 focus:border-accent/70 placeholder:text-muted/50'
const fieldStyle = { background: 'rgba(255,255,255,0.04)' }

export default function CTASection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setErrorMsg(data.message || 'Something went wrong, please try again.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ name: '', email: '', company: '', message: '' })
      }
    } catch {
      setErrorMsg('Network error, please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-[120px] px-8">
      <div className="max-w-[960px] mx-auto">
        <FadeUp>
          <div className="cta-bg p-16 relative overflow-hidden">
            <div className="glow-purple" style={{ width: '400px', height: '400px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }} />
            <div className="relative z-[1]">
              <div className="text-center mb-12">
                <span className="section-tag">Let's Work Together</span>
                <h2 className="text-[clamp(36px,4vw,60px)] font-bold leading-[1.1] mb-4">
                  Ready to Build<br /><span className="grad-text">Something Amazing?</span>
                </h2>
                <p className="text-[17px] text-muted max-w-[480px] mx-auto leading-[1.75]">
                  Tell us about your project. We'll get back to you within 24 hours with a tailored proposal.
                </p>
              </div>

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="text-[48px] mb-4">✅</div>
                  <h3 className="text-[22px] font-bold mb-2">Message sent!</h3>
                  <p className="text-muted text-[15px]">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 bg-transparent border-0 text-accent-light cursor-pointer text-[14px] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[13px] text-muted mb-1.5">
                        Name <span className="text-pink">*</span>
                      </label>
                      <input
                        className={fieldCls}
                        style={fieldStyle}
                        type="text" name="name" placeholder="Jane Smith"
                        value={form.name} onChange={handleChange} required
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-muted mb-1.5">
                        Email <span className="text-pink">*</span>
                      </label>
                      <input
                        className={fieldCls}
                        style={fieldStyle}
                        type="email" name="email" placeholder="jane@company.com"
                        value={form.email} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-[13px] text-muted mb-1.5">
                      Company <span className="text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      className={fieldCls}
                      style={fieldStyle}
                      type="text" name="company" placeholder="Acme Corp"
                      value={form.company} onChange={handleChange}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[13px] text-muted mb-1.5">
                      Message <span className="text-pink">*</span>
                    </label>
                    <textarea
                      className={`${fieldCls} resize-y min-h-[120px]`}
                      style={fieldStyle}
                      name="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message} onChange={handleChange}
                      required maxLength={2000}
                    />
                    <div className="text-right text-[12px] text-muted mt-1">
                      {form.message.length}/2000
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mb-4 px-4 py-3 rounded-lg text-[14px] text-red-300 border border-red-500/30 bg-red-500/10">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex gap-4 justify-center flex-wrap">
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={status === 'loading'}
                      style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                    >
                      {status === 'loading' ? 'Sending…' : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>
                    <a href="tel:+15551234567" className="btn-ghost">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.3 3.7a1 1 0 0 0-1.4 0L3 5.6a10.8 10.8 0 0 0 7.4 7.4l1.9-1.9a1 1 0 0 0 0-1.4L10.7 8a1 1 0 0 0-1.4 0l-.7.7a5.1 5.1 0 0 1-1.3-1.3l.7-.7a1 1 0 0 0 0-1.4L6.3 3.7z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      Schedule a Call
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
