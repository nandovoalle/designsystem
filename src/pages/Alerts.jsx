import { useState } from 'react'
import { Info, AlertCircle, XCircle, AlertTriangle } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

const MATERIAL_ICONS = {
  info:          { label: 'info',          path: 'M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  warning:       { label: 'warning',       path: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' },
  check_circle:  { label: 'check_circle',  path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' },
  error:         { label: 'error',         path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
  cancel:        { label: 'cancel',        path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z' },
  notifications: { label: 'notifications', path: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z' },
  bolt:          { label: 'bolt',          path: 'M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z' },
  star:          { label: 'star',          path: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z' },
  thumb_up:      { label: 'thumb_up',      path: 'M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z' },
  favorite:      { label: 'favorite',      path: 'm12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
  lock:          { label: 'lock',          path: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' },
  shield:        { label: 'shield',        path: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z' },
}

const CLOSE_PATH = 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
const ARROW_DROP_DOWN_PATH = 'M7 10l5 5 5-5z'

function MIcon({ path, size = 24, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d={path} />
    </svg>
  )
}

const ALERT_TYPES = [
  { key: 'blue',   label: 'Primary',   text: 'var(--alert-blue)',   bg: 'var(--alert-blue-bg)',   defaultIcon: 'info',         defaultText: 'This is a primary alert—check it out!' },
  { key: 'grey',   label: 'Secondary', text: 'var(--alert-grey)',   bg: 'var(--alert-grey-bg)',   defaultIcon: 'info',         defaultText: 'This is a secondary alert—check it out!' },
  { key: 'green',  label: 'Success',   text: 'var(--alert-green)',  bg: 'var(--alert-green-bg)',  defaultIcon: 'check_circle', defaultText: 'This is a success alert—check it out!' },
  { key: 'red',    label: 'Error',     text: 'var(--alert-red)',    bg: 'var(--alert-red-bg)',    defaultIcon: 'cancel',       defaultText: 'This is a danger alert—check it out!' },
  { key: 'yellow', label: 'Warning',   text: 'var(--alert-yellow)', bg: 'var(--alert-yellow-bg)', defaultIcon: 'warning',      defaultText: 'This is a warning alert—check it out!' },
]

const selectClass = [
  'w-full appearance-none bg-white border border-[#E9EFF2] rounded-[8px]',
  'px-3 py-2 pr-8 text-sm text-[#4A4A4A]',
  'focus:outline-none focus:border-[#304A64] transition-colors cursor-pointer',
].join(' ')

function SelectWrapper({ children }) {
  return (
    <div className="relative">
      {children}
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#666]">
        <MIcon path={ARROW_DROP_DOWN_PATH} size={20} />
      </span>
    </div>
  )
}

function AlertSandbox() {
  const initial = ALERT_TYPES[0]
  const [open, setOpen] = useState(false)
  const [typeKey, setTypeKey] = useState(initial.key)
  const [iconKey, setIconKey] = useState(initial.defaultIcon)
  const [text, setText] = useState(initial.defaultText)
  const [showIcon, setShowIcon] = useState(true)

  const current = ALERT_TYPES.find(t => t.key === typeKey)

  function handleTypeChange(key) {
    const t = ALERT_TYPES.find(a => a.key === key)
    if (!t) return
    setTypeKey(t.key)
    setIconKey(t.defaultIcon)
    setText(t.defaultText)
  }

  return (
    <div className="mb-12">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 mb-3 text-sm font-medium text-[#304A64] hover:text-[#13283C] transition-colors"
      >
        <MIcon
          path={ARROW_DROP_DOWN_PATH}
          size={20}
          style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}
        />
        Sandbox
      </button>
      {open && (
    <div className="flex items-stretch rounded-[16px] border border-[#E9EFF2] overflow-hidden" style={{ minHeight: 220 }}>
      {/* Preview area */}
      <div className="flex flex-1 items-center justify-center px-6 py-10 bg-[#F5F7F9]">
        <div
          className="flex items-center gap-3 px-4 py-4 rounded-[4px] w-full"
          style={{ maxWidth: 476, backgroundColor: current.bg, color: current.text }}
        >
          {showIcon && (
            <MIcon path={MATERIAL_ICONS[iconKey].path} size={24} style={{ color: current.text, flexShrink: 0 }} />
          )}
          <span className="flex-1 text-sm" style={{ fontWeight: 500 }}>{text || ' '}</span>
          <MIcon path={CLOSE_PATH} size={20} style={{ color: current.text, flexShrink: 0, cursor: 'pointer' }} />
        </div>
      </div>

      {/* Controls panel */}
      <div className="w-[373px] shrink-0 bg-white border-l border-[#E9EFF2] flex flex-col gap-4 py-6 px-4">
        {/* Tipo */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#666]">Tipo</label>
          <SelectWrapper>
            <select
              value={typeKey}
              onChange={e => handleTypeChange(e.target.value)}
              className={selectClass}
            >
              {ALERT_TYPES.map(t => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </SelectWrapper>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#666]">Texto</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Digite o texto do alerta..."
            className="w-full px-3 py-2 text-sm border border-[#E9EFF2] rounded-[8px] text-[#4A4A4A] bg-white focus:outline-none focus:border-[#304A64] transition-colors"
          />
        </div>

        {/* Icone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#666]">Icone</label>
          <SelectWrapper>
            <select
              value={iconKey}
              onChange={e => setIconKey(e.target.value)}
              className={selectClass}
            >
              {Object.entries(MATERIAL_ICONS).map(([key, icon]) => (
                <option key={key} value={key}>{icon.label}</option>
              ))}
            </select>
          </SelectWrapper>
        </div>

        {/* Mostrar icone */}
        <div className="flex items-center gap-2">
          <input
            id="show-icon"
            type="checkbox"
            checked={showIcon}
            onChange={e => setShowIcon(e.target.checked)}
            className="w-4 h-4 accent-[#304A64] cursor-pointer"
          />
          <label htmlFor="show-icon" className="text-sm text-[#4A4A4A] cursor-pointer select-none">
            Mostrar icone
          </label>
        </div>
      </div>
    </div>
      )}
    </div>
  )
}

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
  { type: 'blue',   label: 'Info',    icon: Info,               message: 'This is a primary alert—check it out!',   textColor: 'var(--alert-blue)',   bgColor: 'var(--alert-blue-bg)' },
  { type: 'grey',   label: 'Grey',    icon: AlertCircle,        message: 'This is a secondary alert—check it out!', textColor: 'var(--alert-grey)',   bgColor: 'var(--alert-grey-bg)' },
  { type: 'green',  label: 'Success', icon: CheckCircleOutline, message: 'This is a success alert—check it out!',   textColor: 'var(--alert-green)',  bgColor: 'var(--alert-green-bg)' },
  { type: 'red',    label: 'Error',   icon: XCircle,            message: 'This is a danger alert—check it out!',    textColor: 'var(--alert-red)',    bgColor: 'var(--alert-red-bg)' },
  { type: 'yellow', label: 'Warning', icon: AlertTriangle,      message: 'This is a warning alert—check it out!',   textColor: 'var(--alert-yellow)', bgColor: 'var(--alert-yellow-bg)' },
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
          description="Mensagens de feedback para o usuario em 5 variantes semanticas."
          showThemeToggle
        />

        {/* <AlertSandbox /> */}

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
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { color: '#0094EE', label: 'Blue / Info',     desc: 'Informacoes neutras ou contextuais.' },
              { color: '#9E9E9E', label: 'Grey / Neutro',   desc: 'Mensagens de sistema sem carga emocional.' },
              { color: '#4BAF50', label: 'Green / Sucesso', desc: 'Acoes completadas com exito.' },
              { color: '#E9786B', label: 'Red / Erro',      desc: 'Falhas, erros ou acoes destrutivas.' },
              { color: '#E9C16C', label: 'Yellow / Aviso',  desc: 'Atencao necessaria antes de prosseguir.' },
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

        {/* Especificações Técnicas */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Estrutura', 'Ícone + texto + botão fechar (disposição horizontal, alinhamento central)'],
              ['Border radius', '4px'],
              ['Padding', '16px horizontal e vertical (px-4 py-4)'],
              ['Ícone', '24×24px — Material Icons SVG, cor herdada da variante'],
              ['Botão fechar', '20×20px — Material Icons SVG, cor herdada da variante'],
              ['Tipografia', '14px, font-weight 500, fonte Red Hat Display'],
              ['Tokens de cor', '5 pares: --alert-{variante} (texto) e --alert-{variante}-bg (fundo)'],
              ['Variantes', 'Primary (blue), Secondary (grey), Success (green), Error (red), Warning (yellow)'],
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
