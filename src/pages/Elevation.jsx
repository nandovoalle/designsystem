import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const ELEVATION_SCALE = [
  {
    level: 0,
    label: 'Level 0',
    token: '--shadow-0',
    description: 'Sem sombra — superfície plana',
    usageItems: ['Plano de fundo', 'Estado desabilitado'],
    shadow: 'none',
    cssValue: 'none',
  },
  {
    level: 1,
    label: 'Level 1',
    token: '--shadow-1',
    description: '4px blur · 2px Y · −1 spread',
    usageItems: ['Cards', 'Itens de lista'],
    shadow: '0px 1px 2px 0px rgba(24,22,36,0.05), 0px 2px 4px -1px rgba(24,22,36,0.1)',
    cssValue: '0px 1px 2px 0px rgba(24,22,36,0.05), 0px 2px 4px -1px rgba(24,22,36,0.1)',
  },
  {
    level: 2,
    label: 'Level 2',
    token: '--shadow-2',
    description: '8px blur · 4px Y · −2 spread',
    usageItems: ['Dropdowns', 'Tooltips', 'Menus'],
    shadow: '0px 2px 4px 0px rgba(24,22,36,0.06), 0px 4px 8px -2px rgba(24,22,36,0.11)',
    cssValue: '0px 2px 4px 0px rgba(24,22,36,0.06), 0px 4px 8px -2px rgba(24,22,36,0.11)',
  },
  {
    level: 3,
    label: 'Level 3',
    token: '--shadow-3',
    description: '16px blur · 8px Y · −3 spread',
    usageItems: ['Popovers', 'Drawers'],
    shadow: '0px 4px 8px 0px rgba(24,22,36,0.07), 0px 8px 16px -3px rgba(24,22,36,0.14)',
    cssValue: '0px 4px 8px 0px rgba(24,22,36,0.07), 0px 8px 16px -3px rgba(24,22,36,0.14)',
  },
  {
    level: 4,
    label: 'Level 4',
    token: '--shadow-4',
    description: '24px blur · 12px Y · −4 spread',
    usageItems: ['Diálogos', 'Modais'],
    shadow: '0px 6px 12px 0px rgba(24,22,36,0.09), 0px 12px 24px -4px rgba(24,22,36,0.18)',
    cssValue: '0px 6px 12px 0px rgba(24,22,36,0.09), 0px 12px 24px -4px rgba(24,22,36,0.18)',
  },
  {
    level: 5,
    label: 'Level 5',
    token: '--shadow-5',
    description: '40px blur · 20px Y · −6 spread',
    usageItems: ['Command palette', 'Modais críticos'],
    shadow: '0px 10px 20px 0px rgba(24,22,36,0.12), 0px 20px 40px -6px rgba(24,22,36,0.24)',
    cssValue: '0px 10px 20px 0px rgba(24,22,36,0.12), 0px 20px 40px -6px rgba(24,22,36,0.24)',
  },
]

export default function ElevationPage() {
  const [copied, setCopied] = useState(null)
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1800)
  }

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-white'}`}>
      <div className="container max-w-6xl mx-auto space-y-10">
        <PageHeader
          title="Elevation"
          description="6 níveis de elevação — da superfície plana até modal de máxima prioridade visual."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Escala visual */}
        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
          <div className={`px-8 pt-6 pb-2 border-b ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Escala visual
            </p>
          </div>

          <div className={`px-10 pt-14 pb-10 ${isDark ? 'bg-[#26292E]' : 'bg-[#F5F6F7]'}`}>
            <div className="flex items-end justify-center gap-8 flex-wrap">
              {ELEVATION_SCALE.map(({ level, label, shadow }) => (
                <div key={level} className="flex flex-col items-center gap-4">
                  <div
                    className={`w-28 rounded-xl transition-all ${isDark ? 'bg-[#32353A]' : 'bg-white'}`}
                    style={{
                      height: 72,
                      boxShadow: shadow,
                      marginBottom: level * 10,
                    }}
                  />
                  <div className="flex flex-col items-center gap-1">
                    <span className={`text-xs font-semibold ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}>
                      {label}
                    </span>
                    <span className={`text-[10px] ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                      dp {level === 0 ? '0' : level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards de detalhe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ELEVATION_SCALE.map(({ level, label, token, description, usageItems, shadow, cssValue }) => (
            <div
              key={level}
              className={`rounded-2xl border overflow-hidden flex flex-col transition-colors ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}
            >
              {/* Preview */}
              <div className={`flex items-center justify-center py-9 ${isDark ? 'bg-[#1D2024]' : 'bg-[#F5F6F7]'}`}>
                <div
                  className={`w-28 h-16 rounded-xl ${isDark ? 'bg-[#32353A]' : 'bg-white'}`}
                  style={{ boxShadow: shadow }}
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Label + token */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                    {label}
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${isDark ? 'bg-[#32353A] text-[#808285]' : 'bg-[#F0F2F5] text-[#666666]'}`}>
                    {token}
                  </span>
                </div>

                {/* Spec */}
                <p className={`text-[11px] font-mono leading-relaxed ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                  {description}
                </p>

                {/* Usage chips */}
                <div className="flex flex-wrap gap-1.5">
                  {usageItems.map((item) => (
                    <span
                      key={item}
                      className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${isDark ? 'bg-[#32353A] text-[#C1C2C4]' : 'bg-[#EEF3F7] text-[#304A64]'}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CSS copy */}
                <button
                  type="button"
                  className={`mt-auto flex items-center justify-between rounded-lg px-3 py-2.5 w-full text-left transition-colors group ${isDark ? 'bg-[#1D2024] hover:bg-[#32353A]' : 'bg-[#F5F6F7] hover:bg-[#EEF3F7]'}`}
                  onClick={() => handleCopy(cssValue, level)}
                >
                  <code className={`text-[10px] font-mono truncate leading-relaxed ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}>
                    {cssValue === 'none' ? 'none' : cssValue.slice(0, 42) + '…'}
                  </code>
                  <span className={`ml-2 shrink-0 transition-colors ${isDark ? 'text-[#808285] group-hover:text-[#C1C2C4]' : 'text-[#9E9E9E] group-hover:text-[#4A4A4A]'}`}>
                    {copied === level ? <Check size={13} /> : <Copy size={13} />}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Princípios */}
        <div className={`rounded-2xl border p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-[#F5F6F7] border-[#E9EFF2]'}`}>
          {[
            {
              title: 'Hierarquia consistente',
              body: 'Cada nível representa uma camada acima do plano de fundo. Nunca pule níveis — use a progressão natural.',
            },
            {
              title: 'Sombras duplas',
              body: 'Cada nível combina uma sombra de ambiente (opacidade baixa) com uma sombra direcional (opacidade média).',
            },
            {
              title: 'Base cromática unificada',
              body: 'Todas as sombras usam rgba(24,22,36) — um roxo-escuro neutro que harmoniza com fundos claros e escuros.',
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
