import { PageHeader } from '../components/PageHeader'

function AddIcon({ color = '#666', size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0, fill: color }}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={color} />
    </svg>
  )
}

const STATES_LINK = [
  { label: 'Enabled',  state: 'enabled' },
  { label: 'Hovered',  state: 'hovered' },
  { label: 'Pressed',  state: 'pressed' },
  { label: 'Selected', state: 'selected' },
  { label: 'Disabled', state: 'disabled' },
]

const STATES_OVERLAY = [
  { label: 'Enabled',  state: 'enabled' },
  { label: 'Hovered',  state: 'hovered' },
  { label: 'Focused',  state: 'focused' },
  { label: 'Pressed',  state: 'pressed' },
  { label: 'Disabled', state: 'disabled' },
]

const STATES_CARD = [
  { label: 'Enabled',  state: 'enabled' },
  { label: 'Hovered',  state: 'hovered' },
  { label: 'Focused',  state: 'focused' },
  { label: 'Pressed',  state: 'pressed' },
  { label: 'Selected', state: 'selected' },
]

// Design 1 — MenuLink: simples, sem ícone, tema claro
function MenuLink({ state = 'enabled' }) {
  const s = {
    enabled:  { bg: 'transparent',            color: '#13283c' },
    hovered:  { bg: 'rgba(48,74,100,0.08)',    color: '#13283c' },
    pressed:  { bg: 'rgba(48,74,100,0.16)',    color: '#13283c' },
    selected: { bg: '#304a64',                 color: '#ffffff' },
    disabled: { bg: 'transparent',            color: '#9e9e9e' },
  }[state]

  return (
    <div style={{ width: 200 }}>
      <div style={{
        height: 36,
        display: 'flex',
        alignItems: 'center',
        padding: '4px 12px',
        borderRadius: '4px 0 0 4px',
        backgroundColor: s.bg,
      }}>
        <span style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          color: s.color,
          flex: 1,
        }}>
          Menu item
        </span>
      </div>
    </div>
  )
}

// Design 2 — MenuSecondary: com ícone (+), tema claro
function MenuSecondary({ state = 'enabled' }) {
  const s = {
    enabled:  { bg: 'transparent',            color: '#666',    iconColor: '#9CB1C8' },
    hovered:  { bg: 'rgba(0,0,0,0.08)',        color: '#666',    iconColor: '#9CB1C8' },
    pressed:  { bg: 'rgba(0,0,0,0.16)',        color: '#666',    iconColor: '#9CB1C8' },
    selected: { bg: '#304a64',                 color: '#ffffff', iconColor: '#ffffff' },
    disabled: { bg: 'transparent',            color: '#9e9e9e', iconColor: '#9e9e9e' },
  }[state]

  return (
    <div style={{ width: 200 }}>
      <div style={{
        height: 36,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 12px 4px 8px',
        borderRadius: 4,
        backgroundColor: s.bg,
      }}>
        <AddIcon color={s.iconColor} size={24} />
        <span style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '0.1px',
          color: s.color,
          flex: 1,
        }}>
          Menu item
        </span>
      </div>
    </div>
  )
}

// Design 3 — MenuOverlay: tema escuro
function MenuOverlay({ state = 'enabled' }) {
  const s = {
    enabled:  { bg: 'transparent',               color: '#ffffff' },
    hovered:  { bg: 'rgba(255,255,255,0.08)',     color: '#ffffff' },
    focused:  { bg: 'rgba(255,255,255,0.12)',     color: '#ffffff' },
    pressed:  { bg: 'rgba(255,255,255,0.16)',     color: '#ffffff' },
    disabled: { bg: 'transparent',               color: 'rgba(255,255,255,0.38)' },
  }[state]

  return (
    <div style={{ width: 200 }}>
      <div style={{
        height: 36,
        display: 'flex',
        alignItems: 'center',
        padding: '4px 12px 4px 8px',
        borderRadius: 4,
        backgroundColor: s.bg,
      }}>
        <span style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '0.1px',
          color: s.color,
          flex: 1,
        }}>
          Menu item
        </span>
      </div>
    </div>
  )
}

