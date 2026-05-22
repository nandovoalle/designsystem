import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

/* ─── Building Block: TabItem ─────────────────────────────────────────────
   Reproduz fielmente o componente "Tab / Single Unit" do Figma.
   state: 'enabled' | 'hovered' | 'focused' | 'pressed'
   selected: boolean
   ─────────────────────────────────────────────────────────────────────── */
function TabItem({ label = 'Tab', selected = false, showBadge = false, state = 'enabled', onClick, className = '' }) {
  const isInteractive = state === 'hovered' || state === 'pressed' || !!onClick
  const Tag = isInteractive ? 'button' : 'div'

  const stateLayerColor = selected
    ? { hovered: 'rgba(48,74,100,0.08)', focused: 'rgba(48,74,100,0.12)', pressed: 'rgba(48,74,100,0.16)' }[state]
    : { hovered: 'rgba(0,0,0,0.08)',    focused: 'rgba(0,0,0,0.12)',     pressed: 'rgba(0,0,0,0.16)' }[state]

  const textColor = state === 'enabled' ? '#666666' : '#4A4A4A'

  return (
    <Tag
      className={`flex flex-col items-start relative${isInteractive ? ' cursor-pointer' : ''}${className ? ` ${className}` : ''}`}
      onClick={onClick}
      type={isInteractive ? 'button' : undefined}
    >
      <div
        style={{
          display: 'flex',
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 16px',
          width: '100%',
          flexShrink: 0,
          backgroundColor: stateLayerColor || 'transparent',
          borderBottom: selected ? '3px solid #304A64' : undefined,
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <p
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: selected ? 700 : 400,
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '0.25px',
              color: textColor,
              textAlign: 'center',
              margin: 0,
              whiteSpace: 'nowrap',
              wordBreak: 'break-word',
            }}
          >
            {label}
          </p>
          {showBadge && (
            <div
              style={{
                backgroundColor: '#E9786B',
                borderRadius: 100,
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <div style={{ width: 2, height: 2, flexShrink: 0 }} />
            </div>
          )}
        </div>
      </div>
    </Tag>
  )
}

/* ─── Tabs Bar ────────────────────────────────────────────────────────────
   Reproduz o componente "Tabs" do Figma: barra com N abas em flex-1.
   ─────────────────────────────────────────────────────────────────────── */
function TabsBar({ tabs, activeTab, onTabChange }) {
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'flex-start', width: '100%' }}>
      {tabs.map((tab, i) => (
        <TabItem
          key={i}
          label={tab.label}
          selected={activeTab === i}
          showBadge={tab.badge}
          state="enabled"
          onClick={() => onTabChange(i)}
          className="flex-1 min-w-0"
        />
      ))}
    </div>
  )
}

/* ─── Page ────────────────────────────────────────────────────────────── */

const BUILDING_BLOCKS_STATES = [
  { state: 'enabled', selected: false },
  { state: 'hovered', selected: false },
  { state: 'focused', selected: false },
  { state: 'pressed', selected: false },
  { state: 'enabled', selected: true },
  { state: 'hovered', selected: true },
  { state: 'focused', selected: true },
  { state: 'pressed', selected: true },
]

