import { useState } from 'react'

const themeStyles = {
  'cqt-red': {
    title: 'text-cqt-red',
    badge: 'text-cqt-red bg-cqt-red/10 border-cqt-red/20',
    card: 'border-cqt-red/10 hover:border-cqt-red/30',
    pill: 'text-cqt-red bg-cqt-red/10',
    icon: 'text-cqt-red/50',
  },
  'cqt-blue': {
    title: 'text-cqt-blue',
    badge: 'text-cqt-blue bg-cqt-blue/10 border-cqt-blue/20',
    card: 'border-cqt-blue/10 hover:border-cqt-blue/30',
    pill: 'text-cqt-blue bg-cqt-blue/10',
    icon: 'text-cqt-blue/50',
  },
  'cqt-green': {
    title: 'text-cqt-green',
    badge: 'text-cqt-green bg-cqt-green/10 border-cqt-green/20',
    card: 'border-cqt-green/10 hover:border-cqt-green/30',
    pill: 'text-cqt-green bg-cqt-green/10',
    icon: 'text-cqt-green/50',
  },
  'cqt-amber': {
    title: 'text-cqt-amber',
    badge: 'text-cqt-amber bg-cqt-amber/10 border-cqt-amber/20',
    card: 'border-cqt-amber/10 hover:border-cqt-amber/30',
    pill: 'text-cqt-amber bg-cqt-amber/10',
    icon: 'text-cqt-amber/50',
  },
  'cqt-purple': {
    title: 'text-cqt-purple',
    badge: 'text-cqt-purple bg-cqt-purple/10 border-cqt-purple/20',
    card: 'border-cqt-purple/10 hover:border-cqt-purple/30',
    pill: 'text-cqt-purple bg-cqt-purple/10',
    icon: 'text-cqt-purple/50',
  },
  'cqt-orange': {
    title: 'text-cqt-orange',
    badge: 'text-cqt-orange bg-cqt-orange/10 border-cqt-orange/20',
    card: 'border-cqt-orange/10 hover:border-cqt-orange/30',
    pill: 'text-cqt-orange bg-cqt-orange/10',
    icon: 'text-cqt-orange/50',
  },
  'cqt-teal': {
    title: 'text-cqt-teal',
    badge: 'text-cqt-teal bg-cqt-teal/10 border-cqt-teal/20',
    card: 'border-cqt-teal/10 hover:border-cqt-teal/30',
    pill: 'text-cqt-teal bg-cqt-teal/10',
    icon: 'text-cqt-teal/50',
  },
}

function ModuleA_SummarizedInsights({ title, insights, themeColor = 'cqt-blue' }) {
  const [expandedId, setExpandedId] = useState(null)
  const styles = themeStyles[themeColor] || themeStyles['cqt-blue']

  return (
    <div className={`module-card-${themeColor}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-sm font-semibold ${styles.title}`}>{title}</h3>
        <span className={`text-[10px] font-mono ${styles.title}/70 px-2 py-0.5 rounded border ${styles.badge}`}>
          {insights.length}
        </span>
      </div>
      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`p-3 bg-cqt-elevated/50 rounded-md border ${styles.card} cursor-pointer transition-all duration-150`}
            onClick={() => setExpandedId(expandedId === insight.id ? null : insight.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[10px] font-medium ${styles.pill} px-2 py-0.5 rounded`}>
                {insight.house}
              </span>
              <span className="text-[10px] text-cqt-text-muted font-mono">{insight.date}</span>
            </div>
            <p className="text-xs text-cqt-text-primary leading-relaxed mb-1.5 line-clamp-2">{insight.text}</p>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-cqt-text-muted">Analyst: <span className="text-cqt-text-secondary">{insight.analyst}</span></p>
              <svg className={`w-3 h-3 ${styles.icon} transition-transform ${expandedId === insight.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {expandedId === insight.id && (
              <div className="mt-3 pt-3 border-t border-cqt-border/50 animate-fade-in">
                <p className="text-[10px] text-cqt-text-muted leading-relaxed">Full analysis would be displayed here with detailed charts and data visualizations.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModuleA_SummarizedInsights
