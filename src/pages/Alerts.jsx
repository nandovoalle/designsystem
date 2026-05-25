import { useState, useRef, useEffect } from 'react'
import { Info, AlertCircle, XCircle, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { TextFieldDefault } from './TextField'

const MATERIAL_ICONS = {
  info:          { label: 'info',          name: 'info' },
  warning:       { label: 'warning',       name: 'warning' },
  check_circle:  { label: 'check_circle',  name: 'check_circle' },
  error:         { label: 'error',         name: 'error' },
  cancel:        { label: 'cancel',        name: 'cancel' },
  notifications: { label: 'notifications', name: 'notifications' },
  bolt:          { label: 'bolt',          name: 'bolt' },
  star:          { label: 'star',          name: 'star' },
  thumb_up:      { label: 'thumb_up',      name: 'thumb_up' },
  favorite:      { label: 'favorite',      name: 'favorite' },
  lock:          { label: 'lock',          name: 'lock' },
  shield:        { label: 'shield',        name: 'shield' },
  home:          { label: 'home',          name: 'home' },
  person:        { label: 'person',        name: 'person' },
  mail:          { label: 'mail',          name: 'mail' },
  phone:         { label: 'phone',         name: 'phone' },
  delete:        { label: 'delete',        name: 'delete' },
  edit:          { label: 'edit',          name: 'edit' },
  add_circle:    { label: 'add_circle',    name: 'add_circle' },
  done:          { label: 'done',          name: 'done' },
  refresh:       { label: 'refresh',       name: 'refresh' },
  visibility:    { label: 'visibility',    name: 'visibility' },
  cloud:         { label: 'cloud',         name: 'cloud' },
  location_on:   { label: 'location_on',   name: 'location_on' },
  settings:      { label: 'settings',      name: 'settings' },
  download:      { label: 'download',      name: 'download' },
  share:         { label: 'share',         name: 'share' },
  mood:          { label: 'mood',          name: 'mood' },
  camera_alt:    { label: 'camera_alt',    name: 'camera_alt' },
  music_note:    { label: 'music_note',    name: 'music_note' },
  calendar_today:{ label: 'calendar_today',name: 'calendar_today' },
  send:          { label: 'send',          name: 'send' },
}

const CLOSE_PATH = 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'

function MIcon({ path, size = 24, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d={path} />
    </svg>
  )
}

function MSIcon({ name, size = 24, style }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, lineHeight: 1, userSelect: 'none', flexShrink: 0, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", ...style }}
    >
      {name}
    </span>
  )
}

const ALERT_TYPES = [
  { key: 'blue',   label: 'Primary',   text: 'var(--alert-blue)',   bg: 'var(--alert-blue-bg)',   defaultIcon: 'info',         defaultText: 'This is a primary alert—check it out!' },
  { key: 'grey',   label: 'Secondary', text: 'var(--alert-grey)',   bg: 'var(--alert-grey-bg)',   defaultIcon: 'info',         defaultText: 'This is a secondary alert—check it out!' },
  { key: 'green',  label: 'Success',   text: 'var(--alert-green)',  bg: 'var(--alert-green-bg)',  defaultIcon: 'check_circle', defaultText: 'This is a success alert—check it out!' },
  { key: 'red',    label: 'Error',     text: 'var(--alert-red)',    bg: 'var(--alert-red-bg)',    defaultIcon: 'cancel',       defaultText: 'This is a danger alert—check it out!' },
  { key: 'yellow', label: 'Warning',   text: 'var(--alert-yellow)', bg: 'var(--alert-yellow-bg)', defaultIcon: 'warning',      defaultText: 'This is a warning alert—check it out!' },
]

const DS_FONT = { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', letterSpacing: '0.25px' }
const DS_FIELD = { borderRadius: 4, height: 40, display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 8, paddingRight: 12 }

function CheckboxIconDS({ checked }) {
  if (checked) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect width="18" height="18" rx="2" fill="#304A64" />
        <path d="M4.5 9L7.5 12L13.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="16" height="16" rx="1.5" stroke="#304A64" strokeWidth="1.5" />
    </svg>
  )
}

function DSCheckbox({ checked, onChange, label }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center cursor-pointer bg-transparent border-none p-0 group"
    >
      <div className="flex items-center justify-center p-[8px] rounded-[4px] transition-colors group-hover:bg-[rgba(48,74,100,0.08)] group-active:bg-[rgba(48,74,100,0.16)]">
        <CheckboxIconDS checked={checked} />
      </div>
      <span style={{ ...DS_FONT, color: '#4A4A4A' }}>{label}</span>
    </button>
  )
}

