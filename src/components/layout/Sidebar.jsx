import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Home,
  Users,
  Rss,
  Database,
  TrendingUp,
  Building2,
  Workflow,
  ChevronLeft,
  ChevronRight,
  Terminal,
  User,
  Sun,
  Moon
} from 'lucide-react'

const menuItems = [
  { path: '/', label: 'Home', icon: Home, color: 'red' },
  { path: '/analysts', label: 'Analysts', icon: Users, color: 'blue' },
  { path: '/market', label: 'Market', icon: Rss, color: 'emerald' },
  { path: '/data', label: 'Data', icon: Database, color: 'amber' },
  { path: '/signal', label: 'Signal', icon: TrendingUp, color: 'violet' },
  { path: '/portfolio', label: 'Portfolio', icon: Building2, color: 'orange' },
  { path: '/workflow', label: 'Workflow', icon: Workflow, color: 'fuchsia' },
]

const colorMap = {
  'red': 'text-red-500 bg-red-500/10 border-red-500/20',
  'blue': 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  'emerald': 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  'amber': 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  'violet': 'text-violet-500 bg-violet-500/10 border-violet-500/20',
  'orange': 'text-orange-500 bg-orange-500/10 border-orange-500/20',
  'fuchsia': 'text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/20',
}

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return !document.documentElement.classList.contains('light')
    }
    return true
  })

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className={cn(
      "backdrop-blur-xl bg-card/40 border-r border-border flex flex-col h-screen sticky top-0 transition-all duration-300 shadow-lg",
      isCollapsed ? 'w-20 overflow-hidden' : 'w-56'
    )}>
      <div className="p-4 border-b border-border/30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm font-bold text-foreground tracking-tight">CIO Quant</h1>
                <p className="text-[8px] text-muted-foreground uppercase tracking-widest font-semibold">Terminal</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-full flex justify-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Terminal className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 py-3 px-2 space-y-1.5 overflow-y-auto">
        {menuItems.map((item, idx) => {
          const Icon = item.icon
          const colorClass = colorMap[item.color]
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group w-full justify-start mx-0 border",
                  isActive
                    ? `${colorClass} shadow-sm backdrop-blur-md`
                    : "text-muted-foreground border-transparent hover:bg-muted/50 hover:text-foreground hover:border-border/20"
                )
              }
              style={{
                animation: !isCollapsed ? `slideIn 0.4s ease-out ${idx * 0.05}s both` : 'none',
              }}
              title={isCollapsed ? item.label : ''}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 opacity-85 group-hover:opacity-100 transition-all duration-200`} />
              {!isCollapsed && (
                <span className="font-semibold text-sm whitespace-nowrap tracking-tight overflow-hidden">
                  {item.label}
                </span>
              )}
            </NavLink>
          )
        })}
      </nav>

      <Separator className="my-2 bg-border/20" />

      <div className="px-2 mb-3 space-y-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center hover:bg-muted/50"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="w-full flex items-center justify-center hover:bg-muted/50"
          title={isDark ? 'Switch to Light' : 'Switch to Dark'}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>

      <div className="p-3 backdrop-blur-sm bg-muted/20 rounded-lg mx-2 mb-3 border border-border/30">
        <div className={cn("flex items-center", isCollapsed ? "justify-center" : "space-x-3")}>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-primary" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">John Analyst</p>
              <p className="text-[10px] text-muted-foreground font-medium">Senior</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
