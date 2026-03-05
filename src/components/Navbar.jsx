import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-site mx-auto px-8 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 10L8 5L13 10L18 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 15L8 10L13 15L18 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            </svg>
          </div>
          <span className="font-display font-bold text-[18px] text-primary" style={{ letterSpacing: '-0.02em' }}>
            NexusLab
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-9">
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/portfolio" className="nav-link">Work</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}
