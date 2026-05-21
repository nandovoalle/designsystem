import { PageHeader } from '../components/PageHeader'

function ArrowForwardIosIcon() {
  return (
    <svg width={12} height={20} viewBox="6 2 12 20" fill="var(--text-primary)" style={{ flexShrink: 0 }}>
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
    </svg>
  )
}

function DrawerPreview() {
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
        {/* Cancel button — outlined error */}
        <div
          style={{
            border: '1px solid var(--error)',
            borderRadius: 4,
            height: 40,
            display: 'flex',
            flexDirection: 'column',
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
              width: '100%',
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

        {/* Primary button — filled blue-600 */}
        <div
          style={{
            backgroundColor: 'var(--blue-600)',
            borderRadius: 4,
            height: 40,
            display: 'flex',
            flexDirection: 'column',
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
              width: '100%',
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
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'center',
          left: 4,
          top: 4,
          width: 40,
          height: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            flexShrink: 0,
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
            <div
              style={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
        {/* Tooltip — transparent per original design */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            paddingBottom: 4,
            borderRadius: 3,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              lineHeight: '16px',
              letterSpacing: '0.4px',
              color: 'transparent',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
          >
            Fechar
          </span>
        </div>
      </div>
    </div>
  )
}

export default function DrawerPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Drawer"
          description="Painel lateral deslizante com cabeçalho estruturado, área de conteúdo flexível e rodapé de ações — exibe contexto adicional sem abandonar a tela principal."
        />

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Drawer com breadcrumb, título, parágrafo, área de conteúdo e botões de ação.
          </p>
          <div className="rounded-[14px] border border-black/10 overflow-hidden inline-flex">
            <DrawerPreview />
          </div>
        </div>

        {/* Anatomy */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Anatomia</h2>
          <p className="text-sm text-[#666666] mb-6">Medidas e espaçamentos do componente.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Largura',              desc: '742 px',              sub: 'Largura fixa do painel' },
              { label: 'Altura',               desc: '1080 px',             sub: 'Altura fixa do painel' },
              { label: 'Padding horizontal',   desc: '48 px',               sub: 'Esquerda e direita' },
              { label: 'Padding superior',     desc: '16 px',               sub: 'Topo do painel' },
              { label: 'Padding inferior',     desc: '48 px',               sub: 'Base do painel' },
              { label: 'Gap principal',        desc: '48 px',               sub: 'Entre conteúdo e footer' },
              { label: 'Gap header → conteúdo',desc: '24 px',               sub: 'Entre cabeçalho e área cinza' },
              { label: 'Gap interno header',   desc: '8 px',                sub: 'Entre bloco título e parágrafo' },
              { label: 'Gap breadcrumb',       desc: '16 px',               sub: 'Entre breadcrumb e título' },
              { label: 'Área de conteúdo',     desc: 'Border radius 16 px', sub: 'Fundo #f5f5f5, flex-1' },
              { label: 'Botão fechar',         desc: '40 × 40 px',          sub: 'Absoluto: left 4 px, top 4 px' },
              { label: 'Ícone arrow',          desc: '12 × 20 px',          sub: 'arrow_forward_ios em 24 × 24' },
              { label: 'Gap footer',           desc: '24 px',               sub: 'Entre os botões de ação' },
              { label: 'Botões footer',        desc: '40 px altura',        sub: 'Cancel (outlined) + Primary (filled)' },
            ].map(({ label, desc, sub }) => (
              <div key={`${label}-${desc}`} className="bg-white rounded-[14px] border border-black/10 p-5">
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
          <p className="text-sm text-[#666666] mb-6">
            Tokens utilizados nos elementos do componente.
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
                  { el: 'Painel',              ctx: 'Background',   token: 'surface/surface1',  val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Área de conteúdo',    ctx: 'Background',   token: 'surface/surface2',  val: '#F5F5F5', color: '#F5F5F5' },
                  { el: 'Breadcrumb',          ctx: 'Cor',          token: '--blue-200',        val: '#9CB1C8', color: '#9CB1C8' },
                  { el: 'Título',              ctx: 'Cor',          token: '--text-primary',    val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Parágrafo',           ctx: 'Cor',          token: '--text-primary',    val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Texto content area',  ctx: 'Cor',          token: '--text-disabled',   val: '#9E9E9E', color: '#9E9E9E' },
                  { el: 'Ícone fechar',        ctx: 'Cor',          token: '--text-primary',    val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Botão Cancel',        ctx: 'Borda',        token: '--error',           val: '#E9786B', color: '#E9786B' },
                  { el: 'Botão Cancel',        ctx: 'Texto',        token: '--error',           val: '#E9786B', color: '#E9786B' },
                  { el: 'Botão Primary',       ctx: 'Background',   token: '--blue-600',        val: '#304A64', color: '#304A64' },
                  { el: 'Botão Primary',       ctx: 'Texto',        token: '--text-inverse',    val: '#FFFFFF', color: '#FFFFFF' },
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

        {/* Usage guide */}
        <div className="mb-12">
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
                label: 'Breadcrumb de navegação',
                desc: 'Inclua o breadcrumb no cabeçalho para orientar o usuário sobre o contexto atual e facilitar a navegação hierárquica.',
              },
              {
                label: 'Área de conteúdo flexível',
                desc: 'A área cinza cresce para preencher o espaço disponível, comportando tabelas, listas, gráficos ou formulários.',
              },
              {
                label: 'Botão fechar',
                desc: 'O ícone arrow_forward_ios no canto superior esquerdo é o padrão de fechamento. Posicione sempre em left: 4 px, top: 4 px.',
              },
              {
                label: 'Ações no rodapé',
                desc: 'Utilize sempre Cancel (outlined error) + Primary (filled blue) para manter consistência com o padrão de confirmação do sistema.',
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
              ['Largura do painel', '742px — fixa'],
              ['Altura do painel', '1080px — fixa'],
              ['Padding horizontal', '48px (esquerda e direita)'],
              ['Padding superior', '16px'],
              ['Padding inferior', '48px'],
              ['Gap principal', '48px entre área de conteúdo e footer'],
              ['Gap header → conteúdo', '24px'],
              ['Área de conteúdo', 'border-radius 16px, fundo #F5F5F5, flex-1'],
              ['Botão fechar', '40×40px, posição absoluta: left 4px, top 4px'],
              ['Ícone arrow_forward_ios', '12×20px (container 24×24px)'],
              ['Gap footer (botões)', '24px entre Cancel e Primary'],
              ['Botões footer', 'Altura 40px — Cancel (outlined error) + Primary (filled blue)'],
              ['Breadcrumb', '12px / 500 / 16px, letter-spacing 0.4px, cor --blue-200'],
              ['Título', '16px / 700 / 24px, letter-spacing 0.15px, Red Hat Display Bold'],
              ['Parágrafo', '14px / 400 / 20px, letter-spacing 0.25px, Red Hat Display Regular'],
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
