import { useState } from 'react'
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

const COLOR_STATES = [
  { label: 'Crítico',   range: '1–29%',  value: 15,  color: '#E9786B', token: '--states/red',    bg: 'rgba(233,120,107,0.1)' },
  { label: 'Atenção',   range: '30–49%', value: 40,  color: '#E9C16C', token: '--states/yellow', bg: 'rgba(233,193,108,0.1)' },
  { label: 'Em curso',  range: '50–99%', value: 65,  color: '#0094EE', token: '--states/blue',   bg: 'rgba(0,148,238,0.1)'   },
  { label: 'Concluído', range: '100%',   value: 100, color: '#4BAF50', token: '--states/green',  bg: 'rgba(75,175,80,0.1)'   },
]

function getLinearColor(value) {
  if (value === 0) return null
  if (value < 30) return '#E9786B'
  if (value < 50) return '#E9C16C'
  if (value < 100) return '#0094EE'
  return '#4BAF50'
}

function getState(value) {
  if (value === 0) return { label: 'Vazio', color: '#9E9E9E' }
  if (value < 30) return { label: 'Crítico', color: '#E9786B' }
  if (value < 50) return { label: 'Atenção', color: '#E9C16C' }
  if (value < 100) return { label: 'Em curso', color: '#0094EE' }
  return { label: 'Concluído', color: '#4BAF50' }
}

