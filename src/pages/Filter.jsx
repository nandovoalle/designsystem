import { useState, useRef, useEffect } from 'react'
import { PageHeader } from '../components/PageHeader'
import {
  X,
  Plus,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

function IconApps({ size = 24, color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <path d="M183.5-663.5Q160-687 160-720t23.5-56.5Q207-800 240-800t56.5 23.5Q320-753 320-720t-23.5 56.5Q273-640 240-640t-56.5-23.5ZM423.5-663.5Q400-687 400-720t23.5-56.5Q447-800 480-800t56.5 23.5Q560-753 560-720t-23.5 56.5Q513-640 480-640t-56.5-23.5ZM663.5-663.5Q640-687 640-720t23.5-56.5Q687-800 720-800t56.5 23.5Q800-753 800-720t-23.5 56.5Q753-640 720-640t-56.5-23.5ZM183.5-423.5Q160-447 160-480t23.5-56.5Q207-560 240-560t56.5 23.5Q320-513 320-480t-23.5 56.5Q273-400 240-400t-56.5-23.5ZM423.5-423.5Q400-447 400-480t23.5-56.5Q447-560 480-560t56.5 23.5Q560-513 560-480t-23.5 56.5Q513-400 480-400t-56.5-23.5ZM663.5-423.5Q640-447 640-480t23.5-56.5Q687-560 720-560t56.5 23.5Q800-513 800-480t-23.5 56.5Q753-400 720-400t-56.5-23.5ZM183.5-183.5Q160-207 160-240t23.5-56.5Q207-320 240-320t56.5 23.5Q320-273 320-240t-23.5 56.5Q273-160 240-160t-56.5-23.5ZM423.5-183.5Q400-207 400-240t23.5-56.5Q447-320 480-320t56.5 23.5Q560-273 560-240t-23.5 56.5Q513-160 480-160t-56.5-23.5ZM663.5-183.5Q640-207 640-240t23.5-56.5Q687-320 720-320t56.5 23.5Q800-273 800-240t-23.5 56.5Q753-160 720-160t-56.5-23.5Z"/>
    </svg>
  )
}

function IconReorder({ size = 24, color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <path d="M120-200v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z"/>
    </svg>
  )
}

function IconStarOutline({ width = 20, height = 19, color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960" fill={color}>
      <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/>
    </svg>
  )
}

function IconStarFilled({ width = 20, height = 19, color = '#f9a825' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -960 960 960" fill={color}>
      <path d="m233-80 65-281-218-189 288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
    </svg>
  )
}

function IconCheckBadge() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14.7692" height="14.4" rx="7.2" fill="#0094EE"/>
      <path d="M6.15392 10.0923L3.69238 7.63076L4.55392 6.76922L6.15392 8.36922L10.2155 4.30768L11.077 5.16922L6.15392 10.0923Z" fill="white"/>
    </svg>
  )
}

function IconFilterAdd({ width = 18, height = 14 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.65136 15C6.40008 15 6.18982 14.9153 6.02058 14.7461C5.85135 14.5769 5.76673 14.3666 5.76673 14.1153V8.32688L0.168684 1.21538C-0.0236161 0.95896 -0.0514992 0.692293 0.0850341 0.415376C0.221567 0.13846 0.452009 0 0.776359 0H13.7571C14.0814 0 14.3119 0.13846 14.4484 0.415376C14.5849 0.692293 14.557 0.95896 14.3647 1.21538L8.76668 8.32688V14.1153C8.76668 14.3666 8.68207 14.5769 8.51283 14.7461C8.3436 14.9153 8.13334 15 7.88206 15H6.65136ZM7.26671 7.79998L12.2167 1.49998H2.31671L7.26671 7.79998Z" fill="#9CB1C8"/>
      <path d="M14.2667 15.5V12.5H11.2667V10.5H14.2667V7.49998H16.2667V10.5H19.2667V12.5H16.2667V15.5H14.2667Z" fill="#9CB1C8"/>
    </svg>
  )
}

