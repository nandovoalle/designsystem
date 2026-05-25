import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'

const SHADOW = '0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)'
const FONT_BODY = { fontFamily: '"Red Hat Display", sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px' }
const FONT_MEDIUM = { fontFamily: '"Red Hat Display", sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '24px', letterSpacing: '0.15px' }

function IconBtn({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 100, flexShrink: 0 }}>
      {children}
    </div>
  )
}

function DayCell({ label, selected = false, today = false, disabled = false, flex1 = false }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', borderRadius: 100,
      ...(flex1 ? { flex: '1 0 0', minWidth: 1 } : { flexShrink: 0 }),
      backgroundColor: selected ? '#304A64' : 'transparent',
      border: today ? '1px solid #304A64' : 'none',
    }}>
      <div style={{
        ...FONT_BODY,
        color: selected ? '#FFFFFF' : disabled ? '#9E9E9E' : '#4A4A4A',
        textAlign: 'center',
        width: 36, height: 36, minWidth: 36, minHeight: 36,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {label}
      </div>
    </div>
  )
}

function DayHeader({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 100, flexShrink: 0, overflow: 'hidden' }}>
      <div style={{ ...FONT_BODY, color: '#666666', textAlign: 'center', width: 36, height: 36, minWidth: 36, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {label}
      </div>
    </div>
  )
}

function RangeRow({ cells }) {
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'flex-start', justifyContent: 'center', borderRadius: 100, flexShrink: 0, backgroundColor: '#E9EFF2', overflow: 'hidden' }}>
      {cells.map(({ label, selected, disabled }) => (
        <DayCell key={label} label={label} selected={selected} disabled={disabled} />
      ))}
    </div>
  )
}

const DAY_HEADERS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const MONTHS = [
  ['Jan', 'Fev', 'Mar'],
  ['Abr', 'Mai', 'Jun'],
  ['Jul', 'Ago', 'Set'],
  ['Out', 'Nov', 'Dez'],
]

const YEARS = [
  ['2014', '2015', '2016'],
  ['2017', '2018', '2019'],
  ['2020', '2021', '2022'],
  ['2023', '2024', '2025'],
]

export function Calendar({ state = 'currentDate' }) {
  const isDate = state === 'currentDate' || state === 'rangeDate'
  const isRange = state === 'rangeDate'
  const isMonth = state === 'month'
  const isYear = state === 'year'

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      boxShadow: SHADOW,
      width: 320,
      minWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    }}>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', width: '100%',
        paddingTop: 16, paddingBottom: 8, paddingLeft: 24, paddingRight: 12, flexShrink: 0,
      }}>
        <div style={{ display: 'flex', flex: 1, gap: 6, alignItems: 'center', minWidth: 0 }}>
          <p style={{ ...FONT_MEDIUM, color: '#4A4A4A', flexShrink: 0 }}>Dezembro</p>
          <p style={{ ...FONT_MEDIUM, color: '#4A4A4A', flexShrink: 0 }}>2023</p>
          {(isMonth || isYear) && (
            <IconBtn>
              {isMonth ? <ChevronDown size={24} color="#4A4A4A" /> : <ChevronUp size={24} color="#4A4A4A" />}
            </IconBtn>
          )}
        </div>
        {!isYear && (
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexShrink: 0 }}>
            <IconBtn><ChevronLeft size={24} color="#4A4A4A" /></IconBtn>
            <IconBtn><ChevronRight size={24} color="#4A4A4A" /></IconBtn>
          </div>
        )}
      </div>

      {/* Day headers — date views only */}
      {isDate && (
        <div style={{ display: 'flex', gap: 2, alignItems: 'flex-start', justifyContent: 'center', width: '100%', flexShrink: 0 }}>
          {DAY_HEADERS.map((d, i) => <DayHeader key={i} label={d} />)}
        </div>
      )}

      {/* Date grid */}
      {isDate && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', paddingTop: 12, width: '100%', height: 264, flexShrink: 0 }}>

          {/* Row 1: 1–2 (Fri–Sat) right-aligned */}
          <div style={{ display: 'flex', gap: 2, justifyContent: 'flex-end', width: '100%', paddingLeft: 28, paddingRight: 28, flexShrink: 0 }}>
            <DayCell label="1" today />
            <DayCell label="2" />
          </div>

          {/* Row 2: 3–9 */}
          <div style={{ display: 'flex', gap: 2, justifyContent: 'center', width: '100%', flexShrink: 0 }}>
            <DayCell label="3" disabled />
            <DayCell label="4" />
            {isRange ? (
              <RangeRow cells={[
                { label: '5', selected: true },
                { label: '6' }, { label: '7' }, { label: '8' }, { label: '9' },
              ]} />
            ) : (
              <><DayCell label="5" /><DayCell label="6" /><DayCell label="7" /><DayCell label="8" /><DayCell label="9" /></>
            )}
          </div>

          {/* Row 3: 10–16 */}
          <div style={{ display: 'flex', gap: 2, justifyContent: 'center', width: '100%', flexShrink: 0 }}>
            {isRange ? (
              <>
                <RangeRow cells={[
                  { label: '10', disabled: true },
                  { label: '11' }, { label: '12' }, { label: '13' },
                  { label: '14', selected: true },
                ]} />
                <DayCell label="15" /><DayCell label="16" />
              </>
            ) : (
              <><DayCell label="10" disabled /><DayCell label="11" /><DayCell label="12" /><DayCell label="13" /><DayCell label="14" selected /><DayCell label="15" /><DayCell label="16" /></>
            )}
          </div>

          {/* Row 4: 17–23 */}
          <div style={{ display: 'flex', gap: 2, justifyContent: 'center', width: '100%', flexShrink: 0 }}>
            <DayCell label="17" disabled />
            <DayCell label="18" /><DayCell label="19" /><DayCell label="20" /><DayCell label="21" /><DayCell label="22" /><DayCell label="23" />
          </div>

          {/* Row 5: 24–30 */}
          <div style={{ display: 'flex', gap: 2, justifyContent: 'center', width: '100%', flexShrink: 0 }}>
            <DayCell label="24" disabled />
            <DayCell label="25" /><DayCell label="26" /><DayCell label="27" /><DayCell label="28" /><DayCell label="29" /><DayCell label="30" />
          </div>

          {/* Row 6: 31 (Sun) left-aligned */}
          <div style={{ display: 'flex', width: '100%', paddingLeft: 28, paddingRight: 28, flexShrink: 0 }}>
            <DayCell label="31" disabled />
          </div>
        </div>
      )}

      {/* Month grid */}
      {isMonth && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', paddingTop: 12, width: '100%', flexShrink: 0 }}>
          {MONTHS.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', justifyContent: 'center', width: '100%', padding: '8px 16px', flexShrink: 0 }}>
              {row.map((m) => <DayCell key={m} label={m} selected={m === 'Out'} flex1 />)}
            </div>
          ))}
        </div>
      )}

      {/* Year grid */}
      {isYear && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', paddingTop: 12, width: '100%', flexShrink: 0 }}>
          {YEARS.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', justifyContent: 'center', width: '100%', padding: '8px 16px', flexShrink: 0 }}>
              {row.map((y) => <DayCell key={y} label={y} selected={y === '2023'} flex1 />)}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Calendar
