import { useState } from 'react'
import { Bell, Mail, ShoppingCart, User } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const BADGE_COLORS = [
  { name: 'Red',    bg: 'var(--state-red)',    token: '--state-red',    hex: '#E9786B' },
  { name: 'Yellow', bg: 'var(--state-yellow)', token: '--state-yellow', hex: '#F5C842' },
  { name: 'Blue',   bg: 'var(--state-blue)',   token: '--state-blue',   hex: '#4A90D9' },
  { name: 'Green',  bg: 'var(--state-green)',  token: '--state-green',  hex: '#5CB85C' },
]

const SEMANTICS = [
  { name: 'Red',    bg: 'var(--state-red)',    token: '--state-red',    meaning: 'Urgente, erro, crítico',  desc: 'Use para alertas que exigem ação imediata.' },
  { name: 'Yellow', bg: 'var(--state-yellow)', token: '--state-yellow', meaning: 'Atenção, pendente',       desc: 'Indica itens que aguardam revisão ou ação.' },
  { name: 'Blue',   bg: 'var(--state-blue)',   token: '--state-blue',   meaning: 'Informativo, novo',       desc: 'Destaca novidades ou informações neutras.' },
  { name: 'Green',  bg: 'var(--state-green)',  token: '--state-green',  meaning: 'Sucesso, ativo, online',  desc: 'Confirma estado positivo ou disponibilidade.' },
]

const SPECS = [
  ['Small badge',              '6×6px · border-radius 100px'],
  ['Large — 1 dígito',         '16×16px mínimo · border-radius 100px'],
  ['Large — 2+ dígitos',       'Até 34px · padding horizontal 4px · altura 16px'],
  ['Limite de contagem',       '99 — exibe "+99" para valores superiores'],
  ['Tipografia (large)',       'Red Hat Display Medium 500 · 11px / 16px · letter-spacing 0.5px'],
  ['Cor do texto — light',     '#FFFFFF'],
  ['Cor do texto — dark',      '#4A4A4A'],
  ['Tokens de cor',            '--state-red · --state-yellow · --state-blue · --state-green'],
]

function BadgeSmall({ bg }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-[100px]"
      style={{ width: 6, height: 6, backgroundColor: bg }}
      aria-hidden
    />
  )
}

function BadgeLarge({ count, bg, isDark }) {
  const display = count > 99 ? '+99' : String(count)
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[100px]"
      style={{
        backgroundColor: bg,
        minWidth: 16,
        maxWidth: 34,
        height: 16,
        paddingLeft: 4,
        paddingRight: 4,
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: 11,
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '0.5px',
        color: isDark ? '#4A4A4A' : '#FFFFFF',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {display}
    </span>
  )
}

function Card({ isDark, className = '', children }) {
  return (
    <div
      className={`rounded-2xl border ${className} ${
        isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/8'
      }`}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children, isDark }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
      {children}
    </p>
  )
}

