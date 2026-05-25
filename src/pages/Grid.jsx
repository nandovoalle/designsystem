import { PageHeader } from '../components/PageHeader'

const BREAKPOINTS = [
  { breakpoint: 'Mobile',  token: 'xs',  viewport: '375px',   columns: 4,  gutter: '16px', margin: '16px', maxContent: '100%'   },
  { breakpoint: 'Tablet',  token: 'md',  viewport: '768px',   columns: 8,  gutter: '24px', margin: '24px', maxContent: '100%'   },
  { breakpoint: 'Desktop', token: 'lg',  viewport: '1280px',  columns: 12, gutter: '32px', margin: '40px', maxContent: '1200px' },
  { breakpoint: 'Wide',    token: 'xl',  viewport: '1440px+', columns: 12, gutter: '32px', margin: '80px', maxContent: '1280px' },
]

export default function GridPage() {
  return (
    <div className="p-[68px] min-h-full">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Grid"
          description="Grid de 12 colunas responsivo — 4 breakpoints, gutters e margens adaptativas."
        />

        {/* Reference table */}
        <div className="bg-white border border-[#e2e0ea] rounded-2xl p-8 overflow-x-auto mb-12">
          <div className="flex border-b border-[#e2e0ea] py-[14px] text-[13px] font-semibold text-[#777294] min-w-max">
            <span className="w-[140px] shrink-0">Breakpoint</span>
            <span className="w-[80px] shrink-0">Token</span>
            <span className="w-[120px] shrink-0">Viewport</span>
            <span className="w-[80px] shrink-0">Columns</span>
            <span className="w-[100px] shrink-0">Gutter</span>
            <span className="w-[100px] shrink-0">Margin</span>
            <span className="w-[180px] shrink-0">Max Content</span>
          </div>
          {BREAKPOINTS.map(({ breakpoint, token, viewport, columns, gutter, margin, maxContent }) => (
            <div key={token} className="flex border-b border-[#e2e0ea] last:border-b-0 py-[14px] text-[13px] text-[#26233a] min-w-max">
              <span className="w-[140px] shrink-0">{breakpoint}</span>
              <span className="w-[80px] shrink-0">{token}</span>
              <span className="w-[120px] shrink-0">{viewport}</span>
              <span className="w-[80px] shrink-0">{columns}</span>
              <span className="w-[100px] shrink-0">{gutter}</span>
              <span className="w-[100px] shrink-0">{margin}</span>
              <span className="w-[180px] shrink-0">{maxContent}</span>
            </div>
          ))}
        </div>

        {/* Breakpoint cards */}
        <section className="flex flex-col gap-5">
          <h2 className="text-[22px] font-semibold text-[#26233a]">Breakpoints</h2>
          <div className="grid grid-cols-2 gap-4">
            {BREAKPOINTS.map(({ breakpoint, token, viewport, columns, gutter, margin, maxContent }) => (
              <div key={token} className="bg-white border border-[#e2e0ea] rounded-2xl p-6 flex flex-col gap-5">
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span className="text-[18px] font-bold text-[#26233a]">{breakpoint}</span>
                  <span className="font-mono text-[11px] text-[#5b4ee8] bg-[rgba(91,78,232,0.08)] px-3 py-1 rounded-full">
                    {token}
                  </span>
                </div>

                {/* Column visual */}
                <div className="flex gap-[5px] h-10 w-full">
                  {Array.from({ length: columns }).map((_, i) => (
                    <div key={i} className="flex-1 h-full bg-[rgba(91,78,232,0.10)] rounded-sm" />
                  ))}
                </div>

                {/* Properties grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#777294]">Viewport</span>
                    <span className="text-[13px] font-semibold text-[#26233a]">{viewport}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#777294]">Columns</span>
                    <span className="text-[13px] font-semibold text-[#26233a]">{columns}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#777294]">Gutter</span>
                    <span className="text-[13px] font-semibold text-[#26233a]">{gutter}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#777294]">Margin</span>
                    <span className="text-[13px] font-semibold text-[#26233a]">{margin}</span>
                  </div>
                  <div className="flex flex-col gap-1 col-span-2">
                    <span className="text-[11px] text-[#777294]">Max Content</span>
                    <span className="text-[13px] font-semibold text-[#26233a]">{maxContent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
