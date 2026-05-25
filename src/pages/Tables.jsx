import { useState, useMemo, useRef } from 'react'
import { PageHeader } from '../components/PageHeader'
import {
  ChevronUp, ChevronDown,
  ChevronsUpDown,
  CheckCircle2, Clock, XCircle, AlertCircle,
} from 'lucide-react'
import { PaginationUnit } from './Pagination'
import { IconButton } from './IconButton'
import { Chip } from './Chips'
import { TextFieldLeadingIcon } from './TextField'
import { RefreshPgv } from '../components/icons/refresh_pgv'
import minhaImagem from '../assets/empty-state.png'
import { Menu } from './Menu'

// ─── Checkbox ─────────────────────────────────────────────────────────────────
function Checkbox({ checked, indeterminate = false, onChange, disabled = false }) {
  const color = disabled ? '#BDBDBD' : checked || indeterminate ? '#304A64' : '#304A64'
  const stroke = disabled ? '#BDBDBD' : '#616161'

  return (
    <button
      onClick={!disabled ? onChange : undefined}
      disabled={disabled}
      className="flex items-center justify-center p-2 rounded hover:bg-black/8 transition-colors"
      style={{ cursor: disabled ? 'default' : 'pointer', flexShrink: 0 }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        {checked && !indeterminate ? (
          <>
            <rect width="18" height="18" rx="2" fill={color} />
            <path d="M4.5 9L7.5 12L13.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : indeterminate ? (
          <>
            <rect width="18" height="18" rx="2" fill={color} />
            <path d="M4.5 9H13.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : (
          <rect x="1" y="1" width="16" height="16" rx="1.5" stroke={disabled ? '#BDBDBD' : stroke} strokeWidth="1.5" />
        )}
      </svg>
    </button>
  )
}

// ─── Status Badge ──────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  pago:       { label: 'Pago',       color: '#16A34A', bg: '#DCFCE7', Icon: CheckCircle2 },
  pendente:   { label: 'Pendente',   color: '#D97706', bg: '#FEF3C7', Icon: Clock },
  cancelado:  { label: 'Cancelado',  color: '#DC2626', bg: '#FEE2E2', Icon: XCircle },
  processando:{ label: 'Processando',color: '#2563EB', bg: '#DBEAFE', Icon: AlertCircle },
}

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status]
  if (!cfg) return null
  const { label, color, bg, Icon } = cfg
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
      style={{ color, backgroundColor: bg, fontFamily: '"Red Hat Display", sans-serif', whiteSpace: 'nowrap' }}
    >
      <Icon size={12} />
      {label}
    </span>
  )
}

// ─── Sort Icon ─────────────────────────────────────────────────────────────────
function SortIcon({ direction }) {
  if (direction === 'asc')  return <ChevronUp size={14} className="text-[#304A64]" />
  if (direction === 'desc') return <ChevronDown size={14} className="text-[#304A64]" />
  return <ChevronsUpDown size={14} className="text-[#9E9E9E]" />
}

// ─── Empty State ───────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3">
      <img src={minhaImagem} alt="Sem resultados" style={{ width: 200, height: 'auto' }} />
      <p
        className="text-sm text-[#9E9E9E]"
        style={{ fontFamily: '"Red Hat Display", sans-serif' }}
      >
        Sem resultado de busca no momento.
      </p>
    </div>
  )
}

