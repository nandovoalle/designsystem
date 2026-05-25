import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

const ITEM_STYLE = {
  fontFamily: '"Red Hat Display", sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0.4px',
  color: '#9CB1C8',
}

function BreadcrumbTrail({ items }) {
  return (
    <div className="flex items-center flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span style={ITEM_STYLE}>{item}</span>
          {i < items.length - 1 && (
            <span style={{ ...ITEM_STYLE, margin: '0 5px' }}>/</span>
          )}
        </span>
      ))}
    </div>
  )
}

const DEPTHS = [
  { label: '1 nível',  items: ['CRM Voalle'] },
  { label: '2 níveis', items: ['CRM Voalle', 'Operações'] },
  { label: '3 níveis', items: ['CRM Voalle', 'Operações', 'Dashboard - Parâmetros do CRM'] },
  { label: '4 níveis', items: ['CRM Voalle', 'Operações', 'Dashboard - Parâmetros do CRM', 'Loren'] },
]

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

function Canvas({ isDark, children }) {
  return (
    <div
      className={`rounded-[16px] border p-8 ${isDark ? 'bg-[#292C30] border-[#4B4E52]' : 'bg-[#F5F7FA] border-black/8'}`}
      style={{
        backgroundImage: isDark
          ? 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)'
          : 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      {children}
    </div>
  )
}

function Card({ isDark, children, className = '' }) {
  return (
    <div className={`rounded-[12px] border ${isDark ? 'bg-[#1D2024] border-[#3A3D41]' : 'bg-white border-black/8 shadow-sm'} ${className}`}>
      {children}
    </div>
  )
}

export default function BreadcrumbPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Breadcrumb"
          description="Trilha de navegação hierárquica para orientação do usuário dentro da aplicação."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Preview */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Preview</SectionTitle>
          <SectionDesc isDark={isDark}>
            Variações do componente por nível de profundidade de navegação.
          </SectionDesc>
          <Canvas isDark={isDark}>
            <Card isDark={isDark} className="p-6">
              <div className="flex flex-col gap-5">
                {DEPTHS.map(({ label, items }) => (
                  <div key={label} className="flex items-center gap-6">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.12em] w-[72px] flex-shrink-0 ${isDark ? 'text-[#4B4E52]' : 'text-[#C0C0C0]'}`}>
                      {label}
                    </span>
                    <BreadcrumbTrail items={items} />
                  </div>
                ))}
              </div>
            </Card>
          </Canvas>
        </div>

        {/* Profundidades */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Profundidades</SectionTitle>
          <SectionDesc isDark={isDark}>
            Cada nível representa um passo adicional na hierarquia de navegação.
          </SectionDesc>
          <div className="grid grid-cols-2 gap-4">
            {DEPTHS.map(({ label, items }) => (
              <div
                key={label}
                className={`rounded-[14px] border p-6 flex flex-col gap-4 ${
                  isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'
                }`}
              >
                <span className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${isDark ? 'text-[#505356]' : 'text-[#C0C0C0]'}`}>
                  {label}
                </span>
                <BreadcrumbTrail items={items} />
              </div>
            ))}
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div>
          <SectionTitle isDark={isDark} className="mb-4">Especificações Técnicas</SectionTitle>
          <div className={`rounded-[14px] border p-6 space-y-3 text-sm ${isDark ? 'bg-[#32353A] border-[#4B4E52]' : 'bg-white border-black/10'}`}>
            {[
              ['Separador',       '/ (barra)'],
              ['Cor do texto',    '#9CB1C8 — var(--blue-200)'],
              ['Fonte',           'Red Hat Display Regular 400'],
              ['Tamanho',         '12px'],
              ['Line height',     '16px'],
              ['Letter spacing',  '0.4px'],
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
