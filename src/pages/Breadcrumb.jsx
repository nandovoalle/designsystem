import { PageHeader } from '../components/PageHeader'

const EXAMPLES = [
  { id: 1, path: 'Breadcrum text' },
  { id: 2, path: 'Breadcrum text/Breadcrum text/Breadcrum text' },
]

const breadcrumbTextStyle = {
  fontFamily: '"Red Hat Display", sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0.4px',
  color: '#9cb1c8',
  margin: 0,
}

export default function BreadcrumbPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Breadcrumb"
          description="Trilha de navegação hierárquica para orientação do usuário dentro da aplicação."
          showThemeToggle
        />

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Variações do componente por nível de profundidade de navegação.
          </p>
          <div className="bg-white border border-[#e9eff2] rounded-[16px] p-[40px] flex flex-col gap-[24px]">
            {EXAMPLES.map(({ id, path }) => (
              <p key={id} style={breadcrumbTextStyle}>
                {path}
              </p>
            ))}
          </div>
        </div>

        {/* Especificações */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Separador', '/ (barra)'],
              ['Cor do texto', '#9CB1C8 — var(--blue-200)'],
              ['Fonte', 'Red Hat Display Regular'],
              ['Tamanho', '12px'],
              ['Line height', '16px'],
              ['Letter spacing', '0.4px'],
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