// ─── Refresh Timer Button ──────────────────────────────────────────────────────
function RefreshTimerButton({ onClick }) {
  const [hovered, setHovered] = useState(false)
  const color = 'var(--blue-200)'
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title="Intervalo: 15 min"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: 40, padding: '8px 2px', borderRadius: 4,
        background: hovered ? 'rgba(156,177,200,0.08)' : 'transparent',
        border: 'none', cursor: 'pointer', transition: 'background-color 0.1s ease',
      }}
    >
      <RefreshPgv />
      <svg width="8.333" height="4.167" viewBox="0 0 10 5" fill="none">
        <path d="M0 0l5 5 5-5z" fill="var(--text-secondary)" />
      </svg>
    </button>
  )
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const ALL_ROWS = [
  { id: 1,  titulo: 'Pagamento de fornecedor',    valor: 1250.00, status: 'pago' },
  { id: 2,  titulo: 'Assinatura mensal SaaS',      valor: 299.90,  status: 'pago' },
  { id: 3,  titulo: 'Nota fiscal #4821',           valor: 3780.50, status: 'pendente' },
  { id: 4,  titulo: 'Reembolso colaborador',       valor: 420.00,  status: 'processando' },
  { id: 5,  titulo: 'Transferência entre contas',  valor: 8500.00, status: 'pago' },
  { id: 6,  titulo: 'Boleto energia elétrica',     valor: 612.30,  status: 'cancelado' },
  { id: 7,  titulo: 'Licença software anual',      valor: 1980.00, status: 'pendente' },
  { id: 8,  titulo: 'Serviços de consultoria',     valor: 5200.00, status: 'pago' },
  { id: 9,  titulo: 'Pagamento parcela 3/6',       valor: 750.00,  status: 'processando' },
  { id: 10, titulo: 'Imposto municipal ISSQN',     valor: 320.45,  status: 'pendente' },
  { id: 11, titulo: 'Taxa de manutenção mensal',   valor: 180.00,  status: 'pago' },
  { id: 12, titulo: 'Adiantamento salarial',       valor: 2000.00, status: 'cancelado' },
  { id: 13, titulo: 'Crédito estorno #7743',       valor: 95.00,   status: 'pago' },
  { id: 14, titulo: 'Aquisição de equipamentos',   valor: 12300.00,status: 'processando' },
  { id: 15, titulo: 'Plano de saúde empresarial',  valor: 4670.80, status: 'pago' },
]

const PAGE_SIZE_OPTIONS = [5, 7, 10]

