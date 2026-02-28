import FadeUp from './FadeUp'

const services = [
  {
    color: '#a78bfa',
    bg: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(124,58,237,0.1))',
    border: 'rgba(124,58,237,0.3)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Performant, scalable web applications built with React, Next.js, and modern backend technologies. SEO-optimized and production-ready.',
    chips: ['React', 'Next.js', 'Node.js'],
  },
  {
    color: '#06b6d4',
    bg: 'linear-gradient(135deg,rgba(6,182,212,0.3),rgba(6,182,212,0.08))',
    border: 'rgba(6,182,212,0.3)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile experiences on iOS and Android using React Native and Flutter. Smooth UX, native feel, single codebase.',
    chips: ['React Native', 'Flutter'],
  },
  {
    color: '#ec4899',
    bg: 'linear-gradient(135deg,rgba(236,72,153,0.3),rgba(236,72,153,0.08))',
    border: 'rgba(236,72,153,0.3)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Research-driven design systems, wireframes, and high-fidelity prototypes that delight users and convert visitors into customers.',
    chips: ['Figma', 'Design System'],
  },
  {
    color: '#a78bfa',
    bg: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(124,58,237,0.08))',
    border: 'rgba(124,58,237,0.3)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    desc: 'CI/CD pipelines, containerization, and cloud infrastructure on AWS, GCP, and Azure. Your product deployed reliably at any scale.',
    chips: ['AWS', 'Docker', 'K8s'],
  },
  {
    color: '#06b6d4',
    bg: 'linear-gradient(135deg,rgba(6,182,212,0.3),rgba(6,182,212,0.08))',
    border: 'rgba(6,182,212,0.3)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'AI Integration',
    desc: 'LLM-powered features, intelligent automation, and custom AI pipelines embedded directly into your product workflow.',
    chips: ['OpenAI', 'LangChain'],
  },
  {
    color: '#ec4899',
    bg: 'linear-gradient(135deg,rgba(236,72,153,0.3),rgba(236,72,153,0.08))',
    border: 'rgba(236,72,153,0.3)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'SaaS Products',
    desc: 'End-to-end SaaS product development — from auth, billing, and dashboards to multi-tenancy and analytics. Launch fast, grow confidently.',
    chips: ['Stripe', 'Supabase'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-[120px] px-8 relative overflow-hidden">
      <div className="glow-purple" style={{ width: '600px', height: '600px', top: 0, right: '-200px', opacity: 0.5 }} />

      <div className="max-w-site mx-auto relative z-[1]">
        <FadeUp className="text-center mb-[72px]">
          <span className="section-tag">What We Do</span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1] mb-5">
            Full-Stack Services<br /><span className="grad-text">From Idea to Launch</span>
          </h2>
          <p className="text-[17px] text-muted max-w-[560px] mx-auto leading-[1.75]">
            We provide end-to-end software development services tailored to your business goals and timeline.
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-6">
          {services.map(({ title, desc, chips, icon, bg, border }, i) => (
            <FadeUp key={title} delay={i * 80}>
              <div className="card p-9 h-full">
                <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6" style={{ background: bg, border: `1px solid ${border}` }}>
                  {icon}
                </div>
                <h3 className="text-[20px] font-bold mb-3">{title}</h3>
                <p className="text-muted text-[15px] leading-[1.75]">{desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {chips.map(c => <span key={c} className="tech-chip">{c}</span>)}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
