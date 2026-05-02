import ModuleA_SummarizedInsights from '../components/modules/ModuleA_SummarizedInsights'
import { insights } from '../data/mockData'

function HomePage() {
  const insightsByHouse = insights.filter(i => ['Goldman Sachs', 'Morgan Stanley', 'JP Morgan', 'Barclays'].includes(i.house))
  const insightsByAnalyst = insights.filter(i => ['John Smith', 'Sarah Johnson', 'Michael Chen'].includes(i.analyst))

  return (
    <div className="p-4 max-w-[1800px] mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-cqt-text-primary">
            <span className="text-cqt-red">Dashboard</span> & Overview
          </h2>
          <p className="text-[11px] text-cqt-text-muted mt-0.5">Summarized insights from analysts and market data</p>
        </div>
        <div className="text-[10px] text-cqt-text-muted font-mono">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <ModuleA_SummarizedInsights
          title="Latest Insights by House"
          insights={insightsByHouse}
          themeColor="cqt-red"
        />
        <ModuleA_SummarizedInsights
          title="Latest Insights by Analyst"
          insights={insightsByAnalyst}
          themeColor="cqt-red"
        />
      </div>

      {/* Quick Stats - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: 'Tracking Analysts', value: '7', color: 'text-cqt-red', borderColor: 'border-cqt-red/30', live: true },
          { label: 'Research Houses', value: '6', color: 'text-cqt-blue', borderColor: 'border-cqt-blue/30', live: true },
          { label: 'New Papers This Month', value: '24', color: 'text-cqt-green', borderColor: 'border-cqt-green/30' },
        ].map((stat, idx) => (
          <div key={idx} className={`rounded-md p-3 border ${stat.borderColor} bg-cqt-panel/60 backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-1">
              <p className={`text-xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
              {stat.live && (
                <div className={`flex items-center space-x-1 ${stat.color.replace('text-', 'text-')}`}>
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${stat.color.replace('text-', 'bg-')}`}></div>
                  <span className={`text-[9px] ${stat.color} font-mono`}>LIVE</span>
                </div>
              )}
            </div>
            <p className="text-[10px] text-cqt-text-muted uppercase tracking-wide mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
