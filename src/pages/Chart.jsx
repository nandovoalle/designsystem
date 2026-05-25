import { RefreshCw, GripVertical, PieChart, BarChart2, Activity } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ChartCard, DonutChart, SegmentedProgressBar, RadialPerformanceChart } from '../components/ui/Chart'

const C = {
  red:    '#E9786B',
  yellow: '#E9C16C',
  green:  '#4BAF50',
  gray:   '#9E9E9E',
  blue:   '#0094EE',
  purple: '#8080EC',
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function LegendDot({ color }) {
  return <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
}

function VariantBadge({ label, variant = 'default' }) {
  const styles = {
    default:  'bg-[#F0F4F8] text-[#304A64]',
    empty:    'bg-[#F5F5F5] text-[#9E9E9E]',
    single:   'bg-[#EEF7FF] text-[#0094EE]',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}>
      {label}
    </span>
  )
}

function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-[#EEF7FF] text-[#0094EE] shrink-0 mt-0.5">
        <Icon size={18} />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-[#13283C] leading-tight">{title}</h2>
        <p className="text-sm text-[#666666] mt-0.5">{description}</p>
      </div>
    </div>
  )
}

function PreviewBlock({ children, vertical = false }) {
  return (
    <div className="bg-[#F5F5F5] border border-[#E9EFF2] rounded-[16px] p-8">
      <div className={`flex gap-6 items-start ${vertical ? 'flex-col' : 'flex-wrap'}`}>
        {children}
      </div>
    </div>
  )
}

function VariantLabel({ label, variant }) {
  return (
    <div className="mb-3">
      <VariantBadge label={label} variant={variant} />
    </div>
  )
}

// ── Style 1 — Gráfico de Rosca ────────────────────────────────────────────────

const DONUT_DATA = [
  { label: 'Lost service',  count: 2088, pct: '93%', color: C.red    },
  { label: 'Admin-reset',   count: 91,   pct: '4%',  color: C.yellow },
  { label: 'User-request',  count: 60,   pct: '3%',  color: C.green  },
  { label: 'Outros',        count: 7,    pct: '0%',  color: C.gray   },
]

function DonutCard01() {
  const segments = DONUT_DATA.map(({ count, color }) => ({ value: count, color }))
  return (
    <div>
      <VariantLabel label="Múltiplos segmentos" variant="default" />
      <ChartCard title="Motivos de desconexão" style={{ width: 456 }}>
        <div className="flex gap-2 items-center justify-center px-2 py-4">
          <DonutChart segments={segments} />
          <div className="flex flex-col shrink-0" style={{ width: 134 }}>
            {DONUT_DATA.map(({ label, color }) => (
              <div key={label} className="flex gap-2 items-center px-2 py-1 rounded-[3px]">
                <LegendDot color={color} />
                <span className="text-[14px] text-[#4A4A4A] leading-6 tracking-[0.15px]">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col shrink-0" style={{ width: 89 }}>
            {DONUT_DATA.map(({ label, count, pct }) => (
              <div key={label} className="flex gap-6 items-center justify-end h-[26px]">
                <span className="text-[14px] font-bold text-[#4A4A4A] leading-6 w-9 text-right">{count}</span>
                <span className="text-[14px] font-bold text-[#4A4A4A] leading-6 w-7 text-right">{pct}</span>
              </div>
            ))}
          </div>
        </div>
      </ChartCard>
    </div>
  )
}

function DonutCard02() {
  const segments = [{ value: 2246, color: C.red }]
  return (
    <div>
      <VariantLabel label="Segmento único" variant="single" />
      <ChartCard title="Motivos de desconexão" style={{ width: 456 }}>
        <div className="flex gap-2 items-center justify-center px-2 py-4" style={{ paddingLeft: 56 }}>
          <DonutChart segments={segments} />
          <div className="flex flex-col flex-1 px-2">
            <div className="flex gap-2 items-center py-1 rounded-[3px]">
              <LegendDot color={C.red} />
              <span className="text-[14px] text-[#4A4A4A] leading-6 tracking-[0.15px]">Lost service</span>
            </div>
          </div>
          <div className="flex flex-col shrink-0" style={{ paddingRight: 54 }}>
            <div className="flex gap-6 items-center justify-end h-[26px]">
              <span className="text-[14px] font-bold text-[#4A4A4A] leading-6 w-9 text-right">2246</span>
              <span className="text-[14px] font-bold text-[#4A4A4A] leading-6 w-8 text-right">100%</span>
            </div>
          </div>
        </div>
      </ChartCard>
    </div>
  )
}

function DonutCard03() {
  return (
    <div>
      <VariantLabel label="Estado vazio" variant="empty" />
      <ChartCard title="Motivos de desconexão" style={{ width: 456 }}>
        <div className="flex gap-2 items-center justify-center px-2 py-4">
          <DonutChart segments={[]} />
          <span className="text-[14px] text-[#4A4A4A] leading-6 tracking-[0.15px] whitespace-nowrap">
            Sem resultado no momento
          </span>
        </div>
      </ChartCard>
    </div>
  )
}

// ── Style 2 — Barra Segmentada ────────────────────────────────────────────────

const STATUS_CONFIG = [
  { key: 'atrasadas', label: 'Atrasadas', color: C.red    },
  { key: 'paraHoje',  label: 'Para hoje', color: C.yellow },
  { key: 'emDia',     label: 'Em dia',    color: C.green  },
]

function StatusCount({ color, label, count }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-1 px-2 rounded-[3px]">
      <div className="flex gap-2 items-center">
        <LegendDot color={color} />
        <span className="text-[14px] text-[#4A4A4A] leading-5 tracking-[0.25px] flex-1 min-w-0">{label}</span>
      </div>
      <div className="pl-4">
        <span className="text-[24px] font-bold text-[#4A4A4A] leading-6 tracking-[0.15px]">{count}</span>
      </div>
    </div>
  )
}

function ProgressCard01() {
  const counts = { atrasadas: 45, paraHoje: 8, emDia: 147 }
  const segments = STATUS_CONFIG.map(s => ({ value: counts[s.key], color: s.color }))
  return (
    <div>
      <VariantLabel label="Com dados" variant="default" />
      <ChartCard title="Demandas criadas por mim" showInfoIcon style={{ width: 456 }}>
        <div className="flex flex-col gap-6 items-center px-2 py-4">
          <SegmentedProgressBar segments={segments} />
          <div className="flex gap-2 items-center justify-center w-full">
            {STATUS_CONFIG.map(s => (
              <StatusCount key={s.key} color={s.color} label={s.label} count={counts[s.key]} />
            ))}
          </div>
        </div>
      </ChartCard>
    </div>
  )
}

function ProgressCard02() {
  const counts = { atrasadas: 0, paraHoje: 0, emDia: 0 }
  const segments = STATUS_CONFIG.map(s => ({ value: counts[s.key], color: s.color }))
  return (
    <div>
      <VariantLabel label="Estado vazio" variant="empty" />
      <ChartCard title="Demandas criadas por mim" showInfoIcon style={{ width: 456 }}>
        <div className="flex flex-col gap-6 items-center px-2 py-4">
          <SegmentedProgressBar segments={segments} />
          <div className="flex gap-2 items-center justify-center w-full">
            {STATUS_CONFIG.map(s => (
              <StatusCount key={s.key} color={s.color} label={s.label} count={counts[s.key]} />
            ))}
          </div>
        </div>
      </ChartCard>
    </div>
  )
}

// ── Style 3 — Desempenho ──────────────────────────────────────────────────────

const PERF_CONFIG = [
  { key: 'hoje',   label: 'Hoje',   color: C.blue   },
  { key: 'semana', label: 'Semana', color: C.green  },
  { key: 'mes',    label: 'Mês',    color: C.purple },
]

function PerfStat({ color, label, count, duration }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex gap-2 items-center">
        <LegendDot color={color} />
        <span className="text-[14px] text-[#4A4A4A] leading-normal">{label}</span>
      </div>
      <div className="flex items-center gap-3 pl-[15px]">
        <span className="text-[24px] font-bold text-[#4A4A4A] leading-normal w-10">{count}</span>
        <span className="text-[14px] font-bold text-[#4A4A4A] leading-normal text-right">{duration}</span>
      </div>
    </div>
  )
}

function PerformanceCardBase({ stats, rings, variantLabel, variantType }) {
  return (
    <div>
      <VariantLabel label={variantLabel} variant={variantType} />
      <div className="bg-white border border-[#E9EFF2] rounded-[4px] shrink-0" style={{ width: 421, height: 365 }}>
        <div className="border-b border-[#E9EFF2] flex items-center justify-between pl-4 pr-2 py-[10px]">
          <p className="text-[16px] font-bold text-[#4A4A4A] leading-6 tracking-[0.15px] whitespace-nowrap">
            Meu desempenho{' '}
            <span className="font-normal text-[#4A4A4A]">— Março 2024</span>
          </p>
          <button className="flex items-center justify-center w-6 h-6 text-[#4A4A4A] cursor-grab">
            <GripVertical size={20} />
          </button>
        </div>
        <div className="flex flex-col px-6 pt-6" style={{ gap: 46 }}>
          <div className="flex gap-6 items-center">
            <div className="flex flex-col gap-4" style={{ width: 163 }}>
              {PERF_CONFIG.map(({ key, label, color }) => (
                <PerfStat
                  key={key}
                  color={color}
                  label={label}
                  count={stats[key].count}
                  duration={stats[key].duration}
                />
              ))}
            </div>
            <RadialPerformanceChart rings={rings} size={174} />
          </div>
          <div className="flex gap-2 items-center pb-4">
            <RefreshCw size={20} className="text-[#4A4A4A] shrink-0" />
            <p className="text-[14px] text-[#4A4A4A] leading-6 tracking-[0.15px] whitespace-nowrap">
              Última atualização{' '}
              <strong className="font-bold">hoje às 9h 34min</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PerformanceCard01() {
  const stats = {
    hoje:   { count: 1,  duration: '15min'     },
    semana: { count: 3,  duration: '10h 10min' },
    mes:    { count: 12, duration: '20h 27min' },
  }
  const rings = [
    { value: 10, color: C.blue   },
    { value: 38, color: C.green  },
    { value: 72, color: C.purple },
  ]
  return <PerformanceCardBase stats={stats} rings={rings} variantLabel="Com dados" variantType="default" />
}

function PerformanceCard02() {
  const stats = {
    hoje:   { count: 0, duration: '0min' },
    semana: { count: 0, duration: '0min' },
    mes:    { count: 0, duration: '0min' },
  }
  const rings = [
    { value: 0, color: C.blue   },
    { value: 0, color: C.green  },
    { value: 0, color: C.purple },
  ]
  return <PerformanceCardBase stats={stats} rings={rings} variantLabel="Estado vazio" variantType="empty" />
}

// ── Color Token Row ───────────────────────────────────────────────────────────

function TokenRow({ label, color, token, hex }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[#F0F0F0] last:border-0">
      <div className="w-8 h-8 rounded-[6px] border border-black/10 shrink-0" style={{ backgroundColor: color }} />
      <span className="text-sm font-medium text-[#13283C] flex-1 min-w-0">{label}</span>
      <code className="text-xs font-mono text-[#304A64] bg-[#F0F4F8] px-2 py-0.5 rounded hidden sm:block">{token}</code>
      <code className="text-xs font-mono text-[#9E9E9E] w-20 text-right shrink-0">{hex}</code>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ChartPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Charts"
          description="Componentes de visualização de dados: gráfico de rosca, barra segmentada e gráfico de desempenho radial."
        />

        {/* Style 1 — Rosca */}
        <section className="mb-14">
          <SectionHeader
            icon={PieChart}
            title="Gráfico de Rosca"
            description="Exibe distribuição proporcional de dados com legenda e valores absolutos. Suporta múltiplos segmentos, segmento único e estado vazio."
          />
          <PreviewBlock vertical>
            <DonutCard01 />
            <DonutCard02 />
            <DonutCard03 />
          </PreviewBlock>
        </section>

        {/* Style 2 — Barra */}
        <section className="mb-14">
          <SectionHeader
            icon={BarChart2}
            title="Barra de Status"
            description="Barra horizontal segmentada para representar distribuição de demandas por status. Estado vazio exibe segmentos desabilitados."
          />
          <PreviewBlock>
            <ProgressCard01 />
            <ProgressCard02 />
          </PreviewBlock>
        </section>

        {/* Style 3 — Desempenho */}
        <section className="mb-14">
          <SectionHeader
            icon={Activity}
            title="Gráfico de Desempenho"
            description="Anéis concêntricos que representam o desempenho individual por período (hoje, semana, mês). Cada anel usa uma cor semântica distinta."
          />
          <PreviewBlock>
            <PerformanceCard01 />
            <PerformanceCard02 />
          </PreviewBlock>
        </section>

        {/* Tokens + Specs em grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Tokens de Cor */}
          <div>
            <h2 className="text-lg font-semibold text-[#13283C] mb-4">Tokens de Cor</h2>
            <div className="bg-white rounded-[14px] border border-black/10 px-6 py-2">
              <TokenRow label="Atrasadas / Lost service" color={C.red}    token="--states/red"              hex="#E9786B" />
              <TokenRow label="Para hoje / Admin-reset"  color={C.yellow} token="--states/yellow"           hex="#E9C16C" />
              <TokenRow label="Em dia / User-request"    color={C.green}  token="--states/green"            hex="#4BAF50" />
              <TokenRow label="Hoje"                     color={C.blue}   token="--states/blue"             hex="#0094EE" />
              <TokenRow label="Mês"                      color={C.purple} token="--states/purple"           hex="#8080EC" />
              <TokenRow label="Vazio / track"            color="rgba(0,0,0,0.12)" token="--states/black/disabledbg" hex="rgba(0,0,0,.12)" />
            </div>
          </div>

          {/* Especificações Técnicas */}
          <div>
            <h2 className="text-lg font-semibold text-[#13283C] mb-4">Especificações Técnicas</h2>
            <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-2.5 text-sm">
              {[
                ['ChartCard — largura',          '456px — fixa para Rosca e Barra'],
                ['ChartCard — header',           '44px alt · 16px Bold · tracking 0.15px'],
                ['Performance card',             '421 × 365px'],
                ['Legend dot',                   '8 × 8px · border-radius 50%'],
                ['Contagem destaque',            '24px Bold · Red Hat Display'],
                ['Tipografia geral',             '14px / leading-6 / tracking 0.15px'],
                ['Anéis radiais',               '3 níveis — Hoje · Semana · Mês'],
                ['Borda do card',               '1px solid #E9EFF2 — var(--divider)'],
                ['Border-radius',               '4px (Performance) · 16px (demais)'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 items-start">
                  <span className="font-medium text-[#13283C] shrink-0 w-[180px] leading-snug">{label}</span>
                  <span className="text-[#666666] leading-snug">{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
