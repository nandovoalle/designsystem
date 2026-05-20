import { Package } from 'lucide-react'

const cards = [
  {
    title: 'Componentes',
    desc: 'Biblioteca de componentes reutilizáveis com variações documentadas.',
  },
  {
    title: 'Documentação',
    desc: 'Cada componente tem exemplos de uso e variações disponíveis.',
  },
  {
    title: 'Navegação',
    desc: 'Use o menu lateral para navegar entre os diferentes componentes.',
  },
]

export default function HomePage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-[#13283C] mb-2">
            Bem-vindo ao Design System
          </h1>
          <p className="text-[#666666]">
            Explore e visualize todos os componentes disponíveis no sistema.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {cards.map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white text-[#13283C] flex flex-col gap-4 rounded-[14px] border border-black/10 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#13283C]/10 rounded-[10px]">
                  <Package size={20} className="text-[#13283C]" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-[#666666]">{desc}</p>
            </div>
          ))}
        </div>

        {/* How to use */}
        <div className="bg-white rounded-[14px] border border-black/10 p-8">
          <h2 className="text-xl font-medium text-[#13283C] mb-6">Como Usar</h2>
          <ol className="space-y-3 text-sm">
            <li>
              <strong className="text-[#13283C]">Navegue</strong>{' '}
              <span className="text-[#304A64]">pelos componentes usando o menu lateral</span>
            </li>
            <li>
              <strong className="text-[#13283C]">Visualize</strong>{' '}
              <span className="text-[#666666]">os componentes e suas variações</span>
            </li>
            <li>
              <strong className="text-[#13283C]">Copie</strong>{' '}
              <span className="text-[#666666]">os exemplos de código para usar em seus projetos</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
