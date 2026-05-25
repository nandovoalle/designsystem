import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

/* ── SVG do símbolo ──────────────────────────────────────────────────────── */
function FaviconSymbol({ size, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 9 13" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.91992 0.179688L1.49414 12.1797L1.34668 12.1494V12.1504L1.49414 12.1797L1.46973 12.3008H0L0.0361328 12.1211L2.46191 0.121094L2.48633 0H3.95605L3.91992 0.179688ZM8.50879 0.179688L6.08301 12.1797L5.93555 12.1494V12.1504L6.08301 12.1797L6.05859 12.3008H4.58887L4.625 12.1211L7.05078 0.121094L7.0752 0H8.54492L8.50879 0.179688Z" fill={color} />
    </svg>
  )
}

/* ── Favicon isolado ─────────────────────────────────────────────────────── */
function FaviconIcon({ px, variant = 'light', showLabel = true }) {
  const isDarkVariant = variant === 'dark'
  const bg     = isDarkVariant ? '#FFFFFF' : '#13283C'
  const symbol = isDarkVariant ? '#13283C' : '#FFFFFF'
  const capped = Math.min(px, 64)

  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className="flex items-center justify-center rounded-[2px] flex-shrink-0"
        style={{ width: capped, height: capped, backgroundColor: bg, boxShadow: isDarkVariant ? '0 0 0 1px rgba(0,0,0,0.08)' : 'none' }}
      >
        <FaviconSymbol size={capped * 0.5} color={symbol} />
      </div>
      {showLabel && (
        <span className="text-[11px] text-[#9E9E9E] font-mono">{px}×{px}</span>
      )}
    </div>
  )
}

/* ── Favicon com badge de notificação ────────────────────────────────────── */
function FaviconWithBadge({ count }) {
  const display = count > 9 ? '+9' : String(count)
  const isOne   = display === '1'

  return (
    <div className="inline-grid relative shrink-0 place-items-start"
      style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
      <div
        className="col-start-1 row-start-1 mt-[2px] size-[16px] flex items-center justify-center rounded-[2px] shrink-0"
        style={{ backgroundColor: '#13283C' }}
      >
        <FaviconSymbol size={8} color="white" />
      </div>
      <div
        className="col-start-1 row-start-1 mt-0 size-[14px] rounded-[2px]"
        style={{ backgroundColor: '#E9786B', marginLeft: '10px' }}
      />
      <div
        className="col-start-1 row-start-1 mt-[2px] flex items-center justify-center text-white font-bold text-center"
        style={{
          marginLeft: isOne ? '13px' : '12px',
          width: isOne ? '8px' : '10px',
          height: '10px',
          fontSize: '8px',
          fontFamily: '"Red Hat Display", sans-serif',
          lineHeight: '16px',
        }}
      >
        {display}
      </div>
    </div>
  )
}

/* ── Mockup de aba de browser ────────────────────────────────────────────── */
function BrowserTabMockup({ badgeCount, isDark }) {
  const panelBg    = isDark ? '#32353A' : '#FFFFFF'
  const borderCol  = isDark ? '#4B4E52' : 'rgba(0,0,0,0.08)'
  const chromeBg   = isDark ? '#1D2024' : '#F0F2F4'
  const tabBg      = isDark ? '#32353A' : '#FFFFFF'
  const urlBg      = isDark ? '#2A2D31' : '#F5F5F5'
  const urlText    = isDark ? '#808285' : '#9E9E9E'
  const tabText    = isDark ? '#C1C2C4' : '#4A4A4A'
  const dotColor   = isDark ? '#4B4E52' : '#D1D5DB'

  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: borderCol, background: panelBg }}>
      {/* Chrome bar */}
      <div className="px-4 pt-3 pb-0" style={{ background: chromeBg }}>
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 mb-3">
          {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
            <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {/* Tabs */}
        <div className="flex items-end gap-0.5">
          {/* Tab ativa */}
          <div
            className="flex items-center gap-1.5 px-3 py-2 rounded-t-lg text-xs font-medium"
            style={{ background: tabBg, color: tabText }}
          >
            {badgeCount > 0
              ? <FaviconWithBadge count={badgeCount} />
              : <div className="size-[16px] flex items-center justify-center rounded-[2px]" style={{ background: '#13283C' }}>
                  <FaviconSymbol size={8} color="white" />
                </div>
            }
            <span>Design System</span>
          </div>
          {/* Tab inativa */}
          <div className="flex items-center gap-1.5 px-3 py-2 text-xs" style={{ color: urlText }}>
            <span style={{ background: dotColor }} className="w-3.5 h-3.5 rounded-sm" />
            <span>Nova aba</span>
          </div>
        </div>
      </div>
      {/* Address bar */}
      <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: chromeBg, borderTop: `1px solid ${borderCol}` }}>
        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs" style={{ background: urlBg }}>
          <span style={{ color: urlText }}>🔒</span>
          <span style={{ color: urlText }}>https://erp.grupovoalle.com.br/</span>
        </div>
      </div>
      {/* Page content placeholder */}
      <div className="px-6 pt-5 pb-6 flex flex-col gap-3">
        <div className="h-3 w-2/3 rounded-full" style={{ background: isDark ? '#3D4045' : '#F0F0F0' }} />
        <div className="h-2 w-full rounded-full" style={{ background: isDark ? '#3D4045' : '#F0F0F0' }} />
        <div className="h-2 w-4/5 rounded-full" style={{ background: isDark ? '#3D4045' : '#F0F0F0' }} />
      </div>
    </div>
  )
}

