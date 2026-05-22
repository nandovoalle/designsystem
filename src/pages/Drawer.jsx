import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

/* ───────────────────────────── SVG Icons ───────────────────────────── */

function ArrowForwardIosIcon() {
  return (
    <svg width={12} height={20} viewBox="6 2 12 20" fill="var(--text-primary)" style={{ flexShrink: 0 }}>
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
    </svg>
  )
}

/* more_vert: 3 circles → visual span 4 px wide × 16 px tall */
function MoreVertIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="var(--text-primary)" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="6"  r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  )
}

/* SVG icon helper — renders Material Symbols SVG path at specified size */
function MenuIcon({ path, size, color = 'var(--text-primary)' }) {
  return (
    <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 -960 960 960"
        fill={color}
        style={{ flexShrink: 0 }}
      >
        <path d={path} />
      </svg>
    </div>
  )
}

/* ───────────────────────────── Menu data ───────────────────────────── */

const MENU_ITEMS = [
  {
    path: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z',
    size: 24, label: 'Esquerda',
  },
  {
    path: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z',
    size: 24, label: 'Direita',
  },
  {
    path: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v120h560v-120H200Zm0 200h560v360H200v-360Zm0-80v-120 120Z',
    size: 24, label: 'Topo',
  },
  {
    path: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-200v120h560v-120H200Zm0-80h560v-360H200v360Zm0 80v120-120Z',
    size: 24, label: 'Base',
  },
  {
    path: 'M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z',
    size: 14, label: 'Expandir',
  },
  {
    path: 'M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z',
    size: 14, label: 'Retrair',
  },
  {
    path: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z',
    size: 18, label: 'Abrir em outra guia',
  },
]

/* ─────────────────────── Dropdown menu component ──────────────────── */

function MenuDropdown() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 40,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 8,
        boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.30)',
        zIndex: 10,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {MENU_ITEMS.map(({ path, size, label }) => (
        <div
          key={label}
          style={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              padding: 8,
              borderRadius: 4,
              width: '100%',
            }}
          >
            <MenuIcon path={path} size={size} />
            <span
              style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '20px',
                letterSpacing: '0.25px',
                color: 'var(--text-primary)',
                whiteSpace: 'nowrap',
                flex: '1 0 0',
                minWidth: 0,
              }}
            >
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─────────────────── Standalone menu (docs preview) ───────────────── */

function MenuPreview() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 8,
        boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.30)',
        display: 'inline-flex',
        flexDirection: 'column',
      }}
    >
      {MENU_ITEMS.map(({ path, size, label }) => (
        <div
          key={label}
          style={{ height: 40, display: 'flex', alignItems: 'center', width: '100%' }}
        >
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              padding: 8,
              borderRadius: 4,
              width: '100%',
            }}
          >
            <MenuIcon path={path} size={size} />
            <span
              style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '20px',
                letterSpacing: '0.25px',
                color: 'var(--text-primary)',
                whiteSpace: 'nowrap',
                flex: '1 0 0',
                minWidth: 0,
              }}
            >
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ──────────────────────── Main drawer preview ──────────────────────── */

