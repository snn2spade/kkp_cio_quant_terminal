import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const themeStyles = {
  'cqt-red': {
    title: 'text-red-500',
    badge: 'border-red-500/30 bg-red-500/10 text-red-500',
    card: 'border-red-500/20 hover:border-red-500/40 hover:bg-red-500/5',
    pill: 'bg-red-500/10 text-red-500',
  },
  'cqt-blue': {
    title: 'text-blue-500',
    badge: 'border-blue-500/30 bg-blue-500/10 text-blue-500',
    card: 'border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5',
    pill: 'bg-blue-500/10 text-blue-500',
  },
  'cqt-green': {
    title: 'text-emerald-500',
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500',
    card: 'border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5',
    pill: 'bg-emerald-500/10 text-emerald-500',
  },
  'cqt-amber': {
    title: 'text-amber-500',
    badge: 'border-amber-500/30 bg-amber-500/10 text-amber-500',
    card: 'border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/5',
    pill: 'bg-amber-500/10 text-amber-500',
  },
  'cqt-purple': {
    title: 'text-violet-500',
    badge: 'border-violet-500/30 bg-violet-500/10 text-violet-500',
    card: 'border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/5',
    pill: 'bg-violet-500/10 text-violet-500',
  },
  'cqt-orange': {
    title: 'text-orange-500',
    badge: 'border-orange-500/30 bg-orange-500/10 text-orange-500',
    card: 'border-orange-500/20 hover:border-orange-500/40 hover:bg-orange-500/5',
    pill: 'bg-orange-500/10 text-orange-500',
  },
  'cqt-teal': {
    title: 'text-teal-500',
    badge: 'border-teal-500/30 bg-teal-500/10 text-teal-500',
    card: 'border-teal-500/20 hover:border-teal-500/40 hover:bg-teal-500/5',
    pill: 'bg-teal-500/10 text-teal-500',
  },
}

function ModuleA_SummarizedInsights({ title, insights, themeColor = 'cqt-blue' }) {
  const [expandedId, setExpandedId] = useState(null)
  const styles = themeStyles[themeColor] || themeStyles['cqt-blue']

  return (
    <Card className={cn("backdrop-blur-xl bg-card/50 shadow-lg transition-all duration-300", styles.card)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className={cn("text-sm font-semibold", styles.title)}>{title}</CardTitle>
          <Badge variant="outline" className={cn("text-[10px] font-mono", styles.badge)}>
            {insights.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={cn(
                "p-3 bg-muted/30 rounded-lg border cursor-pointer transition-all duration-200",
                styles.card
              )}
              onClick={() => setExpandedId(expandedId === insight.id ? null : insight.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className={cn("text-[10px] font-medium", styles.pill)}>
                  {insight.house}
                </Badge>
                <span className="text-[10px] text-muted-foreground font-mono">{insight.date}</span>
              </div>
              <p className="text-xs text-foreground/90 leading-relaxed mb-1.5 line-clamp-2">{insight.text}</p>
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-muted-foreground">
                  Analyst: <span className="text-foreground/80">{insight.analyst}</span>
                </p>
                <ChevronDown className={cn(
                  "w-3 h-3 text-muted-foreground transition-transform duration-200",
                  expandedId === insight.id && "rotate-180"
                )} />
              </div>

              {expandedId === insight.id && (
                <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Full analysis would be displayed here with detailed charts and data visualizations.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ModuleA_SummarizedInsights
