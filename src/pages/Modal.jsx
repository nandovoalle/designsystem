import { PageHeader } from '../components/PageHeader'

/* ─────────────────────────── SVG Icons ─────────────────────────── */

/* close — vetor 20 × 20 px (SVG fixo; não usar Material Symbols — opsz global força ~24px) */
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="var(--text-disabled)"
      aria-hidden
      style={{
        display: 'block',
        flexShrink: 0,
        width: 20,
        height: 20,
        minWidth: 20,
        minHeight: 20,
        maxWidth: 20,
        maxHeight: 20,
      }}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  )
}

/* add_circle — 55 × 55 px, weight 300 */
function AddCircleIcon() {
  return (
    <span
      className="material-symbols-outlined"
      aria-hidden
      style={{
        fontSize: 55,
        width: 55,
        height: 55,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--blue-200)',
        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48",
        flexShrink: 0,
        lineHeight: 1,
      }}
    >
      add_circle
    </span>
  )
}

/* lixo — vetor interno 65 × 65 px */
function TrashIcon() {
  return (
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" style={{ flexShrink: 0 }}>
      {/* Handle */}
      <rect x="24.5" y="6" width="16" height="6.5" rx="2.5" stroke="var(--error)" strokeWidth="1.8" />
      {/* Lid */}
      <path d="M11 15.5h43" stroke="var(--error)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Body */}
      <path d="M17.5 22.5h30L45 53H20L17.5 22.5Z" stroke="var(--error)" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Vertical bars */}
      <line x1="26.5" y1="27.5" x2="25.5" y2="49" stroke="var(--error)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32.5" y1="27.5" x2="32.5" y2="49" stroke="var(--error)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38.5" y1="27.5" x2="39.5" y2="49" stroke="var(--error)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ─────────────────── Shared sub-components ─────────────────── */

function ModalHeader({ title }) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--divider)',
        display: 'flex',
        gap: 12,
        height: 48,
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 8,
        paddingTop: 12,
        paddingBottom: 12,
        flexShrink: 0,
        width: '100%',
      }}
    >
      <p
        style={{
          flex: '1 0 0',
          fontFamily: '"Red Hat Display", sans-serif',
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          color: 'var(--text-primary)',
          minWidth: 0,
          margin: 0,
          wordBreak: 'break-word',
        }}
      >
        {title}
      </p>

      {/* Icon button — fechar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
          flexShrink: 0,
          width: 40,
          height: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              borderRadius: 4,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
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
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexShrink: 0,
      }}
    >
      {/* Outlined — error */}
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
            {cancelLabel}
          </span>
        </div>
      </div>

      {/* Filled — blue-600 */}
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
            {confirmLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ───────────────────────── Modal Default ───────────────────────── */

function ModalDefault() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: 330,
        width: 432,
        alignItems: 'center',
        position: 'relative',
        borderRadius: 4,
        flexShrink: 0,
      }}
    >
      <ModalHeader title="Title" />

      {/* Body */}
      <div
        style={{
          display: 'flex',
          flex: '1 0 0',
          flexDirection: 'column',
          gap: 24,
          alignItems: 'flex-start',
          minHeight: 0,
          padding: 24,
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flex: '1 0 0',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
            width: '100%',
          }}
        >
          <AddCircleIcon />
          <p
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              letterSpacing: '0.5px',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              margin: 0,
              width: '100%',
              flexShrink: 0,
              wordBreak: 'break-word',
            }}
          >
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '24px',
              letterSpacing: '0.5px',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              margin: 0,
              width: '100%',
              flexShrink: 0,
              wordBreak: 'break-word',
            }}
          >
            Amet adipiscing nisl a tempor integer
          </p>
        </div>

        <ModalFooter cancelLabel="Label" confirmLabel="Label" />
      </div>
    </div>
  )
}

/* ─────────────────────── Modal Exclusão ──────────────────────── */

