import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Copy, Check } from 'lucide-react'

/* ─── SVG paths extraídos de /src/assets/logo-elleven.svg ─────────────── */
const PATHS_TEXT = [
  // e (inicial)
  'M29.1522 42.9582C26.4851 42.9582 24.1147 42.4066 22.139 41.2982C20.1139 40.1948 18.5336 38.6726 17.3976 36.7317C16.2616 34.7909 15.719 32.5742 15.719 30.0717C15.719 27.5742 16.2603 25.3622 17.3469 23.4361C18.4335 21.5149 19.9172 19.9977 21.7941 18.8943C23.7204 17.7859 25.8433 17.2343 28.2141 17.2343C30.5849 17.2343 32.7583 17.7714 34.5858 18.8452C36.4627 19.9191 37.9451 21.4265 38.9824 23.3624C40.069 25.3033 40.6127 27.5397 40.6127 30.0717C40.6127 30.2343 40.6114 30.4016 40.562 30.579C40.562 30.7514 40.562 30.9386 40.562 31.1307H18.3357V28.5841H38.734L37.3521 29.5937C37.3521 27.7661 36.9558 26.1357 36.1655 24.7121C35.3752 23.2835 34.2903 22.1702 32.9073 21.3672C31.5737 20.5692 29.9922 20.1652 28.2141 20.1652C26.436 20.1652 24.905 20.5692 23.4727 21.3672C22.0897 22.1702 21.0023 23.2934 20.212 24.7368C19.4712 26.1752 19.0761 27.8304 19.0761 29.6875V30.2146C19.0761 32.1406 19.4725 33.8301 20.3616 35.2883C21.2012 36.7464 22.4359 37.8843 23.9671 38.702C25.4982 39.5197 27.2261 39.9287 29.2511 39.9287C30.7823 39.9287 32.2141 39.6577 33.597 39.1109C34.9306 38.569 36.0676 37.7318 37.0554 36.6136L38.9824 38.8253C37.8958 40.1701 36.4617 41.1948 34.7329 41.8993C33.0536 42.6037 31.1773 42.9582 29.1522 42.9582Z',
  // e (segundo)
  'M84.6703 42.9581C82.0031 42.9581 79.6821 42.4065 77.657 41.2981C75.6814 40.1947 74.0999 38.6725 72.9638 36.7316C71.8278 34.7908 71.2346 32.5741 71.2346 30.0716C71.2346 27.5741 71.7783 25.3621 72.865 23.436C73.9516 21.5148 75.4341 19.9976 77.3604 18.8942C79.2373 17.7858 81.3613 17.2342 83.7321 17.2342C86.1523 17.2342 88.2752 17.7713 90.1521 18.8451C92.029 19.919 93.462 21.4264 94.5486 23.3623C95.5859 25.3032 96.1283 27.5396 96.1283 30.0716C96.1283 30.2342 96.1283 30.4015 96.1283 30.5789C96.1283 30.7513 96.0801 30.9385 96.0801 31.1306H73.8538V28.584H94.252L92.8677 29.5936C92.8677 27.766 92.4738 26.1356 91.6835 24.712C90.8933 23.2834 89.8071 22.1701 88.4735 21.3671C87.0906 20.5691 85.5102 20.1651 83.7321 20.1651C82.0034 20.1651 80.4219 20.5691 79.0389 21.3671C77.656 22.1701 76.5686 23.2933 75.7783 24.7367C74.988 26.1751 74.5942 27.8303 74.5942 29.6874V30.2145C74.5942 32.1406 75.0375 33.83 75.8772 35.2882C76.7662 36.7463 77.9516 37.8842 79.4827 38.7019C81.0138 39.5196 82.7935 39.9286 84.7692 39.9286C86.3003 39.9286 87.7815 39.6576 89.1151 39.1108C90.4486 38.5689 91.6339 37.7317 92.6217 36.6135L94.5486 38.8252C93.4126 40.17 91.9785 41.1947 90.2992 41.8992C88.5705 42.6036 86.6953 42.9581 84.6703 42.9581Z',
  // v
  'M109.268 42.7159L97.9573 17.4749H101.563L111.936 40.8885H110.255L120.825 17.4749H124.233L112.823 42.7159H109.268Z',
  // e (terceiro)
  'M139.202 42.9581C136.534 42.9581 134.211 42.4065 132.186 41.2981C130.161 40.1947 128.631 38.6725 127.495 36.7316C126.359 34.7908 125.766 32.5741 125.766 30.0716C125.766 27.5741 126.31 25.3621 127.396 23.436C128.483 21.5148 129.965 19.9976 131.892 18.8942C133.769 17.7858 135.89 17.2342 138.261 17.2342C140.681 17.2342 142.806 17.7713 144.683 18.8451C146.56 19.919 147.993 21.4264 149.08 23.3623C150.117 25.3032 150.66 27.5396 150.66 30.0716C150.66 30.2342 150.66 30.4015 150.66 30.5789C150.66 30.7513 150.609 30.9385 150.609 31.1306H128.383V28.584H148.783L147.399 29.5936C147.399 27.766 147.005 26.1356 146.215 24.712C145.425 23.2834 144.338 22.1701 143.005 21.3671C141.622 20.5691 140.039 20.1651 138.261 20.1651C136.532 20.1651 134.953 20.5691 133.57 21.3671C132.187 22.1701 131.1 23.2933 130.31 24.7367C129.519 26.1751 129.125 27.8303 129.125 29.6874V30.2145C129.125 32.1406 129.569 33.83 130.408 35.2882C131.297 36.7463 132.483 37.8842 134.014 38.7019C135.545 39.5196 137.325 39.9286 139.3 39.9286C140.832 39.9286 142.313 39.6576 143.646 39.1108C144.98 38.5689 146.164 37.7317 147.102 36.6135L149.08 38.8252C147.944 40.17 146.51 41.1947 144.83 41.8992C143.102 42.6036 141.227 42.9581 139.202 42.9581Z',
  // n
  'M170.759 17.2343C172.833 17.2343 174.662 17.6284 176.243 18.4117C177.823 19.1999 179.058 20.3919 179.947 21.9929C180.836 23.5988 181.281 25.6184 181.281 28.0519V42.7168H177.823V28.3868C177.823 25.7267 177.13 23.7169 175.797 22.3573C174.463 20.9928 172.537 20.3131 170.117 20.3131C168.29 20.3131 166.709 20.6727 165.376 21.3919C164.042 22.116 163.006 23.1555 162.265 24.52C161.524 25.8796 161.177 27.5249 161.177 29.4461V42.7168H157.721V17.4757H161.03V24.3967L160.485 23.1011C161.324 21.2736 162.609 19.8403 164.387 18.7959C166.165 17.7565 168.289 17.2343 170.759 17.2343Z',
]

