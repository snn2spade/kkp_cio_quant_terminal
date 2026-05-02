import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ModuleB_AskSearchPapers from '../components/modules/ModuleB_AskSearchPapers'
import { cn } from '@/lib/utils'

function AnalystsPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-blue-500">Analyst</span> & Research
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Search and analyze research papers from leading financial institutions</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <ModuleB_AskSearchPapers />
      </div>

      {/* Additional Info Cards - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: 'Research Coverage', value: '150+', sub: 'Papers', color: 'text-blue-500', border: 'border-blue-500/30', bg: 'bg-blue-500/5' },
          { label: 'Top House', value: 'Goldman', sub: 'Most pubs', color: 'text-blue-500', border: 'border-blue-500/30', bg: 'bg-blue-500/5' },
          { label: 'Avg. Pages', value: '24', sub: 'Per doc', color: 'text-blue-500', border: 'border-blue-500/30', bg: 'bg-blue-500/5' },
        ].map((stat, idx) => (
          <Card key={idx} className={cn("border backdrop-blur-xl bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300", stat.border, stat.bg)}>
            <CardContent className="p-3">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              <p className={`text-xl font-bold font-mono ${stat.color} mt-1`}>{stat.value}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AnalystsPage
