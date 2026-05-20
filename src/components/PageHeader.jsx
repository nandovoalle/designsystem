import { Sun, Moon } from 'lucide-react'

export function PageHeader({ title, description, showThemeToggle = false, theme = 'light', onThemeChange }) {
  const isDark = theme === 'dark'

  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-[#13283C]'}`}>{title}</h1>
        <p className={`text-sm ${isDark ? 'text-[#C1C2C4]' : 'text-[#666666]'}`}>{description}</p>
      </div>
      {showThemeToggle && (
        <div className={`flex items-center gap-2 p-1 rounded-[10px] border flex-shrink-0 ${isDark ? 'border-[#4B4E52] bg-[#32353A]' : 'border-[#E9EFF2] bg-[#F5F5F5]'}`}>
          <button
            onClick={() => onThemeChange?.('light')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium cursor-pointer ${
              !isDark
                ? 'bg-white text-[#4A4A4A] shadow-sm'
                : 'text-[#808285] hover:text-[#C1C2C4]'
            }`}
          >
            <Sun size={14} /> Light
          </button>
          <button
            onClick={() => onThemeChange?.('dark')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium cursor-pointer ${
              isDark
                ? 'bg-[#1D2024] text-white shadow-sm'
                : 'text-[#666666] hover:text-[#4A4A4A]'
            }`}
          >
            <Moon size={14} /> Dark
          </button>
        </div>
      )}
    </div>
  )
}
