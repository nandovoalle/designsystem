import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

function ColorSwatch({ name, hex, token, onClick, copied, isDark }) {
  return (
    <div
      className={`p-2 rounded-[10px] border shadow-sm cursor-pointer hover:shadow-md transition-all ${
        isDark
          ? 'bg-[#32353A] border-[#4B4E52]'
          : 'bg-white border-black/10'
      }`}
      onClick={() => onClick(hex)}
      title="Clique para copiar o hex"
    >
      <div
        className="w-full h-16 rounded-md mb-2"
        style={{ backgroundColor: hex }}
      />
      <div className="space-y-0.5">
        <p className={`text-xs ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{name}</p>
        <p className={`text-sm font-semibold uppercase font-mono ${isDark ? 'text-white' : 'text-[#13283C]'}`}>
          {copied === hex ? '✓ Copiado!' : hex.replace('#', '')}
        </p>
        {token && <p className={`text-xs font-mono ${isDark ? 'text-[#808285]' : 'text-[#9E9E9E]'}`}>{token}</p>}
      </div>
    </div>
  )
}

function Section({ title, colors, onCopy, copied, isDark }) {
  return (
    <div>
      <h2 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {colors.map((c) => (
          <ColorSwatch key={c.token || c.name} {...c} onClick={onCopy} copied={copied} isDark={isDark} />
        ))}
      </div>
    </div>
  )
}

const SECTIONS_LIGHT = [
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

const SECTIONS_DARK = [
  {
    title: 'System',
    colors: [
      { name: 'blue-800', hex: '#D0E4FF', token: '--blue-800' },
      { name: 'blue-600', hex: '#9DCBFC', token: '--blue-600' },
      { name: 'blue-400', hex: '#3A4857', token: '--blue-400' },
      { name: 'blue-200', hex: '#CED8E4', token: '--blue-200' },
      { name: 'error',    hex: '#FFB4AB', token: '--error' },
      { name: 'error-bg', hex: '#4B4548', token: '--error-bg' },
      { name: 'divider',  hex: '#4B4E52', token: '--divider' },
      { name: 'tooltip',  hex: '#E0E2E8', token: '--tooltip' },
    ],
  },
  {
    title: 'Text',
    colors: [
      { name: 'primary',   hex: '#FFFFFF', token: '--text-primary' },
      { name: 'secondary', hex: '#C1C2C4', token: '--text-secondary' },
      { name: 'disabled',  hex: '#808285', token: '--text-disabled' },
      { name: 'inverse',   hex: '#4A4A4A', token: '--text-inverse' },
      { name: 'link',      hex: '#B2C5FF', token: '--text-link' },
    ],
  },
  {
    title: 'States',
    colors: [
      { name: 'primary',  hex: '#3A4857', token: '--state-primary' },
      { name: 'inverse',  hex: '#D5E4F6', token: '--state-inverse' },
      { name: 'blue',     hex: '#0094EE', token: '--state-blue' },
      { name: 'blue-bg',  hex: '#475360', token: '--state-blue-bg' },
      { name: 'green',    hex: '#4BAF50', token: '--state-green' },
      { name: 'green-2',  hex: '#67D18A', token: '--state-green-2' },
      { name: 'yellow',   hex: '#E9C16C', token: '--state-yellow' },
      { name: 'orange',   hex: '#FF9E5F', token: '--state-orange' },
      { name: 'red',      hex: '#E9786B', token: '--state-red' },
      { name: 'purple',   hex: '#8080EC', token: '--state-purple' },
      { name: 'staging',  hex: '#F6BD67', token: '--state-staging' },
    ],
  },
  {
    title: 'Alerts — Text',
    colors: [
      { name: 'alert-blue',   hex: '#9DCBFC', token: '--alert-blue' },
      { name: 'alert-grey',   hex: '#FFFFFF', token: '--alert-grey' },
      { name: 'alert-green',  hex: '#9ED49D', token: '--alert-green' },
      { name: 'alert-red',    hex: '#FFB4AB', token: '--alert-red' },
      { name: 'alert-yellow', hex: '#E9C16C', token: '--alert-yellow' },
    ],
  },
  {
    title: 'Alerts — Background',
    colors: [
      { name: 'alert-blue-bg',   hex: '#475360', token: '--alert-blue-bg' },
      { name: 'alert-grey-bg',   hex: '#5B5D61', token: '--alert-grey-bg' },
      { name: 'alert-green-bg',  hex: '#48544D', token: '--alert-green-bg' },
      { name: 'alert-red-bg',    hex: '#5B4E50', token: '--alert-red-bg' },
      { name: 'alert-yellow-bg', hex: '#575144', token: '--alert-yellow-bg' },
    ],
  },
  {
    title: 'Surface',
    colors: [
      { name: 'surface1', hex: '#32353A', token: '--surface-1' },
      { name: 'surface2', hex: '#1D2024', token: '--surface-2' },
      { name: 'surface3', hex: '#0B0E12', token: '--surface-3' },
      { name: 'surface4', hex: '#2A2D31', token: '--surface-4' },
      { name: 'surface5', hex: '#323438', token: '--surface-5' },
    ],
  },
]

export default function ColorsPage() {
  const [copied, setCopied] = useState(null)
  const [theme, setTheme] = useState('light')

  const isDark = theme === 'dark'
  const sections = isDark ? SECTIONS_DARK : SECTIONS_LIGHT

  const handleCopy = (hex) => {
    navigator.clipboard?.writeText(hex)
    setCopied(hex)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className={`p-[68px] min-h-full transition-colors ${isDark ? 'bg-[#1D2024]' : ''}`}>
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Colors"
          description="Sistema completo de cores. Clique em um swatch para copiar o hex."
          showThemeToggle
          theme={theme}
          onThemeChange={setTheme}
        />
        <div className="space-y-12">
          {sections.map((s) => (
            <Section key={s.title} {...s} onCopy={handleCopy} copied={copied} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  )
}
