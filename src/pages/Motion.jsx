import { useState } from 'react'
import { Copy, Check, Play } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const DURATION_TOKENS = [
  {
    token: 'duration/instant',
    value: '0ms',
    ms: 0,
    description: 'Mudanças de estado, toggle, feedback ativo',
    usageItems: ['Toggle', 'Active state'],
  },
  {
    token: 'duration/fast',
    value: '100ms',
    ms: 100,
    description: 'Hover, micro-interações, troca de ícone',
    usageItems: ['Hover', 'Icon swap'],
  },
  {
    token: 'duration/normal',
    value: '200ms',
    ms: 200,
    description: 'Dropdown, tooltip, estado de botão',
    usageItems: ['Dropdown', 'Tooltip'],
  },
  {
    token: 'duration/slow',
    value: '300ms',
    ms: 300,
    description: 'Drawer, sidebar, accordion',
    usageItems: ['Drawer', 'Accordion'],
  },
  {
    token: 'duration/slower',
    value: '500ms',
    ms: 500,
    description: 'Modal, onboarding, transição de página',
    usageItems: ['Modal', 'Page transition'],
  },
  {
    token: 'duration/slowest',
    value: '800ms',
    ms: 800,
    description: 'Animações staggered complexas',
    usageItems: ['Stagger', 'Intro'],
  },
]

const EASING_CURVES = [
  { name: 'Default',  value: 'cubic-bezier(0.4, 0, 0.2, 1)',  description: 'Movimento natural — uso geral' },
  { name: 'Enter',    value: 'cubic-bezier(0.0, 0, 0.2, 1)',  description: 'Elementos entrando na tela' },
  { name: 'Exit',     value: 'cubic-bezier(0.4, 0, 1, 1)',    description: 'Elementos saindo da tela' },
  { name: 'Standard', value: 'cubic-bezier(0.2, 0, 0, 1)',    description: 'Transições de página, modal' },
  { name: 'Spring',   value: 'spring(1, 200, 15, 0)',          description: 'Interações com inércia e bounce' },
  { name: 'Linear',   value: 'linear',                         description: 'Loaders, progress bars' },
]

function easingPath(value, size = 56) {
  if (value === 'linear') return `M 0 ${size} L ${size} 0`
  if (value.startsWith('spring')) return `M 0 ${size} C 5 ${-size * 0.3} 40 ${size * 0.1} ${size} 0`
  const m = value.match(/cubic-bezier\(([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+)\)/)
  if (!m) return `M 0 ${size} L ${size} 0`
  const [p1x, p1y, p2x, p2y] = [+m[1], +m[2], +m[3], +m[4]]
  return `M 0 ${size} C ${p1x * size} ${size - p1y * size} ${p2x * size} ${size - p2y * size} ${size} 0`
}

function DurationRow({ token, value, ms, description, usageItems, isDark, onCopy, copied }) {
  const [pos, setPos] = useState('start')

  const play = () => {
    if (ms === 0) return
    setPos('start')
    setTimeout(() => setPos('end'), 30)
    setTimeout(() => setPos('start'), ms + 120)
  }

  const trackW = 160
  const ballW = 14

  return (
    <div className={`flex items-center gap-4 px-6 py-4 border-b last:border-b-0 transition-colors ${isDark ? 'border-[#4B4E52] hover:bg-[#26292E]' : 'border-[#E9EFF2] hover:bg-[#FAFAFA]'}`}>
      {/* Token + usage */}
      <div style={{ width: 172 }} className="shrink-0 flex flex-col gap-0.5">
        <span className={`text-xs font-mono font-medium ${isDark ? 'text-[#C1C2C4]' : 'text-[#304A64]'}`}>{token}</span>
        <div className="flex gap-1 flex-wrap mt-0.5">
          {usageItems.map((u) => (
            <span key={u} className={`text-[9px] px-1.5 py-0.5 rounded-full ${isDark ? 'bg-[#32353A] text-[#808285]' : 'bg-[#EEF3F7] text-[#304A64]'}`}>{u}</span>
          ))}
        </div>
      </div>

      {/* Value */}
      <span style={{ width: 60 }} className={`shrink-0 text-sm font-semibold tabular-nums ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
        {value}
      </span>

      {/* Description */}
      <span className={`flex-1 text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{description}</span>

      {/* Play track */}
      <div
        className={`relative rounded-full overflow-hidden shrink-0 flex items-center ${isDark ? 'bg-[#32353A]' : 'bg-[#E9EFF2]'}`}
        style={{ width: trackW, height: 20 }}
      >
        <div
          className={`absolute rounded-full ${isDark ? 'bg-[#BFD8F3]' : 'bg-[#304A64]'}`}
          style={{
            width: ballW,
            height: ballW,
            top: '50%',
            marginTop: -(ballW / 2),
            left: ballW / 4,
            transition: pos === 'end' ? `transform ${ms}ms cubic-bezier(0.4,0,0.2,1)` : 'none',
            transform: pos === 'end' ? `translateX(${trackW - ballW * 1.5}px)` : 'translateX(0)',
          }}
        />
      </div>

      {/* Play button */}
      <button
        type="button"
        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
          ms === 0
            ? isDark ? 'text-[#4B4E52] cursor-not-allowed' : 'text-[#D0D7DE] cursor-not-allowed'
            : isDark ? 'hover:bg-[#32353A] text-[#808285] hover:text-[#C1C2C4]' : 'hover:bg-[#F0F2F5] text-[#9E9E9E] hover:text-[#4A4A4A]'
        }`}
        onClick={play}
        disabled={ms === 0}
        title="Visualizar animação"
      >
        <Play size={13} />
      </button>

      {/* Copy */}
      <button
        type="button"
        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${isDark ? 'hover:bg-[#32353A] text-[#808285] hover:text-[#C1C2C4]' : 'hover:bg-[#F0F2F5] text-[#9E9E9E] hover:text-[#4A4A4A]'}`}
        onClick={() => onCopy(value, token)}
      >
        {copied === token ? <Check size={13} /> : <Copy size={13} />}
      </button>
    </div>
  )
}

