# GridAware – Smart EV Charging Dashboard: Project Scouting Report

## 1. Executive Summary
GridAware is a modern, full-stack Python web dashboard designed to empower EV owners in Germany to make cost-optimal charging decisions. By integrating the Awattar market API for real-time electricity prices and implementing a rolling-sum optimization algorithm, the application calculates the most cost-effective charging windows based on user-defined EV specifications. The project demonstrates strong capabilities in full-stack Python development (Dash/Plotly), data analytics (Pandas), external API integration, and product ownership within the energy sector.

## 2. Project Deep Dive

**Project Domain**: Energy Systems / Smart Grid / EV Integration
**Target Users**: Private and fleet EV owners in Germany, energy consultants, smart-home enthusiasts.
**Problem Statement**: EV owners often charge their vehicles during peak price hours due to a lack of transparency in dynamic electricity market prices. This leads to higher costs and increased strain on the grid.
**Business Value**: Reduces charging costs for EV owners by maximizing the use of low-price periods. Aligns charging demand with periods of high renewable generation (often correlated with lower prices), supporting grid stability and energy transition goals.

**Major Features**:
- **Live Market Prices**: On-demand fetching and visualization of hourly electricity prices from the Awattar Germany API.
- **EV Charging Optimization**: Advanced configuration including battery capacity, current/target SoC, max charging power, and efficiency.
- **Smart Recommendation Engine**: Simulates charging costs to find the optimal charging start time based on a rolling-sum minimum cost algorithm.
- **Interactive Visualization**: Overlay of optimal charging windows on dynamic price charts using Plotly.
- **Session Persistence**: Dash `dcc.Store` implementation to persist user configuration and market data in the browser.

**Architecture Summary**:
`API (Awattar) -> Backend Processing (Requests, Pandas) -> State Management (Dash dcc.Store) -> UI/Visualization (Dash, Plotly) -> Output (Recommendations & Cost Savings)`
Data is processed using Pandas for time-series alignment and rolling window calculations, and state is preserved across callbacks without server-side caching.

## 3. Skills Extracted

**Technical Skills**:
- **Python Full-Stack Development**: Evidence: Dash framework setup (`app.py`), modular component design, and callback-driven interactivity (`callbacks/ev_callbacks.py`).
- **Data Analytics & Engineering**: Evidence: Pandas for time-series data manipulation, rolling window calculations for optimization (`ev_logic.py`).
- **API Integration**: Evidence: RESTful data retrieval with error handling and fallback JSON storage (`price_api.py`).
- **Data Visualization**: Evidence: Custom Plotly figures with dynamic overlays for optimal charging windows and cost breakdowns (`ev_callbacks.py`).
- **Optimization Algorithms**: Evidence: Implemented logic to find continuous optimal charging blocks based on variable electricity prices, charging power, and battery state.

**Non-Technical Skills**:
- **Product Ownership**: Evidence: Comprehensive PRD (`PRD_3.pdf`) detailing vision, target audience, UI/UX principles, and acceptance criteria.
- **UX/UI Design**: Evidence: Focus on "graceful failure," responsive layout, and action feedback (loading spinners, clear warnings).
- **Domain Expertise (Energy)**: Evidence: Deep understanding of EV charging math (kWh, efficiency, SoC), European power market structures (Awattar DE, €/kWh conversion).

## 4. Resume Material

- **Smart EV Charging Dashboard (Python, Dash, Pandas)**: Developed a full-stack optimization application that processes real-time German electricity market data (Awattar API) to recommend cost-optimal EV charging windows.
- **Time-Series Data Optimization**: Implemented a rolling-window algorithm using Pandas to simulate and minimize charging costs based on user-defined vehicle constraints (SoC, capacity, efficiency), achieving demonstrable user savings.
- **API Integration & State Management**: Architected a robust backend using `requests` with local JSON fallbacks for high availability, utilizing Dash `dcc.Store` for seamless browser-side session persistence.
- **Interactive Data Visualization**: Engineered dynamic, time-series charts using Plotly to visually communicate market price volatility and highlight actionable charging recommendations.
- **Product Development**: Led end-to-end product lifecycle from requirements gathering (PRD creation) to application deployment, demonstrating strong product ownership and UX-focused design.

