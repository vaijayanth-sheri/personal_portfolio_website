# Solar + EV Configurator: Project Scouting Report

## 1. Executive Summary
The **Solar + EV Configurator** is a comprehensive, full-stack spatial and financial modeling application designed to help homeowners and energy consultants dimension, analyze, and justify investments in Distributed Energy Resources (DERs). Built with Python and Streamlit, it integrates geospatial mapping, localized European Commission PVGIS solar irradiance data, EV load modeling, and financial payback calculations into a single seamless user experience. By automatically calculating optimal system sizing based on user-drawn rooftop polygons and dynamic energy profiles, the project serves as a high-value pre-sales or planning tool that accelerates the adoption of renewable energy technologies. 

## 2. Project Deep Dive
- **Domain:** Renewable Energy, E-Mobility, Smart Grids, Property Technology (PropTech)
- **Target Users:** Homeowners, Energy Consultants, Solar Installation Sales Teams
- **Problem Statement:** Dimensioning a solar PV system and calculating its ROI is highly variable and depends on exact geographic location, roof size, local energy prices, and evolving household loads like EV chargers and battery storage. Standard calculators often lack spatial context or deep financial configurability.
- **Business Value:** Provides an interactive, end-to-end dimensioning tool that reduces customer acquisition friction, offers immediate financial transparency, and produces professional, customized PDF reports for decision-making.
- **Core Features:**
  - **Location & Mapping:** Geocoding for address search and interactive rooftop drawing (via Folium and Shapely) to compute precise usable square meterage.
  - **Dynamic Solar Irradiance:** Direct API integration with the EU JRC's PVGIS database to fetch localized hourly/monthly solar yield data.
  - **EV & Battery Modeling:** Calculates additional kWp requirements based on EV count, daily mileage, and charger types, alongside battery sizing integration.
  - **Financial Engine:** Configurable modeling for self-consumption (annual kWh or percentage), grid export (feed-in tariffs), system costs, battery costs, and final payback periods.
  - **Multilingual Support:** Built-in i18n support (English, German).
  - **Automated Reporting:** Generates a downloadable, itemized PDF summary using ReportLab.
- **Architecture & Data Flow:** 
  `User Address -> Geocoding (Geopy) -> Interactive Map (Folium) -> Polygon Area Calc (Shapely) -> PVGIS API (Requests) -> Yield & Load Processing (Pandas) -> Financial Engine -> PDF Generation (ReportLab)`

## 3. Skills Extracted
- **Software Engineering & Architecture:** Designed a highly modular Python codebase (separating `sizing`, `finance`, `irradiance`, `map_draw`, `report`) rather than a monolithic script. Effectively managed complex application state using Streamlit's `session_state`.
- **Domain Expertise (Energy Systems):** Deep understanding of PV system mechanics—implemented configurable overrides for system tilt, azimuth (-180 to 180), system losses (14% default), module degradation rates, panel density (m²/kWp), and self-consumption models.
- **Geospatial Analysis (GIS):** Used Shapely and Folium to capture user-drawn polygons and accurately compute real-world surface areas for roof capacity estimation.
- **API Integration & Data Engineering:** Robust integration with external APIs (PVGIS) including automatic database switching (PVGIS-SARAH2 vs PVGIS-ERA5) based on bounding box coordinates.
- **Financial Modeling:** Built a deterministic financial model combining capex (panels + battery), opex (electricity savings), and revenue (feed-in tariffs) to output an actionable payback period.
- **Product Ownership:** Included internationalization (i18n), "expert settings" vs "simple flow" user experiences, and automated sustainability metrics (CO2 offset, tree equivalents) to drive user engagement.

## 4. Resume Material
* **Full-Stack / Python Developer:**
  - Architected a Solar and EV dimensioning application using Python and Streamlit, integrating spatial mapping and external APIs to provide real-time system sizing and ROI calculations.
  - Engineered a geospatial pipeline using Geopy, Folium, and Shapely to translate user-drawn interactive map polygons into usable roof area and maximum kWp capacity.
  - Integrated the European Commission’s PVGIS API to fetch localized solar irradiance data, implementing geographic bounding-box logic for dynamic database selection.
  - Developed a financial modeling engine estimating system payback periods by cross-referencing solar yield, dynamic EV charging loads, battery capacities, and localized feed-in tariffs.
  - Automated the generation of custom, multi-page PDF reports using ReportLab, dynamically formatting financial savings, system specs, and sustainability metrics.