function EasingCard({ name, value, description, isDark, onCopy, copied }) {
  const path = easingPath(value)
  const isSpring = value.startsWith('spring')

  return (
    <div className={`rounded-2xl border overflow-hidden flex flex-col ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}>
      {/* SVG curve */}
      <div className={`flex items-center justify-center p-6 ${isDark ? 'bg-[#1D2024]' : 'bg-[#F5F6F7]'}`}>
        <svg width="64" height="64" viewBox="0 0 56 56" fill="none">
          {/* Grid lines */}
          <line x1="0" y1="56" x2="56" y2="0" stroke={isDark ? '#4B4E52' : '#E9EFF2'} strokeWidth="1" strokeDasharray="3 3" />
          {/* Curve */}
          <path
            d={path}
            stroke={isDark ? '#BFD8F3' : '#304A64'}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Endpoints */}
          <circle cx="0" cy="56" r="3" fill={isDark ? '#BFD8F3' : '#304A64'} />
          <circle cx="56" cy="0" r="3" fill={isDark ? '#BFD8F3' : '#304A64'} />
        </svg>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{name}</span>
          {isSpring && (
            <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${isDark ? 'bg-[#32353A] text-[#808285]' : 'bg-[#EEF3F7] text-[#304A64]'}`}>
              spring
            </span>
          )}
        </div>
        <p className={`text-[11px] leading-relaxed flex-1 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{description}</p>
        <button
          type="button"
          className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 w-full text-left transition-colors group ${isDark ? 'bg-[#1D2024] hover:bg-[#32353A]' : 'bg-[#F5F6F7] hover:bg-[#EEF3F7]'}`}
          onClick={() => onCopy(value, name)}
        >
          <code className={`text-[9px] font-mono truncate ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}>{value}</code>
          <span className={`shrink-0 transition-colors ${isDark ? 'text-[#808285] group-hover:text-[#C1C2C4]' : 'text-[#9E9E9E] group-hover:text-[#4A4A4A]'}`}>
            {copied === name ? <Check size={12} /> : <Copy size={12} />}
          </span>
        </button>
      </div>
    </div>
  )
}

export default function MotionPage() {
  const [theme, setTheme] = useState('light')
  const [copied, setCopied] = useState(null)
  const isDark = theme === 'dark'

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1800)
  }

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-white'}`}>
      <div className="container max-w-6xl mx-auto space-y-10">
        <PageHeader
          title="Motion"
          description="Movimento com propósito — reforça hierarquia, orienta atenção e comunica causalidade."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Duration */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Duration Tokens</h2>
            <span className={`text-sm ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Clique em ▶ para visualizar cada duração</span>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
            <div
              className={`flex items-center gap-4 px-6 py-3 border-b text-[11px] font-semibold uppercase tracking-widest ${isDark ? 'bg-[#26292E] border-[#4B4E52] text-[#808285]' : 'bg-[#F5F6F7] border-[#E9EFF2] text-[#9E9E9E]'}`}
            >
              <span style={{ width: 172 }} className="shrink-0">Token</span>
              <span style={{ width: 60 }} className="shrink-0">Duração</span>
              <span className="flex-1">Uso</span>
              <span style={{ width: 160 }} className="shrink-0">Preview</span>
              <span style={{ width: 72 }} className="shrink-0" />
            </div>
            {DURATION_TOKENS.map((t) => (
              <DurationRow key={t.token} {...t} isDark={isDark} onCopy={handleCopy} copied={copied} />
            ))}
          </div>
        </div>

        {/* Easing */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Easing Curves</h2>
            <span className={`text-sm ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Curvas de aceleração e desaceleração</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {EASING_CURVES.map((e) => (
              <EasingCard key={e.name} {...e} isDark={isDark} onCopy={handleCopy} copied={copied} />
            ))}
          </div>
        </div>

        {/* Princípios */}
        <div className={`rounded-2xl border p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-[#F5F6F7] border-[#E9EFF2]'}`}>
          {[
            {
              title: 'Movimento com propósito',
              body: 'Anime apenas quando a animação comunica algo — mudança de estado, relação espacial ou causalidade. Animação decorativa gera fadiga.',
            },
            {
              title: 'Duração pela complexidade',
              body: 'Elementos pequenos e próximos usam `fast`. Elementos que trazem contexto novo (modais, drawers) usam `slow` ou `slower`.',
            },
            {
              title: 'Easing assimétrico',
              body: 'Use `Enter` para elementos chegando e `Exit` para elementos saindo — a assimetria torna o movimento mais natural e físico.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="space-y-2">
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{title}</p>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
