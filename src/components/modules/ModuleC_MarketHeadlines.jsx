import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

function ModuleC_MarketHeadlines() {
  const getTopicColor = (topic) => {
    const colors = {
      'Monetary Policy': 'border-red-500/30 bg-red-500/10 text-red-500',
      'Earnings': 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500',
      'Commodities': 'border-amber-500/30 bg-amber-500/10 text-amber-500',
      'Markets': 'border-blue-500/30 bg-blue-500/10 text-blue-500',
      'Technology': 'border-violet-500/30 bg-violet-500/10 text-violet-500',
      'Real Estate': 'border-teal-500/30 bg-teal-500/10 text-teal-500',
      'Cryptocurrency': 'border-orange-500/30 bg-orange-500/10 text-orange-500',
      'Financials': 'border-blue-500/30 bg-blue-500/10 text-blue-500',
    }
    return colors[topic] || 'border-muted text-muted-foreground'
  }

  return (
    <Card className="backdrop-blur-xl bg-card/50 border-emerald-500/20 hover:border-emerald-500/40 shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-emerald-500">Market Headlines</CardTitle>
          <span className="text-[10px] text-muted-foreground font-mono">{marketHeadlines.length}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
          {marketHeadlines.map((headline) => (
            <div key={headline.id} className="p-2.5 bg-muted/30 rounded-lg border border-border/30 hover:border-emerald-500/30 transition-all duration-150 group cursor-pointer">
              <div className="flex items-start justify-between mb-1.5">
                <h4 className="text-xs font-medium text-foreground/90 flex-1 group-hover:text-foreground transition-colors leading-snug">{headline.title}</h4>
                <span className="text-[10px] text-muted-foreground ml-2 whitespace-nowrap font-mono">{headline.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className={cn("text-[9px] font-medium px-1.5 py-0.5", getTopicColor(headline.topic))}>
                  {headline.topic}
                </Badge>
                <span className="text-[10px] text-muted-foreground">{headline.source}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ModuleC_MarketHeadlines
