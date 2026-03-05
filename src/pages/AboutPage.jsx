import FadeUp from '../components/FadeUp'

const team = [
  {
    name: 'David Chen',
    role: 'CEO & Co-Founder',
    initials: 'DC',
    color: '#7c3aed',
    bio: 'Former engineering lead at Stripe. 12+ years building products that scale to millions of users.',
  },
  {
    name: 'Sarah Kim',
    role: 'CTO & Co-Founder',
    initials: 'SK',
    color: '#06b6d4',
    bio: 'Ex-Google engineer with deep expertise in distributed systems and cloud architecture.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Head of Design',
    initials: 'MR',
    color: '#ec4899',
    bio: 'Award-winning designer who led product design at Figma and Notion before joining NexusLab.',
  },
  {
    name: 'Emily Zhang',
    role: 'VP of Engineering',
    initials: 'EZ',
    color: '#a78bfa',
    bio: 'Full-stack architect with 10+ years shipping mission-critical applications across fintech and healthcare.',
  },
  {
    name: 'Alex Thompson',
    role: 'Lead AI Engineer',
    initials: 'AT',
    color: '#06b6d4',
    bio: 'ML researcher turned product engineer. Specializes in LLM integrations and intelligent automation.',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Client Success',
    initials: 'PP',
    color: '#ec4899',
    bio: 'Ensures every client partnership delivers measurable business outcomes. Previously at Accenture.',
  },
]

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Craft Over Speed',
    desc: 'We don\'t cut corners. Every line of code, every pixel, every interaction is intentional and polished.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Client Partnership',
    desc: 'We work as an extension of your team — transparent communication, shared goals, aligned incentives.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
      </svg>
    ),
    title: 'Technical Excellence',
    desc: 'We stay ahead of the curve with modern stacks, best practices, and continuous learning.',
  },
]

const milestones = [
  { year: '2019', title: 'Founded', desc: 'NexusLab started in a San Francisco co-working space with 3 engineers and a vision.' },
  { year: '2020', title: 'First Major Client', desc: 'Delivered a fintech platform that processed $2M in transactions within the first month.' },
  { year: '2021', title: 'Team of 15', desc: 'Expanded into design, DevOps, and AI capabilities. Moved to our first office.' },
  { year: '2023', title: '60+ Clients', desc: 'Surpassed 60 satisfied clients across fintech, healthtech, e-commerce, and logistics.' },
  { year: '2025', title: 'Global Reach', desc: 'Now a team of 35+, serving clients across North America, Europe, and Asia-Pacific.' },
]

export default function AboutPage() {
  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="py-[120px] px-8 relative overflow-hidden">
        <div className="glow-purple" style={{ width: '700px', height: '700px', top: '-200px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
        <div className="max-w-site mx-auto relative z-[1]">
          <FadeUp className="text-center max-w-[720px] mx-auto">
            <span className="section-tag">About Us</span>
            <h1 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.08] mb-6">
              Building the Future,<br /><span className="grad-text">One Product at a Time</span>
            </h1>
            <p className="text-[18px] text-muted leading-[1.75] max-w-[600px] mx-auto">
              NexusLab is a software house that turns ambitious ideas into world-class digital products. We combine technical depth with design craft to deliver software that matters.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-[100px] px-8">
        <div className="max-w-site mx-auto">
          <FadeUp>
            <div className="grid grid-cols-4 gap-6">
              {[
                { num: '100+', label: 'Projects Delivered' },
                { num: '60+', label: 'Happy Clients' },
                { num: '35+', label: 'Team Members' },
                { num: '7+', label: 'Years in Business' },
              ].map(({ num, label }) => (
                <div key={label} className="card p-8 text-center">
                  <div className="stat-num grad-text mb-2">{num}</div>
                  <div className="text-muted text-[14px] font-medium">{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-[100px] px-8 relative overflow-hidden">
        <div className="glow-cyan" style={{ width: '500px', height: '500px', bottom: '-100px', left: '-100px', opacity: 0.3 }} />
        <div className="max-w-site mx-auto relative z-[1]">
          <FadeUp className="text-center mb-[72px]">
            <span className="section-tag">Our Values</span>
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1]">
              What Drives <span className="grad-text">Our Work</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="card p-9 h-full">
                  <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6"
                    style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(124,58,237,0.05))', border: '1px solid rgba(124,58,237,0.25)' }}>
                    {icon}
                  </div>
                  <h3 className="text-[20px] font-bold mb-3">{title}</h3>
                  <p className="text-muted text-[15px] leading-[1.75]">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[100px] px-8">
        <div className="max-w-[720px] mx-auto">
          <FadeUp className="text-center mb-[72px]">
            <span className="section-tag">Our Journey</span>
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1]">
              Key <span className="grad-text">Milestones</span>
            </h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-accent/20" />
            {milestones.map(({ year, title, desc }, i) => (
              <FadeUp key={year} delay={i * 100}>
                <div className="relative pl-[72px] pb-12 last:pb-0">
                  <div className="absolute left-[16px] top-1 w-[25px] h-[25px] rounded-full border-2 border-accent flex items-center justify-center"
                    style={{ background: 'var(--bg-base)' }}>
                    <div className="w-[9px] h-[9px] rounded-full bg-accent" />
                  </div>
                  <span className="text-accent-light text-[13px] font-semibold tracking-[0.08em]">{year}</span>
                  <h3 className="text-[20px] font-bold mt-1 mb-2">{title}</h3>
                  <p className="text-muted text-[15px] leading-[1.75]">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-[100px] px-8 relative overflow-hidden">
        <div className="glow-purple" style={{ width: '600px', height: '600px', top: 0, right: '-200px', opacity: 0.3 }} />
        <div className="max-w-site mx-auto relative z-[1]">
          <FadeUp className="text-center mb-[72px]">
            <span className="section-tag">Meet the Team</span>
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1]">
              The People Behind <span className="grad-text">NexusLab</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-3 gap-6">
            {team.map(({ name, role, initials, color, bio }, i) => (
              <FadeUp key={name} delay={i * 80}>
                <div className="card p-8 h-full">
                  <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-white font-bold text-[20px] mb-5"
                    style={{ background: color }}>
                    {initials}
                  </div>
                  <h3 className="text-[18px] font-bold mb-1">{name}</h3>
                  <div className="text-accent-light text-[13px] font-medium mb-3">{role}</div>
                  <p className="text-muted text-[14px] leading-[1.75]">{bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
