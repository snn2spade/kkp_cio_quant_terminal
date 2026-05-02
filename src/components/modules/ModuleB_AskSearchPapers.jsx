import { useState } from 'react'
import { papers, analysts, houses } from '../../data/mockData'

function ModuleB_AskSearchPapers() {
  const [question, setQuestion] = useState('')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [selectedHouses, setSelectedHouses] = useState([])
  const [selectedAnalysts, setSelectedAnalysts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [answer, setAnswer] = useState('')

  const handleSearch = () => {
    let results = [...papers]
    
    if (dateRange.start) {
      results = results.filter(p => p.date >= dateRange.start)
    }
    if (dateRange.end) {
      results = results.filter(p => p.date <= dateRange.end)
    }
    if (selectedHouses.length > 0) {
      results = results.filter(p => selectedHouses.includes(p.house))
    }
    if (selectedAnalysts.length > 0) {
      results = results.filter(p => selectedAnalysts.some(a => p.authors.includes(a)))
    }
    
    setSearchResults(results)
    if (question && results.length > 0) {
      setAnswer(`Based on ${results.length} documents found, the analysis suggests continued market optimism with strong tech sector performance. Key insights from ${results[0].house} indicate... [Reference: ${results[0].title}, Page 12]`)
    }
  }

  const toggleSelection = (item, selected, setSelected) => {
    if (selected.includes(item)) {
      setSelected(selected.filter(i => i !== item))
    } else {
      setSelected([...selected, item])
    }
  }

  return (
    <div className="module-card-blue">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cqt-blue">Ask & Search Papers</h3>
        <span className="text-[10px] text-cqt-text-muted font-mono">AI-Powered</span>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-3">
        {/* Question Input */}
        <div className="col-span-3">
          <label className="block text-[10px] text-cqt-text-muted mb-1.5 font-medium uppercase tracking-wider">Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about market trends..."
            className="input-dark w-full text-xs"
          />
        </div>
        
        {/* Date Range */}
        <div>
          <label className="block text-[10px] text-cqt-text-muted mb-1.5 font-medium uppercase tracking-wider">From</label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="input-dark w-full text-xs"
          />
        </div>
        <div>
          <label className="block text-[10px] text-cqt-text-muted mb-1.5 font-medium uppercase tracking-wider">To</label>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="input-dark w-full text-xs"
          />
        </div>
        
        {/* Search Button */}
        <div className="flex items-end">
          <button onClick={handleSearch} className="btn-primary w-full text-[10px] py-1.5">
            Search
          </button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[10px] text-cqt-text-muted mb-1.5 font-medium uppercase tracking-wider">Filter by House</label>
          <div className="flex flex-wrap gap-1">
            {houses.map(house => (
              <button
                key={house}
                onClick={() => toggleSelection(house, selectedHouses, setSelectedHouses)}
                className={`tag-pill text-[10px] py-0.5 ${
                  selectedHouses.includes(house)
                    ? 'bg-cqt-blue/20 text-cqt-blue border border-cqt-blue/40'
                    : 'bg-cqt-elevated/50 text-cqt-text-muted border border-cqt-border hover:border-cqt-border-light'
                }`}
              >
                {house}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-[10px] text-cqt-text-muted mb-1.5 font-medium uppercase tracking-wider">Filter by Analyst</label>
          <div className="flex flex-wrap gap-1">
            {analysts.map(analyst => (
              <button
                key={analyst}
                onClick={() => toggleSelection(analyst, selectedAnalysts, setSelectedAnalysts)}
                className={`tag-pill text-[10px] py-0.5 ${
                  selectedAnalysts.includes(analyst)
                    ? 'bg-cqt-blue/20 text-cqt-blue border border-cqt-blue/40'
                    : 'bg-cqt-elevated/50 text-cqt-text-muted border border-cqt-border hover:border-cqt-border-light'
                }`}
              >
                {analyst}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Answer Section */}
      {answer && (
        <div className="mb-3 p-3 bg-cqt-blue/5 border border-cqt-blue/20 rounded-md animate-fade-in">
          <div className="flex items-center space-x-1.5 mb-1.5">
            <svg className="w-3 h-3 text-cqt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="text-xs font-semibold text-cqt-blue">AI Answer</h4>
          </div>
          <p className="text-[11px] text-cqt-text-secondary leading-relaxed">{answer}</p>
        </div>
      )}
      
      {/* Results */}
      <div className="max-h-48 overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[10px] font-semibold text-cqt-text-muted uppercase tracking-wider">Documents</h4>
          <span className="text-[10px] text-cqt-text-muted font-mono">{searchResults.length} found</span>
        </div>
        {searchResults.map(paper => (
          <div key={paper.id} className="p-2.5 bg-cqt-elevated/50 rounded-md border border-cqt-border/50 mb-1.5 hover:border-cqt-blue/30 transition-all duration-200">
            <div className="flex justify-between items-start mb-1">
              <h5 className="text-xs font-medium text-cqt-text-primary flex-1">{paper.title}</h5>
              <span className="text-[10px] text-cqt-text-muted ml-2 font-mono whitespace-nowrap">{paper.pages}p</span>
            </div>
            <p className="text-[10px] text-cqt-text-muted">{paper.authors} | {paper.house} | {paper.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModuleB_AskSearchPapers
