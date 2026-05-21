import { PageHeader } from '../components/PageHeader'

function FaviconPreview({ size, label, desc }) {
  const scale = Math.min(size, 64)
  return (
    <div className="bg-white rounded-[14px] border border-black/10 p-6 flex flex-col items-center gap-3">
      <div
        className="flex items-center justify-center rounded-[2px] flex-shrink-0"
        style={{
          width: scale,
          height: scale,
          backgroundColor: '#13283C',
        }}
      >
        <svg width={scale * 0.5} height={scale * 0.5} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="3" width="3" height="18" rx="1" fill="white" />
          <rect x="16" y="3" width="3" height="18" rx="1" fill="white" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-[#13283C]">{size}×{size}</p>
        <p className="text-xs text-[#666666] mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

function FaviconWithBadge({ count }) {
  const display = count > 9 ? '+9' : String(count)
  const isOne = display === '1'

  return (
    <div
      className="inline-grid relative shrink-0 place-items-start"
      style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}
    >
      {/* Favicon 12×12px */}
      <div
        className="col-start-1 row-start-1 mt-[2px] size-[12px] flex items-center justify-center rounded-[1px] shrink-0"
        style={{ backgroundColor: '#13283C' }}
      >
        <svg width={6} height={6} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="3" width="3" height="18" rx="1" fill="white" />
          <rect x="16" y="3" width="3" height="18" rx="1" fill="white" />
        </svg>
      </div>
      {/* Badge background 10×10px */}
      <div
        className="col-start-1 row-start-1 mt-0 size-[10px] rounded-[1px]"
        style={{ backgroundColor: '#E9786B', marginLeft: '4px' }}
      />
      {/* Badge text */}
      <div
        className="col-start-1 row-start-1 mt-[2px] flex items-center justify-center text-white font-bold text-center"
        style={{
          marginLeft: isOne ? '6px' : '5px',
          width: isOne ? '6px' : '8px',
          height: '6px',
          fontSize: '6px',
          fontFamily: '"Red Hat Display", sans-serif',
          lineHeight: '16px',
        }}
      >
        {display}
      </div>
    </div>
  )
}

const SIZES = [
  { size: 16, desc: 'Tamanho padrão para favicons' },
  { size: 32, desc: 'Usado em alguns navegadores' },
  { size: 48, desc: 'Para atalhos e bookmarks' },
  { size: 64, desc: 'Para displays de alta resolução' },
]

export default function FaviconPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Favicon"
          description="Ícones do aplicativo em diferentes tamanhos e variações."
          showThemeToggle
        />

        {/* Tamanhos */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tamanhos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SIZES.map((s) => <FaviconPreview key={s.size} {...s} />)}
          </div>
        </div>

        {/* Com badge */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Com Badge de Notificação</h2>
          <p className="text-sm text-[#666666] mb-6">
            Favicon com badge numérico para indicar notificações não lidas.
          </p>
          <div className="flex gap-[24px] items-center p-[24px] border border-[var(--color-divider)] rounded-[8px]">
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <FaviconWithBadge key={n} count={n} />
            ))}
          </div>
        </div>

        {/* Especificações */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Formato', 'SVG (escalável) e PNG (bitmap)'],
              ['Tamanhos recomendados', '16×16, 32×32, 48×48, 64×64, 128×128, 256×256 pixels'],
              ['Variante Light', 'Fundo #13283C (blue-800) com símbolo branco'],
              ['Variante Dark', 'Fundo branco com símbolo #13283C'],
              ['Badge de notificação', 'Cor #E9786B (--color-error), fonte Red Hat Display Bold 6px, 10×10px'],
              ['Border radius', '2px — mantém consistência com o design system'],
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
