import { PageHeader } from '../components/PageHeader'

/* ─────────────────────────── SVG Icons ─────────────────────────── */

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="var(--text-disabled)"
      aria-hidden
      style={{ display: 'block', flexShrink: 0, width: 20, height: 20, minWidth: 20, minHeight: 20, maxWidth: 20, maxHeight: 20 }}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  )
}

function AddCircleIcon() {
  return (
    <span
      className="material-symbols-outlined"
      aria-hidden
      style={{
        fontSize: 55, width: 55, height: 55,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--blue-200)',
        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48",
        flexShrink: 0, lineHeight: 1,
      }}
    >
      add_circle
    </span>
  )
}

function TrashIcon() {
  return (
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" style={{ flexShrink: 0 }}>
      <rect x="24.5" y="6" width="16" height="6.5" rx="2.5" stroke="var(--error)" strokeWidth="1.8" />
      <path d="M11 15.5h43" stroke="var(--error)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17.5 22.5h30L45 53H20L17.5 22.5Z" stroke="var(--error)" strokeWidth="1.8" strokeLinejoin="round" />
      <line x1="26.5" y1="27.5" x2="25.5" y2="49" stroke="var(--error)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32.5" y1="27.5" x2="32.5" y2="49" stroke="var(--error)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38.5" y1="27.5" x2="39.5" y2="49" stroke="var(--error)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ─────────────────── Modal sub-components ─────────────────── */

function ModalHeader({ title }) {
  return (
    <div style={{
      borderBottom: '1px solid var(--divider)', display: 'flex', gap: 12,
      height: 48, alignItems: 'center', paddingLeft: 16, paddingRight: 8,
      paddingTop: 12, paddingBottom: 12, flexShrink: 0, width: '100%',
    }}>
      <p style={{
        flex: '1 0 0', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500,
        fontSize: 16, lineHeight: '24px', letterSpacing: '0.15px',
        color: 'var(--text-primary)', minWidth: 0, margin: 0, wordBreak: 'break-word',
      }}>
        {title}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', flexShrink: 0, width: 40, height: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 4 }}>
            <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ModalFooter({ cancelLabel, confirmLabel }) {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexShrink: 0 }}>
      <div style={{ border: '1px solid var(--error)', borderRadius: 4, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, borderRadius: 4 }}>
          <span style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '0.1px', color: 'var(--error)', whiteSpace: 'nowrap' }}>
            {cancelLabel}
          </span>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--blue-600)', borderRadius: 4, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, borderRadius: 4 }}>
          <span style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '0.1px', color: 'var(--text-inverse)', whiteSpace: 'nowrap' }}>
            {confirmLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

function ModalDefault() {
  return (
    <div style={{
      backgroundColor: 'white', display: 'flex', flexDirection: 'column',
      height: 330, width: 432, alignItems: 'center', position: 'relative',
      borderRadius: 4, flexShrink: 0,
    }}>
      <ModalHeader title="Title" />
      <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', gap: 24, alignItems: 'flex-start', minHeight: 0, padding: 24, position: 'relative', width: '100%' }}>
        <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center', minHeight: 0, width: '100%' }}>
          <AddCircleIcon />
          <p style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', letterSpacing: '0.5px', color: 'var(--text-secondary)', textAlign: 'center', margin: 0, width: '100%', flexShrink: 0, wordBreak: 'break-word' }}>
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 700, fontSize: 16, lineHeight: '24px', letterSpacing: '0.5px', color: 'var(--text-secondary)', textAlign: 'center', margin: 0, width: '100%', flexShrink: 0, wordBreak: 'break-word' }}>
            Amet adipiscing nisl a tempor integer
          </p>
        </div>
        <ModalFooter cancelLabel="Label" confirmLabel="Label" />
      </div>
    </div>
  )
}