function DrawerPreview() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        height: 1080,
        width: 742,
        alignItems: 'flex-start',
        paddingTop: 16,
        paddingBottom: 48,
        paddingLeft: 48,
        paddingRight: 48,
        position: 'relative',
        flexShrink: 0,
      }}
      onClick={() => { if (menuOpen) setMenuOpen(false) }}
    >
      {/* Header sidebar + Content area */}
      <div
        style={{
          display: 'flex',
          flex: '1 0 0',
          flexDirection: 'column',
          gap: 24,
          alignItems: 'flex-start',
          minHeight: 0,
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Header sidebar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            alignItems: 'flex-start',
            position: 'relative',
            flexShrink: 0,
            width: '100%',
            wordBreak: 'break-word',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              alignItems: 'flex-start',
              width: '100%',
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 500,
                fontSize: 12,
                lineHeight: '16px',
                letterSpacing: '0.4px',
                color: 'var(--blue-200)',
                width: '100%',
                flexShrink: 0,
                margin: 0,
              }}
            >
              Breadcrum text
            </p>
            <p
              style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 700,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.15px',
                color: 'var(--text-primary)',
                width: '100%',
                flexShrink: 0,
                margin: 0,
              }}
            >
              Title text
            </p>
          </div>
          <p
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '0.25px',
              color: 'var(--text-primary)',
              width: '100%',
              flexShrink: 0,
              margin: 0,
            }}
          >
            Paragraph text
          </p>
        </div>

        {/* Content area */}
        <div
          style={{
            backgroundColor: '#f5f5f5',
            flex: '1 0 0',
            minHeight: 0,
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 16,
            width: '100%',
          }}
        >
          <p
            style={{
              position: 'absolute',
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              letterSpacing: '0.5px',
              color: 'var(--text-disabled)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'nowrap',
              margin: 0,
            }}
          >
            content area
          </p>
        </div>
      </div>

      {/* Footer buttons */}
      <div
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Cancel — outlined error */}
        <div
          style={{
            border: '1px solid var(--error)',
            borderRadius: 4,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 4,
            }}
          >
            <span
              style={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '20px',
                letterSpacing: '0.1px',
                color: 'var(--error)',
                whiteSpace: 'nowrap',
              }}
            >
              Label
            </span>
          </div>
        </div>

        {/* Primary — filled blue-600 */}
        <div
          style={{
            backgroundColor: 'var(--blue-600)',
            borderRadius: 4,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 4,
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
        </div>
      </div>

      {/* Icon button — arrow_forward_ios, absolute top-left */}
      <div
        style={{
          position: 'absolute',
          left: 4,
          top: 4,
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            borderRadius: 4,
            flexShrink: 0,
          }}
        >
          <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>

      {/* Icon button — more_vert, absolute top-right */}
      <div
        style={{
          position: 'absolute',
          left: 702,
          top: 4,
          width: 40,
          height: 40,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            cursor: 'pointer',
          }}
          onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen) }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              borderRadius: 4,
            }}
          >
            <MoreVertIcon />
          </div>
        </div>

        {menuOpen && <MenuDropdown />}
      </div>
    </div>
  )
}

/* ──────────────────────────── Page ──────────────────────────────────── */

