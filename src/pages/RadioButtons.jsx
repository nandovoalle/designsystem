import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

function RadioIcon({ selected, state }) {
  const disabled = state === 'disabled'

  if (selected) {
    const color = disabled ? '#BDBDBD' : '#304A64'
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5.5" fill={color} />
      </svg>
    )
  }

  const color = disabled ? '#BDBDBD' : '#616161'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

function getStateLayerBg(selected, state) {
  const map = {
    hovered: selected ? 'rgba(48,74,100,0.08)' : 'rgba(0,0,0,0.08)',
    focused: selected ? 'rgba(48,74,100,0.12)' : 'rgba(0,0,0,0.12)',
    pressed: selected ? 'rgba(48,74,100,0.16)' : 'rgba(0,0,0,0.16)',
  }
  return map[state] || 'transparent'
}

function RadioButton({ selected = true, state = 'enabled' }) {
  return (
    <div className="inline-flex items-center justify-center">
      <div
        className="flex items-center justify-center p-[8px] rounded-full"
        style={{ backgroundColor: getStateLayerBg(selected, state) }}
      >
        <RadioIcon selected={selected} state={state} />
      </div>
    </div>
  )
}

const STATES = ['enabled', 'hovered', 'focused', 'pressed', 'disabled']

const STATE_LABELS = {
  enabled: 'Enabled',
  hovered: 'Hovered',
  focused: 'Focused',
  pressed: 'Pressed',
  disabled: 'Disabled',
}

const ROWS = [
  { label: 'Selected', selected: true },
  { label: 'Unselected', selected: false },
]

function RadioGroup() {
  const [selected, setSelected] = useState('option-a')
  const options = [
    { id: 'option-a', label: 'Opção A' },
    { id: 'option-b', label: 'Opção B' },
    { id: 'option-c', label: 'Opção C' },
    { id: 'option-d', label: 'Opção D' },
  ]
  return (
    <div className="flex flex-wrap gap-8">
      {options.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setSelected(id)}
          className="flex items-center gap-2 cursor-pointer select-none bg-transparent border-none p-0 group"
        >
          <div
            className={`flex items-center justify-center p-[8px] rounded-full transition-colors ${
              selected === id
                ? 'group-hover:bg-[rgba(48,74,100,0.08)] group-active:bg-[rgba(48,74,100,0.16)]'
                : 'group-hover:bg-[rgba(0,0,0,0.08)] group-active:bg-[rgba(0,0,0,0.16)]'
            }`}
          >
            <RadioIcon selected={selected === id} state="enabled" />
          </div>
          <span
            className="text-sm text-[#4A4A4A]"
            style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400 }}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}

export default function RadioButtonsPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Radio Buttons"
          description="Controle de seleção única entre um conjunto de opções mutuamente exclusivas."
          showThemeToggle
        />

        {/* Grid de estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Todas as combinações de seleção × estado do componente.
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
                {ROWS.map(({ label, selected }) => (
                  <tr key={label}>
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
                      {label}
                    </td>
                    {STATES.map((state) => (
                      <td key={state} className="px-4 py-2 text-center">
                        <RadioButton selected={selected} state={state} />
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
            Clique para selecionar uma opção do grupo.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <RadioGroup />
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados nos estilos e estados do componente.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Estilo / Estado</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { el: 'Ícone',       ctx: 'Selected — ativo',           token: '--blue-600',                val: '#304A64',               color: '#304A64' },
                  { el: 'Ícone',       ctx: 'Selected — disabled',        token: '--text-disabled',           val: '#BDBDBD',               color: '#BDBDBD' },
                  { el: 'Ícone',       ctx: 'Unselected — ativo',         token: '—',                        val: '#616161',               color: '#616161' },
                  { el: 'Ícone',       ctx: 'Unselected — disabled',      token: '--text-disabled',           val: '#BDBDBD',               color: '#BDBDBD' },
                  { el: 'State Layer', ctx: 'Selected — hovered',         token: 'rgba(48,74,100, 0.08)',     val: 'rgba(48,74,100, 0.08)', color: 'rgba(48,74,100,0.08)' },
                  { el: 'State Layer', ctx: 'Selected — focused',         token: 'rgba(48,74,100, 0.12)',     val: 'rgba(48,74,100, 0.12)', color: 'rgba(48,74,100,0.12)' },
                  { el: 'State Layer', ctx: 'Selected — pressed',         token: 'rgba(48,74,100, 0.16)',     val: 'rgba(48,74,100, 0.16)', color: 'rgba(48,74,100,0.16)' },
                  { el: 'State Layer', ctx: 'Unselected — hovered',       token: 'rgba(0,0,0, 0.08)',         val: 'rgba(0,0,0, 0.08)',     color: 'rgba(0,0,0,0.08)' },
                  { el: 'State Layer', ctx: 'Unselected — focused',       token: 'rgba(0,0,0, 0.12)',         val: 'rgba(0,0,0, 0.12)',     color: 'rgba(0,0,0,0.12)' },
                  { el: 'State Layer', ctx: 'Unselected — pressed',       token: 'rgba(0,0,0, 0.16)',         val: 'rgba(0,0,0, 0.16)',     color: 'rgba(0,0,0,0.16)' },
                ].map(({ el, ctx, token, val, color }, i, arr) => (
                  <tr key={`${el}-${ctx}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{el}</td>
                    <td className="p-4 text-[#666666]">{ctx}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{token}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{val}</td>
                    <td className="p-4">
                      <div className="w-6 h-6 rounded border border-black/10" style={{ backgroundColor: color }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Especificações */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Tamanho do ícone', '24 × 24px'],
              ['Área de toque (state layer)', '40 × 40px (padding 8px)'],
              ['Border radius (state layer)', '100px (circular)'],
              ['Cor ativa — selected', '#304A64 — var(--blue-600)'],
              ['Cor inativa — unselected', '#616161'],
              ['Cor desabilitado', '#BDBDBD'],
              ['State layer — hovered (selected)', 'rgba(48,74,100, 0.08)'],
              ['State layer — focused (selected)', 'rgba(48,74,100, 0.12)'],
              ['State layer — pressed (selected)', 'rgba(48,74,100, 0.16)'],
              ['State layer — hovered (unselected)', 'rgba(0,0,0, 0.08)'],
              ['State layer — focused (unselected)', 'rgba(0,0,0, 0.12)'],
              ['State layer — pressed (unselected)', 'rgba(0,0,0, 0.16)'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[280px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
