import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

function ColorSwatch({ name, hex, token, onClick, copied }) {
  return (
    <div
      className="p-2 rounded-[10px] border border-black/10 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onClick(hex)}
      title="Clique para copiar o hex"
    >
      <div
        className="w-full h-16 rounded-md mb-2"
        style={{ backgroundColor: hex }}
      />
      <div className="space-y-0.5">
        <p className="text-xs text-[#666666]">{name}</p>
        <p className="text-sm font-semibold uppercase font-mono text-[#13283C]">
          {copied === hex ? '✓ Copiado!' : hex.replace('#', '')}
        </p>
        {token && <p className="text-xs text-[#9E9E9E] font-mono">{token}</p>}
      </div>
    </div>
  )
}

function Section({ title, colors, onCopy, copied }) {
  return (
    <div>
      <h2 className="text-xl font-medium text-[#13283C] mb-2">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {colors.map((c) => (
          <ColorSwatch key={c.token || c.name} {...c} onClick={onCopy} copied={copied} />
        ))}
      </div>
    </div>
  )
}

const SECTIONS = [
  {
    title: 'System',
    colors: [
      { name: 'blue-800', hex: '#13283C', token: '--blue-800' },
      { name: 'blue-600', hex: '#304A64', token: '--blue-600' },
      { name: 'blue-400', hex: '#BFD8F3', token: '--blue-400' },
      { name: 'blue-200', hex: '#9CB1C8', token: '--blue-200' },
      { name: 'error',    hex: '#E9786B', token: '--error' },
      { name: 'error-bg', hex: '#FEF5F4', token: '--error-bg' },
      { name: 'divider',  hex: '#E9EFF2', token: '--divider' },
      { name: 'tooltip',  hex: '#2D3135', token: '--tooltip' },
    ],
  },
  {
    title: 'Text',
    colors: [
      { name: 'primary',   hex: '#4A4A4A', token: '--text-primary' },
      { name: 'secondary', hex: '#666666', token: '--text-secondary' },
      { name: 'disabled',  hex: '#9E9E9E', token: '--text-disabled' },
      { name: 'inverse',   hex: '#FFFFFF', token: '--text-inverse' },
      { name: 'link',      hex: '#304A64', token: '--text-link' },
    ],
  },
  {
    title: 'States',
    colors: [
      { name: 'blue',    hex: '#0094EE', token: '--state-blue' },
      { name: 'green',   hex: '#4BAF50', token: '--state-green' },
      { name: 'green-2', hex: '#67D18A', token: '--state-green-2' },
      { name: 'yellow',  hex: '#E9C16C', token: '--state-yellow' },
      { name: 'orange',  hex: '#FF9E5F', token: '--state-orange' },
      { name: 'red',     hex: '#E9786B', token: '--state-red' },
      { name: 'purple',  hex: '#8080EC', token: '--state-purple' },
      { name: 'staging', hex: '#F6BD67', token: '--state-staging' },
    ],
  },
  {
    title: 'Alerts — Text',
    colors: [
      { name: 'alert-blue',   hex: '#304A64', token: '--alert-blue' },
      { name: 'alert-grey',   hex: '#4A4A4A', token: '--alert-grey' },
      { name: 'alert-green',  hex: '#2D7A31', token: '--alert-green' },
      { name: 'alert-red',    hex: '#C0392B', token: '--alert-red' },
      { name: 'alert-yellow', hex: '#856404', token: '--alert-yellow' },
    ],
  },
  {
    title: 'Alerts — Background',
    colors: [
      { name: 'alert-blue-bg',   hex: '#E6F4FD', token: '--alert-blue-bg' },
      { name: 'alert-grey-bg',   hex: '#F0F0F0', token: '--alert-grey-bg' },
      { name: 'alert-green-bg',  hex: '#D4EDDA', token: '--alert-green-bg' },
      { name: 'alert-red-bg',    hex: '#F8D7DA', token: '--alert-red-bg' },
      { name: 'alert-yellow-bg', hex: '#FFF3CD', token: '--alert-yellow-bg' },
    ],
  },
  {
    title: 'Surfaces (Dark Mode)',
    colors: [
      { name: 'surface-3 (base)', hex: '#0B0E12', token: '--surface-3' },
      { name: 'surface-2',        hex: '#1D2024', token: '--surface-2' },
      { name: 'surface-4',        hex: '#2A2D31', token: '--surface-4' },
      { name: 'surface-1',        hex: '#32353A', token: '--surface-1' },
      { name: 'surface-5',        hex: '#323438', token: '--surface-5' },
    ],
  },
]

export default function ColorsPage() {
  const [copied, setCopied] = useState(null)

  const handleCopy = (hex) => {
    navigator.clipboard?.writeText(hex)
    setCopied(hex)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Colors"
          description="Sistema completo de cores. Clique em um swatch para copiar o hex."
          showThemeToggle
        />
        <div className="space-y-12">
          {SECTIONS.map((s) => (
            <Section key={s.title} {...s} onCopy={handleCopy} copied={copied} />
          ))}
        </div>
      </div>
    </div>
  )
}
