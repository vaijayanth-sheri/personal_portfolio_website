import jobTrackerHome from '/media/Job application tracker/homepage.png';
import jobTrackerP1 from '/media/Job application tracker/page 1.png';
import jobTrackerP2 from '/media/Job application tracker/page 2.png';
import jobTrackerP3 from '/media/Job application tracker/page 3.png';
import jobTrackerP4 from '/media/Job application tracker/page 4.png';

import solarAutoImg from '/media/Solar auto layout/home.png';
import solarAutoP1 from '/media/Solar auto layout/page 1.png';
import solarAutoP2 from '/media/Solar auto layout/page 2.png';
import paccemImg from '/media/PACCEM/header.png';
import gridawareImg from '/media/Projet_Gridaware/header.png';
import resimImg from '/media/hybrid_digital_twin/header.png';

import paccemPage1 from '/media/PACCEM/page-1.png';
import paccemPage2 from '/media/PACCEM/page-2.png';

import gridawarePage1 from '/media/Projet_Gridaware/page-1.png';
import gridawarePage2 from '/media/Projet_Gridaware/page-2.png';

import resimPage1 from '/media/hybrid_digital_twin/page-1.png';
import resimPage2 from '/media/hybrid_digital_twin/page-2.png';

import pvInvestImg from '/media/EV_feasibility_calculator/header.png';
import pvInvestPage1 from '/media/EV_feasibility_calculator/page-1.png';
import pvInvestPage2 from '/media/EV_feasibility_calculator/page-2.png';

import solarEvImg from '/media/solar_EV_configurator/header.png';

import pypsaGenImg from '/media/pypsa_code_generator/header.png';
import pypsaGenPage1 from '/media/pypsa_code_generator/page-1.png';
import pypsaGenPage2 from '/media/pypsa_code_generator/page-2.png';

import pvlibGuiImg from '/media/PVLib_GUI/header.png';
import pvlibGuiPage1 from '/media/PVLib_GUI/page-1.png';
import pvlibGuiPage2 from '/media/PVLib_GUI/page-2.png';
import pvlibGuiPage3 from '/media/PVLib_GUI/page-3.png';

import windLibGuiImg from '/media/WindLib_GUI/header.png';
import windLibGuiPage1 from '/media/WindLib_GUI/page-1.png';
import windLibGuiPage2 from '/media/WindLib_GUI/page-2.png';

import workflowHomeImg from '/media/Jupyter Workflow manager/home.png';
import workflowP1 from '/media/Jupyter Workflow manager/page 1.png';
import workflowP2 from '/media/Jupyter Workflow manager/page 2.png';

import plotHomeImg from '/media/Visual plot builder for Jupyter/home.png';
import plotP1 from '/media/Visual plot builder for Jupyter/page 1.png';


import researchAgentHome from '/media/Automated Research Agent/Hone.png';

import pypsaResultsHome from '/media/PyPSA Results Dashboard/homepage.png';
import pypsaResultsP1 from '/media/PyPSA Results Dashboard/PAge 1.png';
import pypsaResultsP2 from '/media/PyPSA Results Dashboard/page 2.png';
import pypsaResultsP3 from '/media/PyPSA Results Dashboard/page 3.png';
import pypsaResultsP4 from '/media/PyPSA Results Dashboard/page 4.png';

import gridExplorerHome from '/media/Open energy grid explorer/homepage.png';

import pvYieldHome from '/media/PV yield report generator/homepage.png';
import pvYieldP1 from '/media/PV yield report generator/page 1.png';
import pvYieldP2 from '/media/PV yield report generator/page 2.png';
import pvYieldP3 from '/media/PV yield report generator/page 3.png';
import pvYieldP4 from '/media/PV yield report generator/page 4.png';

import inverterHome from '/media/Solar inverter Optimizer/homepage.png';
import inverterP1 from '/media/Solar inverter Optimizer/page 1.png';
import inverterP2 from '/media/Solar inverter Optimizer/page 2.png';

import postgresConsoleHome from '/media/Postgre console/hoempage.png';