// Design 4 — MenuService: card com ícone, título e descrição
function MenuService({ state = 'enabled' }) {
  const s = {
    enabled:  { bg: '#ffffff',               border: '1px solid #e9eff2',   iconColor: '#018e42' },
    hovered:  { bg: 'rgba(48,74,100,0.08)',   border: '2px solid #13283c',  iconColor: '#13283c' },
    focused:  { bg: 'rgba(48,74,100,0.12)',   border: '2px solid #13283c',  iconColor: '#13283c' },
    pressed:  { bg: 'rgba(48,74,100,0.16)',   border: '2px solid #13283c',  iconColor: '#13283c' },
    selected: { bg: '#ffffff',               border: '2px solid #13283c',   iconColor: '#13283c' },
  }[state]

  return (
    <div style={{
      width: 296,
      backgroundColor: s.bg,
      border: s.border,
      borderRadius: 4,
      padding: '12px 16px',
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      boxSizing: 'border-box',
    }}>
      <AddIcon color={s.iconColor} size={24} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <p style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 600,
          fontSize: 18,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          color: '#4a4a4a',
          margin: 0,
        }}>
          Title
        </p>
        <p style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '16px',
          letterSpacing: '0.4px',
          color: '#666',
          margin: 0,
        }}>
          Lorem ipsum dolor sit amet consectetur facilisis ullamcorper lobortis sapien.
        </p>
      </div>
    </div>
  )
}

// Design 5 — MenuCDescricao: card com título e descrição, sem ícone
function MenuCDescricao({ state = 'enabled' }) {
  const s = {
    enabled:  { bg: '#ffffff',               border: '1px solid #e9eff2' },
    hovered:  { bg: 'rgba(48,74,100,0.08)',   border: '2px solid #13283c' },
    focused:  { bg: 'rgba(48,74,100,0.12)',   border: '2px solid #13283c' },
    pressed:  { bg: 'rgba(48,74,100,0.16)',   border: '2px solid #13283c' },
    selected: { bg: '#ffffff',               border: '2px solid #13283c' },
  }[state]

  return (
    <div style={{
      width: 296,
      backgroundColor: s.bg,
      border: s.border,
      borderRadius: 4,
      padding: '12px 16px',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <p style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 600,
          fontSize: 18,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          color: '#4a4a4a',
          margin: 0,
        }}>
          Title
        </p>
        <p style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '16px',
          letterSpacing: '0.4px',
          color: '#666',
          margin: 0,
        }}>
          Lorem ipsum dolor sit amet consectetur facilisis ullamcorper lobortis sapien.
        </p>
      </div>
    </div>
  )
}

// Design 6 — MenuSDescricao: card simples, só título
function MenuSDescricao({ state = 'enabled' }) {
  const s = {
    enabled:  { bg: '#ffffff',               border: '1px solid #e9eff2' },
    hovered:  { bg: 'rgba(48,74,100,0.08)',   border: '2px solid #13283c' },
    focused:  { bg: 'rgba(48,74,100,0.12)',   border: '2px solid #13283c' },
    pressed:  { bg: 'rgba(48,74,100,0.16)',   border: '2px solid #13283c' },
    selected: { bg: '#ffffff',               border: '2px solid #13283c' },
  }[state]

  return (
    <div style={{
      width: 296,
      backgroundColor: s.bg,
      border: s.border,
      borderRadius: 4,
      padding: '12px 16px',
      boxSizing: 'border-box',
    }}>
      <p style={{
        fontFamily: "'Red Hat Display', sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: '0.15px',
        color: '#4a4a4a',
        margin: 0,
        width: 264,
      }}>
        Title
      </p>
    </div>
  )
}

function StateShowcase({ states, renderItem, dark = false }) {
  return (
    <div
      className={`rounded-[14px] border overflow-hidden ${dark ? 'border-white/10' : 'border-black/10'}`}
      style={dark ? { backgroundColor: '#1E2A3A' } : { backgroundColor: '#ffffff' }}
    >
      {states.map(({ label, state }, i) => (
        <div
          key={state}
          className={`flex items-center gap-6 px-6 py-4 ${i < states.length - 1 ? (dark ? 'border-b border-white/10' : 'border-b border-black/5') : ''}`}
        >
          <span className={`text-xs min-w-[72px] ${dark ? 'text-white/60' : 'text-[#666]'}`}>
            {label}
          </span>
          {renderItem(state)}
        </div>
      ))}
    </div>
  )
}

