# Project Scouting Report: EV Charging + Solar Feasibility Dashboard

## 1. Executive Summary
- **Project Domain**: Energy Systems, E-Mobility, Renewable Energy, Project Finance.
- **Target Users**: Energy consultants, project developers, facility managers, sustainability officers, and infrastructure investors.
- **Problem Statement**: Evaluating the financial viability and environmental impact of combining EV charging infrastructure with onsite solar PV and battery storage is complex, requiring integration of physical energy modeling with long-term corporate finance calculations.
- **Business Value**: Enables rapid prototyping and scenario testing of energy projects. It provides investor-ready financial metrics (NPV, IRR, Payback) and quantifies CO2 savings, accelerating decision-making for sustainable infrastructure investments.

## 2. Project Deep Dive
- **Major Features**:
  - **Interactive Parameterization**: Users can adjust energy system sizing (PV, Battery, EV Demand), CAPEX/OPEX, tariffs, inflation, and tax/loan parameters.
  - **Real-time Financial Modeling**: Calculates 20+ year cash flows, Net Present Value (NPV), Internal Rate of Return (IRR), and Payback Period using `numpy-financial`.
  - **Energy System Simulation**: Models PV generation over time (including degradation), self-consumption, grid import, and grid export.
  - **Environmental Impact Tracking**: Quantifies baseline vs. project CO2 emissions and monetizes carbon savings via configurable CO2 pricing.
  - **Automated PDF Reporting**: Generates a professional, static PDF report containing financial tables and chart snapshots via WeasyPrint.
- **Minor / Hidden Features**:
  - Client-side state management (`dcc.Store`) to separate heavy calculations from UI rendering.
  - Base64 encoding of interactive Plotly charts to seamlessly embed them into static PDF documents.
- **Architecture**: `Inputs (Dash UI) -> State Store -> Calculation Engine (Pandas/NumPy) -> Dashboard Output (Plotly) -> Report Generator (WeasyPrint HTML-to-PDF)`.

## 3. Skills Extracted
- **Technical Skills**:
  - **Python Full Stack Web Development**: Built a reactive dashboard architecture using Dash and Bootstrap (`dash-bootstrap-components`).
  - **Financial Engineering**: Implemented complex cash flow analyses factoring in inflation, depreciation, corporate tax, loan interest, NPV, and IRR.
  - **Energy Data Modeling**: Simulated PV generation profiles, battery interaction, and grid reliance.
  - **Data Visualization**: Created interactive multi-trace cash flow and emissions charts using Plotly Graph Objects and Express.
  - **Automated Document Generation**: Engineered a pipeline to convert dynamic web views into static, styled PDF reports using WeasyPrint and base64 image encoding.
- **Non-Technical / Hidden Skills**:
  - **Domain Expertise**: Successfully bridged the gap between physical energy units (kWp, kWh, kg CO2) and project finance metrics (€, EBITDA, Free Cash Flow).
  - **Product Ownership**: Defined a clear end-to-end user journey—from input parameterization to a tangible, investor-ready PDF export.

## 4. Resume Material
- Developed an interactive EV charging and solar PV feasibility dashboard using Python, Dash, and Plotly, enabling investors to simulate 25-year financial performance (NPV, IRR) and CO2 impact.
- Implemented robust financial and energy models utilizing Pandas and NumPy, accounting for PV degradation, self-consumption ratios, loan structures, corporate taxes, and CO2 pricing.
- Automated the generation of professional, investor-ready PDF reports using WeasyPrint, dynamically injecting base64-encoded Plotly charts and financial data tables.
- Optimized web application performance by implementing client-side state management (`dcc.Store`) to decouple heavy cash flow calculations from UI rendering.

## 5. Portfolio Writeup
**EV Charging & Solar Feasibility Calculator**
An interactive web application designed to evaluate the financial and environmental viability of commercial EV charging hubs powered by onsite solar and battery storage. Built with Python, Dash, and Plotly, this tool bridges the gap between energy engineering and project finance. Users can define physical system constraints (PV size, EV demand) alongside financial parameters (CAPEX, OPEX, interest rates, tax rates, CO2 pricing) to instantly visualize long-term cash flows, NPV, and IRR. The application features a custom reporting engine using WeasyPrint, allowing users to download comprehensive, investor-ready PDF reports containing interactive chart snapshots and financial tables. 

## 6. LinkedIn Version
Just finished building an EV Charging & Solar Feasibility Calculator! ⚡🔋

Evaluating the business case for sustainable infrastructure can be incredibly complex. I built a Python-based dashboard using Dash and Plotly that models both the energy physics (PV degradation, battery sizing, grid import/export) and the corporate finance (NPV, IRR, taxes, depreciation) of building a commercial EV charging hub. 

The best part? With one click, it generates a beautiful, investor-ready PDF report summarizing the project's financial and environmental viability. 

A great project for bridging the gap between the energy transition and project finance. Let me know what you think! 🌍📉

## 7. Interview Talking Points (STAR Format)
- **Situation**: Assessing the business case for EV charging infrastructure requires combining complex energy models (solar generation, degradation, battery storage) with rigorous, long-term financial calculations (NPV, IRR, taxes, CO2 pricing).
- **Task**: Build an interactive tool that allows stakeholders and investors to easily simulate 20+ year project lifespans, adjust assumptions on the fly, and generate professional reports.
- **Action**: I developed a Python web application using Dash and Plotly. I utilized Pandas and NumPy for the core calculation engine, ensuring variables like PV degradation and inflation were handled accurately over the simulation timeline. To meet the reporting requirement, I integrated WeasyPrint, writing a custom function to encode Plotly charts into base64 images and embed them into a dynamically generated HTML-to-PDF template. I also used `dcc.Store` for state management to optimize app performance.
- **Result**: The result is a robust, user-friendly tool that instantly calculates key metrics like NPV and Payback Period, visualizes free cash flows, and exports investor-ready PDF reports, significantly reducing the time required to evaluate green infrastructure investments.

## 8. Hidden Value Report & Career Alignment
- **Strengths**: The user demonstrates strong cross-disciplinary knowledge, successfully merging energy systems engineering with corporate finance. The inclusion of CO2 pricing, loan coverage, and depreciation shows a deep understanding of real-world project development and business operations, extending far beyond typical coding exercises. The automated PDF export feature highlights strong product thinking—delivering a final, tangible artifact for end-users (investors/clients), not just a web UI.
- **Best Matching Roles**: Energy Data Analyst, Product Manager (Energy Tech), Digitalization Engineer, or Financial Modeler for Renewable Energy.
- **Relevance Score**: 10/10 for the Energy/Smart Grid sector.
- **Why**: The project perfectly aligns with key energy domain trends: E-mobility, distributed energy resources (DERs), decarbonization, and digitalization. It proves the ability to build data-driven tools that solve real business problems in the energy transition space.
