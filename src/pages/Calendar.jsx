import { PageHeader } from '../components/PageHeader'
import { Calendar } from '../components/ui/Calendar'

const STATES = [
  { id: 'currentDate', label: 'Current Date', desc: 'Calendário padrão com data selecionada. O dia atual é indicado por um contorno e a data selecionada pelo fundo escuro.' },
  { id: 'rangeDate',   label: 'Range Date',   desc: 'Seleção de intervalo entre duas datas. O intervalo é destacado com fundo claro e as extremidades com fundo escuro.' },
  { id: 'month',       label: 'Month',        desc: 'Seletor de mês. Exibe os 12 meses em grade de 3 colunas. O mês atual é destacado.' },
  { id: 'year',        label: 'Year',         desc: 'Seletor de ano. Exibe os anos disponíveis em grade de 3 colunas. O ano atual é destacado.' },
]

export default function CalendarPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Calendar"
          description="Componente de seleção de datas com quatro estados: data única, intervalo de datas, seletor de mês e seletor de ano."
          showThemeToggle
        />

        {/* Preview — todos os estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variantes</h2>
          <p className="text-sm text-[#666666] mb-6">
            Quatro estados que cobrem os diferentes momentos da seleção de data.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex flex-wrap gap-8 justify-center">
              {STATES.map(({ id, label }) => (
                <div key={id} className="flex flex-col items-center gap-3">
                  <Calendar state={id} />
                  <span className="text-xs font-medium text-[#666666]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Descrição de variantes */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Descrição dos Estados</h2>
          <p className="text-sm text-[#666666] mb-6">Comportamento e uso de cada estado do calendário.</p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-36">Estado</th>
                  <th className="text-left p-4 text-sm font-medium text-[#13283C]">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map(({ id, label, desc }, i) => (
                  <tr key={id} className={i < STATES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm font-medium text-[#13283C]">{label}</td>
                    <td className="p-4 text-sm text-[#666666]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tokens de cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">Tokens utilizados nos elementos do componente.</p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { elemento: 'Fundo do card',          token: '--surface/surface1',  val: '#FFFFFF',               color: '#FFFFFF'              },
                  { elemento: 'Data selecionada (bg)',   token: '--blue-600',          val: '#304A64',               color: '#304A64'              },
                  { elemento: 'Hoje (border)',           token: '--blue-600',          val: '#304A64',               color: '#304A64'              },
                  { elemento: 'Range highlight (bg)',    token: '--divider',           val: '#E9EFF2',               color: '#E9EFF2'              },
                  { elemento: 'Texto primário',          token: '--text/primary',      val: '#4A4A4A',               color: '#4A4A4A'              },
                  { elemento: 'Texto secundário',        token: '--text/secondary',    val: '#666666',               color: '#666666'              },
                  { elemento: 'Texto desabilitado',      token: '--text/disabled',     val: '#9E9E9E',               color: '#9E9E9E'              },
                  { elemento: 'Texto inverso (selected)',token: '--text/inverse',      val: '#FFFFFF',               color: '#FFFFFF'              },
                  { elemento: 'Scrollbar (year)',        token: '--blue-200',          val: '#9CB1C8',               color: '#9CB1C8'              },
                ].map(({ elemento, token, val, color }, i, arr) => (
                  <tr key={elemento} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
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
              { label: 'Largura',              desc: '320 px',               sub: 'Fixa em todos os estados'           },
              { label: 'Border Radius',        desc: '4 px',                 sub: 'rounded-[4px]'                      },
              { label: 'Shadow',               desc: 'Elevation 2',          sub: '1px/2px + 2px/6px'                  },
              { label: 'Padding header',       desc: 'T:16 B:8 L:24 R:12',   sub: 'Área do mês/ano e controles'        },
              { label: 'Célula de dia',        desc: '36 × 36 px',           sub: 'Círculo de seleção'                 },
              { label: 'Gap entre células',    desc: '2 px',                 sub: 'Entre células na grade de datas'    },
              { label: 'Gap mês/ano',          desc: '16 px',                sub: 'Gap entre células na grade mensal/anual' },
              { label: 'Padding mês/ano row',  desc: '8 × 16 px',            sub: 'v × h por linha da grade'           },
              { label: 'Fonte — header',       desc: '16 px / 500 / 24px lh', sub: 'Red Hat Display Medium'            },
              { label: 'Fonte — células',      desc: '14 px / 400 / 20px lh', sub: 'Red Hat Display Regular'           },
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
              { label: 'Current Date',  desc: 'Seleção de uma única data em fluxos de agendamento, formulários de nascimento ou qualquer entrada de data pontual.' },
              { label: 'Range Date',    desc: 'Seleção de um período entre duas datas. Ideal para filtros, relatórios ou reservas com duração.' },
              { label: 'Month',         desc: 'Navegação ou seleção rápida de mês. Exibido ao clicar no indicador de mês no header do calendário.' },
              { label: 'Year',          desc: 'Navegação ou seleção de ano. Exibido ao clicar no indicador de ano no header do calendário.' },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: '#304A64' }} />
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
              ['Largura',             '320px — fixa em todos os estados'],
              ['Border radius',       '4px'],
              ['Shadow',              '0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)'],
              ['Células de dia',      '36×36px, border-radius 100px'],
              ['Gap células (datas)', '2px'],
              ['Gap células (mês/ano)', '16px'],
              ['Header padding',      'top:16 / bottom:8 / left:24 / right:12 px'],
              ['Fonte header',        '16px / 500 / line-height:24px / letter-spacing:0.15px, Red Hat Display'],
              ['Fonte células',       '14px / 400 / line-height:20px / letter-spacing:0.25px, Red Hat Display'],
              ['Estados',             'currentDate, rangeDate, month, year'],
              ['Range highlight',     'background #E9EFF2, border-radius 100px'],
              ['Data selecionada',    'background #304A64, texto branco, border-radius 100px'],
              ['Hoje (today)',        'border 1px solid #304A64, sem background'],
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
