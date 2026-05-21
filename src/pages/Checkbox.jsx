import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

function CheckboxIcon({ type, state }) {
  const disabled = state === 'disabled'
  const fillColor = disabled ? '#BDBDBD' : '#304A64'
  const strokeColor = disabled ? '#BDBDBD' : '#304A64'
  const strokeWidth = ['hovered', 'focused', 'pressed'].includes(state) ? '2' : '1.5'

  if (type === 'selected') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" rx="2" fill={fillColor} />
        <path d="M4.5 9L7.5 12L13.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'indeterminate') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" rx="2" fill={fillColor} />
        <path d="M4.5 9H13.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="16" height="16" rx="1.5" stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  )
}

function getStateLayerBg(type, state) {
  const isActive = type !== 'unselected'
  const map = {
    hovered: isActive ? 'rgba(48,74,100,0.08)' : 'rgba(0,0,0,0.08)',
    focused: isActive ? 'rgba(48,74,100,0.12)' : 'rgba(0,0,0,0.12)',
    pressed: isActive ? 'rgba(48,74,100,0.16)' : 'rgba(0,0,0,0.16)',
  }
  return map[state] || 'transparent'
}

function Checkbox({ type = 'selected', state = 'enabled' }) {
  return (
    <div className="inline-flex items-center justify-center">
      <div
        className="flex items-center justify-center p-[8px] rounded-[4px]"
        style={{ backgroundColor: getStateLayerBg(type, state) }}
      >
        <CheckboxIcon type={type} state={state} />
      </div>
    </div>
  )
}

const TYPES = ['selected', 'indeterminate', 'unselected']
const STATES = ['enabled', 'hovered', 'focused', 'pressed', 'disabled']

const TYPE_LABELS = {
  selected: 'Selected',
  indeterminate: 'Indeterminate',
  unselected: 'Unselected',
}

const STATE_LABELS = {
  enabled: 'Enabled',
  hovered: 'Hovered',
  focused: 'Focused',
  pressed: 'Pressed',
  disabled: 'Disabled',
}

function InteractiveCheckbox({ label, initialType = 'unselected' }) {
  const [type, setType] = useState(initialType)

  const handleClick = () => {
    if (type === 'unselected') setType('selected')
    else if (type === 'selected') setType('indeterminate')
    else setType('unselected')
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 cursor-pointer select-none bg-transparent border-none p-0 group"
    >
      <div
        className="flex items-center justify-center p-[8px] rounded-[4px] transition-colors
          group-hover:bg-[rgba(48,74,100,0.08)]
          group-active:bg-[rgba(48,74,100,0.16)]"
      >
        <CheckboxIcon type={type} state="enabled" />
      </div>
      <span
        className="text-sm text-[#4A4A4A]"
        style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400 }}
      >
        {label}
      </span>
    </button>
  )
}

export default function CheckboxPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Checkbox"
          description="Controle de seleção múltipla em três estados: marcado, indeterminado e desmarcado."
          showThemeToggle
        />

        {/* Grid de estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Todas as combinações de tipo × estado do componente.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8 overflow-x-auto">
            <table className="mx-auto border-separate" style={{ borderSpacing: '0 4px' }}>
              <thead>
                <tr>
                  <th className="w-[120px]" />
                  {STATES.map((s) => (
                    <th
                      key={s}
                      className="text-center pb-4 px-4"
                      style={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#9E9E9E',
                        textTransform: 'capitalize',
                        letterSpacing: '0.4px',
                      }}
                    >
                      {STATE_LABELS[s]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TYPES.map((type) => (
                  <tr key={type}>
                    <td
                      className="pr-4 py-2"
                      style={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#9E9E9E',
                        letterSpacing: '0.4px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {TYPE_LABELS[type]}
                    </td>
                    {STATES.map((state) => (
                      <td key={state} className="px-4 py-2 text-center">
                        <Checkbox type={type} state={state} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interativo */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Interativo</h2>
          <p className="text-sm text-[#666666] mb-6">
            Clique para alternar entre desmarcado → marcado → indeterminado.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex flex-wrap gap-8">
              <InteractiveCheckbox label="Opção A" initialType="unselected" />
              <InteractiveCheckbox label="Opção B" initialType="selected" />
              <InteractiveCheckbox label="Opção C (parcial)" initialType="indeterminate" />
              <InteractiveCheckbox label="Opção D" initialType="unselected" />
            </div>
          </div>
        </div>

        {/* Especificações */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Tamanho do ícone', '18 × 18px'],
              ['Área de toque (state layer)', '34 × 34px (padding 8px)'],
              ['Border radius (ícone)', '2px'],
              ['Border radius (state layer)', '4px'],
              ['Cor ativo (selected/indeterminate)', '#304A64 — var(--blue-600)'],
              ['Cor desabilitado', '#BDBDBD'],
              ['State layer — hovered', 'rgba(48,74,100, 0.08) / rgba(0,0,0, 0.08)'],
              ['State layer — focused', 'rgba(48,74,100, 0.12) / rgba(0,0,0, 0.12)'],
              ['State layer — pressed', 'rgba(48,74,100, 0.16) / rgba(0,0,0, 0.16)'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[240px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
