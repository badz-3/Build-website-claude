import FadeUp from './FadeUp'

const steps = [
  {
    num: '01',
    color: 'rgba(124,58,237,0.3)',
    title: 'Discovery',
    desc: "Deep-dive into your business goals, target users, and technical constraints to build a solid project blueprint.",
  },
  {
    num: '02',
    color: 'rgba(6,182,212,0.3)',
    title: 'Design',
    desc: "Wireframes, design system, and interactive prototype — approved by you before a single line of code is written.",
  },
  {
    num: '03',
    color: 'rgba(236,72,153,0.3)',
    title: 'Development',
    desc: "Agile sprints with weekly demos. Clean, tested code with full CI/CD pipeline and automated QA.",
  },
  {
    num: '04',
    color: 'rgba(124,58,237,0.3)',
    title: 'Launch & Scale',
    desc: "Monitored deployment, post-launch support, performance tuning, and ongoing feature development.",
  },
]

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-[120px] px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,rgba(13,15,39,0.4) 0%,rgba(7,8,26,0) 100%)' }}
    >
      <div className="glow-purple" style={{ width: '500px', height: '500px', bottom: 0, right: '-100px', opacity: 0.4 }} />

      <div className="max-w-site mx-auto relative z-[1]">
        <FadeUp className="text-center mb-20">
          <span className="section-tag">How We Work</span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1] mb-5">
            Our <span className="grad-text">Process</span>
          </h2>
          <p className="text-[17px] text-muted max-w-[500px] mx-auto">
            A proven 4-step workflow that takes your idea from discovery to a live, production-grade product.
          </p>
        </FadeUp>

        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 80}>
              <div className="card p-9 relative h-full">
                <div
                  className="font-display text-[48px] font-extrabold leading-none mb-4"
                  style={{
                    background: `linear-gradient(135deg,${step.color},transparent)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.num}
                </div>
                <h3 className="text-[18px] font-bold mb-3">{step.title}</h3>
                <p className="text-muted text-[14px] leading-[1.75]">{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
