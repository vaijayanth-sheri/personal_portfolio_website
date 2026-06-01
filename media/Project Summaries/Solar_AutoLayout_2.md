# Solar AutoLayout 2 - Project Scouting Report

## 1. Executive Summary
Solar AutoLayout 2 is a professional-grade, web-based solar engineering application designed to automate the process of generating photovoltaic (PV) panel layouts and estimating energy yields. It serves solar planners, engineers, and technical managers by turning geospatial or visual site representations into precise, grid-based panel placements adhering to constraints like obstacle buffers, edge clearances, and thermal gaps. The tool leverages Shapely for complex polygon manipulation and the PVGIS database for high-fidelity energy forecasting and environmental impact assessment.

## 2. Project Deep Dive
- **Domain**: Energy Systems, Renewable Energy, Solar Engineering
- **Target Users**: Solar Engineers, Installers, Technical Managers, Product Managers
- **Problem Statement**: Manual placement of solar modules on complex rooftops/sites and manual estimation of system yields are error-prone and time-consuming.
- **Features**:
  - **Hybrid Drawing Modes**: Interactive mapping with OpenStreetMap (via Leaflet) or Image uploads (CRS.Simple) for custom site plans.
  - **Automated Geometry Engine**: Intelligent panel placement algorithm handling thermal gap skips, orientation toggles, setback buffers, and obstacle avoidance.
  - **High-Fidelity Yield Analytics**: Calculates Performance Ratio (PR), Specific Yield (kWh/kWp), Capacity Factor, system losses, and CO2 offset using PVGIS.
  - **SaaS-Grade UI Flow**: Step-by-step state management with draft/saved isolation using Zustand.
  - **Multi-Format Export Engine**: Output to DXF, PDF, PNG, CSV, JSON for seamless CAD integration.

## 3. Skills Extracted
- **Geospatial & Geometric Engineering (Python, Shapely, PyProj)**: Executed metric coordinate transformations (EPSG:4326 to EPSG:3857) and bounding box manipulations to calculate physically viable installation areas and auto-generate PV layout grids.
- **Power System & Energy Yield Modeling (PVGIS, Python)**: Built engines to compute granular metrics like PR, Specific Yield, and Capacity Factor by integrating standard energy loss models and albedo values.
- **Full Stack Architecture (FastAPI, Next.js, React)**: Delivered an end-to-end decoupled system with strict separation of concerns—UI drawing coordinates feed into the Python geometrical engine which responds with optimal panel layouts.
- **State Management & Modern UI (Zustand, Tailwind CSS, Leaflet)**: Designed a complex multi-step user journey, enforcing "no auto-calc" to optimize API calls, using Leaflet for robust cartographic & image overlay handling.
- **Product Ownership**: Translating standard solar physics and engineering workflows into a modular, user-centric web product.

## 4. Resume Material
- Engineered an automated solar PV layout engine using Python and Shapely to programmatically generate panel placements, reducing manual site drafting time while respecting complex thermal gaps, orientation, and obstacle buffer constraints.
- Developed a high-fidelity yield estimation service integrating PVGIS APIs to calculate specific yield, performance ratio, and capacity factor, providing data-driven decision support for solar planners.
- Architected a decoupled Next.js and FastAPI stack featuring interactive mapping (Leaflet) and complex coordinate transformations (EPSG:4326 to EPSG:3857), seamlessly converting UI drawing polygons into strict metric geometry.
- Built a multi-step, state-managed React UI using Zustand, optimizing performance by separating draft/saved data states and managing expensive geometry computations.

## 5. Portfolio Writeup
**Solar AutoLayout 2: Algorithmic PV System Design and Yield Analytics**
Designing utility-scale or commercial solar systems traditionally requires tedious CAD work and separate energy modeling. I developed Solar AutoLayout 2 as a comprehensive engineering tool to bridge this gap. By combining an interactive Next.js mapping frontend (Leaflet) with a computationally heavy FastAPI backend, the system allows users to define complex site boundaries on either satellite maps or uploaded schematics.

The core of the application is a Python-based geometry engine powered by Shapely and PyProj. It accurately transforms map coordinates into metric space to calculate exact panel placements, dynamically applying setbacks, thermal gaps, and module orientations. Once the physical layout is generated, the application queries the PVGIS dataset to calculate advanced energy metrics like Performance Ratio, Capacity Factor, and specific yields. The tool culminates in a multi-format export engine, converting web data into CAD-ready DXF files and PDF reports, showcasing a strong command over both software engineering and renewable energy systems.

## 6. LinkedIn Version
Thrilled to share my latest energy tech project: **Solar AutoLayout 2**! ☀️

I built a professional-grade web application to automate photovoltaic (PV) system design and yield analytics. By combining #Nextjs and #FastAPI, the tool allows solar engineers to draw site boundaries on maps or custom floor plans, and instantly generates an optimized panel layout using a custom geometric engine built with #Python and #Shapely.

To ensure the designs are backed by rigorous data, the system integrates PVGIS for high-fidelity energy forecasting—calculating Performance Ratio, Capacity Factor, and environmental impact.

This project perfectly encapsulates my passion for merging **Software Engineering**, **Geospatial Data**, and **Renewable Energy**. Let's build a smarter grid! 🌍⚡

#SolarEnergy #DigitalTwin #FullStack #SoftwareEngineering #Python #EnergyTransition

## 7. Interview Talking Points (STAR)
- **Situation**: Designing custom solar layouts and estimating energy yields manually is slow and requires multiple fragmented tools (CAD + PVsyst).
- **Task**: Build an integrated web platform to automate panel layout generation and provide instant, accurate energy estimations based on site boundaries.
- **Action**: Developed a decoupled architecture using Next.js/Leaflet for the UI and FastAPI for the backend. I implemented a complex geometric engine using Shapely to convert map coordinates into metric areas, apply obstacle buffers, and algorithmically place panels while respecting thermal gaps. I then integrated the PVGIS API to calculate key performance indicators like PR and Capacity Factor.
- **Result**: Delivered a SaaS-grade engineering tool capable of processing complex site geometries in seconds, calculating precise energy metrics, and exporting the layout to CAD-ready formats (DXF), demonstrating strong full-stack and energy domain expertise.

## 8. Hidden Value Report
- **Domain Translation**: The project demonstrates the rare ability to translate physical constraints (thermal gaps, edge clearances, metric projections) into robust code logic.
- **UX/Product Sensibilities**: Implementing a clear "draft vs. saved" state management system with a multi-step wizard shows an understanding of how engineers actually use technical software—preventing accidental heavy re-calculations on every click.
- **Algorithmic Thinking**: The grid generation algorithm handling rotated polygons, obstacle clipping, and modulo-based thermal gap skipping goes beyond standard CRUD apps and into applied computer science.

## 9. Career Alignment Analysis
- **Best Matching Roles**: Energy Software Engineer, Solar Data Analyst, Product Engineer (Renewables), Full Stack Engineer (ClimateTech).
- **Relevance Score**: 10/10 for Renewables/ClimateTech, 9/10 for General Full Stack.
- **Why**: Directly targets the core workflow of the solar industry. Demonstrates proficiency in the standard stack (Python/React) while utilizing highly specialized libraries (Shapely, Leaflet, PVGIS) crucial for GIS and energy systems engineering.
