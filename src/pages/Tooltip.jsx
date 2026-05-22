import { PageHeader } from '../components/PageHeader'

/* ─────────────────────── Tooltip Components ─────────────────────── */

function TooltipSingleLine({ text = 'Supporting text' }) {
  return (
    <div
      style={{
        backgroundColor: '#2d3135',
        borderRadius: 3,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <p
        style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '16px',
          letterSpacing: '0.4px',
          color: 'white',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          margin: 0,
          wordBreak: 'break-word',
        }}
      >
        {text}
      </p>
    </div>
  )
}

function TooltipMultiLine({ text = 'Supporting text' }) {
  return (
    <div
      style={{
        backgroundColor: '#2d3135',
        borderRadius: 3,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        display: 'flex',
        alignItems: 'center',
        width: 200,
        flexShrink: 0,
      }}
    >
      <p
        style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '16px',
          letterSpacing: '0.4px',
          color: 'white',
          margin: 0,
          flex: '1 0 0',
          minWidth: 0,
          wordBreak: 'break-word',
        }}
      >
        {text}
      </p>
    </div>
  )
}

/* ──────────────────────────── Page ──────────────────────────────── */

export default function TooltipPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Tooltip"
          description="Rótulo informativo flutuante que exibe texto contextual ao interagir com um elemento — complementa a interface sem ocupar espaço permanente."
        />

        {/* ── Preview ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Duas variantes: <strong>single-line</strong> (largura automática, texto em linha única) e{' '}
            <strong>multi-line</strong> (largura fixa 200 px, texto que quebra em múltiplas linhas).
          </p>
          <div className="rounded-[14px] border border-black/10 bg-white p-10 inline-flex flex-col gap-[24px]">
            <TooltipSingleLine />
            <TooltipMultiLine />
          </div>
        </div>

        {/* ── Variantes ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variantes</h2>
          <p className="text-sm text-[#666666] mb-6">
            Single-line para rótulos curtos; multi-line para descrições que precisam de mais espaço.
          </p>
          <div className="flex flex-wrap gap-6">
            {/* Single-line */}
            <div className="rounded-[14px] border border-black/10 bg-white p-8 flex flex-col items-start gap-4">
              <TooltipSingleLine />
              <div>
                <p className="text-sm font-semibold text-[#13283C]">type=single-line</p>
                <p className="text-xs text-[#666666] mt-0.5">Largura automática — whitespace-nowrap</p>
              </div>
            </div>

            {/* Multi-line */}
            <div className="rounded-[14px] border border-black/10 bg-white p-8 flex flex-col items-start gap-4">
              <TooltipMultiLine text="Supporting text that can wrap to multiple lines inside the tooltip" />
              <div>
                <p className="text-sm font-semibold text-[#13283C]">type=multi-line</p>
                <p className="text-xs text-[#666666] mt-0.5">Largura fixa 200 px — texto quebra normalmente</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Especificações Técnicas ── */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Especificações Técnicas</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos dos componentes Tooltip.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Border radius',           desc: '3 px',                          sub: 'Ambas as variantes' },
              { label: 'Padding horizontal',       desc: '8 px',                          sub: 'paddingLeft e paddingRight' },
              { label: 'Padding vertical',         desc: '4 px',                          sub: 'paddingTop e paddingBottom' },
              { label: 'Largura — single-line',    desc: 'Automática (fit content)',       sub: 'Controlada pelo texto, sem quebra' },
              { label: 'Largura — multi-line',     desc: '200 px',                        sub: 'Fixa, texto quebra naturalmente' },
              { label: 'Tipografia',               desc: 'Red Hat Display Regular 400',   sub: '12 px / 16 px, letter-spacing 0.4 px' },
              { label: 'Cor do texto',             desc: '#FFFFFF (white)',                sub: 'var(--text-inverse)' },
              { label: 'Background',               desc: '#2d3135',                       sub: 'var(--tooltip)' },
              { label: 'Alinhamento — single-line',desc: 'center',                        sub: 'Texto centralizado horizontalmente' },
              { label: 'Alinhamento — multi-line', desc: 'left (padrão)',                 sub: 'Texto alinhado à esquerda' },
              { label: 'word-break',               desc: 'break-word',                    sub: 'Ambas as variantes' },
              { label: 'Display container',        desc: 'inline-flex / flex',            sub: 'Single-line: inline-flex; Multi-line: flex' },
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
          <p className="text-sm text-[#666666] mb-6">Tokens utilizados nas variantes do Tooltip.</p>
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
                  { el: 'Tooltip container', ctx: 'Background', token: '--tooltip',      val: '#2d3135', color: '#2d3135' },
                  { el: 'Texto',             ctx: 'Cor',        token: '--text-inverse', val: '#FFFFFF', color: '#FFFFFF' },
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
                label: 'Single-line',
                desc: 'Use quando o texto de ajuda for curto e caber em uma única linha — ideal para rótulos de ícones, atalhos de teclado e descrições breves.',
              },
              {
                label: 'Multi-line',
                desc: 'Use quando a explicação precisar de mais de uma linha. A largura fixa de 200 px mantém o tooltip legível sem se expandir demais.',
              },
              {
                label: 'Fundo escuro constante',
                desc: 'O background #2d3135 é fixo em ambos os modos (light e dark) — o tooltip sempre contrasta com a superfície abaixo por sua coloração própria.',
              },
              {
                label: 'Texto sempre branco',
                desc: 'Utilize sempre o token --text-inverse (#FFFFFF) sobre o fundo escuro do tooltip para garantir contraste adequado e legibilidade.',
              },
              {
                label: 'Tipografia body/small',
                desc: 'O estilo Elleven/body/small (12 px / Regular / ls 0.4 px) é o único tamanho previsto — não use variações de peso ou tamanho dentro do tooltip.',
              },
              {
                label: 'Não use para ações',
                desc: 'Tooltips são informativos, não interativos. Para ações ou links dentro de uma sobreposição, use um Popover ou Menu em vez de Tooltip.',
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
