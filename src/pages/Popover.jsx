import { Plus } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const STATES = [
  { id: 'enabled',  label: 'Enabled'  },
  { id: 'hovered',  label: 'Hovered'  },
  { id: 'pressed',  label: 'Pressed'  },
  { id: 'selected', label: 'Selected' },
  { id: 'disabled', label: 'Disabled' },
]

function PopoverMenuItem({ state = 'enabled', label = 'Menu item' }) {
  const isDisabled = state === 'disabled'
  const isSelected = state === 'selected'
  const isHovered  = state === 'hovered'
  const isPressed  = state === 'pressed'

  const stateBg = isSelected ? 'rgba(255,255,255,0.16)'
    : isPressed  ? 'rgba(255,255,255,0.12)'
    : isHovered  ? 'rgba(255,255,255,0.08)'
    : 'transparent'

  const iconColor = isDisabled ? 'rgba(255,255,255,0.38)' : '#ffffff'
  const textColor = isDisabled ? 'rgba(255,255,255,0.38)' : '#ffffff'

  return (
    <div style={{ height: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 12,
          paddingTop: 4,
          paddingBottom: 4,
          borderRadius: 4,
          width: '100%',
          backgroundColor: stateBg,
        }}
      >
        <Plus size={20} color={iconColor} strokeWidth={1.5} style={{ flexShrink: 0 }} />
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
      </div>
    </div>
  )
}

function PopoverContainer() {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Caret / arrow pointing up */}
      <div
        style={{
          width: 20,
          height: 20,
          backgroundColor: '#13283c',
          borderRadius: '2px 0 0 0',
          transform: 'rotate(45deg)',
          marginBottom: -14,
          flexShrink: 0,
          position: 'relative',
          zIndex: 1,
        }}
      />
      {/* Box */}
      <div
        style={{
          backgroundColor: '#13283c',
          borderRadius: 4,
          padding: 12,
          width: 296,
          boxShadow: '0px 1px 1px rgba(0,0,0,0.3), 0px 2px 3px rgba(0,0,0,0.15)',
          display: 'inline-flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 0,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <PopoverMenuItem key={i} />
        ))}
      </div>
    </div>
  )
}

