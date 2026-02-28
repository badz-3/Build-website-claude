import FadeUp from './FadeUp'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── SVG dashboard illustrations ── */
function PayStreamSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid slice" className="block">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="800" height="280" fill="url(#g1)" />
      <line x1="0" y1="70"  x2="800" y2="70"  stroke="rgba(124,58,237,0.12)" strokeWidth="1" />
      <line x1="0" y1="140" x2="800" y2="140" stroke="rgba(124,58,237,0.12)" strokeWidth="1" />
      <line x1="0" y1="210" x2="800" y2="210" stroke="rgba(124,58,237,0.12)" strokeWidth="1" />
      <line x1="200" y1="0" x2="200" y2="280" stroke="rgba(124,58,237,0.08)" strokeWidth="1" />
      <line x1="400" y1="0" x2="400" y2="280" stroke="rgba(124,58,237,0.08)" strokeWidth="1" />
      <line x1="600" y1="0" x2="600" y2="280" stroke="rgba(124,58,237,0.08)" strokeWidth="1" />
      <rect x="40"  y="30" width="140" height="70" rx="8" fill="rgba(124,58,237,0.18)" stroke="rgba(124,58,237,0.3)"  strokeWidth="1" />
      <text x="60"  y="55" fill="#8b8daa" fontSize="10" fontFamily="sans-serif">REVENUE</text>
      <text x="60"  y="78" fill="#f0f0ff" fontSize="20" fontWeight="bold" fontFamily="sans-serif">$2.4M</text>
      <text x="60"  y="92" fill="#22c55e" fontSize="9"  fontFamily="sans-serif">↑ 24.8%</text>
      <rect x="200" y="30" width="140" height="70" rx="8" fill="rgba(6,182,212,0.14)"  stroke="rgba(6,182,212,0.25)"  strokeWidth="1" />
      <text x="220" y="55" fill="#8b8daa" fontSize="10" fontFamily="sans-serif">TRANSACTIONS</text>
      <text x="220" y="78" fill="#f0f0ff" fontSize="20" fontWeight="bold" fontFamily="sans-serif">58.2k</text>
      <text x="220" y="92" fill="#06b6d4" fontSize="9"  fontFamily="sans-serif">↑ Monthly</text>
      <rect x="360" y="30" width="140" height="70" rx="8" fill="rgba(236,72,153,0.12)" stroke="rgba(236,72,153,0.22)" strokeWidth="1" />
      <text x="380" y="55" fill="#8b8daa" fontSize="10" fontFamily="sans-serif">FRAUD BLOCKED</text>
      <text x="380" y="78" fill="#f0f0ff" fontSize="20" fontWeight="bold" fontFamily="sans-serif">0.02%</text>
      <text x="380" y="92" fill="#22c55e" fontSize="9"  fontFamily="sans-serif">↓ 99.98% clean</text>
      <rect x="40" y="140" width="620" height="110" rx="8" fill="rgba(13,15,39,0.7)" stroke="rgba(124,58,237,0.15)" strokeWidth="1" />
      <text x="60" y="162" fill="#8b8daa" fontSize="10" fontFamily="sans-serif">PAYMENT VOLUME</text>
      {[{x:60,h:60},{x:100,h:40},{x:140,h:50},{x:180,h:65},{x:220,h:55},{x:260,h:70},{x:300,h:50},{x:340,h:75},{x:380,h:90,accent:true},{x:420,h:80}].map(({x,h,accent},i) => (
        <rect key={i} x={x} y={235-h} width="30" height={h} rx="3" fill={accent ? 'rgba(167,139,250,0.6)' : 'rgba(124,58,237,0.3)'} />
      ))}
    </svg>
  )
}

function ShopFlowSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid slice" className="block">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#06b6d4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="800" height="280" fill="url(#g2)" />
      {[
        { x:40,  emoji:'👟', color:'#06b6d4', emojiColor:'rgba(6,182,212,0.2)',  label:'Air Runner', price:'$89.99' },
        { x:165, emoji:'👜', color:'#a78bfa', emojiColor:'rgba(124,58,237,0.2)', label:'Luxe Bag',   price:'$249.00' },
        { x:290, emoji:'⌚', color:'#ec4899', emojiColor:'rgba(236,72,153,0.2)', label:'SmartWatch', price:'$399.00' },
      ].map(({x, emoji, color, emojiColor, label, price}) => (
        <g key={label}>
          <rect x={x} y="25" width="110" height="130" rx="8" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
          <rect x={x+15} y="40" width="80" height="70" rx="6" fill={emojiColor} />
          <text x={x+22} y="80" fill={color} fontSize="20">{emoji}</text>
          <text x={x+15} y="127" fill="#f0f0ff" fontSize="11" fontWeight="600" fontFamily="sans-serif">{label}</text>
          <text x={x+15} y="142" fill="#22c55e" fontSize="11" fontFamily="sans-serif">{price}</text>
        </g>
      ))}
      <rect x="430" y="25" width="330" height="200" rx="8" fill="rgba(13,15,39,0.8)" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
      <text x="450" y="52" fill="#8b8daa" fontSize="10" fontFamily="sans-serif">LIVE ORDERS</text>
      {[
        { y:62,  label:'#8821 · Air Runner × 2', price:'$179' },
        { y:96,  label:'#8820 · Luxe Bag × 1',   price:'$249' },
        { y:130, label:'#8819 · SmartWatch × 1',  price:'$399' },
      ].map(({y,label,price}, i) => (
        <g key={i}>
          <rect x="450" y={y} width="290" height="28" rx="5" fill={i===0 ? 'rgba(6,182,212,0.08)' : 'rgba(6,182,212,0.05)'} />
          <text x="462" y={y+18} fill="#f0f0ff" fontSize="10" fontFamily="sans-serif">{label}</text>
          <text x="680" y={y+18} fill="#22c55e" fontSize="10" fontFamily="sans-serif">{price}</text>
        </g>
      ))}
    </svg>
  )
}

function MediCareSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice" className="block">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#ec4899" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="800" height="240" fill="url(#g3)" />
      <rect x="30"  y="20" width="200" height="200" rx="10" fill="rgba(236,72,153,0.1)" stroke="rgba(236,72,153,0.25)" strokeWidth="1" />
      <text x="130" y="65"  fill="#ec4899" fontSize="32" textAnchor="middle">👤</text>
      <text x="130" y="92"  fill="#f0f0ff" fontSize="12" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">Sarah Johnson</text>
      <text x="130" y="110" fill="#8b8daa" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Patient #P-4421</text>
      <rect x="50"  y="124" width="160" height="24" rx="12" fill="rgba(236,72,153,0.2)" stroke="rgba(236,72,153,0.3)" strokeWidth="1" />
      <text x="130" y="140" fill="#ec4899" fontSize="10" fontFamily="sans-serif" textAnchor="middle">● Consultation Booked</text>
      <text x="50"  y="170" fill="#8b8daa" fontSize="9"  fontFamily="sans-serif">Next visit: Mar 15, 2026</text>
      <rect x="250" y="20"  width="520" height="200" rx="10" fill="rgba(13,15,39,0.8)" stroke="rgba(236,72,153,0.2)" strokeWidth="1" />
      <text x="270" y="50"  fill="#8b8daa" fontSize="10" fontFamily="sans-serif">PATIENT VITALS</text>
      <rect x="270" y="60"  width="100" height="55" rx="6" fill="rgba(236,72,153,0.12)" stroke="rgba(236,72,153,0.2)" strokeWidth="1" />
      <text x="320" y="80"  fill="#8b8daa" fontSize="9"  fontFamily="sans-serif" textAnchor="middle">HEART RATE</text>
      <text x="320" y="100" fill="#f0f0ff" fontSize="18" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">72</text>
      <text x="320" y="112" fill="#ec4899" fontSize="8"  fontFamily="sans-serif" textAnchor="middle">BPM</text>
      <rect x="385" y="60"  width="100" height="55" rx="6" fill="rgba(6,182,212,0.1)"  stroke="rgba(6,182,212,0.2)"  strokeWidth="1" />
      <text x="435" y="80"  fill="#8b8daa" fontSize="9"  fontFamily="sans-serif" textAnchor="middle">BLOOD PRESSURE</text>
      <text x="435" y="100" fill="#f0f0ff" fontSize="18" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">120/80</text>
      <text x="435" y="112" fill="#06b6d4" fontSize="8"  fontFamily="sans-serif" textAnchor="middle">Normal</text>
    </svg>
  )
}

function TrackRSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice" className="block">
      <defs>
        <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="800" height="240" fill="url(#g4)" />
      {[[100,100],[200,80],[350,120],[500,90],[650,110]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={i%2===0 ? 'rgba(124,58,237,0.4)' : 'rgba(6,182,212,0.5)'} />
      ))}
      <line x1="100" y1="100" x2="200" y2="80"  stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" strokeDasharray="4,4" />
      <line x1="200" y1="80"  x2="350" y2="120" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" strokeDasharray="4,4" />
      <line x1="350" y1="120" x2="500" y2="90"  stroke="rgba(6,182,212,0.4)"  strokeWidth="1.5" strokeDasharray="4,4" />
      <line x1="500" y1="90"  x2="650" y2="110" stroke="rgba(6,182,212,0.4)"  strokeWidth="1.5" strokeDasharray="4,4" />
      <rect x="460" y="20" width="310" height="200" rx="10" fill="rgba(13,15,39,0.85)" stroke="rgba(124,58,237,0.25)" strokeWidth="1" />
      <text x="480" y="48" fill="#8b8daa" fontSize="10" fontFamily="sans-serif">ACTIVE SHIPMENTS</text>
      {[
        { y:58,  label:'SHP-9920 — Bangkok → Tokyo', status:'On Time',    statusColor:'#22c55e', bg:'rgba(124,58,237,0.12)', border:'rgba(124,58,237,0.2)' },
        { y:94,  label:'SHP-9919 — Seoul → LA',      status:'In Transit', statusColor:'#06b6d4', bg:'rgba(6,182,212,0.08)',  border:'rgba(6,182,212,0.15)' },
        { y:130, label:'SHP-9918 — Dubai → NY',      status:'Delayed',    statusColor:'#f59e0b', bg:'rgba(236,72,153,0.08)', border:'rgba(236,72,153,0.15)' },
      ].map(({y,label,status,statusColor,bg,border}) => (
        <g key={label}>
          <rect x="480" y={y} width="270" height="30" rx="6" fill={bg} stroke={border} strokeWidth="1" />
          <text x="492" y={y+18} fill="#f0f0ff" fontSize="10" fontFamily="sans-serif">{label}</text>
          <text x="680" y={y+18} fill={statusColor} fontSize="9" fontFamily="sans-serif">{status}</text>
        </g>
      ))}
      <text x="480" y="195" fill="#8b8daa" fontSize="9" fontFamily="sans-serif">ETA accuracy: 94.7% · AI-predicted</text>
    </svg>
  )
}

