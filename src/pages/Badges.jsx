import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

const BADGE_COLORS = [
  { name: 'Red',    bg: 'var(--state-red)',    token: '--state-red' },
  { name: 'Yellow', bg: 'var(--state-yellow)', token: '--state-yellow' },
  { name: 'Blue',   bg: 'var(--state-blue)',   token: '--state-blue' },
  { name: 'Green',  bg: 'var(--state-green)',  token: '--state-green' },
]

const SEMANTICS = [
  { name: 'Red',    bg: 'var(--state-red)',    token: '--state-red',    meaning: 'Urgente, erro, crítico' },
  { name: 'Yellow', bg: 'var(--state-yellow)', token: '--state-yellow', meaning: 'Atenção, pendente' },
  { name: 'Blue',   bg: 'var(--state-blue)',   token: '--state-blue',   meaning: 'Informativo, novo' },
  { name: 'Green',  bg: 'var(--state-green)',  token: '--state-green',  meaning: 'Sucesso, ativo, online' },
]

/** Small — 6×6px, círculo sólido (Figma: Badge/small/*) */
function BadgeSmall({ bg }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-[100px]"
      style={{
        width: 6,
        height: 6,
        backgroundColor: bg,
      }}
      aria-hidden
    />
  )
}

/** Large — min 16px, max 34px, label/small 11/16 Medium (Figma: Badge/large/*) */
function BadgeLarge({ count, bg, isDark }) {
  const display = count > 99 ? '+99' : String(count)
  const textColor = isDark ? '#4A4A4A' : '#FFFFFF'

  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[100px]"
      style={{
        backgroundColor: bg,
        minWidth: 16,
        maxWidth: 34,
        height: 16,
        paddingLeft: 4,
        paddingRight: 4,
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: 11,
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '0.5px',
        color: textColor,
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {display}
    </span>
  )
}

/** Linha do protótipo Figma: 4 small + 4 large, gap 20px */
function BadgePrototypeRow({ isDark, count = 3 }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[20px]">
      {BADGE_COLORS.map(({ name, bg }) => (
        <BadgeSmall key={`sm-${name}`} bg={bg} />
      ))}
      {BADGE_COLORS.map(({ name, bg }) => (
        <BadgeLarge key={`lg-${name}`} count={count} bg={bg} isDark={isDark} />
      ))}
    </div>
  )
}

function PreviewPanel({ children, isDark, className = '' }) {
  return (
    <div
      className={`rounded-[16px] border p-8 ${className} ${
        isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
      }`}
    >
      {children}
    </div>
  )
}

function SectionTitle({ children, isDark, className = 'mb-1' }) {
  return (
    <h2 className={`text-xl font-medium ${className} ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{children}</h2>
  )
}

function SectionDesc({ children, isDark, className = 'mb-6' }) {
  return <p className={`text-sm ${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{children}</p>
}

function LabelText({ children, isDark, className = 'text-xs' }) {
  return <span className={`${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{children}</span>
}

export default function BadgesPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Badges"
          description="Indicadores visuais compactos para contagens, status e notificações."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Preview — protótipo Figma (Badge/dark + Frame light) */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Preview</SectionTitle>
          <SectionDesc isDark={isDark}>
            Variantes small (6×6px) e large (16–34px) nas cores de estado — alinhado ao componente{' '}
            <code className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Badge</code> do
            Figma.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <BadgePrototypeRow isDark={isDark} count={3} />
          </PreviewPanel>
        </div>

        {/* Small badges */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Small Badges</SectionTitle>
          <SectionDesc isDark={isDark}>
            Indicadores de ponto (6×6px, border-radius 100%) para status ou presença.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-wrap items-center justify-center gap-[20px]">
              {BADGE_COLORS.map(({ name, bg }) => (
                <div key={name} className="flex flex-col items-center gap-3">
                  <BadgeSmall bg={bg} />
                  <LabelText isDark={isDark}>{name}</LabelText>
                </div>
              ))}
            </div>
          </PreviewPanel>
        </div>

        {/* Large badges */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Large Badges</SectionTitle>
          <SectionDesc isDark={isDark}>
            Badges com contagem numérica — min. 16px, max. 34px, padding horizontal 4px.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-wrap items-center justify-center gap-[20px]">
              {BADGE_COLORS.map(({ name, bg }) => (
                <div key={name} className="flex flex-col items-center gap-3">
                  <BadgeLarge count={3} bg={bg} isDark={isDark} />
                  <LabelText isDark={isDark}>{name}</LabelText>
                </div>
              ))}
            </div>
          </PreviewPanel>
        </div>

        {/* Count variations */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Variações de Contagem</SectionTitle>
          <SectionDesc isDark={isDark}>Exemplos com diferentes valores numéricos.</SectionDesc>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 5, 12, 99].map((n) => (
              <div
                key={n}
                className={`rounded-[14px] border p-6 flex flex-col items-center gap-4 ${
                  isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
                }`}
              >
                <BadgeLarge count={n} bg="var(--state-red)" isDark={isDark} />
                <LabelText isDark={isDark} className="text-sm">
                  Count: {n}
                </LabelText>
              </div>
            ))}
          </div>
        </div>

        {/* Semântica */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Cores e Significados</SectionTitle>
          <SectionDesc isDark={isDark}>Cada cor carrega um significado semântico.</SectionDesc>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEMANTICS.map(({ name, bg, token, meaning }) => (
              <div
                key={name}
                className={`rounded-[14px] border p-5 ${
                  isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <BadgeLarge count={3} bg={bg} isDark={isDark} />
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{name}</span>
                </div>
                <p className={`text-xs mb-2 ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{meaning}</p>
                <code className={`text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{token}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div>
          <SectionTitle isDark={isDark} className="mb-4">
            Especificações Técnicas
          </SectionTitle>
          <div
            className={`rounded-[14px] border p-6 space-y-3 text-sm ${
              isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
            }`}
          >
            {[
              ['Small badge', '6×6px, border-radius 100px'],
              ['Large badge (1 dígito)', '16×16px mínimo, border-radius 100px'],
              ['Large badge (2+ dígitos)', 'Largura até 34px, padding horizontal 4px, altura 16px'],
              ['Limite de contagem', '99 — exibe "+99" para valores superiores'],
              ['Tipografia (large)', 'Red Hat Display Medium 500, 11px / 16px, letter-spacing 0.5px'],
              ['Texto large — light', '#FFFFFF (--text-inverse)'],
              ['Texto large — dark', '#4A4A4A (--text-inverse no tema escuro)'],
              ['Gap entre badges (preview)', '20px'],
              ['Tokens de cor', '--state-red, --state-yellow, --state-blue, --state-green'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className={`font-medium min-w-[180px] ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
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