export default function PopoverPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Popover"
          description="Menu flutuante com fundo escuro (--blue-800) e caret direcional — exibe ações contextuais ancoradas a um elemento ativador, sem sobrepor o fluxo principal."
        />

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Container com fundo <strong>#13283C</strong>, caret superior centralizado e cinco itens com ícone leading.
          </p>
          <div className="rounded-[14px] border border-black/10 overflow-visible inline-flex bg-[#F5F5F5] p-12">
            <PopoverContainer />
          </div>
        </div>

        {/* Popover Menu Item — Estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Popover Menu Item — Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Cinco estados com state-layers em branco semi-transparente sobre o fundo escuro.
          </p>
          <div className="rounded-[14px] border border-black/10 overflow-hidden" style={{ backgroundColor: '#13283c' }}>
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                  <th className="text-left p-4 text-sm font-medium text-white/70 w-40">Estado</th>
                  <th className="p-4 text-sm font-medium text-white/70 text-center">Preview</th>
                  <th className="text-left p-4 text-sm font-medium text-white/70">State layer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'enabled',  label: 'Enabled',  stateLayer: 'transparent'              },
                  { id: 'hovered',  label: 'Hovered',  stateLayer: 'rgba(255,255,255,0.08)'   },
                  { id: 'pressed',  label: 'Pressed',  stateLayer: 'rgba(255,255,255,0.12)'   },
                  { id: 'selected', label: 'Selected', stateLayer: 'rgba(255,255,255,0.16)'   },
                  { id: 'disabled', label: 'Disabled', stateLayer: 'transparent (text 38 %)'  },
                ].map(({ id, label, stateLayer }, i, arr) => (
                  <tr key={id} style={i < arr.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.08)' } : {}}>
                    <td className="p-4 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</td>
                    <td className="p-4">
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <PopoverMenuItem state={id} />
                      </div>
                    </td>
                    <td className="p-4 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{stateLayer}</td>
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
              ['Container — largura',   '296 px'],
              ['Container — padding',   '12 px em todos os lados'],
              ['Container — radius',    '4 px'],
              ['Container — fundo',     '#13283C (--blue-800)'],
              ['Caret — tamanho',       '20 × 20 px — losango rotacionado 45°'],
              ['Caret — gap',           'marginBottom −14 px — sobrepõe o topo do container'],
              ['Caret — radius',        '2 px apenas no canto superior esquerdo'],
              ['Item — altura',         '32 px'],
              ['Item — padding',        'pl 8, pr 12, py 4'],
              ['Item — gap',            '8 px entre ícone e label'],
              ['Item — radius',         '4 px no state-layer'],
              ['Ícone leading',         '20 × 20 px (Plus)'],
              ['Tipografia',            '14 px / Regular 400 / line-height 20 px · letter-spacing 0.25 px · Red Hat Display'],
              ['Sombra',                '0 1px 1px rgba(0,0,0,0.3), 0 2px 3px rgba(0,0,0,0.15)'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[220px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">Tokens utilizados no container, itens e estados do Popover.</p>
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
                  { el: 'Container',   ctx: 'Background',               token: '--blue-800',                  val: '#13283C',                     color: '#13283C'                  },
                  { el: 'Caret',       ctx: 'Background',               token: '--blue-800',                  val: '#13283C',                     color: '#13283C'                  },
                  { el: 'Texto',       ctx: 'Enabled / Hovered / Pressed / Selected', token: '--text-inverse', val: '#FFFFFF',                 color: '#FFFFFF'                  },
                  { el: 'Texto',       ctx: 'Disabled',                 token: 'rgba branca 38 %',            val: 'rgba(255,255,255,0.38)',       color: 'rgba(255,255,255,0.38)'   },
                  { el: 'Ícone',       ctx: 'Enabled / Hovered / Pressed / Selected', token: '--text-inverse', val: '#FFFFFF',                 color: '#FFFFFF'                  },
                  { el: 'Ícone',       ctx: 'Disabled',                 token: 'rgba branca 38 %',            val: 'rgba(255,255,255,0.38)',       color: 'rgba(255,255,255,0.38)'   },
                  { el: 'State layer', ctx: 'Hovered',                  token: 'states/white/hovered',        val: 'rgba(255,255,255,0.08)',       color: 'rgba(255,255,255,0.08)'   },
                  { el: 'State layer', ctx: 'Pressed / Focused',        token: 'states/white/focused',        val: 'rgba(255,255,255,0.12)',       color: 'rgba(255,255,255,0.12)'   },
                  { el: 'State layer', ctx: 'Selected',                 token: 'states/white/pressed',        val: 'rgba(255,255,255,0.16)',       color: 'rgba(255,255,255,0.16)'   },
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

        {/* Quando Usar */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Ações contextuais ancoradas',
                desc: 'Use o Popover para exibir ações ou opções diretamente relacionadas ao elemento ativador, sem redirecionar o usuário para outra tela.',
              },
              {
                label: 'Fundo escuro vs. Menu padrão',
                desc: 'Prefira o Popover (--blue-800) quando ele precisa se destacar visualmente do fundo claro da página. Use o Menu padrão (branco) quando estiver dentro de toolbars ou áreas claras.',
              },
              {
                label: 'Caret direcional',
                desc: 'O caret indica visualmente de onde o Popover foi aberto. Posicione-o sempre apontando para o elemento ativador para manter a hierarquia espacial clara.',
              },
              {
                label: 'Estado Disabled',
                desc: 'Mantenha itens desabilitados visíveis para comunicar funcionalidades existentes temporariamente indisponíveis, sem remover do contexto.',
              },
              {
                label: 'Estado Selected',
                desc: 'Aplique apenas a um item por vez para indicar a ação ou opção atualmente ativa. Evite múltiplas seleções simultâneas no mesmo Popover.',
              },
              {
                label: 'Dimensões menores que o Menu',
                desc: 'Os itens têm 32 px de altura e ícone de 20 px — mais compactos que o Menu padrão (40 px / 24 px). Use o Popover onde o espaço é mais restrito.',
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