const PATHS_SLASHES = [
  'M45.1077 42.7165L52.3187 7.04181H55.7771L48.5661 42.7165H45.1077Z',
  'M58.1956 42.7165L65.4066 7.04181H68.865L61.654 42.7165H58.1956Z',
]

/* ─── Componentes do logo ─────────────────────────────────────────────── */
function LogoSvg({ color = '#304A64', accentColor = '#E9786B', width = 197, style = {} }) {
  const h = Math.round((width / 197) * 50)
  return (
    <svg
      width={width}
      height={h}
      viewBox="0 0 197 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {PATHS_TEXT.map((d, i) => (
        <path key={`t${i}`} d={d} fill={color} />
      ))}
      {PATHS_SLASHES.map((d, i) => (
        <path key={`s${i}`} d={d} fill={accentColor} />
      ))}
    </svg>
  )
}

/* Apenas as barras "//" — símbolo isolado */
function SlashMark({ color = '#E9786B', size = 40 }) {
  const w = Math.round(size * (26 / 50))
  return (
    <svg width={w} height={size} viewBox="44 6 27 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      {PATHS_SLASHES.map((d, i) => (
        <path key={i} d={d} fill={color} />
      ))}
    </svg>
  )
}

/* ─── Utilitários de UI ───────────────────────────────────────────────── */
function Card({ isDark, className = '', children }) {
  return (
    <div className={`rounded-2xl border ${className} ${isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/8'}`}>
      {children}
    </div>
  )
}

function SectionLabel({ children, isDark }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
      {children}
    </p>
  )
}

