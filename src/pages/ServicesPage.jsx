import FadeUp from '../components/FadeUp'
import { Link } from 'react-router-dom'

const services = [
  {
    color: '#a78bfa',
    bg: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(124,58,237,0.1))',
    border: 'rgba(124,58,237,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Performant, scalable web applications built with React, Next.js, and modern backend technologies. SEO-optimized and production-ready.',
    details: [
      'Custom web applications & portals',
      'Progressive Web Apps (PWAs)',
      'E-commerce platforms & marketplaces',
      'CMS integration & headless architecture',
      'API development & third-party integrations',
      'Performance optimization & SEO',
    ],
    chips: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    color: '#06b6d4',
    bg: 'linear-gradient(135deg,rgba(6,182,212,0.3),rgba(6,182,212,0.08))',
    border: 'rgba(6,182,212,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile experiences on iOS and Android using React Native and Flutter. Smooth UX, native feel, single codebase.',
    details: [
      'Cross-platform iOS & Android apps',
      'Native module integrations',
      'Offline-first architecture',
      'Push notifications & real-time features',
      'App Store optimization & deployment',
      'Ongoing maintenance & updates',
    ],
    chips: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    color: '#ec4899',
    bg: 'linear-gradient(135deg,rgba(236,72,153,0.3),rgba(236,72,153,0.08))',
    border: 'rgba(236,72,153,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Research-driven design systems, wireframes, and high-fidelity prototypes that delight users and convert visitors into customers.',
    details: [
      'User research & persona mapping',
      'Wireframing & information architecture',
      'High-fidelity UI design & prototyping',
      'Design systems & component libraries',
      'Usability testing & iteration',
      'Brand identity & visual design',
    ],
    chips: ['Figma', 'Design System', 'Prototyping', 'User Research'],
  },
  {
    color: '#a78bfa',
    bg: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(124,58,237,0.08))',
    border: 'rgba(124,58,237,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    desc: 'CI/CD pipelines, containerization, and cloud infrastructure on AWS, GCP, and Azure. Your product deployed reliably at any scale.',
    details: [
      'Cloud infrastructure design (AWS, GCP, Azure)',
      'CI/CD pipeline setup & optimization',
      'Docker & Kubernetes orchestration',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Monitoring, logging & alerting',
      'Security hardening & compliance',
    ],
    chips: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    color: '#06b6d4',
    bg: 'linear-gradient(135deg,rgba(6,182,212,0.3),rgba(6,182,212,0.08))',
    border: 'rgba(6,182,212,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'AI Integration',
    desc: 'LLM-powered features, intelligent automation, and custom AI pipelines embedded directly into your product workflow.',
    details: [
      'LLM integration (GPT, Claude, open-source)',
      'Custom AI/ML model development',
      'Retrieval-Augmented Generation (RAG)',
      'Intelligent automation workflows',
      'Natural language processing features',
      'AI-powered analytics & insights',
    ],
    chips: ['OpenAI', 'LangChain', 'Python', 'Vector DBs', 'RAG'],
  },
  {
    color: '#ec4899',
    bg: 'linear-gradient(135deg,rgba(236,72,153,0.3),rgba(236,72,153,0.08))',
    border: 'rgba(236,72,153,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'SaaS Products',
    desc: 'End-to-end SaaS product development — from auth, billing, and dashboards to multi-tenancy and analytics. Launch fast, grow confidently.',
    details: [
      'Multi-tenant architecture design',
      'Authentication & authorization (SSO, RBAC)',
      'Billing & subscription management (Stripe)',
      'Admin dashboards & analytics',
      'API design & documentation',
      'Scalability planning & load testing',
    ],
    chips: ['Stripe', 'Supabase', 'Auth0', 'Redis', 'GraphQL'],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="py-[120px] px-8 relative overflow-hidden">
        <div className="glow-purple" style={{ width: '700px', height: '700px', top: '-200px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
        <div className="max-w-site mx-auto relative z-[1]">
          <FadeUp className="text-center max-w-[720px] mx-auto">
            <span className="section-tag">Our Services</span>
            <h1 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.08] mb-6">
              Full-Stack Services<br /><span className="grad-text">From Idea to Launch</span>
            </h1>
            <p className="text-[18px] text-muted leading-[1.75] max-w-[600px] mx-auto">
              We provide end-to-end software development services tailored to your business goals and timeline. Here's everything we can do for you.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-[120px] px-8">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col gap-16">
            {services.map(({ title, desc, details, chips, icon, bg, border, color }, i) => (
              <FadeUp key={title} delay={i * 60}>
                <div className="card p-10 grid grid-cols-[1fr_1.2fr] gap-12 items-start">
                  <div>
                    <div className="w-[56px] h-[56px] rounded-xl flex items-center justify-center mb-6" style={{ background: bg, border: `1px solid ${border}` }}>
                      {icon}
                    </div>
                    <h2 className="text-[28px] font-bold mb-4">{title}</h2>
                    <p className="text-muted text-[16px] leading-[1.75] mb-6">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {chips.map(c => <span key={c} className="tech-chip">{c}</span>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[0.08em] uppercase text-muted mb-5">What's Included</h3>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                      {details.map(d => (
                        <li key={d} className="flex items-start gap-3 text-[15px] leading-[1.6]">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0">
                            <circle cx="9" cy="9" r="9" fill={color} opacity="0.15" />
                            <path d="M5.5 9l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-primary/90">{d}</span>
                        </li>
                      ))}
                    </ul>
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
              <div className="glow-purple" style={{ width: '400px', height: '400px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }} />
              <div className="relative z-[1]">
                <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold leading-[1.1] mb-4">
                  Need a Custom <span className="grad-text">Solution?</span>
                </h2>
                <p className="text-[17px] text-muted max-w-[480px] mx-auto leading-[1.75] mb-8">
                  Every project is unique. Let's discuss your requirements and build something tailored to your needs.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get in Touch
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