export default function DrawerPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Drawer"
          description="Painel lateral deslizante com cabeçalho estruturado, área de conteúdo flexível e rodapé de ações — exibe contexto adicional sem abandonar a tela principal."
        />

        {/* ── Drawer Preview ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Clique no ícone <strong>⋮</strong> no canto superior direito para abrir o menu de opções.
          </p>
          <div className="rounded-[14px] border border-black/10 overflow-hidden inline-flex">
            <DrawerPreview />
          </div>
        </div>

        {/* ── Menu de Opções Preview ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu de Opções</h2>
          <p className="text-sm text-[#666666] mb-6">
            Menu contextual aberto pelo ícone <strong>more_vert</strong> — 7 opções de posicionamento e ação.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8 inline-flex">
            <MenuPreview />
          </div>
        </div>

        {/* ── Anatomy — Drawer ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia — Drawer</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do painel.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Largura',               desc: '742 px',              sub: 'Largura fixa do painel' },
              { label: 'Altura',                desc: '1080 px',             sub: 'Altura fixa do painel' },
              { label: 'Padding horizontal',    desc: '48 px',               sub: 'Esquerda e direita' },
              { label: 'Padding superior',      desc: '16 px',               sub: 'Topo do painel' },
              { label: 'Padding inferior',      desc: '48 px',               sub: 'Base do painel' },
              { label: 'Gap principal',         desc: '48 px',               sub: 'Entre conteúdo e footer' },
              { label: 'Gap header → conteúdo', desc: '24 px',               sub: 'Entre cabeçalho e área cinza' },
              { label: 'Gap interno header',    desc: '8 px',                sub: 'Entre bloco título e parágrafo' },
              { label: 'Gap breadcrumb',        desc: '16 px',               sub: 'Entre breadcrumb e título' },
              { label: 'Área de conteúdo',      desc: 'Border radius 16 px', sub: 'Fundo #f5f5f5, flex-1' },
              { label: 'Botão fechar (←)',      desc: '40 × 40 px',          sub: 'Absoluto: left 4 px, top 4 px' },
              { label: 'Ícone arrow',           desc: '12 × 20 px',          sub: 'arrow_forward_ios em 24 × 24' },
              { label: 'Botão opções (⋮)',       desc: '40 × 40 px',          sub: 'Absoluto: left 702 px, top 4 px' },
              { label: 'Ícone more_vert',       desc: '4 × 16 px',           sub: '3 círculos r=2 em 24 × 24' },
              { label: 'Gap footer',            desc: '24 px',               sub: 'Entre os botões de ação' },
              { label: 'Botões footer',         desc: '40 px altura',        sub: 'Cancel (outlined) + Primary (filled)' },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}-${desc}`} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Anatomy — Menu ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia — Menu de Opções</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do menu contextual.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Padding menu',          desc: '8 px',                sub: 'Em todos os lados do container' },
              { label: 'Border radius menu',    desc: '4 px',                sub: 'Container do menu' },
              { label: 'Elevação',              desc: 'Elevation Light / 2', sub: '0 2px 6px 2px rgba(0,0,0,.15) + 0 1px 2px rgba(0,0,0,.30)' },
              { label: 'Posição',               desc: 'right 0, top 40 px',  sub: 'Relativo ao botão more_vert' },
              { label: 'Item altura',           desc: '40 px',               sub: '7 itens no total' },
              { label: 'Item padding',          desc: '8 px',                sub: 'Em todos os lados do item' },
              { label: 'Item gap',              desc: '8 px',                sub: 'Entre ícone e texto' },
              { label: 'Item border radius',    desc: '4 px',                sub: 'State layer do item' },
              { label: 'Container ícone',       desc: '24 × 24 px',          sub: 'Wrapper de todos os ícones' },
              { label: 'dock_to_right / left',  desc: '24 × 24 px',          sub: 'Tamanho real do ícone' },
              { label: 'dock_to_top / bottom',  desc: '24 × 24 px',          sub: 'Tamanho real do ícone' },
              { label: 'expand / collapse',     desc: '14 × 14 px',          sub: 'Centralizado no wrapper 24 × 24' },
              { label: 'open_in_new',           desc: '18 × 18 px',          sub: 'Centralizado no wrapper 24 × 24' },
              { label: 'Tipografia item',       desc: '14 px / 400 / 20 px', sub: 'Red Hat Display Regular, ls 0.25 px' },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}-${desc}`} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tokens de Cor ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados no Drawer e no Menu de Opções.
          </p>
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
                  { el: 'Painel',              ctx: 'Background',   token: 'surface/surface1',    val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Área de conteúdo',    ctx: 'Background',   token: 'surface/surface2',    val: '#F5F5F5', color: '#F5F5F5' },
                  { el: 'Breadcrumb',          ctx: 'Cor',          token: '--blue-200',          val: '#9CB1C8', color: '#9CB1C8' },
                  { el: 'Título',              ctx: 'Cor',          token: '--text-primary',      val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Parágrafo',           ctx: 'Cor',          token: '--text-primary',      val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Texto content area',  ctx: 'Cor',          token: '--text-disabled',     val: '#9E9E9E', color: '#9E9E9E' },
                  { el: 'Ícone arrow (←)',     ctx: 'Cor',          token: '--text-primary',      val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Ícone more_vert (⋮)', ctx: 'Cor',          token: '--text-primary',      val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Botão Cancel',        ctx: 'Borda',        token: '--error',             val: '#E9786B', color: '#E9786B' },
                  { el: 'Botão Cancel',        ctx: 'Texto',        token: '--error',             val: '#E9786B', color: '#E9786B' },
                  { el: 'Botão Primary',       ctx: 'Background',   token: '--blue-600',          val: '#304A64', color: '#304A64' },
                  { el: 'Botão Primary',       ctx: 'Texto',        token: '--text-inverse',      val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Menu',                ctx: 'Background',   token: 'surface/surface1',    val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Menu ícones',         ctx: 'Cor',          token: '--text-primary',      val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Menu texto',          ctx: 'Cor',          token: '--text-primary',      val: '#4A4A4A', color: '#4A4A4A' },
                ].map(({ el, ctx, token, val, color }, i, arr) => (
                  <tr key={`${el}-${ctx}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{el}</td>
                    <td className="p-4 text-[#666666]">{ctx}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{token}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{val}</td>
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

        {/* ── Quando Usar ── */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Contexto adicional',
                desc: 'Use quando precisar exibir detalhes, configurações ou informações complementares sem abandonar a tela principal.',
              },
              {
                label: 'Formulários secundários',
                desc: 'Ideal para formulários de edição ou criação que não justificam uma página completa. O rodapé mantém as CTAs sempre visíveis.',
              },
              {
                label: 'Botão fechar (←)',
                desc: 'O ícone arrow_forward_ios no canto superior esquerdo é o padrão de fechamento. Posicione sempre em left: 4 px, top: 4 px.',
              },
              {
                label: 'Menu de opções (⋮)',
                desc: 'Use more_vert no canto superior direito para expor ações de posicionamento (esquerda, direita, topo, base) e navegação (abrir em guia).',
              },
              {
                label: 'Posicionamento do menu',
                desc: 'As opções Esquerda, Direita, Topo e Base permitem ao usuário reposicionar o painel conforme o contexto de trabalho.',
              },
              {
                label: 'Ações de expansão',
                desc: 'Use Expandir/Retrair para controlar o tamanho do painel. "Abrir em outra guia" oferece foco total fora do contexto corrente.',
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
      </div>
    </div>
  )
}
