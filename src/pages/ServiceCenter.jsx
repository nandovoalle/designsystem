import { PageHeader } from '../components/PageHeader'

const zones = [
  {
    id: 'A',
    name: 'Header',
    color: '#9E9E9E',
    textColor: '#fff',
    descricao: 'Barra superior de navegação global da aplicação.',
    altura: '131px',
    largura: '100% (exceto barra lateral)',
    notas: 'Cantos inferiores arredondados (border-radius: 10px)',
  },
  {
    id: 'B',
    name: 'Barra Lateral',
    color: '#9E9E9E',
    textColor: '#fff',
    descricao: 'Rail de navegação primária, fixo na lateral esquerda.',
    altura: '100%',
    largura: '40px',
    notas: 'Sempre visível, sobrepõe o conteúdo em z-index',
  },
  {
    id: 'C',
    name: 'Painel Esquerdo',
    color: '#ffffff',
    textColor: '#13283C',
    border: '1px solid #E9EFF2',
    descricao: 'Lista de itens, filas ou navegação contextual do serviço.',
    altura: 'Variável (preenche área de conteúdo)',
    largura: '~332px (redimensionável)',
    notas: 'Separado do painel central por um drag handle',
  },
  {
    id: 'D',
    name: 'Painel Central',
    color: '#ffffff',
    textColor: '#13283C',
    border: '1px solid #E9EFF2',
    descricao: 'Área de trabalho principal: detalhes do ticket, formulário ou conteúdo ativo.',
    altura: 'Variável (preenche área de conteúdo)',
    largura: '~630px (redimensionável)',
    notas: 'Painel mais largo por padrão',
  },
  {
    id: 'E',
    name: 'Painel Direito',
    color: '#ffffff',
    textColor: '#13283C',
    border: '1px solid #E9EFF2',
    descricao: 'Informações complementares: dados do cliente, histórico ou propriedades.',
    altura: 'Variável (preenche área de conteúdo)',
    largura: '~36% (redimensionável)',
    notas: 'Separado do painel central por um drag handle',
  },
  {
    id: 'F',
    name: 'Mini Sidebar Direita',
    color: '#ffffff',
    textColor: '#13283C',
    border: '1px solid #E9EFF2',
    descricao: 'Ações rápidas ou atalhos de contexto na extremidade direita.',
    altura: 'Variável (preenche área de conteúdo)',
    largura: '~2% (fixo)',
    notas: 'Coluna estreita sempre visível',
  },
]

function DragHandleIcon() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        opacity: 0.4,
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 1,
            backgroundColor: '#9E9E9E',
            borderRadius: 0.5,
          }}
        />
      ))}
    </div>
  )
}

