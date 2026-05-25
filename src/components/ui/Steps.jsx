import { Check, X, ChevronRight } from 'lucide-react'

function LockIcon({ isDark }) {
  const stroke = isDark ? '#32353A' : '#ffffff'
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 1.5C6.95099 1.5 7.80291 1.85564 8.47363 2.52637C9.14275 3.19549 9.49732 4.04493 9.49902 4.99316C9.52705 5.01417 9.55664 5.0333 9.58398 5.05566L9.77344 5.22656L9.94434 5.41602C10.3163 5.87083 10.5 6.42166 10.5 7V10C10.5 10.6611 10.2603 11.2866 9.77344 11.7734C9.28658 12.2603 8.66109 12.5 8 12.5H4C3.33891 12.5 2.71342 12.2603 2.22656 11.7734C1.73971 11.2866 1.5 10.6611 1.5 10V7C1.5 6.33891 1.73971 5.71342 2.22656 5.22656L2.41602 5.05566C2.44336 5.0333 2.47295 5.01417 2.50098 4.99316C2.50268 4.04493 2.85725 3.19549 3.52637 2.52637C4.19709 1.85564 5.04901 1.5 6 1.5Z" fill="#9E9E9E" stroke={stroke} strokeWidth="3"/>
    </svg>
  )
}

const STATE_CIRCLE = {
  completed: { bg: '#67D18A', border: false },
  active:    { bg: '#13283C', border: false },
  default:   { bg: 'transparent', border: true,  borderColor: '#9CB1C8' },
  disabled:  { bg: 'transparent', border: true,  borderColor: '#9E9E9E' },
  error:     { bg: '#E9786B', border: false },
  attention: { bg: '#E9C16C', border: false },
}

const STATE_LABEL = {
  completed: '#9CB1C8',
  active:    '#13283C',
  default:   '#9CB1C8',
  disabled:  '#9E9E9E',
  error:     '#9CB1C8',
  attention: '#9CB1C8',
}

const CHEVRON_COLOR = {
  completed: '#9CB1C8',
  active:    '#13283C',
  default:   '#9CB1C8',
  disabled:  '#9E9E9E',
  error:     '#9CB1C8',
  attention: '#9CB1C8',
}

function StepCircle({ state, number, isDark }) {
  const { bg, border, borderColor } = STATE_CIRCLE[state]

  const circleStyle = {
    width: 30,
    height: 30,
    borderRadius: '100px',
    backgroundColor: bg,
    border: border ? `1px solid ${borderColor}` : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    position: 'relative',
  }

  const numStyle = {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: '0.15px',
    textAlign: 'center',
    userSelect: 'none',
  }

  return (
    <div style={circleStyle}>
      {state === 'completed' && <Check size={16} color="#fff" strokeWidth={2.5} />}
      {state === 'active'    && <span style={{ ...numStyle, color: '#fff' }}>{number}</span>}
      {state === 'default'   && <span style={{ ...numStyle, color: '#9CB1C8' }}>{number}</span>}
      {state === 'disabled'  && (
        <>
          <span style={{ ...numStyle, color: '#9E9E9E' }}>{number}</span>
          <span style={{ position: 'absolute', right: -4, bottom: 1, lineHeight: 0 }}>
            <LockIcon isDark={isDark} />
          </span>
        </>
      )}
      {state === 'error'     && <X size={16} color="#fff" strokeWidth={2.5} />}
      {state === 'attention' && (
        <span style={{ ...numStyle, color: '#fff', fontSize: 14, fontWeight: 700 }}>!</span>
      )}
    </div>
  )
}

/**
 * Steps — componente de navegação por etapas.
 *
 * @param {string}  state       — completed | active | default | disabled | error | attention
 * @param {string}  label       — texto da etapa
 * @param {number|string} number — número da etapa (exibido nos estados active/default/disabled)
 * @param {boolean} showChevron — exibe seta separadora (default: true)
 */
export function Steps({ state = 'default', label = 'Label', number = '1', showChevron = true, isDark = false }) {
  const labelColor = STATE_LABEL[state]
  const chevronColor = CHEVRON_COLOR[state]

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: showChevron ? 8 : 0,
        height: 40,
      }}
    >
      {/* Circle + label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <StepCircle state={state} number={number} isDark={isDark} />
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '0.1px',
            color: labelColor,
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          {label}
        </span>
      </div>

      {/* Chevron separator */}
      {showChevron && <ChevronRight width={19.7} height={32} color={chevronColor} strokeWidth={1.5} />}
    </div>
  )
}
