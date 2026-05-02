import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { timeSeriesData } from '../../data/mockData'

function ModuleE_TimeSeries1Axis({ title = "1-Axis Time Series", data = timeSeriesData, dataKey = "value1", color = "#3b82f6" }) {
  return (
    <div className="module-card-blue">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cqt-blue">{title}</h3>
        <div className="flex items-center space-x-1.5">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
          <span className="text-[10px] text-cqt-text-muted font-mono">{dataKey}</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(59, 130, 246, 0.1)" strokeWidth={0.5} />
          <XAxis 
            dataKey="date" 
            stroke="#475569"
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
          />
          <YAxis 
            stroke="#475569"
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(22, 25, 34, 0.95)', 
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '6px',
              padding: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
            }}
            labelStyle={{ color: '#e2e8f0', fontSize: '11px', marginBottom: '3px' }}
            itemStyle={{ color: '#e2e8f0', fontSize: '11px' }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={1.5}
            dot={{ fill: color, strokeWidth: 1.5, r: 3 }}
            activeDot={{ r: 5, fill: color, stroke: 'rgba(22, 25, 34, 0.95)', strokeWidth: 1.5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ModuleE_TimeSeries1Axis
