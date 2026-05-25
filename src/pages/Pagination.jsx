import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

export function IconBtn({ onClick, disabled, tooltip, isDark, children }) {
  return (
    <div className="relative group flex flex-col items-center shrink-0">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-10 h-10 flex items-center justify-center rounded p-2 transition-colors ${
          disabled
            ? 'text-[#BDBDBD] cursor-default'
            : `${isDark ? 'text-[#808285] hover:bg-white/[0.08]' : 'text-[#666] hover:bg-black/[0.08]'} cursor-pointer`
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

export function PaginationUnit({ currentPage, totalPages, pageSize, totalItems, onPrev, onNext, isDark }) {
  const start = (currentPage - 1) * pageSize + 1
  const end = Math.min(currentPage * pageSize, totalItems)

  return (
    <div className="flex items-center gap-1">
      <span className={`text-[12px] leading-4 tracking-[0.4px] whitespace-nowrap ${isDark ? 'text-[#808285]' : 'text-[#666]'}`}>
        {start}–{end} de {totalItems}
      </span>
      <div className="flex items-center">
        <IconBtn onClick={onPrev} disabled={currentPage <= 1} tooltip="Voltar" isDark={isDark}>
          <ChevronLeft size={24} />
        </IconBtn>
        <IconBtn onClick={onNext} disabled={currentPage >= totalPages} tooltip="Avançar" isDark={isDark}>
          <ChevronRight size={24} />
        </IconBtn>
      </div>
    </div>
  )
}

const ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: 1000 + i + 1,
  name: [
    'Ana Lima', 'Bruno Costa', 'Carla Souza', 'Diego Martins', 'Elena Ferreira',
    'Felipe Rocha', 'Gabriela Nunes', 'Henrique Pinto', 'Isabela Alves', 'João Mendes',
    'Karina Dias', 'Lucas Teixeira', 'Mariana Castro', 'Nicolas Barbosa', 'Olivia Melo',
    'Pedro Correia', 'Renata Vieira', 'Samuel Gomes', 'Tatiana Reis', 'Ursula Carvalho',
  ][i],
  role: ['Designer', 'Desenvolvedor', 'Product Manager', 'QA Engineer', 'DevOps'][i % 5],
  status: ['Ativo', 'Inativo', 'Pendente'][i % 3],
}))

const STATUS_STYLES = {
  Ativo:    'bg-green-100 text-green-700',
  Inativo:  'bg-gray-100 text-gray-600',
  Pendente: 'bg-yellow-100 text-yellow-700',
}

