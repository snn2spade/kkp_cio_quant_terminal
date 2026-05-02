import ModuleG_Heatmap from '../components/modules/ModuleG_Heatmap'
import ModuleF_TimeSeries2Axis from '../components/modules/ModuleF_TimeSeries2Axis'

function DataPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-cqt-text-primary">
            <span className="text-cqt-amber">Data</span> & Analytics
          </h2>
          <p className="text-[11px] text-cqt-text-muted mt-0.5">Aggregated data series, heatmaps, and analytical visualizations</p>
        </div>
        <div className="text-[10px] text-cqt-text-muted font-mono">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <ModuleG_Heatmap title="Earning Revision Ratio Heatmap" />
        <ModuleF_TimeSeries2Axis title="Bloomberg Estimate EPS vs Actual" />
      </div>
      
      {/* Data Summary - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: 'Sources', value: '12', sub: 'Feeds', color: 'text-cqt-amber', border: 'border-cqt-amber/30' },
          { label: 'Points', value: '1.2M', sub: 'Daily', color: 'text-cqt-amber', border: 'border-cqt-amber/30' },
          { label: 'Update', value: 'Real-time', sub: 'Market hrs', color: 'text-cqt-amber', border: 'border-cqt-amber/30' },
        ].map((stat, idx) => (
          <div key={idx} className={`rounded-md p-3 border ${stat.border} bg-cqt-panel/60 backdrop-blur-sm`}>
            <p className="text-[10px] text-cqt-text-muted uppercase tracking-wide">{stat.label}</p>
            <p className={`text-xl font-bold font-mono ${stat.color} mt-1`}>{stat.value}</p>
            <p className="text-[10px] text-cqt-text-muted mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataPage
