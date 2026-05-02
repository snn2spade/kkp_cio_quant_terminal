import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'
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
    <Card className="backdrop-blur-xl bg-card/50 border-blue-500/20 hover:border-blue-500/40 shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-500" />
            <CardTitle className="text-sm font-semibold text-blue-500">Ask & Search Papers</CardTitle>
          </div>
          <Badge variant="outline" className="text-[10px] font-mono border-blue-500/30 text-blue-500">
            AI-Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3 mb-3">
          {/* Question Input */}
          <div className="col-span-3">
            <label className="block text-[10px] text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">Question</label>
            <Input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about market trends..."
              className="text-xs"
            />
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-[10px] text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">From</label>
            <Input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="text-xs"
            />
          </div>
          <div>
            <label className="block text-[10px] text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">To</label>
            <Input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="text-xs"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button onClick={handleSearch} size="sm" className="w-full text-[10px]">
              Search
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-[10px] text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">Filter by House</label>
            <div className="flex flex-wrap gap-1">
              {houses.map(house => (
                <Badge
                  key={house}
                  variant={selectedHouses.includes(house) ? "default" : "outline"}
                  className={`text-[10px] py-0.5 cursor-pointer transition-all ${
                    selectedHouses.includes(house)
                      ? 'bg-blue-500/20 text-blue-500 border-blue-500/40'
                      : 'hover:border-blue-500/40'
                  }`}
                  onClick={() => toggleSelection(house, selectedHouses, setSelectedHouses)}
                >
                  {house}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">Filter by Analyst</label>
            <div className="flex flex-wrap gap-1">
              {analysts.map(analyst => (
                <Badge
                  key={analyst}
                  variant={selectedAnalysts.includes(analyst) ? "default" : "outline"}
                  className={`text-[10px] py-0.5 cursor-pointer transition-all ${
                    selectedAnalysts.includes(analyst)
                      ? 'bg-blue-500/20 text-blue-500 border-blue-500/40'
                      : 'hover:border-blue-500/40'
                  }`}
                  onClick={() => toggleSelection(analyst, selectedAnalysts, setSelectedAnalysts)}
                >
                  {analyst}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Answer Section */}
        {answer && (
          <div className="mb-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg animate-fade-in">
            <div className="flex items-center space-x-1.5 mb-1.5">
              <Zap className="w-3 h-3 text-blue-500" />
              <h4 className="text-xs font-semibold text-blue-500">AI Answer</h4>
            </div>
            <p className="text-[11px] text-foreground/80 leading-relaxed">{answer}</p>
          </div>
        )}

        {/* Results */}
        <div className="max-h-48 overflow-y-auto mt-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Documents</h4>
            <span className="text-[10px] text-muted-foreground font-mono">{searchResults.length} found</span>
          </div>
          {searchResults.map(paper => (
            <div key={paper.id} className="p-2.5 bg-muted/30 rounded-md border border-border/50 mb-1.5 hover:border-blue-500/30 transition-all duration-200">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-xs font-medium text-foreground flex-1">{paper.title}</h5>
                <span className="text-[10px] text-muted-foreground ml-2 font-mono whitespace-nowrap">{paper.pages}p</span>
              </div>
              <p className="text-[10px] text-muted-foreground">{paper.authors} | {paper.house} | {paper.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ModuleB_AskSearchPapers
