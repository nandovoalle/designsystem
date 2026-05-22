import { PageHeader } from '../components/PageHeader'

function MinusIcon({ color = '#4A4A4A' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
      <path d="M19 13H5v-2h14v2z" />
    </svg>
  )
}

function PlusIcon({ color = '#4A4A4A' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  )
}

const STATE_CONFIG = {
  default:  { btnBorder: '#E9EFF2', btnBg: 'transparent',       fieldBorder: '#E9EFF2', fieldBg: 'transparent',       textColor: '#9E9E9E', iconColor: '#304A64' },
  focused:  { btnBorder: '#E9EFF2', btnBg: 'transparent',       fieldBorder: '#304A64', fieldBg: 'transparent',       textColor: '#9E9E9E', iconColor: '#304A64' },
  writing:  { btnBorder: '#E9EFF2', btnBg: 'transparent',       fieldBorder: '#304A64', fieldBg: 'transparent',       textColor: '#4A4A4A', iconColor: '#304A64' },
  disabled: { btnBorder: '#E9EFF2', btnBg: 'rgba(0,0,0,0.12)', fieldBorder: '#E9EFF2', fieldBg: 'rgba(0,0,0,0.12)', textColor: '#9E9E9E', iconColor: '#9E9E9E' },
}

function IconButton({ icon: Icon, state = 'default' }) {
  const cfg = STATE_CONFIG[state]
  return (
    <div style={{
      width: 32, height: 32, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: `1px solid ${cfg.btnBorder}`,
      borderRadius: 4,
      backgroundColor: cfg.btnBg,
    }}>
      <Icon color={cfg.iconColor} />
    </div>
  )
}

function NumberInput({ state = 'default' }) {
  const cfg = STATE_CONFIG[state]
  const isWriting = state === 'writing'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <IconButton icon={MinusIcon} state={state} />

      <div style={{
        width: 64, height: 40, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '4px 8px',
        border: `1px solid ${cfg.fieldBorder}`,
        borderRadius: 4,
        backgroundColor: cfg.fieldBg,
      }}>
        <span style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: 14, fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px',
          color: cfg.textColor,
          textAlign: 'center',
          width: '100%',
        }}>
          {isWriting ? '|1' : ''}
        </span>
      </div>

      <IconButton icon={PlusIcon} state={state} />
    </div>
  )
}

const STATES = [
  { id: 'default',  label: 'Default'  },
  { id: 'focused',  label: 'Focused'  },
  { id: 'writing',  label: 'Writing'  },
  { id: 'disabled', label: 'Disabled' },
]

export default function NumberInputPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Number Input"
          description="Campo de entrada numérica com botões de incremento e decremento, permitindo ajustes rápidos de valores."
          showThemeToggle
        />

        {/* Estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Quatro estados do componente: default, focused, writing e disabled.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-32">Estado</th>
                  <th className="p-4 text-sm font-medium text-[#13283C] text-left">Componente</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map(({ id, label }, i) => (
                  <tr key={id} className={i < STATES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    <td className="p-4"><NumberInput state={id} /></td>
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
            Tokens utilizados nos estados do componente.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Estado</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { estado: 'Todos',                            elemento: 'Botão — Border',           token: '--divider',        val: '#E9EFF2',        color: '#E9EFF2'          },
                  { estado: 'Default / Focused / Writing',      elemento: 'Campo — Border',            token: '--divider',        val: '#E9EFF2',        color: '#E9EFF2'          },
                  { estado: 'Focused / Writing',                elemento: 'Campo — Border',            token: '--blue-600',       val: '#304A64',        color: '#304A64'          },
                  { estado: 'Disabled',                         elemento: 'Botão + Campo — Background',token: 'rgba(0,0,0,.12)', val: '—',              color: 'rgba(0,0,0,0.12)' },
                  { estado: 'Default / Focused / Disabled',     elemento: 'Texto (vazio)',             token: '--text-disabled',  val: '#9E9E9E',        color: '#9E9E9E'          },
                  { estado: 'Writing',                          elemento: 'Texto (valor)',             token: '--text-primary',   val: '#4A4A4A',        color: '#4A4A4A'          },
                  { estado: 'Default / Focused / Writing',      elemento: 'Ícone',                    token: '--blue-600',       val: '#304A64',        color: '#304A64'          },
                  { estado: 'Disabled',                         elemento: 'Ícone',                    token: '--text-disabled',  val: '#9E9E9E',        color: '#9E9E9E'          },
                ].map(({ estado, elemento, token, val, color }, i, arr) => (
                  <tr key={`${estado}-${elemento}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-[#666666]">{estado}</td>
                    <td className="p-4 font-medium text-[#13283C]">{elemento}</td>
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

        {/* Anatomia */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Largura — Campo',     desc: '64 px',              sub: 'Width do text field'              },
              { label: 'Altura — Campo',      desc: '40 px',              sub: 'Height do state-layer'            },
              { label: 'Botão',               desc: '32 × 32 px',         sub: 'Width e height do icon button'    },
              { label: 'Border Radius',       desc: '4 px',               sub: 'Campo e botões'                   },
              { label: 'Padding — Campo',     desc: 'L/R: 8 / T/B: 4 px', sub: 'Padding interno do campo'        },
              { label: 'Gap entre elementos', desc: '8 px',               sub: 'Entre botão e campo'              },
              { label: 'Ícones (remove / add)', desc: '20 × 20 px',       sub: 'Dentro do container 32 × 32 px'  },
              { label: 'Tipografia',          desc: '14 px / 20 px',      sub: 'Size / Line height, Red Hat Display Regular' },
            ].map(({ label, desc, sub }) => (
              <div key={label} className="bg-white rounded-[14px] border border-black/10 p-5">
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
                label: 'Valores Numéricos Pequenos',
                desc: 'Use quando o usuário precisa selecionar um número em um intervalo pequeno e bem definido, como quantidade de itens ou número de passageiros.',
              },
              {
                label: 'Ajuste Incremental',
                desc: 'Ideal quando incrementos ou decrementos unitários são a forma natural de interação, evitando erros de digitação.',
              },
              {
                label: 'Entrada Direta Opcional',
                desc: 'Permite digitação direta no campo para valores específicos, além dos botões de incremento e decremento.',
              },
              {
                label: 'Evitar em Grandes Intervalos',
                desc: 'Não use quando o intervalo de valores for muito grande — prefira um input de texto simples ou slider nesses casos.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--blue-600)' }} />
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
              ['Largura do campo',       '64px'],
              ['Altura do campo',        '40px'],
              ['Tamanho do botão',       '32×32px'],
              ['Border radius',          '4px'],
              ['Padding do campo',       'L:8 / R:8 / T:4 / B:4 px'],
              ['Gap entre elementos',    '8px'],
              ['Ícone remove (−)',        '20×20px (container 32×32px)'],
              ['Ícone add (+)',           '20×20px (container 32×32px)'],
              ['Tipografia',             '14px / 400 / 20px, letter-spacing 0.25px, Red Hat Display'],
              ['Estados',                'Default, Focused, Writing, Disabled'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[200px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
