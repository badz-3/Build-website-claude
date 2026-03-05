import { useState } from 'react'
import FadeUp from '../components/FadeUp'
import { Link } from 'react-router-dom'

const categories = ['All', 'FinTech', 'E-Commerce', 'HealthTech', 'Logistics', 'SaaS', 'AI/ML']

const projects = [
  {
    title: 'PayStream',
    category: 'FinTech',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    desc: 'A modern payment processing platform handling $50M+ in monthly transactions with real-time analytics and fraud detection.',
    color: '#7c3aed',
    metrics: { users: '120K+', uptime: '99.99%', growth: '+340%' },
  },
  {
    title: 'ShopFlow',
    category: 'E-Commerce',
    tags: ['React Native', 'GraphQL', 'Redis'],
    desc: 'Cross-platform mobile commerce app with AI-powered recommendations, increasing average order value by 28%.',
    color: '#06b6d4',
    metrics: { users: '85K+', uptime: '99.95%', growth: '+210%' },
  },
  {
    title: 'MediCare',
    category: 'HealthTech',
    tags: ['Next.js', 'FHIR', 'AWS', 'HIPAA'],
    desc: 'HIPAA-compliant patient portal that improved patient engagement by 42% and streamlined appointment scheduling.',
    color: '#ec4899',
    metrics: { users: '200K+', uptime: '99.99%', growth: '+42% NPS' },
  },
  {
    title: 'TrackR',
    category: 'Logistics',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    desc: 'AI-driven fleet management system with predictive route optimization, reducing delivery times by 35%.',
    color: '#a78bfa',
    metrics: { users: '15K+', uptime: '99.97%', growth: '-35% cost' },
  },
  {
    title: 'DataForge',
    category: 'SaaS',
    tags: ['Next.js', 'Supabase', 'Stripe', 'OpenAI'],
    desc: 'No-code data analytics platform with AI-generated insights. Helped 500+ businesses make data-driven decisions.',
    color: '#06b6d4',
    metrics: { users: '45K+', uptime: '99.98%', growth: '+180%' },
  },
  {
    title: 'SynthAI',
    category: 'AI/ML',
    tags: ['Python', 'LangChain', 'React', 'Vector DB'],
    desc: 'Enterprise knowledge base with RAG-powered search and content generation, boosting team productivity by 60%.',
    color: '#7c3aed',
    metrics: { users: '8K+', uptime: '99.95%', growth: '+60% prod.' },
  },
  {
    title: 'NutriPlan',
    category: 'HealthTech',
    tags: ['Flutter', 'Firebase', 'ML Kit'],
    desc: 'AI nutritionist app with meal scanning, personalized diet plans, and progress tracking. 4.8 stars on App Store.',
    color: '#ec4899',
    metrics: { users: '300K+', uptime: '99.9%', growth: '4.8★' },
  },
  {
    title: 'FreightHub',
    category: 'Logistics',
    tags: ['React', 'Go', 'gRPC', 'K8s'],
    desc: 'Real-time freight management platform connecting shippers with carriers. Processed 10K+ shipments monthly.',
    color: '#a78bfa',
    metrics: { users: '2K+', uptime: '99.99%', growth: '+250%' },
  },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="py-[120px] px-8 relative overflow-hidden">
        <div className="glow-purple" style={{ width: '700px', height: '700px', top: '-200px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
        <div className="max-w-site mx-auto relative z-[1]">
          <FadeUp className="text-center max-w-[720px] mx-auto">
            <span className="section-tag">Our Work</span>
            <h1 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.08] mb-6">
              Projects That <span className="grad-text">Drive Results</span>
            </h1>
            <p className="text-[18px] text-muted leading-[1.75] max-w-[600px] mx-auto">
              From fintech to healthcare, we've delivered 100+ projects that solve real problems and generate measurable business impact.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 px-8">
        <div className="max-w-site mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-lg text-[14px] font-medium border cursor-pointer transition-colors duration-200 ${
                    active === cat
                      ? 'bg-accent/20 border-accent/50 text-accent-light'
                      : 'bg-transparent border-accent/20 text-muted hover:border-accent/40 hover:text-primary'
                  }`}
                  style={{ fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-[120px] px-8">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {filtered.map(({ title, category, tags, desc, color, metrics }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="card p-8 h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="rounded-xl mb-6 h-[200px] flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${color}22, ${color}08)`, border: `1px solid ${color}33` }}>
                    <div className="text-[48px] font-display font-bold" style={{ color: `${color}44` }}>
                      {title.charAt(0)}
                    </div>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[12px] font-medium"
                      style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}>
                      {category}
                    </span>
                  </div>

                  <h3 className="text-[22px] font-bold mb-2">{title}</h3>
                  <p className="text-muted text-[15px] leading-[1.75] mb-5 flex-1">{desc}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {Object.entries(metrics).map(([key, val]) => (
                      <div key={key} className="text-center py-2.5 rounded-lg" style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.12)' }}>
                        <div className="text-[16px] font-bold" style={{ color }}>{val}</div>
                        <div className="text-[11px] text-muted uppercase tracking-wider mt-0.5">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => <span key={t} className="tech-chip">{t}</span>)}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-[120px] px-8">
        <div className="max-w-[960px] mx-auto">
          <FadeUp>
            <div className="cta-bg p-16 text-center relative overflow-hidden">
              <div className="glow-cyan" style={{ width: '400px', height: '400px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
              <div className="relative z-[1]">
                <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold leading-[1.1] mb-4">
                  Have a Project <span className="grad-text">in Mind?</span>
                </h2>
                <p className="text-[17px] text-muted max-w-[480px] mx-auto leading-[1.75] mb-8">
                  Let's talk about how we can bring your idea to life with the same quality and care we put into every project.
                </p>
                <Link to="/contact" className="btn-primary">
                  Start a Conversation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