function ModalExclusao() {
  return (
    <div style={{
      backgroundColor: 'white', display: 'flex', flexDirection: 'column',
      height: 330, width: 432, alignItems: 'center', position: 'relative',
      borderRadius: 4, flexShrink: 0,
    }}>
      <ModalHeader title="Tem certeza?" />
      <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', gap: 24, alignItems: 'flex-start', minHeight: 0, padding: 24, position: 'relative', width: '100%' }}>
        <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center', minHeight: 0, width: '100%' }}>
          <TrashIcon />
          <p style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', letterSpacing: '0.5px', color: 'var(--text-secondary)', textAlign: 'center', margin: 0, width: '100%', flexShrink: 0, wordBreak: 'break-word' }}>
            Lorem ipsum dolor sit amet consectetur:
          </p>
          <p style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 700, fontSize: 16, lineHeight: '24px', letterSpacing: '0.5px', color: 'var(--text-secondary)', textAlign: 'center', margin: 0, width: '100%', flexShrink: 0, wordBreak: 'break-word' }}>
            <span style={{ fontWeight: 700 }}>Amet adipiscing nisl a tempor integer</span>
            <span style={{ fontWeight: 400 }}>?</span>
          </p>
        </div>
        <ModalFooter cancelLabel="Cancelar" confirmLabel="Sim, desejo excluir!" />
      </div>
    </div>
  )
}

/* ─────────────────── Page helpers ─────────────────── */

function SpecRow({ label, value, note }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-[#E9EFF2] last:border-0">
      <div className="min-w-0">
        <p className="text-xs font-medium text-[#13283C]">{label}</p>
        {note && <p className="text-[11px] text-[#9E9E9E] mt-0.5 leading-relaxed">{note}</p>}
      </div>
      <span className="text-[11px] font-mono bg-[#F0F2F5] text-[#666666] px-2 py-1 rounded whitespace-nowrap flex-shrink-0 leading-relaxed">
        {value}
      </span>
    </div>
  )
}

function SpecCard({ title, rows }) {
  return (
    <div className="rounded-2xl border border-[#E9EFF2] overflow-hidden bg-white">
      <div className="px-5 py-3 border-b border-[#E9EFF2] bg-[#F9FAFB]">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9E9E9E]">{title}</span>
      </div>
      <div className="px-5 divide-y-0">
        {rows.map(r => <SpecRow key={r.label} {...r} />)}
      </div>
    </div>
  )
}

/* ──────────────────────────── Page ──────────────────────────────── */