function ModalExclusao() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: 330,
        width: 432,
        alignItems: 'center',
        position: 'relative',
        borderRadius: 4,
        flexShrink: 0,
      }}
    >
      <ModalHeader title="Tem certeza?" />

      {/* Body */}
      <div
        style={{
          display: 'flex',
          flex: '1 0 0',
          flexDirection: 'column',
          gap: 24,
          alignItems: 'flex-start',
          minHeight: 0,
          padding: 24,
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flex: '1 0 0',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
            width: '100%',
          }}
        >
          <TrashIcon />
          <p
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              letterSpacing: '0.5px',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              margin: 0,
              width: '100%',
              flexShrink: 0,
              wordBreak: 'break-word',
            }}
          >
            Lorem ipsum dolor sit amet consectetur:
          </p>
          <p
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '24px',
              letterSpacing: '0.5px',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              margin: 0,
              width: '100%',
              flexShrink: 0,
              wordBreak: 'break-word',
            }}
          >
            <span style={{ fontWeight: 700 }}>Amet adipiscing nisl a tempor integer</span>
            <span style={{ fontWeight: 400 }}>?</span>
          </p>
        </div>

        <ModalFooter cancelLabel="Cancelar" confirmLabel="Sim, desejo excluir!" />
      </div>
    </div>
  )
}

/* ──────────────────────────── Page ──────────────────────────────── */

