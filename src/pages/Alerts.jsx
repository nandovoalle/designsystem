import { Info, AlertCircle, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const ALERTS = [
  {
    type: 'blue',
    label: 'Info',
    icon: Info,
    title: 'Informação',
    message: 'Uma informação importante para o usuário.',
    textColor: 'var(--alert-blue)',
    bgColor: 'var(--alert-blue-bg)',
  },
  {
    type: 'grey',
    label: 'Grey',
    icon: AlertCircle,
    title: 'Neutro',
    message: 'Uma mensagem neutra ou de contexto geral.',
    textColor: 'var(--alert-grey)',
    bgColor: 'var(--alert-grey-bg)',
  },
  {
    type: 'green',
    label: 'Success',
    icon: CheckCircle,
    title: 'Sucesso',
    message: 'A operação foi concluída com sucesso.',
    textColor: 'var(--alert-green)',
    bgColor: 'var(--alert-green-bg)',
  },
  {
    type: 'red',
    label: 'Error',
    icon: XCircle,
    title: 'Erro',
    message: 'Ocorreu um problema. Por favor, tente novamente.',
    textColor: 'var(--alert-red)',
    bgColor: 'var(--alert-red-bg)',
  },
  {
    type: 'yellow',
    label: 'Warning',
    icon: AlertTriangle,
    title: 'Aviso',
    message: 'Atenção: verifique as informações antes de continuar.',
    textColor: 'var(--alert-yellow)',
    bgColor: 'var(--alert-yellow-bg)',
  },
]

function Alert({ icon: Icon, title, message, textColor, bgColor }) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-[10px]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Icon size={20} style={{ color: textColor, flexShrink: 0, marginTop: 2 }} />
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm mt-0.5">{message}</p>
      </div>
    </div>
  )
}

export default function AlertsPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Alerts"
          description="Mensagens de feedback para o usuário em 5 variantes semânticas."
          showThemeToggle
        />

        {/* All variants */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Variantes</h2>
          <p className="text-sm text-[#666666] mb-6">
            Cada variante comunica um tipo diferente de feedback.
          </p>
          <div className="space-y-3">
            {ALERTS.map((a) => (
              <Alert key={a.type} {...a} />
            ))}
          </div>
        </div>

        {/* Token reference */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">
            Cada variante usa um par de tokens: texto e background.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Variante</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token Texto</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token Background</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {ALERTS.map(({ type, label, textColor, bgColor }, i) => (
                  <tr key={type} className={i < ALERTS.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{label}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{`--alert-${type}`}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{`--alert-${type}-bg`}</td>
                    <td className="p-4">
                      <span
                        className="inline-block px-3 py-1 rounded text-xs font-medium"
                        style={{ color: textColor, backgroundColor: bgColor }}
                      >
                        {label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage guide */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { color: '#0094EE', label: 'Blue / Info', desc: 'Informações neutras ou contextuais.' },
              { color: '#9E9E9E', label: 'Grey / Neutro', desc: 'Mensagens de sistema sem carga emocional.' },
              { color: '#4BAF50', label: 'Green / Sucesso', desc: 'Ações completadas com êxito.' },
              { color: '#E9786B', label: 'Red / Erro', desc: 'Falhas, erros ou ações destrutivas.' },
              { color: '#E9C16C', label: 'Yellow / Aviso', desc: 'Atenção necessária antes de prosseguir.' },
            ].map(({ color, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: color }} />
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