function ProgressLinear({ value = 0, isDark = false }) {
  const color = getLinearColor(value)
  const pct = Math.min(100, Math.max(0, value))
  return (
    <div className={`relative h-[6px] rounded-full w-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
      {pct > 0 && (
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      )}
    </div>
  )
}

function ProgressCircular({ size = 32, value = 0, isDark = false }) {
  const strokeWidth = size <= 16 ? 2 : 3
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference
  const trackColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'
  const fillColor = isDark ? '#BFD8F3' : '#13283C'

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={trackColor} strokeWidth={strokeWidth} />
      {value > 0 && (
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={fillColor} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

export default function ProgressPage() {
  const [theme, setTheme] = useState('light')
  const [demoValue, setDemoValue] = useState(65)
  const isDark = theme === 'dark'

  const state = getState(demoValue)

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-white'}`}>
      <div className="container max-w-6xl mx-auto space-y-10">
        <PageHeader
          title="Progress"
          description="Indicadores de progresso linear e circular para representar o andamento de tarefas."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Demo interativo */}
        <div className={`rounded-2xl border ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
          <div className={`px-8 pt-6 pb-2 border-b rounded-t-2xl ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Demo interativo — arraste o slider
            </p>
          </div>

          <div className={`px-8 py-8 space-y-6 rounded-b-2xl ${isDark ? 'bg-[#26292E]' : 'bg-[#F5F6F7]'}`}>
            {/* Valor e estado */}
            <div className="flex items-center gap-4">
              <span className={`text-4xl font-bold tabular-nums w-24 shrink-0 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                {demoValue}%
              </span>
              <span
                className="text-sm font-semibold px-3 py-1 rounded-full transition-colors"
                style={{ color: state.color, backgroundColor: state.color + '18' }}
              >
                {state.label}
              </span>
            </div>

            {/* Linear */}
            <ProgressLinear value={demoValue} isDark={isDark} />

            {/* Circular + slider */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1.5">
                  <ProgressCircular size={40} value={demoValue} isDark={isDark} />
                  <span className={`text-[10px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>40px</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <ProgressCircular size={24} value={demoValue} isDark={isDark} />
                  <span className={`text-[10px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>24px</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <ProgressCircular size={16} value={demoValue} isDark={isDark} />
                  <span className={`text-[10px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>16px</span>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={demoValue}
                onChange={(e) => setDemoValue(+e.target.value)}
                className="flex-1 accent-[#304A64] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Linear scale */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Progress Linear</h2>
            <span className={`text-sm ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Cor semântica por faixa de valor
            </span>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
            <div
              className={`flex items-center gap-4 px-6 py-3 border-b text-[11px] font-semibold uppercase tracking-widest ${isDark ? 'bg-[#26292E] border-[#4B4E52] text-[#808285]' : 'bg-[#F5F6F7] border-[#E9EFF2] text-[#9E9E9E]'}`}
            >
              <span style={{ width: 52 }} className="shrink-0">Valor</span>
              <span className="flex-1">Barra</span>
              <span style={{ width: 96 }} className="shrink-0">Estado</span>
            </div>
            {LINEAR_SAMPLES.map(({ value }) => {
              const s = getState(value)
              return (
                <div
                  key={value}
                  className={`flex items-center gap-4 px-6 py-4 border-b last:border-b-0 ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}
                >
                  <span
                    style={{ width: 52 }}
                    className={`shrink-0 text-sm font-semibold tabular-nums ${isDark ? 'text-white' : 'text-[#13283C]'}`}
                  >
                    {value}%
                  </span>
                  <div className="flex-1">
                    <ProgressLinear value={value} isDark={isDark} />
                  </div>
                  <span
                    style={{ width: 96 }}
                    className="shrink-0 flex justify-end"
                  >
                    <span
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                      style={{ color: s.color, backgroundColor: s.color + '18' }}
                    >
                      {s.label}
                    </span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Circular */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Progress Circular</h2>
            <span className={`text-sm ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Três tamanhos disponíveis</span>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
            {/* Header de colunas */}
            <div className={`grid border-b px-8 py-3 text-[11px] font-semibold uppercase tracking-widest ${isDark ? 'bg-[#26292E] border-[#4B4E52] text-[#808285]' : 'bg-[#F5F6F7] border-[#E9EFF2] text-[#9E9E9E]'}`}
              style={{ gridTemplateColumns: '72px repeat(6, 1fr)' }}
            >
              <span>Tamanho</span>
              {CIRCULAR_SAMPLES.map((v) => (
                <span key={v} className="text-center">{v}%</span>
              ))}
            </div>
            {/* Linhas por tamanho */}
            {[40, 32, 24, 16].map((size) => (
              <div
                key={size}
                className={`grid items-center px-8 py-5 border-b last:border-b-0 ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}
                style={{ gridTemplateColumns: '72px repeat(6, 1fr)' }}
              >
                <span className={`text-xs font-mono font-medium ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                  {size}×{size}px
                </span>
                {CIRCULAR_SAMPLES.map((v) => (
                  <div key={v} className="flex items-center justify-center">
                    <ProgressCircular size={size} value={v} isDark={isDark} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Semântica de cores */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Cores e Significados</h2>
            <span className={`text-sm ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Cada faixa de progresso carrega um significado semântico
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COLOR_STATES.map(({ label, range, value, color, token, bg }) => (
              <div
                key={label}
                className={`rounded-2xl border p-5 space-y-4 ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{label}</span>
                  </div>
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ color, backgroundColor: bg }}
                  >
                    {range}
                  </span>
                </div>

                {/* Mini barra no valor representativo */}
                <div className="space-y-1.5">
                  <div className={`relative h-2 rounded-full w-full ${isDark ? 'bg-white/10' : 'bg-black/8'}`}>
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ width: `${value}%`, backgroundColor: color }}
                    />
                  </div>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                    Exemplo: {value}%
                  </span>
                </div>

                <code className={`text-[10px] font-mono block ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                  {token}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Especificações técnicas */}
        <div className="space-y-4">
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Especificações Técnicas</h2>
          <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
            {[
              { label: 'Linear — altura da track',    value: '6px' },
              { label: 'Linear — border-radius',       value: '9999px (full)' },
              { label: 'Linear — cor da track',        value: 'rgba(0,0,0,0.10) · light / rgba(255,255,255,0.10) · dark' },
              { label: 'Circular — tamanhos',          value: '40px · 32px · 24px · 16px' },
              { label: 'Circular — stroke (≥24px)',    value: '3px' },
              { label: 'Circular — stroke (16px)',     value: '2px' },
              { label: 'Circular — cor da track',      value: 'rgba(0,0,0,0.12) · light / rgba(255,255,255,0.12) · dark' },
              { label: 'Circular — cor do progresso',  value: '#13283C · light / #BFD8F3 · dark' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex items-start gap-6 px-6 py-3.5 border-b last:border-b-0 transition-colors ${isDark ? 'border-[#4B4E52] hover:bg-[#26292E]' : 'border-[#E9EFF2] hover:bg-[#FAFAFA]'}`}
              >
                <span className={`text-sm font-medium shrink-0 ${isDark ? 'text-[#C1C2C4]' : 'text-[#13283C]'}`} style={{ minWidth: 220 }}>
                  {label}
                </span>
                <span className={`text-sm font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Princípios */}
        <div className={`rounded-2xl border p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-[#F5F6F7] border-[#E9EFF2]'}`}>
          {[
            {
              title: 'Cor como informação',
              body: 'A transição de cor não é decorativa — cada faixa comunica um estado de saúde do processo. Não altere as cores sem revisar o significado semântico.',
            },
            {
              title: 'Linear vs. Circular',
              body: 'Use linear para processos com etapas sequenciais visíveis (upload, formulário). Use circular em espaços compactos ou quando o progresso é contextual ao conteúdo.',
            },
            {
              title: 'Sempre mostre o valor',
              body: 'Exiba a porcentagem numérica junto ao indicador quando o espaço permitir. Depender apenas da cor ou do comprimento da barra cria ambiguidade.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="space-y-2">
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{title}</p>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
