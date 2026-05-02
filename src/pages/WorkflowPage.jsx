import { Badge } from '@/components/ui/badge'
import { UnderConstruction } from '@/components/ui/under-construction'

function WorkflowPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto animate-fade-in">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            <span className="text-teal-500">Workflow</span> & AI Automation
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">Automated workflows and process management</p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono border-muted-foreground/30">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </Badge>
      </div>

      <UnderConstruction
        title="Workflow"
        description="Workflow automation, task scheduling, and process management will be available here soon."
        color="teal"
        items={[
          { label: 'Task Automation', status: 'Planned', icon: '⚙️' },
          { label: 'Scheduling', status: 'Planned', icon: '📅' },
          { label: 'Integrations', status: 'Planned', icon: '🔗' },
        ]}
      />
    </div>
  )
}

export default WorkflowPage
