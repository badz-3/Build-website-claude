const logos = ['Acme Corp', 'TechVenture', 'FinanceAI', 'ShopBase', 'MediCore', 'Logistix']

export default function ClientLogos() {
  return (
    <section className="py-12 px-8 border-t border-b border-accent/10">
      <div className="max-w-site mx-auto">
        <p className="text-center text-[13px] tracking-[0.1em] uppercase text-muted mb-9 font-medium">
          Trusted by teams at
        </p>
        <div className="flex items-center justify-center gap-14 flex-wrap opacity-50">
          {logos.map(name => (
            <span
              key={name}
              className="font-display text-[18px] font-bold text-muted"
              style={{ letterSpacing: '-0.02em' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
