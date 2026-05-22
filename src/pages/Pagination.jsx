import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

function IconBtn({ onClick, disabled, tooltip, children }) {
  return (
    <div className="relative group flex flex-col items-center shrink-0">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-10 h-10 flex items-center justify-center rounded p-2 transition-colors ${
          disabled
            ? 'text-[#BDBDBD] cursor-default'
            : 'text-[#666] hover:bg-black/[0.08] cursor-pointer'
        }`}
      >
        {children}
      </button>
      {!disabled && (
        <div className="absolute top-[calc(100%+2px)] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          <div className="bg-[#2d3135] text-white text-[12px] leading-4 tracking-[0.4px] px-2 py-1 rounded-[3px] whitespace-nowrap">
            {tooltip}
          </div>
        </div>
      )}
    </div>
  )
}

function PaginationUnit({ currentPage, totalPages, pageSize, totalItems, onPrev, onNext }) {
  const start = (currentPage - 1) * pageSize + 1
  const end = Math.min(currentPage * pageSize, totalItems)

  return (
    <div className="flex items-center gap-1">
      <span className="text-[12px] leading-4 tracking-[0.4px] text-[#666] whitespace-nowrap">
        {start}-{end} de {totalItems}
      </span>
      <div className="flex items-center">
        <IconBtn onClick={onPrev} disabled={currentPage <= 1} tooltip="Voltar">
          <ChevronLeft size={24} />
        </IconBtn>
        <IconBtn onClick={onNext} disabled={currentPage >= totalPages} tooltip="Avançar">
          <ChevronRight size={24} />
        </IconBtn>
      </div>
    </div>
  )
}

const ITEMS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  status: ['Ativo', 'Inativo', 'Pendente'][i % 3],
}))

const STATUS_STYLES = {
  Ativo:    'bg-green-100 text-green-700',
  Inativo:  'bg-gray-100 text-gray-600',
  Pendente: 'bg-yellow-100 text-yellow-700',
}

export default function PaginationPage() {
  const [page, setPage] = useState(1)
  const pageSize = 5
  const totalPages = Math.ceil(ITEMS.length / pageSize)
  const pagedItems = ITEMS.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Pagination"
          description="Componente de paginação para navegar entre conjuntos de dados paginados."
          showThemeToggle
        />

        {/* States */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Estados</h2>
          <p className="text-sm text-[#666666] mb-6">
            Três estados refletem a posição na paginação: início, meio e fim.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {[
                { label: 'Início', p: 1 },
                { label: 'Meio',   p: 2 },
                { label: 'Fim',    p: 3 },
              ].map(({ label, p }) => (
                <div key={label} className="flex flex-col items-center gap-4">
                  <PaginationUnit
                    currentPage={p}
                    totalPages={3}
                    pageSize={5}
                    totalItems={15}
                    onPrev={() => {}}
                    onNext={() => {}}
                  />
                  <span className="text-xs text-[#666]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive demo */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Demo Interativa</h2>
          <p className="text-sm text-[#666666] mb-6">
            Exemplo funcional com 15 itens paginados em grupos de 5.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10">
            <div className="overflow-hidden rounded-t-[14px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left px-6 py-3 text-[#13283C] font-medium">ID</th>
                    <th className="text-left px-6 py-3 text-[#13283C] font-medium">Nome</th>
                    <th className="text-left px-6 py-3 text-[#13283C] font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedItems.map((item) => (
                    <tr key={item.id} className="border-b border-black/5 last:border-0">
                      <td className="px-6 py-3 text-[#666]">{item.id}</td>
                      <td className="px-6 py-3 text-[#13283C]">{item.name}</td>
                      <td className="px-6 py-3">
                        <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_STYLES[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 border-t border-black/10 flex justify-end relative">
              <PaginationUnit
                currentPage={page}
                totalPages={totalPages}
                pageSize={pageSize}
                totalItems={ITEMS.length}
                onPrev={() => setPage((p) => Math.max(1, p - 1))}
                onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
              />
            </div>
          </div>
        </div>

        {/* Specs */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Tamanho do botão',   '40×40px'],
              ['Ícone',              '24×24px (chevron_left / chevron_right)'],
              ['Padding do botão',   '8px'],
              ['Border-radius',      '4px'],
              ['Hover',              'rgba(0, 0, 0, 0.08)'],
              ['Estado desabilitado','cor #BDBDBD, sem interação'],
              ['Tooltip',            'bg #2d3135 · text branco · border-radius 3px · padding 4px 8px'],
              ['Tipografia do label','12px Regular · line-height 16px · letter-spacing 0.4px'],
              ['Cor do label',       'var(--text/secondary, #666)'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[220px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
