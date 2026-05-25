import { useState } from 'react'
import { Search } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

/* ─── Helpers de layout (padrão do projeto) ─────────────────────── */
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
    <h2 className={`text-xl font-medium ${className} ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
      {children}
    </h2>
  )
}

function SectionDesc({ children, isDark, className = 'mb-6' }) {
  return (
    <p className={`text-sm ${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
      {children}
    </p>
  )
}

/* ─── TextField — variantes do Figma ────────────────────────────── */
/**
 * type:  'default' | 'leading icon' | 'trailing icon'
 * state: 'enabled' | 'focused' | 'writing' | 'disabled' | 'error'
 */
function TextField({
  type = 'default',
  state = 'enabled',
  label = 'Label',
  placeholder = 'Placeholder',
  supportingText = 'Supporting text',
  isDark = false,
}) {
  /* ── cores derivadas do estado ───────────────────────────────── */
  const borderColor = (() => {
    if (state === 'error')                     return '#e9786b'
    if (state === 'focused' || state === 'writing') return '#304a64'
    return isDark ? '#4B4E52' : '#e9eff2'
  })()

  const bgColor = state === 'disabled' ? 'rgba(0,0,0,0.12)' : 'transparent'

  const labelColor = (() => {
    if (state === 'disabled') return isDark ? '#808285' : '#9e9e9e'
    return isDark ? '#ffffff' : '#4a4a4a'
  })()

  const inputText     = state === 'writing' ? 'Plac|' : placeholder
  const inputColor = (() => {
    if (state === 'error')   return '#e9786b'
    if (state === 'writing') return isDark ? '#ffffff' : '#4a4a4a'
    if (state === 'disabled') return isDark ? '#808285' : '#9e9e9e'
    return isDark ? '#808285' : '#9e9e9e'   // placeholder
  })()

  const supportingColor = (() => {
    if (state === 'error')    return '#e9786b'
    if (state === 'disabled') return isDark ? '#808285' : '#9e9e9e'
    return isDark ? '#C1C2C4' : '#666666'
  })()

  const iconColor = (() => {
    if (state === 'error')    return '#e9786b'
    if (state === 'disabled') return isDark ? '#808285' : '#9e9e9e'
    return isDark ? '#C1C2C4' : '#9e9e9e'
  })()

  return (
    <div style={{ width: 210 }} className="flex flex-col items-start">
      {/* Label */}
      <div style={{ paddingBottom: 8, paddingRight: 8, width: '100%' }}>
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.25px',
            color: labelColor,
          }}
        >
          {label}
        </span>
      </div>

      {/* Input */}
      <div
        style={{
          width: '100%',
          height: 40,
          border: `1px solid ${borderColor}`,
          borderRadius: 4,
          backgroundColor: bgColor,
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: type !== 'default' ? 12 : 0,
          boxSizing: 'border-box',
        }}
      >
        {type === 'leading icon' && (
          <Search size={18} color={iconColor} strokeWidth={2} style={{ flexShrink: 0 }} />
        )}

        <span
          style={{
            flex: 1,
            fontFamily: '"Red Hat Display", sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.25px',
            color: inputColor,
            minWidth: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {inputText}
        </span>

        {type === 'trailing icon' && (
          <Search size={18} color={iconColor} strokeWidth={2} style={{ flexShrink: 0 }} />
        )}
      </div>

      {/* Supporting text */}
      <div style={{ paddingTop: 4, paddingRight: 8, width: '100%' }}>
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.4px',
            color: supportingColor,
          }}
        >
          {supportingText}
        </span>
      </div>
    </div>
  )
}

export function TextFieldLeadingIcon({ value, onChange, placeholder = 'Pesquisar', width = 256 }) {
  const [focused, setFocused] = useState(false)
  return (
    <div
      style={{
        width,
        height: 40,
        border: `1px solid ${focused ? '#304a64' : '#e9eff2'}`,
        borderRadius: 4,
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxSizing: 'border-box',
        transition: 'border-color 0.15s ease',
        backgroundColor: 'transparent',
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: 18, color: '#9e9e9e', flexShrink: 0, lineHeight: 1, userSelect: 'none', fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
      >
        search
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0.25px',
          color: '#4a4a4a',
          minWidth: 0,
        }}
      />
    </div>
  )
}

export function TextFieldDefault({ value, onChange, placeholder = 'Placeholder', label, width = 256 }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ width }} className="flex flex-col">
      {label && (
        <div style={{ paddingBottom: 8 }}>
          <span style={{ fontFamily: '"Red Hat Display", sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px', color: '#4a4a4a' }}>
            {label}
          </span>
        </div>
      )}
      <div
        style={{
          height: 40,
          border: `1px solid ${focused ? '#304a64' : '#e9eff2'}`,
          borderRadius: 4,
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
          transition: 'border-color 0.15s ease',
          backgroundColor: 'transparent',
        }}
      >
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: '"Red Hat Display", sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.25px',
            color: '#4a4a4a',
            minWidth: 0,
          }}
        />
      </div>
    </div>
  )
}

/* ─── Dados das variantes ────────────────────────────────────────── */
const STATES = ['enabled', 'focused', 'writing', 'disabled', 'error']
const STATE_LABELS = {
  enabled:  'Enabled',
  focused:  'Focused',
  writing:  'Writing',
  disabled: 'Disabled',
  error:    'Error',
}

