import { ResponsiveContainer, Treemap } from 'recharts'
import { heatmapData } from '../../data/mockData'

function ModuleG_Heatmap({ title = "Heatmap", data = heatmapData }) {
  const dates = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05']
  
  const getColor = (value) => {
    if (value >= 0.8) return '#10b981'
    if (value >= 0.6) return '#3b82f6'
    if (value >= 0.4) return '#f59e0b'
    return '#ef4444'
  }

  const CustomCell = (props) => {
    const { x, y, width, height, name, value } = props
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={getColor(value)}
          fillOpacity={0.8}
          stroke="rgba(22, 25, 34, 0.5)"
          strokeWidth={2}
          rx={4}
        />
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize={11}
          fontWeight={500}
        >
          {value.toFixed(2)}
        </text>
      </g>
    )
  }

  // Transform data for heatmap
  const transformedData = data.flatMap((row, rowIndex) =>
    dates.map((date, colIndex) => ({
      name: `${row.topic}-${date}`,
      topic: row.topic,
      date: date,
      value: row[date],
      x: colIndex * (100 / dates.length),
      y: rowIndex * (100 / data.length),
      width: 100 / dates.length,
      height: 100 / data.length,
    }))
  )

  return (
    <div className="module-card-amber">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cqt-amber">{title}</h3>
        <span className="text-[10px] text-cqt-text-muted font-mono">{data.length} topics</span>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end mb-2 space-x-1.5 text-[10px]">
        <span className="text-cqt-text-muted">Low</span>
        <div className="flex space-x-0.5">
          <div className="w-4 h-2.5 bg-red-500 rounded-sm"></div>
          <div className="w-4 h-2.5 bg-amber-500 rounded-sm"></div>
          <div className="w-4 h-2.5 bg-blue-500 rounded-sm"></div>
          <div className="w-4 h-2.5 bg-green-500 rounded-sm"></div>
        </div>
        <span className="text-cqt-text-muted">High</span>
      </div>
      
      {/* Heatmap Grid */}
      <div className="w-full">
        {/* Header with dates */}
        <div className="flex mb-1">
          <div className="w-20 flex-shrink-0"></div>
          {dates.map(date => (
            <div key={date} className="flex-1 text-center">
              <span className="text-[10px] text-cqt-text-muted font-mono">{date.split('-')[1]}/{date.split('-')[2]}</span>
            </div>
          ))}
        </div>
        
        {/* Heatmap rows */}
        {data.map((row, rowIndex) => (
          <div key={row.topic} className="flex mb-1 group">
            <div className="w-20 flex-shrink-0 text-[10px] text-cqt-text-secondary flex items-center pr-1.5 font-medium truncate">
              {row.topic}
            </div>
            <div className="flex-1 flex space-x-0.5">
              {dates.map(date => (
                <div
                  key={`${row.topic}-${date}`}
                  className="flex-1 h-7 rounded-sm flex items-center justify-center text-[10px] font-medium text-white transition-transform duration-200 hover:scale-105"
                  style={{ backgroundColor: getColor(row[date]) }}
                >
                  {row[date].toFixed(2)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModuleG_Heatmap