export default function MegaMenuPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Mega Menu"
          description="Componentes de item de menu para navegação em mega menus. Seis variantes com estados interativos."
        />

        {/* Design 1 — Menu Link */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu Link</h2>
          <p className="text-sm text-[#666666] mb-6">
            Item simples sem ícone, tema claro. Apenas o lado esquerdo possui border-radius. Largura: 200px.
          </p>
          <StateShowcase
            states={STATES_LINK}
            renderItem={(state) => <MenuLink state={state} />}
          />
        </div>

        {/* Design 2 — Menu Secundário */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu Secundário</h2>
          <p className="text-sm text-[#666666] mb-6">
            Item de menu com ícone de ação à esquerda (+), tema claro. Largura: 200px.
          </p>
          <StateShowcase
            states={STATES_LINK}
            renderItem={(state) => <MenuSecondary state={state} />}
          />
        </div>

        {/* Design 3 — Menu Overlay */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu Overlay</h2>
          <p className="text-sm text-[#666666] mb-6">
            Item de menu para superfícies escuras (overlay). Texto e estados em branco com opacidade. Largura: 200px.
          </p>
          <StateShowcase
            states={STATES_OVERLAY}
            renderItem={(state) => <MenuOverlay state={state} />}
            dark
          />
        </div>

        {/* Design 4 — Menu Service */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu Service</h2>
          <p className="text-sm text-[#666666] mb-6">
            Card de menu com ícone, título em destaque e texto descritivo. Borda dupla nos estados ativos. Largura: 296px.
          </p>
          <StateShowcase
            states={STATES_CARD}
            renderItem={(state) => <MenuService state={state} />}
          />
        </div>

        {/* Design 5 — Menu com Descrição */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu com Descrição</h2>
          <p className="text-sm text-[#666666] mb-6">
            Card de menu com título e texto descritivo, sem ícone. Largura: 296px.
          </p>
          <StateShowcase
            states={STATES_CARD}
            renderItem={(state) => <MenuCDescricao state={state} />}
          />
        </div>

        {/* Design 6 — Menu Simples */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Menu Simples</h2>
          <p className="text-sm text-[#666666] mb-6">
            Card de menu com apenas título, sem ícone ou descrição. Largura: 296px.
          </p>
          <StateShowcase
            states={STATES_CARD}
            renderItem={(state) => <MenuSDescricao state={state} />}
          />
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados nos estados dos componentes de Mega Menu.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Estado</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { el: 'State Layer',  estado: 'Hovered (Link/Secondary)',  token: '--blue-600 / 8%',   val: 'rgba(48,74,100,0.08)',  color: 'rgba(48,74,100,0.08)'  },
                  { el: 'State Layer',  estado: 'Pressed (Link/Secondary)',  token: '--blue-600 / 16%',  val: 'rgba(48,74,100,0.16)',  color: 'rgba(48,74,100,0.16)'  },
                  { el: 'State Layer',  estado: 'Selected (Menu Link)',      token: '--blue-600',        val: '#304A64',               color: '#304A64'               },
                  { el: 'State Layer',  estado: 'Hovered (Overlay)',         token: '--white / 8%',      val: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.08)' },
                  { el: 'State Layer',  estado: 'Focused (Overlay)',         token: '--white / 12%',     val: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.12)' },
                  { el: 'State Layer',  estado: 'Pressed (Overlay)',         token: '--white / 16%',     val: 'rgba(255,255,255,0.16)', color: 'rgba(255,255,255,0.16)' },
                  { el: 'Card Border',  estado: 'Enabled',                  token: '--divider',         val: '#E9EFF2',               color: '#E9EFF2'               },
                  { el: 'Card Border',  estado: 'Hovered / Focused / Active',token: '--blue-800',        val: '#13283C',               color: '#13283C'               },
                  { el: 'Ícone',        estado: 'Menu Secundário',           token: '--blue-200',        val: '#9CB1C8',               color: '#9CB1C8'               },
                  { el: 'Ícone',        estado: 'Menu Service — Enabled',    token: '—',                 val: '#018E42',               color: '#018E42'               },
                  { el: 'Ícone',        estado: 'Menu Service — Active',     token: '--blue-800',        val: '#13283C',               color: '#13283C'               },
                  { el: 'Texto',        estado: 'Enabled',                   token: '--text-primary',    val: '#4A4A4A',               color: '#4A4A4A'               },
                  { el: 'Texto',        estado: 'Secundário / Descrição',    token: '--text-secondary',  val: '#666666',               color: '#666666'               },
                  { el: 'Texto',        estado: 'Selected',                  token: '--text-inverse',    val: '#FFFFFF',               color: '#FFFFFF'               },
                  { el: 'Texto',        estado: 'Disabled',                  token: '--text-disabled',   val: '#9E9E9E',               color: '#9E9E9E'               },
                ].map(({ el, estado, token, val, color }, i, arr) => (
                  <tr key={`${el}-${estado}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{el}</td>
                    <td className="p-4 text-[#666666]">{estado}</td>
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

        {/* Anatomia */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos dos componentes.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Menu Link',         desc: '200 × 36 px',        sub: 'Largura × Altura' },
              { label: 'Menu Link',         desc: '4px 12px',           sub: 'Padding (top/bottom left/right)' },
              { label: 'Menu Link',         desc: '4px 0 0 4px',        sub: 'Border-radius (apenas lado esquerdo)' },
              { label: 'Menu Secundário',   desc: '200 × 36 px',        sub: 'Largura × Altura' },
              { label: 'Menu Secundário',   desc: '4px 12px 4px 8px',   sub: 'Padding (top right bottom left)' },
              { label: 'Menu Secundário',   desc: '8 px',               sub: 'Gap ícone ↔ texto' },
              { label: 'Menu Overlay',      desc: '200 × 36 px',        sub: 'Largura × Altura' },
              { label: 'Menu Overlay',      desc: '#1E2A3A',            sub: 'Cor de fundo do container' },
              { label: 'Cards (4–6)',        desc: '296 px',             sub: 'Largura fixa' },
              { label: 'Cards (4–6)',        desc: '12px 16px',          sub: 'Padding (vertical horizontal)' },
              { label: 'Ícone',             desc: '24 × 24 px',         sub: 'Tamanho do ícone nos menus' },
              { label: 'Título (cards)',    desc: '18 px / 600 / 24 px', sub: 'Font-size / Weight / Line-height' },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}-${desc}`} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quando Usar */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Menu Link',
                desc: 'Navegação principal do mega menu, sem ícone. Border-radius apenas no lado esquerdo para indicar seleção com faixa vertical.',
              },
              {
                label: 'Menu Secundário',
                desc: 'Item de menu com ícone de ação (+) para categorias secundárias ou ações inline dentro do mega menu.',
              },
              {
                label: 'Menu Overlay',
                desc: 'Itens de navegação em superfícies escuras ou overlays. Estados em branco com opacidade para manter contraste.',
              },
              {
                label: 'Menu Service',
                desc: 'Card para exibir serviços com ícone representativo, título em destaque e descrição curta.',
              },
              {
                label: 'Menu com Descrição',
                desc: 'Card para categorias ou seções que precisam de contexto adicional além do título, sem ícone.',
              },
              {
                label: 'Menu Simples',
                desc: 'Card minimalista com apenas título, para listas de links diretos sem necessidade de descrição.',
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
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Menu Link — Tamanho',           '200 × 36 px'],
              ['Menu Link — Border-radius',      '4px 0 0 4px (apenas lado esquerdo)'],
              ['Menu Link — Tipografia',         '16px / 500 / 24px, letter-spacing 0.15px, Red Hat Display'],
              ['Menu Secundário — Tamanho',      '200 × 36 px'],
              ['Menu Secundário — Padding',      '4px 12px 4px 8px'],
              ['Menu Secundário — Gap',          '8px entre ícone e texto'],
              ['Menu Secundário — Tipografia',   '14px / 500 / 20px, letter-spacing 0.1px, Red Hat Display'],
              ['Menu Overlay — Fundo',           '#1E2A3A (container escuro)'],
              ['Cards (Service / Descrição / Simples) — Largura', '296px'],
              ['Cards — Padding',                '12px 16px'],
              ['Cards — Border-radius',          '4px'],
              ['Cards — Border ativo',           '2px solid #13283C (--blue-800)'],
              ['Título dos cards',               '18px / 600 / 24px, letter-spacing 0.15px'],
              ['Descrição dos cards',            '12px / 400 / 16px, letter-spacing 0.4px'],
              ['Ícone',                          '24 × 24 px'],
              ['Tokens',                         '--blue-800, --blue-600, --blue-200, --divider, --text-primary, --text-secondary, --text-inverse, --text-disabled'],
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
