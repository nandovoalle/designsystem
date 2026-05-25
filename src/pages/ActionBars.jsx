import { useState } from 'react'
import { Plus } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const STATES = [
  { id: 'enabled',  label: 'Enabled'  },
  { id: 'hovered',  label: 'Hovered'  },
  { id: 'focused',  label: 'Focused'  },
  { id: 'pressed',  label: 'Pressed'  },
  { id: 'selected', label: 'Selected' },
  { id: 'disabled', label: 'Disabled' },
]

const TOKENS = [
  { el: 'State Layer',  estado: 'Hovered / Selected', token: '--blue-600',                    val: '#304A64', color: '#304A64' },
  { el: 'State Layer',  estado: 'Focused',            token: '--blue-600 + rgba(fff, 0.12)',  val: '#304A64', color: '#304A64' },
  { el: 'State Layer',  estado: 'Pressed',            token: '--blue-600 + rgba(fff, 0.16)',  val: '#304A64', color: '#304A64' },
  { el: 'Tooltip',      estado: 'Hovered / Active',   token: '--tooltip',                    val: '#2D3135', color: '#2D3135' },
  { el: 'Ícone',        estado: 'Active',             token: '--text-inverse',               val: '#FFFFFF', color: '#FFFFFF' },
  { el: 'Ícone',        estado: 'Enabled',            token: '--blue-600',                   val: '#304A64', color: '#304A64' },
  { el: 'Ícone',        estado: 'Disabled',           token: '--text-disabled',              val: '#9E9E9E', color: '#9E9E9E' },
]

const ANATOMY = [
  { label: 'Botão',       desc: '40 × 40 px',   sub: 'Área de toque' },
  { label: 'Ícone',       desc: '24 × 24 px',   sub: 'Plus — Lucide' },
  { label: 'State Layer', desc: 'padding 8px',  sub: 'Ao redor do ícone' },
  { label: 'Tooltip',     desc: '3px radius',   sub: 'px 8 · py 4 · 12px / 16px · ls 0.4px' },
]

function IconButtonActions({ local = 'barra lateral', state = 'enabled' }) {
  const showTooltip = ['hovered', 'focused', 'pressed', 'selected'].includes(state)
  const isDisabled  = state === 'disabled'

  const containerBg  = state === 'focused' || state === 'pressed' ? 'var(--blue-600)' : 'transparent'
  const stateLayerBg =
    state === 'pressed'  ? 'rgba(255,255,255,0.16)' :
    state === 'focused'  ? 'rgba(255,255,255,0.12)' :
    state === 'hovered' || state === 'selected' ? 'var(--blue-600)' :
    'transparent'
  const iconColor =
    isDisabled  ? 'var(--text-disabled)' :
    showTooltip ? 'var(--text-inverse)'  :
    'var(--blue-600)'

  const buttonEl = (
    <div style={{ width: 40, height: 40, backgroundColor: containerBg, flexShrink: 0 }}>
      <div style={{ width: 40, height: 40, backgroundColor: stateLayerBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Plus size={24} color={iconColor} strokeWidth={2} />
      </div>
    </div>
  )

  const tooltipEl = showTooltip ? (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--tooltip)', padding: '4px 8px', borderRadius: 3, flexShrink: 0 }}>
      <span style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: '0.4px', color: 'var(--text-inverse)', whiteSpace: 'nowrap' }}>
        Label
      </span>
    </div>
  ) : null

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 40, gap: 8 }}>
      {local === 'atendimento' ? <>{tooltipEl}{buttonEl}</> : <>{buttonEl}{tooltipEl}</>}
    </div>
  )
}