* **Energy Data Analyst / Product Owner:**
  - Designed an end-to-end Solar + EV Configurator tool to streamline DER (Distributed Energy Resource) feasibility studies, reducing spatial analysis and financial modeling time to seconds.
  - Implemented advanced PV modeling parameters, allowing users to override default system losses, tilt, azimuth, degradation rates, and panel density for expert-level forecasting.
  - Built a self-consumption logic engine that evaluates annual household consumption against solar production and calculates localized grid export revenues.

## 5. Portfolio Writeup
**Solar + EV Configurator: Interactive Dimensioning & Financial Modeling Tool**
The Solar + EV Configurator is an interactive web application built to bridge the gap between complex energy modeling and consumer-friendly design. Developed in Python using Streamlit, this tool allows users to search for their property, visually trace their rooftop on an interactive map, and instantly receive a localized solar yield forecast powered by the European Commission’s PVGIS API. 

Beyond basic solar estimates, the application serves as a comprehensive DER (Distributed Energy Resources) planning platform. It dynamically calculates additional capacity requirements for Electric Vehicles (factoring in daily mileage and charger efficiency) and allows for battery storage inclusion. A built-in financial engine evaluates system costs, electricity savings, and feed-in tariffs to generate a localized payback period. To finalize the experience, the application programmatically generates a professional, downloadable PDF report (via ReportLab) detailing system specifications, financial models, and CO2 offset metrics. The project showcases a strong blend of geospatial data processing, API integration, energy system modeling, and full-stack software architecture.

## 6. LinkedIn Version
Just wrapped up a new project: a full-stack **Solar + EV Configurator** built entirely in Python! ☀️🔋 

Sizing a home solar system and calculating the ROI is notoriously tricky, especially when you factor in EV charging and battery storage. I built an interactive web app that makes this process seamless:
📍 **Geospatial Mapping:** Users draw their roof on an interactive map, and the app calculates the exact usable area using Shapely.
🌤️ **Live Solar Data:** Integrates directly with the EU's PVGIS API for localized, highly accurate solar yield forecasting.
🚗 **DER Integration:** Automatically adjusts system sizing based on EV daily mileage and battery storage requirements.
💶 **Financial Modeling:** Calculates a precise payback period based on self-consumption, feed-in tariffs, and system costs.
📄 **Automated Reporting:** Generates a custom, multi-page PDF report on the fly.

This project was a fantastic deep dive into #Python, #Streamlit, #GeospatialAnalysis, and #RenewableEnergy modeling. It’s amazing how much complex engineering can be abstracted into a clean, user-friendly interface. 🌍⚡

## 7. Interview Talking Points
- **Situation:** Designing a consumer-friendly tool for sizing solar systems and EV charging infrastructure requires combining complex geospatial data, localized weather data, and financial modeling.
- **Task:** Build a modular, interactive application that allows non-experts to dimension a system while providing "expert overrides" for variables like azimuth, tilt, and degradation.
- **Action:** I developed a Streamlit application integrating `folium` and `shapely` for interactive map drawing and area calculation. I connected the European Commission's PVGIS API for accurate yield data, built a custom financial engine to calculate payback periods, and implemented a PDF generation module using `ReportLab` to summarize the findings. I structured the code into clean modules (`irradiance.py`, `finance.py`, `sizing.py`) to maintain scalability.
- **Result:** The application successfully abstracts complex energy modeling into a seamless user journey. It processes geographic coordinates, dynamically shifts API databases based on location, calculates complex self-consumption metrics against dynamic EV loads, and generates a professional PDF report in seconds.

## 8. Hidden Value Report
- **Strong Product Sense:** The inclusion of an i18n dictionary (English/German) indicates a developer thinking about production readiness and international markets, not just local scripts.
- **UX & State Management:** Managing multi-step workflows (Location -> Roof Draw -> Analysis -> Report) in Streamlit requires advanced use of `st.session_state` to prevent data loss on re-renders, demonstrating mature frontend architecture thinking.
- **Attention to Detail:** The PDF report module doesn't just print numbers; it explicitly flags whether a value used was a "default" or a "custom override," which is a critical feature for transparency in financial and engineering tools.
- **Sustainability Translation:** Translating raw kWp/kWh metrics into "tonnes of CO2 saved" and "trees equivalent" shows an understanding of how to communicate technical data to non-technical stakeholders effectively.
- **Career Alignment:** This project is a **Tier-1 portfolio piece** for roles like *Energy Data Analyst*, *Renewable Energy Software Engineer*, *PropTech Developer*, or *Digitalization Specialist in Utilities*. It perfectly bridges software engineering with hard power systems knowledge.
