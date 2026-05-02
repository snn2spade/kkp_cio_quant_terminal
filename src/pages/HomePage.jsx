import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ModuleA_SummarizedInsights from '../components/modules/ModuleA_SummarizedInsights'
import { insights } from '../data/mockData'
import { cn } from '@/lib/utils'

function HomePage() {
  const insightsByHouse = insights.filter(i => ['Goldman Sachs', 'Morgan Stanley', 'JP Morgan', 'Barclays'].includes(i.house))
  const insightsByAnalyst = insights.filter(i => ['John Smith', 'Sarah Johnson', 'Michael Chen'].includes(i.analyst))

  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-red-500">Dashboard</span> & Overview
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Summarized insights from analysts and market data</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <ModuleA_SummarizedInsights
          title="Latest Insights by House"
          insights={insightsByHouse}
          themeColor="red"
        />
        <ModuleA_SummarizedInsights
          title="Latest Insights by Analyst"
          insights={insightsByAnalyst}
          themeColor="red"
        />
      </div>

      {/* Quick Stats - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: 'Tracking Analysts', value: '7', color: 'text-red-500', borderColor: 'border-red-500/30', bgColor: 'bg-red-500/5', live: true },
          { label: 'Research Houses', value: '6', color: 'text-blue-500', borderColor: 'border-blue-500/30', bgColor: 'bg-blue-500/5', live: true },
          { label: 'New Papers This Month', value: '24', color: 'text-emerald-500', borderColor: 'border-emerald-500/30', bgColor: 'bg-emerald-500/5' },
        ].map((stat, idx) => (
          <Card key={idx} className={cn("border backdrop-blur-xl bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300", stat.borderColor, stat.bgColor)}>
            <CardContent className="p-3">
              <div className="flex items-center justify-between mb-1">
                <p className={`text-xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
                {stat.live && (
                  <div className={cn("flex items-center space-x-1", stat.color)}>
                    <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", stat.color.replace('text-', 'bg-'))}></div>
                    <span className="text-[9px] font-mono">LIVE</span>
                  </div>
                )}
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HomePage
