import { PageHeader } from '../components/PageHeader'

const SIZES = [
  { id: 'xs',   label: 'XS'   },
  { id: 'sm',   label: 'SM'   },
  { id: 'base', label: 'Base' },
]

const STATES = [
  { id: 'enabled',  label: 'Enabled'  },
  { id: 'hovered',  label: 'Hovered'  },
  { id: 'focused',  label: 'Focused'  },
  { id: 'pressed',  label: 'Pressed'  },
  { id: 'disabled', label: 'Disabled' },
]

const SIZE_CONFIG = {
  xs: {
    height: 24,
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: '0.5px',
    iconSize: 16,
    padding: {
      none:     { paddingLeft: 8,  paddingRight: 8  },
      leading:  { paddingLeft: 6,  paddingRight: 8  },
      trailing: { paddingLeft: 8,  paddingRight: 6  },
      both:     { paddingLeft: 6,  paddingRight: 6  },
    },
  },
  sm: {
    height: 28,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '0.1px',
    iconSize: 20,
    padding: {
      none:     { paddingLeft: 10, paddingRight: 10 },
      leading:  { paddingLeft: 8,  paddingRight: 10 },
      trailing: { paddingLeft: 10, paddingRight: 8  },
      both:     { paddingLeft: 8,  paddingRight: 8  },
    },
  },
  base: {
    height: 32,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '0.1px',
    iconSize: 20,
    padding: {
      none:     { paddingLeft: 12, paddingRight: 12 },
      leading:  { paddingLeft: 10, paddingRight: 12 },
      trailing: { paddingLeft: 12, paddingRight: 10 },
      both:     { paddingLeft: 10, paddingRight: 10 },
    },
  },
}

function CheckCircleIcon({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

function CloseIcon({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  )
}

function ChipDemo({ size = 'xs', state = 'enabled', leading = false, trailing = false }) {
  const cfg = SIZE_CONFIG[size]
  const variant = leading && trailing ? 'both' : leading ? 'leading' : trailing ? 'trailing' : 'none'
  const paddings = cfg.padding[variant]
  const isDisabled = state === 'disabled'

  const containerBg = isDisabled ? 'transparent' : 'var(--blue-600)'

  const stateLayerBg = (() => {
    if (isDisabled) return 'rgba(0,0,0,0.12)'
    if (state === 'hovered') return 'rgba(255,255,255,0.08)'
    if (state === 'focused') return 'rgba(255,255,255,0.12)'
    if (state === 'pressed') return 'rgba(255,255,255,0.16)'
    return 'transparent'
  })()

  const textColor = isDisabled ? 'var(--text-disabled)' : 'var(--text-inverse)'
  const iconColor = isDisabled ? '#9E9E9E' : '#FFFFFF'

  return (
    <div
      style={{
        backgroundColor: containerBg,
        height: cfg.height,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          backgroundColor: stateLayerBg,
          height: cfg.height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          paddingTop: 4,
          paddingBottom: 4,
          gap: 4,
          ...paddings,
        }}
      >
        {leading && <CheckCircleIcon size={cfg.iconSize} color={iconColor} />}
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 500,
            fontSize: cfg.fontSize,
            lineHeight: cfg.lineHeight,
            letterSpacing: cfg.letterSpacing,
            color: textColor,
            whiteSpace: 'nowrap',
          }}
        >
          Label
        </span>
        {trailing && <CloseIcon size={cfg.iconSize} color={iconColor} />}
      </div>
    </div>
  )
}

