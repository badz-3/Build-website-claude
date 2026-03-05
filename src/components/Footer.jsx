import { Link } from 'react-router-dom'

const services = [
  { label: 'Web Development', to: '/services' },
  { label: 'Mobile Apps', to: '/services' },
  { label: 'UI/UX Design', to: '/services' },
  { label: 'Cloud & DevOps', to: '/services' },
  { label: 'AI Integration', to: '/services' },
]

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-accent/[0.12] pt-16 pb-10 px-8">
      <div className="max-w-site mx-auto">
        <div className="grid gap-12 mb-12" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 no-underline mb-5">
              <div className="w-8 h-8 rounded-[7px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M3 10L8 5L13 10L18 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 15L8 10L13 15L18 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </div>
              <span className="font-display font-bold text-[17px] text-primary">NexusLab</span>
            </Link>
            <p className="text-muted text-[14px] leading-[1.75] max-w-[280px]">
              We build bespoke digital products that drive growth. Your vision, engineered to perfection.
            </p>
            <div className="flex gap-3.5 mt-6">
              <a href="#" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-muted mb-5">Services</h4>
            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              {services.map(s => (
                <li key={s.label}><Link to={s.to} className="footer-link">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-muted mb-5">Company</h4>
            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              {company.map(c => (
                <li key={c.label}><Link to={c.to} className="footer-link">{c.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-muted mb-5">Contact</h4>
            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              <li><a href="mailto:hello@nexuslab.io" className="footer-link">hello@nexuslab.io</a></li>
              <li><a href="tel:+15551234567" className="footer-link">+1 (555) 123-4567</a></li>
              <li><span className="text-muted text-[14px]">123 Tech Street, SF, CA</span></li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-accent/10">
          <p className="text-[13px] text-muted m-0">&copy; 2026 NexusLab. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="footer-link text-[13px]">Privacy Policy</a>
            <a href="#" className="footer-link text-[13px]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
