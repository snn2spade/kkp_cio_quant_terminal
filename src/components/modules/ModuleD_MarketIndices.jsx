import { marketIndices } from '../../data/mockData'

function ModuleD_MarketIndices() {
  const getChangeColor = (change) => {
    if (change > 0) return 'text-cqt-green'
    if (change < 0) return 'text-cqt-red'
    return 'text-cqt-text-muted'
  }

  const formatChange = (change) => {
    const sign = change > 0 ? '+' : ''
    return `${sign}${change.toFixed(2)}%`
  }

  return (
    <div className="module-card-green">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cqt-green">Market Indices</h3>
        <span className="text-[10px] text-cqt-text-muted font-mono">Real-time</span>
      </div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th className="text-right">Last</th>
              <th className="text-right">1D</th>
              <th className="text-right">1M</th>
              <th className="text-right">1Y</th>
            </tr>
          </thead>
          <tbody>
            {marketIndices.map((index) => (
              <tr key={index.symbol} className="group">
                <td className="font-mono text-xs font-medium text-cqt-green group-hover:text-white transition-colors">{index.symbol}</td>
                <td className="text-xs text-cqt-text-primary">{index.name}</td>
                <td className="text-right font-mono text-xs text-cqt-text-primary">{index.last.toLocaleString()}</td>
                <td className={`text-right font-mono text-xs ${getChangeColor(index.change1D)}`}>
                  {formatChange(index.change1D)}
                </td>
                <td className={`text-right font-mono text-xs ${getChangeColor(index.change1M)}`}>
                  {formatChange(index.change1M)}
                </td>
                <td className={`text-right font-mono text-xs ${getChangeColor(index.change1Y)}`}>
                  {formatChange(index.change1Y)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ModuleD_MarketIndices
