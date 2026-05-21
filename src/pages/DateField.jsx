import { PageHeader } from '../components/PageHeader'

function CalendarTodayIcon({ color = '#4A4A4A' }) {
  return (
    <div style={{ width: 24, height: 24, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="18" height="20" viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
        <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>
      </svg>
    </div>
  )
}

const STATE_CONFIG = {
  enabled:  { border: '#E9EFF2', bg: 'transparent',       label: '#4A4A4A', text: '#9E9E9E', supporting: '#666666', icon: '#4A4A4A' },
  focused:  { border: '#304A64', bg: 'transparent',       label: '#4A4A4A', text: '#9E9E9E', supporting: '#666666', icon: '#4A4A4A' },
  writing:  { border: '#304A64', bg: 'transparent',       label: '#4A4A4A', text: '#4A4A4A', supporting: '#666666', icon: '#4A4A4A' },
  disabled: { border: '#E9EFF2', bg: 'rgba(0,0,0,0.12)', label: '#9E9E9E', text: '#9E9E9E', supporting: '#9E9E9E', icon: '#9E9E9E' },
  error:    { border: '#E9786B', bg: 'transparent',       label: '#4A4A4A', text: '#E9786B', supporting: '#E9786B', icon: '#4A4A4A' },
}

function DateField({ type = 'basic', state = 'enabled' }) {
  const cfg = STATE_CONFIG[state]
  const isBasic = type === 'basic'
  const placeholder = isBasic ? 'dd/mm/aaaa' : 'dd/mm/aaaa até dd/mm/aaaa'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: isBasic ? 210 : 249, flexShrink: 0 }}>
      <div style={{ paddingBottom: 8, paddingRight: 8 }}>
        <span style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: 14, fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px',
          color: cfg.label,
        }}>Label</span>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        height: 40, paddingLeft: 8, paddingRight: 12, paddingTop: 4, paddingBottom: 4,
        border: `1px solid ${cfg.border}`, borderRadius: 4, backgroundColor: cfg.bg,
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: 14, fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px',
          color: cfg.text, flexShrink: 0,
          ...(isBasic ? { width: 154 } : { whiteSpace: 'nowrap' }),
        }}>
          {placeholder}
        </span>
        <CalendarTodayIcon color={cfg.icon} />
      </div>

      <div style={{ paddingTop: 4, paddingRight: 8 }}>
        <span style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: 12, fontWeight: 400, lineHeight: '16px', letterSpacing: '0.4px',
          color: cfg.supporting,
        }}>Supporting text</span>
      </div>
    </div>
  )
}

const STATES = [
  { id: 'enabled',  label: 'Enabled'  },
  { id: 'focused',  label: 'Focused'  },
  { id: 'writing',  label: 'Writing'  },
  { id: 'disabled', label: 'Disabled' },
  { id: 'error',    label: 'Error'    },
]

export default function DateFieldPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Date Field"
          description="Campo de entrada para seleção de datas, com suporte a data única (basic) e intervalo de datas (range)."
          showThemeToggle
        />

        {/* Variantes e Estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variantes e Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Cinco estados em duas variantes de tipo: data única e intervalo de datas.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-32">Estado</th>
                  <th className="p-4 text-sm font-medium text-[#13283C] text-left">Basic</th>
                  <th className="p-4 text-sm font-medium text-[#13283C] text-left">Range</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map(({ id, label }, i) => (
                  <tr key={id} className={i < STATES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    <td className="p-4"><DateField type="basic" state={id} /></td>
                    <td className="p-4"><DateField type="range" state={id} /></td>
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
                  { estado: 'Enabled / Disabled',              elemento: 'Border',              token: '--divider',       val: '#E9EFF2',        color: '#E9EFF2'          },
                  { estado: 'Focused / Writing',               elemento: 'Border',              token: '--blue-600',      val: '#304A64',        color: '#304A64'          },
                  { estado: 'Error',                           elemento: 'Border / Text',       token: '--error',         val: '#E9786B',        color: '#E9786B'          },
                  { estado: 'Disabled',                        elemento: 'Background',          token: 'rgba(0,0,0,.12)', val: '—',              color: 'rgba(0,0,0,0.12)' },
                  { estado: 'Enabled / Focused / Writing',     elemento: 'Label',               token: '--text-primary',  val: '#4A4A4A',        color: '#4A4A4A'          },
                  { estado: 'Disabled',                        elemento: 'Label / Placeholder', token: '--text-disabled', val: '#9E9E9E',        color: '#9E9E9E'          },
                  { estado: 'Enabled / Focused',               elemento: 'Placeholder',         token: '--text-disabled', val: '#9E9E9E',        color: '#9E9E9E'          },
                  { estado: 'Writing',                         elemento: 'Texto',               token: '--text-primary',  val: '#4A4A4A',        color: '#4A4A4A'          },
                  { estado: 'Enabled / Focused / Writing',     elemento: 'Supporting',          token: '--text-secondary',val: '#666666',        color: '#666666'          },
                  { estado: 'Disabled',                        elemento: 'Supporting',          token: '--text-disabled', val: '#9E9E9E',        color: '#9E9E9E'          },
                  { estado: 'Error',                           elemento: 'Supporting',          token: '--error',         val: '#E9786B',        color: '#E9786B'          },
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
              { label: 'Largura — Basic',   desc: '210 px',          sub: 'Data única'                       },
              { label: 'Largura — Range',   desc: '249 px',          sub: 'Intervalo de datas'               },
              { label: 'Altura do input',   desc: '40 px',           sub: 'Height do state-layer'            },
              { label: 'Border Radius',     desc: '4 px',            sub: 'rounded-[4px]'                    },
              { label: 'Padding interno',   desc: 'L:8 R:12 T/B:4 px', sub: 'Padding do state-layer'        },
              { label: 'Gap texto / ícone', desc: '12 px',           sub: 'Entre placeholder e ícone'        },
              { label: 'Ícone (real)',       desc: '18 × 20 px',      sub: 'calendar_today (container 24×24)' },
              { label: 'Label',             desc: '14 px / 20 px',   sub: 'Font size / Line height'          },
              { label: 'Supporting text',   desc: '12 px / 16 px',   sub: 'Font size / Line height'          },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}`} className="bg-white rounded-[14px] border border-black/10 p-5">
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
                label: 'Basic',
                desc: 'Seleção de uma única data. Usado em campos de nascimento, agendamento pontual ou qualquer entrada de data simples.',
              },
              {
                label: 'Range',
                desc: 'Seleção de um intervalo entre duas datas. Ideal para filtros de período, relatórios e agendamentos com duração.',
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
              ['Largura — Basic', '210px — data única'],
              ['Largura — Range', '249px — intervalo de datas'],
              ['Altura do input', '40px'],
              ['Border radius', '4px'],
              ['Padding input', 'L:8 / R:12 / T:4 / B:4 px'],
              ['Gap texto / ícone', '12px'],
              ['Ícone calendar_today', '18×20px (container 24×24px)'],
              ['Label', '14px / 400 / 20px, letter-spacing 0.25px, Red Hat Display'],
              ['Supporting text', '12px / 400 / 16px, letter-spacing 0.4px, Red Hat Display'],
              ['Estados', 'Enabled, Focused, Writing, Disabled, Error'],
              ['Variantes', 'Basic (data única) e Range (intervalo de datas)'],
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
