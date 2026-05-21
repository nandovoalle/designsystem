import { Plus, PlusCircle } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

function IconButton() {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        backgroundColor: 'var(--blue-600)',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Plus size={24} color="#ffffff" strokeWidth={2} />
    </div>
  )
}

function Card({
  style = 'Card button',
  title = 'Title',
  description = 'Lorem ipsum dolor sit amet consectetur. Enim rhoncus sagittis lorem nisi sem sed in pulvinar nunc.',
}) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--divider)',
        borderRadius: 4,
        padding: 24,
        width: 328,
        height: 219,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: '1px solid var(--divider)',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <PlusCircle size={24} color="var(--blue-200)" strokeWidth={1.5} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: 'var(--alert-grey-bg)',
              borderRadius: 4,
              padding: '0 4px',
              height: 16,
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}
          >
            <span
              style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 500,
                fontSize: 12,
                lineHeight: '16px',
                letterSpacing: '0.5px',
                color: 'var(--alert-grey)',
                whiteSpace: 'nowrap',
              }}
            >
              Label
            </span>
          </div>

          <span
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '24px',
              letterSpacing: '0.15px',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '0.25px',
          color: 'var(--text-secondary)',
          margin: 0,
          flex: '1 0 0',
          minHeight: 0,
          overflow: 'hidden',
        }}
      >
        {description}
      </p>

      {/* Actions */}
      {style === 'Card button' && (
        <div
          style={{
            height: 40,
            width: 85,
            backgroundColor: 'var(--blue-600)',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 24px',
            flexShrink: 0,
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '0.1px',
              color: 'var(--text-inverse)',
              whiteSpace: 'nowrap',
            }}
          >
            Label
          </span>
        </div>
      )}

      {style === 'Card button+icon' && (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexShrink: 0 }}>
          <div
            style={{
              height: 40,
              width: 85,
              backgroundColor: 'var(--blue-400)',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 24px',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '20px',
                letterSpacing: '0.1px',
                color: 'var(--blue-600)',
                whiteSpace: 'nowrap',
              }}
            >
              Label
            </span>
          </div>
          <IconButton />
        </div>
      )}

      {style === 'Card icon' && <IconButton />}
    </div>
  )
}

const VARIANTS = [
  { style: 'Card button',      label: 'Card Button' },
  { style: 'Card button+icon', label: 'Card Button + Icon' },
  { style: 'Card icon',        label: 'Card Icon' },
]

export default function CardsPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Cards"
          description="Componente de conteúdo com três variantes de ação: botão primário, botão secundário com ícone, e apenas ícone."
        />

        {/* Variants */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variantes</h2>
          <p className="text-sm text-[#666666] mb-6">
            Três estilos de card com diferentes configurações de ação.
          </p>
          <div className="flex flex-wrap gap-6">
            {VARIANTS.map(({ style, label }) => (
              <div key={style} className="flex flex-col gap-3">
                <p className="text-sm font-medium text-[#13283C]">{label}</p>
                <Card style={style} />
              </div>
            ))}
          </div>
        </div>

        {/* Anatomy */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Largura',       desc: '328 px',             sub: 'Largura fixa do card' },
              { label: 'Altura',        desc: '219 px',             sub: 'Altura fixa do card' },
              { label: 'Padding',       desc: '24 px',              sub: 'Padding interno em todos os lados' },
              { label: 'Gap interno',   desc: '16 px',              sub: 'Espaço entre header, body e footer' },
              { label: 'Ícone header',  desc: '40 × 40 px',         sub: 'Container do ícone com borda' },
              { label: 'Chip',          desc: '16 px altura',       sub: 'Badge de categoria/label' },
              { label: 'Título',        desc: '16 px / 700 / 24 px',sub: 'Red Hat Display Bold' },
              { label: 'Descrição',     desc: '14 px / 400',        sub: 'Red Hat Display Regular' },
              { label: 'Border Radius', desc: '4 px',               sub: 'Card container e elementos internos' },
            ].map(({ label, desc, sub }) => (
              <div key={label} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Color tokens */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">Tokens utilizados nos elementos do componente.</p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Propriedade</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { el: 'Card',             ctx: 'Background',    token: 'white',            val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Card',             ctx: 'Borda',         token: '--divider',        val: '#E9EFF2', color: '#E9EFF2' },
                  { el: 'Chip',             ctx: 'Background',    token: '--alert-grey-bg',  val: '#e2e3e5', color: '#e2e3e5' },
                  { el: 'Chip',             ctx: 'Texto',         token: '--alert-grey',     val: '#383d41', color: '#383d41' },
                  { el: 'Título',           ctx: 'Cor',           token: '--text-primary',   val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Descrição',        ctx: 'Cor',           token: '--text-secondary', val: '#666666', color: '#666666' },
                  { el: 'Botão Primary',    ctx: 'Background',    token: '--blue-600',       val: '#304A64', color: '#304A64' },
                  { el: 'Botão Secondary',  ctx: 'Background',    token: '--blue-400',       val: '#BFD8F3', color: '#BFD8F3' },
                  { el: 'Icon Button',      ctx: 'Background',    token: '--blue-600',       val: '#304A64', color: '#304A64' },
                  { el: 'Ícone header',     ctx: 'Cor',           token: '--blue-200',       val: '#9CB1C8', color: '#9CB1C8' },
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

        {/* Usage guide */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Card button',
                desc: 'Use quando há uma única ação primária associada ao card. O botão sólido atrai atenção para a CTA.',
              },
              {
                label: 'Card button + icon',
                desc: 'Use quando há duas ações complementares: uma ação secundária (texto) e uma ação rápida (ícone).',
              },
              {
                label: 'Card icon',
                desc: 'Use quando o espaço é limitado ou a ação é secundária. O botão de ícone mantém o layout compacto.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: 'var(--blue-600)' }}
                />
                <div>
                  <p className="text-sm font-medium text-[#13283C]">{label}</p>
                  <p className="text-xs text-[#666666] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Largura', '328px — fixa'],
              ['Altura', '219px — fixa'],
              ['Padding', '24px em todos os lados'],
              ['Gap interno', '16px entre header, body e footer'],
              ['Border radius', '4px — card container e elementos internos'],
              ['Ícone header', '40×40px com borda 1px (--divider)'],
              ['Chip / label', '16px de altura, padding 0 4px, border-radius 4px'],
              ['Título', '16px / 700 / 24px, letter-spacing 0.15px, Red Hat Display Bold'],
              ['Descrição', '14px / 400 / 20px, letter-spacing 0.25px, Red Hat Display Regular'],
              ['Variantes', 'Card Button, Card Button + Icon, Card Icon'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[180px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
