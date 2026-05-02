import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

function ModuleD_MarketIndices() {
  const getChangeColor = (change) => {
    if (change > 0) return 'text-emerald-500'
    if (change < 0) return 'text-red-500'
    return 'text-muted-foreground'
  }

  const formatChange = (change) => {
    const sign = change > 0 ? '+' : ''
    return `${sign}${change.toFixed(2)}%`
  }

  return (
    <Card className="backdrop-blur-xl bg-card/50 border-emerald-500/20 hover:border-emerald-500/40 shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-emerald-500">Market Indices</CardTitle>
          <span className="text-[10px] text-muted-foreground font-mono">Real-time</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left text-[10px] text-muted-foreground font-medium uppercase tracking-wider pb-2">Symbol</th>
                <th className="text-left text-[10px] text-muted-foreground font-medium uppercase tracking-wider pb-2">Name</th>
                <th className="text-right text-[10px] text-muted-foreground font-medium uppercase tracking-wider pb-2">Last</th>
                <th className="text-right text-[10px] text-muted-foreground font-medium uppercase tracking-wider pb-2">1D</th>
                <th className="text-right text-[10px] text-muted-foreground font-medium uppercase tracking-wider pb-2">1M</th>
                <th className="text-right text-[10px] text-muted-foreground font-medium uppercase tracking-wider pb-2">1Y</th>
              </tr>
            </thead>
            <tbody>
              {marketIndices.map((index) => (
                <tr key={index.symbol} className="group border-b border-border/10 last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="py-2 font-mono text-xs font-medium text-emerald-500 group-hover:text-emerald-400 transition-colors">{index.symbol}</td>
                  <td className="py-2 text-xs text-foreground/90">{index.name}</td>
                  <td className="py-2 text-right font-mono text-xs text-foreground/90">{index.last.toLocaleString()}</td>
                  <td className={cn("py-2 text-right font-mono text-xs", getChangeColor(index.change1D))}>
                    {formatChange(index.change1D)}
                  </td>
                  <td className={cn("py-2 text-right font-mono text-xs", getChangeColor(index.change1M))}>
                    {formatChange(index.change1M)}
                  </td>
                  <td className={cn("py-2 text-right font-mono text-xs", getChangeColor(index.change1Y))}>
                    {formatChange(index.change1Y)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default ModuleD_MarketIndices