export const projectsData = [
  {
    id: 'job-tracker',
    title: 'JobTracker & AI Career Assistant',
    role: 'Full-Stack Developer',
    duration: '2026',
    summary: 'A comprehensive, full-stack web application designed to optimize the job search process through centralized data management and AI-driven document generation.',
    impact: 'Saves hours of manual tracking and document formatting, providing actionable insights into the application funnel while centralizing professional identity management.',
    tech: ['Next.js 14', 'Supabase', 'Gemini AI', 'Tailwind CSS'],
    techStackDetailed: {
      'Frontend': 'Next.js 14 (App Router), React, Tailwind CSS',
      'Backend': 'Supabase (PostgreSQL), Supabase Auth',
      'AI Integration': 'Google Gemini 2.5 Flash',
      'Architecture': 'Row-Level Security (RLS)'
    },
    overview: 'JobTracker is a comprehensive career management platform designed to solve the chaos of the modern job hunt. Instead of relying on scattered spreadsheets and manual document editing, it provides a unified ecosystem to track applications, manage global directories of companies and job boards, and monitor personal skill gaps. A sophisticated database architecture securely manages both globally shared data and strictly private user data via PostgreSQL Row-Level Security (RLS).',
    features: [
      '**Candidate Profile Database**: Centralized repository for Experience, Projects, Education, and Skills, feeding directly into AI generation.',
      '**Global vs Private Data Separation**: Scalable PostgreSQL architecture using Row-Level Security to securely manage global job boards and private user notes.',
      '**AI Workshop**: Automated generation of tailored cover letters and CVs using structured profile data to reduce application preparation time.',
      '**Analytics & Skill Gap Tracking**: Dynamic dashboards providing visual insights into application funnels, success rates, and missing required skills.'
    ],
    heroImage: jobTrackerHome,
    gallery: [
      jobTrackerP1,
      jobTrackerP2,
      jobTrackerP3,
      jobTrackerP4
    ],
    links: { 
      demo: 'https://job-application-tracker-tan-seven.vercel.app/dashboard'
    },
  },
  {
    id: 'solar-autolayout',
    title: 'Solar AutoLayout Engine',
    role: 'Full-Stack Engineer | GIS Architect',
    duration: '2026',
    summary: 'A full-stack, GIS-enabled web application automating the layout of PV systems, translating spatial boundaries into engineering-ready grids in under 5 seconds.',
    impact: 'Accelerated pre-sales engineering by replacing manual CAD drafting with an algorithmic placement engine that dynamically handles thermal gaps and obstacle buffers.',
    tech: ['Next.js', 'FastAPI', 'Shapely', 'Leaflet', 'PVGIS API'],
    techStackDetailed: {
      'Frontend': 'Next.js, TypeScript, Tailwind CSS, Zustand, Leaflet',
      'Backend Engine': 'FastAPI, Python, Shapely, PyProj',
      'Data Integration': 'PVGIS API (Yield Forecasting), Geocoding',
      'Export Services': 'ezdxf (CAD), ReportLab (PDF)'
    },
    overview: 'Solar AutoLayout drastically reduces the bottleneck of commercial PV planning. Traditional solar design requires manual CAD work to account for roof boundaries, obstacles, and edge clearances. This platform allows users to define constraints interactively over maps or images. A custom FastAPI backend running Shapely and PyProj mathematically projects these coordinates into metric spaces, executing a grid-walking algorithm that places panels while strictly respecting thermal expansion gaps. It bridges complex geospatial processing with high-fidelity yield estimation.',
    features: [
      '**Algorithmic Layout Engine**: Converts GeoJSON polygons into metric planes, dynamically applying obstacle setbacks and calculating exact PV module placements.',
      '**Dual Input Modes**: Supports both interactive OpenStreetMap drawing (Leaflet) and image-based planning with reference scaling.',
      '**High-Fidelity Yield Analytics**: Integrates the European Commission PVGIS API to calculate Performance Ratios, Capacity Factors, and specific yields.',
      '**Multi-Format Export Engine**: Generates CAD-ready DXF files, comprehensive PDF reports, and JSON datasets, streamlining the transition to final engineering.'
    ],
    heroImage: solarAutoImg,
    gallery: [solarAutoP1, solarAutoP2],
    links: { 
      demo: 'https://solar-auto-layout-pdnoenf7l-sherivaijayanth-9859s-projects.vercel.app/',
      github: 'https://github.com/vaijayanth-sheri/Solar_AutoLayout' 
    },
  },
  {
    id: 'paccem',
    title: 'PacCEM: Capacity Expansion Model',
    role: 'Energy Systems Software Engineer',
    duration: 'Aug 2025 – Oct 2025',
    summary: 'A Python-based desktop application wrapping the PyPSA framework to democratize complex power grid optimization and capacity expansion planning.',
    impact: 'Reduced barriers to entry for utility planners by abstracting complex linear programming optimizations behind an intuitive, interactive GUI.',
    tech: ['Python', 'Streamlit', 'PyPSA', 'Plotly', 'Linopy'],
    techStackDetailed: {
      'Framework': 'Streamlit, Plotly, Folium',
      'Optimization Engine': 'PyPSA, Linopy, Pyomo',
      'Solvers': 'HiGHS, Gurobi, CBC',
      'Data Processing': 'Pandas (8760-hour time-series mapping)'
    },
    overview: 'The Pacific Capacity Expansion Model (PacCEM) is designed to make rigorous power system optimization accessible to non-programmers. Building capacity expansion models for island or isolated grids is notoriously difficult. PacCEM solves this by providing a Streamlit GUI that automatically maps user-uploaded Excel load and generation profiles into PyPSA network constraints. It interfaces with industry-standard solvers to minimize LCOE while respecting CO2 caps and reserve margins, returning deep analytical insights.',
    features: [
      '**No-Code Scenario Optimization**: Configure complex grid models—including RE targets, CO2 caps, and battery integration—without writing any code.',
      '**Automated Data Ingestion**: Seamlessly ingest and map 8,760-hour generation and load profiles via a robust Pandas ETL pipeline.',
      '**Advanced Visual Analytics**: Interactive Plotly and Folium dashboards visualizing optimal capacity mix, hourly dispatch, and geographic grid assets.',
      '**Solver Integration**: Seamlessly leverages linear programming solvers like HiGHS and Gurobi to compute the lowest-cost path to grid decarbonization.'
    ],
    heroImage: paccemImg,
    gallery: [
      paccemPage1,
      paccemPage2
    ],
    links: { github: 'https://github.com/vaijayanth-sheri' },
  },
  {
    id: 'gridaware',
    title: 'GridAware EV Optimizer',
    role: 'Full-Stack Developer',
    duration: 'July 2025',
    summary: 'A full-stack web application featuring a React glassmorphism UI and a FastAPI backend to optimize EV charging using dynamic day-ahead electricity prices.',
    impact: 'Empowered EV owners to minimize charging costs by strategically scheduling sessions based on real-time EPEX Spot market prices.',
    tech: ['React', 'FastAPI', 'Pandas', 'Recharts', 'Vite'],
    techStackDetailed: {
      'Frontend': 'React (Vite), Recharts, Lucide React, Vanilla CSS',
      'Backend Logic': 'FastAPI, Python, Pandas (Time-Series Analytics)',
      'Data Integration': 'Awattar DE Market REST API',
      'Design': 'Modern Glassmorphism UI'
    },
    overview: 'GridAware is a smart EV charging dashboard designed to minimize charging costs by strategically scheduling sessions. The application features a robust quantitative energy modeling engine built with FastAPI and Pandas, paired with a highly responsive React frontend. It processes user-specific EV parameters to identify the absolute cheapest continuous charging block with fractional-hour precision, accurately accounting for true AC/DC efficiency losses and custom SoC thresholds.',
    features: [
      '**Live Market Optimization**: Real-time integration with the Awattar API to fetch live day-ahead electricity spot prices.',
      '**Smart Recommendation Engine**: Utilizes a Pandas-based rolling-window algorithm to isolate the absolute cheapest contiguous charging block.',
      '**Fractional-Hour Precision**: Maps the charging window down to the minute, incorporating custom time windows and true AC/DC efficiency losses.',
      '**Interactive Visualizations**: Features interactive zooming/panning area plots powered by Recharts, beautifully mapping the optimal charging window.'
    ],
    heroImage: gridawareImg,
    gallery: [
      gridawarePage1,
      gridawarePage2
    ],
    links: {
      demo: 'https://gridaware-ev-optimizer.vercel.app/',
      github: 'https://github.com/vaijayanth-sheri/GridAware-Smart-EV-Charging-Dashboard'
    },
  },
  {
    id: 'pv-invest',
    title: 'PV-Invest Financial Dashboard',
    role: 'Energy Data Analyst',
    duration: 'July 2025',
    summary: 'An interactive feasibility dashboard bridging the gap between physical PV/EV modeling and rigorous 25-year corporate project finance metrics.',
    impact: 'Accelerated the business-case evaluation of green infrastructure by instantly computing NPV, IRR, and CO2 offsets, exporting investor-ready PDF reports.',
    tech: ['Python', 'Dash', 'Pandas', 'NumPy', 'WeasyPrint'],
    techStackDetailed: {
      'Framework': 'Dash, Bootstrap, Plotly',
      'Financial Engine': 'NumPy-Financial, Pandas',
      'Reporting': 'WeasyPrint, Jinja2, Base64 Encoding',
      'Modeling': 'CAPEX/OPEX, Depreciation, Corporate Tax'
    },
    overview: 'Evaluating the viability of commercial EV charging hubs powered by onsite solar and battery storage requires merging energy physics with long-term finance. The PV-Invest dashboard models PV generation profiles, battery interaction, and grid reliance while simultaneously calculating depreciation, corporate taxes, loan interest, and inflation. It is a comprehensive decision-support tool that provides instantaneous cash-flow waterfall charts and exports formal viability reports.',
    features: [
      '**Comprehensive Financial Engine**: Calculates complex 25-year cash flows, factoring in NPV, IRR, Payback Periods, and CAPEX/OPEX structures.',
      '**Physical Energy Simulation**: Models realistic PV degradation, battery sizing, and grid import/export dynamics.',
      '**Automated PDF Reporting**: Dynamically injects Base64-encoded Plotly charts into HTML templates, generating professional, static PDF reports via WeasyPrint.',
      '**Environmental Impact Tracking**: Quantifies baseline vs. project CO2 emissions, monetizing carbon savings via configurable CO2 pricing.'
    ],
    heroImage: pvInvestImg,
    gallery: [
      pvInvestPage1,
      pvInvestPage2
    ],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/ev-solar-feasibility-calculator',
      github: 'https://github.com/vaijayanth-sheri/EV-Solar-Feasibility-Calculator'
    },
  },
  {
    id: 'solar-ev-config',
    title: 'Solar + EV Configurator',
    role: 'Full-Stack Developer | PropTech',
    duration: 'July 2025',
    summary: 'A spatial and financial modeling application combining interactive rooftop geocoding with dynamic EV load modeling and PVGIS integration.',
    impact: 'Reduced customer acquisition friction for solar installers by providing homeowners with an instant, interactive, and highly accurate ROI evaluation tool.',
    tech: ['Python', 'Streamlit', 'Shapely', 'Folium', 'PVGIS API'],
    techStackDetailed: {
      'Frontend': 'Streamlit, Folium (Leaflet)',
      'Spatial Analytics': 'Shapely, Geopy',
      'Data Integration': 'PVGIS API (Dynamic Database Selection)',
      'Reporting': 'ReportLab (PDF Generation)'
    },
    overview: 'The Solar + EV Configurator merges geospatial analytics with distributed energy resource (DER) modeling. Users search for their address and visually trace their rooftop on a map, allowing the Shapely geometry engine to calculate real-world usable area. The application dynamically adjusts to European Commission PVGIS APIs for location-specific solar irradiance. It layers in dynamic EV charging requirements to output precise system sizing, a deterministic financial payback model, and professional PDF exports.',
    features: [
      '**Interactive Geospatial Mapping**: Trace installation zones on Folium maps to automatically compute metric rooftop capacities via Shapely.',
      '**Dynamic Load Modeling**: Calculates additional kWp requirements natively based on EV count, daily mileage, and battery capacities.',
      '**Robust API Integration**: Automatically toggles between PVGIS-SARAH2 and PVGIS-ERA5 databases depending on geographic bounding boxes.',
      '**Automated Custom Reporting**: Produces formatted PDF reports detailing system specs, financial savings, and environmental metrics (CO2 offset).'
    ],
    heroImage: solarEvImg,
    gallery: [
      'https://placehold.co/800x500/e65100/FFF?text=Rooftop+Drawing',
      'https://placehold.co/800x500/e65100/FFF?text=System+Sizing+Results'
    ],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/project-solar-ev-configurator',
      github: 'https://github.com/vaijayanth-sheri/Project_Solar_EV_Configurator'
    },
  },
  {
    id: 'pypsa-gen',
    title: 'PyPSA Code Generator',
    role: 'Python Developer | Tool Architect',
    duration: 'April 2024 – July 2024',
    summary: 'A developer-centric Streamlit tool bridging visual grid configuration with dynamic Jinja2 templating to generate executable PyPSA Python scripts.',
    impact: 'Dramatically accelerated the setup of power system models and completely eliminated syntax and topological errors through real-time semantic validation.',
    tech: ['Python', 'Streamlit', 'Jinja2', 'Regex'],
    techStackDetailed: {
      'Frontend': 'Streamlit (Custom UI)',
      'Code Engine': 'Jinja2 Templating',
      'Validation': 'Custom Regex Parsing',
      'Domain Model': 'PyPSA Grid Components'
    },
    overview: 'Configuring network topologies in PyPSA manually is highly prone to boilerplate errors and missing dependencies. This Code Generator Dashboard acts as a visual IDE for power system modelers. Users configure Buses, Generators, and Lines via forms, while the application utilizes Jinja2 templates to construct clean Python code. Crucially, it includes a custom semantic validation layer that scans the generated scripts using Regex, instantly warning users of unreferenced buses or duplicate components before execution.',
    features: [
      '**Visual Topology Configuration**: Intuitive, multi-tiered UI supporting 8 core grid components with "Basic" and "Advanced" parameter views.',
      '**Dynamic Code Rendering**: Employs Jinja2 templating to dynamically assemble complex Python scripts, avoiding fragile string concatenations.',
      '**Real-Time Semantic Validation**: Custom parsing engine cross-checks component references in real-time to prevent topological execution errors.',
      '**Developer-First Export**: Outputs perfectly formatted, executable code blocks ready to be dropped into Jupyter environments.'
    ],
    heroImage: pypsaGenImg,
    gallery: [
      pypsaGenPage1,
      pypsaGenPage2
    ],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/pypsa-code-generator',
      github: 'https://github.com/vaijayanth-sheri/pypsa-code-generator'
    },
  },
  {
    id: 'research-agent',
    title: 'Autonomous Research Orchestrator',
    role: 'Automation Architect',
    duration: 'June 2025',
    summary: 'An autonomous, no-code AI workflow orchestrating web scraping and LLMs to dynamically tailor job applications based on real-time company data.',
    impact: 'Automated multi-page company research and document synthesis, reducing application tailoring time from hours to minutes per submission.',
    tech: ['Make.com', 'Gemini Pro', 'Apify', 'Google Workspace'],
    techStackDetailed: {
      'Orchestration': 'Make.com, Webhooks',
      'AI/LLM': 'Google Gemini Pro, Prompt Engineering',
      'Extraction': 'Apify / ScrapingBee API, Regex Parsing',
      'Storage': 'Google Docs, Google Sheets'
    },
    overview: 'This "Application Intelligence Kit" demonstrates advanced workflow automation by turning manual company research into a single-click pipeline. Triggered by a URL, the Make.com orchestration engine routes the target company through a scraping API to extract core values. It merges this live context with a master profile database and feeds it into Google Gemini. Utilizing carefully engineered, constraint-driven prompts, the system structures unstructured text and auto-generates highly relevant cover letters and CV bullets.',
    features: [
      '**Autonomous Data Pipelines**: Integrates external web scrapers to autonomously navigate and extract mission statements from target company URLs.',
      '**Advanced Prompt Engineering**: Constrains LLM outputs to prevent hallucination, enforcing strict adherence to candidate data and structured JSON responses.',
      '**Resilient Automation Architecture**: Incorporates sleep/wait modules and Regex sanitization to handle asynchronous scraping delays and LLM formatting quirks.',
      '**Zero-Touch Logging**: Automatically formats parsed results and commits them directly to Google Docs and Sheets for immediate use.'
    ],
    heroImage: researchAgentHome,
    gallery: [
      researchAgentHome
    ],
    links: { github: '#' },
  },
  {
    id: 're-sim',
    title: 'Hybrid PV+Wind+Storage Digital Twin',
    role: 'Energy Systems Modeler',
    duration: 'Jun 2025 – Jul 2025',
    summary: 'A dynamic, high-fidelity digital twin modeling physical energy generation and battery dispatch against the standard German household load profile.',
    impact: 'Demystified microgrid system behaviors by providing engineers and planners with a highly interactive, 24-hour visual energy forecasting sandbox.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'OpenWeatherMap'],
    techStackDetailed: {
      'Framework': 'Streamlit, Plotly',
      'Physics Engine': 'Numpy, Pandas (Time-Series Analytics)',
      'Data Integration': 'OpenWeatherMap API',
      'Domain Model': 'Hub-height wind correction, Battery SOC Tracking'
    },
    overview: 'This hybrid digital twin simulates the intricate balance required to operate a microgrid. It pulls live weather forecasts via the OpenWeatherMap API and applies core physical equations—such as cloud-adjusted irradiance and wind power law extrapolations—to predict hourly generation. By netting this data against a normalized BDEW H0 load profile, the system acts as a simulated Energy Management System (EMS), calculating real-time battery charge states and net grid reliance.',
    features: [
      '**Physical Asset Modeling**: Integrates granular hardware specifications for PV and wind turbines, computing output based on actual mechanical constraints.',
      '**Live Forecasting API**: Ingests real-time 3-hour interval weather forecasts to drive dynamic 24-hour generation simulations.',
      '**EMS Dispatch Logic**: Mathematically balances surplus and deficit energy against battery efficiencies and capacity limits before interacting with the external grid.',
      '**Interactive Multi-Axis Analytics**: Visualizes complex, simultaneous energy flows, SOC, and peak loads via comprehensive Plotly dashboards.'
    ],
    heroImage: resimImg,
    gallery: [
      resimPage1,
      resimPage2
    ],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/project-hybrid-digital-twin',
      github: 'https://github.com/vaijayanth-sheri/Project_Hybrid_Digital_Twin'
    },
  },
  {
    id: 'pvlib-gui',
    title: 'PVLib GUI - Solar Energy Yield Assessment',
    role: 'Full-Stack Developer',
    duration: '2024 - Present',
    summary: 'A modern, highly interactive, and extremely performant Solar PV simulation dashboard powered by PVLib-Python on the backend and React + Vite on the frontend.',
    impact: 'Modernized solar PV modeling by entirely replacing the legacy Streamlit architecture with a blazing-fast decoupled React/FastAPI stack, enabling instantaneous client-side UI rendering alongside heavy numerical computing.',
    tech: ['React', 'FastAPI', 'PVLib', 'Pandas', 'Plotly.js'],
    techStackDetailed: {
      'Frontend': 'React, Vite, Plotly.js, Leaflet, jsPDF',
      'Backend': 'FastAPI, Python, PVLib, Pandas, Uvicorn',
      'Data Integration': 'PVGIS API, OpenMeteo API, Nominatim (Geocoding)',
      'Reporting': 'jsPDF (Branded PDF generation), CSV Extraction'
    },
    overview: 'This application provides engineering-grade solar PV modeling and yield assessment through a beautiful, seamless interface. It replaces previous monolithic setups with a decoupled architecture. The FastAPI server handles all complex PVLib model chain processing—including granular system sizing, azimuth, tilt, and access to CEC Modules and Sandia Inverters databases. Meanwhile, the React client instantly aggregates 8,760 hourly data points into Hourly, Daily, and Monthly profiles without browser lag, utilizing Plotly for deep interactive visualizations.',
    features: [
      '**Interactive Site Selection**: Leaflet map integration and OpenStreetMap (Nominatim) search with automatic coordinate and timezone extraction.',
      '**Dynamic Weather APIs**: Automatically fetches hourly TMY/weather data from PVGIS or OpenMeteo based on the selected location.',
      '**High-Performance Analytics**: 8,760 hourly data points computed instantaneously via FastAPI and aggregated via Pandas into multi-resolution profiles.',
      '**Interactive Visualizations & Reporting**: Deep zoom and pan support across all time series via react-plotly.js, plus one-click PDF engineering report generation using jsPDF.'
    ],
    heroImage: pvlibGuiImg,
    gallery: [
      pvlibGuiPage1,
      pvlibGuiPage2,
      pvlibGuiPage3
    ],
    links: {
      demo: 'https://pvlibdatageneratorgui-nhqbws6dkwrgp8ach48idz.streamlit.app/',
      github: 'https://github.com/vaijayanth-sheri/PVLib_data_generator_GUI'
    },
  },
  {
    id: 'windpowerlib-gui',
    title: 'Windpowerlib data generator',
    role: 'Data Engineer',
    duration: '2024',
    summary: 'An API-driven analytical application normalizing weather datasets and running complex hub-height wind shear physics to estimate turbine power yields.',
    impact: 'Accelerated wind asset evaluation by automating the complex ETL pipeline required to transform raw meteorological data into actionable energy simulations.',
    tech: ['Python', 'Streamlit', 'windpowerlib', 'Pandas'],
    techStackDetailed: {
      'Core Engine': 'windpowerlib',
      'ETL Pipelines': 'Open-Meteo, NASA POWER, PVGIS, EPW Parser',
      'Data Processing': 'Pandas (MultiIndex manipulation)',
      'Reporting': 'ReportLab, Matplotlib'
    },
    overview: 'Evaluating wind energy potential is hindered by the friction of acquiring and standardizing meteorological data. This dashboard serves as an automated ETL and simulation engine. It connects to multiple global APIs, normalizing disparate 8,760-hour JSON payloads into the strict MultiIndex structures required by the `windpowerlib` physics engine. It applies logarithmic wind shear extrapolations and density corrections, delivering highly accurate hub-height power outputs without requiring the user to write any code.',
    features: [
      '**Multi-Source Data Pipelines**: Automated ingestion and schema normalization from NASA POWER, Open-Meteo, PVGIS, and standard EPW files.',
      '**Physics-Based Wind Modeling**: Computes complex environmental corrections, including temperature-based density shifts and Hellman wind shear extrapolations.',
      '**Turbine Library Integration**: Seamlessly interfaces with the OpenEnergy Database to simulate performance across dozens of commercial turbine models.',
      '**Dynamic PDF Generation**: Auto-generates comprehensive summary reports featuring analytical wind roses, capacity factors, and explicit metadata.'
    ],
    heroImage: windLibGuiImg,
    gallery: [
      windLibGuiPage1,
      windLibGuiPage2
    ],
    links: {
      demo: 'https://windpowerlibdatageneratorgui.streamlit.app/',
      github: 'https://github.com/vaijayanth-sheri/Windpowerlib_data_generator_GUI'
    },
  },
  {
    id: 'workflow-mgr',
    title: 'Jupyter Workflow Manager',
    role: 'VS Code Extension Engineer',
    duration: '2026',
    summary: 'A custom TypeScript VS Code extension bringing file-scoped micro-versioning to Jupyter, ending notebook chaos and enabling safe algorithmic iteration.',
    impact: 'Significantly reduced technical debt in data science workflows by eliminating cell duplication and automating the export of clean, production-ready pipelines.',
    tech: ['TypeScript', 'VS Code API', 'Node.js', 'Python'],
    techStackDetailed: {
      'Extension': 'TypeScript, VS Code Extension API',
      'Architecture': 'Decoupled MVC, Dynamic WorkflowResolver',
      'Storage': 'Local JSON State Graphs (.workflow.json)',
      'Integration': 'Native Diff Viewer, Smart Code Injection'
    },
    overview: 'Data science iteration usually involves copying notebook cells, leading to chaotic files and lost logic. Jupyter Workflow Manager acts as a contextual memory layer right inside VS Code. It abstracts experimental code snippets into a file-scoped JSON graph, allowing developers to save, version, and swap implementations seamlessly. A custom `EditorController` intelligently injects or replaces code blocks, bridging the gap between messy prototyping and pristine script delivery.',
    features: [
      '**File-Scoped Micro-Versioning**: Links active Python scripts to isolated logic graphs, tracking multiple algorithmic versions per step.',
      '**Smart Text Replacement**: Programmatically interfaces with the VS Code document API to safely insert or swap code blocks without polluting the workspace.',
      '**Native Diff Visualization**: Stages temporary files to leverage VS Code\'s powerful native diff engine for immediate side-by-side algorithmic comparisons.',
      '**Automated Pipeline Compilation**: Generates clean, production-ready Python deliverables by compiling the active versions of all steps with a single click.'
    ],
    heroImage: workflowHomeImg,
    gallery: [workflowP1, workflowP2],
    links: { github: 'https://github.com/vaijayanth-sheri/Jupyter_workflow_manager' },
  },
  {
    id: 'plot-builder',
    title: 'Visual Plot Builder for Jupyter',
    role: 'Tool Architect',
    duration: '2026',
    summary: 'A developer-first VS Code extension leveraging React to securely interrogate Jupyter memory and visually generate production-ready Python plotting code.',
    impact: 'Increased data analyst productivity by eliminating the cognitive load of memorizing Matplotlib syntax and instantly generating robust EDA visualizations.',
    tech: ['TypeScript', 'React', 'Python', 'Jupyter API'],
    techStackDetailed: {
      'Frontend': 'React Webview',
      'Backend Bridge': 'VS Code Jupyter API, Kernel Execution',
      'Design Patterns': 'Abstract Factory (Multi-library generation)',
      'Data Integration': 'Pandas Schema Detection'
    },
    overview: 'Plot Builder bridges the gap between fast UI-driven exploration and code-centric reproducibility. It provides a visual sidebar integrated directly with the active Jupyter kernel. Behind the scenes, a highly resilient execution bridge securely interrogates Python memory to detect Pandas DataFrames. It uses an Abstract Factory pattern to translate user UI selections into optimized, cleanly formatted Matplotlib or Seaborn code—complete with complex `.melt()` transformations—and injects it directly into the notebook.',
    features: [
      '**Zero-Config Memory Interrogation**: Dynamically reads active Jupyter kernel states to instantly detect and map DataFrame variables.',
      '**Resilient Execution Bridge**: Utilizes a 4-tier fallback mechanism to safely extract Python metadata without crashing internal Microsoft APIs.',
      '**Abstract Factory Code Generation**: Outputs clean, highly readable Matplotlib or Seaborn code, abstracting away complex plotting boilerplate.',
      '**Automated Data Transformation**: Intelligently handles multi-series plotting by automatically generating the necessary Pandas `.melt()` logic.'
    ],
    heroImage: plotHomeImg,
    gallery: [plotP1],
    links: { github: 'https://github.com/vaijayanth-sheri/Jupyter_plot_helper' },
  },
  {
    id: 'pv-yield-calculator',
    title: 'Solar PV Yield report generator',
    role: 'Full-Stack Python Developer',
    duration: '2025',
    summary: 'A production-ready feasibility tool utilizing pvlib and PVGIS to simulate 8,760 hours of annual energy yield, outputting automated bilingual client reports.',
    impact: 'Accelerated commercial solar feasibility studies by standardizing rigorous physics-based analytics and instantly generating professional PDF proposals.',
    tech: ['Python', 'Streamlit', 'pvlib', 'Pandas', 'ReportLab'],
    techStackDetailed: {
      'Modeling Engine': 'pvlib (NREL SPA, Perez, SAPM)',
      'Data Integration': 'PVGIS 5.3 API (TMY Data)',
      'Data Processing': 'Pandas (Cleaning & Interpolation)',
      'Automated Reporting': 'ReportLab, Plotly (Dynamic Embedded Charts)'
    },
    overview: 'Bridging the gap between simplistic calculators and complex engineering software, this application provides rapid, rigorous solar modeling. It fetches Typical Meteorological Year (TMY) datasets, using Pandas to clean and interpolate missing hours to ensure perfect 8,760-hour continuity. A robust pvlib engine simulates the physical behavior of the system, and a custom ReportLab pipeline dynamically renders bilingual (English/German) feasibility PDFs complete with embedded Plotly visualizations.',
    features: [
      '**Rigorous Physics Simulation**: Computes solar positioning, irradiance transposition, and thermal constraints using industry-standard NREL and SAPM models.',
      '**Automated Data Cleaning**: Robust Pandas pipeline automatically resamples, interpolates, and fills missing API weather data to guarantee simulation continuity.',
      '**Dual User Interfaces**: Designed with "Quick Mode" for fast sales estimates and "Pro Mode" for detailed technical overrides (albedo, inverter sizing).',
      '**Programmatic PDF Generation**: Assembles professional, multi-page feasibility reports containing dynamic KPIs and embedded charts on the fly.'
    ],
    heroImage: pvYieldHome,
    gallery: [pvYieldHome, pvYieldP1, pvYieldP2, pvYieldP3, pvYieldP4],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/PV-Yield-Report-Generator',
      github: 'https://github.com/vaijayanth-sheri/PV_report_generator'
    }
  },
  {
    id: 'pypsa-results-dashboard',
    title: 'PyPSA Results Visualization Dashboard',
    role: 'Data Engineer',
    duration: '2025',
    summary: 'A web-based interactive analytics platform that automatically parses multi-dimensional PyPSA netCDF outputs to visualize complex grid scenarios.',
    impact: 'Dramatically accelerated grid planning cycles by eliminating the need to write custom Python scripts for every post-simulation exploratory analysis.',
    tech: ['Python', 'Streamlit', 'xarray', 'Pandas', 'Folium'],
    techStackDetailed: {
      'Frontend': 'Streamlit, Folium (Mapping), Plotly',
      'Data Processing': 'xarray, Pandas, NumPy',
      'Data Architecture': 'In-memory Caching, Dynamic Introspection',
      'Domain Model': 'PyPSA Multi-Dimensional netCDF (.nc)'
    },
    overview: 'Inspecting outputs from grid modeling simulations typically requires heavy scripting. This dashboard ingests PyPSA netCDF files and dynamically introspects the network components. It uses optimized Streamlit caching and `xarray` to handle large multi-dimensional datasets smoothly. Planners can visualize generation mixes, map network bottlenecks geospatially via Folium, and instantly compare different simulation scenarios side-by-side.',
    features: [
      '**Dynamic Data Introspection**: Automatically parses uploaded PyPSA datasets, extracting components, load series, and cost metrics without boilerplate code.',
      '**Geospatial Network Mapping**: Renders interactive Folium maps of the electrical grid, detailing buses, lines, and generation assets physically.',
      '**Advanced Time-Series Transformations**: Empowers users to instantly toggle between cumulative and instantaneous data, leveraging efficient Pandas grouping.',
      '**Side-by-Side Scenario Analysis**: Evaluates multiple simulation runs interactively, streamlining the comparison of grid decarbonization strategies.'
    ],
    heroImage: pypsaResultsHome,
    gallery: [pypsaResultsHome, pypsaResultsP1, pypsaResultsP2, pypsaResultsP3, pypsaResultsP4],
    links: {}
  },
  {
    id: 'postgres-console',
    title: 'Postgres Console',
    role: 'Data Tools Engineer',
    duration: '2025',
    summary: 'A lightweight, zero-installation web SQL client providing secure database exploration, schema inspection, and in-memory data extraction capabilities.',
    impact: 'Streamlined ad-hoc data requests and database administration by providing immediate, secure browser access to cloud-native PostgreSQL environments.',
    tech: ['Python', 'Streamlit', 'SQLAlchemy', 'Pandas', 'PostgreSQL'],
    techStackDetailed: {
      'Frontend': 'Streamlit',
      'Database Engine': 'SQLAlchemy, pg8000, PostgreSQL',
      'Data Pipeline': 'Pandas, io.BytesIO (In-Memory Processing)',
      'Security': 'SSL Contexts, Safe Subquery Wrapping'
    },
    overview: 'Postgres Console serves as an immediate, read/write-capable dashboard to manage databases directly from the browser, avoiding the friction of desktop clients. Designed with cloud-native DBs (like Neon) in mind, it uses SQLAlchemy and the pg8000 driver with explicit SSL handling. It carefully balances data access and database health by wrapping interactive preview queries in safety limits, while offering a completely separate Pandas-driven extraction pipeline for massive CSV and Excel downloads.',
    features: [
      '**Cloud-Native Compatibility**: Robust connection pooling managed by SQLAlchemy, explicitly designed to handle secure SSL contexts for serverless databases.',
      '**Dynamic Schema Explorer**: Auto-generates interactive metadata views allowing engineers to inspect columns, types, and table structures instantly.',
      '**Safe Query Execution**: Wraps raw user queries into safe subqueries to enforce row limits, protecting database performance during ad-hoc exploration.',
      '**In-Memory File Extraction**: Processes massive CSV and Excel exports entirely in RAM using Pandas and BytesIO, supporting stateless cloud deployments.'
    ],
    heroImage: postgresConsoleHome,
    gallery: [postgresConsoleHome],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/postgres-console',
      github: 'https://github.com/vaijayanth-sheri/Project_postgres_console'
    }
  },
  {
    id: 'open-energy-grid-explorer',
    title: 'Open Energy Grid Explorer',
    role: 'Full-Stack Developer',
    duration: '2025',
    summary: 'A full-stack digital twin for visualizing urban electrical distribution networks, featuring dynamic simulation of topological RMU switching and load aggregation.',
    impact: 'Demonstrated complex power system logic and real-time data streaming capabilities without relying on heavy SCADA overhead or proprietary software.',
    tech: ['React', 'FastAPI', 'Leaflet', 'Python'],
    techStackDetailed: {
      'Frontend': 'React, Vite, Tailwind CSS, Leaflet, Recharts',
      'Backend Simulation': 'FastAPI, Python 3.10+, Asyncio',
      'Data Modeling': 'In-memory Deque Buffers, Network Graph Traversal'
    },
    overview: 'The Open Energy Grid Explorer is an interactive digital twin that maps a multi-layer urban grid (High, Medium, and Low voltage) over Munich. Rather than just displaying static mock data, it is backed by an asynchronous FastAPI engine that calculates structural power distribution logic bottom-up. The continuous 5-second simulation loop models diurnal consumer demand, elastically balances generation, and responds dynamically to user-triggered topological network changes.',
    features: [
      '**Continuous Simulation Engine**: Asynchronous Python backend calculating dynamic power flows (V, I, P, Q) across multiple voltage layers every 5 seconds.',
      '**Interactive Network Switching**: Allows users to dynamically toggle Ring Main Units (RMUs), visually propagating structural changes throughout the grid topology.',
      '**Performant Data Buffering**: Employs Python deque structures for memory-efficient rolling time-series logs, streaming seamless metrics to the React frontend.',
      '**Hierarchical Grid Visualization**: Implements custom Leaflet polyline rendering to enforce strict structural realism across HV, MV, and LV architectures.'
    ],
    heroImage: gridExplorerHome,
    gallery: [gridExplorerHome],
    links: {}
  },
  {
    id: 'inverter-optimizer',
    title: 'Solar Inverter Optimizer',
    role: 'Energy Systems Engineer',
    duration: '2025',
    summary: 'An engineering tool that digitalizes PV system design by automatically validating string configurations against temperature-adjusted hardware limits.',
    impact: 'Dramatically reduced PV design risk by automating the calculation of safe MPPT operating bounds and estimating expected clipping losses instantly.',
    tech: ['Python', 'Streamlit', 'pvlib', 'Pandas', 'Plotly'],
    techStackDetailed: {
      'Sizing Engine': 'Python (Mathematical Constraint Solver)',
      'Simulation': 'pvlib (ModelChain, PVWatts Models)',
      'Data Integration': 'PVGIS API (Typical Meteorological Year)',
      'Visualization': 'Plotly, Streamlit'
    },
    overview: 'Configuring solar inverters requires a delicate balance of string length constraints, extreme temperature voltage limits, and target AC/DC ratios. This application completely automates the validation process. The Python core calculates cold/hot voltage limits and executes a constraint solver to rank feasible hardware matches. To prove the economic viability of the chosen hardware, it fetches local TMY data and runs an annual yield simulation to quantify any clipping losses explicitly.',
    features: [
      '**Automated Sizing Engine**: Dynamically calculates optimal string lengths bounded by hardware MPPT limits and rigorous temperature coefficients.',
      '**Intelligent Hardware Matching**: Algorithmically ranks feasible inverter topologies based on electrical safety, optimal ratios, and module compatibility.',
      '**Continuous Yield Simulation**: Constructs a pvlib ModelChain utilizing fetched TMY weather data to predict annual output and precise clipping losses.',
      '**Transparent Engineering Logic**: Generates auditable CSV reports and explainable rationales behind each recommendation to build trust with technical users.'
    ],
    heroImage: inverterHome,
    gallery: [inverterHome, inverterP1, inverterP2],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/Project-inverter-sizing',
      github: 'https://github.com/vaijayanth-sheri/Project_inverter_sizing'
    }
  }
];