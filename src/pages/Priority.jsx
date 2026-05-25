import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Urgent } from '../components/icons/Urgent'
import { High } from '../components/icons/High'
import { Medium } from '../components/icons/Medium'
import { Normal } from '../components/icons/Normal'
import { Nothing } from '../components/icons/Nothing'

const PRIORITIES = [
  {
    id: 'urgente',
    label: 'Urgente',
    Icon: Urgent,
    color: '#E9786B',
    bg: '#FEF5F4',
    desc: 'Ação imediata — risco crítico ao produto ou usuário',
  },
  {
    id: 'alta',
    label: 'Alta',
    Icon: High,
    color: '#7C3A00',
    bg: '#FEE8D6',
    desc: 'Impacto significativo — deve ser resolvido em breve',
  },
  {
    id: 'media',
    label: 'Média',
    Icon: Medium,
    color: '#856404',
    bg: '#FFF3CD',
    desc: 'Relevante, porém sem urgência imediata',
  },
  {
    id: 'normal',
    label: 'Normal',
    Icon: Normal,
    color: '#0094EE',
    bg: '#E6F4FD',
    desc: 'Fluxo padrão — baixo impacto operacional',
  },
  {
    id: 'nenhuma',
    label: 'Nenhuma',
    Icon: Nothing,
    color: '#666666',
    bg: '#e2e3e5',
    desc: 'Prioridade avaliada como nula — não omitida',
  },
]

const TASKS = [
  { id: 'TASK-001', title: 'Corrigir falha crítica no login',      priority: PRIORITIES[0], status: 'Em andamento', date: '25/05' },
  { id: 'TASK-002', title: 'Revisar contrato com fornecedor',      priority: PRIORITIES[1], status: 'A fazer',      date: '26/05' },
  { id: 'TASK-003', title: 'Atualizar documentação da API',        priority: PRIORITIES[2], status: 'A fazer',      date: '28/05' },
  { id: 'TASK-004', title: 'Migrar repositório para monorepo',     priority: PRIORITIES[3], status: 'Em andamento', date: '30/05' },
  { id: 'TASK-005', title: 'Pesquisar bibliotecas de animação',    priority: PRIORITIES[4], status: 'A fazer',      date: '02/06' },
  { id: 'TASK-006', title: 'Deploy da versão 2.4 em produção',    priority: PRIORITIES[0], status: 'Bloqueado',    date: '25/05' },
  { id: 'TASK-007', title: 'Refatorar módulo de autenticação',     priority: PRIORITIES[1], status: 'A fazer',      date: '27/05' },
]

const STATUS_STYLES = {
  'Em andamento': 'bg-blue-50 text-blue-600',
  'A fazer':      'bg-gray-100 text-gray-600',
  'Bloqueado':    'bg-red-50 text-red-600',
}

function PriorityChip({ priority }) {
  const { label, Icon, color, bg } = priority
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 24,
        backgroundColor: bg,
        borderRadius: 4,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          height: 24,
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 6,
          paddingRight: 8,
          borderRadius: 4,
        }}
      >
        <Icon size={16} color={color} />
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: '0.5px',
            color: color,
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

function PriorityIconChip({ priority }) {
  const [hovered, setHovered] = useState(false)
  const { label, Icon, color, bg } = priority

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        position: 'relative',
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          backgroundColor: bg,
          borderRadius: 4,
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <Icon size={16} color={color} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 8px',
          borderRadius: 3,
          backgroundColor: hovered ? '#2D3135' : 'transparent',
          transition: 'background-color 0.15s ease',
          minWidth: 40,
        }}
      >
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 400,
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: '0.4px',
            color: hovered ? '#FFFFFF' : 'transparent',
            whiteSpace: 'nowrap',
            transition: 'color 0.15s ease',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

