import { PageHeader } from '../components/PageHeader'

const DURATION_TOKENS = [
  {
    token: 'duration/instant',
    value: '0ms',
    barWidth: 0,
    description: 'State changes, toggle, active feedback — no animation',
  },
  {
    token: 'duration/fast',
    value: '100ms',
    barWidth: 45,
    description: 'Hover states, micro-interactions, icon swap',
  },
  {
    token: 'duration/normal',
    value: '200ms',
    barWidth: 90,
    description: 'Dropdown, tooltip show/hide, button state',
  },
  {
    token: 'duration/slow',
    value: '300ms',
    barWidth: 135,
    description: 'Drawer, sidebar, accordion expand',
  },
  {
    token: 'duration/slower',
    value: '500ms',
    barWidth: 225,
    description: 'Modal entry, onboarding, page transition',
  },
  {
    token: 'duration/slowest',
    value: '800ms',
    barWidth: 360,
    description: 'Complex staggered animations only',
  },
]

const EASING_CURVES = [
  {
    name: 'Default',
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
    description: 'Movimento natural — uso geral',
  },
  {
    name: 'Enter',
    value: 'cubic-bezier(0.0, 0, 0.2, 1)',
    description: 'Elementos entrando na tela',
  },
  {
    name: 'Exit',
    value: 'cubic-bezier(0.4, 0, 1, 1)',
    description: 'Elementos saindo da tela',
  },
  {
    name: 'Standard',
    value: 'cubic-bezier(0.2, 0, 0, 1)',
    description: 'Transições de página, modal',
  },
  {
    name: 'Spring',
    value: 'spring(1, 200, 15, 0)',
    description: 'Interações com inércia',
  },
  {
    name: 'Linear',
    value: 'linear',
    description: 'Loaders, progress bars',
  },
]


export default function MotionPage() {
  return (
    <div className="p-[68px] min-h-full">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Motion"
          description="Movimento com propósito — reforça hierarquia, orienta atenção e comunica causalidade."
        />

        {/* Duration Tokens */}
        <section className="flex flex-col gap-5 mb-16">
          <h2 className="text-[22px] font-semibold text-[#26233a]">Duration Tokens</h2>
          <div className="bg-white border border-[#e2e0ea] rounded-2xl px-8 overflow-x-auto">
            {DURATION_TOKENS.map(({ token, value, barWidth, description }) => (
              <div
                key={token}
                className="flex items-center gap-6 py-3 border-b border-[#e2e0ea] last:border-b-0 min-w-max"
              >
                <span className="font-mono text-[12px] text-[#5b4ee8] w-[180px] shrink-0">{token}</span>
                <span className="text-[14px] font-semibold text-[#26233a] w-[56px] shrink-0">{value}</span>
                <div className="w-[400px] shrink-0 flex items-center">
                  {barWidth === 0 ? (
                    <div className="h-[6px] w-[2px] rounded-full bg-[rgba(91,78,232,0.08)]" />
                  ) : (
                    <div
                      className="h-[6px] rounded-full bg-[rgba(91,78,232,0.22)]"
                      style={{ width: barWidth }}
                    />
                  )}
                </div>
                <span className="text-[12px] text-[#777294] w-[520px] shrink-0">{description}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Easing Curves */}
        <section className="flex flex-col gap-5">
          <h2 className="text-[22px] font-semibold text-[#26233a]">Easing Curves</h2>
          <div className="flex gap-4 flex-wrap">
            {EASING_CURVES.map(({ name, value, description }) => (
              <div
                key={name}
                className="bg-white border border-[#e2e0ea] rounded-[12px] p-5 flex flex-col gap-[10px] w-[210px] shrink-0"
              >
                <span className="text-[14px] font-semibold text-[#26233a]">{name}</span>
                <span className="font-mono text-[10px] text-[#5b4ee8]">{value}</span>
                <span className="text-[12px] text-[#777294] leading-relaxed">{description}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
