# Professional Scouting Report: Solar PV Yield Calculator

## 1. Executive Summary
The **Solar PV Yield Calculator** is a production-ready, full-stack Streamlit application designed for fast and rigorous solar photovoltaic energy yield estimation. By combining a highly intuitive bilingual interface (English/German) with the physics-based modeling capabilities of `pvlib`, the tool bridges the gap between simplistic web calculators and heavy, expensive engineering software (like PVsyst). It provides renewable energy professionals with instant KPI dashboards, interactive visualizations, and automated, professional-grade PDF reporting for feasibility studies.

## 2. Project Deep Dive

- **Project Domain:** Renewable Energy, Power Systems, Solar PV Analytics
- **Target Users:** Solar project developers, sales engineers, energy consultants, and researchers.
- **Problem Statement:** Conducting initial feasibility studies for solar projects typically requires either overly simplistic tools that lack engineering rigor or expensive, complex software that is slow to configure. There is a need for a rapid, accurate, and professional-looking tool to evaluate site potential and generate client-ready reports.
- **Business Value:** Accelerates the pre-sales and initial scoping phase of commercial and residential solar projects. Standardizes client communication through automated PDF reports and reduces reliance on costly proprietary software licenses for early-stage evaluation.

### Major Features
- **PVGIS TMY Data Integration:** Automated retrieval of 8,760 hourly data points (Typical Meteorological Year) via the official PVGIS 5.3 API.
- **Physics-Based Simulation Engine:** Leverages `pvlib` for precise modeling, including solar position (NREL SPA), irradiance transposition (Perez), cell temperature (SAPM), and DC/AC power output (PVWatts).
- **Dual User Modes:** "Quick Mode" for rapid estimates and "Pro Mode" for detailed engineering parameters (albedo, transposition models, module types, DC/AC ratios).
- **Automated Reporting:** Generates professional, multi-page PDF reports (via ReportLab) containing dynamic KPIs, methodology, and embedded Plotly charts.
- **Internationalization:** Full bilingual support (English and German) across the UI and generated reports.

### Architecture & Data Flow
`User Input (Geopy/Streamlit)` -> `Weather Data API (PVGIS / Requests)` -> `Data Cleaning (Pandas / Numpy)` -> `Physics Simulation (pvlib)` -> `Visualization (Plotly) & Reporting (ReportLab)` -> `Output (Interactive UI / PDF / CSV)`

## 3. Skills Extracted

### Technical Skills
- **Energy Systems Engineering:** Deep understanding of solar PV modeling, including irradiance transposition, air mass calculation, thermal behavior, and system losses.
- **Python Development:** Structuring modular, maintainable, object-oriented code (`models/`, `services/`, `views/`).
- **Data Engineering & Analysis:** Using `pandas` and `numpy` to parse CSV responses, handle timezone localization (UTC), validate datasets (ensuring 8,760 rows), and interpolate missing weather data.
- **Data Visualization & UI:** Building reactive frontend dashboards with Streamlit and Plotly.
- **Automated Document Generation:** Programmatically rendering PDFs with custom typography, tables, and dynamically generated PNG charts using `reportlab` and `tempfile`.

### Non-Technical Skills
- **Product Ownership:** Designing distinct "Quick" and "Pro" modes to serve both non-technical sales staff and technical engineers.
- **Internationalization:** Implementing a custom localization dictionary system to cater to the DACH (Germany, Austria, Switzerland) renewable energy market.

## 4. Resume Material

- **Software Engineering / Data**
  - Developed a production-ready Solar PV Yield Calculator in Python utilizing `pvlib`, simulating 8,760 hours of annual energy yield using physics-based modeling (NREL SPA, Perez, SAPM).
  - Integrated the PVGIS 5.3 API to fetch Typical Meteorological Year (TMY) weather data, implementing robust data cleaning and interpolation pipelines with Pandas to resolve missing data points.
  - Engineered an automated reporting module using ReportLab to instantly generate bilingual (EN/DE) PDF feasibility studies with dynamic KPI tables and embedded Plotly data visualizations.
  