export default function PriorityPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  return (
    <div className={`p-[68px] ${isDark ? 'bg-[#1D2024]' : 'bg-white'}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Priority"
          description="Componente de prioridade com cinco níveis — Urgente, Alta, Média, Normal e Nenhuma — disponível em variante chip (ícone + label) e variante ícone com tooltip."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Chip de Prioridade */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-1 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Chip de Prioridade</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>
            Exibe o nível com ícone e label — ideal para tabelas, listas e cards com espaço suficiente.
          </p>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                  <th className={`text-left p-4 text-sm font-medium w-28 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Nível</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Componente</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Fundo</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Ícone / Texto</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Descrição de uso</th>
                </tr>
              </thead>
              <tbody>
                {PRIORITIES.map(({ id, label, Icon, color, bg, desc }, i) => (
                  <tr key={id} className={i < PRIORITIES.length - 1 ? `border-b ${isDark ? 'border-white/10' : 'border-[#E9EFF2]'}` : ''}>
                    <td className={`p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{label}</td>
                    <td className="p-4">
                      <PriorityChip priority={{ label, Icon, color, bg }} />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded border flex-shrink-0 ${isDark ? 'border-white/10' : 'border-black/10'}`} style={{ backgroundColor: bg }} />
                        <span className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{bg}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded border flex-shrink-0 ${isDark ? 'border-white/10' : 'border-black/10'}`} style={{ backgroundColor: color }} />
                        <span className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{color}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-sm ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ícone de Prioridade */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-1 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Ícone de Prioridade</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>
            Variante compacta — exibe apenas o ícone. Passe o mouse sobre cada ícone para revelar o tooltip com o nome do nível.
          </p>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                  <th className={`text-left p-4 text-sm font-medium w-28 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Nível</th>
                  <th className={`p-4 text-sm font-medium text-center w-36 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Ícone (hover)</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Fundo</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Cor do ícone</th>
                  <th className={`text-left p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Quando usar</th>
                </tr>
              </thead>
              <tbody>
                {PRIORITIES.map(({ id, label, Icon, color, bg }, i) => (
                  <tr key={id} className={i < PRIORITIES.length - 1 ? `border-b ${isDark ? 'border-white/10' : 'border-[#E9EFF2]'}` : ''}>
                    <td className={`p-4 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{label}</td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <PriorityIconChip priority={{ label, Icon, color, bg }} />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded border flex-shrink-0 ${isDark ? 'border-white/10' : 'border-black/10'}`} style={{ backgroundColor: bg }} />
                        <span className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{bg}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded border flex-shrink-0 ${isDark ? 'border-white/10' : 'border-black/10'}`} style={{ backgroundColor: color }} />
                        <span className={`font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{color}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-sm ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>Colunas compactas — espaço horizontal reduzido</td>
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
            Exemplo de uso em uma lista de tarefas com os cinco níveis de prioridade em contexto real.
          </p>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                  <th className={`text-left px-6 py-3 text-sm font-medium w-28 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>ID</th>
                  <th className={`text-left px-6 py-3 text-sm font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Tarefa</th>
                  <th className={`text-left px-6 py-3 text-sm font-medium w-36 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Prioridade</th>
                  <th className={`text-left px-6 py-3 text-sm font-medium w-36 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Status</th>
                  <th className={`text-left px-6 py-3 text-sm font-medium w-24 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Data</th>
                </tr>
              </thead>
              <tbody>
                {TASKS.map((task, i) => (
                  <tr key={task.id} className={i < TASKS.length - 1 ? `border-b ${isDark ? 'border-white/10' : 'border-[#E9EFF2]'}` : ''}>
                    <td className={`px-6 py-3 text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{task.id}</td>
                    <td className={`px-6 py-3 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{task.title}</td>
                    <td className="px-6 py-3">
                      <PriorityChip priority={task.priority} />
                    </td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap ${STATUS_STYLES[task.status]}`}>
                        {task.status}
                      </span>
                    </td>
                    <td className={`px-6 py-3 text-sm ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{task.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Anatomia */}
        <div className="mb-12">
          <h2 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Anatomia</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>Medidas e espaçamentos do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Altura',               desc: '24 px',          sub: 'Ambas as variantes' },
              { label: 'Padding horizontal',   desc: '6 px / 8 px',    sub: 'Esquerda 6 px, direita 8 px' },
              { label: 'Padding vertical',     desc: '4 px',           sub: 'Topo e base' },
              { label: 'Ícone',                desc: '16 × 16 px',     sub: 'Componentes customizados' },
              { label: 'Gap',                  desc: '4 px',           sub: 'Entre ícone e label' },
              { label: 'Border Radius',        desc: '4 px',           sub: 'Container do chip' },
              { label: 'Tipografia — Chip',    desc: '12 px / 700',    sub: 'Red Hat Display Bold, ls 0.5 px' },
              { label: 'Tipografia — Tooltip', desc: '12 px / 400',    sub: 'Red Hat Display Regular, ls 0.4 px' },
              { label: 'Tooltip BG',           desc: '#2D3135',        sub: 'Aparece no hover da variante ícone' },
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
          <h2 className={`text-xl font-medium mb-1 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Tokens de Cor</h2>
          <p className={`text-sm mb-6 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>
            Tokens utilizados em cada nível de prioridade.
          </p>
          <div className={`rounded-[14px] border overflow-hidden ${isDark ? 'bg-[#26292E] border-white/10' : 'bg-white border-black/10'}`}>
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/10 bg-[#1D2024]' : 'border-[#E9EFF2] bg-[#FAFAFA]'}`}>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Nível</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Elemento</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Token</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Valor</th>
                  <th className={`text-left p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nivel: 'Urgente', elemento: 'Fundo',         token: '--error-bg',        valor: '#FEF5F4', color: '#FEF5F4' },
                  { nivel: 'Urgente', elemento: 'Ícone / Texto', token: '--error',           valor: '#E9786B', color: '#E9786B' },
                  { nivel: 'Alta',    elemento: 'Fundo',         token: '--alert-orange-bg', valor: '#FEE8D6', color: '#FEE8D6' },
                  { nivel: 'Alta',    elemento: 'Ícone / Texto', token: '--alert-orange',    valor: '#7C3A00', color: '#7C3A00' },
                  { nivel: 'Média',   elemento: 'Fundo',         token: '--alert-yellow-bg', valor: '#FFF3CD', color: '#FFF3CD' },
                  { nivel: 'Média',   elemento: 'Ícone / Texto', token: '--alert-yellow',    valor: '#856404', color: '#856404' },
                  { nivel: 'Normal',  elemento: 'Fundo',         token: '--state-blue-bg',   valor: '#E6F4FD', color: '#E6F4FD' },
                  { nivel: 'Normal',  elemento: 'Ícone / Texto', token: '--state-blue',      valor: '#0094EE', color: '#0094EE' },
                  { nivel: 'Nenhuma', elemento: 'Fundo',         token: '--alert-grey-bg',   valor: '#e2e3e5', color: '#e2e3e5' },
                  { nivel: 'Nenhuma', elemento: 'Ícone / Texto', token: '--text-secondary',  valor: '#666666', color: '#666666' },
                  { nivel: 'Tooltip', elemento: 'Fundo',         token: '--tooltip',         valor: '#2D3135', color: '#2D3135' },
                  { nivel: 'Tooltip', elemento: 'Texto',         token: '--text-inverse',    valor: '#FFFFFF', color: '#FFFFFF' },
                ].map(({ nivel, elemento, token, valor, color }, i, arr) => (
                  <tr key={`${nivel}-${elemento}`} className={i < arr.length - 1 ? `border-b ${isDark ? 'border-white/10' : 'border-[#E9EFF2]'}` : ''}>
                    <td className={`p-4 font-medium ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{nivel}</td>
                    <td className={`p-4 ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{elemento}</td>
                    <td className={`p-4 font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{token}</td>
                    <td className={`p-4 font-mono text-xs ${isDark ? 'text-[#808285]' : 'text-[#666666]'}`}>{valor}</td>
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
                label: 'Chip — em tabelas e listas',
                desc: 'Use quando há espaço suficiente e o nível de prioridade precisa ser imediatamente legível sem interação do usuário.',
              },
              {
                label: 'Ícone — em colunas compactas',
                desc: 'Use quando o espaço horizontal é limitado. O tooltip revela o nome do nível ao passar o mouse.',
              },
              {
                label: 'Urgente',
                desc: 'Reservado para itens críticos que exigem ação imediata. Use com moderação para preservar o impacto visual.',
              },
              {
                label: 'Nenhuma',
                desc: 'Indica ausência de prioridade definida. Diferente de omitir o componente — reforça que a prioridade foi avaliada como nula.',
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
              ['Altura',                    '24 px — ambas as variantes'],
              ['Border radius',             '4 px — container · 3 px — tooltip'],
              ['Padding vertical',          '4 px'],
              ['Padding horizontal (chip)', '6 px esquerda · 8 px direita'],
              ['Ícone',                     '16 × 16 px — componentes customizados em src/components/icons/'],
              ['Gap ícone + label',         '4 px'],
              ['Tipografia — chip',         '12 px / Bold / 16 px · letter-spacing 0.5 px · Red Hat Display'],
              ['Tipografia — tooltip',      '12 px / Regular / 16 px · letter-spacing 0.4 px · Red Hat Display'],
              ['Tooltip background',        '#2D3135 — visível apenas no hover da variante ícone'],
              ['Níveis disponíveis',        'Urgente · Alta · Média · Normal · Nenhuma'],
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
