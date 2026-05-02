import { Badge } from '@/components/ui/badge'
import { UnderConstruction } from '@/components/ui/under-construction'

function MarketPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-emerald-500">Market</span> & Headlines
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Real-time market data, headlines, and indices tracking</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <UnderConstruction
        title="Market"
        description="Real-time market data, headlines, indices tracking, and market insights will be available here soon."
        color="emerald"
        items={[
          { label: 'Market Indices', status: 'Planned', icon: '📊' },
          { label: 'Market Headlines', status: 'Planned', icon: '📰' },
          { label: 'Price Tracking', status: 'Planned', icon: '📈' },
        ]}
      />
    </div>
  )
}

export default MarketPage
