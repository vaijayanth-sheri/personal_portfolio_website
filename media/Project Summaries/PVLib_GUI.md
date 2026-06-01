# Project Scouting Report: Anywhere PV Data Generator (APDG)

## 1. Executive Summary
The **Anywhere PV Data Generator (APDG)** is an open-source, full-stack Python dashboard designed for renewable energy professionals to simulate and generate bankable PV hourly generation data globally. Built with Streamlit and `pvlib`, the tool solves the problem of opaque, fragmented PV modeling workflows by providing a unified interface that pulls from multiple global weather APIs (PVGIS, NASA POWER) and user-uploaded data. Its core differentiator is its focus on transparent provenance, reproducibility, and end-to-end data harmonization, making it a highly professional tool for solar engineers, researchers, and project developers.

## 2. Project Deep Dive
- **Domain:** Renewable Energy, Solar PV Modeling, Energy Data Analytics
- **Target Users:** Solar engineers, project developers, energy consultants, and researchers.
- **Problem Statement:** PV modeling often relies on proprietary software with hidden assumptions or fragmented data sources. Engineers need a fast, transparent way to generate PV yield estimates globally while explicitly knowing the source of their weather data, the models used, and the assumptions made.
- **Business Value:** Reduces the time required to generate bankable PV reports to minutes. It democratizes access to robust PV modeling globally (by falling back to NASA POWER when European PVGIS data is unavailable) and provides high-quality PDF reports, hourly CSVs, and explicit provenance logs that can be used directly in project financing or feasibility studies.
- **Architecture & Data Flow:** 
  - **Inputs:** Geolocation (address or lat/lon via Nominatim), user-defined system configurations (tilt, azimuth, DC size, AC/DC ratio, losses), and selected data source (PVGIS, NASA POWER, custom CSV/EPW).
  - **Processing:** `adapters.py` fetches raw data and harmonizes column names and units. `timeutils.py` uses geographic coordinates to resolve the local timezone and localize UTC data. `irradiance.py` dynamically derives missing Direct Normal Irradiance (DNI) and Diffuse Horizontal Irradiance (DHI) from Global Horizontal Irradiance (GHI) using DIRINT or Erbs models.
  - **Simulation:** `model.py` utilizes `pvlib`'s `ModelChain` with PVWatts DC/AC models, configurable transposition (Perez/Hay-Davies), and the Faiman temperature model.
  - **Output:** Streamlit UI visualizations (Matplotlib), local data caching, and programmatically generated PDF reports (`reportlab`) summarizing KPIs, system configurations, and data provenance.

## 3. Skills Extracted
- **Energy Systems & PV Modeling:** Deep understanding of solar physics, irradiance modeling (Perez, Hay-Davies, Erbs, DIRINT), temperature modeling (Faiman), and system losses modeling (PVWatts breakdown). *Evidence: Configuration constraints in Streamlit UI and specific model selections in `core/model.py`.*
- **Data Engineering & Harmonization:** Handling messy, real-world time-series data. Normalizing varying API schemas (PVGIS vs. NASA POWER) into a canonical format (`ghi`, `dni`, `dhi`, `temp_air`). *Evidence: `core/adapters.py` and `core/mapping.py` workflows.*
- **Full-Stack Python & Product Ownership:** Designing an intuitive, step-by-step wizard UI that guides a user from data fetching to simulation to reporting. *Evidence: `main.py` sidebar routing and session state management.*
- **Geospatial & Time-Series Complexity:** Resolving local timezones purely from latitude/longitude coordinates to correctly localize UTC data from global APIs. *Evidence: `timeutils.py` using `timezonefinder`.*

