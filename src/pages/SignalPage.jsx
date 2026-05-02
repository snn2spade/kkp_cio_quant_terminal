function SignalPage() {
  return (
    <div className="p-4 max-w-[1800px] mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-cqt-text-primary">
            <span className="text-cqt-purple">Signal</span> Generation
          </h2>
          <p className="text-[11px] text-cqt-text-muted mt-0.5">Trading signals and technical indicators</p>
        </div>
        <div className="text-[10px] text-cqt-text-muted font-mono">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
      
      <div className="module-card-purple text-center py-16 animate-fade-in">
        <div className="text-4xl mb-4 opacity-50">◈</div>
        <h3 className="text-xl font-semibold text-cqt-text-primary mb-2">Coming Soon</h3>
        <p className="text-sm text-cqt-text-secondary max-w-md mx-auto leading-relaxed">
          Signal generation, technical indicators, and trading alerts will be available here soon.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[
            { label: 'Technical Signals', status: 'Planned', icon: '📊' },
            { label: 'Alert System', status: 'Planned', icon: '🔔' },
            { label: 'Backtesting', status: 'Planned', icon: '⚡' },
          ].map((item, idx) => (
            <div key={idx} className="bg-cqt-elevated/50 rounded-lg p-4 border border-cqt-purple/20 hover:border-cqt-purple/30 transition-all">
              <div className="text-xl mb-2">{item.icon}</div>
              <p className="text-xs font-medium text-cqt-text-primary">{item.label}</p>
              <p className="text-[10px] text-cqt-purple mt-1 font-mono">{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SignalPage
