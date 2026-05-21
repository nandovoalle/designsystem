import { PageHeader } from '../components/PageHeader'

const COLORS = [
  { name: 'Red',    bg: '#E9786B' },
  { name: 'Yellow', bg: '#E9C16C' },
  { name: 'Blue',   bg: '#0094EE' },
  { name: 'Green',  bg: '#4BAF50' },
]

function SmallBadge({ bg }) {
  return <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: bg }} />
}

function LargeBadge({ count, bg }) {
  const display = count > 99 ? '+99' : String(count)
  const w = count > 9 ? 'auto' : '20px'
  return (
    <span
      className="inline-flex items-center justify-center rounded-full text-white font-bold"
      style={{
        backgroundColor: bg,
        fontSize: 10,
        minWidth: 20,
        height: 20,
        padding: count > 9 ? '0 5px' : 0,
      }}
    >
      {display}
    </span>
  )
}

export default function BadgesPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Badges"
          description="Indicadores visuais compactos para contagens, status e notificações."
          showThemeToggle
        />

        {/* Small badges */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Small Badges</h2>
          <p className="text-sm text-[#666666] mb-6">
            Indicadores de ponto simples (8×8px) para status ou presença.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex items-center justify-center gap-12">
              {COLORS.map(({ name, bg }) => (
                <div key={name} className="flex flex-col items-center gap-3">
                  <SmallBadge bg={bg} />
                  <span className="text-xs text-[#666666]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Large badges */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Large Badges</h2>
          <p className="text-sm text-[#666666] mb-6">
            Badges com contagem numérica (mín. 16px, máx. 34px).
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex items-center justify-center gap-12">
              {COLORS.map(({ name, bg }) => (
                <div key={name} className="flex flex-col items-center gap-3">
                  <LargeBadge count={3} bg={bg} />
                  <span className="text-xs text-[#666666]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Count variations */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variações de Contagem</h2>
          <p className="text-sm text-[#666666] mb-6">Exemplos com diferentes valores numéricos.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 5, 12, 99].map((n) => (
              <div key={n} className="bg-white rounded-[14px] border border-black/10 p-6 flex flex-col items-center gap-4">
                <LargeBadge count={n} bg="#E9786B" />
                <span className="text-sm text-[#666666]">Count: {n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Semântica */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Cores e Significados</h2>
          <p className="text-sm text-[#666666] mb-6">Cada cor carrega um significado semântico.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { ...COLORS[0], token: '--state-red',    meaning: 'Urgente, erro, crítico' },
              { ...COLORS[1], token: '--state-yellow', meaning: 'Atenção, pendente' },
              { ...COLORS[2], token: '--state-blue',   meaning: 'Informativo, novo' },
              { ...COLORS[3], token: '--state-green',  meaning: 'Sucesso, ativo, online' },
            ].map(({ name, bg, token, meaning }) => (
              <div key={name} className="bg-white rounded-[14px] border border-black/10 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <LargeBadge count={3} bg={bg} />
                  <span className="font-medium text-[#13283C]">{name}</span>
                </div>
                <p className="text-xs text-[#666666] mb-2">{meaning}</p>
                <code className="text-xs font-mono text-[#9E9E9E]">{token}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Small badge', '8×8px, border-radius 50%'],
              ['Large badge (1 dígito)', '20×20px, border-radius 50%'],
              ['Large badge (2+ dígitos)', 'Largura automática, padding 0 5px, altura 20px'],
              ['Limite de contagem', '99 — exibe "+99" para valores superiores'],
              ['Tipografia', '10px, font-weight 700, cor #FFFFFF'],
              ['Tokens de cor', '--state-red, --state-yellow, --state-blue, --state-green'],
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
