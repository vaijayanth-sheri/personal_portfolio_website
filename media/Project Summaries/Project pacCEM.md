# Project Scouting Report: PacCEM (Pacific Capacity Expansion Model)

## 1. Executive Summary
PacCEM is a robust, Python-based full-stack application built for simulating and optimizing power systems, particularly tailored for small and island grids. Developed with a Streamlit frontend and a PyPSA backend, the application enables utility managers, researchers, and planners to explore various energy scenarios without deep programming expertise. It offers end-to-end data mapping, optimization using industry-standard solvers (HiGHS, Gurobi, CBC), and comprehensive interactive data visualization for system cost, LCOE, and capacity mix. This project highlights strong capabilities in energy system modeling, Python development, full-stack engineering, and product ownership within the renewable energy sector.

## 2. Project Deep Dive

- **Project Domain:** Energy Systems, Renewable Energy, Smart Grid, Grid Digitalization.
- **Target Users:** Utility managers, regulators, researchers, and students in the Pacific region and beyond.
- **Problem Statement:** Planning capacity expansion for power grids, especially isolated island grids, requires complex modeling tools that are often inaccessible to non-programmers. A user-friendly, localized tool is needed to democratize power system optimization.
- **Business Value:** Reduces the barrier to entry for complex power system planning. Facilitates data-driven decision-making for decarbonization, policy targets, and grid reliability.

**Features:**
- *Major Features:* Scenario configuration (CO2 caps, RE targets, reserve margin), Excel data mapping and ingestion, integration with PyPSA for capacity expansion optimization.
- *Minor Features:* Multi-scenario comparison tool, comprehensive ZIP export of results, and HTML-based interactive reports.
- *Unique Features:* Auto-matching of Excel columns to PyPSA components, interactive geographic mapping of grid assets via Streamlit-Folium, and custom constraints for minimum dispatchable generation.
- *Future/Hidden Features:* Capacity expansion for transmission lines, customizable technology cost multipliers.

**Architecture:**
- *Frontend:* Streamlit, Plotly (for interactive HTML plots), Folium (maps).
- *Backend:* PyPSA (Python for Power System Analysis), Linopy, Pyomo, Pandas.
- *Data Flow:* Excel Upload &rarr; Streamlit Session State &rarr; Data Mapping &rarr; PyPSA Network Creation &rarr; Solver Optimization &rarr; Results Extraction (KPIs, Plotly HTML, NetCDF) &rarr; UI Display/Download.

## 3. Skills Extracted

- **Energy Systems Modeling:** Used PyPSA to build a capacity expansion model handling multiple carriers (Solar, Wind, Hydro, Diesel, Gas, BESS). *Evidence: PyPSA network creation, constraint definitions for CO2 and RE share.*
- **Full Stack Development:** Built a responsive GUI using Streamlit with state management and dynamic data rendering. *Evidence: `app.py` session state management and multi-tab architecture.*
- **Data Engineering & Analytics:** Processed complex 8760-hour generation and load profiles using Pandas; automated column matching. *Evidence: `data_mapping_tab.py` and `model_runner.py` dataframe manipulations.*
- **Optimization:** Integrated linear programming solvers (HiGHS, Gurobi) to minimize LCOE and system costs while meeting reliability constraints. *Evidence: Solver configuration and objective function extractions.*
- **Data Visualization:** Created interactive, stackable bar charts, pie charts, and time-series plots representing LCOE, dispatch, and SOC. *Evidence: Plotly implementations in `model_runner.py`.*
- **Product Ownership:** Designed a multi-tab user journey prioritizing UX for non-technical stakeholders. *Evidence: Clear instructional text and guided workflow in `about_tab.py`.*

## 4. Resume Material

- **Energy Systems Software Engineer / Data Scientist**
- Designed and developed PacCEM, a full-stack Python application using PyPSA and Streamlit for capacity expansion modeling of island power grids.
- Built an automated data ingestion pipeline using Pandas to map user-uploaded Excel datasets (including 8760-hour load/generation profiles) directly into optimization constraints.
- Formulated linear programming optimization models using Linopy to minimize total system cost and calculate LCOE, supporting constraints like CO2 caps, RE targets, and minimum battery SOC.
- Developed an interactive analytics dashboard with Plotly and Folium, visualizing optimal capacity mix, hourly dispatch, battery state-of-charge, and spatial grid assets.
- Integrated multiple solvers (HiGHS, Gurobi) and enabled scenario comparison features, accelerating data-driven decision-making for utility planners.