/* ─── Field sub-components ─── */

const FONT = { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', letterSpacing: '0.25px' }
const FIELD_BASE = { borderRadius: 4, height: 40, display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 8, paddingRight: 12 }

function SelectMenu({ items, selectedId, onSelect }) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: 4,
      padding: 8,
      boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
      position: 'absolute',
      top: 'calc(100% + 2px)',
      left: 0,
      right: 0,
      zIndex: 50,
    }}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect?.(item.id)}
          style={{ height: 40, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 4, cursor: 'pointer', backgroundColor: selectedId === item.id ? '#304a64' : 'transparent' }}
          onMouseEnter={e => { if (selectedId !== item.id) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)' }}
          onMouseLeave={e => { if (selectedId !== item.id) e.currentTarget.style.backgroundColor = 'transparent' }}
        >
          <span style={{ ...FONT, flex: 1, color: selectedId === item.id ? '#ffffff' : '#4a4a4a' }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

function TextField({ label, placeholder = 'Placeholder', leadingIcon = false }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const borderColor = focused ? '#304a64' : '#E9EFF2'
  const iconColor = '#9e9e9e'

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div style={{ paddingBottom: 8 }}>
        <span style={{ ...FONT, color: '#4A4A4A' }}>{label}</span>
      </div>
      <div
        style={{
          ...FIELD_BASE,
          width: '100%',
          border: `1px solid ${borderColor}`,
          background: 'transparent',
          boxSizing: 'border-box',
        }}
      >
        {leadingIcon && (
          <Search size={18} color={iconColor} strokeWidth={2} style={{ flexShrink: 0 }} />
        )}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => setValue(e.target.value)}
          style={{
            ...FONT,
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: value ? '#4A4A4A' : '#9e9e9e',
            minWidth: 0,
          }}
        />
      </div>
    </div>
  )
}

function SearchInput({ placeholder = 'Filtrar itens' }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const borderColor = focused ? '#304a64' : '#E9EFF2'

  return (
    <div
      style={{
        ...FIELD_BASE,
        width: '100%',
        border: `1px solid ${borderColor}`,
        background: 'transparent',
        boxSizing: 'border-box',
      }}
    >
      <Search size={18} color="#9e9e9e" strokeWidth={2} style={{ flexShrink: 0 }} />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => setValue(e.target.value)}
        style={{
          ...FONT,
          flex: 1,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          color: value ? '#4A4A4A' : '#9e9e9e',
          minWidth: 0,
        }}
      />
    </div>
  )
}

const LOCAL_OPTIONS = [
  { id: 'op1', label: 'Filial São Paulo' },
  { id: 'op2', label: 'Filial Rio de Janeiro' },
  { id: 'op3', label: 'Filial Belo Horizonte' },
  { id: 'op4', label: 'Filial Curitiba' },
]

function SelectField({ label, options = LOCAL_OPTIONS }) {
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
  const selectedLabel = options.find(o => o.id === selected)?.label

  return (
    <div ref={ref} style={{ width: '100%', position: 'relative' }}>
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
      {isOpen && <SelectMenu items={options} selectedId={selected} onSelect={handleSelect} />}
    </div>
  )
}

/* ─── Collapsed sidebar ─── */

function CollapsedSidebar() {
  return (
    <div className="relative bg-white border border-[#e9eff2] flex flex-col items-center py-[16px] rounded-[4px] shrink-0 w-[40px] h-[500px]">
      {/* Badge */}
      <div className="absolute left-[20px] top-[15px] bg-[#e9786b] flex items-center justify-center overflow-clip px-[4px] rounded-[100px] min-w-[16px] max-w-[34px]">
        <p className="font-medium text-[11px] leading-[16px] tracking-[0.5px] text-white text-center whitespace-nowrap" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
          2
        </p>
      </div>
      {/* Expand button */}
      <div className="flex gap-[8px] h-[40px] items-center w-full">
        <div className="flex items-center justify-center p-[8px] shrink-0">
          <ChevronRight size={24} className="text-[#4a4a4a]" />
        </div>
      </div>
    </div>
  )
}

