import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-cqt-bg">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-cqt-bg">
        <div className="min-h-screen border-l border-cqt-border/30">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  )
}

export default Layout
