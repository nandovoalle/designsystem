import { Plus, ChevronRight, List } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const STATES = [
  { id: 'enabled',  label: 'Enabled'  },
  { id: 'hovered',  label: 'Hovered'  },
  { id: 'pressed',  label: 'Pressed'  },
  { id: 'selected', label: 'Selected' },
  { id: 'disabled', label: 'Disabled' },
]

const VARIANTS = [
  { id: 'with-icons',    label: 'Com Ícones',    showLeading: true,  showTrailing: true  },
  { id: 'leading-only',  label: 'Só Leading',    showLeading: true,  showTrailing: false },
  { id: 'trailing-only', label: 'Só Trailing',   showLeading: false, showTrailing: true  },
  { id: 'text-only',     label: 'Somente Texto', showLeading: false, showTrailing: false },
]

function MenuListItem({ state = 'enabled', label = 'Menu item', showLeading = true, showTrailing = true }) {
  const isDisabled = state === 'disabled'
  const isSelected = state === 'selected'
  const isHovered  = state === 'hovered'
  const isPressed  = state === 'pressed'

  const stateBg   = isSelected ? '#304a64' : isPressed ? 'rgba(0,0,0,0.16)' : isHovered ? 'rgba(0,0,0,0.08)' : 'transparent'
  const leadingColor = isSelected ? '#ffffff' : isDisabled ? '#9e9e9e' : 'var(--blue-200)'
  const iconColor    = isSelected ? '#ffffff' : isDisabled ? '#9e9e9e' : '#4a4a4a'
  const textColor = isSelected ? '#ffffff' : isDisabled ? '#9e9e9e' : '#4a4a4a'

  return (
    <div style={{ height: 40, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          padding: 8,
          borderRadius: 4,
          width: 200,
          backgroundColor: stateBg,
        }}
      >
        {showLeading && <Plus size={24} color={leadingColor} strokeWidth={1.5} style={{ flexShrink: 0 }} />}
        <span
          style={{
            flex: 1,
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '0.25px',
            color: textColor,
            minWidth: 0,
          }}
        >
          {label}
        </span>
        {showTrailing && <ChevronRight size={24} color={iconColor} strokeWidth={1.5} style={{ flexShrink: 0 }} />}
      </div>
    </div>
  )
}

function MenuDropdown() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 8,
        width: 216,
        boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
        display: 'inline-flex',
        flexDirection: 'column',
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{ height: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}
        >
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 8, borderRadius: 4 }}>
            <span
              style={{
                flex: 1,
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '20px',
                letterSpacing: '0.25px',
                color: '#4a4a4a',
              }}
            >
              Menu item
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MenuPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Menu"
          description="Componente de menu flutuante com suporte a ícones leading e trailing, cinco estados interativos e variante container com sombra de elevação."
          showThemeToggle
        />

        {/* Menu Container */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu Container</h2>
          <p className="text-sm text-[#666666] mb-6">
            Contêiner flutuante com padding de 8 px, border-radius de 4 px e sombra Elevation/2.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8 flex justify-center">
            <MenuDropdown />
          </div>
        </div>

        {/* Menu List Item — all states */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu List Item — Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Cinco estados em quatro variantes de composição de ícones.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-40">Estado</th>
                  {VARIANTS.map(v => (
                    <th key={v.id} className="p-4 text-sm font-medium text-[#13283C] text-center">
                      {v.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATES.map(({ id, label }, i) => (
                  <tr key={id} className={i < STATES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    {VARIANTS.map(v => (
                      <td key={v.id} className="p-4">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <MenuListItem
                            state={id}
                            showLeading={v.showLeading}
                            showTrailing={v.showTrailing}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados nos estados e no container do componente.
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
                  { el: 'State Layer',   ctx: 'Hovered',                  token: 'states/black/hovered',  val: 'rgba(0,0,0,0.08)',            color: 'rgba(0,0,0,0.08)' },
                  { el: 'State Layer',   ctx: 'Pressed',                  token: 'states/black/pressed',  val: 'rgba(0,0,0,0.16)',            color: 'rgba(0,0,0,0.16)' },
                  { el: 'State Layer',   ctx: 'Selected',                 token: '--blue-600',            val: '#304A64',                     color: '#304A64'           },
                  { el: 'Texto',         ctx: 'Enabled / Hovered / Pressed', token: 'text/primary',       val: '#4A4A4A',                     color: '#4A4A4A'           },
                  { el: 'Texto',         ctx: 'Selected',                 token: 'text/inverse',          val: '#FFFFFF',                     color: '#FFFFFF'           },
                  { el: 'Texto',         ctx: 'Disabled',                 token: 'text/disabled',         val: '#9E9E9E',                     color: '#9E9E9E'           },
                  { el: 'Container',     ctx: 'Surface',                  token: 'surface/surface1',      val: '#FFFFFF',                     color: '#FFFFFF'           },
                  { el: 'Sombra',        ctx: 'Elevation/2',              token: 'drop-shadow',           val: '0 2px 6px rgba(0,0,0,0.15)', color: 'rgba(0,0,0,0.15)' },
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

        {/* Anatomia */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Altura do Item',       desc: '40 px',               sub: 'Altura fixa de cada menu item'           },
              { label: 'Padding do Item',       desc: '8 px',                sub: 'Padding interno do state-layer'          },
              { label: 'Gap (ícone + label)',   desc: '8 px',                sub: 'Espaço entre leading, texto e trailing'  },
              { label: 'Largura do Item',       desc: '200 px',              sub: 'Largura fixa do state-layer'             },
              { label: 'Border Radius (item)',  desc: '4 px',                sub: 'State-layer do item'                     },
              { label: 'Container Padding',     desc: '8 px',                sub: 'Padding interno do menu container'       },
              { label: 'Container Width',       desc: '216 px',              sub: 'Largura do container flutuante'          },
              { label: 'Border Radius (cont.)', desc: '4 px',                sub: 'Container do menu'                       },
              { label: 'Tipografia',            desc: '14 px / 400 / 20 px', sub: 'Red Hat Display Regular, spacing 0.25px' },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}-${desc}`} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quando Usar */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Com Leading Icon',
                desc: 'Use para identificar visualmente a ação. O ícone deve ser semanticamente relacionado ao label do item.',
              },
              {
                label: 'Com Trailing Icon',
                desc: 'Use quando o item possui um sub-menu ou ação expandível. O chevron indica navegação à direita.',
              },
              {
                label: 'Estado Selected',
                desc: 'Indica o item ativo ou selecionado. Aplique apenas a um item por vez dentro do mesmo menu.',
              },
              {
                label: 'Estado Disabled',
                desc: 'Use para itens temporariamente indisponíveis. Mantenha visíveis para comunicar o que existe mas não está acessível.',
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
              ['Altura do item',        '40px — fixa para todos os estados'],
              ['Padding do item',       '8px em todos os lados'],
              ['Gap',                   '8px entre leading icon, label e trailing icon'],
              ['Largura do item',       '200px — largura fixa do state-layer'],
              ['Leading icon',          '24×24px — Plus, à esquerda do label'],
              ['Trailing icon',         '24×24px — ChevronRight, à direita do label'],
              ['Border radius (item)',  '4px — state-layer'],
              ['Container padding',     '8px'],
              ['Container width',       '216px'],
              ['Border radius (cont.)', '4px'],
              ['Sombra (Elevation/2)',  '0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.3)'],
              ['Tipografia',            '14px / 400 / 20px, letter-spacing 0.25px, Red Hat Display'],
              ['Estados',               'Enabled, Hovered, Pressed, Selected, Disabled'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[220px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