export default function PaginationPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  const [page, setPage] = useState(1)
  const pageSize = 5
  const totalPages = Math.ceil(ITEMS.length / pageSize)
  const pagedItems = ITEMS.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className={`p-[68px] ${isDark ? 'bg-[#1D2024]' : 'bg-white'}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Pagination"
          description="Componente de paginação para navegar entre conjuntos de dados paginados. Exibe o intervalo atual e os controles de avançar e voltar."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Estados */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-1 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Estados</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>
            Três estados refletem a posição do usuário no conjunto de dados.
          </p>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                  <th className={`text-left p-4 text-sm font-medium w-28 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Estado</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Condição</th>
                  <th className={`p-4 text-sm font-medium text-center ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Preview</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Botões ativos</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { state: 'Início', cond: 'Página 1 de N — nenhuma página anterior disponível', p: 1, active: 'Somente Avançar' },
                  { state: 'Meio',   cond: 'Página intermediária — há anterior e próxima',       p: 2, active: 'Voltar e Avançar' },
                  { state: 'Fim',    cond: 'Última página — nenhuma próxima página disponível',  p: 3, active: 'Somente Voltar' },
                ].map(({ state, cond, p, active }, i, arr) => (
                  <tr key={state} className={i < arr.length - 1 ? `border-b ${isDark ? 'border-white/10' : 'border-[#E9EFF2]'}` : ''}>
                    <td className={`p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{state}</td>
                    <td className={`p-4 text-sm ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{cond}</td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <PaginationUnit
                          currentPage={p}
                          totalPages={3}
                          pageSize={5}
                          totalItems={15}
                          onPrev={() => {}}
                          onNext={() => {}}
                          isDark={isDark}
                        />
                      </div>
                    </td>
                    <td className={`p-4 text-sm ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{active}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Demo Interativa */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-1 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Demo Interativa</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>
            Lista de 20 registros paginados em grupos de 5. Navegue pelos controles para explorar os estados.
          </p>
          <div className={`rounded-[14px] border ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            <div className="overflow-hidden rounded-t-[14px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className={`border-b ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                    <th className={`text-left px-6 py-3 text-sm font-medium w-24 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>#</th>
                    <th className={`text-left px-6 py-3 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Nome</th>
                    <th className={`text-left px-6 py-3 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Cargo</th>
                    <th className={`text-left px-6 py-3 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedItems.map((item, i) => (
                    <tr key={item.id} className={i < pagedItems.length - 1 ? `border-b ${isDark ? 'border-white/10' : 'border-[#E9EFF2]'}` : ''}>
                      <td className={`px-6 py-3 text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{item.id}</td>
                      <td className={`px-6 py-3 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{item.name}</td>
                      <td className={`px-6 py-3 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{item.role}</td>
                      <td className="px-6 py-3">
                        <span className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-medium ${STATUS_STYLES[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`px-6 py-3 border-t flex items-center justify-between rounded-b-[14px] ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
              <span className={`text-xs ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>
                Página {page} de {totalPages}
              </span>
              <PaginationUnit
                currentPage={page}
                totalPages={totalPages}
                pageSize={pageSize}
                totalItems={ITEMS.length}
                onPrev={() => setPage((p) => Math.max(1, p - 1))}
                onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
                isDark={isDark}
              />
            </div>
          </div>
        </div>

        {/* Anatomia */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Anatomia</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>Medidas, espaçamentos e tokens do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Botão de navegação', desc: '40 × 40 px',          sub: 'Área clicável dos ícones' },
              { label: 'Ícone',              desc: '24 × 24 px',           sub: 'ChevronLeft / ChevronRight' },
              { label: 'Padding do botão',   desc: '8 px',                 sub: 'Todos os lados' },
              { label: 'Border Radius',      desc: '4 px',                 sub: 'Container do botão' },
              { label: 'Hover',              desc: 'rgba(0,0,0,0.08)',     sub: 'State layer sobre o botão' },
              { label: 'Cor desabilitado',   desc: '#BDBDBD',              sub: 'Ícone no estado inativo' },
              { label: 'Cor ativo',          desc: '#666666',              sub: 'Ícone no estado padrão' },
              { label: 'Label de intervalo', desc: '12 px / Regular',      sub: 'Red Hat Display, #666' },
              { label: 'Letter Spacing',     desc: '0.4 px',               sub: 'Tracking do label' },
              { label: 'Line Height',        desc: '16 px',                sub: 'Altura de linha do label' },
              { label: 'Tooltip BG',         desc: '#2d3135',              sub: 'Fundo da dica de navegação' },
              { label: 'Tooltip Radius',     desc: '3 px',                 sub: 'Border radius do tooltip' },
            ].map(({ label, desc, sub }) => (
              <div key={label} className={`rounded-[14px] border p-5 ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
                <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{label}</p>
                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{desc}</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Tokens de Cor</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>
            Cores utilizadas nos estados do componente.
          </p>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Elemento</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Estado</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Valor</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { el: 'Ícone',        state: 'Habilitado',   val: '#666666',           color: '#666666' },
                  { el: 'Ícone',        state: 'Desabilitado', val: '#BDBDBD',           color: '#BDBDBD' },
                  { el: 'State Layer',  state: 'Hover',        val: 'rgba(0,0,0,0.08)',  color: 'rgba(0,0,0,0.08)' },
                  { el: 'Label',        state: 'Padrão',       val: '#666666',           color: '#666666' },
                  { el: 'Tooltip BG',   state: 'Visível',      val: '#2d3135',           color: '#2d3135' },
                  { el: 'Tooltip Text', state: 'Visível',      val: '#FFFFFF',           color: '#FFFFFF' },
                ].map(({ el, state, val, color }, i, arr) => (
                  <tr key={`${el}-${state}`} className={i < arr.length - 1 ? `border-b ${isDark ? 'border-white/10' : 'border-[#E9EFF2]'}` : ''}>
                    <td className={`p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{el}</td>
                    <td className={`p-4 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{state}</td>
                    <td className={`p-4 font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{val}</td>
                    <td className="p-4">
                      <div className={`w-6 h-6 rounded border ${isDark ? 'border-white/10' : 'border-black/10'}`} style={{ backgroundColor: color }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quando Usar */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-4 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Tabelas e listas longas',
                desc: 'Use quando há mais de uma página de dados. A paginação reduz a carga cognitiva ao dividir grandes conjuntos em grupos menores.',
              },
              {
                label: 'Tamanhos de página fixos',
                desc: 'Ideal quando o pageSize é definido pelo sistema. Informe o usuário sobre o intervalo exibido (ex.: 1–5 de 20).',
              },
              {
                label: 'Navegação sequencial',
                desc: 'Prefira quando o usuário percorre os dados página a página. Para buscas avançadas, combine com filtros ou scroll infinito.',
              },
              {
                label: 'Contextos de leitura',
                desc: 'Use em listagens, relatórios e tabelas onde o usuário precisa percorrer os dados de forma organizada e previsível.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--blue-600)' }} />
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{label}</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div>
          <h2 className={`text-xl font-medium mb-4 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Especificações Técnicas</h2>
          <div className={`rounded-[14px] border p-6 space-y-3 text-sm ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            {[
              ['Tamanho do botão',       '40 × 40 px'],
              ['Ícone',                  '24 × 24 px (ChevronLeft / ChevronRight — Lucide)'],
              ['Padding do botão',       '8 px (todos os lados)'],
              ['Border-radius',          '4 px'],
              ['Hover',                  'rgba(0,0,0,0.08) — cobrindo toda a área clicável'],
              ['Desabilitado',           'Cor #BDBDBD · sem cursor pointer · sem hover'],
              ['Tooltip',                'bg #2d3135 · text branco · border-radius 3 px · padding 4 px 8 px'],
              ['Tipografia do label',    '12 px Regular · line-height 16 px · letter-spacing 0.4 px'],
              ['Cor do label',           '#666666 (var --text/secondary)'],
              ['Props (PaginationUnit)', 'currentPage · totalPages · pageSize · totalItems · onPrev · onNext'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className={`font-medium min-w-[240px] ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{label}:</span>
                <span className={isDark ? 'text-[#808285]' : 'text-[#666666]'}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
