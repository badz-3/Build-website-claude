import FadeUp from './FadeUp'

const techs = [
  '⚛️ React', '▲ Next.js', '🟢 Node.js', '🐍 Python', '🦋 Flutter',
  '📱 React Native', '🐘 PostgreSQL', '🍃 MongoDB', '🔴 Redis', '🐳 Docker',
  '☸️ Kubernetes', '☁️ AWS', '🌐 GCP', '🤖 OpenAI', '🦜 LangChain',
  '🔷 TypeScript', '🎨 Figma', '💳 Stripe',
]

export default function TechStack() {
  return (
    <section className="py-20 px-8 border-t border-accent/10">
      <div className="max-w-site mx-auto">
        <FadeUp className="text-center mb-[52px]">
          <span className="section-tag">Tech Stack</span>
          <h2 className="text-[clamp(28px,3vw,40px)] font-bold">
            Tools We <span className="grad-text">Master</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <div className="flex flex-wrap gap-3 justify-center">
            {techs.map(tech => (
              <span key={tech} className="tech-chip">{tech}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