## 4. Resume Material
- **Renewable Energy Software Development:** Architected an open-source PV simulation dashboard using Python, Streamlit, and `pvlib`, enabling engineers to generate bankable solar production time-series globally.
- **Data Engineering & API Integration:** Built robust data pipelines integrating PVGIS and NASA POWER APIs, including automated data imputation to derive missing irradiance components (DNI/DHI) via physical models (DIRINT/Erbs).
- **Time-Series Analysis & Harmonization:** Developed a robust time-series processing engine using Pandas to harmonize disparate meteorological datasets, correct units, and precisely handle localized timezones across 8760-hour datasets.
- **Automated Reporting:** Engineered a programmatic PDF reporting module using `reportlab` to generate professional, reproducible simulation summaries detailing KPIs, energy charts, and 100% transparent data provenance.

## 5. Portfolio Writeup
**Anywhere PV Data Generator (APDG)**
*A transparent, full-stack PV modeling engine built with Streamlit and pvlib.*

In the renewable energy sector, feasibility studies often require rapid, accurate PV yield estimates, but commercial tools can be opaque, and data sources are highly fragmented. I built APDG to solve this problem. It is an open-source dashboard that ingests weather and irradiance data from PVGIS, NASA POWER, or user-uploaded EPW/CSVs, harmonizes the data into a canonical format, and runs a robust `pvlib` ModelChain simulation. 

The application stands out through its strict adherence to reproducibility and data provenance. Every simulation explicitly logs the origin of the meteorological data, any physical models used to impute missing variables (like deriving DNI from GHI), and the exact system parameters utilized. The final output provides users with an interactive UI, an hourly generation CSV, a fully packaged ZIP bundle, and a programmatically generated, bankable PDF report ready for stakeholders. 

## 6. LinkedIn Version
Excited to share a project I've been working on: the **Anywhere PV Data Generator (APDG)**! ☀️📊

As solar deployment scales globally, engineers need fast, transparent, and reproducible ways to model PV generation. I built APDG—an open-source dashboard powered by Python, Streamlit, and `pvlib`—to make bankable PV modeling accessible anywhere in the world. 

**Key features include:**
🌍 Global weather data integration via PVGIS and NASA POWER.
🔧 Automatic data harmonization and imputation for missing irradiance data (DNI/DHI).
📈 Transparent data provenance—knowing exactly where your data comes from and how it was processed.
📄 Automated, professional PDF report generation summarizing KPIs and assumptions.

Check out the code to see how I handled complex time-series normalization, timezone resolution, and physical modeling!

## 7. Interview Talking Points
- **Situation:** Needed a way to rapidly prototype PV generation globally without relying on proprietary, opaque "black-box" software, while dealing with fragmented weather APIs.
- **Task:** Build a tool that could ingest data from multiple sources (PVGIS for Europe, NASA POWER globally), normalize it, and run standard PVWatts simulations while maintaining strict data provenance.
- **Action:** Developed a Streamlit dashboard with a modular backend. I implemented API adapters for PVGIS and NASA POWER, utilizing `timezonefinder` for accurate local-time resolution. When NASA POWER only provided GHI, I integrated DIRINT/Erbs models to derive the necessary DNI/DHI. I then tied this to a `pvlib` ModelChain and used `reportlab` to auto-generate PDF reports.
- **Result:** Created an extensible, end-to-end platform that reduces the time to generate transparent, bankable PV reports to minutes. It ensures 100% reproducibility by exporting the configuration, explicit data provenance, and results in a single bundle.

## 8. Hidden Value Report
- **UX/UI Empathy:** You successfully turned a complex, multi-step engineering workflow (Data -> System -> Model -> Export) into a clean, guided 5-step wizard. This demonstrates strong product thinking and an understanding of user cognitive load.
- **Reproducibility & Quality Assurance:** By explicitly pinning the `pvlib` dependency (`>=0.13,<0.14`) and exporting a `provenance.json` alongside results, you showed a senior-level commitment to scientific reproducibility.
- **Graceful Degradation:** Your handling of data sources—using PVGIS when available, falling back to NASA POWER, and applying physics-based imputation for missing DNI/DHI—demonstrates robust error handling and domain-specific problem-solving.