## 5. Portfolio Writeup

### GridAware: Smart EV Charging Dashboard
**Overview**: GridAware is an intelligent web application designed to help EV owners in Germany capitalize on dynamic electricity pricing. By aligning EV charging with periods of low market prices, GridAware reduces costs and supports grid stability.

**Technical Implementation**: Built entirely in Python using the Dash framework, the application fetches real-time day-ahead market prices from the Awattar API. It leverages Pandas for heavy data processing, performing rolling-sum calculations to identify the absolute cheapest continuous block of time to charge a vehicle based on its specific battery capacity, current state of charge, and hardware limits.

**Impact**: The tool translates complex, real-time energy market data into a highly accessible, interactive dashboard (powered by Plotly), giving users immediate, actionable insights to minimize their energy bills. It showcases a strong synthesis of software engineering, data analytics, and energy domain expertise.

## 6. LinkedIn Version

⚡ **Just built GridAware – a Smart EV Charging Dashboard!** ⚡

As dynamic electricity tariffs become the norm, I wanted to create a tool that actually helps EV owners take advantage of price volatility. GridAware uses real-time day-ahead market data from the Awattar Germany API to find the absolute cheapest time to charge your car.

Built with Python, Dash, and Pandas, the app features:
📊 Live market price visualizations
🔋 Custom EV profiling (battery capacity, target SoC, charging power)
🧠 A smart recommendation engine that calculates the optimal charging window
💰 Direct cost savings breakdowns

This project was a great dive into time-series data optimization, full-stack Python development, and energy systems engineering. 

#EnergyTransition #EV #Python #DataAnalytics #SmartGrid #Dash #Plotly #EnergyMarkets

## 7. Interview Talking Points (STAR Method)

- **Situation**: EV owners on dynamic electricity tariffs need to know when to charge their cars to save money, but raw market data is hard to interpret and align with specific vehicle constraints.
- **Task**: Build an intuitive, data-driven application that automates the calculation of the cheapest EV charging window based on real-time German market prices.
- **Action**: I developed GridAware using Python, Dash, and Pandas. I integrated the Awattar API to fetch hourly prices and wrote an optimization algorithm using Pandas' rolling window functions to calculate the minimum cost period. I also implemented a clean UI with Plotly to visually highlight the recommended charging window.
- **Result**: The resulting dashboard successfully identifies the most cost-effective charging times, visually demonstrating cost savings compared to peak-hour charging, and provides a seamless, error-resilient user experience.

## 8. Hidden Value Report

- **Robust Error Handling & Resilience**: The code in `price_api.py` includes network error handling and a fallback to a local `last_prices.json` file. This demonstrates maturity in building production-ready apps that don't crash when external services fail.
- **Clean Code Architecture**: The separation of concerns is excellent. Callbacks are isolated (`ev_callbacks.py`, `market_callbacks.py`), business logic is abstracted (`ev_logic.py`), and UI components are modularized. This shows strong software engineering fundamentals beyond just scripting.
- **Product Documentation**: The existence of a formal PRD (`PRD_3.pdf`) is highly unusual and impressive for a personal project. It highlights strong Product Management skills, proving the ability to define user needs, acceptance criteria, and roadmap features before writing code.

**Career Alignment Score: High (95%)**
This project perfectly bridges the gap between Data Analytics/Engineering and Energy Systems. It proves domain knowledge in Smart Grids and DER (Distributed Energy Resources) integration while showcasing hard skills in Python and time-series data. It is highly relevant for roles like Data Engineer (Energy), Smart Grid Analyst, or Product Owner in Energy Tech.
