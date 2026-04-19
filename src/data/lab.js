import solarOps360Img from '/media/solarOps360/header.png';
import solarOps360P1 from '/media/solarOps360/page-1.png';
import solarOps360P2 from '/media/solarOps360/page-2.png';

export const labData = [
  {
    id: 'solar-ops-360',
    title: 'SolarOps360',
    status: 'In Development',
    role: 'Product Architect | Full-Stack Developer',
    duration: 'Ongoing',
    oneLiner: 'Integrated solar plant monitoring & planning platform.',
    impact: 'Building a unified digital twin foundation for the next generation of solar plant lifecycle management.',
    tech: ['React', 'Supabase', 'PVLib', 'Python'],
    techStackDetailed: {
      'Frontend': 'React-based Dashboard',
      'Backend': 'Supabase (PostgreSQL, Auth, Edge Functions)',
      'Modeling': 'PVLib (planned), Time-series processing',
      'Finance': 'LCOE, IRR, Payback modeling'
    },
    overview: 'SolarOps360 represents an ongoing effort to build a next-generation solar planning and monitoring platform. Designed as a lightweight, accessible alternative to complex commercial tools, it combines engineering rigor with a modern, user-centric interface. The platform supports the entire lifecycle from end-to-end management to time-series performance tracking.',
    features: [
      '**Plant Configuration Engine**: Expert-level inputs for modules, inverters, and loss factors.',
      '**Weather Integration**: Planned connectivity with PVGIS and Open-Meteo for high-res irradiance data.',
      '**Energy Simulation**: High-fidelity modeling of performance ratios and specific yields.',
      '**Financial Analytics**: Integrated CAPEX/OPEX modeling with bankability metrics like LCOE and IRR.'
    ],
    heroImage: solarOps360Img,
    gallery: [solarOps360P1, solarOps360P2],
    links: { },
  },
];