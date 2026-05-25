import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const RADIUS_SCALE = [
  {
    token: 'none',
    value: 0,
    display: '0px',
    tailwind: 'rounded-none',
    cssValue: 'border-radius: 0px',
    usageItems: ['Tabelas', 'Blocos de código'],
  },
  {
    token: 'xs',
    value: 2,
    display: '2px',
    tailwind: 'rounded-xs',
    cssValue: 'border-radius: 2px',
    usageItems: ['Tags', 'Badges'],
  },
  {
    token: 'sm',
    value: 4,
    display: '4px',
    tailwind: 'rounded-sm',
    cssValue: 'border-radius: 4px',
    usageItems: ['Botões', 'Inputs'],
  },
  {
    token: 'md',
    value: 6,
    display: '6px',
    tailwind: 'rounded-md',
    cssValue: 'border-radius: 6px',
    usageItems: ['Chips', 'Formulários'],
  },
  {
    token: 'lg',
    value: 8,
    display: '8px',
    tailwind: 'rounded-lg',
    cssValue: 'border-radius: 8px',
    usageItems: ['Cards', 'Painéis'],
  },
  {
    token: 'xl',
    value: 12,
    display: '12px',
    tailwind: 'rounded-xl',
    cssValue: 'border-radius: 12px',
    usageItems: ['Cards destacados', 'Alertas'],
  },
  {
    token: '2xl',
    value: 16,
    display: '16px',
    tailwind: 'rounded-2xl',
    cssValue: 'border-radius: 16px',
    usageItems: ['Modais', 'Drawers'],
  },
  {
    token: '3xl',
    value: 24,
    display: '24px',
    tailwind: 'rounded-3xl',
    cssValue: 'border-radius: 24px',
    usageItems: ['Sheets', 'Containers grandes'],
  },
  {
    token: 'full',
    value: 9999,
    display: '9999px',
    tailwind: 'rounded-full',
    cssValue: 'border-radius: 9999px',
    usageItems: ['Pills', 'Avatares', 'Toggles'],
  },
]

function ShapePreview({ value, isDark }) {
  const radius = value === 9999 ? '9999px' : `${value}px`
  return (
    <div
      className={`w-16 h-16 shrink-0 transition-all ${isDark ? 'bg-[rgba(48,74,100,0.25)] border border-[rgba(191,216,243,0.25)]' : 'bg-[rgba(48,74,100,0.08)] border border-[rgba(48,74,100,0.18)]'}`}
      style={{ borderRadius: radius }}
    />
  )
}

export default function RadiusPage() {
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
          title="Radius"
          description="9 tokens de raio de borda — de nenhum arredondamento até pill completo."
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

          <div className={`px-10 py-12 ${isDark ? 'bg-[#26292E]' : 'bg-[#F5F6F7]'}`}>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {RADIUS_SCALE.map(({ token, value }) => (
                <div key={token} className="flex flex-col items-center gap-3">
                  <ShapePreview value={value} isDark={isDark} />
                  <span className={`text-[11px] font-mono font-medium ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                    {token}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de detalhes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RADIUS_SCALE.map(({ token, value, display, tailwind, cssValue, usageItems }) => (
            <div
              key={token}
              className={`rounded-2xl border overflow-hidden flex flex-col transition-colors ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}
            >
              {/* Preview */}
              <div className={`flex items-center justify-center py-9 gap-5 ${isDark ? 'bg-[#1D2024]' : 'bg-[#F5F6F7]'}`}>
                <ShapePreview value={value} isDark={isDark} />
                <div className="flex flex-col gap-1">
                  <span className={`text-2xl font-semibold leading-none ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                    {display === '9999px' ? '∞' : display}
                  </span>
                  <span className={`text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                    {display === '9999px' ? '9999px' : null}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Token + tailwind */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                    {token}
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${isDark ? 'bg-[#32353A] text-[#808285]' : 'bg-[#F0F2F5] text-[#666666]'}`}>
                    {tailwind}
                  </span>
                </div>

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
                  onClick={() => handleCopy(cssValue, token)}
                >
                  <code className={`text-[10px] font-mono truncate ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}>
                    {cssValue}
                  </code>
                  <span className={`ml-2 shrink-0 transition-colors ${isDark ? 'text-[#808285] group-hover:text-[#C1C2C4]' : 'text-[#9E9E9E] group-hover:text-[#4A4A4A]'}`}>
                    {copied === token ? <Check size={13} /> : <Copy size={13} />}
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
              title: 'Consistência hierárquica',
              body: 'Use tokens menores para elementos internos e maiores para containers. Um botão dentro de um card sempre terá raio menor que o card.',
            },
            {
              title: 'Raio relativo ao tamanho',
              body: 'Elementos pequenos pedem raios menores. Aplicar `2xl` em um badge cria uma pill; em um modal, define apenas os cantos do container.',
            },
            {
              title: 'Full para formas orgânicas',
              body: '`full` (9999px) é reservado para pills, avatares e toggles — formas que devem parecer completamente arredondadas em qualquer tamanho.',
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
