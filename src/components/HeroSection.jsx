const barHeights = ['40%', '60%', '50%', '75%', '55%', '80%', '65%', '90%', '100%']

function HeroDashboard() {
  return (
    <div className="hero-device w-full max-w-[520px] bg-elevated">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-accent/15" style={{ background: '#111330' }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
        </div>
        <div className="flex-1 px-3 py-1 text-[11px] text-muted rounded-[6px] border border-accent/15 bg-accent/10">
          app.nexuslab.io/dashboard
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-5 grid gap-3 min-h-[280px]" style={{ gridTemplateColumns: '160px 1fr' }}>
        {/* Sidebar */}
        <div className="rounded-[10px] p-3.5 flex flex-col gap-2 border border-accent/12 bg-accent/[0.06]">
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-[7px] mb-1.5 bg-accent/20">
            <div className="w-2 h-2 rounded-full bg-accent-light" />
            <span className="text-[11px] font-semibold text-accent-light">Dashboard</span>
          </div>
          {['Analytics', 'Projects', 'Clients', 'Reports'].map(item => (
            <div key={item} className="flex items-center gap-2 px-2.5 py-[7px] rounded-[6px]">
              <div className="w-2 h-2 rounded-full bg-muted" />
              <span className="text-[11px] text-muted">{item}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-2.5">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Revenue',  value: '$284k', trend: '↑ 14.2%', bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.2)' },
              { label: 'Projects', value: '34',    trend: '↑ 6 new', bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)' },
              { label: 'Clients',  value: '62',    trend: '↑ 98% sat.', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)' },
            ].map(({ label, value, trend, bg, border }) => (
              <div key={label} className="rounded-lg p-3" style={{ background: bg, border: `1px solid ${border}` }}>
                <div className="text-[9px] text-muted mb-1 uppercase tracking-[0.05em]">{label}</div>
                <div className="text-[16px] font-bold text-primary font-display">{value}</div>
                <div className="text-[9px] mt-0.5 text-green-400">{trend}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg p-3.5 flex-1 border border-accent/15" style={{ background: 'rgba(13,15,39,0.8)' }}>
            <div className="text-[10px] text-muted mb-2.5 font-medium">MONTHLY REVENUE</div>
            <div className="flex items-end gap-1.5 h-20">
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[3px]"
                  style={{
                    height: h,
                    background: i === barHeights.length - 1
                      ? 'linear-gradient(180deg,#a78bfa,#7c3aed)'
                      : 'rgba(124,58,237,0.3)',
                    boxShadow: i === barHeights.length - 1 ? '0 0 10px rgba(124,58,237,0.5)' : undefined,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {['Jan', 'Mar', 'May', 'Jul', 'Sep'].map(m => (
                <span key={m} className="text-[8px] text-muted">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HeroSection() {
  return (
    <section className="grid-bg relative min-h-screen flex items-center overflow-hidden pt-[68px]">
      {/* Glow orbs */}
      <div className="glow-purple" style={{ width: '700px', height: '700px', top: '-150px', left: '-200px' }} />
      <div className="glow-cyan"   style={{ width: '500px', height: '500px', top: '200px',  right: '-100px' }} />
      <div className="glow-purple" style={{ width: '400px', height: '400px', bottom: 0,     right: '300px', opacity: 0.6 }} />

      <div className="max-w-site mx-auto px-8 py-20 grid grid-cols-2 gap-20 items-center w-full relative z-[1]">
        {/* Left */}
        <div>
          <div className="badge mb-7">
            <span className="badge-dot" />
            Available for new projects
          </div>

          <h1 className="text-[clamp(44px,5vw,72px)] font-bold leading-[1.08] mb-6">
            We Build<br />
            <span className="grad-text">Digital Products</span><br />
            That Matter
          </h1>

          <p className="text-[18px] text-muted max-w-[480px] leading-[1.75] mb-10">
            From concept to launch, we craft bespoke software solutions — web apps, mobile platforms, and AI-powered tools — that drive growth for startups and enterprises alike.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="btn-primary">Start a Project <ArrowRight /></a>
            <a href="#work"    className="btn-ghost">View Our Work <ArrowRight /></a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 mt-[52px] pt-9 border-t border-accent/15">
            {[
              { num: '100+', label: 'Projects shipped' },
              { num: '60+',  label: 'Happy clients' },
              { num: '98%',  label: 'Satisfaction rate' },
            ].map(({ num, label }, i) => (
              <div key={num} className="contents">
                {i > 0 && <div className="w-px h-10 bg-accent/20" />}
                <div>
                  <div className="grad-text font-display text-[28px] font-bold" style={{ letterSpacing: '-0.03em' }}>{num}</div>
                  <div className="text-[13px] text-muted mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dashboard mockup */}
        <div className="relative flex justify-center items-center">
          <HeroDashboard />

          {/* Floating badge — delivery */}
          <div className="absolute bottom-8 -left-6 rounded-xl px-4 py-3.5 border border-accent/35" style={{ background: 'rgba(13,15,39,0.95)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
            <div className="text-[10px] text-muted mb-1 font-semibold tracking-[0.06em] uppercase">Delivery</div>
            <div className="font-display text-[20px] font-bold text-primary">
              6–10 <span className="text-[13px] text-accent-light font-medium">weeks avg.</span>
            </div>
          </div>

          {/* Floating badge — stack */}
          <div className="absolute top-7 -right-5 rounded-xl px-4 py-3.5 border border-cyan/35" style={{ background: 'rgba(13,15,39,0.95)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
            <div className="text-[10px] text-muted mb-1 font-semibold tracking-[0.06em] uppercase">Stack</div>
            <div className="font-display text-[14px] font-semibold text-cyan">React · Node · AI</div>
          </div>
        </div>
      </div>
    </section>
  )
}
