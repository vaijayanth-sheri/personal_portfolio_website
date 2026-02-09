export const projectsData = [
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
    heroImage: 'https://placehold.co/1200x600/1a1a1a/FFF?text=PacCEM+GUI+Preview',
    gallery: [
      'https://placehold.co/800x500/2a2a2a/FFF?text=Dashboard+Overview',
      'https://placehold.co/800x500/2a2a2a/FFF?text=Optimization+Results',
      'https://placehold.co/800x500/2a2a2a/FFF?text=Scenario+Configuration'
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
    heroImage: 'https://placehold.co/1200x600/102a43/FFF?text=GridAware+Dashboard',
    gallery: [
      'https://placehold.co/800x500/102a43/FFF?text=Charging+Optimization',
      'https://placehold.co/800x500/102a43/FFF?text=Price+Analysis'
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
    heroImage: 'https://placehold.co/1200x600/004d40/FFF?text=PV-Invest+Analysis',
    gallery: [
      'https://placehold.co/800x500/004d40/FFF?text=Cash+Flow+Chart',
      'https://placehold.co/800x500/004d40/FFF?text=PDF+Report+Sample'
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
    heroImage: 'https://placehold.co/1200x600/e65100/FFF?text=Solar+Configurator+Map',
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
    heroImage: 'https://placehold.co/1200x600/4a148c/FFF?text=Code+Generator+UI',
    gallery: [
      'https://placehold.co/800x500/4a148c/FFF?text=Component+Form',
      'https://placehold.co/800x500/4a148c/FFF?text=Generated+Script'
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
    heroImage: 'https://placehold.co/1200x600/01579b/FFF?text=RE+Simulator',
    gallery: [
      'https://placehold.co/800x500/01579b/FFF?text=System+Overview',
      'https://placehold.co/800x500/01579b/FFF?text=Live+Generation+Chart'
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
    heroImage: 'https://placehold.co/1200x600/fbc02d/FFF?text=PVLib+GUI',
    gallery: [
      'https://placehold.co/800x500/fbc02d/FFF?text=Input+Forms',
      'https://placehold.co/800x500/fbc02d/FFF?text=Output+Graphs'
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
    heroImage: 'https://placehold.co/1200x600/0288d1/FFF?text=Windpowerlib+GUI',
    gallery: [
      'https://placehold.co/800x500/0288d1/FFF?text=Turbine+Selection',
      'https://placehold.co/800x500/0288d1/FFF?text=Simulation+Results'
    ],
    links: {
      demo: 'https://windpowerlibdatageneratorgui.streamlit.app/',
      github: 'https://github.com/vaijayanth-sheri/Windpowerlib_data_generator_GUI'
    },
  },
];