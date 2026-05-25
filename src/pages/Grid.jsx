import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

const BREAKPOINTS = [
  {
    breakpoint: 'Mobile',
    token: 'xs',
    viewport: '375px',
    columns: 4,
    gutter: '16px',
    margin: '16px',
    maxContent: '100%',
    previewWidth: 88,
    desc: 'Layout compacto de coluna única / dupla.',
  },
  {
    breakpoint: 'Tablet',
    token: 'md',
    viewport: '768px',
    columns: 8,
    gutter: '24px',
    margin: '24px',
    maxContent: '100%',
    previewWidth: 160,
    desc: 'Grid de 8 colunas para layouts intermediários.',
  },
  {
    breakpoint: 'Desktop',
    token: 'lg',
    viewport: '1280px',
    columns: 12,
    gutter: '32px',
    margin: '40px',
    maxContent: '1200px',
    previewWidth: 240,
    desc: 'Grid completo de 12 colunas para desktop.',
  },
  {
    breakpoint: 'Wide',
    token: 'xl',
    viewport: '1440px+',
    columns: 12,
    gutter: '32px',
    margin: '80px',
    maxContent: '1280px',
    previewWidth: 272,
    desc: 'Margens maiores para telas wide com max-content de 1280px.',
  },
]

function ScreenPreview({ columns, previewWidth, isDark }) {
  return (
    <div
      className={`rounded-lg border overflow-hidden shrink-0 ${isDark ? 'border-[#4B4E52] bg-[#1D2024]' : 'border-[#D0D7DE] bg-[#F0F2F5]'}`}
      style={{ width: previewWidth }}
    >
      {/* Browser chrome */}
      <div className={`flex items-center gap-1 px-2 py-1.5 border-b ${isDark ? 'border-[#4B4E52] bg-[#32353A]' : 'border-[#D0D7DE] bg-white'}`}>
        {['#FF6058', '#FFBD2E', '#28CA41'].map((c) => (
          <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      {/* Columns */}
      <div className="flex gap-[3px] p-2 h-16">
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-full rounded-[2px] ${isDark ? 'bg-[rgba(48,74,100,0.45)]' : 'bg-[rgba(48,74,100,0.12)]'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function GridPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-white'}`}>
      <div className="container max-w-6xl mx-auto space-y-10">
        <PageHeader
          title="Grid"
          description="Grid de 12 colunas responsivo — 4 breakpoints, gutters e margens adaptativas."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Comparação visual */}
        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
          <div className={`px-8 pt-6 pb-2 border-b ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Comparação de breakpoints
            </p>
          </div>
          <div className={`px-10 py-10 ${isDark ? 'bg-[#26292E]' : 'bg-[#F5F6F7]'}`}>
            <div className="flex items-end gap-8 flex-wrap">
              {BREAKPOINTS.map(({ breakpoint, token, columns, previewWidth }) => (
                <div key={token} className="flex flex-col items-center gap-3">
                  <ScreenPreview columns={columns} previewWidth={previewWidth} isDark={isDark} />
                  <div className="flex flex-col items-center gap-0.5">
                    <span className={`text-xs font-semibold ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}>{breakpoint}</span>
                    <span className={`text-[10px] font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{columns} cols</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabela de referência */}
        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
          <div
            className={`flex items-center gap-0 border-b text-[11px] font-semibold uppercase tracking-widest ${isDark ? 'bg-[#26292E] border-[#4B4E52] text-[#808285]' : 'bg-[#F5F6F7] border-[#E9EFF2] text-[#9E9E9E]'}`}
          >
            {['Breakpoint', 'Token', 'Viewport', 'Colunas', 'Gutter', 'Margin', 'Max Content'].map((h, i) => (
              <span
                key={h}
                className="px-5 py-3"
                style={{ width: [148, 72, 108, 88, 88, 88, 148][i], flexShrink: 0 }}
              >
                {h}
              </span>
            ))}
          </div>
          {BREAKPOINTS.map(({ breakpoint, token, viewport, columns, gutter, margin, maxContent }) => (
            <div
              key={token}
              className={`flex items-center gap-0 border-b last:border-b-0 transition-colors ${isDark ? 'border-[#4B4E52] hover:bg-[#26292E]' : 'border-[#E9EFF2] hover:bg-[#FAFAFA]'}`}
            >
              <span className={`px-5 py-4 text-sm font-semibold shrink-0 ${isDark ? 'text-white' : 'text-[#13283C]'}`} style={{ width: 148 }}>
                {breakpoint}
              </span>
              <span className={`px-5 py-4 shrink-0`} style={{ width: 72 }}>
                <code className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${isDark ? 'bg-[#32353A] text-[#808285]' : 'bg-[#F0F2F5] text-[#666666]'}`}>
                  {token}
                </code>
              </span>
              {[viewport, columns, gutter, margin, maxContent].map((val, i) => (
                <span
                  key={i}
                  className={`px-5 py-4 text-sm shrink-0 ${isDark ? 'text-[#C1C2C4]' : 'text-[#4A4A4A]'}`}
                  style={{ width: [108, 88, 88, 88, 148][i] }}
                >
                  {val}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Cards de detalhe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BREAKPOINTS.map(({ breakpoint, token, viewport, columns, gutter, margin, maxContent, previewWidth, desc }) => (
            <div
              key={token}
              className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-white border-[#E9EFF2]'}`}
            >
              {/* Header */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}`}>
                <span className={`text-base font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{breakpoint}</span>
                <code className={`text-[11px] font-mono px-2.5 py-1 rounded-full ${isDark ? 'bg-[#32353A] text-[#808285]' : 'bg-[#F0F2F5] text-[#666666]'}`}>
                  {token}
                </code>
              </div>

              {/* Preview */}
              <div className={`flex items-center justify-center py-8 ${isDark ? 'bg-[#1D2024]' : 'bg-[#F5F6F7]'}`}>
                <ScreenPreview columns={columns} previewWidth={previewWidth} isDark={isDark} />
              </div>

              {/* Info */}
              <div className="px-6 py-5 space-y-4">
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{desc}</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Viewport', value: viewport },
                    { label: 'Colunas', value: columns },
                    { label: 'Gutter', value: gutter },
                    { label: 'Margin', value: margin },
                    { label: 'Max Content', value: maxContent },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className={`text-[10px] uppercase tracking-wide font-semibold ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{label}</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-[#C1C2C4]' : 'text-[#13283C]'}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Princípios */}
        <div className={`rounded-2xl border p-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${isDark ? 'bg-[#26292E] border-[#4B4E52]' : 'bg-[#F5F6F7] border-[#E9EFF2]'}`}>
          {[
            {
              title: 'Mobile first',
              body: 'Comece pelo breakpoint xs (4 cols) e expanda progressivamente. Nunca restrinja o layout de telas maiores a partir do desktop.',
            },
            {
              title: 'Gutter consistente',
              body: 'O gutter define o espaço entre colunas. Use-o como referência de ritmo horizontal — evite gaps menores que o gutter dentro de um card.',
            },
            {
              title: 'Max-content fixo',
              body: 'Em Desktop e Wide, o max-content limita o conteúdo central. Fundos podem sangrar, mas texto e componentes respeitam esse limite.',
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
