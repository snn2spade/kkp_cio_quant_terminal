import { Badge } from '@/components/ui/badge'
import { UnderConstruction } from '@/components/ui/under-construction'

function DataPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-amber-500">Data</span> & Analytics
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Aggregated data series, heatmaps, and analytical visualizations</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <UnderConstruction
        title="Data"
        description="Aggregated data series, heatmaps, analytical visualizations, and data analytics will be available here soon."
        color="amber"
        items={[
          { label: 'Earning Revision', status: 'Planned', icon: '🔥' },
          { label: 'Consensus Series', status: 'Planned', icon: '📊' },
          { label: 'Macroeconomic Data', status: 'Planned', icon: '🧮' },
        ]}
      />
    </div>
  )
}

export default DataPage
