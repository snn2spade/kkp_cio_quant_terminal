import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

const colorClasses = {
  'cqt-red': { bg: 'bg-cqt-red/20', border: 'border-cqt-red/40', text: 'text-cqt-red' },
  'cqt-blue': { bg: 'bg-cqt-blue/20', border: 'border-cqt-blue/40', text: 'text-cqt-blue' },
  'cqt-green': { bg: 'bg-cqt-green/20', border: 'border-cqt-green/40', text: 'text-cqt-green' },
  'cqt-amber': { bg: 'bg-cqt-amber/20', border: 'border-cqt-amber/40', text: 'text-cqt-amber' },
  'cqt-purple': { bg: 'bg-cqt-purple/20', border: 'border-cqt-purple/40', text: 'text-cqt-purple' },
  'cqt-orange': { bg: 'bg-cqt-orange/20', border: 'border-cqt-orange/40', text: 'text-cqt-orange' },
  'cqt-teal': { bg: 'bg-cqt-teal/20', border: 'border-cqt-teal/40', text: 'text-cqt-teal' },
}

const menuItems = [
  { path: '/', label: 'Home', icon: 'home', color: 'cqt-red' },
  { path: '/analysts', label: 'Analysts', icon: 'group', color: 'cqt-blue' },
  { path: '/market', label: 'Market', icon: 'trending_up', color: 'cqt-green' },
  { path: '/data', label: 'Data', icon: 'data_usage', color: 'cqt-amber' },
  { path: '/signal', label: 'Signal', icon: 'show_chart', color: 'cqt-purple' },
  { path: '/portfolio', label: 'Portfolio', icon: 'account_balance', color: 'cqt-orange' },
  { path: '/workflow', label: 'Workflow', icon: 'check_circle', color: 'cqt-teal' },
]

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`backdrop-blur-xl bg-cqt-surface/40 border-r border-cqt-border flex flex-col h-screen sticky top-0 transition-all duration-300 shadow-lg ${
      isCollapsed ? 'w-20' : 'w-56'
    }`}>
      <div className="p-4 border-b border-cqt-border/30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cqt-accent via-cqt-blue to-cqt-purple flex items-center justify-center shadow-glow-accent">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-sm font-bold text-cqt-text-primary tracking-tight">CIO Quant</h1>
                <p className="text-[8px] text-cqt-text-muted uppercase tracking-widest font-semibold">Terminal</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-full flex justify-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cqt-accent via-cqt-blue to-cqt-purple flex items-center justify-center shadow-glow-accent">
                <span className="text-white font-bold text-sm">C</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-cqt-border/20 rounded-lg transition-all duration-200 ml-2 flex-shrink-0 backdrop-blur-sm group"
            title={isCollapsed ? 'Expand' : 'Collapse'}
          >
            <span className="text-cqt-text-muted group-hover:text-cqt-accent text-xs transition-colors">{isCollapsed ? '›' : '‹'}</span>
          </button>
        </div>
      </div>

      <nav className="flex-1 py-3 px-2 space-y-1.5 overflow-y-auto">
        {menuItems.map((item, idx) => {
          const colors = colorClasses[item.color]
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 group w-full justify-start mx-0 outline-none focus:outline-none ring-0 focus:ring-0 border ${
                  isActive
                    ? `${colors.bg} ${colors.border} ${colors.text} shadow-glow-subtle backdrop-blur-md`
                    : `text-cqt-text-muted border-transparent hover:bg-cqt-border/15 hover:text-cqt-text-primary hover:border-cqt-border/20 backdrop-blur-sm`
                } ${isCollapsed ? 'translate-x-0' : 'translate-x-0'}`
              }
              style={{
                animation: !isCollapsed ? `slideIn 0.4s ease-out ${idx * 0.05}s both` : 'none',
              }}
              title={isCollapsed ? item.label : ''}
            >
              <span className={`material-icons text-[22px] flex-shrink-0 ${item.color} opacity-85 group-hover:opacity-100 transition-all duration-200 select-none`}>
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="font-semibold text-sm whitespace-nowrap tracking-tight overflow-hidden animate-slide-text">
                  {item.label}
                </span>
              )}
            </NavLink>
          )
        })}
      </nav>

      <Separator className="my-2 bg-cqt-border/20" />

      <div className="p-3 backdrop-blur-sm bg-cqt-border/10 rounded-lg mx-2 mb-3 border border-cqt-border/30">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cqt-accent/20 to-cqt-accent/5 border border-cqt-accent/40 flex items-center justify-center flex-shrink-0 shadow-glow-subtle">
            <span className="text-cqt-accent font-bold text-xs">U</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-cqt-text-primary truncate">John Analyst</p>
              <p className="text-[10px] text-cqt-text-muted font-medium">Senior</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
