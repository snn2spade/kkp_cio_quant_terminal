# Mock data for CIO Quant Terminal (moved from frontend)

market_indices = [
    {"symbol": "SPX", "name": "S&P 500", "last": 4521.23, "change1D": 1.2, "change1M": -2.3, "change1Y": 15.4},
    {"symbol": "NASDAQ", "name": "Nasdaq", "last": 14189.45, "change1D": 1.8, "change1M": -3.1, "change1Y": 22.7},
    {"symbol": "DJI", "name": "Dow Jones", "last": 35241.56, "change1D": 0.9, "change1M": -1.5, "change1Y": 12.3},
    {"symbol": "FTSE", "name": "FTSE 100", "last": 7423.89, "change1D": -0.5, "change1M": 1.2, "change1Y": 5.8},
    {"symbol": "N225", "name": "Nikkei 225", "last": 31245.67, "change1D": 2.1, "change1M": 4.5, "change1Y": 18.9},
]

market_headlines = [
    {"id": 1, "title": "Fed Signals Potential Rate Cut in Q3", "time": "2 hours ago", "topic": "Monetary Policy", "source": "Bloomberg"},
    {"id": 2, "title": "Tech Earnings Surge Beyond Expectations", "time": "3 hours ago", "topic": "Earnings", "source": "Reuters"},
    {"id": 3, "title": "Oil Prices Stabilize After OPEC+ Decision", "time": "5 hours ago", "topic": "Commodities", "source": "CNBC"},
    {"id": 4, "title": "European Markets Rally on Inflation Data", "time": "6 hours ago", "topic": "Markets", "source": "Financial Times"},
    {"id": 5, "title": "AI Stocks Lead Nasdaq to New Highs", "time": "8 hours ago", "topic": "Technology", "source": "Bloomberg"},
    {"id": 6, "title": "Housing Market Shows Signs of Cooling", "time": "10 hours ago", "topic": "Real Estate", "source": "Reuters"},
    {"id": 7, "title": "Crypto Markets Volatile Amid Regulation News", "time": "12 hours ago", "topic": "Cryptocurrency", "source": "CoinDesk"},
    {"id": 8, "title": "Bank Earnings Beat Estimates Across the Board", "time": "14 hours ago", "topic": "Financials", "source": "Bloomberg"},
]

insights = [
    {"id": 1, "house": "Goldman Sachs", "analyst": "John Smith", "text": "Market showing strong momentum in tech sector. Recommend overweight position in AI-related stocks.", "date": "2026-05-02"},
    {"id": 2, "house": "Morgan Stanley", "analyst": "Sarah Johnson", "text": "Inflation data suggests Fed may pivot sooner than expected. Defensive positioning recommended.", "date": "2026-05-01"},
    {"id": 3, "house": "JP Morgan", "analyst": "Michael Chen", "text": "Earnings season exceeding expectations. Upgrade tech sector to overweight.", "date": "2026-05-01"},
    {"id": 4, "house": "Goldman Sachs", "analyst": "Emily Davis", "text": "European markets undervalued relative to US. Consider increasing exposure to FTSE and DAX.", "date": "2026-04-30"},
    {"id": 5, "house": "Barclays", "analyst": "Robert Wilson", "text": "Commodities rally likely to continue. Energy sector showing strong technical breakout.", "date": "2026-04-30"},
]

analysts = [
    "John Smith", "Sarah Johnson", "Michael Chen", "Emily Davis", "Robert Wilson", "Lisa Anderson", "David Kim"
]

houses = [
    "Goldman Sachs", "Morgan Stanley", "JP Morgan", "Barclays", "Credit Suisse", "Deutsche Bank"
]

time_series_data = [
    {"date": "2026-01", "value1": 100, "value2": 80},
    {"date": "2026-02", "value1": 105, "value2": 85},
    {"date": "2026-03", "value1": 98, "value2": 90},
    {"date": "2026-04", "value1": 112, "value2": 88},
    {"date": "2026-05", "value1": 118, "value2": 92},
]

heatmap_data = [
    {"topic": "Tech", "2026-01": 0.8, "2026-02": 0.9, "2026-03": 0.7, "2026-04": 0.85, "2026-05": 0.95},
    {"topic": "Healthcare", "2026-01": 0.6, "2026-02": 0.65, "2026-03": 0.7, "2026-04": 0.68, "2026-05": 0.72},
    {"topic": "Finance", "2026-01": 0.5, "2026-02": 0.55, "2026-03": 0.6, "2026-04": 0.58, "2026-05": 0.62},
    {"topic": "Energy", "2026-01": 0.7, "2026-02": 0.65, "2026-03": 0.6, "2026-04": 0.75, "2026-05": 0.8},
    {"topic": "Consumer", "2026-01": 0.4, "2026-02": 0.45, "2026-03": 0.5, "2026-04": 0.48, "2026-05": 0.52},
]

papers = [
    {"id": 1, "title": "Market Efficiency in the Age of AI", "authors": "John Smith, Emily Davis", "house": "Goldman Sachs", "date": "2026-04-15", "pages": 24},
    {"id": 2, "title": "Quantitative Strategies for Volatile Markets", "authors": "Sarah Johnson", "house": "Morgan Stanley", "date": "2026-04-10", "pages": 18},
    {"id": 3, "title": "The Impact of Fed Policy on Tech Valuations", "authors": "Michael Chen", "house": "JP Morgan", "date": "2026-04-05", "pages": 32},
    {"id": 4, "title": "European Market Opportunities Post-Brexit", "authors": "Robert Wilson", "house": "Barclays", "date": "2026-03-28", "pages": 21},
]
