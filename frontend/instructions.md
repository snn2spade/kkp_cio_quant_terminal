**Project name**: 

- CIO Quant Terminal (CQT)

**Project Description**: 

- A single-page web application designed as a modern terminal for quantitative analysts.

The system focuses on:

- interactive data exploration
- financial visualization (charts, heatmaps)
- decision-support workflows

The application should resemble a **Bloomberg-style but modern web terminal** with modular, reusable components.

**Tech Stack (Opinionated)**:

- Frontend: Vite + React + Tailwind.css + shadcn/ui
- Backend: FastAPI (API gateway + business logic)
- Database: Postgres
- Charts: ECharts + TradingView Lightweight Charts
- Tables: AG Grid

**UI Theme Style:**

- Dark theme (NOT pure black, use deep navy)
- Semi-transparent panels
- Subtle glow / neon accents (fintech style)
- Card-based modular layout
- High information density (compact spacing)
- Functional color segmentation


**Core System Requirements**

- Architecture Principles
    - Modular design (plug-and-play components)
    - Separate:
        - UI layer
        - data fetching layer
    - All external API calls must go through backend (proxy-safe)
- Data Handling
    - Assume data comes from external systems
    - Use mock data initially
    - Design for:
        - polling
        - async fetching

**Module Components:**

- Module A) Summarized insights
- Module B) Ask & Search papers
    - Flow left-to-right
    - Question to ask/search
    - Filter by published date (date range)
    - Filter by house (multi-selection)
    - Filter by analysts (multi-selection)
    - Response
        - Answer to question with reference doc, page no
        - List of related document
- Module C) Market Headlines
    - Flow top-to-bottom
    - List-based Feed UI
    - Topic Tag / Pill UI
    - Information-dense layout
- Module D) Market Indices
    - Display selected indices (last, 1D, 1M, 1Y)
    - Information-dense layout
- Module E) (1-axis) Time series
    - To display multiple time series (with 1-left axis)
- Module F) (2-axis) Time series
    - To display multiple time series (with left axis + right axis)
- Module G) Heatmap
    - To display heatmap with left axes for topics, bottom axes is date

**Page Structure:**

- **Homepage**
    - Description:
        - This page gonna be landing homepage that summarize insights from other pages
    - Component list:
        - Module A) Summarized insights [Summarized latest insights by house]
        - Module A) Summarized insights [Summarized latest insights by analyst]
        - Module A) Summarized insights [Summarized latest market headline]
- **Analysts**
    - Description:
        - This page gonna be portal to search and summarize research papers which already aggregate by other systems
    - Component list:
        - Module B)  Ask & Search papers
- **Market**
    - Description:
        - This page gonna be aggregration of headline news along with market indices (which crawling from other system)
    - Component list:
        - Module C) Market Headlines
        - Module D) Market Indices [SPX, Nasdaq, Dowjone, FTSE 100, Nikkei 225]
- **Data**
    - Description:
        - This page gonna be aggregration of data series, heatmap that I have crawling from other sites
    - Component list:
        - Module G) Heatmap [Earning Revision Ratio]
        - Module F) (2-axis) Time series  [Bloomberg Estimate EPS]
- **Signal**
    - Description:
        - This page going to visualize public signal and proprietary signals as table list
    - Component list:
        - xxx
- **Portfolio**
    - Description:
        - This page allow user for portfolio construction, backtesting, monitoring
    - Component list:
        - xxx
- **Workflow**
    - Description:
        - This page allow user for add workflow (pre-defined function but with customized input)
        - Example of workflow, allow user to schedule portfolio summarized daily as text to selected channel
    - Component list:
        - xxx