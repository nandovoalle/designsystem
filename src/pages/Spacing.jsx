import { PageHeader } from '../components/PageHeader'

const SPACING_SCALE = [
  { token: 'spacing/1',  value: 4 },
  { token: 'spacing/2',  value: 8 },
  { token: 'spacing/3',  value: 12 },
  { token: 'spacing/4',  value: 16 },
  { token: 'spacing/5',  value: 20 },
  { token: 'spacing/6',  value: 24 },
  { token: 'spacing/8',  value: 32 },
  { token: 'spacing/10', value: 40 },
  { token: 'spacing/12', value: 48 },
  { token: 'spacing/14', value: 56 },
  { token: 'spacing/16', value: 64 },
  { token: 'spacing/20', value: 80 },
  { token: 'spacing/24', value: 96 },
  { token: 'spacing/32', value: 128 },
]

export default function SpacingPage() {
  return (
    <div className="p-[68px] min-h-full">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Spacing"
          description="Escala de espaçamento usada para padding, margin e gap em todos os componentes do sistema."
        />
        <div className="bg-white border border-[#e2e0ea] rounded-2xl p-10 overflow-hidden">
          {SPACING_SCALE.map(({ token, value }) => (
            <div
              key={token}
              className="flex gap-4 items-center border-b border-[#e2e0ea] py-[10px] last:border-b-0"
            >
              <span className="font-mono text-[12px] text-[#5b4ee8] w-[140px] shrink-0">
                {token}
              </span>
              <span className="text-[13px] font-semibold text-[#26233a] w-[52px] shrink-0">
                {value}px
              </span>
              <div
                className="h-2 rounded shrink-0 bg-[rgba(91,78,232,0.18)]"
                style={{ width: value * 3.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
