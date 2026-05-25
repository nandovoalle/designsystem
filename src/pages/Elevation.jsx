import { PageHeader } from '../components/PageHeader'

const ELEVATION_SCALE = [
  {
    level: 0,
    label: 'Level 0',
    description: 'Flat — no shadow',
    usage: 'Background, disabled state',
    shadow: 'none',
  },
  {
    level: 1,
    label: 'Level 1',
    description: '4px blur · 2px Y · −1 spread',
    usage: 'Cards, list items',
    shadow: '0px 1px 2px 0px rgba(24,22,36,0.05), 0px 2px 4px -1px rgba(24,22,36,0.1)',
  },
  {
    level: 2,
    label: 'Level 2',
    description: '8px blur · 4px Y · −2 spread',
    usage: 'Dropdowns, tooltips',
    shadow: '0px 2px 4px 0px rgba(24,22,36,0.06), 0px 4px 8px -2px rgba(24,22,36,0.11)',
  },
  {
    level: 3,
    label: 'Level 3',
    description: '16px blur · 8px Y · −3 spread',
    usage: 'Popovers, drawers',
    shadow: '0px 4px 8px 0px rgba(24,22,36,0.07), 0px 8px 16px -3px rgba(24,22,36,0.14)',
  },
  {
    level: 4,
    label: 'Level 4',
    description: '24px blur · 12px Y · −4 spread',
    usage: 'Dialogs, modals',
    shadow: '0px 6px 12px 0px rgba(24,22,36,0.09), 0px 12px 24px -4px rgba(24,22,36,0.18)',
  },
  {
    level: 5,
    label: 'Level 5',
    description: '40px blur · 20px Y · −6 spread',
    usage: 'Command palette, critical modal',
    shadow: '0px 10px 20px 0px rgba(24,22,36,0.12), 0px 20px 40px -6px rgba(24,22,36,0.24)',
  },
]

export default function ElevationPage() {
  return (
    <div className="p-[68px] min-h-full">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Elevation"
          description="6 níveis de elevação — da superfície plana até modal de máxima prioridade visual."
        />
        <div className="bg-white border border-[#e2e0ea] rounded-2xl p-12 overflow-x-auto">
          <div className="flex gap-8 items-end min-w-max">
            {ELEVATION_SCALE.map(({ level, label, description, usage, shadow }) => (
              <div key={level} className="flex flex-col gap-4 items-start">
                <div
                  className="w-[180px] h-[120px] bg-white rounded-xl shrink-0"
                  style={{ boxShadow: shadow }}
                />
                <span className="text-[14px] font-semibold text-[#26233a]">{label}</span>
                <span className="text-[11px] text-[#777294] w-[180px]">{description}</span>
                <span className="text-[11px] text-[#5b4ee8] w-[180px]">{usage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
