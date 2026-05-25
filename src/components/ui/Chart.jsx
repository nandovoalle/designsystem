import { GripVertical, Info } from 'lucide-react'

export function DonutChart({ segments = [], size = 100, thickness = 16 }) {
  const cx = size / 2
  const cy = size / 2
  const r = (size - thickness) / 2
  const circ = 2 * Math.PI * r
  const total = segments.reduce((acc, s) => acc + s.value, 0)
  const activeCount = segments.filter(s => s.value > 0).length

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth={thickness} />
      {total > 0 && (() => {
        let cum = 0
        return segments.map((seg, i) => {
          if (!seg.value) { cum += seg.value; return null }
          const pct = seg.value / total
          const gap = activeCount > 1 ? 2 : 0
          const len = Math.max(0, circ * pct - gap)
          const angle = (cum / total) * 360 - 90
          cum += seg.value
          return (
            <circle
              key={i} cx={cx} cy={cy} r={r}
              fill="none" stroke={seg.color} strokeWidth={thickness}
              strokeDasharray={`${len} ${circ}`}
              strokeLinecap="butt"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          )
        })
      })()}
    </svg>
  )
}

export function SegmentedProgressBar({ segments = [], height = 8 }) {
  const total = segments.reduce((acc, s) => acc + s.value, 0)
  const isEmpty = total === 0

  if (isEmpty) {
    return (
      <div className="flex w-full" style={{ height, gap: 2 }}>
        {segments.map((_, i) => (
          <div key={i} className="flex-1 h-full" style={{ backgroundColor: 'rgba(0,0,0,0.12)' }} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex w-full" style={{ height, gap: 2 }}>
      {segments.map((seg, i) => {
        if (!seg.value) return null
        return (
          <div
            key={i} className="h-full shrink-0"
            style={{ flex: `${seg.value} 0 0`, backgroundColor: seg.color }}
          />
        )
      })}
    </div>
  )
}

export function RadialPerformanceChart({ rings = [], size = 174 }) {
  const cx = size / 2
  const cy = size / 2
  const sw = 12
  const outerR = cx - sw / 2 - 2
  const gap = 22

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {rings.map((ring, i) => {
        const r = outerR - i * gap
        const circ = 2 * Math.PI * r
        const pct = Math.min(Math.max(ring.value, 0), 100)
        const len = circ * (pct / 100)
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(0,0,0,0.10)" strokeWidth={sw} />
            {pct > 0 && (
              <circle
                cx={cx} cy={cy} r={r}
                fill="none" stroke={ring.color} strokeWidth={sw}
                strokeDasharray={`${len} ${circ - len}`}
                strokeLinecap="round"
                transform={`rotate(-90 ${cx} ${cy})`}
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

export function ChartCard({ title, children, showDragIcon = true, showInfoIcon = false, style }) {
  return (
    <div
      className="bg-white border border-[#E9EFF2] rounded-[4px] flex flex-col shrink-0"
      style={style}
    >
      <div className="border-b border-[#E9EFF2] flex gap-3 items-center pl-4 pr-2 h-[44px] shrink-0">
        <p className="flex-1 font-bold text-[16px] leading-6 tracking-[0.15px] text-[#4A4A4A] min-w-0">
          {title}
        </p>
        <div className="flex items-center">
          {showInfoIcon && (
            <button className="flex items-center justify-center w-10 h-10 rounded-[4px] text-[#4A4A4A] hover:bg-black/5 transition-colors">
              <Info size={20} />
            </button>
          )}
          {showDragIcon && (
            <button className="flex items-center justify-center w-10 h-10 rounded-[4px] text-[#4A4A4A] hover:bg-black/5 transition-colors cursor-grab">
              <GripVertical size={20} />
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}
