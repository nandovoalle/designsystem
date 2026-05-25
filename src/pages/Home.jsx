import { useEffect } from 'react'
import logoElleven from '@/assets/logo-elleven.svg'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { renderCanvas, TypeWriter, enableTrail, disableTrail } from '@/components/ui/hero-designali'
import { Button } from '@/components/ui/button'

const dsTopics = [
  'Componentes',
  'Tipografia',
  'Cores',
  'Badges',
  'Botões',
  'Tokens',
  'Ícones',
]

export default function HomePage() {
  useEffect(() => {
    renderCanvas()
    return () => {
      const canvas = document.getElementById('canvas')
      if (canvas) {
        const c = canvas.getContext('2d')
        if (c) c.running = false
      }
    }
  }, [])

  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FAFAFA] font-display">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#304A64_1px,transparent_1px),linear-gradient(to_bottom,#304A64_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.06] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]" />

      <section id="home">
        <div className="flex flex-col items-center justify-center px-6 text-center pt-6 pb-16">

          {/* Badge */}
          <div className="mb-6">
            <div className="relative inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60 shadow-sm">
              Design System v1
            </div>
          </div>

          {/* Title block */}
          <div className="mx-auto max-w-4xl w-full">
            <div className="relative mx-auto p-5" onMouseEnter={enableTrail}>
              <Plus strokeWidth={1} className="absolute left-0 top-0 h-10 w-10 text-[#304A64]" />
              <Plus strokeWidth={1} className="absolute bottom-0 left-0 h-10 w-10 text-[#304A64]" />
              <Plus strokeWidth={1} className="absolute right-0 top-0 h-10 w-10 text-[#304A64]" />
              <Plus strokeWidth={1} className="absolute bottom-0 right-0 h-10 w-10 text-[#304A64]" />

              <div className="bg-white/60 border border-black/10 rounded-2xl py-14 px-8 [mask-image:radial-gradient(900px_500px_at_center,white,transparent)]">
                <h1 className="text-5xl md:text-7xl leading-none tracking-tight text-[#304A64]">
                  <img src={logoElleven} alt="elleven" className="inline-block h-[1.05em] mt-1 align-baseline" /><br/>
                   Design System{' '}  
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <p className=" text-xl md:text-2xl font-medium text-[#13283C]">
              Explore os componentes e tokens do sistema
            </p>

            <p className="text-[#666666] py-4 max-w-xl mx-auto">
              Sistema de design com componentes reutilizáveis, documentação e exemplos de uso de {' '}
              <span className="text-[#304A64] font-semibold">
                <TypeWriter strings={dsTopics} />
              </span>
              .
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-3 mt-2">
              <Button asChild size="lg">
                <Link to="/colors">Explorar Componentes</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated cursor trail canvas */}
        <canvas
          className="pointer-events-none fixed inset-0 mx-auto z-50"
          id="canvas"
        />
      </section>
    </div>
  )
}