function StructurePreview() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 900,
        aspectRatio: '16 / 9.5',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        border: '1px solid #E9EFF2',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Red Hat Display", sans-serif',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3.5%',
          height: '100%',
          backgroundColor: '#9E9E9E',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#fff',
            fontSize: 9,
            fontWeight: 700,
            writingMode: 'vertical-rl',
            letterSpacing: 1,
          }}
        >
          B
        </span>
      </div>

      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '3.5%',
          right: 0,
          height: '16%',
          backgroundColor: '#9E9E9E',
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>
          A — Header
        </span>
      </div>

      {/* Content area (below header, right of sidebar) */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '3.5%',
          right: 0,
          bottom: 0,
          display: 'flex',
          gap: 0,
        }}
      >
        {/* Panel C */}
        <div
          style={{
            flex: '0 0 23%',
            backgroundColor: '#ffffff',
            borderRadius: 3,
            margin: '0 0 8px 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 4,
            border: '1px solid #E9EFF2',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: '#13283C', letterSpacing: 0.5 }}>C</span>
          <span style={{ fontSize: 9, color: '#9E9E9E', textAlign: 'center', lineHeight: '12px', padding: '0 6px' }}>
            Painel<br />Esquerdo
          </span>
        </div>

        {/* Drag Handle 1 */}
        <div
          style={{
            flex: '0 0 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DragHandleIcon />
        </div>

        {/* Panel D */}
        <div
          style={{
            flex: '0 0 36%',
            backgroundColor: '#ffffff',
            borderRadius: 3,
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 4,
            border: '1px solid #E9EFF2',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: '#13283C', letterSpacing: 0.5 }}>D</span>
          <span style={{ fontSize: 9, color: '#9E9E9E', textAlign: 'center', lineHeight: '12px', padding: '0 6px' }}>
            Painel<br />Central
          </span>
        </div>

        {/* Drag Handle 2 */}
        <div
          style={{
            flex: '0 0 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DragHandleIcon />
        </div>

        {/* Panel E */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            borderRadius: 3,
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 4,
            border: '1px solid #E9EFF2',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: '#13283C', letterSpacing: 0.5 }}>E</span>
          <span style={{ fontSize: 9, color: '#9E9E9E', textAlign: 'center', lineHeight: '12px', padding: '0 6px' }}>
            Painel<br />Direito
          </span>
        </div>

        {/* Panel F */}
        <div
          style={{
            flex: '0 0 2.5%',
            backgroundColor: '#ffffff',
            borderRadius: 3,
            margin: '0 8px 8px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #E9EFF2',
          }}
        >
          <span
            style={{
              fontSize: 8,
              fontWeight: 700,
              color: '#13283C',
              writingMode: 'vertical-rl',
            }}
          >
            F
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ServiceCenterPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <PageHeader
        title="Estrutura Service Center"
        description="Documentação do layout estrutural da interface Service Center — composição de zonas, painéis redimensionáveis e hierarquia visual."
      />

      {/* Preview */}
      <section className="mb-10">
        <h2 className="text-base font-semibold text-[#13283C] mb-4">Visualização da estrutura</h2>
        <StructurePreview />
        <p className="text-xs text-[#9E9E9E] mt-3">
          Representação esquemática do layout. As letras A–F correspondem às zonas descritas na tabela abaixo.
        </p>
      </section>

      {/* Zones table */}
      <section className="mb-10">
        <h2 className="text-base font-semibold text-[#13283C] mb-4">Zonas e dimensões</h2>
        <div className="border border-[#E9EFF2] rounded-lg overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#F5F5F5] text-left">
                <th className="px-4 py-3 font-semibold text-[#13283C] border-b border-[#E9EFF2] w-10">Zona</th>
                <th className="px-4 py-3 font-semibold text-[#13283C] border-b border-[#E9EFF2]">Nome</th>
                <th className="px-4 py-3 font-semibold text-[#13283C] border-b border-[#E9EFF2]">Descrição</th>
                <th className="px-4 py-3 font-semibold text-[#13283C] border-b border-[#E9EFF2]">Altura</th>
                <th className="px-4 py-3 font-semibold text-[#13283C] border-b border-[#E9EFF2]">Largura</th>
                <th className="px-4 py-3 font-semibold text-[#13283C] border-b border-[#E9EFF2]">Notas</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone, i) => (
                <tr
                  key={zone.id}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}
                >
                  <td className="px-4 py-3 border-b border-[#E9EFF2]">
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 4,
                        backgroundColor: zone.color,
                        border: zone.border || 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Red Hat Display", sans-serif',
                          fontWeight: 700,
                          fontSize: 11,
                          color: zone.textColor,
                        }}
                      >
                        {zone.id}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b border-[#E9EFF2] font-medium text-[#13283C] whitespace-nowrap">
                    {zone.name}
                  </td>
                  <td className="px-4 py-3 border-b border-[#E9EFF2] text-[#666666] max-w-xs">
                    {zone.descricao}
                  </td>
                  <td className="px-4 py-3 border-b border-[#E9EFF2] text-[#666666] whitespace-nowrap">
                    {zone.altura}
                  </td>
                  <td className="px-4 py-3 border-b border-[#E9EFF2] text-[#666666] whitespace-nowrap">
                    {zone.largura}
                  </td>
                  <td className="px-4 py-3 border-b border-[#E9EFF2] text-[#666666] max-w-xs text-xs">
                    {zone.notas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Drag handles */}
      <section className="mb-10">
        <h2 className="text-base font-semibold text-[#13283C] mb-4">Drag handles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Handle C ↔ D',
              desc: 'Separador entre o Painel Esquerdo (lista) e o Painel Central. Permite ao usuário ajustar a largura relativa entre os dois painéis.',
            },
            {
              title: 'Handle D ↔ E',
              desc: 'Separador entre o Painel Central e o Painel Direito. Permite expandir a área de trabalho principal ou dar mais espaço às informações complementares.',
            },
          ].map((h) => (
            <div
              key={h.title}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #E9EFF2',
                borderRadius: 8,
                padding: 20,
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  backgroundColor: '#F5F5F5',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DragHandleIcon />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: '"Red Hat Display", sans-serif',
                    fontWeight: 600,
                    fontSize: 13,
                    color: '#13283C',
                    marginBottom: 4,
                  }}
                >
                  {h.title}
                </p>
                <p style={{ fontSize: 13, color: '#666666', lineHeight: '18px' }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Layout principles */}
      <section>
        <h2 className="text-base font-semibold text-[#13283C] mb-4">Princípios de layout</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Fixo + Flexível',
              desc: 'Barra lateral e mini sidebar direita têm largura fixa. Os três painéis centrais são redimensionáveis pelo usuário via drag handles.',
            },
            {
              title: 'Header persistente',
              desc: 'O header permanece visível em todos os estados da interface, com cantos inferiores arredondados para separar visualmente o topo do conteúdo.',
            },
            {
              title: 'Painéis independentes',
              desc: 'Cada painel tem rolagem própria e contexto independente, permitindo ao usuário trabalhar em múltiplas informações simultaneamente.',
            },
          ].map((p) => (
            <div
              key={p.title}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #E9EFF2',
                borderRadius: 8,
                padding: 20,
              }}
            >
              <p
                style={{
                  fontFamily: '"Red Hat Display", sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  color: '#13283C',
                  marginBottom: 6,
                }}
              >
                {p.title}
              </p>
              <p style={{ fontSize: 13, color: '#666666', lineHeight: '18px' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
