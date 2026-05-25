import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const SPACING_SCALE = [
  { token: 'spacing/1',  value: 4,   tailwind: 'p-1',  rem: '0.25', usageItems: ['Gap de ícone', 'Borda interna'] },
  { token: 'spacing/2',  value: 8,   tailwind: 'p-2',  rem: '0.5',  usageItems: ['Padding compacto', 'Gap pequeno'] },
  { token: 'spacing/3',  value: 12,  tailwind: 'p-3',  rem: '0.75', usageItems: ['Badge', 'Tag'] },
  { token: 'spacing/4',  value: 16,  tailwind: 'p-4',  rem: '1',    usageItems: ['Padding padrão', 'Gap de lista'] },
  { token: 'spacing/5',  value: 20,  tailwind: 'p-5',  rem: '1.25', usageItems: ['Padding de card', 'Formulário'] },
  { token: 'spacing/6',  value: 24,  tailwind: 'p-6',  rem: '1.5',  usageItems: ['Seção de card', 'Toolbar'] },
  { token: 'spacing/8',  value: 32,  tailwind: 'p-8',  rem: '2',    usageItems: ['Gap de componentes'] },
  { token: 'spacing/10', value: 40,  tailwind: 'p-10', rem: '2.5',  usageItems: ['Espaçamento de layout'] },
  { token: 'spacing/12', value: 48,  tailwind: 'p-12', rem: '3',    usageItems: ['Seções de conteúdo'] },
  { token: 'spacing/14', value: 56,  tailwind: 'p-14', rem: '3.5',  usageItems: ['Margem de seção'] },
  { token: 'spacing/16', value: 64,  tailwind: 'p-16', rem: '4',    usageItems: ['Layout de página'] },
  { token: 'spacing/20', value: 80,  tailwind: 'p-20', rem: '5',    usageItems: ['Header', 'Hero'] },
  { token: 'spacing/24', value: 96,  tailwind: 'p-24', rem: '6',    usageItems: ['Seção grande'] },
  { token: 'spacing/32', value: 128, tailwind: 'p-32', rem: '8',    usageItems: ['Container máximo'] },
]

const MAX_VALUE = 128

export default function SpacingPage() {
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
          title="Spacing"
          description="Escala de espaçamento usada para padding, margin e gap em todos os componentes do sistema."
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
          <div className={`px-8 py-8 space-y-3 ${isDark ? 'bg-[#26292E]' : 'bg-[#F5F6F7]'}`}>
            {SPACING_SCALE.map(({ token, value }) => (
              <div key={token} className="flex items-center gap-4">
                <span className={`text-[11px] font-mono w-[100px] shrink-0 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                  {token}
                </span>
                <div
                  className={`h-5 rounded-md shrink-0 transition-all ${isDark ? 'bg-[rgba(48,74,100,0.5)]' : 'bg-[rgba(48,74,100,0.15)]'}`}
                  style={{ width: Math.max((value / MAX_VALUE) * 320, 6) }}
                />
                <span className={`text-[11px] font-semibold tabular-nums ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}>
                  {value}px
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabela de tokens */}
        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
          {/* Cabeçalho */}
          <div
            className={`flex items-center gap-4 px-6 py-3 border-b text-[11px] font-semibold uppercase tracking-widest ${isDark ? 'bg-[#26292E] border-[#4B4E52] text-[#808285]' : 'bg-[#F5F6F7] border-[#E9EFF2] text-[#9E9E9E]'}`}
          >
            <span style={{ width: 148 }} className="shrink-0">Token</span>
            <span style={{ width: 64 }} className="shrink-0">Valor</span>
            <span style={{ width: 52 }} className="shrink-0">rem</span>
            <span className="flex-1">Uso</span>
            <span style={{ width: 36 }} className="shrink-0" />
          </div>

          {/* Linhas */}
          {SPACING_SCALE.map(({ token, value, rem, tailwind, usageItems }) => (
            <div
              key={token}
              className={`flex items-center gap-4 px-6 py-3.5 border-b last:border-b-0 transition-colors ${isDark ? 'border-[#4B4E52] hover:bg-[#26292E]' : 'border-[#E9EFF2] hover:bg-[#FAFAFA]'}`}
            >
              {/* Token + tailwind */}
              <div style={{ width: 148 }} className="shrink-0 flex flex-col gap-0.5">
                <span className={`text-xs font-mono font-medium ${isDark ? 'text-[#C1C2C4]' : 'text-[#304A64]'}`}>
                  {token}
                </span>
                <span className={`text-[10px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                  {tailwind}
                </span>
              </div>

              {/* px */}
              <span style={{ width: 64 }} className={`shrink-0 text-sm font-semibold tabular-nums ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                {value}px
              </span>

              {/* rem */}
              <span style={{ width: 52 }} className={`shrink-0 text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                {rem}rem
              </span>

              {/* Uso */}
              <div className="flex-1 flex flex-wrap gap-1.5">
                {usageItems.map((item) => (
                  <span
                    key={item}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${isDark ? 'bg-[#32353A] text-[#C1C2C4]' : 'bg-[#EEF3F7] text-[#304A64]'}`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Copy */}
              <button
                type="button"
                style={{ width: 36 }}
                className={`shrink-0 h-8 flex items-center justify-center rounded-lg transition-colors ${isDark ? 'hover:bg-[#32353A] text-[#808285] hover:text-[#C1C2C4]' : 'hover:bg-[#F0F2F5] text-[#9E9E9E] hover:text-[#4A4A4A]'}`}
                onClick={() => handleCopy(`${value}px`, token)}
              >
                {copied === token ? <Check size={13} /> : <Copy size={13} />}
              </button>
            </div>
          ))}
        </div>

        {/* Princípios */}
        <div className={`rounded-2xl border p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-[#F5F6F7] border-[#E9EFF2]'}`}>
          {[
            {
              title: 'Múltiplos de 4',
              body: 'Toda a escala é baseada em múltiplos de 4px — o menor denominador comum entre grids de 4, 8 e 12 colunas.',
            },
            {
              title: 'Densidade semântica',
              body: 'Use tokens menores (1–3) para espaçamento interno de componentes e maiores (8–32) para layout e separação de seções.',
            },
            {
              title: 'Gap vs. Padding',
              body: 'Prefira `gap` em containers flex/grid. Use `padding` apenas para espaço interno de um único elemento.',
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
