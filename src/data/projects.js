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
import gridawarePage3 from '/media/Projet_Gridaware/page-3.png';

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

import windLibGuiImg from '/media/WindLib_GUI/header.png';
import windLibGuiPage1 from '/media/WindLib_GUI/page-1.png';
import windLibGuiPage2 from '/media/WindLib_GUI/page-2.png';

import workflowHomeImg from '/media/Jupyter Workflow manager/home.png';
import workflowP1 from '/media/Jupyter Workflow manager/page 1.png';
import workflowP2 from '/media/Jupyter Workflow manager/page 2.png';

import plotHomeImg from '/media/Visual plot builder for Jupyter/home.png';
import plotP1 from '/media/Visual plot builder for Jupyter/page 1.png';


export const projectsData = [
  {
    id: 'solar-autolayout',
    title: 'Solar AutoLayout & Energy Estimation',
    role: 'Full-Stack Developer | System Architect',
    duration: '2026',
    summary: 'A full-stack web application that automates solar PV system design using GIS-based map inputs or rooftop images. Features a modular layout engine, integrated energy modeling via PVGIS, and multi-format engineering exports.',
    impact: 'Reduced manual effort in solar layout planning from hours to minutes, enabling rapid engineering-grade PV design.',
    tech: ['Next.js', 'FastAPI', 'Shapely', 'Leaflet', 'PVGIS API'],
    techStackDetailed: {
      'Frontend': 'Next.js, TypeScript, Tailwind CSS, Zustand',
      'Backend': 'FastAPI (Python), Shapely, Pandas',
      'Geospatial': 'Leaflet, Leaflet Draw, PyProj',
      'Export': 'ezdxf (CAD), ReportLab (PDF), Pillow (PNG)'
    },
    overview: 'Solar AutoLayout is designed to streamline the complex process of photovoltaic system planning. By separating the UI from the heavy geometry computation, it allows users to precisely define installation areas on maps or images. The tool then automatically places panels while respecting real-world constraints like thermal gaps and edge clearances, providing immediate energy yield KPIs.',
    features: [
      '**Automated Layout Engine**: Grid-based panel placement with obstacle handling and orientation optimization.',
      '**Dual Input Modes**: GIS-based planning on interactive maps or calibrated image-based layouts.',
      '**Energy Yield Modeling**: Integrated PVGIS API for location-specific annual and monthly generation estimates.',
      '**Professional Export Suite**: One-click generation of CAD-ready DXF files and PDF engineering reports.'
    ],
    heroImage: solarAutoImg,
    gallery: [solarAutoP1, solarAutoP2],
    links: { github: 'https://github.com/vaijayanth-sheri/Solar_AutoLayout' }, // Assuming name from context
  },
  {
    id: 'paccem',
    title: 'PacCEM: Capacity Expansion GUI',
    role: 'Lead Full-Stack Developer',
    duration: 'Aug 2025 – Oct 2025',
    summary: 'A desktop GUI leveraging PyPSA to make complex power system modeling accessible to non-coders. Enables offline, reproducible scenarios for utilities and researchers.',
    impact: 'Reduced reliance on external consultants and lowered barrier to entry for energy modeling.',
    tech: ['Python', 'Streamlit', 'PyPSA', 'Plotly', 'SQLite'],
    techStackDetailed: {
      'Core': 'Python, PyPSA (0.35.2), Pyomo',
      'Frontend': 'Streamlit',
      'Optimization': 'HiGHS, CBC, Gurobi solvers',
      'Data': 'SQLite, NetCDF, Pandas',
      'Viz': 'Plotly Express, Folium'
    },
    overview: 'PacCEM is a specialized desktop GUI application designed to democratize complex power system capacity expansion and dispatch modeling. By wrapping the powerful PyPSA framework in a user-friendly interface, it allows non-programming stakeholders—such as utility planners, regulators, and researchers—to run sophisticated scenarios without writing a single line of code. The tool ensures transparency, reproducibility, and offline capability, crucial for secure and independent energy planning in small or weak electricity grids.',
    features: [
      '**No-Code Scenario Planning**: Define network topology, CO2 caps, and renewable targets via interactive forms.',
      '**Dynamic Network Construction**: Automatically builds PyPSA networks including buses, lines, and storage from user inputs.',
      '**Advanced Visualization**: Interactive Plotly charts for hourly dispatch, capacity mix, and cost breakdowns.',
      '**Automated Reporting**: Generates comprehensive simulation reports and NetCDF output files for full auditability.'
    ],
    heroImage: paccemImg,
    gallery: [
      paccemPage1,
      paccemPage2
    ],
    links: { github: 'https://github.com/vaijayanth-sheri' }, // Placeholder for master thesis code if specific repo not listed
  },
  {
    id: 'gridaware',
    title: 'GridAware: Smart EV Charging',
    role: 'Full-Stack Developer',
    duration: 'July 2025',
    summary: 'Real-time dashboard optimizing EV charging costs in Germany by fetching hourly prices (Awattar API) and recommending the cheapest charging windows.',
    impact: 'Demonstrates data-driven cost minimization and fault-tolerant API integration.',
    tech: ['Python', 'Dash', 'Pandas', 'Plotly', 'REST APIs'],
    techStackDetailed: {
      'Framework': 'Dash (Plotly)',
      'Backend': 'Python, Pandas',
      'API': 'Awattar DE Market REST API',
      'State': 'Browser-side via dcc.Store',
      'Algorithm': 'Rolling-window time-series optimization'
    },
    overview: 'GridAware is a fully functional web dashboard that empowers electric vehicle owners to minimize charging costs by leveraging dynamic electricity tariffs. By integrating with real-time market data APIs, it identifies the optimal, lowest-cost charging windows for a target state-of-charge. The project emphasizes fault tolerance, data transparency, and a clean user experience for navigating volatile energy prices.',
    features: [
      '**Real-Time Price Fetching**: Live integration with Awattar DE API for hourly market rates.',
      '**Cost Optimization Engine**: Rolling-window algorithm to find the single cheapest continuous charging block.',
      '**Interactive Visual Overlay**: Intuitive chart overlays showing exactly when to plug in relative to price spikes.',
      '**Fault Tolerance**: Caching system to handle API outages gracefully without breaking the user experience.'
    ],
    heroImage: gridawareImg,
    gallery: [
      gridawarePage1,
      gridawarePage2,
      gridawarePage3
    ],
    links: {
      demo: 'https://huggingface.co/spaces/Vaijayanth-sheri/gridaware',
      github: 'https://github.com/vaijayanth-sheri/GridAware-Smart-EV-Charging-Dashboard'
    },
  },
  {
    id: 'pv-invest',
    title: 'PV-Invest Financial Dashboard',
    role: 'Financial Data Analyst',
    duration: 'July 2025',
    summary: 'Interactive tool for assessing financial viability of hybrid Solar+EV projects. Generates cash flow analysis, NPV/IRR metrics, and professional PDF reports.',
    impact: 'Replaces complex spreadsheets with a transparent, swift decision-support interface.',
    tech: ['Python', 'Dash', 'Financial Modeling', 'WeasyPrint'],
    techStackDetailed: {
      'Framework': 'Dash',
      'Finance': 'NumPy-Financial',
      'PDF Gen': 'WeasyPrint, Jinja2',
      'Modeling': 'CAPEX/OPEX logic, Depreciation schedules'
    },
    overview: 'PV-Invest transforms complex financial feasibility studies for Solar+EV projects into a streamlined, interactive workflow. It allows developers and analysts to model 20-30 year project lifecycles, calculating key investment metrics like NPV, IRR, and payback periods instantly. Uniquely, it includes a robust PDF generation engine to produce client-ready reports directly from the dashboard views.',
    features: [
      '**Comprehensive Financial Engine**: Calculates depreciation, loan interest, tax shields, and inflation-adjusted OPEX.',
      '**Dynamic Cash Flow**: Year-by-year waterfall charts and detailed data tables.',
      '**Professional Reporting**: One-click generation of polished, multi-page PDF reports using WeasyPrint.',
      '**Scenario Comparison**: Quickly toggle between different tariff structures and system costs.'
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
    role: 'Product Developer',
    duration: 'July 2025',
    summary: 'Web-based planning assistant allowing users to draw rooftops on live maps, estimate PV generation, and size battery/EV systems with ROI calculations.',
    impact: 'Simplified complex energy planning for homeowners without compromising technical rigor.',
    tech: ['Streamlit', 'Folium', 'PVGIS API', 'Geospatial Analysis'],
    techStackDetailed: {
      'Frontend': 'Streamlit',
      'Mapping': 'Folium, OpenStreetMap',
      'Data': 'PVGIS API, Geopy',
      'Modeling': 'System Sizing Logic, ROI Calculator'
    },
    overview: 'The Solar + EV Configurator bridges the gap between rough online calculators and professional engineering tools. It allows users to actively draw their rooftop area on a map to get precise, location-based solar yield estimates. The tool then layers on EV charging requirements and battery storage options to provide a holistic "energy independence" score and financial return estimate.',
    features: [
      '**Interactive Map Drawing**: Draw roof polygons to calculate usable area and system size automatically.',
      '**Location-Aware Yield**: Fetches real solar irradiance data for the specific coordinates via PVGIS.',
      '**Integrated EV Planning**: Models driving needs (km/day) to right-size both solar and battery systems.',
      '**Modular Architecture**: Designed for plug-and-play addition of new battery models or tariff schemas.'
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
    role: 'Project Lead',
    duration: 'April 2024 – July 2024',
    summary: 'No-code interface for generating valid PyPSA Python scripts. Streamlines network model creation and reduces manual coding errors.',
    impact: 'Reduced model setup time by over 60% and ensured 100% code generation accuracy.',
    tech: ['Python', 'Streamlit', 'Jinja2', 'PyPSA'],
    techStackDetailed: {
      'Framework': 'Streamlit',
      'Templating': 'Jinja2',
      'Validation': 'Pydantic (logic-based)',
      'Domain': 'PyPSA Components (Bus, Link, Generator)'
    },
    overview: 'The PyPSA Code Generator addresses the steep learning curve of coding energy models from scratch. It provides a visual, form-based interface where users define grid components (buses, lines, generators) and the tool physically writes the error-free Python code required to run that model. It acts as a bridge for students and engineers moving from concept to code.',
    features: [
      '**Component-Based UI**: Dedicated forms for every major PyPSA element.',
      '**Real-Time Code Preview**: See the Python code generate instantly as you adjust parameters.',
      '**Smart Validation**: Prevents common logical errors before they reach the code level.',
      '**Seamless Export**: Copy-paste ready code blocks compatible with Jupyter Notebooks.'
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
    title: 'Automated Research Agent',
    role: 'Automation Architect',
    duration: 'June 2025',
    summary: 'Autonomous no-code tool performing robust company research. Scrapes web content, structuring insights via AI (Gemini Pro) into Google Sheets.',
    impact: 'Transforms manual multi-page research into a one-click automated workflow.',
    tech: ['Make.com', 'Gemini Pro', 'ScrapingBee', 'Google Sheets'],
    techStackDetailed: {
      'Orchestration': 'Make.com',
      'AI Model': 'Google Gemini Pro',
      'Scraping': 'ScrapingBee API',
      'Database': 'Google Sheets'
    },
    overview: 'This project automates the tedious phase of initial market research. Given a company URL, the agent autonomously navigates the site, extracts key content, and uses an LLM (Gemini Pro) to structure unstructured text into a clean data format (Founders, Value Prop, Tech Stack). It demonstrates the power of combining no-code pipelines with high-code AI endpoints.',
    features: [
      '**Autonomous Scraping**: Handles navigation and content extraction robustly.',
      '**AI Structuring**: Converts raw "About Us" text into structured JSON fields.',
      '**Zero-Touch Logging**: Direct integration with Google Sheets for building databases progressively.',
      '**Cost-Effective Architecture**: Built entirely on robust free-tier APIs.'
    ],
    heroImage: 'https://placehold.co/1200x600/3e2723/FFF?text=Automation+Workflow',
    gallery: [
      'https://placehold.co/800x500/3e2723/FFF?text=Make.com+Pipeline',
      'https://placehold.co/800x500/3e2723/FFF?text=Output+Sheet'
    ],
    links: { github: '#' },
  },
  {
    id: 'appthamitra',
    title: 'AppthaMitra: AgriTech Marketplace',
    role: 'Product Designer',
    duration: 'Apr 2025 – May 2025',
    summary: 'A multilingual, mobile-first marketplace connecting farmers directly with consumers. Features geolocation search, live listings, and community knowledge sharing.',
    impact: 'Designed to reduce post-harvest losses and eliminate middlemen in agricultural supply chains.',
    tech: ['Figma', 'UX Research', 'Prototyping', 'AgriTech'],
    techStackDetailed: {
      'Design': 'Figma, Wireframing',
      'Research': 'User Personas, Journey Maps',
      'Features': 'Geolocation, Multilingual Support',
      'Domain': 'Sustainable Agriculture'
    },
    overview: 'AppthaMitra is a concept-to-prototype design for a hyperlocal agricultural marketplace. It addresses the systemic inefficiencies in food supply chains by enabling farmers to list produce directly for nearby consumers. The UX focuses on accessibility for semi-literate users through voice commands, visual icons, and regional language support, fostering trust and community resilience.',
    features: [
      '**Live Food Map**: GPS-based discovery of local farmers with available produce.',
      '**Voice-First Interaction**: Accessible design patterns for rural user bases.',
      '**Knowledge Hub**: Community forum for agronomic tips and market prices.',
      '**Dual User Flows**: Distinct, optimized journeys for Producers (selling) and Consumers (buying).'
    ],
    heroImage: 'https://placehold.co/1200x600/558b2f/FFF?text=AppthaMitra+UX',
    gallery: [
      'https://placehold.co/800x500/558b2f/FFF?text=User+Flow+Map',
      'https://placehold.co/800x500/558b2f/FFF?text=Mobile+Screens'
    ],
    links: { demo: 'https://www.behance.net/vaijayanth_sheri' },
  },
  {
    id: 're-sim',
    title: 'Interactive RE Simulator',
    role: 'Energy Systems Modeler',
    duration: 'Jun 2025 – Jul 2025',
    summary: 'Educational dashboard simulating a hybrid Solar-Wind-Battery system. Uses live weather data to demonstrate energy flow dynamics.',
    impact: 'Demystifies complex hybrid system behaviors for students and planners.',
    tech: ['Streamlit', 'OpenWeatherMap', 'System Dynamics'],
    techStackDetailed: {
      'Framework': 'Streamlit',
      'Data': 'OpenWeatherMap API',
      'Logic': 'Energy Balance & SOC Tracking',
      'Viz': 'Real-time Line Charts'
    },
    overview: 'Designed as an educational tool, this simulator models the interplay between intermittent renewables (Solar, Wind) and firming assets (Batteries). By using live weather data for the user’s location, it provides an immediate, tangible understanding of "energy droughts" and the necessity of storage, making abstract grid concepts personal and understandable.',
    features: [
      '**Hybrid Logic**: Simulates simultaneous generation from PV and Wind sources.',
      '**Live Weather Intercept**: Runs the model based on current local conditions.',
      '**Battery Physics**: Includes round-trip efficiency and state-of-charge limits.',
      '**Educational Toggles**: Isolate systems to see individual contributions vs. combined output.'
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
    title: 'PVLib Data Generator GUI',
    role: 'Open Source Contributor',
    duration: '2024',
    summary: 'A Streamlit-based graphical interface for the PVLib Python library, enabling users to generate solar energy data without coding.',
    impact: 'Makes advanced solar modeling accessible to researchers and students/engineers.',
    tech: ['Python', 'Streamlit', 'PVLib', 'Pandas'],
    techStackDetailed: {
      'Frontend': 'Streamlit',
      'Core': 'PVLib Python',
      'Data Processing': 'Pandas, NumPy',
      'Visualization': 'Matplotlib'
    },
    overview: 'The PVLib Data Generator GUI provides a user-friendly layer on top of the powerful PVLib python library. It allows users to simulate photovoltaic energy systems, calculate irradiance, and generate performance data through simple form-based inputs, removing the need to write complex Python scripts for standard modeling tasks.',
    features: [
      '**No-Code Simulation**: Run standard PVLib models via a web interface.',
      '**Location Selection**: Easy coordinate input for site-specific data.',
      '**Data Visualization**: Instant plotting of generation profiles.',
      '**Export Capabilities**: Download results as CSV for further analysis.'
    ],
    heroImage: pvlibGuiImg,
    gallery: [
      pvlibGuiPage1,
      pvlibGuiPage2
    ],
    links: {
      demo: 'https://pvlibdatageneratorgui-nhqbws6dkwrgp8ach48idz.streamlit.app/',
      github: 'https://github.com/vaijayanth-sheri/PVLib_data_generator_GUI'
    },
  },
  {
    id: 'windpowerlib-gui',
    title: 'Windpowerlib Dashboard',
    role: 'Open Source Contributor',
    duration: '2024',
    summary: 'An interactive dashboard for the Windpowerlib Python library, facilitating wind turbine energy simulation and data analysis.',
    impact: 'Simplifies wind energy modeling workflows for educational and preliminary assessment purposes.',
    tech: ['Python', 'Streamlit', 'Windpowerlib', 'Matplotlib'],
    techStackDetailed: {
      'Frontend': 'Streamlit',
      'Core': 'Windpowerlib',
      'Data': 'Pandas',
      'Viz': 'Matplotlib, Seaborn'
    },
    overview: 'This dashboard wraps the Windpowerlib library into an accessible web application. It enables users to model the power output of wind turbines using various weather data sets and turbine characteristics. Ideally suited for rapid prototyping and educational demonstrations of wind energy principles.',
    features: [
      '**Turbine Database**: Select from a library of standard turbine models.',
      '**Weather Data Integration**: Upload or input weather data for simulation.',
      '**Power Curve Analysis**: Visualize turbine power curves and output.',
      '**Simplified Workflow**: Streamlines the setup of wind power simulations.'
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
    role: 'Full-Stack Extension Engineer',
    duration: '2026',
    summary: 'A VS Code extension introducing a workflow-first abstraction layer for iterative code generation in Jupyter, bridging the gap between AI-generated code and systematic engineering.',
    impact: 'Eliminates structure loss during iterative development and improves reproducibility of AI-assisted workflows.',
    tech: ['TypeScript', 'VS Code API', 'Node.js', 'Python'],
    techStackDetailed: {
      'Extension': 'TypeScript, VS Code Extension API',
      'Logic': 'Workflow Abstraction Layer, State Management',
      'Storage': 'Local JSON (.workflow.json)',
      'Integration': 'File-aware context switching, Smart code injection'
    },
    overview: 'Jupyter Workflow Manager solves the fragmentation problem in AI-assisted coding by treating problem-solving steps as the primary unit of development. It allows engineers to define structured workflows, maintain multiple versions per step, and dynamically reconstruct scripts without losing previous iterations or restarting notebooks.',
    features: [
      '**Step-Based Workflow System**: Modularize complex tasks into independent, versioned steps.',
      '**Version Control per Step**: Track multiple AI-generated implementations for every logic block.',
      '**Smart Code Injection**: Automatically update notebook cells or scripts via a marker-based system.',
      '**Local-First Privacy**: Ensures all workflow data remains local to the project directory.'
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
    summary: 'Production-grade VS Code extension for generating production-quality Python plotting code through a visual interface, unifying multiple visualization libraries.',
    impact: 'Reduces time spent on repetitive plotting tasks and improves code consistency across data analysis workflows.',
    tech: ['TypeScript', 'React', 'Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    techStackDetailed: {
      'Frontend': 'React-based Webview',
      'Backend': 'VS Code Jupyter API, Python Bridge',
      'Code Gen': 'Strategy Pattern for multi-library support',
      'Execution': 'Runtime kernel execution for DataFrame inspection'
    },
    overview: 'This extension bridges the gap between UI-driven exploration and code-centric workflows. It enables users to configure complex plots visually—selecting dataframes, axes, and libraries—while generating clean, reusable Python code that is injected directly into their Jupyter environment.',
    features: [
      '**Notebook-Aware Data Interaction**: Dynamically detects active kernels and inspects live DataFrames.',
      '**Multi-Library Support**: Generates code for Matplotlib and Seaborn using a unified interface.',
      '**Strategy-Based Code Gen**: Produces production-quality fig/ax patterns with proper labeling.',
      '**Zero-Manual Adjustment**: Injected code is execution-ready with legends and titles pre-configured.'
    ],
    heroImage: plotHomeImg,
    gallery: [plotP1],
    links: { github: 'https://github.com/vaijayanth-sheri/Jupyter_plot_helper' },
  },
];