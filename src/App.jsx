import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import {
  Palette, House, Type, Globe, CircleAlert, Award, MousePointerClick, Navigation, Ruler,
  SquareMousePointer, RectangleHorizontal, LayoutTemplate, Tag, Calendar, CheckSquare,
  PanelLeft, PanelRight, AlignJustify, AppWindow, List, Hash, MoreHorizontal, UserRound,
  MessageSquare, LoaderCircle, Circle, ChevronsUpDown, TextCursorInput, Layers, ToggleRight,
  Table2, ListOrdered, BarChart2, Flag, Filter, Files, Hexagon, LayoutGrid, Timer,
} from 'lucide-react'

import { disableTrail } from './components/ui/hero-designali'
import HomePage from './pages/Home'
import ColorsPage from './pages/Colors'
import TypographyPage from './pages/Typography'
import SpacingPage from './pages/Spacing'
import RadiusPage from './pages/Radius'
import ElevationPage from './pages/Elevation'
import GridPage from './pages/Grid'
import MotionPage from './pages/Motion'
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
import MegaMenuPage from './pages/MegaMenu'
import ModalPage from './pages/Modal'
import MenuPage from './pages/Menu'
import NumberInputPage from './pages/NumberInput'
import PaginationPage from './pages/Pagination'
import PersonPage from './pages/Person'
import PopoverPage from './pages/Popover'
import ProgressPage from './pages/Progress'
import RadioButtonsPage from './pages/RadioButtons'
import SelectPage from './pages/Select'
import TooltipPage from './pages/Tooltip'
import TextFieldPage from './pages/TextField'
import TabsPage from './pages/Tabs'
import SwitchPage from './pages/Switch'
import TablesPage from './pages/Tables'
import StepsPage from './pages/Steps'
import CalendarPage from './pages/Calendar'
import ChartPage from './pages/Chart'
import PriorityPage from './pages/Priority'
import FilterPage from './pages/Filter'
import IconFilesPage from './pages/IconFiles'
import LogoPage from './pages/Logo'
import { TextFieldLeadingIcon } from './pages/TextField'

