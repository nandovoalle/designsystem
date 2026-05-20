import { Info, AlertCircle, XCircle, AlertTriangle } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

function CheckCircleOutline({ size = 24, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
    </svg>
  )
}

function CloseIcon({ size = 20, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  )
}

const ALERTS = [
  {
    type: 'blue',
    label: 'Info',
    icon: Info,
    message: 'This is a primary alert—check it out!',
    textColor: 'var(--alert-blue)',
    bgColor: 'var(--alert-blue-bg)',
  },
  {
    type: 'grey',
    label: 'Grey',
    icon: AlertCircle,
    message: 'This is a secondary alert—check it out!',
    textColor: 'var(--alert-grey)',
    bgColor: 'var(--alert-grey-bg)',
  },
  {
    type: 'green',
    label: 'Success',
    icon: CheckCircleOutline,
    message: 'This is a success alert—check it out!',
    textColor: 'var(--alert-green)',
    bgColor: 'var(--alert-green-bg)',
  },
  {
    type: 'red',
    label: 'Error',
    icon: XCircle,
    message: 'This is a danger alert—check it out!',
    textColor: 'var(--alert-red)',
    bgColor: 'var(--alert-red-bg)',
  },
  {
    type: 'yellow',
    label: 'Warning',
    icon: AlertTriangle,
    message: 'This is a warning alert—check it out!',
    textColor: 'var(--alert-yellow)',
    bgColor: 'var(--alert-yellow-bg)',
  },
]

function Alert({ icon: Icon, message, textColor, bgColor }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-4 rounded-[4px]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Icon size={24} style={{ color: textColor, flexShrink: 0 }} />
      <span className="flex-1 text-sm" style={{ fontWeight: 500 }}>{message}</span>
      <CloseIcon size={20} style={{ color: textColor, flexShrink: 0, cursor: 'pointer' }} />
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