const TABS_PREVIEW = [
  { label: 'Tab', badge: false },
  { label: 'Tab', badge: false },
  { label: 'Tab', badge: false },
]

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Tabs"
          description="Componente de navegação que organiza conteúdo em seções paralelas — permite alternar entre visualizações sem trocar de página."
        />

        {/* ── Preview ─────────────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Barra de abas interativa — 3 abas em <code className="font-mono text-xs text-[#9E9E9E]">flex: 1</code>,
            aba ativa com borda inferior de 3 px e peso Bold.
          </p>
          <div
            className="rounded-[14px] border border-black/10 bg-white overflow-hidden"
            style={{ width: 360 }}
          >
            <TabsBar tabs={TABS_PREVIEW} activeTab={activeTab} onTabChange={setActiveTab} />
            <div
              style={{
                padding: '24px 16px',
                fontFamily: '"Red Hat Display", sans-serif',
                fontSize: 14,
                color: '#666666',
              }}
            >
              Conteúdo da aba {activeTab + 1}
            </div>
          </div>
        </div>

        {/* ── Building Blocks ─────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Building Blocks</h2>
          <p className="text-sm text-[#666666] mb-6">
            Todos os estados do componente{' '}
            <code className="font-mono text-xs text-[#9E9E9E]">Tab / Single Unit</code> — 4 unselected e 4 selected.
          </p>
          <div className="rounded-[14px] border border-black/10 bg-white p-8">
            {/* Unselected */}
            <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-4">selected=false</p>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {BUILDING_BLOCKS_STATES.filter(s => !s.selected).map(({ state }) => (
                <div key={`ns-${state}`} className="flex flex-col items-center gap-3">
                  <div className="rounded-[8px] border border-black/10 overflow-hidden" style={{ width: 80 }}>
                    <TabItem label="Tab" selected={false} state={state} />
                  </div>
                  <span className="text-xs text-[#666666]">{state}</span>
                </div>
              ))}
            </div>
            {/* Selected */}
            <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-4">selected=true</p>
            <div className="grid grid-cols-4 gap-4">
              {BUILDING_BLOCKS_STATES.filter(s => s.selected).map(({ state }) => (
                <div key={`sel-${state}`} className="flex flex-col items-center gap-3">
                  <div className="rounded-[8px] border border-black/10 overflow-hidden" style={{ width: 80 }}>
                    <TabItem label="Tab" selected={true} state={state} />
                  </div>
                  <span className="text-xs text-[#666666]">{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Com Badge ───────────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Com Badge</h2>
          <p className="text-sm text-[#666666] mb-6">
            O ponto vermelho (Badge) indica itens novos ou não lidos em uma aba.
          </p>
          <div className="rounded-[14px] border border-black/10 bg-white overflow-hidden" style={{ width: 360 }}>
            <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'flex-start' }}>
              <TabItem label="Tab" selected={true}  showBadge={true}  state="enabled" className="flex-1 min-w-0" />
              <TabItem label="Tab" selected={false} showBadge={true}  state="enabled" className="flex-1 min-w-0" />
              <TabItem label="Tab" selected={false} showBadge={false} state="enabled" className="flex-1 min-w-0" />
            </div>
          </div>
        </div>

        {/* ── Especificações Técnicas ─────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Especificações Técnicas</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do componente Tabs.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Altura do tab',          desc: '44 px',                         sub: 'Altura fixa da área de toque' },
              { label: 'Padding horizontal',      desc: '16 px',                         sub: 'Espaçamento interno L/R' },
              { label: 'Padding vertical',        desc: '12 px',                         sub: 'Espaçamento interno T/B' },
              { label: 'Borda ativa',             desc: '3 px bottom — #304A64',         sub: 'Somente na aba selecionada' },
              { label: 'Tipografia',              desc: 'Red Hat Display 14 px',         sub: 'Regular → inativa | Bold → ativa' },
              { label: 'Letter-spacing',          desc: '0.25 px',                       sub: 'Ambos os estados' },
              { label: 'Line-height',             desc: '20 px',                         sub: 'Ambos os estados' },
              { label: 'Gap badge',               desc: '4 px',                          sub: 'Entre label e badge' },
              { label: 'Badge',                   desc: '6×6 px, border-radius 100 px',  sub: 'Indicador de notificação' },
              { label: 'Hover (unselected)',      desc: 'rgba(0,0,0,0.08)',              sub: 'State-layer sobre o tab' },
              { label: 'Hover (selected)',        desc: 'rgba(48,74,100,0.08)',          sub: 'State-layer azul sobre o tab ativo' },
              { label: 'Largura ref. (3 abas)',   desc: '360 px',                        sub: 'Cada aba: flex 1' },
            ].map(({ label, desc, sub }) => (
              <div key={label} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tokens de Cor ───────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">Tokens utilizados no componente Tabs.</p>
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
                  { el: 'Borda ativa',       ctx: 'Border bottom', token: '--blue-600',        val: '#304A64',           color: '#304A64' },
                  { el: 'Texto rest',        ctx: 'Cor',           token: '--text-secondary',  val: '#666666',           color: '#666666' },
                  { el: 'Texto interaction', ctx: 'Cor',           token: '--text-primary',    val: '#4A4A4A',           color: '#4A4A4A' },
                  { el: 'Badge',             ctx: 'Background',    token: '--error',            val: '#E9786B',           color: '#E9786B' },
                  { el: 'Hover unselected',  ctx: 'State-layer',   token: '—',                  val: 'rgba(0,0,0,0.08)',  color: 'rgba(0,0,0,0.08)' },
                  { el: 'Hover selected',    ctx: 'State-layer',   token: '—',                  val: 'rgba(48,74,100,0.08)', color: 'rgba(48,74,100,0.08)' },
                ].map(({ el, ctx, token, val, color }, i, arr) => (
                  <tr key={el} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
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

        {/* ── Quando Usar ─────────────────────────────────────────────── */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Conteúdo paralelo',
                desc: 'Use Tabs para 2–5 seções de conteúdo relacionadas que o usuário precise comparar ou alternar sem mudar de página.',
              },
              {
                label: 'Bold = selecionado',
                desc: 'O peso Bold é reservado à aba ativa. Inativas usam Regular — isso reforça a hierarquia visual sem depender só da cor.',
              },
              {
                label: 'Badge com moderação',
                desc: 'O ponto vermelho indica itens não lidos. Use com parcimônia para não poluir a interface com múltiplos indicadores simultâneos.',
              },
              {
                label: 'Não use para navegação global',
                desc: 'Tabs organizam conteúdo dentro de uma mesma tela. Para navegação entre páginas distintas, prefira a Sidebar ou uma NavBar.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--blue-600)' }} />
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
