# Open Energy Grid Explorer: Project Scouting Report

## 1. Executive Summary
The **Open Energy Grid Explorer** is an interactive Digital Twin prototype and web-based visualization tool for an urban electrical distribution network mapped over Munich. Built as a full-stack application with a FastAPI Python backend and a React (Vite) frontend, it models a hierarchically accurate grid with High Voltage (110 kV), Medium Voltage (11 kV), and Low Voltage (0.4 kV) layers. The system features a custom backend simulation engine that computes dynamic power flows bottom-up every 5 seconds, supports elastic generation balancing (solar vs. gas), and models real-time topological network switching via Ring Main Units (RMUs). The project demonstrates deep domain knowledge in energy systems, smart grids, and real-time data engineering, prioritizing structural realism over complex physics while delivering a highly visual and responsive user experience.

## 2. Project Deep Dive

### Purpose & Business Value
- **Domain:** Energy Systems, Smart Grid, Digital Twins.
- **Target Users:** Grid operators, energy researchers, utility planners, and electrical engineering students needing an intuitive visualization of grid topology.
- **Problem Statement:** Existing power flow tools are often heavily numerical, physics-bound, and lack intuitive, multi-layer spatial visualizations. There is a need for a structural digital twin that allows visual exploration of network hierarchies and dynamic switching without the overhead of heavy physical simulations or proprietary SCADA data.
- **Business Value:** Provides a clean, functional architectural prototype for visualizing distributed energy resources (DERs), topological state changes, and load aggregation, demonstrating the ability to build custom digital twins from the ground up.

### Features
- **Major Features:**
  - Full-stack digital twin with a React/Leaflet interactive dark-themed map and FastAPI backend.
  - Custom real-time simulation engine calculating Volts, Amps, Active Power, and Reactive Power (V, I, P, Q) every 5 seconds.
  - Multi-layer grid architecture enforcement (110kV HV, 11kV MV, 0.4kV LV) with distinct color coding.
- **Minor Features:**
  - Time-series metrics with a 1-hour rolling history buffer (720 data points per asset).
  - Diurnal consumer demand models (evening peaks for residential, steady loads for data centers).
- **Unique Features:**
  - Dynamic interactive RMU (Ring Main Unit) switching that structurally affects downstream power supply and load calculations on the fly.
  - Bottom-up load aggregation logic from LV consumers up to HV substations.
  - Elastic generation balancing (gas turbine automatically ramping to balance solar variability).

### Architecture & Data Flow
`Inputs (Diurnal curves, RMU state toggles) -> Processing (FastAPI 5s Simulation Loop & Aggregation) -> Storage (In-memory Deque Buffers) -> Visualization (TanStack Query, Recharts, Leaflet) -> Output (Interactive UI)`

- **Backend:** Python 3.10+, FastAPI, Asyncio background tasks.
- **Frontend:** React, Vite, Tailwind CSS, Leaflet Maps, Recharts, Context API, TanStack Query.
- **Data Model:** Static JSON graph of assets, combined with real-time in-memory state tracking.

## 3. Skills Extracted

### Technical Skills
- **Full-Stack Engineering:** Built a responsive single-page application (React/Vite) paired with an asynchronous Python API (FastAPI) to handle continuous data streams.
- **System Design & Simulation:** Engineered an asynchronous, stateful background simulation in Python utilizing `collections.deque` for memory-efficient rolling buffers. 
- **Power System Modeling:** Modeled bottom-up load aggregation, multi-layer voltage hierarchies (HV/MV/LV), and elastic generation balancing (solar + gas).
- **Data Visualization & GIS:** Implemented custom map layers, polyline network rendering, and dynamic CSS styling over OpenStreetMap tiles using Leaflet.js.

### Hidden & Non-Technical Skills
- **Domain Translation:** Successfully translated complex electrical engineering concepts (RMUs, substations, reactive power) into clean data models and an intuitive UI.
- **Pragmatic Engineering:** Made explicit architectural decisions to prioritize structural realism over deep physics, maintaining tight project scope and preventing scope creep.
- **Asynchronous Data Management:** Handled frontend polling and state synchronization cleanly without database overhead, using TanStack query and backend in-memory structures.