/* ─── Advanced search panel (updated) ─── */

function AdvancedSearchPanel() {
  return (
    <div className="relative bg-white border border-[#e9eff2] flex flex-col gap-[42px] items-start p-[24px] rounded-[4px] shrink-0 w-[288px]">

      {/* Recolher button — top-right */}
      <button className="absolute top-[15px] right-[15px] flex flex-col gap-[8px] items-center size-[40px]">
        <div className="flex items-center justify-center p-[8px] rounded-[4px]">
          <ChevronLeft size={24} className="text-[#4a4a4a]" />
        </div>
      </button>

      <div className="flex flex-col gap-[24px] items-start w-full">

        {/* Exibição */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          <p className="font-bold leading-[24px] text-[16px] text-[#4a4a4a] tracking-[0.15px] w-full" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
            Exibição
          </p>
          <div className="relative flex gap-[16px] items-center justify-center w-full">
            {/* Cards — active */}
            <button className="w-[112px] h-[32px] rounded-[4px] shrink-0">
              <div className="bg-[#e6f4fd] border-2 border-[#0094ee] flex w-full h-full items-center justify-center px-[8px] py-[4px] rounded-[4px]">
                <IconApps size={24} color="#0094ee" />
              </div>
            </button>
            {/* Checkmark indicator */}
            <div className="absolute left-[101px] top-[-5px]">
              <IconCheckBadge />
            </div>
            {/* Lista — inactive */}
            <button className="w-[112px] h-[32px] rounded-[4px] shrink-0">
              <div className="border-2 border-[#e9eff2] flex w-full h-full items-center justify-center px-[8px] py-[4px] rounded-[4px]">
                <IconReorder size={24} color="#4a4a4a" />
              </div>
            </button>
          </div>
        </div>

        {/* Nome chips */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          <p className="font-normal h-[20px] leading-[20px] text-[14px] text-[#4a4a4a] tracking-[0.25px] w-full" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
            Nome
          </p>
          <div className="flex gap-[11px] items-center w-full">
            <div className="bg-[#0094ee] flex flex-1 h-[24px] items-center justify-center min-w-0 rounded-[4px]">
              <div className="flex flex-1 h-[24px] items-center justify-center min-w-0 px-[8px] py-[4px] rounded-[4px]">
                <p className="font-medium leading-[16px] text-[12px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                  Categorização
                </p>
              </div>
            </div>
            <div className="bg-[#9e9e9e] flex flex-1 h-[24px] items-center justify-center min-w-0 rounded-[4px]">
              <div className="flex flex-1 h-[24px] items-center justify-center min-w-0 px-[8px] py-[4px] rounded-[4px]">
                <p className="font-medium leading-[16px] text-[12px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                  Legado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pesquisa avançada */}
        <div className="flex flex-col items-start w-full">
          {/* Header */}
          <div className="flex flex-col gap-[8px] items-end pb-[8px] w-full">
            <div className="flex flex-col gap-[16px] items-start text-[#4a4a4a] w-full">
              <p className="font-bold leading-[24px] text-[16px] tracking-[0.15px] w-full" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                Pesquisa avançada
              </p>
              <p className="font-normal leading-[20px] text-[14px] tracking-[0.25px] w-full" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                Crie e favorite filtros personalizados para atender às suas necessidades.
              </p>
            </div>
            <div className="flex items-center justify-end shrink-0">
              <button className="flex flex-col gap-[8px] items-center shrink-0 size-[40px]">
                <div className="flex items-center justify-center p-[8px] rounded-[4px]">
                  <IconStarOutline width={20} height={19} color="#9CB1C8" />
                </div>
              </button>
              <button className="flex flex-col gap-[8px] items-center shrink-0 size-[40px]">
                <div className="flex items-center justify-center p-[8px] rounded-[4px]">
                  <span className="translate-y-[3px] inline-flex"><IconFilterAdd /></span>
                </div>
              </button>
            </div>
          </div>

          {/* Filter fields */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            <TextField label="Nome" />
            <SelectField label="Local" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-[16px] items-center shrink-0 w-[245px]">
        <button className="border border-[#304a64] flex flex-1 flex-col h-[40px] items-center justify-center min-w-0 rounded-[4px]">
          <div className="flex h-[40px] items-center justify-center px-[24px] py-[10px] rounded-[4px] w-full">
            <p className="font-medium leading-[20px] text-[14px] text-[#304a64] tracking-[0.1px] whitespace-nowrap" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
              Limpar
            </p>
          </div>
        </button>
        <button className="bg-[#304a64] flex flex-1 flex-col h-[40px] items-center justify-center min-w-0 rounded-[4px]">
          <div className="flex h-[40px] items-center justify-center px-[24px] py-[10px] rounded-[4px] w-full">
            <p className="font-medium leading-[20px] text-[14px] text-white tracking-[0.1px] whitespace-nowrap" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
              Filtrar
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}

/* ─── Add filter panel ─── */

const ACTIVE_FILTERS = ['Fornecedor', 'Local', 'Conta', 'Vencimento de - até', 'Status']
const INACTIVE_FILTERS = ['Natureza Financeira', 'Projeto', 'Condição de Pgto']

function AddFilterPanel() {
  return (
    <div
      className="bg-white flex flex-col gap-[24px] items-start p-[16px] rounded-[4px] shrink-0 w-[238px]"
      style={{ boxShadow: '0px 1px 1px rgba(0,0,0,0.3), 0px 2px 3px rgba(0,0,0,0.15)' }}
    >
      {/* Search */}
      <SearchInput placeholder="Filtrar itens" />

      {/* Filter options */}
      <div className="flex flex-col items-start w-full">
        {/* Active — X to remove */}
        <div className="border-b border-[#e9eff2] flex flex-col items-start pb-[4px] w-full">
          {ACTIVE_FILTERS.map((name) => (
            <div key={name} className="flex flex-col h-[40px] items-start justify-center shrink-0 w-full">
              <div className="flex gap-[8px] items-center p-[8px] rounded-[4px] w-full">
                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <p className="font-normal leading-[20px] text-[14px] text-[#4a4a4a] tracking-[0.25px]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                    {name}
                  </p>
                </div>
                <X size={20} className="shrink-0 text-[#e53935]" />
              </div>
            </div>
          ))}
        </div>

        {/* Inactive — + to add */}
        <div className="flex flex-col items-start pt-[4px] w-full">
          {INACTIVE_FILTERS.map((name) => (
            <div key={name} className="flex flex-col h-[40px] items-start justify-center shrink-0 w-full">
              <div className="flex gap-[8px] items-center p-[8px] rounded-[4px] w-full">
                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <p className="font-normal leading-[20px] text-[14px] text-[#4a4a4a] tracking-[0.25px]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                    {name}
                  </p>
                </div>
                <Plus size={20} className="shrink-0 text-[#9CB1C8]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Favorites panel ─── */

const FAVORITES = [
  { name: 'Atividades',  starred: true },
  { name: 'Protocolos', starred: false },
  { name: 'Pra hoje',   starred: false },
  { name: 'Atrasadas',  starred: false },
]

function FavoritesPanel() {
  return (
    <div
      className="bg-white flex flex-col gap-[24px] items-start p-[16px] rounded-[4px] shrink-0 w-[238px]"
      style={{ boxShadow: '0px 1px 1px rgba(0,0,0,0.3), 0px 2px 3px rgba(0,0,0,0.15)' }}
    >
      {/* Favorites list */}
      <div className="border-b border-[#e9eff2] flex flex-col items-start pb-[4px] w-full">
        {FAVORITES.map(({ name, starred }) => (
          <div key={name} className="flex flex-col h-[40px] items-start justify-center shrink-0 w-full">
            <div className="flex gap-[8px] items-center p-[8px] rounded-[4px] w-full">
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <p className="font-normal leading-[20px] text-[14px] text-[#4a4a4a] tracking-[0.25px]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
                  {name}
                </p>
              </div>
              {starred
                ? <IconStarFilled width={20} height={19} />
                : <IconStarOutline width={20} height={19} color="#9e9e9e" />
              }
              <X size={20} className="shrink-0 text-[#e53935] translate-y-[2px]" />
            </div>
          </div>
        ))}
      </div>

      {/* Título field */}
      <div className="flex flex-col items-start w-full">
        <div className="flex items-start pb-[8px] pr-[8px] shrink-0 w-[210px]">
          <p className="flex-1 font-normal leading-[20px] text-[14px] text-[#4a4a4a] tracking-[0.25px]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
            Título
          </p>
        </div>
        <div className="border border-[#e9eff2] flex h-[40px] items-center px-[8px] py-[4px] rounded-[4px] w-full">
          <p className="flex-1 font-normal leading-[20px] text-[14px] text-[#4a4a4a] tracking-[0.25px]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
            Atividades
          </p>
        </div>
      </div>

      {/* Salvar */}
      <button className="bg-[#304a64] flex flex-col h-[40px] items-center justify-center rounded-[4px] shrink-0 w-full">
        <div className="flex h-[40px] items-center justify-center px-[24px] py-[10px] rounded-[4px] w-full">
          <p className="font-medium leading-[20px] text-[14px] text-white tracking-[0.1px] whitespace-nowrap" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
            Salvar
          </p>
        </div>
      </button>
    </div>
  )
}

/* ─── Page helpers ─── */

function PreviewPanel({ children, isDark, stage = false, className = '' }) {
  const lightBg = stage ? 'bg-[#f5f5f5]' : 'bg-white'
  return (
    <div
      className={`rounded-[16px] border overflow-auto p-8 ${className} ${
        isDark ? 'bg-[#32353A] border-[#4B4E52]' : `${lightBg} border-black/10`
      }`}
    >
      {children}
    </div>
  )
}

function SectionTitle({ children, isDark, className = 'mb-1' }) {
  return (
    <h2 className={`text-xl font-medium ${className} ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
      {children}
    </h2>
  )
}

function SectionDesc({ children, isDark, className = 'mb-6' }) {
  return (
    <p className={`text-sm ${className} ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>
      {children}
    </p>
  )
}

/* ─── Main page ─── */

export default function FilterPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Filter"
          description="Componentes de filtro avançado com seletor de exibição, chips de nome e pesquisa avançada."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Preview completo */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Preview</SectionTitle>
          <SectionDesc isDark={isDark}>
            Layout completo — barra lateral recolhida, painel de filtros, seletor de filtros e gestão de favoritos.
          </SectionDesc>
          <PreviewPanel isDark={isDark} stage>
            <div className="flex gap-[10px] items-start overflow-x-auto">
              <CollapsedSidebar />
              <AdvancedSearchPanel />
              <AddFilterPanel />
              <FavoritesPanel />
            </div>
          </PreviewPanel>
        </div>

        {/* Barra lateral */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Barra Lateral</SectionTitle>
          <SectionDesc isDark={isDark}>
            Estado recolhido (40 px) e estado expandido (288 px) — alternados pelo botão de chevron.
          </SectionDesc>
          <PreviewPanel isDark={isDark} stage>
            <div className="flex gap-8 items-start justify-center flex-wrap">
              <div className="flex flex-col items-center gap-3">
                <CollapsedSidebar />
                <span className={`text-xs ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>Recolhida</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <AdvancedSearchPanel />
                <span className={`text-xs ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>Expandida</span>
              </div>
            </div>
          </PreviewPanel>
        </div>

        {/* Painéis flutuantes */}
        <div className="mb-12">
          <SectionTitle isDark={isDark}>Painéis Flutuantes</SectionTitle>
          <SectionDesc isDark={isDark}>
            Seletor de filtros (adicionar / remover campos) e gestão de favoritos — exibidos como popovers sobre o conteúdo.
          </SectionDesc>
          <PreviewPanel isDark={isDark} stage>
            <div className="flex gap-8 items-start justify-center flex-wrap">
              <div className="flex flex-col items-center gap-3">
                <AddFilterPanel />
                <span className={`text-xs ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>Seletor de Filtros</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FavoritesPanel />
                <span className={`text-xs ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>Filtros Favoritos</span>
              </div>
            </div>
          </PreviewPanel>
        </div>

        {/* Especificações Técnicas */}
        <div className="mb-12">
          <SectionTitle isDark={isDark} className="mb-1">Especificações Técnicas</SectionTitle>
          <SectionDesc isDark={isDark}>Medidas, cores e tipografia dos subcomponentes de filtro.</SectionDesc>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'border-[#4B4E52]' : 'border-black/10'}`}>
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isDark ? 'border-[#4B4E52] bg-[#32353A]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Elemento</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Especificação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Painel principal',           '288 × auto px · border-radius 4px · padding 24px · gap 42px'],
                  ['Barra lateral recolhida',    '40 × auto px · border-radius 4px · py-16px · badge vermelho #E9786B'],
                  ['Painéis flutuantes',         '238 × auto px · border-radius 4px · padding 16px · gap 24px'],
                  ['Sombra flutuante',           '0px 1px 1px rgba(0,0,0,0.30) + 0px 2px 3px rgba(0,0,0,0.15)'],
                  ['Toggle Exibição — ativo',    'bg #E6F4FD · border-2 #0094EE · ícone #0094EE · checkmark badge'],
                  ['Toggle Exibição — inativo',  'border-2 #E9EFF2 · sem background colorido'],
                  ['Chip ativo (Categorização)', 'bg #0094EE · texto branco · h-24px · border-radius 4px · px-8px'],
                  ['Chip inativo (Legado)',       'bg #9E9E9E · texto branco · h-24px · border-radius 4px · px-8px'],
                  ['Campos texto / select',      'h-40px · border 1px #E9EFF2 · border-radius 4px · focus #304A64'],
                  ['Botão primário (Filtrar)',   'bg #304A64 · texto branco · h-40px · border-radius 4px'],
                  ['Botão outline (Limpar)',     'border + texto #304A64 · h-40px · border-radius 4px'],
                  ['Ícone ✕ (remover)',          'Lucide X 20px · cor #E53935'],
                  ['Ícone + (adicionar)',        'Lucide Plus 20px · cor #9CB1C8'],
                  ['Estrela favorito',           'Preenchida #F9A825 · Vazia #9E9E9E'],
                  ['Tipografia — labels',        'Red Hat Display Regular 14px / 20px · letter-spacing 0.25px'],
                  ['Tipografia — títulos',       'Red Hat Display Bold 16px / 24px · letter-spacing 0.15px'],
                  ['Tipografia — chips',         'Red Hat Display Medium 12px / 16px · letter-spacing 0.5px'],
                  ['Tipografia — botões',        'Red Hat Display Medium 14px / 20px · letter-spacing 0.1px'],
                ].map(([label, value], i, arr) => (
                  <tr
                    key={label}
                    className={i < arr.length - 1 ? `border-b ${isDark ? 'border-[#4B4E52]' : 'border-[#E9EFF2]'}` : ''}
                  >
                    <td className={`p-4 font-medium whitespace-nowrap ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{label}</td>
                    <td className={`p-4 ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
