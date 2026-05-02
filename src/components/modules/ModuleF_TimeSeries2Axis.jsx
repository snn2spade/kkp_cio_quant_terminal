import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { timeSeriesData } from '../../data/mockData'

function ModuleF_TimeSeries2Axis({ title = "2-Axis Time Series", data = timeSeriesData }) {
  return (
    <div className="module-card-amber">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cqt-amber">{title}</h3>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-0.5 bg-cqt-blue"></div>
            <span className="text-[10px] text-cqt-text-muted font-mono">Est. EPS</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-0.5 bg-cqt-green"></div>
            <span className="text-[10px] text-cqt-text-muted font-mono">Actual</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(245, 158, 11, 0.1)" strokeWidth={0.5} />
          <XAxis 
            dataKey="date" 
            stroke="#475569"
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
          />
          <YAxis 
            yAxisId="left"
            stroke="#3b82f6"
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(59, 130, 246, 0.2)' }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="#10b981"
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(16, 185, 129, 0.2)' }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(22, 25, 34, 0.95)', 
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '6px',
              padding: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
            }}
            labelStyle={{ color: '#e2e8f0', fontSize: '11px', marginBottom: '3px' }}
            itemStyle={{ color: '#e2e8f0', fontSize: '11px' }}
          />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="value1" 
            stroke="#3b82f6" 
            strokeWidth={1.5}
            name="Est. EPS"
            dot={{ fill: '#3b82f6', strokeWidth: 1.5, r: 3 }}
            activeDot={{ r: 5, fill: '#3b82f6', stroke: 'rgba(22, 25, 34, 0.95)', strokeWidth: 1.5 }}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="value2" 
            stroke="#10b981" 
            strokeWidth={1.5}
            name="Actual"
            dot={{ fill: '#10b981', strokeWidth: 1.5, r: 3 }}
            activeDot={{ r: 5, fill: '#10b981', stroke: 'rgba(22, 25, 34, 0.95)', strokeWidth: 1.5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ModuleF_TimeSeries2Axis
