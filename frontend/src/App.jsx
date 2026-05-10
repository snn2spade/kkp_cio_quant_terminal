import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AnalystsPage from './pages/AnalystsPage'
import MarketPage from './pages/MarketPage'
import DataPage from './pages/DataPage'
import SignalPage from './pages/SignalPage'
import PortfolioPage from './pages/PortfolioPage'
import WorkflowPage from './pages/WorkflowPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysts" element={<AnalystsPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/signal" element={<SignalPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/workflow" element={<WorkflowPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