function SectionTitle({ isDark, children, className = 'mb-1' }) {
  return (
    <h2 className={`text-xl font-medium ${className} ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
      {children}
    </h2>
  )
}

function SectionDesc({ isDark, children, className = 'mb-6' }) {
  return (
    <p className={`text-sm ${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
      {children}
    </p>
  )
}

function Canvas({ isDark, children }) {
  return (
    <div
      className={`rounded-[16px] border p-8 ${isDark ? 'bg-[#292C30] border-[#4B4E52]' : 'bg-[#F5F7FA] border-black/8'}`}
      style={{
        backgroundImage: isDark
          ? 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)'
          : 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      {children}
    </div>
  )
}

export default function ActionBarsPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  const rowBorder = isDark ? 'border-[#2A2D31]' : 'border-black/6'
  const headerBg  = isDark ? 'bg-[#292C30]'     : 'bg-[#FAFAFA]'
  const headerBorder = isDark ? 'border-[#3A3D41]' : 'border-black/8'
  const cardBg    = isDark ? 'bg-[#1D2024] border-[#3A3D41]' : 'bg-white border-black/8 shadow-sm'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Action bars"
          description="Botões de ação com ícone e tooltip posicionados em barras laterais e interfaces de atendimento."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Preview */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Preview</SectionTitle>
          <SectionDesc isDark={isDark}>
            Seis estados em duas variantes de posicionamento do tooltip.
          </SectionDesc>
          <Canvas isDark={isDark}>
            <div className={`rounded-[12px] border overflow-hidden ${cardBg}`}>
              {/* Header row */}
              <div className={`grid grid-cols-[160px_1fr_1fr] px-6 py-3 border-b ${headerBg} ${headerBorder}`}>
                <span className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${isDark ? 'text-[#505356]' : 'text-[#BABABA]'}`}>
                  Estado
                </span>
                <span className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${isDark ? 'text-[#505356]' : 'text-[#BABABA]'}`}>
                  Barra Lateral
                </span>
                <span className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${isDark ? 'text-[#505356]' : 'text-[#BABABA]'}`}>
                  Atendimento
                </span>
              </div>
              {/* State rows */}
              {STATES.map(({ id, label }, i) => (
                <div
                  key={id}
                  className={`grid grid-cols-[160px_1fr_1fr] px-6 py-4 items-center ${i < STATES.length - 1 ? `border-b ${rowBorder}` : ''}`}
                >
                  <span className={`text-sm ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{label}</span>
                  <IconButtonActions local="barra lateral" state={id} />
                  <IconButtonActions local="atendimento"   state={id} />
                </div>
              ))}
            </div>
          </Canvas>
        </div>

        {/* Anatomia */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Anatomia</SectionTitle>
          <SectionDesc isDark={isDark}>Medidas e espaçamentos do componente.</SectionDesc>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ANATOMY.map(({ label, desc, sub }) => (
              <div
                key={label}
                className={`rounded-[14px] border p-5 flex flex-col gap-1 ${
                  isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
                }`}
              >
                <span className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${isDark ? 'text-[#505356]' : 'text-[#C0C0C0]'}`}>
                  {label}
                </span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{desc}</span>
                <span className={`text-xs ${isDark ? 'text-[#808285]' : 'text-[#999]'}`}>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Tokens de Cor</SectionTitle>
          <SectionDesc isDark={isDark}>Tokens utilizados nos estados do componente.</SectionDesc>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'}`}>
            {/* Table header */}
            <div className={`grid grid-cols-[140px_180px_1fr_80px_40px] px-6 py-3 border-b ${headerBg} ${headerBorder}`}>
              {['Elemento', 'Estado', 'Token', 'Valor', ''].map((h) => (
                <span key={h} className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${isDark ? 'text-[#505356]' : 'text-[#BABABA]'}`}>
                  {h}
                </span>
              ))}
            </div>
            {TOKENS.map(({ el, estado, token, val, color }, i) => (
              <div
                key={`${el}-${estado}`}
                className={`grid grid-cols-[140px_180px_1fr_80px_40px] px-6 py-3 items-center text-sm ${i < TOKENS.length - 1 ? `border-b ${rowBorder}` : ''}`}
              >
                <span className={`font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{el}</span>
                <span className={isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}>{estado}</span>
                <span className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#999]'}`}>{token}</span>
                <span className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#999]'}`}>{val}</span>
                <div
                  className="w-5 h-5 rounded border border-black/10 flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div>
          <SectionTitle isDark={isDark} className="mb-4">Especificações Técnicas</SectionTitle>
          <div className={`rounded-[14px] border p-6 space-y-3 text-sm ${isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'}`}>
            {[
              ['Área de toque',          '40×40px'],
              ['Ícone',                  '24×24px — Plus (Lucide)'],
              ['Border radius',          '0px — sem arredondamento no container'],
              ['Tooltip border radius',  '3px'],
              ['Tooltip padding',        '4px vertical, 8px horizontal'],
              ['Tipografia tooltip',     '12px / Regular / 16px · letter-spacing 0.4px · Red Hat Display'],
              ['Variante barra lateral', 'Tooltip posicionado à direita do ícone'],
              ['Variante atendimento',   'Tooltip posicionado à esquerda do ícone'],
              ['Tokens',                 '--blue-600, --tooltip, --text-inverse, --text-disabled'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className={`font-medium min-w-[220px] ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                  {label}:
                </span>
                <span className={isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