const TYPES = [
  { key: 'default',        label: 'Default' },
  { key: 'leading icon',   label: 'Leading Icon' },
  { key: 'trailing icon',  label: 'Trailing Icon' },
]

/* ─── Página ─────────────────────────────────────────────────────── */
export default function TextFieldPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Text Field"
          description="Campos de entrada de texto com suporte a ícones, estados e mensagens auxiliares."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* ── Preview — protótipo Figma (3 linhas × 5 colunas) ─────── */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Preview</SectionTitle>
          <SectionDesc isDark={isDark}>
            Todas as variantes do componente{' '}
            <code className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Text Field
            </code>{' '}
            — 3 tipos × 5 estados.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-col gap-10">
              {TYPES.map(({ key: type, label: typeLabel }) => (
                <div key={type}>
                  <p
                    className="mb-4 text-xs font-medium uppercase tracking-wider"
                    style={{ color: isDark ? '#808285' : '#9E9E9E' }}
                  >
                    {typeLabel}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    {STATES.map((state) => (
                      <div key={state} className="flex flex-col gap-2">
                        <TextField
                          type={type}
                          state={state}
                          isDark={isDark}
                        />
                        <span
                          className="text-xs"
                          style={{ color: isDark ? '#808285' : '#9E9E9E' }}
                        >
                          {STATE_LABELS[state]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PreviewPanel>
        </div>

        {/* ── Default ──────────────────────────────────────────────── */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Default</SectionTitle>
          <SectionDesc isDark={isDark}>
            Sem ícone. Cinco estados: enabled, focused, writing, disabled e error.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-wrap gap-6">
              {STATES.map((state) => (
                <div key={state} className="flex flex-col gap-2">
                  <TextField type="default" state={state} isDark={isDark} />
                  <span
                    className="text-xs"
                    style={{ color: isDark ? '#808285' : '#9E9E9E' }}
                  >
                    {STATE_LABELS[state]}
                  </span>
                </div>
              ))}
            </div>
          </PreviewPanel>
        </div>

        {/* ── Leading Icon ─────────────────────────────────────────── */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Leading Icon</SectionTitle>
          <SectionDesc isDark={isDark}>
            Ícone à esquerda do texto. Search 18×18px — gap 12px entre ícone e texto.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-wrap gap-6">
              {STATES.map((state) => (
                <div key={state} className="flex flex-col gap-2">
                  <TextField type="leading icon" state={state} isDark={isDark} />
                  <span
                    className="text-xs"
                    style={{ color: isDark ? '#808285' : '#9E9E9E' }}
                  >
                    {STATE_LABELS[state]}
                  </span>
                </div>
              ))}
            </div>
          </PreviewPanel>
        </div>

        {/* ── Trailing Icon ────────────────────────────────────────── */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Trailing Icon</SectionTitle>
          <SectionDesc isDark={isDark}>
            Ícone à direita do texto. Search 18×18px — gap 12px entre texto e ícone.
          </SectionDesc>
          <PreviewPanel isDark={isDark}>
            <div className="flex flex-wrap gap-6">
              {STATES.map((state) => (
                <div key={state} className="flex flex-col gap-2">
                  <TextField type="trailing icon" state={state} isDark={isDark} />
                  <span
                    className="text-xs"
                    style={{ color: isDark ? '#808285' : '#9E9E9E' }}
                  >
                    {STATE_LABELS[state]}
                  </span>
                </div>
              ))}
            </div>
          </PreviewPanel>
        </div>

        {/* ── Especificações Técnicas ───────────────────────────────── */}
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
              ['Largura',                  '210px (protótipo Figma)'],
              ['Altura do campo',          '40px'],
              ['Border radius',            '4px'],
              ['Padding interno',          '4px vertical, 8px horizontal'],
              ['Gap ícone → texto',        '12px (leading/trailing icon)'],
              ['Tamanho do ícone',         '18×18px (Search — Lucide)'],
              ['Tipografia — label',       'Red Hat Display Regular 400, 14px / 20px, letter-spacing 0.25px'],
              ['Tipografia — input',       'Red Hat Display Regular 400, 14px / 20px, letter-spacing 0.25px'],
              ['Tipografia — supporting',  'Red Hat Display Regular 400, 12px / 16px, letter-spacing 0.4px'],
              ['Border — enabled',         '#e9eff2 (--divider)'],
              ['Border — focused/writing', '#304a64 (--blue-600)'],
              ['Border — disabled',        '#e9eff2 + background rgba(0,0,0,0.12)'],
              ['Border — error',           '#e9786b (--error)'],
              ['Label — primário',         '#4a4a4a (--text/primary)'],
              ['Label — disabled',         '#9e9e9e (--text/disabled)'],
              ['Placeholder / ícone',      '#9e9e9e (--text/disabled)'],
              ['Texto em escrita',         '#4a4a4a (--text/primary)'],
              ['Cor de erro',              '#e9786b (--error) — borda, texto e supporting'],
              ['Supporting — padrão',      '#666666 (--text/secondary)'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span
                  className="font-medium min-w-[220px]"
                  style={{ color: isDark ? '#ffffff' : '#13283C' }}
                >
                  {label}:
                </span>
                <span style={{ color: isDark ? '#C1C2C4' : '#666666' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