function SectionTitle({ children, isDark, className = '' }) {
  return (
    <h2 className={`text-xl font-semibold ${className} ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
      {children}
    </h2>
  )
}

function SectionDesc({ children, isDark, className = 'mt-1 mb-8' }) {
  return (
    <p className={`text-sm leading-relaxed ${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
      {children}
    </p>
  )
}

function CopyButton({ value, isDark }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className={`flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded-md transition-colors ${
        isDark ? 'bg-[#1D2024] text-[#808285] hover:text-white' : 'bg-[#F5F5F5] text-[#9E9E9E] hover:text-[#13283C]'
      }`}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {value}
    </button>
  )
}

/* ─── Dados das seções ────────────────────────────────────────────────── */
const SIZES = [
  { label: 'XS', width: 80,  note: 'Mínimo permitido' },
  { label: 'SM', width: 120, note: 'Compacto' },
  { label: 'MD', width: 197, note: 'Padrão' },
  { label: 'LG', width: 260, note: 'Destaque' },
  { label: 'XL', width: 360, note: 'Hero / Splash' },
]

const VARIANTS = [
  {
    name: 'Primário',
    desc: 'Uso padrão — fundos claros',
    bg: '#FFFFFF', border: '#E5E5E5',
    color: '#304A64', accent: '#E9786B',
  },
  {
    name: 'Invertido',
    desc: 'Fundos escuros — dark mode',
    bg: '#304A64', border: '#1F3248',
    color: '#FFFFFF', accent: '#FFFFFF',
  },
  {
    name: 'Monocromático',
    desc: 'Uma cor — impressão, bordado',
    bg: '#FFFFFF', border: '#E5E5E5',
    color: '#304A64', accent: '#304A64',
  },
]

const APPROVED_BG = [
  { label: 'Branco',     bg: '#FFFFFF', border: '#E5E5E5', color: '#304A64', accent: '#E9786B' },
  { label: 'Light Gray', bg: '#F7F9FB', border: '#E9EFF2', color: '#304A64', accent: '#E9786B' },
  { label: 'Navy',       bg: '#304A64', border: '#1F3248', color: '#FFFFFF', accent: '#FFFFFF' },
  { label: 'Charcoal',   bg: '#32353A', border: '#4B4E52', color: '#FFFFFF', accent: '#FFFFFF' },
]

const SPECS = [
  ['Largura mínima',     '80px'],
  ['ViewBox',            '0 0 197 50'],
  ['Proporção (W:H)',    '197:50 ≈ 3.94:1'],
  ['Área de proteção',   '1× altura da barra (≈ 20px no MD)'],
  ['Cor do texto',       '#304A64'],
  ['Cor das barras "//"', '#E9786B  (var --state-red)'],
  ['Cor dark mode',      '#FFFFFF'],
  ['Tipografia',         'Forma personalizada — uso somente via arquivo'],
  ['Formatos',           'SVG · PNG · PDF'],
]

const DONTS = [
  {
    label: 'Distorção',
    bg: '#FFF3F2', border: '#FECAC6',
    render: () => <LogoSvg color="#304A64" accent="#E9786B" width={110} style={{ transform: 'scaleY(1.6)', transformOrigin: 'center' }} />,
  },
  {
    label: 'Rotação',
    bg: '#FFF3F2', border: '#FECAC6',
    render: () => <LogoSvg color="#304A64" accentColor="#E9786B" width={90} style={{ transform: 'rotate(-15deg)' }} />,
  },
  {
    label: 'Baixo contraste',
    bg: '#E5E8EA', border: '#CDD3D8',
    render: () => <LogoSvg color="#BBBBBB" accentColor="#DDBBAA" width={110} />,
  },
  {
    label: 'Fundo colorido',
    bg: '#E9786B', border: '#E9786B',
    render: () => <LogoSvg color="#FFFFFF" accentColor="#FFFFFF" width={110} />,
  },
]

/* ─── Página ──────────────────────────────────────────────────────────── */
export default function LogoPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : 'bg-[#F7F9FB]'}`}>
      <div className="container max-w-5xl mx-auto">

        <PageHeader
          title="Logo"
          description="Guia de uso, variantes e especificações da identidade visual elleven."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* ── Hero — fiel ao Figma ────────────────────────────────────── */}
        <Card isDark={isDark} className="p-10 mb-6 overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 15% 50%, #E9786B 0%, transparent 55%),
                                radial-gradient(circle at 85% 50%, #304A64 0%, transparent 55%)`,
            }}
          />

          <div className="relative flex flex-wrap items-center justify-center gap-6">
            {/* Versão clara */}
            <div
              className="flex items-center justify-center rounded-2xl"
              style={{
                width: 280,
                height: 120,
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              }}
            >
              <LogoSvg color="#304A64" accentColor="#E9786B" width={178} />
            </div>

            {/* Versão escura */}
            <div
              className="flex items-center justify-center rounded-2xl"
              style={{
                width: 280,
                height: 120,
                background: '#32353A',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
              }}
            >
              <LogoSvg color="#FFFFFF" accentColor="#FFFFFF" width={178} />
            </div>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6 mt-5">
            <p className={`text-xs font-medium text-center w-[280px] ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Versão clara — fundos branco ou cinza
            </p>
            <p className={`text-xs font-medium text-center w-[280px] ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
              Versão escura — fundos dark ou navy
            </p>
          </div>
        </Card>

        {/* ── Anatomia ──────────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Anatomia</SectionLabel>
          <SectionTitle isDark={isDark}>Elementos do logo</SectionTitle>
          <SectionDesc isDark={isDark}>
            O logotipo é composto pelo wordmark "elleven", onde as duas barras "//" em coral substituem o "ll" e formam a assinatura visual da marca.
          </SectionDesc>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Símbolo "//" */}
            <Card isDark={isDark} className="p-6 flex flex-col items-center gap-4">
              <div className={`w-full flex items-center justify-center rounded-xl py-8 ${isDark ? 'bg-[#1D2024]' : 'bg-[#F5F5F5]'}`}>
                <SlashMark color={isDark ? '#E9786B' : '#E9786B'} size={52} />
              </div>
              <div className="text-center">
                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Símbolo &ldquo;//&rdquo;</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Ícone, favicon, app icon</p>
              </div>
            </Card>

            {/* Wordmark completo */}
            <Card isDark={isDark} className="p-6 flex flex-col items-center gap-4 sm:col-span-2">
              <div className={`w-full flex items-center justify-center rounded-xl py-8 ${isDark ? 'bg-[#1D2024]' : 'bg-[#F5F5F5]'}`}>
                <LogoSvg
                  color={isDark ? '#FFFFFF' : '#304A64'}
                  accentColor="#E9786B"
                  width={220}
                />
              </div>
              <div className="text-center">
                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Wordmark completo</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>Uso padrão em todas as aplicações</p>
              </div>
            </Card>
          </div>
        </div>

        {/* ── Variantes ─────────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Variantes</SectionLabel>
          <SectionTitle isDark={isDark}>Versões do logo</SectionTitle>
          <SectionDesc isDark={isDark}>
            Três versões garantem legibilidade e consistência em qualquer contexto de aplicação.
          </SectionDesc>

          <div className="grid sm:grid-cols-3 gap-4">
            {VARIANTS.map(({ name, desc, bg, border, color, accent }) => (
              <Card key={name} isDark={isDark} className="p-5 flex flex-col gap-4">
                <div
                  className="w-full flex items-center justify-center rounded-xl py-8"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <LogoSvg color={color} accentColor={accent} width={140} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{name}</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Tamanhos ──────────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Tamanhos</SectionLabel>
          <SectionTitle isDark={isDark}>Escala de uso</SectionTitle>
          <SectionDesc isDark={isDark}>
            Nunca utilize abaixo de 80px de largura — abaixo disso o wordmark perde legibilidade.
          </SectionDesc>

          <Card isDark={isDark} className="overflow-hidden">
            {SIZES.map(({ label, width, note }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-6 py-5 ${
                  i !== SIZES.length - 1
                    ? isDark ? 'border-b border-[#4B4E52]' : 'border-b border-black/5'
                    : ''
                }`}
              >
                <div className="w-14 shrink-0">
                  <span className={`text-xs font-semibold font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                    {label}
                  </span>
                  <p className={`text-[11px] mt-0.5 font-mono ${isDark ? 'text-[#4B4E52]' : 'text-[#CCCCCC]'}`}>{width}px</p>
                </div>

                <div className="flex-1 flex items-center min-w-0 overflow-hidden">
                  <LogoSvg
                    color={isDark ? '#FFFFFF' : '#304A64'}
                    accentColor="#E9786B"
                    width={width}
                  />
                </div>

                <span
                  className={`text-[11px] shrink-0 ${
                    label === 'XS'
                      ? 'text-[#E9786B] font-medium'
                      : isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'
                  }`}
                >
                  {note}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* ── Área de proteção ──────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Área de proteção</SectionLabel>
          <SectionTitle isDark={isDark}>Zona de exclusão</SectionTitle>
          <SectionDesc isDark={isDark}>
            Mantenha sempre uma área livre ao redor do logo equivalente à altura das barras "//" (≈ 20px no tamanho MD).
          </SectionDesc>

          <Card isDark={isDark} className="p-12 flex items-center justify-center">
            <div className="relative">
              {/* Área de proteção (borda tracejada) */}
              <div
                className="absolute rounded-lg"
                style={{
                  inset: -20,
                  outline: `1.5px dashed ${isDark ? '#4B4E52' : '#D0D8E0'}`,
                  borderRadius: 10,
                }}
              />
              {/* Anotações de medida */}
              <span
                className="absolute -top-6 left-0 right-0 text-center"
                style={{ fontSize: 10, color: isDark ? '#808285' : '#AAAAAA', fontFamily: 'monospace' }}
              >
                20px
              </span>
              <span
                className="absolute -bottom-6 left-0 right-0 text-center"
                style={{ fontSize: 10, color: isDark ? '#808285' : '#AAAAAA', fontFamily: 'monospace' }}
              >
                20px
              </span>
              <LogoSvg
                color={isDark ? '#FFFFFF' : '#304A64'}
                accentColor="#E9786B"
                width={220}
              />
            </div>
          </Card>
        </div>

        {/* ── Fundos aprovados ──────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Fundos aprovados</SectionLabel>
          <SectionTitle isDark={isDark}>Onde aplicar</SectionTitle>
          <SectionDesc isDark={isDark}>
            O logo funciona apenas sobre fundos neutros. Nunca aplique sobre fotos, gradientes coloridos ou cores saturadas.
          </SectionDesc>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {APPROVED_BG.map(({ label, bg, border, color, accent }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-2xl py-8 px-4 gap-4"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <LogoSvg color={color} accentColor={accent} width={120} />
                <span
                  className="text-[11px] font-mono"
                  style={{ color: color === '#FFFFFF' ? 'rgba(255,255,255,0.35)' : '#AAAAAA' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Não faça ──────────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Uso incorreto</SectionLabel>
          <SectionTitle isDark={isDark}>Não faça</SectionTitle>
          <SectionDesc isDark={isDark}>
            Nunca distorça, rotacione, aplique em fundos coloridos ou reduza o contraste do logo.
          </SectionDesc>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DONTS.map(({ label, bg, border, render }) => (
              <div key={label} className="flex flex-col gap-3">
                <div
                  className="flex items-center justify-center rounded-2xl py-8 px-4 relative overflow-hidden"
                  style={{ background: bg, border: `1px solid ${border}`, minHeight: 100 }}
                >
                  {render()}
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#E9786B] flex items-center justify-center text-white font-bold" style={{ fontSize: 10 }}>
                    ✕
                  </div>
                </div>
                <p className={`text-xs text-center font-medium ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tokens de cor ─────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel isDark={isDark}>Tokens</SectionLabel>
          <SectionTitle isDark={isDark}>Cores do logo</SectionTitle>
          <SectionDesc isDark={isDark}>
            Use exclusivamente estes valores para reproduzir digitalmente a identidade visual.
          </SectionDesc>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: 'Wordmark',
                usage: 'Letras — versão clara',
                hex: '#304A64',
                bg: '#304A64',
                border: undefined,
                swatchText: '#FFFFFF',
              },
              {
                name: 'Barras "//"',
                usage: 'Símbolo de acento — coral',
                hex: '#E9786B',
                bg: '#E9786B',
                border: undefined,
                swatchText: '#FFFFFF',
              },
              {
                name: 'Invertido',
                usage: 'Versão dark mode',
                hex: '#FFFFFF',
                bg: '#FFFFFF',
                border: '#E5E5E5',
                swatchText: '#AAAAAA',
              },
            ].map(({ name, usage, hex, bg, border, swatchText }) => (
              <Card key={name} isDark={isDark} className="p-5 flex flex-col gap-4">
                <div
                  className="w-full h-14 rounded-xl"
                  style={{ background: bg, border: border ? `1px solid ${border}` : undefined }}
                />
                <div className="flex flex-col gap-1">
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{name}</p>
                  <p className={`text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{usage}</p>
                </div>
                <CopyButton value={hex} isDark={isDark} />
              </Card>
            ))}
          </div>
        </div>

        {/* ── Especificações ────────────────────────────────────────────── */}
        <div>
          <SectionLabel isDark={isDark}>Especificações</SectionLabel>
          <SectionTitle isDark={isDark} className="mb-4">Técnicas</SectionTitle>
          <Card isDark={isDark} className="overflow-hidden">
            {SPECS.map(([label, value], i) => (
              <div
                key={label}
                className={`flex gap-4 px-6 py-4 text-sm ${
                  i !== SPECS.length - 1
                    ? isDark ? 'border-b border-[#4B4E52]' : 'border-b border-black/5'
                    : ''
                }`}
              >
                <span className={`font-medium min-w-[200px] shrink-0 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
                  {label}
                </span>
                <span className={`font-mono text-xs self-center ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
                  {value}
                </span>
              </div>
            ))}
          </Card>
        </div>

      </div>
    </div>
  )
}
