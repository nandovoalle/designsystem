import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Steps } from '../components/ui/Steps'

const ALL_STATES = [
  { state: 'completed', label: 'Completed' },
  { state: 'active',    label: 'Active' },
  { state: 'default',   label: 'Default' },
  { state: 'disabled',  label: 'Disabled' },
  { state: 'error',     label: 'Error' },
  { state: 'attention', label: 'Attention' },
]

function PreviewPanel({ isDark, children }) {
  return (
    <div
      className={`rounded-[16px] border p-10 ${
        isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
      }`}
    >
      {children}
    </div>
  )
}

function SectionTitle({ isDark, children, className = 'mb-1' }) {
  return (
    <h2 className={`text-xl font-medium ${className} ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
      {children}
    </h2>
  )
}

function SectionDesc({ isDark, children, className = 'mb-6' }) {
  return (
    <p className={`text-sm ${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
      {children}
    </p>
  )
}

function StateLabel({ isDark, children }) {
  return (
    <span className={`text-xs text-center ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
      {children}
    </span>
  )
}

export default function StepsPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Steps"
          description="Componente de navegação por etapas para fluxos sequenciais e processos com múltiplos passos."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Preview — all states with chevron */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Preview</SectionTitle>
          <SectionDesc isDark={isDark}>
            Todos os estados do componente <code className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Steps</code> — com e sem separador chevron.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            {/* With chevron */}
            <div className="flex flex-wrap items-center gap-0 mb-6">
              {ALL_STATES.map(({ state, label }, i) => (
                <Steps
                  key={state}
                  state={state}
                  label={label}
                  number={i + 1}
                  showChevron={i < ALL_STATES.length - 1}
                  isDark={isDark}
                />
              ))}
            </div>
            {/* Without chevron */}
            <div className="flex flex-wrap items-center gap-4">
              {ALL_STATES.map(({ state, label }, i) => (
                <Steps
                  key={state}
                  state={state}
                  label={label}
                  number={i + 1}
                  showChevron={false}
                  isDark={isDark}
                />
              ))}
            </div>
          </PreviewPanel>
        </div>

        {/* Individual states */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Estados</SectionTitle>
          <SectionDesc isDark={isDark}>Cada estado comunica uma fase diferente do fluxo.</SectionDesc>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ALL_STATES.map(({ state, label }, i) => (
              <div
                key={state}
                className={`rounded-[14px] border p-6 flex flex-col items-start gap-4 ${
                  isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
                }`}
              >
                <Steps state={state} label={label} number={i + 1} showChevron={false} isDark={isDark} />
                <StateLabel isDark={isDark}>{state}</StateLabel>
              </div>
            ))}
          </div>
        </div>

        {/* Flow example */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Exemplo de Fluxo</SectionTitle>
          <SectionDesc isDark={isDark}>
            Composição típica de um fluxo de 4 etapas com estados mistos.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-wrap items-center gap-0">
              <Steps state="completed" label="Dados pessoais" number={1} showChevron isDark={isDark} />
              <Steps state="completed" label="Endereço"       number={2} showChevron isDark={isDark} />
              <Steps state="active"    label="Pagamento"      number={3} showChevron isDark={isDark} />
              <Steps state="default"   label="Confirmação"    number={4} showChevron={false} isDark={isDark} />
            </div>
          </PreviewPanel>
        </div>

        {/* Error / attention flow */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Estados de Alerta</SectionTitle>
          <SectionDesc isDark={isDark}>
            Fluxo com etapa em erro e etapa com atenção requerida.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-wrap items-center gap-0">
              <Steps state="completed" label="Dados pessoais" number={1} showChevron isDark={isDark} />
              <Steps state="error"     label="Endereço"       number={2} showChevron isDark={isDark} />
              <Steps state="attention" label="Pagamento"      number={3} showChevron isDark={isDark} />
              <Steps state="disabled"  label="Confirmação"    number={4} showChevron={false} isDark={isDark} />
            </div>
          </PreviewPanel>
        </div>

        {/* Specs */}
        <div>
          <SectionTitle isDark={isDark} className="mb-4">Especificações Técnicas</SectionTitle>
          <div
            className={`rounded-[14px] border p-6 space-y-3 text-sm ${
              isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
            }`}
          >
            {[
              ['Altura do container',      '40px'],
              ['Círculo (step indicator)', '30×30px, border-radius 100px'],
              ['Tipografia — número',      'Red Hat Display Medium 500, 16px / 24px, letter-spacing 0.15px'],
              ['Tipografia — label',       'Red Hat Display SemiBold 600, 14px / 20px, letter-spacing 0.1px'],
              ['Estado: completed',        'bg #67D18A — var(--states/green-2) + ícone Check branco'],
              ['Estado: active',           'bg #13283C — var(--blue-800) + número branco, label #13283C'],
              ['Estado: default',          'border #9CB1C8 — var(--blue-200) + número e label #9CB1C8'],
              ['Estado: disabled',         'border #9E9E9E — var(--text/disabled) + número e label #9E9E9E + ícone Lock'],
              ['Estado: error',            'bg #E9786B — var(--states/red) + ícone X branco'],
              ['Estado: attention',        'bg #E9C16C — var(--states/yellow) + "!" branco'],
              ['Separador chevron',        'ChevronRight 24px — cor varia por estado'],
              ['Prop: showChevron',        'true (default) | false — controla exibição do separador'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className={`font-medium min-w-[240px] ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                  {label}:
                </span>
                <span className={isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
