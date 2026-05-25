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
  },
  {
    id: 'alta',
    label: 'Alta',
    Icon: High,
    color: '#7C3A00',
    bg: '#FEE8D6',
  },
  {
    id: 'media',
    label: 'Média',
    Icon: Medium,
    color: '#856404',
    bg: '#FFF3CD',
  },
  {
    id: 'normal',
    label: 'Normal',
    Icon: Normal,
    color: '#0094EE',
    bg: '#E6F4FD',
  },
  {
    id: 'nenhuma',
    label: 'Nenhuma',
    Icon: Nothing,
    color: '#666666',
    bg: '#e2e3e5',
  },
]

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
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Priority"
          description="Componente de prioridade com cinco níveis — Urgente, Alta, Média, Normal e Nenhuma — disponível em variante chip (ícone + label) e variante ícone com tooltip."
          showThemeToggle
        />

        {/* Chip variant */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Chip de Prioridade</h2>
          <p className="text-sm text-[#666666] mb-6">
            Exibe o nível de prioridade com ícone e label — ideal para uso em listas, tabelas e cards.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-32">Nível</th>
                  <th className="text-left p-4 text-sm font-medium text-[#13283C]">Componente</th>
                  <th className="text-left p-4 text-sm font-medium text-[#13283C]">Cor de fundo</th>
                  <th className="text-left p-4 text-sm font-medium text-[#13283C]">Cor do ícone/texto</th>
                </tr>
              </thead>
              <tbody>
                {PRIORITIES.map(({ id, label, Icon, color, bg }, i) => (
                  <tr key={id} className={i < PRIORITIES.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 text-sm text-[#666666]">{label}</td>
                    <td className="p-4">
                      <PriorityChip priority={{ label, Icon, color, bg }} />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-5 h-5 rounded border border-black/10 flex-shrink-0"
                          style={{ backgroundColor: bg }}
                        />
                        <span className="font-mono text-xs text-[#666666]">{bg}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-5 h-5 rounded border border-black/10 flex-shrink-0"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-mono text-xs text-[#666666]">{color}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Icon variant */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Ícone de Prioridade</h2>
          <p className="text-sm text-[#666666] mb-6">
            Exibe apenas o ícone em um chip quadrado. Passe o mouse para revelar o tooltip com o nome do nível.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex items-start gap-10 flex-wrap">
              {PRIORITIES.map(({ id, label, Icon, color, bg }) => (
                <PriorityIconChip key={id} priority={{ label, Icon, color, bg }} />
              ))}
            </div>
          </div>
        </div>

        {/* Color tokens */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados em cada nível de prioridade.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Nível</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nivel: 'Urgente',  elemento: 'Fundo',         token: '--error-bg',        valor: '#FEF5F4', color: '#FEF5F4' },
                  { nivel: 'Urgente',  elemento: 'Ícone / Texto', token: '--error',           valor: '#E9786B', color: '#E9786B' },
                  { nivel: 'Alta',     elemento: 'Fundo',         token: '--alert-orange-bg', valor: '#FEE8D6', color: '#FEE8D6' },
                  { nivel: 'Alta',     elemento: 'Ícone / Texto', token: '--alert-orange',    valor: '#7C3A00', color: '#7C3A00' },
                  { nivel: 'Média',    elemento: 'Fundo',         token: '--alert-yellow-bg', valor: '#FFF3CD', color: '#FFF3CD' },
                  { nivel: 'Média',    elemento: 'Ícone / Texto', token: '--alert-yellow',    valor: '#856404', color: '#856404' },
                  { nivel: 'Normal',   elemento: 'Fundo',         token: '--state-blue-bg',   valor: '#E6F4FD', color: '#E6F4FD' },
                  { nivel: 'Normal',   elemento: 'Ícone / Texto', token: '--state-blue',      valor: '#0094EE', color: '#0094EE' },
                  { nivel: 'Nenhuma',  elemento: 'Fundo',         token: '--alert-grey-bg',   valor: '#e2e3e5', color: '#e2e3e5' },
                  { nivel: 'Nenhuma',  elemento: 'Ícone / Texto', token: '--text-secondary',  valor: '#666666', color: '#666666' },
                  { nivel: 'Tooltip',  elemento: 'Fundo',         token: '--tooltip',         valor: '#2D3135', color: '#2D3135' },
                  { nivel: 'Tooltip',  elemento: 'Texto',         token: '--text-inverse',    valor: '#FFFFFF',  color: '#FFFFFF' },
                ].map(({ nivel, elemento, token, valor, color }, i, arr) => (
                  <tr key={`${nivel}-${elemento}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{nivel}</td>
                    <td className="p-4 text-[#666666]">{elemento}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{token}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{valor}</td>
                    <td className="p-4">
                      <div
                        className="w-6 h-6 rounded border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Anatomy */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Altura',             desc: '24 px',          sub: 'Ambas as variantes' },
              { label: 'Padding horizontal', desc: '6 px / 8 px',    sub: 'Esquerda 6px, direita 8px' },
              { label: 'Padding vertical',   desc: '4 px',           sub: 'Topo e base' },
              { label: 'Ícone',              desc: '16 × 16 px',     sub: 'Componentes customizados' },
              { label: 'Gap',                desc: '4 px',           sub: 'Entre ícone e label' },
              { label: 'Border radius',      desc: '4 px',           sub: 'Container do chip' },
              { label: 'Tipografia — Chip',  desc: '12 px / 700',    sub: 'Red Hat Display Bold, ls 0.5px' },
              { label: 'Tipografia — Tooltip', desc: '12 px / 400', sub: 'Red Hat Display Regular, ls 0.4px' },
              { label: 'Tooltip bg',         desc: '#2D3135',        sub: 'Aparece no hover do ícone' },
            ].map(({ label, desc, sub }) => (
              <div key={label} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage guide */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Chip — em tabelas e listas',
                desc: 'Use a variante chip quando há espaço suficiente e o nível de prioridade precisa ser imediatamente legível sem interação do usuário.',
              },
              {
                label: 'Ícone — em colunas compactas',
                desc: 'Use a variante ícone quando o espaço horizontal é limitado. O tooltip revela o nome do nível ao passar o mouse.',
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
                <div
                  className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: '#304A64' }}
                />
                <div>
                  <p className="text-sm font-medium text-[#13283C]">{label}</p>
                  <p className="text-xs text-[#666666] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical specs */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Altura', '24px — ambas as variantes'],
              ['Border radius', '4px — container; 3px — tooltip'],
              ['Padding vertical', '4px'],
              ['Padding horizontal (chip)', '6px esquerda, 8px direita'],
              ['Ícone', '16×16px — componentes customizados em src/components/icons/'],
              ['Gap ícone + label', '4px'],
              ['Tipografia — chip', '12px / Bold / 16px, letter-spacing 0.5px, Red Hat Display'],
              ['Tipografia — tooltip', '12px / Regular / 16px, letter-spacing 0.4px, Red Hat Display'],
              ['Tooltip background', '#2D3135 — visível apenas no hover da variante ícone'],
              ['Níveis disponíveis', 'Urgente, Alta, Média, Normal, Nenhuma'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[200px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