function SectionTitle({ children, isDark, className = '' }) {
  return (
    <h2 className={`text-xl font-semibold ${className} ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
      {children}
    </h2>
  )
}

function SectionDesc({ children, isDark, className = 'mt-1 mb-8' }) {
  return (
    <p className={`text-sm leading-relaxed ${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
      {children}
    </p>
  )
}

/* Ícone com badge flutuante no canto superior direito */
function IconWithBadge({ icon: Icon, count, color, isDark, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-flex">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isDark ? 'bg-[#1D2024]' : 'bg-[#F5F5F5]'
          }`}
        >
          <Icon size={20} className={isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'} />
        </div>
        <span className="absolute -top-1 -right-1">
          <BadgeLarge count={count} bg={color} isDark={isDark} />
        </span>
      </div>
      <span className={`text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{label}</span>
    </div>
  )
}

/* Avatar com dot de status */
function AvatarWithDot({ color, isDark, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-flex">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
            isDark ? 'bg-[#1D2024] text-[#C1C2C4]' : 'bg-[#E9EFF2] text-[#4A4A4A]'
          }`}
        >
          NV
        </div>
        <span
          className="absolute bottom-0 right-0 w-3 h-3 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 0 2px ${isDark ? '#32353A' : '#ffffff'}`,
          }}
        />
      </div>
      <span className={`text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{label}</span>
    </div>
  )
}

export default function BadgesPage() {
  const [theme, setTheme]   = useState('light')
  const [count, setCount]   = useState(3)
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-[#F7F9FB]'}`}>
      <div className="container max-w-5xl mx-auto">

        <PageHeader
          title="Badges"
          description="Indicadores visuais compactos para contagens, status e notificações."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* ── Hero Preview ──────────────────────────────────────────────── */}
        <Card isDark={isDark} className="p-10 mb-6">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap items-end justify-center gap-10">
              {/* Large badges em destaque */}
              {BADGE_COLORS.map(({ name, bg }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <BadgeLarge count={count} bg={bg} isDark={isDark} />
                  <span className={`text-[11px] ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{name}</span>
                </div>
              ))}

              {/* Divisor */}
              <div className={`w-px h-8 self-center ${isDark ? 'bg-[#4B4E52]' : 'bg-black/10'}`} />

              {/* Small badges */}
              {BADGE_COLORS.map(({ name, bg }) => (
                <div key={`sm-${name}`} className="flex flex-col items-center gap-2">
                  <BadgeSmall bg={bg} />
                  <span className={`text-[11px] ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{name}</span>
                </div>
              ))}
            </div>

            {/* Slider interativo */}
            <div className={`flex items-center gap-4 px-6 py-3 rounded-xl ${isDark ? 'bg-[#1D2024]' : 'bg-[#F5F5F5]'}`}>
              <span className={`text-xs font-medium ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Count</span>
              <input
                type="range"
                min={1}
                max={120}
                value={count}
                onChange={e => setCount(Number(e.target.value))}
                className="w-40 accent-[var(--state-blue)] cursor-pointer"
              />
              <span
                className={`text-sm font-semibold font-mono w-8 text-center ${isDark ? 'text-white' : 'text-[#13283C]'}`}
              >
                {count > 99 ? '+99' : count}
              </span>
            </div>
          </div>
        </Card>

        {/* ── Uso em contexto ───────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Uso em Contexto</SectionLabel>
          <SectionTitle isDark={isDark}>Badges sobre elementos</SectionTitle>
          <SectionDesc isDark={isDark}>
            Badges são posicionados no canto superior direito (large) ou inferior direito (small/status) do elemento pai.
          </SectionDesc>
          <Card isDark={isDark} className="p-8">
            <div className="flex flex-wrap items-end justify-center gap-12">
              <IconWithBadge icon={Bell}         count={count}  color="var(--state-red)"    isDark={isDark} label="Notificações" />
              <IconWithBadge icon={Mail}         count={5}      color="var(--state-blue)"   isDark={isDark} label="Mensagens" />
              <IconWithBadge icon={ShoppingCart} count={12}     color="var(--state-green)"  isDark={isDark} label="Carrinho" />
              <div className={`w-px h-8 self-center ${isDark ? 'bg-[#4B4E52]' : 'bg-black/10'}`} />
              <AvatarWithDot color="var(--state-green)"  isDark={isDark} label="Online" />
              <AvatarWithDot color="var(--state-yellow)" isDark={isDark} label="Ausente" />
              <AvatarWithDot color="var(--state-red)"    isDark={isDark} label="Ocupado" />
            </div>
          </Card>
        </div>

        {/* ── Variantes ─────────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Variantes</SectionLabel>
          <SectionTitle isDark={isDark}>Small e Large</SectionTitle>
          <SectionDesc isDark={isDark}>
            Dois tamanhos — o small é um ponto de status puro; o large suporta contagem numérica.
          </SectionDesc>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Small */}
            <Card isDark={isDark} className="p-6">
              <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                Small
              </p>
              <p className={`text-sm mb-6 ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
                6×6px · border-radius 100%
              </p>
              <div className="flex items-center gap-6">
                {BADGE_COLORS.map(({ name, bg }) => (
                  <div key={name} className="flex flex-col items-center gap-3">
                    <BadgeSmall bg={bg} />
                    <span className={`text-[11px] ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Large */}
            <Card isDark={isDark} className="p-6">
              <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                Large
              </p>
              <p className={`text-sm mb-6 ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
                16px altura · min 16px · max 34px
              </p>
              <div className="flex items-center gap-6">
                {BADGE_COLORS.map(({ name, bg }) => (
                  <div key={name} className="flex flex-col items-center gap-3">
                    <BadgeLarge count={3} bg={bg} isDark={isDark} />
                    <span className={`text-[11px] ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* ── Variações de contagem ─────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Contagem</SectionLabel>
          <SectionTitle isDark={isDark}>Variações numéricas</SectionTitle>
          <SectionDesc isDark={isDark}>
            A largura cresce com o número de dígitos. Valores acima de 99 são truncados para "+99".
          </SectionDesc>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1, 9, 42, 100].map((n) => (
              <Card key={n} isDark={isDark} className="p-5 flex flex-col items-center gap-4">
                <BadgeLarge count={n} bg="var(--state-red)" isDark={isDark} />
                <div className="text-center">
                  <p className={`text-xs font-mono font-medium ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}>
                    count={n}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                    {n <= 9 ? '16px' : n <= 99 ? '20px' : '—'}
                    {n > 99 && 'exibe +99'}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Semântica ─────────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Semântica</SectionLabel>
          <SectionTitle isDark={isDark}>Cores e significados</SectionTitle>
          <SectionDesc isDark={isDark}>
            Cada cor mapeia para um estado de interface específico — use consistentemente.
          </SectionDesc>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEMANTICS.map(({ name, bg, token, meaning, desc }) => (
              <Card key={name} isDark={isDark} className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: bg, opacity: 0.15 }}
                  />
                  <span
                    className="w-8 h-8 rounded-lg flex-shrink-0 -ml-10"
                    style={{ backgroundColor: bg }}
                  />
                  <BadgeLarge count={3} bg={bg} isDark={isDark} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{name}</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{meaning}</p>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{desc}</p>
                <code className={`text-[11px] font-mono mt-auto ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{token}</code>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Especificações ────────────────────────────────────────────── */}
        <div>
          <SectionLabel isDark={isDark}>Especificações</SectionLabel>
          <SectionTitle isDark={isDark} className="mb-4">Técnicas</SectionTitle>
          <Card isDark={isDark} className="overflow-hidden">
            {SPECS.map(([label, value], i) => (
              <div
                key={label}
                className={`flex gap-4 px-6 py-4 text-sm ${
                  i !== SPECS.length - 1
                    ? isDark ? 'border-b border-[#4B4E52]' : 'border-b border-black/5'
                    : ''
                }`}
              >
                <span className={`font-medium min-w-[200px] shrink-0 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                  {label}
                </span>
                <span className={`font-mono text-xs self-center ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
                  {value}
                </span>
              </div>
            ))}
          </Card>
        </div>

      </div>
    </div>
  )
}