- **Energy Systems / Grid Digitalization**
  - Built a comprehensive PV performance dashboard with Streamlit, evaluating capacity factors, specific yields, and performance ratios for initial site feasibility.
  - Designed flexible system configurations allowing users to transition between rapid estimates and detailed engineering setups, modifying parameters like albedo, DC/AC ratios, and transposition models.

## 5. Portfolio Writeup

**Project:** Solar PV Yield Calculator & Automated Reporting Engine
**Tech Stack:** Python, Streamlit, pvlib, Plotly, ReportLab, Pandas, REST APIs

I developed a modular web application designed to accelerate the feasibility assessment phase for solar photovoltaic projects. By integrating the industry-standard `pvlib` library, the application performs rigorous physics-based simulations, including solar positioning, Perez irradiance transposition, and SAPM cell temperature modeling. 

The tool automatically fetches Typical Meteorological Year (TMY) weather data via the PVGIS 5.3 API, cleans and interpolates the time-series data using Pandas, and computes critical system KPIs such as specific yield and performance ratio. To streamline client communication, I engineered a PDF generation pipeline using ReportLab that programmatically builds bilingual (English/German) professional reports complete with embedded Plotly charts and methodology summaries. This project demonstrates my ability to blend domain expertise in power systems with modern full-stack Python development.

## 6. LinkedIn Version

☀️ Excited to share my latest project: A production-ready **Solar PV Yield Calculator** built with Python and Streamlit! 

Conducting initial feasibility studies for solar projects often means choosing between simplistic online calculators and slow, expensive engineering software. I wanted to build something fast, rigorous, and ready for clients.

**Key Features:**
🔹 **Physics-Based Modeling:** Uses `pvlib` for accurate irradiance, thermal, and power output simulation.
🔹 **Live Weather Data:** Integrates the PVGIS API for 8,760-hour TMY weather data.
🔹 **Automated PDF Reports:** Generates professional, bilingual (EN/DE) reports instantly using ReportLab.
🔹 **Dual Modes:** Quick estimates for sales teams, or Pro mode for engineers tweaking albedo and DC/AC ratios.

This project was a fantastic way to combine power system engineering with full-stack Python development, data cleaning (Pandas), and data visualization (Plotly). 

#RenewableEnergy #SolarPV #Python #Streamlit #DataEngineering #EnergyTransition #PowerSystems

## 7. Interview Talking Points (STAR Format)

**Handling Messy External Data (PVGIS Integration)**
- *Situation:* The official PVGIS API occasionally returns data with missing hours or NaN values, which breaks continuous physical simulations in `pvlib`.
- *Task:* Ensure the simulation engine always receives a perfect 8,760-hour typical meteorological year dataset.
- *Action:* I built a robust parsing service using `pandas` that validates the row count. If rows are missing, it resamples the DataFrame to an hourly frequency and applies linear interpolation. For any remaining NaNs, it performs forward and backward filling.
- *Result:* The application maintains 100% uptime and avoids simulation crashes, gracefully handling unreliable upstream data.

**Translating Technical Data into Business Value**
- *Situation:* Stakeholders need physical simulation results translated into a format they can hand directly to clients or investors.
- *Task:* Create a standardized, professional export of the simulation results.
- *Action:* I designed a `ReportLab` pipeline that takes the `SimulationResult` dataclass and dynamically builds a multi-page PDF. I utilized `tempfile` to save interactive Plotly charts as PNGs, embedding them directly into the PDF layout.
- *Result:* Users can generate a clean, bilingual feasibility report in seconds, significantly accelerating the sales and scoping pipeline.

## 8. Hidden Value Report

- **Enterprise Readiness:** The codebase is remarkably clean and modular. Separating concerns into `models/`, `services/`, `views/`, and `report/` mimics enterprise software architecture, making the application highly maintainable and ready for scaling or cloud deployment.
- **UX & Empathy for the User:** Providing a "Quick Mode" alongside a "Pro Mode" shows excellent product sense. It acknowledges that not every user knows their exact "transposition model" or "albedo," making the tool accessible while retaining deep technical utility.
- **Robustness:** The application explicitly anticipates and handles edge cases, such as nighttime hours where solar zenith > 90° and API timeouts, reflecting the mindset of a senior developer.
