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

function IconButtonActions({ local = 'barra lateral', state = 'enabled' }) {
  const showTooltip = ['hovered', 'focused', 'pressed', 'selected'].includes(state)
  const isDisabled = state === 'disabled'

  // Container (outer shell) gets blue only on focused/pressed
  const containerBg =
    state === 'focused' || state === 'pressed' ? 'var(--blue-600)' : 'transparent'

  // State-layer carries the primary visual feedback
  const stateLayerBg =
    state === 'pressed'  ? 'rgba(255,255,255,0.16)' :
    state === 'focused'  ? 'rgba(255,255,255,0.12)' :
    state === 'hovered' || state === 'selected' ? 'var(--blue-600)' :
    'transparent'

  const iconColor =
    isDisabled  ? 'var(--text-disabled)' :
    showTooltip ? 'var(--text-inverse)' :
    'var(--blue-600)'

  const buttonEl = (
    <div
      style={{ width: 40, height: 40, backgroundColor: containerBg, flexShrink: 0 }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          backgroundColor: stateLayerBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Plus size={24} color={iconColor} strokeWidth={2} />
      </div>
    </div>
  )

  const tooltipEl = showTooltip ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--tooltip)',
        padding: '4px 8px',
        borderRadius: 3,
        flexShrink: 0,
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
  ) : null

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 40, gap: 8 }}>
      {local === 'atendimento' ? (
        <>
          {tooltipEl}
          {buttonEl}
        </>
      ) : (
        <>
          {buttonEl}
          {tooltipEl}
        </>
      )}
    </div>
  )
}

export default function ActionBarsPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Action bars"
          description="Botões de ação com ícone e tooltip posicionados em barras laterais e interfaces de atendimento."
          showThemeToggle
        />

        {/* States matrix */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variantes e Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Seis estados em duas variantes de posicionamento do tooltip.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-32">Estado</th>
                  <th className="p-4 text-sm font-medium text-[#13283C] text-left">Barra Lateral</th>
                  <th className="p-4 text-sm font-medium text-[#13283C] text-left">Atendimento</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map(({ id, label }, i) => (
                  <tr
                    key={id}
                    className={i < STATES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}
                  >
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    <td className="p-4">
                      <IconButtonActions local="barra lateral" state={id} />
                    </td>
                    <td className="p-4">
                      <IconButtonActions local="atendimento" state={id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tokens reference */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados nos estados do componente.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Estado</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { el: 'State Layer',  estado: 'Hovered / Selected', token: '--blue-600',      val: '#304A64', color: '#304A64' },
                  { el: 'State Layer',  estado: 'Focused',             token: '--blue-600 + rgba(fff,0.12)', val: '#304A64', color: '#304A64' },
                  { el: 'State Layer',  estado: 'Pressed',             token: '--blue-600 + rgba(fff,0.16)', val: '#304A64', color: '#304A64' },
                  { el: 'Tooltip',      estado: 'Hovered / Active',    token: '--tooltip',      val: '#2D3135', color: '#2D3135' },
                  { el: 'Ícone',        estado: 'Active',              token: '--text-inverse', val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Ícone',        estado: 'Enabled',             token: '--blue-600',     val: '#304A64', color: '#304A64' },
                  { el: 'Ícone',        estado: 'Disabled',            token: '--text-disabled',val: '#9E9E9E', color: '#9E9E9E' },
                ].map(({ el, estado, token, val, color }, i, arr) => (
                  <tr key={`${el}-${estado}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{el}</td>
                    <td className="p-4 text-[#666666]">{estado}</td>
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
              { label: 'Botão',      desc: '40 × 40 px',  sub: 'Área de toque' },
              { label: 'Ícone',      desc: '24 × 24 px',  sub: 'Plus (Lucide)' },
              { label: 'State Layer',desc: '8 px padding', sub: 'Ao redor do ícone' },
              { label: 'Tooltip',    desc: '3 px radius',  sub: 'px: 8 py: 4' },
              { label: 'Tooltip',    desc: '12 px / 16 px',sub: 'Font size / Line height' },
              { label: 'Tooltip',    desc: '0.4 px',       sub: 'Letter spacing' },
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
                label: 'Barra Lateral',
                desc: 'Botão posicionado na barra lateral esquerda da interface. O tooltip aparece à direita do ícone.',
              },
              {
                label: 'Atendimento',
                desc: 'Botão posicionado em interface de atendimento/chat. O tooltip aparece à esquerda do ícone.',
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
              ['Ícone', '24×24px — Plus (Lucide)'],
              ['Border radius', '0px — sem arredondamento no container'],
              ['Tooltip border radius', '3px'],
              ['Tooltip padding', '4px vertical, 8px horizontal'],
              ['Tipografia tooltip', '12px / 400 / 16px, letter-spacing 0.4px, Red Hat Display'],
              ['Variante barra lateral', 'Tooltip posicionado à direita do ícone'],
              ['Variante atendimento', 'Tooltip posicionado à esquerda do ícone'],
              ['Tokens', '--blue-600, --tooltip, --text-inverse, --text-disabled'],
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
