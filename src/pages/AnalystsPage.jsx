import ModuleB_AskSearchPapers from '../components/modules/ModuleB_AskSearchPapers'

function AnalystsPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-cqt-text-primary">
            <span className="text-cqt-blue">Analyst</span> & Research
          </h2>
          <p className="text-[11px] text-cqt-text-muted mt-0.5">Search and analyze research papers from leading financial institutions</p>
        </div>
        <div className="text-[10px] text-cqt-text-muted font-mono">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <ModuleB_AskSearchPapers />
      </div>
      
      {/* Additional Info Cards - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: 'Research Coverage', value: '150+', sub: 'Papers', color: 'text-cqt-blue', border: 'border-cqt-blue/30' },
          { label: 'Top House', value: 'Goldman', sub: 'Most pubs', color: 'text-cqt-blue', border: 'border-cqt-blue/30' },
          { label: 'Avg. Pages', value: '24', sub: 'Per doc', color: 'text-cqt-blue', border: 'border-cqt-blue/30' },
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

export default AnalystsPage
