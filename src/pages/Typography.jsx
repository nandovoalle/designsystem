import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

const PREVIEW = 'The quick brown fox jumps over the lazy dog'

const SCALE = [
  {
    group: 'Headline',
    desc: 'Para títulos principais e seções de destaque',
    items: [
      { name: 'Headline Large',  size: 32, lh: 40, weight: 400, weightName: 'Regular' },
      { name: 'Headline Medium', size: 28, lh: 36, weight: 400, weightName: 'Regular' },
      { name: 'Headline Small',  size: 24, lh: 32, weight: 400, weightName: 'Regular' },
    ],
  },
  {
    group: 'Title',
    desc: 'Para títulos de seções e cards',
    items: [
      { name: 'Title Large',  size: 22, lh: 28, weight: 500, weightName: 'Medium' },
      { name: 'Title Medium', size: 20, lh: 30, weight: 500, weightName: 'Medium' },
      { name: 'Title Small',  size: 18, lh: 27, weight: 600, weightName: 'SemiBold' },
    ],
  },
  {
    group: 'Body',
    desc: 'Para texto corrido e descrições',
    items: [
      { name: 'Body Large',  size: 18, lh: 27, weight: 400, weightName: 'Regular' },
      { name: 'Body Medium', size: 16, lh: 24, weight: 400, weightName: 'Regular' },
      { name: 'Body Small',  size: 14, lh: 20, weight: 400, weightName: 'Regular' },
    ],
  },
  {
    group: 'Label / Caption',
    desc: 'Para elementos de UI e metadados',
    items: [
      { name: 'Label',   size: 12, lh: 16, weight: 400, weightName: 'Regular' },
      { name: 'Caption', size: 11, lh: 16, weight: 400, weightName: 'Regular' },
    ],
  },
]

function SpecimenCard({ name, size, lh, weight, weightName, isDark }) {
  const isDisplay = name.startsWith('Headline') || name.startsWith('Title')
  return (
    <div
      className={`rounded-[10px] border overflow-hidden ${
        isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
      }`}
    >
      <div
        className={`flex items-center justify-between px-5 py-3 border-b ${
          isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'
        }`}
      >
        <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{name}</span>
        <span className={`text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
          {size}/{lh} · {weightName} · 0
        </span>
      </div>
      <div className="px-5 py-6">
        <p
          style={{
            fontSize: size,
            lineHeight: `${lh}px`,
            fontWeight: weight,
            fontFamily: isDisplay ? '"Red Hat Display", sans-serif' : undefined,
            color: isDark ? '#FFFFFF' : '#13283C',
          }}
        >
          {PREVIEW}
        </p>
      </div>
      <div
        className={`px-5 py-3 border-t flex items-center gap-4 flex-wrap ${
          isDark ? 'border-[#4B4E52] bg-[#2A2D31]' : 'border-[#E9EFF2] bg-[#FAFAFA]'
        }`}
      >
        <span className={`text-xs ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
          Font:{' '}
          <strong className={isDark ? 'text-white' : 'text-[#13283C]'}>
            {isDisplay ? 'Red Hat Display' : 'System UI'}
          </strong>
        </span>
        <code
          className={`text-xs px-2 py-1 rounded font-mono ${
            isDark ? 'bg-[#1D2024] text-[#C1C2C4]' : 'bg-[#F0F0F0] text-[#13283C]'
          }`}
        >
          {`text-[${size}px] leading-[${lh}px] font-${
            weight === 400 ? 'normal' : weight === 500 ? 'medium' : weight === 600 ? 'semibold' : 'bold'
          }`}
        </code>
      </div>
    </div>
  )
}

function Section({ group, desc, items, isDark }) {
  return (
    <div>
      <h2 className={`text-xl font-medium mb-1 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{group}</h2>
      <p className={`text-sm mb-6 ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{desc}</p>
      <div className="space-y-4">
        {items.map((item) => (
          <SpecimenCard key={item.name} {...item} isDark={isDark} />
        ))}
      </div>
    </div>
  )
}

export default function TypographyPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Typography"
          description="Sistema tipográfico completo usando Red Hat Display. Todos os estilos são otimizados para legibilidade e hierarquia visual."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />
        <div className="space-y-12">
          {SCALE.map((section) => (
            <Section key={section.group} {...section} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  )
}
