import { PageHeader } from '../components/PageHeader'

const RADIUS_SCALE = [
  { token: 'none',  value: 0,    label: '0px' },
  { token: 'xs',    value: 2,    label: '2px' },
  { token: 'sm',    value: 4,    label: '4px' },
  { token: 'md',    value: 6,    label: '6px' },
  { token: 'lg',    value: 8,    label: '8px' },
  { token: 'xl',    value: 12,   label: '12px' },
  { token: '2xl',   value: 16,   label: '16px' },
  { token: '3xl',   value: 24,   label: '24px' },
  { token: 'full',  value: 9999, label: '∞' },
]

export default function RadiusPage() {
  return (
    <div className="p-[68px] min-h-full">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Radius"
          description="9 tokens de raio de borda — de nenhum arredondamento até pill completo."
        />
        <div className="bg-white border border-[#e2e0ea] rounded-2xl p-12 overflow-x-auto">
          <div className="flex gap-6 items-end min-w-max">
            {RADIUS_SCALE.map(({ token, value, label }) => (
              <div key={token} className="flex flex-col gap-3 items-center">
                <div
                  className="size-[72px] shrink-0 bg-[rgba(91,78,232,0.12)] border-[1.5px] border-[rgba(91,78,232,0.35)]"
                  style={{ borderRadius: value === 9999 ? '9999px' : `${value}px` }}
                />
                <span className="text-[12px] font-semibold text-[#26233a]">{token}</span>
                <span className="font-mono text-[11px] text-[#777294]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
