import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { timeSeriesData } from '../../data/mockData'

function ModuleF_TimeSeries2Axis({ title = "2-Axis Time Series", data = timeSeriesData }) {
  return (
    <Card className="backdrop-blur-xl bg-card/50 border-amber-500/20 hover:border-amber-500/40 shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-amber-500">{title}</CardTitle>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-0.5 bg-blue-500"></div>
              <span className="text-[10px] text-muted-foreground font-mono">Est. EPS</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-0.5 bg-emerald-500"></div>
              <span className="text-[10px] text-muted-foreground font-mono">Actual</span>
            </div>
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
              yAxisId="left"
              stroke="#3b82f6"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(59, 130, 246, 0.3)' }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#10b981"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(16, 185, 129, 0.3)' }}
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
              yAxisId="left"
              type="monotone"
              dataKey="value1"
              stroke="#3b82f6"
              strokeWidth={1.5}
              name="Est. EPS"
              dot={{ fill: '#3b82f6', strokeWidth: 1.5, r: 3 }}
              activeDot={{ r: 5, fill: '#3b82f6', stroke: 'hsl(var(--card))', strokeWidth: 1.5 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="value2"
              stroke="#10b981"
              strokeWidth={1.5}
              name="Actual"
              dot={{ fill: '#10b981', strokeWidth: 1.5, r: 3 }}
              activeDot={{ r: 5, fill: '#10b981', stroke: 'hsl(var(--card))', strokeWidth: 1.5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default ModuleF_TimeSeries2Axis
