import { marketHeadlines } from '../../data/mockData'

function ModuleC_MarketHeadlines() {
  const getTopicColor = (topic) => {
    const colors = {
      'Monetary Policy': 'bg-cqt-red/20 text-cqt-red border-cqt-red/30',
      'Earnings': 'bg-cqt-green/20 text-cqt-green border-cqt-green/30',
      'Commodities': 'bg-cqt-amber/20 text-cqt-amber border-cqt-amber/30',
      'Markets': 'bg-cqt-blue/20 text-cqt-blue border-cqt-blue/30',
      'Technology': 'bg-cqt-purple/20 text-cqt-purple border-cqt-purple/30',
      'Real Estate': 'bg-cqt-teal/20 text-cqt-teal border-cqt-teal/30',
      'Cryptocurrency': 'bg-cqt-orange/20 text-cqt-orange border-cqt-orange/30',
      'Financials': 'bg-cqt-blue/20 text-cqt-blue border-cqt-blue/30',
    }
    return colors[topic] || 'bg-cqt-text-muted/20 text-cqt-text-muted border-cqt-border'
  }

  return (
    <div className="module-card-green">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cqt-green">Market Headlines</h3>
        <span className="text-[10px] text-cqt-text-muted font-mono">{marketHeadlines.length}</span>
      </div>
      <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
        {marketHeadlines.map((headline) => (
          <div key={headline.id} className="p-2.5 bg-cqt-elevated/50 rounded-md border border-cqt-border/30 hover:border-cqt-green/30 transition-all duration-150 group cursor-pointer">
            <div className="flex items-start justify-between mb-1.5">
              <h4 className="text-xs font-medium text-cqt-text-primary flex-1 group-hover:text-white transition-colors leading-snug">{headline.title}</h4>
              <span className="text-[10px] text-cqt-text-muted ml-2 whitespace-nowrap font-mono">{headline.time}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded border ${getTopicColor(headline.topic)}`}>
                {headline.topic}
              </span>
              <span className="text-[10px] text-cqt-text-muted">{headline.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModuleC_MarketHeadlines
