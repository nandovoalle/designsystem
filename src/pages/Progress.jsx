import { PageHeader } from '../components/PageHeader'

const LINEAR_SAMPLES = [
  { value: 0 },
  { value: 1 },
  { value: 29 },
  { value: 30 },
  { value: 49 },
  { value: 50 },
  { value: 99 },
  { value: 100 },
]

const CIRCULAR_SAMPLES = [0, 10, 30, 50, 80, 100]

function getLinearColor(value) {
  if (value === 0) return null
  if (value < 30) return '#E9786B'
  if (value < 50) return '#E9C16C'
  if (value < 100) return '#0094EE'
  return '#4BAF50'
}

function ProgressLinear({ value = 0, showLabel = true }) {
  const color = getLinearColor(value)
  const pct = Math.min(100, Math.max(0, value))

  return (
    <div className="flex items-center gap-2">
      <div className="relative h-[4px] rounded-[8px] bg-black/10" style={{ width: 400 }}>
        {pct > 0 && (
          <div
            className="absolute inset-y-0 left-0 rounded-[8px]"
            style={{ width: `${pct}%`, backgroundColor: color }}
          />
        )}
      </div>
      {showLabel && (
        <span className="text-[14px] text-[#4A4A4A] whitespace-nowrap" style={{ minWidth: 36 }}>
          {value}%
        </span>
      )}
    </div>
  )
}

function ProgressCircular({ size = 32, value = 0 }) {
  const strokeWidth = size === 16 ? 2 : 3
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: 'rotate(-90deg)' }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth={strokeWidth}
      />
      {value > 0 && (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#13283C"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

export default function ProgressPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Progress"
          description="Indicadores de progresso linear e circular para representar o andamento de tarefas."
          showThemeToggle
        />

        {/* Linear */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Progress Linear</h2>
          <p className="text-sm text-[#666666] mb-6">
            Barra horizontal que muda de cor conforme o progresso: vermelho (0–29%), amarelo (30–49%), azul (50–99%) e verde (100%).
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8 flex flex-col gap-5">
            {LINEAR_SAMPLES.map(({ value }) => (
              <ProgressLinear key={value} value={value} />
            ))}
          </div>
        </div>

        {/* Circular 32px */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Progress Circular — 32px</h2>
          <p className="text-sm text-[#666666] mb-6">
            Indicador circular em tamanho padrão (32×32px).
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {CIRCULAR_SAMPLES.map((v) => (
                <div key={v} className="flex flex-col items-center gap-3">
                  <ProgressCircular size={32} value={v} />
                  <span className="text-xs text-[#666666]">{v}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Circular 16px */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Progress Circular — 16px</h2>
          <p className="text-sm text-[#666666] mb-6">
            Indicador circular em tamanho compacto (16×16px).
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {CIRCULAR_SAMPLES.map((v) => (
                <div key={v} className="flex flex-col items-center gap-3">
                  <ProgressCircular size={16} value={v} />
                  <span className="text-xs text-[#666666]">{v}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Semântica de cores */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Cores e Significados</h2>
          <p className="text-sm text-[#666666] mb-6">Cada faixa de progresso carrega um significado semântico.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Crítico',  range: '0–29%',   color: '#E9786B', token: '--states/red' },
              { label: 'Atenção',  range: '30–49%',  color: '#E9C16C', token: '--states/yellow' },
              { label: 'Em curso', range: '50–99%',  color: '#0094EE', token: '--states/blue' },
              { label: 'Concluído', range: '100%',   color: '#4BAF50', token: '--states/green' },
            ].map(({ label, range, color, token }) => (
              <div key={label} className="bg-white rounded-[14px] border border-black/10 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="font-medium text-[#13283C]">{label}</span>
                </div>
                <p className="text-xs text-[#666666] mb-2">{range}</p>
                <code className="text-xs font-mono text-[#9E9E9E]">{token}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Linear — altura da barra', '4px'],
              ['Linear — largura da track', '400px (fixo no design)'],
              ['Linear — border-radius', '8px'],
              ['Circular — tamanho padrão', '32×32px, stroke 3px'],
              ['Circular — tamanho compacto', '16×16px, stroke 2px'],
              ['Circular — cor da track', 'rgba(0,0,0,0.12)'],
              ['Circular — cor do progresso', '#13283C (navy)'],
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
