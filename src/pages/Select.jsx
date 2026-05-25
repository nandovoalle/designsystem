import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

// ─── CheckboxIcon (reaproveitado de Checkbox.jsx) ────────────────────────────
function CheckboxIcon({ checked = false, disabled = false }) {
  const color = disabled ? '#BDBDBD' : '#304A64'
  if (checked) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect width="18" height="18" rx="2" fill={color} />
        <path d="M4.5 9L7.5 12L13.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="16" height="16" rx="1.5" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

// ─── Menu de seleção única (reaproveitado de Menu.jsx) ───────────────────────
function SelectMenu({ items, selectedId, onSelect }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 8,
        boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
        position: 'absolute',
        top: 'calc(100% + 2px)',
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect?.(item.id)}
          style={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            padding: 8,
            borderRadius: 4,
            cursor: 'pointer',
            backgroundColor: selectedId === item.id ? '#304a64' : 'transparent',
          }}
          onMouseEnter={e => { if (selectedId !== item.id) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)' }}
          onMouseLeave={e => { if (selectedId !== item.id) e.currentTarget.style.backgroundColor = 'transparent' }}
        >
          <span style={{ flex: 1, fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', letterSpacing: '0.25px', color: selectedId === item.id ? '#ffffff' : '#4a4a4a' }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

// ─── Menu de seleção múltipla (com Checkbox) ─────────────────────────────────
function MultiMenu({ items, selectedIds, onToggle }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 8,
        boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
        position: 'absolute',
        top: 'calc(100% + 2px)',
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      {items.map((item) => {
        const isChecked = selectedIds.includes(item.id)
        return (
          <div
            key={item.id}
            onClick={() => onToggle?.(item.id)}
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <div style={{ flexShrink: 0 }}>
              <CheckboxIcon checked={isChecked} />
            </div>
            <span style={{ flex: 1, fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', letterSpacing: '0.25px', color: '#4a4a4a' }}>
              {item.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

// ─── Helpers de estilo por estado ─────────────────────────────────────────────
function getBorder(state) {
  if (state === 'hovered' || state === 'focused') return '1px solid #304a64'
  if (state === 'error') return '1px solid #E9786B'
  return '1px solid #E9EFF2'
}
function getFieldBg(state) {
  return state === 'disabled' ? 'rgba(0,0,0,0.12)' : 'transparent'
}
function getLabelColor(state) {
  return state === 'disabled' ? '#9E9E9E' : '#4A4A4A'
}
function getTextColor(state) {
  if (state === 'disabled') return '#9E9E9E'
  if (state === 'error') return '#E9786B'
  if (state === 'focused') return '#4A4A4A'
  return '#666'
}
function getIconColor(state) {
  if (state === 'disabled') return '#9E9E9E'
  if (state === 'error') return '#E9786B'
  if (state === 'hovered' || state === 'focused') return '#304A64'
  return '#4A4A4A'
}

const FONT = { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', letterSpacing: '0.25px' }
const FIELD_BASE = { borderRadius: 4, height: 40, display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 8, paddingRight: 12 }

// ─── Select estático (grid de estados) ───────────────────────────────────────
function SelectStatic({ state = 'enabled' }) {
  const isOpen = state === 'focused'
  const iconColor = getIconColor(state)
  return (
    <div style={{ width: 210 }}>
      <div style={{ paddingBottom: 8 }}>
        <span style={{ ...FONT, color: getLabelColor(state) }}>Label</span>
      </div>
      <div style={{ ...FIELD_BASE, border: getBorder(state), backgroundColor: getFieldBg(state) }}>
        <span style={{ ...FONT, flex: 1, color: getTextColor(state) }}>Placeholder</span>
        {isOpen
          ? <ChevronUp size={20} color={iconColor} strokeWidth={1.5} />
          : <ChevronDown size={20} color={iconColor} strokeWidth={1.5} />
        }
      </div>
      {isOpen && (
        <div style={{ backgroundColor: 'white', borderRadius: 4, padding: 8, marginTop: 2, boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)' }}>
          {['Menu item', 'Menu item', 'Menu item'].map((label, i) => (
            <div key={i} style={{ height: 40, display: 'flex', alignItems: 'center', padding: 8 }}>
              <span style={{ ...FONT, color: '#4a4a4a' }}>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── MultiSelect estático (grid de estados) ───────────────────────────────────
function MultiSelectStatic({ state = 'enabled' }) {
  const isOpen = state === 'focused'
  const iconColor = getIconColor(state)
  const checkColor = state === 'disabled' ? '#9E9E9E' : state === 'error' ? '#E9786B' : '#9E9E9E'
  return (
    <div style={{ width: 210 }}>
      <div style={{ paddingBottom: 8 }}>
        <span style={{ ...FONT, color: getLabelColor(state) }}>Label</span>
      </div>
      <div style={{ ...FIELD_BASE, border: getBorder(state), backgroundColor: getFieldBg(state) }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
          <path d="M4 10.5L8 14L16 6.5" stroke={checkColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ ...FONT, flex: 1, color: getTextColor(state) }}>Placeholder</span>
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <X size={18} color={iconColor} strokeWidth={1.5} />
          {isOpen
            ? <ChevronUp size={20} color={iconColor} strokeWidth={1.5} />
            : <ChevronDown size={20} color={iconColor} strokeWidth={1.5} />
          }
        </div>
      </div>
      {isOpen && (
        <div style={{ backgroundColor: 'white', borderRadius: 4, padding: 8, marginTop: 2, boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)' }}>
          <div style={{ height: 40, display: 'flex', alignItems: 'center', gap: 8, padding: 8 }}>
            <CheckboxIcon checked={true} />
            <span style={{ ...FONT, color: '#4a4a4a' }}>Menu item</span>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Select interativo ────────────────────────────────────────────────────────
const SELECT_OPTIONS = [
  { id: 'op1', label: 'Opção A' },
  { id: 'op2', label: 'Opção B' },
  { id: 'op3', label: 'Opção C' },
  { id: 'op4', label: 'Opção D' },
]

function InteractiveSelect({ label = 'Categoria' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleSelect = (id) => { setSelected(id); setIsOpen(false) }
  const selectedLabel = SELECT_OPTIONS.find(o => o.id === selected)?.label

  return (
    <div ref={ref} style={{ width: 240, position: 'relative' }}>
      <div style={{ paddingBottom: 8 }}>
        <span style={{ ...FONT, color: '#4A4A4A' }}>{label}</span>
      </div>
      <button
        onClick={() => setIsOpen(o => !o)}
        style={{ ...FIELD_BASE, width: '100%', border: isOpen ? '1px solid #304a64' : '1px solid #E9EFF2', background: 'transparent', cursor: 'pointer' }}
      >
        <span style={{ ...FONT, flex: 1, textAlign: 'left', color: selectedLabel ? '#4A4A4A' : '#666' }}>
          {selectedLabel || 'Selecione...'}
        </span>
        {isOpen
          ? <ChevronUp size={20} color="#304a64" strokeWidth={1.5} />
          : <ChevronDown size={20} color="#4A4A4A" strokeWidth={1.5} />
        }
      </button>
      {isOpen && <SelectMenu items={SELECT_OPTIONS} selectedId={selected} onSelect={handleSelect} />}
    </div>
  )
}

// ─── MultiSelect interativo ───────────────────────────────────────────────────
const MULTI_OPTIONS = [
  { id: 'op1', label: 'Opção A' },
  { id: 'op2', label: 'Opção B' },
  { id: 'op3', label: 'Opção C' },
  { id: 'op4', label: 'Opção D' },
]

function InteractiveMultiSelect({ label = 'Tags' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIds, setSelectedIds] = useState([])
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleToggle = (id) => setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  const removeFirst = (e) => { e.stopPropagation(); setSelectedIds(prev => prev.slice(1)) }

  const hasSelection = selectedIds.length > 0
  const firstSelected = MULTI_OPTIONS.find(o => o.id === selectedIds[0])
  const extraCount = selectedIds.length - 1

  return (
    <div ref={ref} style={{ width: 280, position: 'relative' }}>
      <div style={{ paddingBottom: 8 }}>
        <span style={{ ...FONT, color: '#4A4A4A' }}>{label}</span>
      </div>
      <button
        onClick={() => setIsOpen(o => !o)}
        style={{ ...FIELD_BASE, width: '100%', border: isOpen ? '1px solid #304a64' : '1px solid #E9EFF2', background: 'transparent', cursor: 'pointer' }}
      >
        {!hasSelection ? (
          <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
              <path d="M4 10.5L8 14L16 6.5" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ ...FONT, flex: 1, textAlign: 'left', color: '#666' }}>Selecione...</span>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 8, minWidth: 0 }}>
            {/* Primeiro item como chip */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <span style={{ ...FONT, color: '#666', whiteSpace: 'nowrap' }}>{firstSelected?.label}</span>
              <button
                onClick={removeFirst}
                style={{ background: 'none', border: 'none', padding: '0 0 0 2px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <X size={16} color="#666" strokeWidth={2} />
              </button>
            </div>
            {/* Badge de itens extras */}
            {extraCount > 0 && (
              <div style={{ backgroundColor: '#e6f4fd', borderRadius: 2, padding: '2px 8px', flexShrink: 0 }}>
                <span style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '0.1px', color: '#666' }}>
                  +{extraCount}
                </span>
              </div>
            )}
          </div>
        )}
        <div style={{ flexShrink: 0 }}>
          {isOpen
            ? <ChevronUp size={20} color="#304a64" strokeWidth={1.5} />
            : <ChevronDown size={20} color="#4A4A4A" strokeWidth={1.5} />
          }
        </div>
      </button>
      {isOpen && <MultiMenu items={MULTI_OPTIONS} selectedIds={selectedIds} onToggle={handleToggle} />}
    </div>
  )
}

// ─── Constantes da página ─────────────────────────────────────────────────────
const STATES = ['enabled', 'hovered', 'focused', 'disabled', 'error']
const STATE_LABELS = { enabled: 'Enabled', hovered: 'Hovered', focused: 'Focused', disabled: 'Disabled', error: 'Error' }

const TH_STYLE = { fontFamily: '"Red Hat Display", sans-serif', fontSize: 12, fontWeight: 500, color: '#9E9E9E', textTransform: 'capitalize', letterSpacing: '0.4px' }

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SelectPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Select"
          description="Componente de seleção em lista com suporte a seleção única (Select) e múltipla (Multi-Select), cinco estados e menu flutuante."
          showThemeToggle
        />

        {/* Select — Estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Select — Estados</h2>
          <p className="text-sm text-[#666666] mb-6">Cinco estados do componente de seleção única.</p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-36">Estado</th>
                  <th className="text-left p-4 text-sm font-medium text-[#13283C]">Componente</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map((state, i) => (
                  <tr key={state} className={i < STATES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666] align-top pt-6">{STATE_LABELS[state]}</td>
                    <td className="p-4">
                      <SelectStatic state={state} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Multi-Select — Estados */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Multi-Select — Estados</h2>
          <p className="text-sm text-[#666666] mb-6">Cinco estados do componente de seleção múltipla com checkbox e botão de limpar.</p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-36">Estado</th>
                  <th className="text-left p-4 text-sm font-medium text-[#13283C]">Componente</th>
                </tr>
              </thead>
              <tbody>
                {STATES.map((state, i) => (
                  <tr key={state} className={i < STATES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666] align-top pt-6">{STATE_LABELS[state]}</td>
                    <td className="p-4">
                      <MultiSelectStatic state={state} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interativo */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Interativo</h2>
          <p className="text-sm text-[#666666] mb-6">Clique para abrir o menu e selecionar opções.</p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex flex-wrap gap-12 items-start">
              <div>
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-4">Select</p>
                <InteractiveSelect label="Categoria" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-4">Multi-Select</p>
                <InteractiveMultiSelect label="Tags" />
              </div>
            </div>
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">Tokens utilizados nos estados do componente.</p>
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
                  { el: 'Border',      ctx: 'Enabled / Disabled',      token: '--divider',               val: '#E9EFF2',          color: '#E9EFF2' },
                  { el: 'Border',      ctx: 'Hovered / Focused',        token: '--blue-600',              val: '#304A64',          color: '#304A64' },
                  { el: 'Border',      ctx: 'Error',                    token: '--error',                 val: '#E9786B',          color: '#E9786B' },
                  { el: 'Background',  ctx: 'Disabled',                 token: 'states/black/disabledbg', val: 'rgba(0,0,0,0.12)', color: 'rgba(0,0,0,0.12)' },
                  { el: 'Placeholder', ctx: 'Enabled / Hovered',        token: 'text/secondary',          val: '#666666',          color: '#666666' },
                  { el: 'Texto',       ctx: 'Focused',                  token: 'text/primary',            val: '#4A4A4A',          color: '#4A4A4A' },
                  { el: 'Texto',       ctx: 'Disabled',                 token: 'text/disabled',           val: '#9E9E9E',          color: '#9E9E9E' },
                  { el: 'Texto',       ctx: 'Error',                    token: '--error',                 val: '#E9786B',          color: '#E9786B' },
                  { el: 'Ícones',      ctx: 'Hovered / Focused',        token: '--blue-600',              val: '#304A64',          color: '#304A64' },
                  { el: 'Menu',        ctx: 'Container background',     token: 'surface/surface1',        val: '#FFFFFF',          color: '#FFFFFF' },
                  { el: 'Menu',        ctx: 'Item selected',            token: '--blue-600',              val: '#304A64',          color: '#304A64' },
                  { el: 'Menu',        ctx: 'Item hovered',             token: 'states/black/hovered',    val: 'rgba(0,0,0,0.08)', color: 'rgba(0,0,0,0.08)' },
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
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Altura do campo',               '40px'],
              ['Padding do campo',              '8px esquerda, 12px direita, 4px topo/base'],
              ['Gap (ícone + texto)',            '12px'],
              ['Border radius',                 '4px'],
              ['Border — enabled / disabled',   '#E9EFF2 — var(--divider)'],
              ['Border — hovered / focused',    '#304A64 — var(--blue-600)'],
              ['Border — error',                '#E9786B — var(--error)'],
              ['Background — disabled',         'rgba(0,0,0,0.12)'],
              ['Placeholder',                   '#666666 — text/secondary'],
              ['Texto ativo (focused)',          '#4A4A4A — text/primary'],
              ['Texto / ícone disabled',        '#9E9E9E — text/disabled'],
              ['Texto / ícone error',           '#E9786B — var(--error)'],
              ['Checkbox (Multi-Select)',        '18×18px, border-radius 2px'],
              ['Menu — border-radius',          '4px'],
              ['Menu — padding',                '8px'],
              ['Menu — sombra (Elevation/2)',   '0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.3)'],
              ['Tipografia',                    '14px / 400 / 20px, letter-spacing 0.25px, Red Hat Display'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[300px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
