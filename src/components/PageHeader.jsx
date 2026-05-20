import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function PageHeader({ title, description, showThemeToggle = false, onThemeChange }) {
  const [theme, setTheme] = useState('light')

  const toggle = (t) => {
    setTheme(t)
    onThemeChange?.(t)
  }

  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#13283C] mb-2">{title}</h1>
        <p className="text-[#666666] text-sm">{description}</p>
      </div>
      {showThemeToggle && (
        <div className="flex items-center gap-2 p-1 rounded-[10px] border border-[#E9EFF2] bg-[#F5F5F5] flex-shrink-0">
          <button
            onClick={() => toggle('light')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium cursor-pointer ${
              theme === 'light' ? 'bg-white text-[#4A4A4A] shadow-sm' : 'text-[#666666]'
            }`}
          >
            <Sun size={14} /> Light
          </button>
          <button
            onClick={() => toggle('dark')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium cursor-pointer ${
              theme === 'dark' ? 'bg-white text-[#4A4A4A] shadow-sm' : 'text-[#666666]'
            }`}
          >
            <Moon size={14} /> Dark
          </button>
        </div>
      )}
    </div>
  )
}
