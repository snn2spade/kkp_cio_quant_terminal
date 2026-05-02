import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const menuItems = [
  { path: '/', label: 'Home', icon: '◈', color: 'cqt-red' },
  { path: '/analysts', label: 'Analysts', icon: '◊', color: 'cqt-blue' },
  { path: '/market', label: 'Market', icon: '◉', color: 'cqt-green' },
  { path: '/data', label: 'Data', icon: '◐', color: 'cqt-amber' },
  { path: '/signal', label: 'Signal', icon: '◑', color: 'cqt-purple' },
  { path: '/portfolio', label: 'Portfolio', icon: '◇', color: 'cqt-orange' },
  { path: '/workflow', label: 'Workflow', icon: '◆', color: 'cqt-teal' },
]

function Sidebar() {
  return (
    <div className="w-56 bg-cqt-surface border-r border-cqt-border/50 flex flex-col h-screen sticky top-0">
      <div className="p-4 border-b border-cqt-border/30">
        <div className="flex items-center space-x-2.5 mb-0.5">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cqt-accent to-cqt-purple flex items-center justify-center shadow-glow-accent">
            <span className="text-white font-bold text-xs">C</span>
          </div>
          <div>
            <h1 className="text-base font-semibold text-cqt-text-primary tracking-tight">CIO Quant</h1>
            <p className="text-[9px] text-cqt-text-muted uppercase tracking-[0.15em] font-medium">Terminal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2.5 px-3 py-2 rounded-md transition-all duration-150 group w-full justify-start ${
                isActive
                  ? `bg-cqt-accent/15 border-l-2 border-cqt-accent text-cqt-accent`
                  : 'hover:bg-cqt-elevated/70 text-cqt-text-muted hover:text-cqt-text-primary border-l-2 border-transparent'
              }`
            }
          >
            <span className={`text-sm ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
              {item.icon}
            </span>
            <span className="font-medium text-xs">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <Separator className="my-2" />

      <div className="p-3 bg-cqt-surface/80">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-md bg-cqt-accent/10 border border-cqt-accent/30 flex items-center justify-center">
            <span className="text-cqt-accent font-semibold text-xs">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-cqt-text-primary truncate">John Analyst</p>
            <p className="text-[10px] text-cqt-text-muted">Senior</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
