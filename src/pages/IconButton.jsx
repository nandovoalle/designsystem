import { Plus } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const STYLES = [
  { id: 'standard', label: 'Standard' },
  { id: 'filled',   label: 'Filled'   },
  { id: 'outlined', label: 'Outlined' },
  { id: 'grey',     label: 'Grey'     },
]

const STATES = [
  { id: 'enabled',  label: 'Enabled'  },
  { id: 'hovered',  label: 'Hovered'  },
  { id: 'focused',  label: 'Focused'  },
  { id: 'pressed',  label: 'Pressed'  },
  { id: 'disabled', label: 'Disabled' },
]

function IconButtonDemo({ style = 'standard', state = 'enabled' }) {
  const isDisabled = state === 'disabled'
  const showTooltip = ['hovered', 'focused', 'pressed'].includes(state)

  // Outer container: filled gets blue bg, outlined gets border
  const containerStyle = {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    flexShrink: 0,
    ...(style === 'filled' && !isDisabled
      ? { backgroundColor: 'var(--blue-600)' }
      : {}),
    ...(style === 'outlined' && !isDisabled
      ? { border: '1px solid var(--blue-600)' }
      : {}),
    ...(style === 'outlined' && isDisabled
      ? { border: '1px solid rgba(0,0,0,0.12)' }
      : {}),
  }

  // State layer background
  const stateLayerBg = (() => {
    if (style === 'standard') {
      if (state === 'hovered') return 'rgba(156,177,200,0.08)'
      if (state === 'focused') return 'rgba(156,177,200,0.12)'
      if (state === 'pressed') return 'rgba(156,177,200,0.16)'
    } else if (style === 'filled') {
      if (isDisabled) return 'rgba(0,0,0,0.12)'
      if (state === 'hovered') return 'rgba(255,255,255,0.08)'
      if (state === 'focused') return 'rgba(255,255,255,0.12)'
      if (state === 'pressed') return 'rgba(255,255,255,0.16)'
    } else if (style === 'outlined') {
      if (state === 'hovered') return 'rgba(48,74,100,0.08)'
      if (state === 'focused') return 'rgba(48,74,100,0.12)'
      if (state === 'pressed') return 'rgba(48,74,100,0.16)'
    } else if (style === 'grey') {
      if (state === 'hovered') return 'rgba(0,0,0,0.08)'
      if (state === 'focused') return 'rgba(0,0,0,0.12)'
      if (state === 'pressed') return 'rgba(0,0,0,0.16)'
    }
    return 'transparent'
  })()

  // Icon color
  const iconColor = (() => {
    if (isDisabled) return 'var(--text-disabled)'
    if (style === 'filled') return 'var(--text-inverse)'
    if (style === 'grey') return 'var(--blue-800)'
    return 'var(--blue-600)'
  })()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={containerStyle}>
        <div
          style={{
            width: 40,
            height: 40,
            backgroundColor: stateLayerBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            padding: 8,
          }}
        >
          <Plus size={24} color={iconColor} strokeWidth={2} />
        </div>
      </div>

      {showTooltip && (
        <div
          style={{
            backgroundColor: 'var(--tooltip)',
            padding: '4px 8px',
            borderRadius: 3,
          }}
        >
          <span
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              lineHeight: '16px',
              letterSpacing: '0.4px',
              color: 'var(--text-inverse)',
              whiteSpace: 'nowrap',
            }}
          >
            Label
          </span>
        </div>
      )}
    </div>
  )
}

