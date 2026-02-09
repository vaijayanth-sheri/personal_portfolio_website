import React from 'react';
import {
    FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaEnvelope,
    FaDocker, FaAws, FaNodeJs, FaDatabase, FaBolt, FaSolarPanel, FaWind,
    FaChartLine, FaIndustry, FaCogs, FaMapMarkedAlt, FaLeaf, FaMicrochip,
    FaLaptopCode, FaProjectDiagram, FaFilePdf, FaSearch, FaMobileAlt,
    FaCloudSun, FaNetworkWired, FaGlobe, FaChartBar, FaChartArea, FaRobot, FaTable,
    FaCodeBranch
} from 'react-icons/fa';
import {
    SiStreamlit, SiPandas, SiPlotly, SiJinja, SiFigma, SiWeasyprint, SiSqlite,
    SiVite, SiGooglesheets
} from 'react-icons/si';
import { MdOutlineDashboard, MdOutlineArchitecture, MdOutlineAutoGraph } from 'react-icons/md';
import { TbPlugConnected } from 'react-icons/tb';

const iconMap = {
    // Languages & Core
    'Python': <FaPython color="#3776AB" />,
    'React': <FaReact color="#61DAFB" />,
    'JavaScript': <FaJs color="#F7DF1E" />,
    'HTML': <FaHtml5 color="#E34F26" />,
    'CSS': <FaCss3Alt color="#1572B6" />,
    'Node.js': <FaNodeJs color="#339933" />,
    'SQL': <FaDatabase color="#4479A1" />,
    'SQLite': <SiSqlite color="#003B57" />,

    // Frameworks & Libraries
    'Streamlit': <SiStreamlit color="#FF4B4B" />,
    'Pandas': <SiPandas color="#150458" />,
    'Plotly': <SiPlotly color="#3F4F75" />,
    'Dash': <SiPlotly color="#3F4F75" />, // Reusing Plotly for Dash as they are related
    'Jinja2': <SiJinja color="#B41717" />,
    'WeasyPrint': <FaFilePdf color="#2D3748" />, // Generic print/pdf icon fallback if not available
    'PyPSA': <FaBolt color="#FFD700" />,
    'PVLib': <FaSolarPanel color="#F9A825" />,
    'Windpowerlib': <FaWind color="#81D4FA" />,
    'Matplotlib': <FaChartBar />,
    'Seaborn': <FaChartArea />,
    'Pydantic': <FaCodeBranch />,
    'Vite': <SiVite color="#646CFF" />,

    // Tools & Platforms
    'GitHub': <FaGithub />,
    'Git': <FaGithub />,
    'Docker': <FaDocker color="#2496ED" />,
    'AWS': <FaAws color="#232F3E" />,
    'Figma': <SiFigma color="#F24E1E" />,
    'Make.com': <FaCogs color="#681585" />, // Fallback as SiIntegromat/SiMake might vary in versions
    'Google Sheets': <SiGooglesheets color="#34A853" />,
    'Gemini Pro': <FaRobot color="#8E44AD" />,
    'OpenWeatherMap': <FaCloudSun color="#FF9800" />,
    'ScrapingBee': <FaGlobe />,
    'PVGIS API': <FaSolarPanel />,

    // Domain / Concepts (for capabilities)
    'DataEngineering': <FaDatabase />,
    'ETL': <MdOutlineAutoGraph />,
    'Automation': <FaCogs />,
    'Energy': <FaBolt color="#FFD700" />,
    'Solar': <FaSolarPanel color="#F9A825" />,
    'Wind': <FaWind color="#81D4FA" />,
    'Simulation': <MdOutlineArchitecture />,
    'Modeling': <FaProjectDiagram />,
    'Visualization': <FaChartLine />,
    'Analytics': <FaChartLine />,
    'DigitalTwin': <FaIndustry />,
    'UI/UX': <FaLaptopCode />,
    'Frontend': <FaReact />,
    'Mobile': <FaMobileAlt />,
    'Map': <FaMapMarkedAlt />,
    'Research': <FaSearch />,
    'Optimization': <FaMicrochip />,
    'Sustainability': <FaLeaf color="#4CAF50" />,
    'PDF': <FaFilePdf color="#F40F02" />,
    'AgriTech': <FaLeaf color="#4CAF50" />,
    'REST APIs': <FaNetworkWired />,
    'Financial Modeling': <FaChartLine />,
    'Geospatial Analysis': <FaGlobe />,
    'System Dynamics': <MdOutlineAutoGraph />,

    // Generic / Fallback
    'Code': <FaLaptopCode />,
    'Dashboard': <MdOutlineDashboard />,
    'Puzzle': <TbPlugConnected />,
};

// Component to render icon based on name
// size can be passed as a prop, but mainly controlled by CSS in parent or style prop here if needed
const TechIcon = ({ name, className }) => {
    // Try direct match
    let icon = iconMap[name];

    // If no direct match, try case-insensitive
    if (!icon) {
        if (!name) return null;
        const lowerName = name.toLowerCase();
        const key = Object.keys(iconMap).find(k => k.toLowerCase() === lowerName);
        if (key) icon = iconMap[key];
    }

    // Default fallback if still not found
    if (!icon) return null;

    return <span className={className} title={name}>{icon}</span>;
};

export const getIcon = (name) => {
    // Try direct match
    let icon = iconMap[name];

    // If no direct match, try case-insensitive
    if (!icon) {
        if (!name) return null;
        const lowerName = name.toLowerCase();
        const key = Object.keys(iconMap).find(k => k.toLowerCase() === lowerName);
        if (key) icon = iconMap[key];
    }

    return icon || null;
}

export default TechIcon;