function DSSelect({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onOut(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', onOut)
    return () => document.removeEventListener('mousedown', onOut)
  }, [])

  const selectedLabel = options.find(o => o.value === value)?.label

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {label && <div style={{ paddingBottom: 8 }}><span style={{ ...DS_FONT, color: '#4A4A4A' }}>{label}</span></div>}
      <button
        onClick={() => setIsOpen(o => !o)}
        style={{ ...DS_FIELD, width: '100%', border: isOpen ? '1px solid #304a64' : '1px solid #E9EFF2', background: 'transparent', cursor: 'pointer' }}
      >
        <span style={{ ...DS_FONT, flex: 1, textAlign: 'left', color: selectedLabel ? '#4A4A4A' : '#666' }}>
          {selectedLabel || 'Selecione...'}
        </span>
        {isOpen
          ? <ChevronUp size={20} color="#304A64" strokeWidth={1.5} />
          : <ChevronDown size={20} color="#4A4A4A" strokeWidth={1.5} />
        }
      </button>
      {isOpen && (
        <div style={{ backgroundColor: 'white', borderRadius: 4, padding: 8, boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)', position: 'absolute', top: 'calc(100% + 2px)', left: 0, right: 0, zIndex: 50 }}>
          {options.map(opt => (
            <div
              key={opt.value}
              onClick={() => { onChange(opt.value); setIsOpen(false) }}
              style={{ height: 40, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 4, cursor: 'pointer', backgroundColor: value === opt.value ? '#304a64' : 'transparent' }}
              onMouseEnter={e => { if (value !== opt.value) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { if (value !== opt.value) e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              <span style={{ ...DS_FONT, flex: 1, color: value === opt.value ? '#ffffff' : '#4a4a4a' }}>{opt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function DSIconSelect({ label, value, onChange, icons, disabled = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onOut(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', onOut)
    return () => document.removeEventListener('mousedown', onOut)
  }, [])

  const selected = icons[value]

  return (
    <div ref={ref} style={{ position: 'relative', opacity: disabled ? 0.4 : 1 }}>
      {label && <div style={{ paddingBottom: 8 }}><span style={{ ...DS_FONT, color: '#4A4A4A' }}>{label}</span></div>}
      <button
        disabled={disabled}
        onClick={() => setIsOpen(o => !o)}
        style={{ ...DS_FIELD, width: '100%', border: isOpen ? '1px solid #304a64' : '1px solid #E9EFF2', background: 'transparent', cursor: disabled ? 'not-allowed' : 'pointer' }}
      >
        {selected && <MSIcon name={selected.name} size={24} style={{ color: '#4A4A4A' }} />}
        <span style={{ ...DS_FONT, flex: 1, textAlign: 'left', color: selected ? '#4A4A4A' : '#666' }}>
          {selected?.label || 'Selecione...'}
        </span>
        {isOpen
          ? <ChevronUp size={20} color="#304A64" strokeWidth={1.5} />
          : <ChevronDown size={20} color="#4A4A4A" strokeWidth={1.5} />
        }
      </button>
      {isOpen && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: 4,
          padding: 8,
          boxShadow: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
          position: 'absolute',
          top: 'calc(100% + 2px)',
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
        }}>
          {Object.entries(icons).map(([key, icon]) => (
            <button
              key={key}
              title={icon.label}
              onClick={() => { onChange(key); setIsOpen(false) }}
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: value === key ? '#304a64' : 'transparent',
                color: value === key ? 'white' : '#4a4a4a',
                flexShrink: 0,
              }}
              onMouseEnter={e => { if (value !== key) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { if (value !== key) e.currentTarget.style.backgroundColor = value === key ? '#304a64' : 'transparent' }}
            >
              <MSIcon name={icon.name} size={24} style={{ color: 'inherit' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function AlertSandbox() {
  const initial = ALERT_TYPES[0]
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
    <div className="flex items-stretch rounded-[16px] border border-[#E9EFF2]" style={{ minHeight: 220 }}>
      {/* Preview area */}
      <div className="flex flex-1 items-center justify-center px-6 py-10 bg-[#F5F7F9] rounded-l-[16px] overflow-hidden">
        <div
          className="flex items-center gap-3 px-4 py-4 rounded-[4px] w-full"
          style={{ maxWidth: 476, backgroundColor: current.bg, color: current.text }}
        >
          {showIcon && (
            <MSIcon name={MATERIAL_ICONS[iconKey].name} size={24} style={{ color: current.text }} />
          )}
          <span className="flex-1 text-sm" style={{ fontWeight: 500 }}>{text || ' '}</span>
          <MIcon path={CLOSE_PATH} size={20} style={{ color: current.text, flexShrink: 0, cursor: 'pointer' }} />
        </div>
      </div>

      {/* Controls panel */}
      <div className="w-[373px] shrink-0 bg-white border-l border-[#E9EFF2] flex flex-col gap-4 py-6 px-4 rounded-r-[16px]">
        <DSSelect
          label="Tipo"
          value={typeKey}
          onChange={handleTypeChange}
          options={ALERT_TYPES.map(t => ({ value: t.key, label: t.label }))}
        />

        <TextFieldDefault
          label="Texto"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Digite o texto do alerta..."
          width="100%"
        />

        <DSIconSelect
          label="Icone"
          value={iconKey}
          onChange={setIconKey}
          icons={MATERIAL_ICONS}
          disabled={!showIcon}
        />

        <DSCheckbox
          checked={showIcon}
          onChange={setShowIcon}
          label="Mostrar icone"
        />
      </div>
    </div>
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

        <AlertSandbox />

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
