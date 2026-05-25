import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const SCALE = [
  {
    group: 'Headline',
    desc: 'Para títulos principais e seções de destaque',
    items: [
      { name: 'Headline Large',  size: 32, lh: 40, weight: 400, weightName: 'Regular',  ls: '0',   font: 'Red Hat Display' },
      { name: 'Headline Medium', size: 28, lh: 36, weight: 400, weightName: 'Regular',  ls: '0',   font: 'Red Hat Display' },
      { name: 'Headline Small',  size: 24, lh: 32, weight: 400, weightName: 'Regular',  ls: '0',   font: 'Red Hat Display' },
    ],
  },
  {
    group: 'Title',
    desc: 'Para títulos de seções e cards',
    items: [
      { name: 'Title Large',  size: 22, lh: 28, weight: 500, weightName: 'Medium',   ls: '0',    font: 'Red Hat Display' },
      { name: 'Title Medium', size: 20, lh: 30, weight: 500, weightName: 'Medium',   ls: '0',    font: 'Red Hat Display' },
      { name: 'Title Small',  size: 18, lh: 27, weight: 600, weightName: 'SemiBold', ls: '0',    font: 'Red Hat Display' },
    ],
  },
  {
    group: 'Body',
    desc: 'Para texto corrido e descrições',
    items: [
      { name: 'Body Large',  size: 18, lh: 27, weight: 400, weightName: 'Regular', ls: '0.5',  font: 'System UI' },
      { name: 'Body Medium', size: 16, lh: 24, weight: 400, weightName: 'Regular', ls: '0.5',  font: 'System UI' },
      { name: 'Body Small',  size: 14, lh: 20, weight: 400, weightName: 'Regular', ls: '0.25', font: 'System UI' },
    ],
  },
  {
    group: 'Label / Caption',
    desc: 'Para elementos de UI e metadados',
    items: [
      { name: 'Label',   size: 12, lh: 16, weight: 400, weightName: 'Regular', ls: '0.4',  font: 'System UI' },
      { name: 'Caption', size: 11, lh: 16, weight: 400, weightName: 'Regular', ls: '0.4',  font: 'System UI' },
    ],
  },
]

const ALL_ITEMS = SCALE.flatMap((s) => s.items)

const WEIGHT_CLASS = {
  400: 'font-normal',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
}

function SpecimenCard({ name, size, lh, weight, weightName, ls, font, isDark, onCopy, copied }) {
  const isDisplay = font === 'Red Hat Display'
  const twClass = `text-[${size}px] leading-[${lh}px] ${WEIGHT_CLASS[weight]}`

  return (
    <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-5 py-3 border-b ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{name}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${isDark ? 'bg-[#32353A] text-[#808285]' : 'bg-[#F0F2F5] text-[#9E9E9E]'}`}>
            {size}px
          </span>
        </div>
        <span className={`text-[11px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
          {size}/{lh} · {weightName} · ls {ls}
        </span>
      </div>

      {/* Preview */}
      <div className={`px-5 py-7 ${isDark ? 'bg-[#1D2024]' : 'bg-[#F9FAFB]'}`}>
        <p
          style={{
            fontSize: size,
            lineHeight: `${lh}px`,
            fontWeight: weight,
            letterSpacing: `${ls}px`,
            fontFamily: isDisplay ? '"Red Hat Display", sans-serif' : 'system-ui, sans-serif',
            color: isDark ? '#FFFFFF' : '#13283C',
          }}
        >
          The quick brown fox jumps over the lazy dog
        </p>
      </div>

      {/* Footer */}
      <div className={`px-5 py-3 border-t flex items-center justify-between gap-3 flex-wrap ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
        <span className={`text-xs ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
          Font:{' '}
          <strong className={isDark ? 'text-white' : 'text-[#13283C]'}>{font}</strong>
        </span>

        <button
          type="button"
          className={`flex items-center gap-2 text-[10px] font-mono px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${isDark ? 'bg-[#1D2024] hover:bg-[#32353A] text-[#C1C2C4]' : 'bg-[#F0F0F0] hover:bg-[#EEF3F7] text-[#13283C]'}`}
          onClick={() => onCopy(twClass, name)}
        >
          <code className="truncate max-w-[240px]">{twClass}</code>
          <span className={`shrink-0 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
            {copied === name ? <Check size={12} /> : <Copy size={12} />}
          </span>
        </button>
      </div>
    </div>
  )
}

function Section({ group, desc, items, isDark, onCopy, copied }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-6">
        <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{group}</h2>
        <span className={`text-sm ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{desc}</span>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <SpecimenCard key={item.name} {...item} isDark={isDark} onCopy={onCopy} copied={copied} />
        ))}
      </div>
    </div>
  )
}

export default function TypographyPage() {
  const [theme, setTheme] = useState('light')
  const [copied, setCopied] = useState(null)
  const isDark = theme === 'dark'

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1800)
  }

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-white'}`}>
      <div className="container max-w-6xl mx-auto space-y-12">
        <PageHeader
          title="Typography"
          description="11 estilos tipográficos em 4 grupos — Red Hat Display para títulos, System UI para texto corrido."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Cascata visual */}
        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
          <div className={`px-8 pt-6 pb-2 border-b ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Escala tipográfica
            </p>
          </div>
          <div className={`px-8 py-8 space-y-1 ${isDark ? 'bg-[#26292E]' : 'bg-[#F5F6F7]'}`}>
            {ALL_ITEMS.map(({ name, size, lh, weight, font }) => (
              <div key={name} className={`flex items-baseline gap-4 py-2 border-b last:border-b-0 ${isDark ? 'border-[#4B4E52]/40' : 'border-[#E9EFF2]'}`}>
                <span
                  style={{
                    fontSize: size,
                    lineHeight: `${lh}px`,
                    fontWeight: weight,
                    fontFamily: font === 'Red Hat Display' ? '"Red Hat Display", sans-serif' : 'system-ui, sans-serif',
                    color: isDark ? '#FFFFFF' : '#13283C',
                  }}
                  className="flex-1 truncate"
                >
                  {name}
                </span>
                <span className={`text-[11px] font-mono shrink-0 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                  {size}px / {lh}px
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Seções detalhadas */}
        <div className="space-y-12">
          {SCALE.map((section) => (
            <Section key={section.group} {...section} isDark={isDark} onCopy={handleCopy} copied={copied} />
          ))}
        </div>

        {/* Princípios */}
        <div className={`rounded-2xl border p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-[#F5F6F7] border-[#E9EFF2]'}`}>
          {[
            {
              title: 'Duas famílias, papéis claros',
              body: 'Red Hat Display para Headline e Title — destaque e personalidade. System UI para Body e Label — legibilidade e neutralidade.',
            },
            {
              title: 'Hierarquia pelo tamanho',
              body: 'Nunca use Bold em Body para criar ênfase visual — suba um nível tipográfico. Reserve pesos maiores para diferenciação semântica.',
            },
            {
              title: 'Line-height generoso',
              body: 'Cada estilo tem line-height entre 1.3× e 1.5× o tamanho da fonte, garantindo legibilidade mesmo em blocos longos de texto.',
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
