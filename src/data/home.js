export const homeData = {
    hero: {
        name: "Vaijayanth Sheri",
        title: "Energy Systems Engineer & Digital Product Builder",
        subheadline: "I design and ship platforms that wrap energy models into usable decision tools — configuration-driven, reproducible, built for technical users.",
        ctaPrimary: { label: "View Projects", to: "/projects" },
        ctaSecondary: { label: "Get in Touch", to: "/contact" },
    },

    proofStrip: [
        { label: "Live Demo", icon: "▶", href: "[TODO: add URL]" },
        { label: "GitHub Repo", icon: "⌨", href: "https://github.com/vaijayanth-sheri" },
        { label: "Case Study", icon: "📄", href: "[TODO: add page]" },
        { label: "Dashboard Screenshot", icon: "🖥", href: "[TODO: add image]" },
    ],

    selectedWork: [
        {
            id: "paccem",
            name: "PacCEM",
            oneLiner: "GUI-driven capacity expansion platform built on PyPSA for non-programming planners.",
            problem: "Energy planners in weak grids lack accessible tools to run capacity expansion scenarios without writing code.",
            approach: "Wrapped PyPSA in a Streamlit interface with config-driven network construction, solver integration, and reproducible outputs.",
            output: "Desktop platform: scenario planner, dispatch visualizer, automated NetCDF reporting.",
            demo: "[TODO: add URL]",
            repo: "https://github.com/vaijayanth-sheri",
            writeup: "[TODO: add page]",
            screenshot: "[TODO: add screenshot]",
        },
        {
            id: "gridaware",
            name: "GridAware",
            oneLiner: "Real-time EV charging optimizer using live electricity market data.",
            problem: "EV owners have no simple way to find the cheapest charging window from volatile hourly prices.",
            approach: "Built a fault-tolerant Dash dashboard that fetches live Awattar API data and runs a rolling-window optimization algorithm.",
            output: "Web dashboard: price overlay, optimal window recommendation, cached fallback on API failure.",
            demo: "https://huggingface.co/spaces/Vaijayanth-sheri/gridaware",
            repo: "https://github.com/vaijayanth-sheri/GridAware-Smart-EV-Charging-Dashboard",
            writeup: "[TODO: add page]",
            screenshot: "[TODO: add screenshot]",
        },
        {
            id: "re-sim",
            name: "Hybrid Digital Twin",
            oneLiner: "Interactive simulator modeling Solar+Wind+Battery dynamics with live weather data.",
            problem: "Students and planners struggle to grasp how intermittent renewables interact with storage under real conditions.",
            approach: "Built a Streamlit simulator using OpenWeatherMap API data with battery physics (SOC limits, round-trip efficiency).",
            output: "Educational dashboard: live generation charts, system isolation toggles, real-time energy balance.",
            demo: "https://huggingface.co/spaces/Vaijayanth-sheri/project-hybrid-digital-twin",
            repo: "https://github.com/vaijayanth-sheri/Project_Hybrid_Digital_Twin",
            writeup: "[TODO: add page]",
            screenshot: "[TODO: add screenshot]",
        },
    ],

    capabilityGrid: [
        { icon: "⚡", title: "Energy Modeling", tools: "PyPSA · Capacity Expansion · Scenario Design" },
        { icon: "☀", title: "Renewables Simulation", tools: "PVLib · Windpowerlib · Yield Analysis" },
        { icon: "🗄", title: "Data Engineering", tools: "PostgreSQL · ETL · Schema Logic · Pandas" },
        { icon: "🔁", title: "Reproducible Pipelines", tools: "Config-Driven · NetCDF · YAML · Version Pinning" },
        { icon: "📊", title: "Decision UX", tools: "Dashboards · Cognitive Load · Decision Clarity" },
        { icon: "🖥", title: "UI Tooling", tools: "Streamlit · PyQt · Technical Workflows" },
        { icon: "🗺", title: "Geospatial", tools: "Geopandas · Folium · Location Analysis" },
        { icon: "📋", title: "Reporting", tools: "Automated Reports · PDF Generation · Audit Trails" },
    ],

    howIWork: [
        { step: "01", title: "Frame", description: "Define the decision, constraints, and data landscape." },
        { step: "02", title: "Build", description: "Construct and validate the model and data pipeline." },
        { step: "03", title: "Wrap", description: "Package into a usable UI, dashboard, or automation." },
        { step: "04", title: "Document", description: "Deliver with PRD, README, config, and handover." },
    ],

    stackStrip: [
        "PyPSA", "PVLib", "Windpowerlib", "Demandlib", "linopy",
        "xarray", "geopandas", "PostgreSQL", "Streamlit", "PyQt",
        "Pandas", "Plotly", "NetCDF", "YAML",
    ],

    collaboration: {
        title: "Ways We Can Collaborate",
        description: "I build platforms for energy modeling, simulation, and decision support. If you have a technically meaningful problem in the energy sector — from capacity planning to data pipeline automation — I am ready to work on it.",
        ctaLabel: "Start a Conversation",
        ctaTo: "/contact",
    },
};