const navItems = [
  { to: '/',               label: 'Início',         Icon: House },
  { divider: true,         label: 'Tokens' },
  { to: '/colors',         label: 'Cores',          Icon: Palette },
  { to: '/typography',     label: 'Typography',     Icon: Type },
  { to: '/spacing',        label: 'Spacing',        Icon: Ruler },
  { to: '/radius',         label: 'Radius',         Icon: Ruler },
  { to: '/elevation',      label: 'Elevation',      Icon: Layers },
  { to: '/grid',           label: 'Grid',           Icon: LayoutGrid },
  { to: '/motion',         label: 'Motion',         Icon: Timer },
  { divider: true,         label: 'Components' },
  { to: '/action-bars',    label: 'Action Bars',    Icon: MousePointerClick },
  { to: '/alerts',         label: 'Alerts',         Icon: CircleAlert },
  { to: '/badges',         label: 'Badges',         Icon: Award },
  { to: '/breadcrumb',     label: 'Breadcrumb',     Icon: Navigation },
  { to: '/buttons',        label: 'Buttons',        Icon: RectangleHorizontal },
  { to: '/calendar',       label: 'Calendar',       Icon: Calendar },
  { to: '/cards',          label: 'Cards',          Icon: LayoutTemplate },
  { to: '/chart',          label: 'Charts',         Icon: BarChart2 },
  { to: '/checkbox',       label: 'Checkbox',       Icon: CheckSquare },
  { to: '/chips',          label: 'Chips',          Icon: Tag },
  { to: '/date-field',     label: 'Date Field',     Icon: Calendar },
  { to: '/drawer',         label: 'Drawer',         Icon: PanelRight },
  { to: '/favicon',        label: 'Favicon',        Icon: Globe },
  { to: '/filter',         label: 'Filter',         Icon: Filter },
  { to: '/icon-button',    label: 'Icon Button',    Icon: SquareMousePointer },
  { to: '/icon-files',     label: 'Icon Files',     Icon: Files },
  { to: '/logo',           label: 'Logo',           Icon: Hexagon },
  { to: '/mega-menu',      label: 'Mega Menu',      Icon: AlignJustify },
  { to: '/menu',           label: 'Menu',           Icon: List },
  { to: '/modal',          label: 'Modal',          Icon: AppWindow },
  { to: '/number-input',   label: 'Number Input',   Icon: Hash },
  { to: '/pagination',     label: 'Pagination',     Icon: MoreHorizontal },
  { to: '/priority',       label: 'Priority',       Icon: Flag },
  { to: '/person',         label: 'Person',         Icon: UserRound },
  { to: '/popover',        label: 'Popover',        Icon: MessageSquare },
  { to: '/progress',       label: 'Progress',       Icon: LoaderCircle },
  { to: '/radio-buttons',  label: 'Radio Buttons',  Icon: Circle },
  { to: '/select',         label: 'Select',         Icon: ChevronsUpDown },
  { to: '/service-center', label: 'Service Center', Icon: PanelLeft },
  { to: '/steps',          label: 'Steps',          Icon: ListOrdered },
  { to: '/switch',         label: 'Switch',         Icon: ToggleRight },
  { to: '/tables',         label: 'Tables',         Icon: Table2 },
  { to: '/tabs',           label: 'Tabs',           Icon: Layers },
  { to: '/text-field',     label: 'Text Field',     Icon: TextCursorInput },
  { to: '/tooltip',        label: 'Tooltip',        Icon: MessageSquare },
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNavItems = searchQuery.trim()
    ? navItems.filter(item => !item.divider && item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : navItems

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <aside
        className="w-64 border-r border-[#E9EFF2] bg-white flex flex-col flex-shrink-0"
        onMouseEnter={disableTrail}
      >
        {/* Header */}
        <div className="p-6 flex items-center gap-2">
          <svg width="143" height="58" viewBox="0 0 143 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.994 58C47.8583 58 47.7253 57.9502 47.6228 57.856L5.45564 19.6418C5.31715 19.5172 5.25068 19.3289 5.28114 19.1434C5.31161 18.9579 5.43349 18.8001 5.60245 18.7253L47.7696 0.0473073C47.9413 -0.0274489 48.138 -0.0136068 48.2959 0.0888369C48.4537 0.191281 48.5479 0.365718 48.5479 0.553993V57.4462C48.5479 57.665 48.4177 57.8643 48.2183 57.9529C48.1463 57.9834 48.0715 58 47.994 58ZM6.82946 19.3926L47.44 56.1948V1.40399L6.82946 19.3926Z" fill="#16222E"/>
            <path d="M47.994 58C47.8333 58 47.6746 57.9312 47.5666 57.8011L0.128517 0.908845C-0.00997182 0.74272 -0.0376778 0.512913 0.0509553 0.3191C0.142358 0.125288 0.339012 0.000695786 0.552285 0.000695786H47.9931C48.2978 0.000695786 48.5479 0.249431 48.5479 0.553993V57.4462C48.5479 57.6788 48.4003 57.8869 48.1815 57.9672C48.1205 57.9894 48.0577 58 47.994 58ZM1.73776 1.1082L47.4392 55.9183V1.1082H1.73776Z" fill="#16222E"/>
            <path d="M58.1532 11.9004C57.4885 11.9004 56.8681 11.7785 56.2947 11.5321C55.7214 11.2885 55.2173 10.9479 54.7852 10.516C54.3531 10.0841 54.0124 9.58016 53.7687 9.00703C53.5249 8.43389 53.4003 7.81923 53.4003 7.16304C53.4003 6.50684 53.5194 5.89218 53.7604 5.31905C54.0013 4.74592 54.3365 4.242 54.7713 3.81008C55.2034 3.37815 55.7075 3.0376 56.2809 2.79395C56.8542 2.5503 57.4719 2.4257 58.1394 2.4257C58.8485 2.4257 59.5187 2.55584 60.1475 2.81887C60.7762 3.0819 61.3163 3.45291 61.7623 3.93467L61.0809 4.62963C60.7319 4.22816 60.2943 3.91529 59.7736 3.69102C59.2528 3.46675 58.7072 3.35601 58.1394 3.35601C57.6131 3.35601 57.1256 3.45292 56.6769 3.64396C56.2255 3.83777 55.8322 4.10633 55.4943 4.44966C55.1563 4.79575 54.896 5.19722 54.7076 5.65684C54.5193 6.11645 54.4251 6.61759 54.4251 7.16027C54.4251 7.69463 54.5193 8.19301 54.7076 8.65539C54.896 9.11777 55.1591 9.52478 55.4943 9.8681C55.8322 10.2142 56.2255 10.4828 56.6769 10.6738C57.1284 10.8676 57.6159 10.9618 58.1394 10.9618C58.7598 10.9618 59.3221 10.8261 59.8262 10.5548C60.3303 10.2834 60.7374 9.91241 61.0477 9.43895C61.3579 8.96549 61.5407 8.43389 61.5933 7.83861H58.2973V6.94707H62.6154V7.35408C62.6154 7.99366 62.5018 8.58894 62.2747 9.13992C62.0476 9.6909 61.7318 10.1727 61.3302 10.5824C60.9286 10.9922 60.4549 11.3162 59.912 11.546C59.3692 11.7841 58.782 11.9004 58.1532 11.9004Z" fill="#16222E"/>
            <path d="M63.5205 11.7564V2.56971H67.4591C68.0629 2.56971 68.5892 2.68046 69.0351 2.89643C69.481 3.11516 69.83 3.42249 70.0793 3.81565C70.3286 4.20881 70.4532 4.67396 70.4532 5.20556C70.4532 5.80915 70.276 6.3269 69.9214 6.7616C69.5669 7.19352 69.0933 7.49809 68.4978 7.67252L70.5585 11.7536H69.4423L67.4729 7.80265H64.5314V11.7536H63.5205V11.7564ZM64.5314 6.95264H67.3926C68.013 6.95264 68.5116 6.79482 68.8828 6.47919C69.2539 6.16355 69.4395 5.73993 69.4395 5.20556C69.4395 4.6795 69.2539 4.26142 68.8828 3.94578C68.5116 3.63015 68.013 3.47232 67.3926 3.47232H64.5314V6.95264Z" fill="#16222E"/>
            <path d="M74.9409 11.9004C74.1626 11.9004 73.4868 11.737 72.919 11.4076C72.3512 11.0781 71.9136 10.6129 71.6061 10.0093C71.2987 9.40575 71.1463 8.69419 71.1463 7.87187V2.56971H72.1573V7.87187C72.1573 8.50037 72.2709 9.04858 72.498 9.51096C72.7251 9.97334 73.0492 10.3333 73.4702 10.588C73.8912 10.8427 74.3814 10.9673 74.9409 10.9673C75.5088 10.9673 76.0018 10.84 76.4172 10.588C76.8327 10.3333 77.154 9.97611 77.3811 9.51096C77.6082 9.04858 77.7218 8.50037 77.7218 7.87187V2.56971H78.7328V7.87187C78.7328 8.69419 78.5777 9.40575 78.2675 10.0093C77.9572 10.6129 77.5196 11.0781 76.9546 11.4076C76.3923 11.737 75.7193 11.9004 74.9409 11.9004Z" fill="#16222E"/>
            <path d="M79.9162 11.7564V2.56971H83.9074C84.5112 2.56971 85.0347 2.68046 85.4751 2.89643C85.9155 3.11516 86.259 3.42249 86.5055 3.82119C86.7492 4.21989 86.8738 4.68503 86.8738 5.2194C86.8738 5.75377 86.752 6.21892 86.5055 6.61762C86.259 7.01632 85.9155 7.32642 85.4696 7.55069C85.0236 7.77496 84.5029 7.88571 83.9074 7.88571H80.9271V11.7564H79.9162ZM80.9271 7.00525H83.8271C84.4475 7.00525 84.9433 6.84466 85.3117 6.52625C85.6801 6.20784 85.8629 5.77592 85.8629 5.23325C85.8629 4.69058 85.6801 4.26142 85.3117 3.94855C84.9433 3.63568 84.4503 3.47509 83.8271 3.47509H80.9271V7.00525Z" fill="#16222E"/>
            <path d="M92.0582 11.9004C91.3934 11.9004 90.773 11.7813 90.1997 11.5404C89.6263 11.2996 89.1222 10.9645 88.6901 10.5298C88.258 10.0979 87.9201 9.59401 87.6792 9.02088C87.4382 8.44774 87.3191 7.83032 87.3191 7.16305C87.3191 6.49855 87.4382 5.87835 87.6792 5.30522C87.9201 4.73209 88.2553 4.22817 88.6901 3.79625C89.1222 3.36432 89.6263 3.02654 90.1997 2.78566C90.773 2.54477 91.3907 2.42571 92.0582 2.42571C92.7146 2.42571 93.3295 2.54477 93.9029 2.78566C94.4762 3.02654 94.9803 3.36155 95.4124 3.79625C95.8445 4.22817 96.1824 4.73209 96.4234 5.30522C96.6643 5.87835 96.7834 6.49855 96.7834 7.16305C96.7834 7.82755 96.6616 8.44774 96.4234 9.02088C96.1824 9.59401 95.8472 10.0979 95.4124 10.5298C94.9803 10.9618 94.4762 11.2996 93.9029 11.5404C93.3295 11.7813 92.7146 11.9004 92.0582 11.9004ZM92.0582 10.9701C92.5844 10.9701 93.0691 10.8732 93.5151 10.6821C93.961 10.4911 94.3543 10.2197 94.6895 9.87642C95.0274 9.53033 95.2878 9.12609 95.4761 8.66371C95.6645 8.20132 95.7586 7.70018 95.7586 7.16858C95.7586 6.62591 95.6645 6.12477 95.4761 5.66515C95.2878 5.20554 95.0246 4.80407 94.6895 4.45797C94.3516 4.11188 93.961 3.84332 93.5151 3.65228C93.0691 3.46123 92.5817 3.36432 92.0582 3.36432C91.5347 3.36432 91.0444 3.46123 90.5957 3.65228C90.1443 3.84609 89.751 4.11465 89.4131 4.45797C89.0751 4.80407 88.8148 5.20554 88.6264 5.66515C88.4381 6.12477 88.3439 6.62037 88.3439 7.15474C88.3439 7.69742 88.4381 8.20132 88.6264 8.66371C88.8148 9.12609 89.0779 9.53309 89.4131 9.87642C89.751 10.2225 90.1443 10.4911 90.5957 10.6821C91.0444 10.8732 91.5347 10.9701 92.0582 10.9701Z" fill="#16222E"/>
            <path d="M59.7763 30.9743L53.2368 14.8075H57.5355L62.1334 26.8405L66.8226 14.8075H70.9579L64.327 30.9743H59.7763Z" fill="#16222E"/>
            <path d="M78.1226 31.2263C76.9066 31.2263 75.7738 31.0131 74.7268 30.5923C73.6798 30.1687 72.763 29.5761 71.9764 28.8147C71.1898 28.0533 70.5777 27.1673 70.1401 26.1595C69.7024 25.1517 69.4808 24.0608 69.4808 22.8924C69.4808 21.7212 69.6997 20.6331 70.1401 19.6253C70.5777 18.6174 71.1926 17.7314 71.9764 16.97C72.763 16.2086 73.6771 15.6161 74.7268 15.1925C75.7738 14.7689 76.9066 14.5584 78.1226 14.5584C79.3385 14.5584 80.4713 14.7716 81.5183 15.1925C82.5653 15.6161 83.4821 16.2086 84.2687 16.97C85.0553 17.7314 85.6675 18.6174 86.1051 19.6253C86.5427 20.6331 86.7643 21.724 86.7643 22.8924C86.7643 24.0636 86.5455 25.1517 86.1051 26.1595C85.6675 27.1673 85.0526 28.0533 84.2687 28.8147C83.4821 29.5761 82.5653 30.1687 81.5183 30.5923C80.4686 31.0159 79.3385 31.2263 78.1226 31.2263ZM78.1226 27.5771C78.7707 27.5771 79.369 27.4581 79.9257 27.2199C80.4796 26.9818 80.9616 26.6551 81.3688 26.2398C81.7759 25.8245 82.0972 25.3289 82.3271 24.7502C82.557 24.1743 82.6733 23.5541 82.6733 22.8924C82.6733 22.214 82.557 21.5911 82.3271 21.0207C82.0972 20.4503 81.7759 19.9575 81.3688 19.5422C80.9616 19.1269 80.4796 18.8002 79.9257 18.5621C79.3717 18.3239 78.7707 18.2049 78.1226 18.2049C77.4744 18.2049 76.8762 18.3239 76.3194 18.5621C75.7627 18.8002 75.2835 19.1269 74.8764 19.5422C74.4692 19.9575 74.1479 20.4503 73.918 21.0207C73.6881 21.5911 73.5718 22.2057 73.5718 22.8675C73.5718 23.5458 73.6881 24.1716 73.918 24.7502C74.1479 25.3289 74.4692 25.8245 74.8764 26.2398C75.2835 26.6551 75.7655 26.9818 76.3194 27.2199C76.8734 27.4581 77.4744 27.5771 78.1226 27.5771Z" fill="#16222E"/>
            <path d="M85.2852 30.9743L91.916 14.8076H96.4668L103.006 30.9743H98.7075L97.2285 27.0704H90.9217L89.4205 30.9743H85.2852ZM92.1238 23.9057H96.0513L94.1097 18.7309L92.1238 23.9057Z" fill="#16222E"/>
            <path d="M103.029 30.9743V14.8075H107.004V27.4635H115.529V30.9743H103.029Z" fill="#16222E"/>
            <path d="M116.592 30.9743V14.8076H120.567V27.4635H129.092V30.9743H116.592Z" fill="#16222E"/>
            <path d="M130.154 30.9743V14.8075H142.909V18.2491H134.128V21.159H139.928V24.4843H134.128V27.5327H143V30.9743H130.154Z" fill="#16222E"/>
          </svg>
        </div>

        {/* Search */}
        <div className="px-4 pb-2">
          <TextFieldLeadingIcon
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Pesquisar..."
            width="100%"
          />
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {filteredNavItems.length === 0 && (
            <p className="text-sm text-[#9E9E9E] px-3 py-2">Nenhum resultado.</p>
          )}
          {filteredNavItems.map((item, i) => {
            if (item.divider) {
              return (
                <div key={`divider-${i}`} className="pt-4 pb-1 px-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9E9E9E]">
                    {item.label}
                  </span>
                </div>
              )
            }
            const { to, label, Icon } = item
            return (
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
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-[#E9EFF2] p-4">
          <p className="text-xs text-[#9E9E9E]">v1.1.0 — Design System</p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto bg-[#FAFAFA]">
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/colors"         element={<ColorsPage />} />
          <Route path="/typography"     element={<TypographyPage />} />
          <Route path="/spacing"        element={<SpacingPage />} />
          <Route path="/radius"         element={<RadiusPage />} />
          <Route path="/elevation"      element={<ElevationPage />} />
          <Route path="/grid"           element={<GridPage />} />
          <Route path="/motion"         element={<MotionPage />} />
          <Route path="/alerts"         element={<AlertsPage />} />
          <Route path="/badges"         element={<BadgesPage />} />
          <Route path="/favicon"        element={<FaviconPage />} />
          <Route path="/icon-files"     element={<IconFilesPage />} />
          <Route path="/action-bars"    element={<ActionBarsPage />} />
          <Route path="/breadcrumb"     element={<BreadcrumbPage />} />
          <Route path="/icon-button"    element={<IconButtonPage />} />
          <Route path="/buttons"        element={<ButtonsPage />} />
          <Route path="/cards"          element={<CardsPage />} />
          <Route path="/chips"          element={<ChipsPage />} />
          <Route path="/date-field"     element={<DateFieldPage />} />
          <Route path="/checkbox"       element={<CheckboxPage />} />
          <Route path="/drawer"         element={<DrawerPage />} />
          <Route path="/filter"         element={<FilterPage />} />
          <Route path="/modal"          element={<ModalPage />} />
          <Route path="/service-center" element={<ServiceCenterPage />} />
          <Route path="/mega-menu"      element={<MegaMenuPage />} />
          <Route path="/menu"           element={<MenuPage />} />
          <Route path="/number-input"   element={<NumberInputPage />} />
          <Route path="/pagination"     element={<PaginationPage />} />
          <Route path="/person"         element={<PersonPage />} />
          <Route path="/popover"        element={<PopoverPage />} />
          <Route path="/progress"       element={<ProgressPage />} />
          <Route path="/radio-buttons"  element={<RadioButtonsPage />} />
          <Route path="/select"         element={<SelectPage />} />
          <Route path="/switch"         element={<SwitchPage />} />
          <Route path="/tables"         element={<TablesPage />} />
          <Route path="/tabs"           element={<TabsPage />} />
          <Route path="/text-field"     element={<TextFieldPage />} />
          <Route path="/steps"          element={<StepsPage />} />
          <Route path="/calendar"       element={<CalendarPage />} />
          <Route path="/chart"          element={<ChartPage />} />
          <Route path="/priority"       element={<PriorityPage />} />
          <Route path="/tooltip"        element={<TooltipPage />} />
          <Route path="/logo"           element={<LogoPage />} />
        </Routes>
      </main>
    </div>
  )
}