const SIZES = [
  { size: 16,  desc: 'Padrão — tabs do browser' },
  { size: 32,  desc: 'Bookmarks e shortcut' },
  { size: 48,  desc: 'App shortcut (desktop)' },
  { size: 64,  desc: 'Alta resolução (2×)' },
]

const SPECS = [
  ['Formato',               'SVG (escalável) e PNG (bitmap)'],
  ['Tamanhos recomendados', '16, 32, 48, 64, 128, 256 px'],
  ['Variante Light',        'Fundo #13283C com símbolo branco'],
  ['Variante Dark',         'Fundo branco com símbolo #13283C'],
  ['Badge — cor',           '#E9786B (--state-red / --color-error)'],
  ['Badge — tipografia',    'Red Hat Display Bold · 8px · 14×14px'],
  ['Border radius',         '2px — consistente com o Design System'],
]

function Card({ isDark, className = '', children }) {
  return (
    <div className={`rounded-2xl border ${className} ${isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/8'}`}>
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

export default function FaviconPage() {
  const [theme, setTheme]         = useState('light')
  const [badgeCount, setBadgeCount] = useState(3)
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-[#F7F9FB]'}`}>
      <div className="container max-w-5xl mx-auto">

        <PageHeader
          title="Favicon"
          description="Ícone da aplicação em diferentes tamanhos, variantes e contextos de uso."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* ── Hero — variantes lado a lado ──────────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* Variante Light */}
          <Card isDark={isDark} className="p-8 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: '#13283C' }}
              >
                <FaviconSymbol size={40} color="white" />
              </div>
              <div className="text-center">
                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Variante Light</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Fundo escuro · símbolo branco</p>
              </div>
            </div>
            <div className="flex items-end gap-4">
              {[16, 32, 48].map(px => <FaviconIcon key={px} px={px} variant="light" />)}
            </div>
            <code className={`text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>#13283C</code>
          </Card>

          {/* Variante Dark */}
          <Card isDark={isDark} className="p-8 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}
              >
                <FaviconSymbol size={40} color="#13283C" />
              </div>
              <div className="text-center">
                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Variante Dark</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Fundo claro · símbolo escuro</p>
              </div>
            </div>
            <div className="flex items-end gap-4">
              {[16, 32, 48].map(px => <FaviconIcon key={px} px={px} variant="dark" />)}
            </div>
            <code className={`text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>#FFFFFF</code>
          </Card>
        </div>

        {/* ── Em Contexto — mockup de browser ───────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Em Contexto</SectionLabel>
          <SectionTitle isDark={isDark}>Aba do navegador</SectionTitle>
          <SectionDesc isDark={isDark}>
            Como o favicon aparece na aba do browser — com e sem badge de notificação. Use o slider para simular contagens.
          </SectionDesc>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <p className={`text-xs font-medium mb-3 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Sem badge</p>
              <BrowserTabMockup badgeCount={0} isDark={isDark} />
            </div>
            <div>
              <p className={`text-xs font-medium mb-3 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Com badge</p>
              <BrowserTabMockup badgeCount={badgeCount} isDark={isDark} />
            </div>
          </div>

          {/* Slider badge */}
          <Card isDark={isDark} className="px-6 py-4 flex items-center gap-4">
            <span className={`text-xs font-medium shrink-0 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Badge count</span>
            <input
              type="range" min={1} max={12} value={badgeCount}
              onChange={e => setBadgeCount(Number(e.target.value))}
              className="flex-1 accent-[var(--state-red)] cursor-pointer"
            />
            <span className={`text-sm font-semibold font-mono w-6 text-center shrink-0 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
              {badgeCount > 9 ? '+9' : badgeCount}
            </span>
          </Card>
        </div>

        {/* ── Tamanhos ──────────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Tamanhos</SectionLabel>
          <SectionTitle isDark={isDark}>Grade de tamanhos</SectionTitle>
          <SectionDesc isDark={isDark}>
            Tamanhos exportados para cobrir diferentes contextos — do favicon padrão à resolução 2×.
          </SectionDesc>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SIZES.map(({ size, desc }) => (
              <Card key={size} isDark={isDark} className="p-6 flex flex-col items-center gap-4">
                <FaviconIcon px={size} variant="light" showLabel={false} />
                <div className="text-center">
                  <p className={`text-sm font-semibold font-mono ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                    {size}×{size}
                  </p>
                  <p className={`text-[11px] mt-1 leading-snug ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Badge de notificação ──────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Badge</SectionLabel>
          <SectionTitle isDark={isDark}>Notificações no favicon</SectionTitle>
          <SectionDesc isDark={isDark}>
            Badge sobreposto ao favicon para indicar contagens não lidas. Trunca em "+9" para valores maiores que 9.
          </SectionDesc>
          <Card isDark={isDark} className="p-8">
            <div className="flex flex-wrap items-end justify-center gap-8">
              {[1, 2, 3, 5, 9, 10].map((n) => (
                <div key={n} className="flex flex-col items-center gap-4">
                  <FaviconWithBadge count={n} />
                  <span className={`text-[11px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                    {n > 9 ? '+9' : n}
                  </span>
                </div>
              ))}
            </div>
            <div className={`mt-6 pt-5 border-t flex items-center gap-3 ${isDark ? 'border-[#4B4E52]' : 'border-black/5'}`}>
              <span
                className="inline-flex w-3.5 h-3.5 rounded-[2px] shrink-0"
                style={{ background: '#E9786B' }}
              />
              <span className={`text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                Cor do badge: <code className="font-mono">#E9786B</code> — token <code className="font-mono">--state-red</code>
              </span>
            </div>
          </Card>
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
