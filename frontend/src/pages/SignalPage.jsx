import { Badge } from '@/components/ui/badge'
import { UnderConstruction } from '@/components/ui/under-construction'

function SignalPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-violet-500">Signal</span> & Ideas Generation
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Trading signals and technical indicators</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <UnderConstruction
        title="Signal"
        description="Public signals, Proprietary indicators, and signal alerts will be available here soon."
        color="violet"
        items={[
          { label: 'Public Signals', status: 'Planned', icon: '⚡' },
          { label: 'Proprietary Signals', status: 'Planned', icon: '⚡' },
          { label: 'Alert System', status: 'Planned', icon: '🔔' },
        ]}
      />
    </div>
  )
}

export default SignalPage
