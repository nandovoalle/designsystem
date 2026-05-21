import { Plus } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const STYLES = [
  { id: 'primary',   label: 'Primary'   },
  { id: 'secondary', label: 'Secondary' },
  { id: 'outlined',  label: 'Outlined'  },
  { id: 'cancel',    label: 'Cancel'    },
  { id: 'text',      label: 'Text'      },
]

const STATES = [
  { id: 'enabled',  label: 'Enabled'  },
  { id: 'hovered',  label: 'Hovered'  },
  { id: 'focused',  label: 'Focused'  },
  { id: 'pressed',  label: 'Pressed'  },
  { id: 'disabled', label: 'Disabled' },
]

const STATE_OVERLAYS = {
  primary:   { hovered: 'rgba(255,255,255,0.08)', focused: 'rgba(255,255,255,0.12)', pressed: 'rgba(255,255,255,0.16)' },
  secondary: { hovered: 'rgba(156,177,200,0.08)', focused: 'rgba(156,177,200,0.12)', pressed: 'rgba(156,177,200,0.16)' },
  outlined:  { hovered: 'rgba(48,74,100,0.08)',   focused: 'rgba(48,74,100,0.12)',   pressed: 'rgba(48,74,100,0.16)'   },
  cancel:    { hovered: 'rgba(233,120,107,0.08)', focused: 'rgba(233,120,107,0.12)', pressed: 'rgba(233,120,107,0.16)' },
  text:      { hovered: 'rgba(48,74,100,0.08)',   focused: 'rgba(48,74,100,0.12)',   pressed: 'rgba(48,74,100,0.16)'   },
}

function ButtonDemo({ style = 'primary', state = 'enabled', showIcon = false }) {
  const isDisabled = state === 'disabled'

  const containerStyle = {
    height: 40,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    flexShrink: 0,
    ...(style === 'primary' && !isDisabled   ? { backgroundColor: 'var(--blue-600)' } : {}),
    ...(style === 'secondary' && !isDisabled ? { backgroundColor: 'var(--blue-400)' } : {}),
    ...(style === 'outlined' && !isDisabled  ? { border: '1px solid var(--blue-600)' } : {}),
    ...(style === 'cancel' && !isDisabled    ? { border: '1px solid var(--error)' } : {}),
    ...(style === 'outlined' && isDisabled   ? { border: '1px solid rgba(0,0,0,0.12)' } : {}),
    ...(style === 'cancel' && isDisabled     ? { border: '1px solid rgba(0,0,0,0.12)' } : {}),
  }

  const stateLayerBg = (() => {
    if (isDisabled) {
      return (style === 'primary' || style === 'secondary') ? 'rgba(0,0,0,0.12)' : 'transparent'
    }
    return STATE_OVERLAYS[style]?.[state] ?? 'transparent'
  })()

  const textColor = (() => {
    if (isDisabled) return 'var(--text-disabled)'
    if (style === 'primary') return 'var(--text-inverse)'
    if (style === 'cancel') return 'var(--error)'
    return 'var(--blue-600)'
  })()

  const iconColor = (() => {
    if (isDisabled) return 'var(--text-disabled)'
    if (style === 'primary') return 'var(--text-inverse)'
    if (style === 'cancel') return 'var(--error)'
    return 'var(--blue-600)'
  })()

  return (
    <div style={containerStyle}>
      <div
        style={{
          height: 40,
          backgroundColor: stateLayerBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          paddingLeft: showIcon ? 16 : 24,
          paddingRight: 24,
          paddingTop: 10,
          paddingBottom: 10,
          gap: showIcon ? 8 : 0,
        }}
      >
        {showIcon && <Plus size={24} color={iconColor} strokeWidth={2} />}
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '0.1px',
            color: textColor,
            whiteSpace: 'nowrap',
          }}
        >
          Label
        </span>
      </div>
    </div>
  )
}

export default function ButtonsPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Buttons"
          description="Componente de ação primária com cinco estilos e cinco estados interativos, disponível com ou sem ícone."
          showThemeToggle
        />

        {/* Without icon matrix */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Sem Ícone</h2>
          <p className="text-sm text-[#666666] mb-6">
            Cinco estilos em cinco estados — variante somente texto.
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
                  <tr key={id} className={i < STYLES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    {STATES.map(s => (
                      <td key={s.id} className="p-4 align-top">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <ButtonDemo style={id} state={s.id} showIcon={false} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* With icon matrix */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Com Ícone</h2>
          <p className="text-sm text-[#666666] mb-6">
            Mesmos estilos e estados — variante com ícone à esquerda do label.
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
                {STYLES.filter(s => s.id !== 'cancel').map(({ id, label }, i, arr) => (
                  <tr key={id} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    {STATES.map(s => (
                      <td key={s.id} className="p-4 align-top">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <ButtonDemo style={id} state={s.id} showIcon={true} />
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
                  { el: 'Container',   ctx: 'Primary — ativo',          token: '--blue-600',           val: '#304A64',              color: '#304A64' },
                  { el: 'Container',   ctx: 'Secondary — ativo',        token: '--blue-400',           val: '#BFD8F3',              color: '#BFD8F3' },
                  { el: 'Container',   ctx: 'Outlined — borda ativa',   token: '--blue-600',           val: '#304A64 (borda)',       color: '#304A64' },
                  { el: 'Container',   ctx: 'Cancel — borda ativa',     token: '--error',              val: '#E9786B (borda)',       color: '#E9786B' },
                  { el: 'Container',   ctx: 'Outlined/Cancel disabled', token: 'rgba(0,0,0,0.12)',     val: 'rgba(0,0,0,0.12)',     color: 'rgba(0,0,0,0.12)' },
                  { el: 'State Layer', ctx: 'Primary — hovered',        token: 'rgba(255,255,255,.08)',val: 'rgba(255,255,255,0.08)',color: '#ffffff14' },
                  { el: 'State Layer', ctx: 'Secondary — hovered',      token: 'rgba(156,177,200,.08)',val: 'rgba(156,177,200,0.08)',color: 'rgba(156,177,200,0.08)' },
                  { el: 'State Layer', ctx: 'Outlined/Text — hovered',  token: 'rgba(48,74,100,.08)',  val: 'rgba(48,74,100,0.08)', color: 'rgba(48,74,100,0.08)' },
                  { el: 'State Layer', ctx: 'Cancel — hovered',         token: 'rgba(233,120,107,.08)',val: 'rgba(233,120,107,0.08)',color: 'rgba(233,120,107,0.08)' },
                  { el: 'State Layer', ctx: 'Primary/Secondary disabled',token: 'rgba(0,0,0,0.12)',   val: 'rgba(0,0,0,0.12)',     color: 'rgba(0,0,0,0.12)' },
                  { el: 'Texto',       ctx: 'Primary — ativo',          token: '--text-inverse',       val: '#FFFFFF',              color: '#FFFFFF' },
                  { el: 'Texto',       ctx: 'Secondary/Outlined/Text',  token: '--blue-600',           val: '#304A64',              color: '#304A64' },
                  { el: 'Texto',       ctx: 'Cancel — ativo',           token: '--error',              val: '#E9786B',              color: '#E9786B' },
                  { el: 'Texto',       ctx: 'Disabled',                 token: '--text-disabled',      val: '#9E9E9E',              color: '#9E9E9E' },
                ].map(({ el, ctx, token, val, color }, i, arr) => (
                  <tr key={`${el}-${ctx}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{el}</td>
                    <td className="p-4 text-[#666666]">{ctx}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{token}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{val}</td>
                    <td className="p-4">
                      <div className="w-6 h-6 rounded border border-black/10" style={{ backgroundColor: color }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Altura', '40 px — altura fixa do botão'],
              ['Padding (sem ícone)', '24 px horizontal — esquerda e direita'],
              ['Padding (com ícone)', '16 px esquerda / 24 px direita'],
              ['Tamanho do ícone', '24 × 24 px — Plus (Lucide / MDI)'],
              ['Gap ícone + label', '8 px'],
              ['Border radius', '4 px — container e state layer'],
              ['Tipografia', 'Red Hat Display Medium — 14 px / 20 px (font size / line height)'],
              ['Letter spacing', '0.1 px'],
              ['State layer', 'Overlay RGBA cobrindo toda a área do botão'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[180px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage guide */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Primary',
                desc: 'Use para a ação principal de uma tela. Alto peso visual com fundo azul sólido. Deve haver apenas um por contexto.',
              },
              {
                label: 'Secondary',
                desc: 'Use para ações secundárias que complementam a ação primária. Fundo azul claro com texto na cor da marca.',
              },
              {
                label: 'Outlined',
                desc: 'Use quando a ação precisa de destaque moderado sem competir com o Primary. Borda visível sem preenchimento.',
              },
              {
                label: 'Cancel',
                desc: 'Reservado para ações destrutivas ou de cancelamento. A cor vermelha sinaliza risco ou reversão ao usuário.',
              },
              {
                label: 'Text',
                desc: 'Use para ações terciárias ou em contextos de baixa hierarquia, como links de rodapé ou ações dentro de listas.',
              },
              {
                label: 'Com Ícone',
                desc: 'Adicione ícone quando a ação precisa de reforço visual. O ícone deve ser semânticamente relacionado ao label.',
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
      </div>
    </div>
  )
}
