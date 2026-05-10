import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AnalystsPage from './pages/AnalystsPage'
import MarketPage from './pages/MarketPage'
import DataPage from './pages/DataPage'
import SignalPage from './pages/SignalPage'
import PortfolioPage from './pages/PortfolioPage'
import WorkflowPage from './pages/WorkflowPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import { AuthProvider } from './auth/AuthContext'
import ProtectedRoute from './auth/ProtectedRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analysts" element={<AnalystsPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/signal" element={<SignalPage />} />
            <Route path="/portfolio" element={<ProtectedRoute><PortfolioPage /></ProtectedRoute>} />
            <Route path="/workflow" element={<ProtectedRoute><WorkflowPage /></ProtectedRoute>} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  )
}

export default App
