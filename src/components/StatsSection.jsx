import FadeUp from './FadeUp'

const stats = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '60+',  label: 'Clients Worldwide' },
  { num: '7+',   label: 'Years of Experience' },
  { num: '98%',  label: 'Satisfaction Rate' },
]

export default function StatsSection() {
  return (
    <section
      className="py-20 px-8 border-t border-b border-accent/10"
      style={{ background: 'linear-gradient(180deg,rgba(13,15,39,0.5) 0%,rgba(7,8,26,0) 100%)' }}
    >
      <div className="max-w-site mx-auto grid grid-cols-4 gap-12 text-center">
        {stats.map(({ num, label }, i) => (
          <FadeUp key={num} delay={i * 100}>
            <div className="stat-num grad-text">{num}</div>
            <div className="mt-2 text-[15px] text-muted">{label}</div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