## 5. Portfolio Writeup

**PacCEM (Pacific Capacity Expansion Model)**
PacCEM is a comprehensive, open-source power system modeling tool designed to democratize grid planning for small and island utilities. Recognizing that traditional capacity expansion software is often steep in its learning curve, I developed a Streamlit-based graphical user interface on top of the powerful PyPSA framework. The tool allows users to upload raw grid data via Excel, configure scenarios with specific policy targets (like RE shares and CO2 caps), and run optimizations using solvers like HiGHS. 

The application architecture cleanly separates the interactive frontend from the heavy computational backend. It features dynamic data mapping, ensuring user inputs correctly align with PyPSA network components. Post-simulation, PacCEM generates an interactive suite of Plotly visualizations—ranging from hourly generation dispatch and LCOE breakdowns to geographic network maps. This project showcases my ability to bridge complex mathematical optimization with intuitive product design, directly serving the needs of the renewable energy transition.

## 6. LinkedIn Version

Excited to share my recent project: **PacCEM (Pacific Capacity Expansion Model)**! 🌍⚡

Planning the grid of the future shouldn't require a PhD in programming. I built PacCEM to make power system optimization accessible to utility planners, regulators, and researchers.

Using #Python, #Streamlit, and #PyPSA, PacCEM allows users to:
📊 Upload grid data via Excel without writing a single line of code.
🎯 Configure complex scenarios (CO2 caps, Renewable targets, Reserve margins).
⚙️ Run cost-optimization using industry-standard solvers like HiGHS.
📈 Visualize results instantly with interactive Plotly charts and Folium maps, tracking LCOE, hourly dispatch, and battery state-of-charge.

This project sits perfectly at the intersection of #EnergySystems, #DataAnalytics, and #SoftwareEngineering. I’m proud to contribute to tools that accelerate the transition to sustainable energy!

## 7. Interview Talking Points

- **Situation:** Island utilities and researchers needed a way to plan capacity expansion (solar, wind, batteries) without needing to code complex linear programming models from scratch.
- **Task:** Build a user-friendly, full-stack web application that wraps a powerful energy optimization framework (PyPSA).
- **Action:** I developed a Streamlit application with a complete UI flow. I built automated Excel data mapping to ingest 8760-hour load and generation profiles using Pandas. I configured the PyPSA backend to handle custom constraints like reserve margins, CO2 limits, and battery SOC. Finally, I built a reporting module using Plotly to generate interactive HTML visualizations for LCOE, system costs, and dispatch.
- **Result:** Created an end-to-end tool that non-technical users can use to run sophisticated power system simulations. The tool outputs a comprehensive zip file of data, interactive charts, and reports, significantly reducing the time required to analyze decarbonization scenarios.

## 8. Hidden Value Report

- **UX for Complex Workflows:** You took an inherently complex task (mathematical optimization of power grids) and broke it down into an intuitive 5-tab process (Setup &rarr; Data Mapping &rarr; Simulation &rarr; Compare). This shows strong **Product Ownership**.
- **Robust State Management:** Managing data frames, uploaded files, and simulation states across multiple tabs in Streamlit requires careful session state management, demonstrating mature software engineering practices.
- **Scientific Communication:** The clear presentation of advanced metrics like LCOE, Annuitized CAPEX vs. OPEX, and marginal costs shows you understand how to translate raw simulation data into actionable business intelligence for decision-makers.

## 9. Career Alignment Analysis
- **Best Matching Roles:** Energy Data Scientist, Power Systems Engineer, Renewable Energy Software Engineer, Product Manager (Energy Tech).
- **Relevance Score:** 10/10
- **Why:** The project hits every major keyword for modern grid analytics: PyPSA, optimization, Python, Streamlit, full-stack, BESS, renewable integration, LCOE, and data engineering. It is an ideal showcase of end-to-end capabilities in the energy domain.