## 4. Resume Material (CV Bullets)
- **Full Stack Digital Twin:** Architected and developed the Open Energy Grid Explorer, an interactive visualization tool for an urban electrical network using React, Leaflet, and FastAPI.
- **Real-Time Simulation Engine:** Engineered an asynchronous Python backend to simulate dynamic load aggregation and power flow (V, I, P, Q) across High, Medium, and Low voltage layers every 5 seconds.
- **Smart Grid Topology Modeling:** Designed a hierarchical network graph modeling substations, RMUs, and transformers, featuring interactive network switching that dynamically reroutes downstream power metrics.
- **Performant Data Handling:** Implemented memory-efficient rolling data buffers using Python `deque` to serve continuous time-series metrics to a React frontend visualized with Recharts.

## 5. Portfolio Writeup

**Open Energy Grid Explorer**
*An interactive digital twin simulating urban power distribution hierarchies and real-time load balancing.*

I built the Open Energy Grid Explorer to bridge the gap between heavy power system simulation tools and intuitive visual dashboards. Set against the map of Munich, this full-stack application (React/FastAPI) visualizes a multi-layer electrical grid spanning High Voltage (110kV), Medium Voltage (11kV), and Low Voltage (0.4kV).

Rather than relying on static mock data, I engineered an asynchronous Python backend that runs a continuous 5-second simulation loop. It calculates consumer demand based on diurnal cycles, aggregates the load bottom-up through the network hierarchy, and elastically balances solar and gas generation. Users can interactively open or close Ring Main Units (RMUs) on the map, instantly observing how topological changes propagate through downstream transformers and alter system-wide metrics. This project highlights my ability to combine domain expertise in energy systems with modern full-stack web development and real-time data engineering.

## 6. LinkedIn Version
⚡ Ever wanted to visually explore the heartbeat of an urban electrical grid? 

I recently developed the **Open Energy Grid Explorer**, a full-stack digital twin that maps and simulates power distribution. 

Instead of static maps, I built an asynchronous Python simulation engine (FastAPI) that calculates load aggregation and generation balancing every 5 seconds. The React + Leaflet frontend allows users to visualize High, Medium, and Low voltage layers, and even interact with Ring Main Units (RMUs) to dynamically alter the network topology and watch the ripple effects on real-time metrics.

If you're interested in #SmartGrid, #DigitalTwins, #EnergySystems, or #FullStack web development, I’d love to connect and chat about modeling the grid of the future!

## 7. Interview Talking Points (STAR format)

- **Situation:** I wanted to build a digital twin of an urban energy grid that visualized hierarchical voltage layers (HV/MV/LV) but realized existing simulation engines were too heavy or lacked modern, interactive web UIs.
- **Task:** My goal was to create a full-stack application that demonstrated structural power distribution logic, dynamic topological switching, and live data streaming without relying on expensive SCADA systems.
- **Action:** I designed a React and Leaflet frontend for visualization, backed by a FastAPI Python application. I engineered an asynchronous background simulation that recalculates metrics (V, I, P, Q) every 5 seconds, aggregates loads bottom-up from consumers to generators, and tracks historical metrics in memory-efficient buffers. I also implemented an interactive RMU switching feature that recalculates the network graph live.
- **Result:** Delivered a highly responsive, visually distinct map application capable of simulating complex topological shifts and diurnal load variations on the fly, proving my capability in both software engineering and power system logic.

## 8. Hidden Value Report
- **Strong Product Ownership:** The project scope explicitly defines what *not* to do (e.g., "not a physics-accurate simulator", "no auth"). This reflects mature product management skills and the ability to define MVPs.
- **Algorithm Design:** The backend requires traversing a custom network graph (Adjacency List) to perform bottom-up aggregation and downstream effect propagation. This demonstrates solid data structure and algorithm competency beyond standard CRUD apps.
- **Scalable Architecture Foundations:** By isolating the simulation loop from the API endpoints and utilizing an in-memory datastore structure, the application could be easily hooked up to a real TimescaleDB or Kafka stream in the future.

## 9. Career Alignment Analysis
- **Best Matching Roles:** Full-Stack Developer (Energy Sector), Digital Twin Engineer, Smart Grid Software Engineer, Platform Engineer (Utilities).
- **Relevance Score:** 10/10 for Smart Grid & Digital Twin roles. 9/10 for Python/Backend/Data Engineering.
- **Why:** The project perfectly intersects software development with power domain knowledge. The emphasis on spatial mapping (Leaflet), continuous data flows (time-series simulation), and strict adherence to electrical hierarchies (HV/MV/LV, transformers, RMUs) is exactly what modern energy tech companies and innovative utilities look for.