export default function ModalPage() {
  return (
    <div className="p-[68px] min-h-full transition-colors">
      <div className="container max-w-6xl mx-auto space-y-14">

        <PageHeader
          title="Modal"
          description="Janela de sobreposição focal para confirmações, avisos e ações críticas — interrompe o fluxo e exige resposta do usuário antes de continuar."
        />

        {/* ── Variantes ── */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#13283C] mb-1">Variantes</h2>
            <p className="text-sm text-[#666666]">Duas variantes prontas para uso: confirmação genérica e ação destrutiva.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Default */}
            <div className="rounded-2xl border border-[#E9EFF2] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#E9EFF2] bg-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9E9E9E]">Default</span>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-mono bg-[#EEF3F7] text-[#304A64]">modal/default</span>
              </div>
              <div className="bg-[#F5F6F7] flex items-center justify-center px-6 py-10 overflow-x-auto">
                <ModalDefault />
              </div>
              <div className="px-5 py-4 bg-white border-t border-[#E9EFF2] flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--blue-200)' }} />
                <p className="text-xs text-[#666666] leading-relaxed">
                  Confirmações genéricas e estados vazios. Ícone <span className="font-mono bg-[#F0F2F5] px-1 rounded">add_circle</span> em <span className="font-mono bg-[#F0F2F5] px-1 rounded">--blue-200</span>.
                </p>
              </div>
            </div>

            {/* Exclusão */}
            <div className="rounded-2xl border border-[#E9EFF2] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#E9EFF2] bg-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9E9E9E]">Exclusão</span>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-mono bg-[#FEF2F1] text-[#E9786B]">modal/destructive</span>
              </div>
              <div className="bg-[#F5F6F7] flex items-center justify-center px-6 py-10 overflow-x-auto">
                <ModalExclusao />
              </div>
              <div className="px-5 py-4 bg-white border-t border-[#E9EFF2] flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--error)' }} />
                <p className="text-xs text-[#666666] leading-relaxed">
                  Ações irreversíveis. Ícone de lixo e elementos em <span className="font-mono bg-[#F0F2F5] px-1 rounded">--error</span>. Texto explícito na CTA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Anatomia ── */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#13283C] mb-1">Anatomia</h2>
            <p className="text-sm text-[#666666]">Três regiões fixas que compõem qualquer variante do Modal.</p>
          </div>
          <div className="rounded-2xl border border-[#E9EFF2] overflow-hidden bg-white">
            {[
              {
                n: '01', region: 'Header', color: 'var(--blue-600)', bg: '#EEF3F7',
                desc: 'Título à esquerda e botão de fechar à direita. Altura fixa de 48 px com divider inferior.',
                tags: ['48 px altura', 'pl 16 / pr 8 / py 12', 'divider 1 px'],
              },
              {
                n: '02', region: 'Body', color: '#666666', bg: '#F9FAFB',
                desc: 'Ícone + dois parágrafos (regular + bold) centralizados. Padding 24 px em todos os lados.',
                tags: ['padding 24 px', 'gap 16 px conteúdo', 'align center'],
              },
              {
                n: '03', region: 'Footer', color: 'var(--error)', bg: '#FEF2F1',
                desc: 'Dois botões lado a lado: outlined (cancelar, --error) e filled (confirmar, --blue-600).',
                tags: ['gap 24 px', 'height 40 px', 'px 24 / py 10'],
              },
            ].map(({ n, region, color, bg, desc, tags }, i, arr) => (
              <div key={n} className={`flex items-start gap-5 p-5 ${i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}`}>
                <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: bg }}>
                  <span className="text-xs font-bold" style={{ color }}>{n}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-[#13283C]">{region}</p>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed mb-2">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(t => (
                      <span key={t} className="text-[10px] font-mono bg-[#F0F2F5] text-[#666666] px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Especificações Técnicas ── */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#13283C] mb-1">Especificações Técnicas</h2>
            <p className="text-sm text-[#666666]">Medidas e espaçamentos de todas as partes do componente.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <SpecCard
              title="Container & Header"
              rows={[
                { label: 'Largura', value: '432 px', note: 'Largura fixa do modal' },
                { label: 'Altura', value: '330 px', note: 'Altura fixa do modal' },
                { label: 'Border radius', value: '4 px', note: 'Container do modal' },
                { label: 'Background', value: '#FFFFFF', note: 'Fundo branco puro' },
                { label: 'Header — altura', value: '48 px', note: 'Linha do cabeçalho' },
                { label: 'Header — padding', value: 'pt 12 · pb 12 · pl 16 · pr 8', note: 'Espaçamento interno' },
                { label: 'Header — gap', value: '12 px', note: 'Entre título e botão fechar' },
                { label: 'Header — divider', value: '1 px solid var(--divider)', note: 'Borda inferior #E9EFF2' },
                { label: 'Título', value: 'Medium 500 / 16 / 24', note: 'Red Hat Display, ls 0.15 px' },
                { label: 'Botão fechar', value: '40 × 40 px', note: 'Container do icon button' },
                { label: 'Ícone close (×)', value: '20 × 20 px', note: 'SVG fixo, fill --text-disabled' },
              ]}
            />
            <SpecCard
              title="Body & Footer"
              rows={[
                { label: 'Body — padding', value: '24 px', note: 'Em todos os lados' },
                { label: 'Body — gap', value: '24 px', note: 'Entre conteúdo e footer' },
                { label: 'Conteúdo — gap', value: '16 px', note: 'Entre ícone e textos' },
                { label: 'Alinhamento', value: 'center / center', note: 'Horizontal e vertical' },
                { label: 'Ícone add_circle', value: '55 × 55 px', note: 'Material Symbols, weight 300' },
                { label: 'Ícone lixo', value: '65 × 65 px', note: 'Vetor SVG interno' },
                { label: 'Texto regular', value: 'Regular 400 / 16 / 24', note: 'Red Hat Display, ls 0.5 px' },
                { label: 'Texto negrito', value: 'Bold 700 / 16 / 24', note: 'Mesmas dimensões, weight 700' },
                { label: 'Footer — gap', value: '24 px', note: 'Entre botões' },
                { label: 'Botão — altura', value: '40 px', note: 'Ambos os botões' },
                { label: 'Botão — padding', value: 'px 24 · py 10', note: 'Interno ao state layer' },
                { label: 'Botão — tipografia', value: 'Medium 500 / 14 / 20', note: 'Red Hat Display, ls 0.1 px' },
              ]}
            />
          </div>
        </section>

        {/* ── Tokens de Cor ── */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#13283C] mb-1">Tokens de Cor</h2>
            <p className="text-sm text-[#666666]">Todos os tokens aplicados nas duas variantes.</p>
          </div>
          <div className="rounded-2xl border border-[#E9EFF2] overflow-hidden bg-white">
            <div className="grid grid-cols-5 px-5 py-3 border-b border-[#E9EFF2] bg-[#F9FAFB]">
              {['Elemento', 'Propriedade', 'Token', 'Valor', 'Preview'].map(h => (
                <span key={h} className="text-[11px] font-semibold uppercase tracking-widest text-[#9E9E9E]">{h}</span>
              ))}
            </div>
            {[
              { el: 'Modal',            prop: 'Background',  token: 'white',            val: '#FFFFFF', color: '#FFFFFF' },
              { el: 'Header divider',   prop: 'Border',      token: '--divider',        val: '#E9EFF2', color: '#E9EFF2' },
              { el: 'Título',           prop: 'Cor',         token: '--text-primary',   val: '#4A4A4A', color: '#4A4A4A' },
              { el: 'Ícone fechar',     prop: 'Fill',        token: '--text-disabled',  val: '#9E9E9E', color: '#9E9E9E' },
              { el: 'Ícone add_circle', prop: 'Cor',         token: '--blue-200',       val: '#9CB1C8', color: '#9CB1C8' },
              { el: 'Ícone lixo',       prop: 'Stroke',      token: '--error',          val: '#E9786B', color: '#E9786B' },
              { el: 'Texto corpo',      prop: 'Cor',         token: '--text-secondary', val: '#666666', color: '#666666' },
              { el: 'Botão outlined',   prop: 'Borda / Texto', token: '--error',        val: '#E9786B', color: '#E9786B' },
              { el: 'Botão filled',     prop: 'Background',  token: '--blue-600',       val: '#304A64', color: '#304A64' },
              { el: 'Botão filled',     prop: 'Texto',       token: '--text-inverse',   val: '#FFFFFF', color: '#FFFFFF' },
            ].map(({ el, prop, token, val, color }, i, arr) => (
              <div key={`${el}-${prop}`} className={`grid grid-cols-5 items-center px-5 py-3.5 ${i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}`}>
                <span className="text-xs font-medium text-[#13283C]">{el}</span>
                <span className="text-xs text-[#666666]">{prop}</span>
                <span className="text-[11px] font-mono text-[#666666]">{token}</span>
                <span className="text-[11px] font-mono text-[#666666]">{val}</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md border border-black/10 flex-shrink-0" style={{ backgroundColor: color }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Boas Práticas ── */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#13283C] mb-1">Boas Práticas</h2>
            <p className="text-sm text-[#666666]">Diretrizes para uso correto e consistente do componente.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                label: 'Use apenas quando obrigatório',
                desc: 'O Modal bloqueia toda interação com a tela. Reserve-o para decisões que não podem ser adiadas — nunca para informações opcionais.',
                accent: 'var(--blue-600)',
              },
              {
                label: 'Variante certa para cada ação',
                desc: 'Modal Default para confirmações simples ou estados vazios. Modal Exclusão apenas para ações destrutivas e irreversíveis.',
                accent: 'var(--blue-600)',
              },
              {
                label: 'Botão outlined sempre à esquerda',
                desc: 'O botão de cancelar (outlined, --error) é a saída segura e fica à esquerda. O botão de confirmar (filled, --blue-600) fica à direita.',
                accent: 'var(--blue-600)',
              },
              {
                label: 'Texto claro e consequente',
                desc: 'O par regular + bold no corpo resume o contexto e destaca o objeto. Na exclusão, o rótulo "Sim, desejo excluir!" torna a consequência explícita.',
                accent: 'var(--blue-600)',
              },
              {
                label: 'Ícone reforça o tom',
                desc: 'add_circle em --blue-200 para ações neutras. Ícone de lixo em --error para exclusão. O ícone deve alinhar com o nível de urgência da ação.',
                accent: 'var(--blue-600)',
              },
              {
                label: 'Mensagens curtas e diretas',
                desc: 'Mantenha os textos dentro do modal curtos. Se precisar de mais de duas linhas de descrição, considere uma página dedicada em vez de um modal.',
                accent: 'var(--blue-600)',
              },
            ].map(({ label, desc, accent }) => (
              <div key={label} className="rounded-2xl border border-[#E9EFF2] bg-white overflow-hidden flex flex-col">
                <div className="h-1 flex-shrink-0" style={{ backgroundColor: accent }} />
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <p className="text-sm font-semibold text-[#13283C]">{label}</p>
                  <p className="text-xs text-[#666666] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
