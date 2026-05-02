import { Badge } from '@/components/ui/badge'
import { UnderConstruction } from '@/components/ui/under-construction'

function PortfolioPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-orange-500">Portfolio</span> & Performance
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Track and analyze portfolio performance</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <UnderConstruction
        title="Portfolio"
        description="Portfolio tracking, performance analytics, and position management will be available here soon."
        color="orange"
        items={[
          { label: 'Portfolio Construction', status: 'Planned', icon: '📊' },
          { label: 'Portfolio Backtesting', status: 'Planned', icon: '📈' },
          { label: 'Portfolio Monitoring', status: 'Planned', icon: '⚠️' },
        ]}
      />
    </div>
  )
}

export default PortfolioPage
