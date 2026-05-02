import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function DataPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-amber-500">Data</span> & Analytics
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Aggregated data series, heatmaps, and analytical visualizations</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <Card className="backdrop-blur-xl bg-card/50 border-amber-500/20 shadow-lg">
        <CardContent className="py-16 text-center">
          <div className="text-4xl mb-4 opacity-50">◆</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Aggregated data series, heatmaps, analytical visualizations, and data analytics will be available here soon.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              { label: 'Heatmaps', status: 'Planned', icon: '🔥' },
              { label: 'Time Series', status: 'Planned', icon: '📊' },
              { label: 'Analytics', status: 'Planned', icon: '🧮' },
            ].map((item, idx) => (
              <Card key={idx} className="border-amber-500/20 bg-muted/30 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-xl mb-2">{item.icon}</div>
                  <p className="text-xs font-medium text-foreground">{item.label}</p>
                  <p className="text-[10px] text-amber-500 mt-1 font-mono">{item.status}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DataPage
