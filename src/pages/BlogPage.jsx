import FadeUp from '../components/FadeUp'
import { Link } from 'react-router-dom'

const featuredPost = {
  title: 'How We Built a Real-Time Payment Platform Processing $50M Monthly',
  excerpt: 'A deep dive into the architecture, challenges, and lessons learned from building PayStream — from initial design to handling thousands of concurrent transactions.',
  category: 'Case Study',
  date: 'Feb 28, 2026',
  readTime: '12 min read',
  color: '#7c3aed',
}

const posts = [
  {
    title: 'The Complete Guide to React Server Components in 2026',
    excerpt: 'Everything you need to know about RSC — from fundamentals to advanced patterns for production apps.',
    category: 'Engineering',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    color: '#06b6d4',
  },
  {
    title: 'Why We Switched from REST to GraphQL (And When You Shouldn\'t)',
    excerpt: 'Our honest take on the GraphQL migration — the wins, the pain points, and when REST is still the right choice.',
    category: 'Engineering',
    date: 'Feb 14, 2026',
    readTime: '6 min read',
    color: '#a78bfa',
  },
  {
    title: 'Designing for Accessibility: Lessons from Our HealthTech Projects',
    excerpt: 'How we approach inclusive design in medical applications where accessibility isn\'t optional — it\'s essential.',
    category: 'Design',
    date: 'Feb 8, 2026',
    readTime: '7 min read',
    color: '#ec4899',
  },
  {
    title: 'RAG Architecture Patterns: Building Smarter AI Features',
    excerpt: 'Practical patterns for implementing Retrieval-Augmented Generation in production applications.',
    category: 'AI/ML',
    date: 'Jan 30, 2026',
    readTime: '10 min read',
    color: '#06b6d4',
  },
  {
    title: 'Scaling Kubernetes: From 10 to 10,000 Pods',
    excerpt: 'A practical guide to scaling your K8s clusters — resource management, autoscaling, and cost optimization.',
    category: 'DevOps',
    date: 'Jan 22, 2026',
    readTime: '9 min read',
    color: '#7c3aed',
  },
  {
    title: 'The Psychology of SaaS Pricing Pages',
    excerpt: 'How we design pricing pages that convert — backed by A/B test data from 20+ SaaS products we\'ve built.',
    category: 'Design',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    color: '#ec4899',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="py-[120px] px-8 relative overflow-hidden">
        <div className="glow-purple" style={{ width: '700px', height: '700px', top: '-200px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
        <div className="max-w-site mx-auto relative z-[1]">
          <FadeUp className="text-center max-w-[720px] mx-auto">
            <span className="section-tag">Blog & Insights</span>
            <h1 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.08] mb-6">
              Ideas, Insights &<br /><span className="grad-text">Engineering Stories</span>
            </h1>
            <p className="text-[18px] text-muted leading-[1.75] max-w-[600px] mx-auto">
              Sharing what we learn — from engineering deep dives and design thinking to product strategy and AI innovation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16 px-8">
        <div className="max-w-site mx-auto">
          <FadeUp>
            <div className="card p-10 grid grid-cols-[1.2fr_1fr] gap-10 items-center cursor-pointer group">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full text-[12px] font-semibold"
                    style={{ background: `${featuredPost.color}22`, color: featuredPost.color, border: `1px solid ${featuredPost.color}44` }}>
                    {featuredPost.category}
                  </span>
                  <span className="text-muted text-[13px]">{featuredPost.date}</span>
                  <span className="text-muted text-[13px]">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-[28px] font-bold leading-[1.2] mb-4 group-hover:text-accent-light" style={{ transition: 'color 0.2s ease' }}>
                  {featuredPost.title}
                </h2>
                <p className="text-muted text-[16px] leading-[1.75] mb-6">{featuredPost.excerpt}</p>
                <span className="text-accent-light text-[15px] font-medium inline-flex items-center gap-2">
                  Read article
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="rounded-xl h-[280px] flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${featuredPost.color}22, ${featuredPost.color}08)`, border: `1px solid ${featuredPost.color}33` }}>
                <div className="text-[64px] font-display font-bold" style={{ color: `${featuredPost.color}33` }}>Featured</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-[120px] px-8">
        <div className="max-w-site mx-auto">
          <FadeUp className="mb-12">
            <h2 className="text-[24px] font-bold">Latest Articles</h2>
          </FadeUp>
          <div className="grid grid-cols-3 gap-6">
            {posts.map(({ title, excerpt, category, date, readTime, color }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="card p-0 h-full flex flex-col cursor-pointer group overflow-hidden">
                  {/* Image placeholder */}
                  <div className="h-[180px] flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${color}18, ${color}08)` }}>
                    <div className="text-[36px] font-display font-bold" style={{ color: `${color}28` }}>
                      {title.charAt(0)}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{ background: `${color}18`, color, border: `1px solid ${color}33` }}>
                        {category}
                      </span>
                      <span className="text-muted text-[12px]">{readTime}</span>
                    </div>
                    <h3 className="text-[18px] font-bold leading-[1.3] mb-3 group-hover:text-accent-light flex-1" style={{ transition: 'color 0.2s ease' }}>
                      {title}
                    </h3>
                    <p className="text-muted text-[14px] leading-[1.7] mb-4">{excerpt}</p>
                    <div className="text-muted text-[13px]">{date}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-[120px] px-8">
        <div className="max-w-[720px] mx-auto">
          <FadeUp>
            <div className="cta-bg p-12 text-center relative overflow-hidden">
              <div className="glow-cyan" style={{ width: '300px', height: '300px', top: '-80px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
              <div className="relative z-[1]">
                <h2 className="text-[28px] font-bold mb-3">
                  Stay in the <span className="grad-text">Loop</span>
                </h2>
                <p className="text-muted text-[15px] mb-8 max-w-[400px] mx-auto leading-[1.7]">
                  Get our latest articles, case studies, and engineering insights delivered to your inbox.
                </p>
                <form className="flex gap-3 max-w-[440px] mx-auto" onSubmit={e => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 px-4 py-3 text-[15px] text-primary font-body rounded-[10px] outline-none border border-accent/25 focus:border-accent/70 placeholder:text-muted/50"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  />
                  <button type="submit" className="btn-primary !px-6">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