export default function IconButtonPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Icon Button"
          description="Botão de ação compacto com ícone, disponível em quatro estilos e cinco estados interativos."
          showThemeToggle
        />

        {/* States × Styles matrix */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variantes e Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Quatro estilos em cinco estados, com tooltip visível nos estados interativos.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-32">Estilo</th>
                  {STATES.map(s => (
                    <th key={s.id} className="p-4 text-sm font-medium text-[#13283C] text-center">
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STYLES.map(({ id, label }, i) => (
                  <tr
                    key={id}
                    className={i < STYLES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}
                  >
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    {STATES.map(s => (
                      <td key={s.id} className="p-4 align-top">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <IconButtonDemo style={id} state={s.id} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Color tokens */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados nos estilos e estados do componente.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Estilo / Estado</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { el: 'Container',   ctx: 'Filled — ativo',          token: '--blue-600',     val: '#304A64',            color: '#304A64' },
                  { el: 'Container',   ctx: 'Outlined — ativo',        token: '--blue-600',     val: '#304A64 (borda)',     color: '#304A64' },
                  { el: 'Container',   ctx: 'Outlined — disabled',     token: 'rgba(0,0,0,.12)',val: 'rgba(0,0,0,0.12)',   color: 'rgba(0,0,0,0.12)' },
                  { el: 'State Layer', ctx: 'Standard — hovered',      token: 'rgba(156,177,200,.08)', val: 'rgba(156,177,200,0.08)', color: 'rgba(156,177,200,0.08)' },
                  { el: 'State Layer', ctx: 'Filled — hovered',        token: 'rgba(255,255,255,.08)', val: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.08)' },
                  { el: 'State Layer', ctx: 'Outlined — hovered',      token: 'rgba(48,74,100,.08)',   val: 'rgba(48,74,100,0.08)',   color: 'rgba(48,74,100,0.08)'   },
                  { el: 'State Layer', ctx: 'Grey — hovered',          token: 'rgba(0,0,0,.08)',       val: 'rgba(0,0,0,0.08)',       color: 'rgba(0,0,0,0.08)'       },
                  { el: 'State Layer', ctx: 'Filled — disabled',       token: 'rgba(0,0,0,.12)',       val: 'rgba(0,0,0,0.12)',       color: 'rgba(0,0,0,0.12)'       },
                  { el: 'Ícone',       ctx: 'Standard / Outlined',     token: '--blue-600',     val: '#304A64',            color: '#304A64' },
                  { el: 'Ícone',       ctx: 'Filled — ativo',          token: '--text-inverse', val: '#FFFFFF',            color: '#FFFFFF' },
                  { el: 'Ícone',       ctx: 'Grey',                    token: '--blue-800',     val: '#13283C',            color: '#13283C' },
                  { el: 'Ícone',       ctx: 'Disabled',                token: '--text-disabled',val: '#9E9E9E',            color: '#9E9E9E' },
                  { el: 'Tooltip',     ctx: 'Fundo',                   token: '--tooltip',      val: '#2D3135',            color: '#2D3135' },
                  { el: 'Tooltip',     ctx: 'Texto',                   token: '--text-inverse', val: '#FFFFFF',            color: '#FFFFFF' },
                ].map(({ el, ctx, token, val, color }, i, arr) => (
                  <tr key={`${el}-${ctx}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{el}</td>
                    <td className="p-4 text-[#666666]">{ctx}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{token}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{val}</td>
                    <td className="p-4">
                      <div
                        className="w-6 h-6 rounded border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Anatomy */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Botão',       desc: '40 × 40 px',   sub: 'Área de toque total' },
              { label: 'Ícone',       desc: '24 × 24 px',   sub: 'Plus (Lucide / MDI)' },
              { label: 'State Layer', desc: '8 px padding',  sub: 'Ao redor do ícone' },
              { label: 'Raio',        desc: '4 px',          sub: 'Container e state layer' },
              { label: 'Tooltip',     desc: '3 px radius',   sub: 'px: 8  py: 4' },
              { label: 'Tooltip',     desc: '12 px / 16 px', sub: 'Font size / Line height' },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}-${desc}`} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage guide */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Standard',
                desc: 'Use para ações secundárias ou em contextos de baixo contraste. O ícone aparece na cor primária sem fundo.',
              },
              {
                label: 'Filled',
                desc: 'Use para a ação principal de uma interface. O fundo azul sólido confere alta hierarquia visual.',
              },
              {
                label: 'Outlined',
                desc: 'Use quando a ação precisa de destaque moderado. A borda demarca o botão sem o peso do filled.',
              },
              {
                label: 'Grey',
                desc: 'Use em contextos neutros onde a ação não deve competir visualmente com elementos primários.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: 'var(--blue-600)' }}
                />
                <div>
                  <p className="text-sm font-medium text-[#13283C]">{label}</p>
                  <p className="text-xs text-[#666666] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Área de toque', '40×40px'],
              ['Ícone', '24×24px — Plus (Lucide / MDI)'],
              ['Border radius', '4px — container e state layer'],
              ['Padding state layer', '8px ao redor do ícone'],
              ['Tooltip border radius', '3px, padding 4px vertical / 8px horizontal'],
              ['Tipografia tooltip', '12px / 400 / 16px, letter-spacing 0.4px, Red Hat Display'],
              ['Estilos', 'Standard, Filled, Outlined, Grey'],
              ['Estados', 'Enabled, Hovered, Focused, Pressed, Disabled'],
              ['Tokens principais', '--blue-600, --blue-800, --text-inverse, --text-disabled, --tooltip'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[180px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
