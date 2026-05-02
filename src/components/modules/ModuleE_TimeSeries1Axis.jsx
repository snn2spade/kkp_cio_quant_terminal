import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'
import { timeSeriesData } from '../../data/mockData'

function ModuleE_TimeSeries1Axis({ title = "1-Axis Time Series", data = timeSeriesData, dataKey = "value1", color = "#3b82f6" }) {
  return (
    <Card className="backdrop-blur-xl bg-card/50 border-blue-500/20 hover:border-blue-500/40 shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-blue-500">{title}</CardTitle>
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
            <span className="text-[10px] text-muted-foreground font-mono">{dataKey}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.3)" strokeWidth={0.5} />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--border) / 0.3)' }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--border) / 0.3)' }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border) / 0.5)',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontSize: '11px', marginBottom: '3px' }}
              itemStyle={{ color: 'hsl(var(--foreground))', fontSize: '11px' }}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={1.5}
              dot={{ fill: color, strokeWidth: 1.5, r: 3 }}
              activeDot={{ r: 5, fill: color, stroke: 'hsl(var(--card))', strokeWidth: 1.5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default ModuleE_TimeSeries1Axis
