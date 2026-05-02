// API service for CIO Quant Terminal
// All external API calls go through the FastAPI backend

const API_BASE_URL = 'http://localhost:8000/api'

class ApiService {
  async fetchData(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error)
      throw error
    }
  }

  // Market Indices
  async getMarketIndices() {
    return this.fetchData('market-indices')
  }

  // Market Headlines
  async getMarketHeadlines() {
    return this.fetchData('market-headlines')
  }

  // Insights
  async getInsights() {
    return this.fetchData('insights')
  }

  async getInsightsByHouse(house) {
    return this.fetchData(`insights/by-house/${encodeURIComponent(house)}`)
  }

  async getInsightsByAnalyst(analyst) {
    return this.fetchData(`insights/by-analyst/${encodeURIComponent(analyst)}`)
  }

  // Reference Data
  async getAnalysts() {
    return this.fetchData('analysts')
  }

  async getHouses() {
    return this.fetchData('houses')
  }

  // Time Series
  async getTimeSeries() {
    return this.fetchData('time-series')
  }

  // Heatmap
  async getHeatmap() {
    return this.fetchData('heatmap')
  }

  // Papers
  async getPapers() {
    return this.fetchData('papers')
  }

  async searchPapers({ house, analyst, start_date, end_date } = {}) {
    const params = new URLSearchParams()
    if (house) params.append('house', house)
    if (analyst) params.append('analyst', analyst)
    if (start_date) params.append('start_date', start_date)
    if (end_date) params.append('end_date', end_date)
    
    const queryString = params.toString()
    const endpoint = `papers/search${queryString ? '?' + queryString : ''}`
    return this.fetchData(endpoint)
  }
}

const apiService = new ApiService()
export default apiService
