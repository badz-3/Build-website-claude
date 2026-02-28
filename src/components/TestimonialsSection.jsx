import FadeUp from './FadeUp'

const testimonials = [
  {
    quote: '"NexusLab delivered our fintech platform in record time. The code quality is exceptional — their team truly understood our domain and translated complex requirements into a seamless product."',
    name: 'James Sullivan',
    role: 'CTO, PayStream',
    initials: 'JS',
    color: '#7c3aed',
  },
  {
    quote: '"From UI/UX to backend architecture, everything was handled professionally. They also provided strategic advice on our tech stack that saved us months of rework down the line."',
    name: 'Anika Rashid',
    role: 'Founder, ShopFlow',
    initials: 'AR',
    color: '#06b6d4',
  },
  {
    quote: '"Our patient portal needed strict HIPAA compliance and a gentle user experience. NexusLab nailed both. Post-launch NPS shot up 42 points in the first quarter."',
    name: 'Marcus Pierce',
    role: 'VP Product, MediCare',
    initials: 'MP',
    color: '#ec4899',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="about" className="py-[120px] px-8 relative overflow-hidden">
      <div className="glow-cyan" style={{ width: '500px', height: '500px', top: 0, right: '-100px', opacity: 0.4 }} />

      <div className="max-w-site mx-auto relative z-[1]">
        <FadeUp className="text-center mb-[72px]">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1]">
            What Our <span className="grad-text">Clients Say</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 80}>
              <div className="testi-card h-full">
                <div className="flex gap-1 mb-5">
                  <span className="text-amber-400 text-[16px]">★★★★★</span>
                </div>
                <p className="text-muted text-[15px] leading-[1.75] mb-7">{t.quote}</p>
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[14px] shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[15px]">{t.name}</div>
                    <div className="text-[13px] text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
