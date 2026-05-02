import ModuleC_MarketHeadlines from '../components/modules/ModuleC_MarketHeadlines'
import ModuleD_MarketIndices from '../components/modules/ModuleD_MarketIndices'

function MarketPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-cqt-text-primary">
            <span className="text-cqt-green">Market</span> & Insights
          </h2>
          <p className="text-[11px] text-cqt-text-muted mt-0.5">Real-time market data, headlines, and indices tracking</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 px-2 py-1 bg-cqt-green/10 border border-cqt-green/30 rounded-md">
            <div className="w-1.5 h-1.5 rounded-full bg-cqt-green animate-pulse"></div>
            <span className="text-[10px] text-cqt-green font-mono">OPEN</span>
          </div>
          <div className="text-[10px] text-cqt-text-muted font-mono">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <ModuleC_MarketHeadlines />
        <ModuleD_MarketIndices />
      </div>
      
      {/* Market Overview Stats - Compact */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Status', value: 'OPEN', color: 'text-cqt-green', border: 'border-cqt-green/30' },
          { label: 'VIX', value: '18.2', color: 'text-cqt-amber', border: 'border-cqt-amber/30' },
          { label: '10Y', value: '4.25%', color: 'text-cqt-blue', border: 'border-cqt-blue/30' },
          { label: 'WTI', value: '$78.45', color: 'text-cqt-red', border: 'border-cqt-red/30' },
        ].map((stat, idx) => (
          <div key={idx} className={`rounded-md p-3 border ${stat.border} bg-cqt-panel/60 backdrop-blur-sm`}>
            <p className="text-[10px] text-cqt-text-muted uppercase tracking-wide">{stat.label}</p>
            <p className={`text-xl font-bold font-mono ${stat.color} mt-1`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketPage
