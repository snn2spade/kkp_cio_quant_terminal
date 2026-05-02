import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="min-h-screen border-l border-border/30">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  )
}

export default Layout