const projects = [
  {
    tags:    [{ label: 'FinTech', color: '#a78bfa', bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.25)' }, { label: 'SaaS', color: '#a78bfa', bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.25)' }],
    title:   'PayStream — Payment Analytics',
    desc:    'Real-time payment analytics dashboard processing $2M+ monthly transactions with fraud detection and custom reporting.',
    link:    '#',
    linkColor: '#a78bfa',
    height:  '280px',
    bgStyle: { background: 'linear-gradient(135deg,#0a0b22 0%,#130f35 50%,#0d1427 100%)' },
    svg:     <PayStreamSVG />,
    overlay: {},
  },
  {
    tags:    [{ label: 'eCommerce', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.25)' }, { label: 'Mobile', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.25)' }],
    title:   'ShopFlow — Retail Platform',
    desc:    'Multi-vendor marketplace with AI-driven recommendations, serving 50k+ daily users across iOS and Android.',
    link:    '#',
    linkColor: '#06b6d4',
    height:  '280px',
    bgStyle: { background: 'linear-gradient(135deg,#071520 0%,#0a1f2e 100%)' },
    svg:     <ShopFlowSVG />,
    overlay: { background: 'rgba(6,182,212,0.08)' },
  },
  {
    tags:    [{ label: 'HealthTech', color: '#ec4899', bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.25)' }],
    title:   'MediCare — Patient Portal',
    desc:    'HIPAA-compliant telemedicine platform with scheduling, video consultations, and EHR integration.',
    link:    '#',
    linkColor: '#ec4899',
    height:  '240px',
    bgStyle: { background: 'linear-gradient(135deg,#1a0718 0%,#200d20 100%)' },
    svg:     <MediCareSVG />,
    overlay: { background: 'rgba(236,72,153,0.06)' },
  },
  {
    tags:    [{ label: 'Logistics', color: '#a78bfa', bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.25)' }, { label: 'AI', color: '#a78bfa', bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.25)' }],
    title:   'TrackR — Supply Chain AI',
    desc:    'AI-powered supply chain visibility tool with predictive ETAs, route optimization, and live cargo tracking.',
    link:    '#',
    linkColor: '#a78bfa',
    height:  '240px',
    bgStyle: { background: 'linear-gradient(135deg,#080b1e 0%,#0f1028 100%)' },
    svg:     <TrackRSVG />,
    overlay: {},
  },
]

export default function PortfolioSection() {
  return (
    <section id="work" className="py-[120px] px-8 relative overflow-hidden">
      <div className="glow-cyan" style={{ width: '600px', height: '600px', top: '100px', left: '-200px', opacity: 0.5 }} />

      <div className="max-w-site mx-auto relative z-[1]">
        <FadeUp className="flex items-end justify-between mb-16">
          <div>
            <span className="section-tag">Our Work</span>
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1]">
              Selected<br /><span className="grad-text">Projects</span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost">View all projects</a>
        </FadeUp>

        <div className="grid grid-cols-2 gap-6">
          {projects.map(({ tags, title, desc, link, linkColor, height, bgStyle, svg, overlay }, i) => (
            <FadeUp key={title} delay={i * 80}>
              <div className="card overflow-hidden h-full" style={{ padding: 0 }}>
                <div className="port-img-wrap" style={{ height, ...bgStyle }}>
                  {svg}
                  <div className="color-overlay" style={overlay} />
                </div>
                <div className="px-8 py-7">
                  <div className="flex gap-2 mb-3">
                    {tags.map(({ label, color, bg, border }) => (
                      <span key={label} className="text-[11px] px-2.5 py-1 rounded-full font-medium" style={{ color, background: bg, border: `1px solid ${border}` }}>
                        {label}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[20px] font-bold mb-2">{title}</h3>
                  <p className="text-muted text-[14px] leading-[1.7]">{desc}</p>
                  <a href={link} className="inline-flex items-center gap-1.5 mt-4 text-[14px] font-semibold no-underline" style={{ color: linkColor }}>
                    View case study <ArrowRight />
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
