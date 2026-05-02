import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface UnderConstructionProps {
  title: string
  description: string
  color?: 'red' | 'blue' | 'emerald' | 'amber' | 'violet' | 'orange' | 'fuchsia'
  items?: Array<{
    label: string
    status: string
    icon: string
  }>
  className?: string
}

const colorMap = {
  red: 'text-red-500 border-red-500/20 bg-red-500/5',
  blue: 'text-blue-500 border-blue-500/20 bg-blue-500/5',
  emerald: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5',
  amber: 'text-amber-500 border-amber-500/20 bg-amber-500/5',
  violet: 'text-violet-500 border-violet-500/20 bg-violet-500/5',
  orange: 'text-orange-500 border-orange-500/20 bg-orange-500/5',
  fuchsia: 'text-fuchsia-500 border-fuchsia-500/20 bg-fuchsia-500/5',
}

const statusColorMap = {
  red: 'text-red-500',
  blue: 'text-blue-500',
  emerald: 'text-emerald-500',
  amber: 'text-amber-500',
  violet: 'text-violet-500',
  orange: 'text-orange-500',
  fuchsia: 'text-fuchsia-500',
}

export function UnderConstruction({
  title,
  description,
  color = 'blue',
  items = [],
  className,
}: UnderConstructionProps) {
  const colorClass = colorMap[color]
  const statusColorClass = statusColorMap[color]

  return (
    <Card className={cn("backdrop-blur-xl bg-card/50 shadow-lg", colorClass, className)}>
      <CardContent className="py-16 text-center">
        <div className="text-4xl mb-4 opacity-50">🚧</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {description}
        </p>

        {items.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {items.map((item, idx) => (
              <Card key={idx} className={cn("border bg-muted/30 hover:border-opacity-40 transition-all duration-300", colorClass)}>
                <CardContent className="p-4">
                  <div className="text-xl mb-2">{item.icon}</div>
                  <p className="text-xs font-medium text-foreground">{item.label}</p>
                  <p className={cn("text-[10px] mt-1 font-mono", statusColorClass)}>{item.status}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
