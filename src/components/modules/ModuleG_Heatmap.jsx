import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { heatmapData } from '../../data/mockData'

function ModuleG_Heatmap({ title = "Heatmap", data = heatmapData }) {
  const dates = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05']

  const getColor = (value) => {
    if (value >= 0.8) return 'bg-emerald-500'
    if (value >= 0.6) return 'bg-blue-500'
    if (value >= 0.4) return 'bg-amber-500'
    return 'bg-red-500'
  }

  const getTextColor = (value) => {
    return 'text-white'
  }

  return (
    <Card className="backdrop-blur-xl bg-card/50 border-amber-500/20 hover:border-amber-500/40 shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-amber-500">{title}</CardTitle>
          <span className="text-[10px] text-muted-foreground font-mono">{data.length} topics</span>
        </div>
      </CardHeader>
      <CardContent>
        {/* Legend */}
        <div className="flex items-center justify-end mb-3 space-x-1.5 text-[10px]">
          <span className="text-muted-foreground">Low</span>
          <div className="flex space-x-0.5">
            <div className="w-4 h-2.5 bg-red-500 rounded-sm"></div>
            <div className="w-4 h-2.5 bg-amber-500 rounded-sm"></div>
            <div className="w-4 h-2.5 bg-blue-500 rounded-sm"></div>
            <div className="w-4 h-2.5 bg-emerald-500 rounded-sm"></div>
          </div>
          <span className="text-muted-foreground">High</span>
        </div>

        {/* Heatmap Grid */}
        <div className="w-full">
          {/* Header with dates */}
          <div className="flex mb-1">
            <div className="w-20 flex-shrink-0"></div>
            {dates.map(date => (
              <div key={date} className="flex-1 text-center">
                <span className="text-[10px] text-muted-foreground font-mono">{date.split('-')[1]}/{date.split('-')[2]}</span>
              </div>
            ))}
          </div>

          {/* Heatmap rows */}
          {data.map((row, rowIndex) => (
            <div key={row.topic} className="flex mb-1 group">
              <div className="w-20 flex-shrink-0 text-[10px] text-muted-foreground flex items-center pr-1.5 font-medium truncate">
                {row.topic}
              </div>
              <div className="flex-1 flex space-x-0.5">
                {dates.map(date => (
                  <div
                    key={`${row.topic}-${date}`}
                    className={cn(
                      "flex-1 h-7 rounded-sm flex items-center justify-center text-[10px] font-medium transition-transform duration-200 hover:scale-105",
                      getColor(row[date]),
                      getTextColor(row[date])
                    )}
                  >
                    {row[date].toFixed(2)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ModuleG_Heatmap
