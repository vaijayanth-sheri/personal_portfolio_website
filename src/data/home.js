import solarOps360Img from '/media/solarOps360/header.png';
import solarAutoImg from '/media/Solar auto layout/home.png';
import paccemImg from '/media/PACCEM/header.png';
import gridawareImg from '/media/Projet_Gridaware/header.png';
import resimImg from '/media/hybrid_digital_twin/header.png';

import workflowHomeImg from '/media/Jupyter Workflow manager/home.png';
import plotHomeImg from '/media/Visual plot builder for Jupyter/home.png';

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
            id: "solar-autolayout",
            name: "Solar AutoLayout",
            oneLiner: "Modular full-stack platform for automated PV system design.",
            problem: "Manual PV planning is slow and requires technical expertise for geometric and energy calculations.",
            approach: "Built a Next.js + FastAPI system with a GIS layout engine, Shapely-driven constraints, and PVGIS API integration.",
            output: "Engineering suite: CAD-ready DXF layouts, PDF reports, and location-aware energy KPIs.",
            demo: "#",
            repo: "https://github.com/vaijayanth-sheri/Solar_AutoLayout",
            screenshot: solarAutoImg,
        },
        {
            id: "workflow-mgr",
            name: "Workflow Manager",
            oneLiner: "Workflow-first abstraction layer for VS Code & Jupyter.",
            problem: "Iterative AI coding in notebooks leads to fragmented logic and constant environment restarts.",
            approach: "Engineered a versioned step-system with smart code injection and file-based state mapping.",
            output: "Extension: versioned logic blocks, script reconstruction, and structured AI-assisted workflows.",
            demo: "#",
            repo: "https://github.com/vaijayanth-sheri/Jupyter_workflow_manager",
            screenshot: workflowHomeImg,
        },
        {
            id: "plot-builder",
            name: "Visual Plot Builder",
            oneLiner: "Production-grade UI for automated Python plotting code generation.",
            problem: "Manual plotting code is repetitive, inconsistent, and slows down exploratory data analysis.",
            approach: "Built a React webview using a strategy pattern to generate multi-library (Matplotlib/Seaborn) code directly from live kernels.",
            output: "Extension: visual config UI, runtime metadata inspection, and execution-ready code injection.",
            demo: "#",
            repo: "https://github.com/vaijayanth-sheri/Jupyter_plot_helper",
            screenshot: plotHomeImg,
        },
        {
            id: "paccem",
            name: "PacCEM",
            oneLiner: "GUI-driven capacity expansion platform built on PyPSA for non-programming planners.",
            problem: "Energy planners in weak grids lack accessible tools to run capacity expansion scenarios without writing code.",
            approach: "Wrapped PyPSA in a Streamlit interface with config-driven network construction, solver integration, and reproducible outputs.",
            output: "Desktop platform: scenario planner, dispatch visualizer, automated NetCDF reporting.",
            demo: "[TODO: add URL]",
            repo: "https://github.com/vaijayanth-sheri",
            screenshot: paccemImg,
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
            screenshot: gridawareImg,
        },
    ],

    labProjects: [
        {
            id: "solar-ops-360",
            name: "SolarOps360",
            oneLiner: "Advanced solar monitoring & planning platform (Lab Stage).",
            problem: "Fragmented tools for PV lifecycle management lead to data silos and simulation inconsistencies.",
            approach: "Developing a unified React+Supabase ecosystem with modular simulation and financial layers.",
            output: "Lab prototype: expert-level plant configuration, IRR/LCOE modeling, and SCADA-ready architecture.",
            demo: "#",
            repo: "#",
            screenshot: solarOps360Img,
            isLab: true,
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
