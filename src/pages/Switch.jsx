import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

function Switch({ selected = false, state = 'enabled' }) {
  const isDisabled = state === 'disabled'

  let containerBg
  if (isDisabled) containerBg = 'rgba(0,0,0,0.12)'
  else if (selected) containerBg = '#304A64'
  else containerBg = '#E9EFF2'

  let stateLayerBg = 'transparent'
  if (state === 'hovered') stateLayerBg = selected ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
  else if (state === 'focused') stateLayerBg = selected ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'

  return (
    <div
      style={{
        position: 'relative',
        width: 44,
        height: 24,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: containerBg,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 50,
          backgroundColor: stateLayerBg,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: selected ? 23 : 3,
          top: 3,
          width: 18,
          height: 18,
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          opacity: isDisabled ? 0.5 : 1,
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}
      />
    </div>
  )
}

const STATES = ['enabled', 'hovered', 'focused', 'disabled']
const STATE_LABELS = {
  enabled: 'Enabled',
  hovered: 'Hovered',
  focused: 'Focused',
  disabled: 'Disabled',
}

function InteractiveSwitch({ label, initialSelected = false, disabled = false }) {
  const [selected, setSelected] = useState(initialSelected)
  const [hovered, setHovered] = useState(false)

  const stateLayerBg = !disabled && hovered
    ? selected ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
    : 'transparent'

  return (
    <button
      disabled={disabled}
      onClick={() => setSelected((s) => !s)}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 select-none bg-transparent border-none p-0"
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <div
        style={{
          position: 'relative',
          width: 44,
          height: 24,
          borderRadius: 50,
          overflow: 'hidden',
          backgroundColor: disabled ? 'rgba(0,0,0,0.12)' : selected ? '#304A64' : '#E9EFF2',
          transition: 'background-color 0.15s ease',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 50,
            backgroundColor: stateLayerBg,
            transition: 'background-color 0.1s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: selected ? 23 : 3,
            top: 3,
            width: 18,
            height: 18,
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            opacity: disabled ? 0.5 : 1,
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
            transition: 'left 0.15s ease',
          }}
        />
      </div>
      <span
        style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: 14,
          fontWeight: 400,
          color: disabled ? '#9E9E9E' : '#4A4A4A',
        }}
      >
        {label}
      </span>
    </button>
  )
}

export default function SwitchPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Switch"
          description="Controle de alternância binária para ativar ou desativar uma configuração."
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
                  <th className="w-[80px]" />
                  {STATES.map((s) => (
                    <th
                      key={s}
                      className="text-center pb-4 px-8"
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
                {[false, true].map((selected) => (
                  <tr key={String(selected)}>
                    <td
                      className="pr-4 py-4"
                      style={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#9E9E9E',
                        letterSpacing: '0.4px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {selected ? 'On' : 'Off'}
                    </td>
                    {STATES.map((state) => (
                      <td key={state} className="px-8 py-4 text-center">
                        <div className="inline-flex items-center justify-center">
                          <Switch selected={selected} state={state} />
                        </div>
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
            Clique para alternar entre ligado e desligado.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex flex-wrap gap-8">
              <InteractiveSwitch label="Notificações" initialSelected={true} />
              <InteractiveSwitch label="Modo escuro" initialSelected={false} />
              <InteractiveSwitch label="Localização" initialSelected={true} />
              <InteractiveSwitch label="Sincronização (desabilitado)" disabled />
            </div>
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Variáveis de cor utilizadas no componente Switch.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  {['Elemento', 'Estado', 'Token', 'Valor', ''].map((h, i) => (
                    <th
                      key={i}
                      className="text-left px-6 py-3"
                      style={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#9E9E9E',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Container', 'On', '--blue-600', '#304A64', '#304A64'],
                  ['Container', 'Off', '--divider', '#E9EFF2', '#E9EFF2'],
                  ['Container', 'Disabled', '--states/black/disabledbg', 'rgba(0,0,0,0.12)', 'rgba(0,0,0,0.12)'],
                  ['State Layer (On)', 'Hovered', '--states/white/hovered', 'rgba(255,255,255,0.08)', 'rgba(255,255,255,0.08)'],
                  ['State Layer (On)', 'Focused', '--states/white/focused', 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)'],
                  ['State Layer (Off)', 'Hovered', '--states/black/hovered', 'rgba(0,0,0,0.08)', 'rgba(0,0,0,0.08)'],
                  ['State Layer (Off)', 'Focused', '--states/black/focused', 'rgba(0,0,0,0.12)', 'rgba(0,0,0,0.12)'],
                  ['Handle', 'Todos', '—', '#FFFFFF', '#FFFFFF'],
                ].map(([element, stateLabel, token, value, previewBg], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-[#FAFAFA]' : ''}>
                    <td className="px-6 py-3 text-[#4A4A4A]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>{element}</td>
                    <td className="px-6 py-3 text-[#4A4A4A]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>{stateLabel}</td>
                    <td className="px-6 py-3 text-[#4A4A4A] font-mono text-xs">{token}</td>
                    <td className="px-6 py-3 text-[#666666] font-mono text-xs">{value}</td>
                    <td className="px-6 py-3">
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          backgroundColor: previewBg,
                          border: '1px solid rgba(0,0,0,0.1)',
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Especificações */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Largura', '44px'],
              ['Altura', '24px'],
              ['Border radius (container)', '50px'],
              ['Tamanho do handle', '18 × 18px'],
              ['Border radius (handle)', '50%'],
              ['Posição handle — Off', '3px da esquerda, 3px do topo'],
              ['Posição handle — On', '23px da esquerda, 3px do topo'],
              ['Cor container — On', '#304A64 — var(--blue-600)'],
              ['Cor container — Off', '#E9EFF2 — var(--divider)'],
              ['Cor container — Disabled', 'rgba(0,0,0,0.12) — var(--states/black/disabledbg)'],
              ['State layer — Hovered (On)', 'rgba(255,255,255,0.08)'],
              ['State layer — Focused (On)', 'rgba(255,255,255,0.12)'],
              ['State layer — Hovered (Off)', 'rgba(0,0,0,0.08)'],
              ['State layer — Focused (Off)', 'rgba(0,0,0,0.12)'],
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