function ChipMatrix({ title, description, leading, trailing }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-medium text-[#13283C] mb-1">{title}</h2>
      <p className="text-sm text-[#666666] mb-6">{description}</p>
      <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
              <th className="text-left p-4 text-sm font-medium text-[#13283C] w-24">Tamanho</th>
              {STATES.map(s => (
                <th key={s.id} className="p-4 text-sm font-medium text-[#13283C] text-center">
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SIZES.map(({ id, label }, i) => (
              <tr key={id} className={i < SIZES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                <td className="p-4 text-sm text-[#666666]">{label}</td>
                {STATES.map(s => (
                  <td key={s.id} className="p-4 align-middle">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <ChipDemo size={id} state={s.id} leading={leading} trailing={trailing} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ChipsPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Chips"
          description="Componente compacto de seleção e filtragem com três tamanhos, cinco estados interativos e suporte a ícone principal e botão de fechamento."
          showThemeToggle
        />

        <ChipMatrix
          title="Sem elementos"
          description="Chip somente com label — três tamanhos em cinco estados."
          leading={false}
          trailing={false}
        />

        <ChipMatrix
          title="Com fechamento"
          description="Chip com ícone de fechar à direita — ideal para filtros removíveis."
          leading={false}
          trailing={true}
        />

        <ChipMatrix
          title="Com ícone"
          description="Chip com ícone de seleção à esquerda — indica item selecionado ou confirmado."
          leading={true}
          trailing={false}
        />

        <ChipMatrix
          title="Ícone + fechamento"
          description="Chip com ícone principal e botão de fechar — variante completa."
          leading={true}
          trailing={true}
        />

        {/* Color tokens */}
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
                  { el: 'Container',   ctx: 'Ativo',            token: '--blue-600',              val: '#304A64',               color: '#304A64' },
                  { el: 'Container',   ctx: 'Disabled',         token: 'transparent',             val: 'transparent',           color: 'transparent' },
                  { el: 'State Layer', ctx: 'Hovered',          token: 'rgba(255,255,255,0.08)',   val: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.08)' },
                  { el: 'State Layer', ctx: 'Focused',          token: 'rgba(255,255,255,0.12)',   val: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.12)' },
                  { el: 'State Layer', ctx: 'Pressed',          token: 'rgba(255,255,255,0.16)',   val: 'rgba(255,255,255,0.16)', color: 'rgba(255,255,255,0.16)' },
                  { el: 'State Layer', ctx: 'Disabled',         token: 'rgba(0,0,0,0.12)',         val: 'rgba(0,0,0,0.12)',       color: 'rgba(0,0,0,0.12)' },
                  { el: 'Texto',       ctx: 'Ativo',            token: '--text-inverse',           val: '#FFFFFF',               color: '#FFFFFF' },
                  { el: 'Texto',       ctx: 'Disabled',         token: '--text-disabled',          val: '#9E9E9E',               color: '#9E9E9E' },
                  { el: 'Ícone',       ctx: 'Ativo',            token: '--text-inverse',           val: '#FFFFFF',               color: '#FFFFFF' },
                  { el: 'Ícone',       ctx: 'Disabled',         token: '--text-disabled',          val: '#9E9E9E',               color: '#9E9E9E' },
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
              { label: 'Altura — XS',         desc: '24 px',              sub: 'Padding vertical: 4 px' },
              { label: 'Altura — SM',         desc: '28 px',              sub: 'Padding vertical: 4 px' },
              { label: 'Altura — Base',       desc: '32 px',              sub: 'Padding vertical: 4 px' },
              { label: 'Padding — XS',        desc: '8 px horizontal',    sub: 'Reduz para 6 px ao lado do ícone' },
              { label: 'Padding — SM',        desc: '10 px horizontal',   sub: 'Reduz para 8 px ao lado do ícone' },
              { label: 'Padding — Base',      desc: '12 px horizontal',   sub: 'Reduz para 10 px ao lado do ícone' },
              { label: 'Ícone — XS',          desc: '16 × 16 px',         sub: 'check_circle / close (MDI)' },
              { label: 'Ícone — SM / Base',   desc: '20 × 20 px',         sub: 'check_circle / close (MDI)' },
              { label: 'Gap ícone + label',   desc: '4 px',               sub: 'Espaço entre elementos internos' },
              { label: 'Border Radius',       desc: '4 px',               sub: 'Container e state layer' },
              { label: 'Tipografia — XS',     desc: '12 px / 500 / 16 px',sub: 'Red Hat Display Medium, ls 0.5 px' },
              { label: 'Tipografia — SM/Base',desc: '14 px / 500 / 20 px',sub: 'Red Hat Display Medium, ls 0.1 px' },
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
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Filtros e tags',
                desc: 'Use chips para representar filtros ativos ou categorias selecionadas. O botão de fechar permite remoção rápida sem sair do contexto.',
              },
              {
                label: 'Seleção múltipla',
                desc: 'Use em listas de opções onde o usuário pode ativar ou desativar itens individualmente. O ícone de check_circle reforça o estado selecionado.',
              },
              {
                label: 'Tamanho XS',
                desc: 'Ideal para espaços compactos, como linhas de filtro ou dentro de tabelas. Tipografia de 12 px mantém a legibilidade em áreas reduzidas.',
              },
              {
                label: 'Tamanho SM e Base',
                desc: 'Use em interfaces com mais espaço disponível ou quando o chip precisa de mais destaque visual. Tipografia de 14 px facilita a leitura.',
              },
              {
                label: 'Com ícone principal',
                desc: 'Adicione o ícone de check_circle quando o chip representar um estado de seleção confirmada, reforçando visualmente a escolha do usuário.',
              },
              {
                label: 'Com fechamento',
                desc: 'Adicione o ícone de fechar quando o chip for removível. Evite usar em chips que representam estados fixos ou não editáveis.',
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