// ─── Interactive Table ─────────────────────────────────────────────────────────
function InteractiveTable() {
  const [search,     setSearch]     = useState('')
  const [sortCol,    setSortCol]    = useState(null)
  const [sortDir,    setSortDir]    = useState('asc')
  const [selected,   setSelected]   = useState(new Set())
  const [page,       setPage]       = useState(1)
  const [pageSize,   setPageSize]   = useState(7)
  const [hoveredRow,    setHoveredRow]    = useState(null)
  const [pageSizeOpen,  setPageSizeOpen]  = useState(false)
  const pageSizeTriggerRef = useRef(null)

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return ALL_ROWS.filter(r =>
      r.titulo.toLowerCase().includes(q) || r.status.toLowerCase().includes(q)
    )
  }, [search])

  const sorted = useMemo(() => {
    if (!sortCol) return filtered
    return [...filtered].sort((a, b) => {
      const av = a[sortCol], bv = b[sortCol]
      const cmp = typeof av === 'string' ? av.localeCompare(bv) : av - bv
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [filtered, sortCol, sortDir])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const safePage   = Math.min(page, totalPages)
  const pageRows   = sorted.slice((safePage - 1) * pageSize, safePage * pageSize)

  const allChecked    = pageRows.length > 0 && pageRows.every(r => selected.has(r.id))
  const someChecked   = pageRows.some(r => selected.has(r.id)) && !allChecked
  const selectedCount = selected.size

  function toggleSort(col) {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortCol(col); setSortDir('asc') }
    setPage(1)
  }

  function toggleRow(id) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function toggleAll() {
    if (allChecked) {
      setSelected(prev => { const n = new Set(prev); pageRows.forEach(r => n.delete(r.id)); return n })
    } else {
      setSelected(prev => { const n = new Set(prev); pageRows.forEach(r => n.add(r.id)); return n })
    }
  }

  function handleSearch(v) { setSearch(v); setPage(1); setSelected(new Set()) }

  const colHeader = (label, col, align = 'left') => (
    <th
      onClick={() => toggleSort(col)}
      className="select-none cursor-pointer"
      style={{
        padding: '0 12px',
        height: 40,
        textAlign: align,
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: 13,
        fontWeight: 500,
        color: '#4A4A4A',
        whiteSpace: 'nowrap',
      }}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        <SortIcon direction={sortCol === col ? sortDir : null} />
      </span>
    </th>
  )

  return (
    <div
      className="bg-white rounded-[14px] border border-black/10"
      style={{ fontFamily: '"Red Hat Display", sans-serif' }}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-[40px] py-3 border-b border-[#E9EFF2]">
        <span style={{
          color: 'var(--text-primary, #4A4A4A)',
          textAlign: 'center',
          fontFamily: '"Red Hat Display"',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '24px',
          letterSpacing: '0.15px',
        }}>Transações</span>
        <div className="flex items-center gap-2">
          <TextFieldLeadingIcon
            value={search}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Pesquisar"
          />
          <RefreshTimerButton onClick={() => { setSearch(''); setPage(1); setSelected(new Set()); setSortCol(null) }} />
          <IconButton icon="more_vert" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-[40px]">
        <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0 4px' }}>
          <thead>
            <tr>
              <th style={{ width: 40, padding: '12px' }}>
                <Checkbox
                  checked={allChecked}
                  indeterminate={someChecked}
                  onChange={toggleAll}
                />
              </th>
              {colHeader('Título', 'titulo')}
              {colHeader('Valor (R$)', 'valor', 'right')}
              <th style={{ padding: '0 12px', height: 40, textAlign: 'center', fontFamily: '"Red Hat Display", sans-serif', fontSize: 13, fontWeight: 500, color: '#4A4A4A' }}>
                Status
              </th>
              <th style={{ width: 112, padding: '0 12px', height: 40, textAlign: 'center', fontFamily: '"Red Hat Display", sans-serif', fontSize: 13, fontWeight: 500, color: '#4A4A4A', whiteSpace: 'nowrap' }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <EmptyState />
                </td>
              </tr>
            ) : (
              pageRows.map(row => {
                const isSelected = selected.has(row.id)
                const isHovered  = hoveredRow === row.id && !isSelected
                const b = isSelected ? '2px solid #0094EE' : '1px solid #E9EFF2'
                return (
                  <tr
                    key={row.id}
                    onMouseEnter={() => setHoveredRow(row.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    style={{
                      backgroundColor: isSelected ? '#E6F4FD' : isHovered ? '#F5F9FF' : 'white',
                      transition: 'background-color 0.12s ease',
                    }}
                  >
                    <td style={{ width: 40, height: 64, padding: '12px', borderTop: b, borderBottom: b, borderLeft: b, borderRadius: '4px 0 0 4px' }}>
                      <Checkbox
                        checked={isSelected}
                        onChange={() => toggleRow(row.id)}
                      />
                    </td>
                    <td style={{ padding: '12px', height: 64, fontSize: 14, color: '#4A4A4A', borderTop: b, borderBottom: b }}>
                      {row.titulo}
                    </td>
                    <td style={{ padding: '12px', height: 64, fontSize: 14, color: '#4A4A4A', textAlign: 'right', fontVariantNumeric: 'tabular-nums', borderTop: b, borderBottom: b }}>
                      {row.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '12px', height: 64, textAlign: 'center', borderTop: b, borderBottom: b }}>
                      <Chip label={STATUS_CONFIG[row.status]?.label ?? row.status} size="xs" />
                    </td>
                    <td style={{ padding: '0 4px', height: 64, textAlign: 'center', whiteSpace: 'nowrap', borderTop: b, borderBottom: b, borderRight: b, borderRadius: '0 4px 4px 0' }}>
                      <div className="inline-flex items-center">
                        <IconButton icon="visibility" title="Visualizar" />
                        <IconButton icon="delete" title="Excluir" />
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex items-center justify-between px-[40px] py-1 bg-white">
        <span className="text-xs text-[#9E9E9E]">
          {selectedCount > 0
            ? `${selectedCount} ${selectedCount === 1 ? 'registro selecionado' : 'registros selecionados'}`
            : ''}
        </span>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              ref={pageSizeTriggerRef}
              onClick={() => setPageSizeOpen(o => !o)}
              onBlur={() => setTimeout(() => setPageSizeOpen(false), 150)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <span style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontSize: 12, fontWeight: 400, lineHeight: '16px',
                letterSpacing: '0.4px', color: '#4a4a4a', whiteSpace: 'nowrap',
              }}>
                Registro(s) por página: {pageSize}
              </span>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#4a4a4a', lineHeight: 1 }}>
                arrow_drop_down
              </span>
            </button>
            {pageSizeOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, zIndex: 20 }}>
                <Menu
                  items={PAGE_SIZE_OPTIONS.map(s => ({ label: String(s), value: s, selected: s === pageSize }))}
                  onSelect={(val) => { setPageSize(val); setPage(1); setPageSizeOpen(false) }}
                  width={pageSizeTriggerRef.current ? Math.round(pageSizeTriggerRef.current.offsetWidth / 2) : undefined}
                />
              </div>
            )}
          </div>
          <PaginationUnit
            currentPage={safePage}
            totalPages={totalPages}
            pageSize={pageSize}
            totalItems={sorted.length}
            onPrev={() => setPage(p => Math.max(1, p - 1))}
            onNext={() => setPage(p => Math.min(totalPages, p + 1))}
          />
        </div>
      </div>
    </div>
  )
}

// ─── Static Preview Table ──────────────────────────────────────────────────────
function StaticPreview({ title, rows, selectedIds = [], emptyState = false, showCheckbox = true, showToolbar = true }) {
  const previewRows = rows.slice(0, 5)
  return (
    <div className="bg-white rounded-xl border border-black/10 overflow-hidden" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>
      {showToolbar && (
        <div className="flex items-center justify-between px-[40px] py-2.5 border-b border-[#E9EFF2]">
          <span className="text-sm font-medium text-[#13283C]">{title}</span>
          <div className="flex items-center gap-2">
            <TextFieldLeadingIcon placeholder="Pesquisar" value="" onChange={() => {}} />
            <RefreshTimerButton />
            <IconButton icon="more_vert" />
          </div>
        </div>
      )}
      <div className="px-[40px]">
      <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0 4px' }}>
        <thead>
          <tr>
            {showCheckbox && <th style={{ width: 40, padding: '12px' }}><div style={{ width: 18, height: 18, border: '1.5px solid #9E9E9E', borderRadius: 2, margin: '11px auto' }} /></th>}
            {['Label', 'Label', 'Label', 'Label'].map((l, i) => (
              <th key={i} style={{ padding: '0 12px', height: 40, textAlign: 'left', fontSize: 13, fontWeight: 500, color: '#4A4A4A', whiteSpace: 'nowrap' }}>
                <span className="inline-flex items-center gap-1">{l} <ChevronsUpDown size={13} className="text-[#9E9E9E]" /></span>
              </th>
            ))}
            <th style={{ width: 112, padding: '0 12px', height: 40, textAlign: 'center', fontSize: 13, fontWeight: 500, color: '#4A4A4A' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {emptyState ? (
            <tr><td colSpan={showCheckbox ? 6 : 5}><EmptyState /></td></tr>
          ) : previewRows.map((row, i) => {
            const isSel = selectedIds.includes(row.id)
            const b = isSel ? '2px solid #0094EE' : '1px solid #E9EFF2'
            return (
              <tr key={i} style={{ backgroundColor: isSel ? '#E6F4FD' : 'white' }}>
                {showCheckbox && (
                  <td style={{ width: 40, height: 64, padding: '12px', textAlign: 'center', borderTop: b, borderBottom: b, borderLeft: b, borderRadius: '4px 0 0 4px' }}>
                    {isSel
                      ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect width="18" height="18" rx="2" fill="#304A64" /><path d="M4.5 9L7.5 12L13.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      : <div style={{ width: 18, height: 18, border: '1.5px solid #616161', borderRadius: 2 }} />
                    }
                  </td>
                )}
                {['Cell', 'Cell', 'Cell', 'Cell'].map((c, j) => (
                  <td key={j} style={{ padding: '12px', height: 64, fontSize: 13, color: '#4A4A4A', borderTop: b, borderBottom: b }}>{c}</td>
                ))}
                <td style={{ padding: '0 4px', height: 64, textAlign: 'center', borderTop: b, borderBottom: b, borderRight: b, borderRadius: '0 4px 4px 0' }}>
                  <div className="inline-flex items-center">
                    <IconButton icon="visibility" title="Visualizar" />
                    <IconButton icon="delete" title="Excluir" />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <div className="flex items-center justify-end px-[40px] py-1">
        <PaginationUnit
          currentPage={1}
          totalPages={3}
          pageSize={5}
          totalItems={15}
          onPrev={() => {}}
          onNext={() => {}}
        />
      </div>
    </div>
  )
}

const PREVIEW_ROWS = Array.from({ length: 5 }, (_, i) => ({ id: i + 1 }))

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function TablesPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Tables"
          description="Componente de tabela para exibição de dados tabulares com suporte a seleção, ordenação, busca e paginação."
          showThemeToggle
        />

        {/* Variantes */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variantes</h2>
          <p className="text-sm text-[#666666] mb-6">
            Principais configurações do componente.
          </p>
          <div className="grid grid-cols-1 gap-6">

            {/* Default */}
            <div>
              <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-3" style={{ fontFamily: '"Red Hat Display", sans-serif', letterSpacing: '0.6px' }}>
                Padrão — sem seleção
              </p>
              <StaticPreview title="Table title" rows={PREVIEW_ROWS} selectedIds={[]} />
            </div>

            {/* 1 selected */}
            <div>
              <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-3" style={{ fontFamily: '"Red Hat Display", sans-serif', letterSpacing: '0.6px' }}>
                1 registro selecionado
              </p>
              <StaticPreview title="Table title" rows={PREVIEW_ROWS} selectedIds={[1]} />
            </div>

            {/* 2 selected */}
            <div>
              <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-3" style={{ fontFamily: '"Red Hat Display", sans-serif', letterSpacing: '0.6px' }}>
                Múltiplos registros selecionados
              </p>
              <StaticPreview title="Table title" rows={PREVIEW_ROWS} selectedIds={[1, 2]} />
            </div>

            {/* Empty state */}
            <div>
              <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-3" style={{ fontFamily: '"Red Hat Display", sans-serif', letterSpacing: '0.6px' }}>
                Estado vazio (sem resultados)
              </p>
              <StaticPreview title="Table title" rows={[]} emptyState />
            </div>
          </div>
        </div>

        {/* Interativo */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Interativo</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tabela completa com busca, ordenação por coluna, seleção de registros e paginação configurável.
          </p>
          <InteractiveTable />
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Variáveis de cor utilizadas nos elementos da tabela.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>Estado</th>
                  <th className="text-left p-4 font-medium text-[#13283C]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>Valor</th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody>
                {[
                  ['Linha selecionada — fundo', 'Selected', '--bg_actived', '#E6F4FD',        '#E6F4FD'],
                  ['Linha selecionada — borda', 'Selected', '--secondary_link', '#0094EE',    '#0094EE'],
                  ['Linha — hover',             'Hovered',  '—',             '#F5F9FF',        '#F5F9FF'],
                  ['Divisor / borda',           'Default',  '--divider',     '#E9EFF2',        '#E9EFF2'],
                  ['Cabeçalho — texto',         'Default',  '—',             '#4A4A4A',        '#4A4A4A'],
                  ['Célula — texto',            'Default',  '—',             '#4A4A4A',        '#4A4A4A'],
                  ['Ícone ação — visualizar',   'Default',  '--blue-600',    '#304A64',        '#304A64'],
                  ['Checkbox — ativo',          'Selected', '--blue-600',    '#304A64',        '#304A64'],
                  ['Sort icon ativo',           'Sorted',   '--blue-600',    '#304A64',        '#304A64'],
                ].map(([element, state, token, val, preview], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-[#FAFAFA]' : ''}>
                    <td className="p-4 text-[#4A4A4A]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>{element}</td>
                    <td className="p-4 text-[#666666]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>{state}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{token}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{val}</td>
                    <td className="p-4">
                      <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: preview, border: '1px solid rgba(0,0,0,0.1)' }} />
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
              ['Altura do cabeçalho',              '40px'],
              ['Altura da linha',                  '64px'],
              ['Padding horizontal da célula',     '12px'],
              ['Largura coluna de checkbox',       '40px'],
              ['Largura coluna de ações (2 ícones)', '112px'],
              ['Fundo linha selecionada',          '#E6F4FD — var(--bg_actived)'],
              ['Borda linha selecionada',          '2px solid #0094EE — var(--secondary_link)'],
              ['Divisor entre linhas',             '1px solid #E9EFF2 — var(--divider)'],
              ['Checkbox ativo',                   '#304A64 — var(--blue-600)'],
              ['Border radius do container',       '14px'],
              ['Tipografia',                       'Red Hat Display, 13–14px'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[300px]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>{label}:</span>
                <span className="text-[#666666]" style={{ fontFamily: '"Red Hat Display", sans-serif' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
