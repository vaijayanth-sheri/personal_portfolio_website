import solarOps360Img from '/media/solarOps360/header.png';
import solarOps360P1 from '/media/solarOps360/page-1.png';
import solarOps360P2 from '/media/solarOps360/page-2.png';

export const labData = [
  {
    id: 'solar-ops-360',
    title: 'SolarOps360: Unified Solar Planning Platform',
    status: 'In Development',
    role: 'Product Architect & Lead Developer',
    duration: 'Ongoing',
    oneLiner: 'A modular, unified digital twin blueprint for end-to-end solar PV project lifecycle management.',
    impact: 'Consolidates highly siloed solar engineering workflows—feasibility, energy modeling, finance, and live IoT monitoring—into a cohesive digital twin platform.',
    tech: ['Python', 'Streamlit', 'Dash', 'PVLib', 'Modbus'],
    techStackDetailed: {
      'Frontend': 'Modular Python (Streamlit & Dash Prototypes)',
      'Backend Logic': 'PVLib (Simulation), Custom Financial & Loss Models',
      'Data Integration': 'PVGIS, Open-Meteo, SCADA/IoT (pyModbusTCP)',
      'Architecture': 'Decoupled UI & Logic, Centralized Configuration Registries'
    },
    overview: 'SolarOps360 is an ambitious architectural blueprint and functional prototype designed to serve as a "single pane of glass" for solar project lifecycle management. Recognizing the heavy fragmentation in the renewable sector, this platform unifies site feasibility mapping, high-fidelity energy modeling, complex financial payback calculations, and real-time SCADA monitoring. The application is strictly modular, separating business logic from UI, enabling a scalable pathway to enterprise-grade asset management.',
    features: [
      '**Modular System Architecture**: Configured 14 distinct engineering modules, seamlessly decoupling UI logic from core solar physics and financial algorithms.',
      '**Advanced Yield & Financial Engine**: Integrates PVLib and PVGIS to model performance ratios, degradation, and LCOE/ROI metrics across a 25-year lifecycle.',
      '**IoT & SCADA Integration**: Architected real-time data pipelines to ingest Modbus/MQTT telemetry for predictive maintenance and fault detection.',
      '**End-to-End Product Ownership**: Guided by a comprehensive Product Requirements Document (PRD), bridging hard power system domain knowledge with full-stack software design.'
    ],
    heroImage: solarOps360Img,
    gallery: [solarOps360P1, solarOps360P2],
    links: { },
  },
];