import { Routes, Route, NavLink } from 'react-router-dom'
import {
  Palette, House, Type, Globe, CircleAlert, Award, MousePointerClick, Navigation,
  SquareMousePointer, RectangleHorizontal, LayoutTemplate, Tag, Calendar, CheckSquare,
  PanelLeft, PanelRight,
} from 'lucide-react'

import HomePage from './pages/Home'
import ColorsPage from './pages/Colors'
import TypographyPage from './pages/Typography'
import BadgesPage from './pages/Badges'
import AlertsPage from './pages/Alerts'
import FaviconPage from './pages/Favicon'
import ActionBarsPage from './pages/ActionBars'
import BreadcrumbPage from './pages/Breadcrumb'
import IconButtonPage from './pages/IconButton'
import ButtonsPage from './pages/Buttons'
import CardsPage from './pages/Cards'
import ChipsPage from './pages/Chips'
import DateFieldPage from './pages/DateField'
import CheckboxPage from './pages/Checkbox'
import ServiceCenterPage from './pages/ServiceCenter'
import DrawerPage from './pages/Drawer'

const navItems = [
  { to: '/',               label: 'Início',         Icon: House },
  { to: '/colors',         label: 'Cores',          Icon: Palette },
  { to: '/typography',     label: 'Typography',     Icon: Type },
  { to: '/alerts',         label: 'Alerts',         Icon: CircleAlert },
  { to: '/badges',         label: 'Badges',         Icon: Award },
  { to: '/favicon',        label: 'Favicon',        Icon: Globe },
  { to: '/action-bars',    label: 'Action bars',    Icon: MousePointerClick },
  { to: '/breadcrumb',     label: 'Breadcrumb',     Icon: Navigation },
  { to: '/icon-button',    label: 'Icon Button',    Icon: SquareMousePointer },
  { to: '/buttons',        label: 'Buttons',        Icon: RectangleHorizontal },
  { to: '/cards',          label: 'Cards',          Icon: LayoutTemplate },
  { to: '/chips',          label: 'Chips',          Icon: Tag },
  { to: '/date-field',     label: 'Date Field',     Icon: Calendar },
  { to: '/checkbox',       label: 'Checkbox',       Icon: CheckSquare },
  { to: '/drawer',         label: 'Drawer',         Icon: PanelRight },
  { to: '/service-center', label: 'Service Center', Icon: PanelLeft },
]

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#E9EFF2] bg-white flex flex-col flex-shrink-0">
        {/* Header */}
        <div className="p-6 border-b border-[#E9EFF2] flex items-center gap-2">
          <Palette size={24} className="text-[#13283C]" />
          <span className="font-semibold text-[#13283C]">Design System</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#13283C] text-white'
                    : 'text-[#717182] hover:bg-[#F5F5F5] hover:text-[#13283C]'
                }`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-[#E9EFF2] p-4">
          <p className="text-xs text-[#9E9E9E]">v1.0.0 — Design System</p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto bg-[#FAFAFA]">
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/colors"         element={<ColorsPage />} />
          <Route path="/typography"     element={<TypographyPage />} />
          <Route path="/alerts"         element={<AlertsPage />} />
          <Route path="/badges"         element={<BadgesPage />} />
          <Route path="/favicon"        element={<FaviconPage />} />
          <Route path="/action-bars"    element={<ActionBarsPage />} />
          <Route path="/breadcrumb"     element={<BreadcrumbPage />} />
          <Route path="/icon-button"    element={<IconButtonPage />} />
          <Route path="/buttons"        element={<ButtonsPage />} />
          <Route path="/cards"          element={<CardsPage />} />
          <Route path="/chips"          element={<ChipsPage />} />
          <Route path="/date-field"     element={<DateFieldPage />} />
          <Route path="/checkbox"       element={<CheckboxPage />} />
          <Route path="/drawer"         element={<DrawerPage />} />
          <Route path="/service-center" element={<ServiceCenterPage />} />
        </Routes>
      </main>
    </div>
  )
}