export default function ModalPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Modal"
          description="Janela de sobreposição focal para confirmações, avisos e ações críticas — interrompe o fluxo e exige resposta do usuário antes de continuar."
        />

        {/* ── Preview ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Duas variantes: <strong>Modal default</strong> (estado vazio / confirmação genérica) e <strong>Modal Exclusão</strong> (ação destrutiva irreversível).
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="rounded-[14px] border border-black/10 overflow-hidden inline-flex bg-[#F5F5F5] p-8">
              <ModalDefault />
            </div>
            <div className="rounded-[14px] border border-black/10 overflow-hidden inline-flex bg-[#F5F5F5] p-8">
              <ModalExclusao />
            </div>
          </div>
        </div>

        {/* ── Especificações Técnicas — Container e Header ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Especificações Técnicas — Container e Header</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do container e do cabeçalho.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Largura',              desc: '432 px',                  sub: 'Largura fixa do modal' },
              { label: 'Altura',               desc: '330 px',                  sub: 'Altura fixa do modal' },
              { label: 'Border radius',        desc: '4 px',                    sub: 'Container do modal' },
              { label: 'Background',           desc: '#FFFFFF',                 sub: 'Fundo branco puro' },
              { label: 'Header — altura',      desc: '48 px',                   sub: 'Linha do cabeçalho' },
              { label: 'Header — padding',     desc: 'pt 12, pb 12, pl 16, pr 8', sub: 'Espaçamento interno' },
              { label: 'Header — gap',         desc: '12 px',                   sub: 'Entre título e botão fechar' },
              { label: 'Header — divider',     desc: '1 px solid var(--divider)', sub: 'Borda inferior #E9EFF2' },
              { label: 'Título',               desc: 'Medium 500 / 16 px / 24 px', sub: 'Red Hat Display, ls 0.15 px' },
              { label: 'Botão fechar',         desc: '40 × 40 px',              sub: 'Container do icon button' },
              { label: 'State layer fechar',   desc: 'padding 8 px',            sub: 'Border-radius 4 px' },
              { label: 'Ícone close (X)',      desc: '20 × 20 px',              sub: 'Vetor SVG fixo no botão fechar' },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}-${desc}`} className="bg-white rounded-[14px] border border-black/10 p-5">
                <p className="text-xs font-medium text-[#9E9E9E] uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#13283C]">{desc}</p>
                <p className="text-xs text-[#666666] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Especificações Técnicas — Body e Botões ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Especificações Técnicas — Body e Botões</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos da área de conteúdo e rodapé.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Body — padding',        desc: '24 px',                   sub: 'Em todos os lados' },
              { label: 'Body — gap',            desc: '24 px',                   sub: 'Entre conteúdo e footer' },
              { label: 'Área de conteúdo — gap', desc: '16 px',                  sub: 'Entre ícone e textos' },
              { label: 'Alinhamento conteúdo',  desc: 'center / center',         sub: 'Horizontal e vertical centralizados' },
              { label: 'Ícone add_circle',      desc: '55 × 55 px',              sub: 'Material Symbols Outlined, weight 300' },
              { label: 'Ícone lixo (exclusão)', desc: '65 × 65 px',              sub: 'Vetor interno (não container)' },
              { label: 'Texto corpo',           desc: 'Regular 400 / 16 px / 24 px', sub: 'Red Hat Display, ls 0.5 px, center' },
              { label: 'Texto negrito',         desc: 'Bold 700 / 16 px / 24 px', sub: 'Mesmas dimensões, weight 700' },
              { label: 'Footer — gap',          desc: '24 px',                   sub: 'Entre botões Cancel e Primary' },
              { label: 'Botão — altura',        desc: '40 px',                   sub: 'Ambos os botões' },
              { label: 'Botão — padding',       desc: 'px 24, py 10',            sub: 'Interno ao state layer' },
              { label: 'Botão — border radius', desc: '4 px',                    sub: 'Container e state layer' },
              { label: 'Tipografia botões',     desc: 'Medium 500 / 14 px / 20 px', sub: 'Red Hat Display, ls 0.1 px' },
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
          <p className="text-sm text-[#666666] mb-6">Tokens utilizados nas duas variantes do Modal.</p>
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
                  { el: 'Modal',              ctx: 'Background',  token: 'white',           val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Divider header',     ctx: 'Border',      token: '--divider',       val: '#E9EFF2', color: '#E9EFF2' },
                  { el: 'Título',             ctx: 'Cor',         token: '--text-primary',  val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Ícone fechar (X)',   ctx: 'Cor',         token: '--text-disabled', val: '#9E9E9E', color: '#9E9E9E' },
                  { el: 'Ícone add_circle',   ctx: 'Cor',         token: '--blue-200',      val: '#9CB1C8', color: '#9CB1C8' },
                  { el: 'Ícone lixo',         ctx: 'Cor',         token: '--error',         val: '#E9786B', color: '#E9786B' },
                  { el: 'Texto corpo',        ctx: 'Cor',         token: '--text-secondary',val: '#666666', color: '#666666' },
                  { el: 'Botão outlined',     ctx: 'Borda',       token: '--error',         val: '#E9786B', color: '#E9786B' },
                  { el: 'Botão outlined',     ctx: 'Texto',       token: '--error',         val: '#E9786B', color: '#E9786B' },
                  { el: 'Botão filled',       ctx: 'Background',  token: '--blue-600',      val: '#304A64', color: '#304A64' },
                  { el: 'Botão filled',       ctx: 'Texto',       token: '--text-inverse',  val: '#FFFFFF', color: '#FFFFFF' },
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

        {/* ── Quando Usar ── */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Confirmação genérica',
                desc: 'Use o Modal default com o ícone add_circle para estados vazios ou para confirmar ações simples que não envolvam risco de perda de dados.',
              },
              {
                label: 'Ação destrutiva (exclusão)',
                desc: 'Use o Modal Exclusão com o ícone lixo e os textos "Tem certeza?" / "Sim, desejo excluir!" quando a ação for irreversível e exigir confirmação explícita.',
              },
              {
                label: 'Botão outlined (cancelar)',
                desc: 'Sempre posicione o botão outlined à esquerda como opção de saída segura. Cor var(--error) reforça a tonalidade de alerta sem ser o destaque principal.',
              },
              {
                label: 'Botão filled (confirmar)',
                desc: 'O botão filled em var(--blue-600) é a CTA principal. No Modal Exclusão, o rótulo "Sim, desejo excluir!" torna a consequência explícita para o usuário.',
              },
              {
                label: 'Foco total',
                desc: 'O Modal bloqueia interação com a tela de fundo. Use apenas quando a decisão é obrigatória e não pode ser adiada — evite modais para informações opcionais.',
              },
              {
                label: 'Texto descritivo',
                desc: 'O par regular + negrito no corpo do modal resume o contexto (linha 1) e destaca o objeto da ação (linha 2). Mantenha mensagens curtas e diretas.',
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
