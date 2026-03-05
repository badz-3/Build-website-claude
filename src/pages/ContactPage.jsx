import { useState } from 'react'
import FadeUp from '../components/FadeUp'

const fieldCls = 'w-full px-4 py-3 text-[15px] text-primary font-body rounded-[10px] outline-none transition-colors duration-200 border border-accent/25 focus:border-accent/70 placeholder:text-muted/50'
const fieldStyle = { background: 'rgba(255,255,255,0.04)' }

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@nexuslab.io',
    href: 'mailto:hello@nexuslab.io',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Office',
    value: '123 Tech Street, San Francisco, CA 94105',
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle')
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
        setForm({ name: '', email: '', company: '', budget: '', message: '' })
      }
    } catch {
      setErrorMsg('Network error, please try again.')
      setStatus('error')
    }
  }

  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="py-[100px] px-8 relative overflow-hidden">
        <div className="glow-purple" style={{ width: '700px', height: '700px', top: '-200px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
        <div className="max-w-site mx-auto relative z-[1]">
          <FadeUp className="text-center max-w-[720px] mx-auto">
            <span className="section-tag">Contact Us</span>
            <h1 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.08] mb-6">
              Let's Build Something<br /><span className="grad-text">Amazing Together</span>
            </h1>
            <p className="text-[18px] text-muted leading-[1.75] max-w-[560px] mx-auto">
              Have a project in mind? We'd love to hear about it. Reach out and we'll get back to you within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 px-8">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {contactInfo.map(({ icon, label, value, href }, i) => (
              <FadeUp key={label} delay={i * 80}>
                <div className="card p-7 text-center">
                  <div className="w-[48px] h-[48px] rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(124,58,237,0.05))', border: '1px solid rgba(124,58,237,0.2)' }}>
                    {icon}
                  </div>
                  <div className="text-[13px] text-muted font-medium mb-1.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-[15px] text-primary font-semibold no-underline hover:text-accent-light" style={{ transition: 'color 0.2s ease' }}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-[15px] text-primary font-semibold">{value}</span>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-[120px] px-8">
        <div className="max-w-[780px] mx-auto">
          <FadeUp>
            <div className="cta-bg p-12 relative overflow-hidden">
              <div className="glow-purple" style={{ width: '400px', height: '400px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
              <div className="relative z-[1]">
                <div className="text-center mb-10">
                  <h2 className="text-[28px] font-bold mb-3">
                    Tell Us About Your <span className="grad-text">Project</span>
                  </h2>
                  <p className="text-muted text-[15px] leading-[1.75] max-w-[440px] mx-auto">
                    Fill out the form below and we'll get back to you with a tailored proposal within 24 hours.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="text-[48px] mb-4">&#x2705;</div>
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
                        <input className={fieldCls} style={fieldStyle} type="text" name="name" placeholder="Jane Smith"
                          value={form.name} onChange={handleChange} required />
                      </div>
                      <div>
                        <label className="block text-[13px] text-muted mb-1.5">
                          Email <span className="text-pink">*</span>
                        </label>
                        <input className={fieldCls} style={fieldStyle} type="email" name="email" placeholder="jane@company.com"
                          value={form.email} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-[13px] text-muted mb-1.5">
                          Company <span className="text-muted font-normal">(optional)</span>
                        </label>
                        <input className={fieldCls} style={fieldStyle} type="text" name="company" placeholder="Acme Corp"
                          value={form.company} onChange={handleChange} />
                      </div>
                      <div>
                        <label className="block text-[13px] text-muted mb-1.5">
                          Budget Range <span className="text-muted font-normal">(optional)</span>
                        </label>
                        <select name="budget" value={form.budget} onChange={handleChange}
                          className={`${fieldCls} cursor-pointer`} style={fieldStyle}>
                          <option value="">Select budget range</option>
                          <option value="10k-25k">$10K – $25K</option>
                          <option value="25k-50k">$25K – $50K</option>
                          <option value="50k-100k">$50K – $100K</option>
                          <option value="100k+">$100K+</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-[13px] text-muted mb-1.5">
                        Project Details <span className="text-pink">*</span>
                      </label>
                      <textarea
                        className={`${fieldCls} resize-y min-h-[140px]`}
                        style={fieldStyle}
                        name="message"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
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

                    <div className="flex gap-4 justify-center">
                      <button type="submit" className="btn-primary"
                        disabled={status === 'loading'}
                        style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                        {status === 'loading' ? 'Sending…' : (
                          <>
                            Send Message
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
