import React, { useMemo } from 'react';
import styles from './HeroBackground.module.css';

const HeroBackground = () => {
  const towers = [
    { x: 300, y: 950, scale: 1.1 },
    { x: 800, y: 900, scale: 0.8 },
    { x: 1250, y: 880, scale: 0.55 }
  ];

  const getPoints = (x, y, s) => ({
    top: { x, y: y - 550 * s },
    l1: { x: x - 120 * s, y: y - 400 * s },
    r1: { x: x + 120 * s, y: y - 400 * s },
    l2: { x: x - 150 * s, y: y - 310 * s },
    r2: { x: x + 150 * s, y: y - 310 * s },
    l3: { x: x - 120 * s, y: y - 220 * s },
    r3: { x: x + 120 * s, y: y - 220 * s }
  });

  return (
    <div className={styles.backgroundWrapper}>
      <svg
        className={styles.svgCanvas}
        viewBox="0 0 2400 1200"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" className={styles.dotGridCircle} />
          </pattern>
        </defs>

        {/* Base Grid */}
        <rect width="100%" height="100%" className={styles.dotGrid} />

        {/* Transmission Wires */}
        <g>
          {towers.slice(0, -1).map((t0, i) => {
            const t1 = towers[i+1];
            const p0 = getPoints(t0.x, t0.y, t0.scale);
            const p1 = getPoints(t1.x, t1.y, t1.scale);
            
            const drawWire = (start, end, sag) => (
              <path key={`${start.x}-${end.x}`} d={`M ${start.x} ${start.y} Q ${(start.x + end.x)/2} ${(start.y + end.y)/2 + sag} ${end.x} ${end.y}`} className={styles.utilityLine} />
            );
            return (
              <g key={`wires-${i}`}>
                {drawWire(p0.top, p1.top, 60)}
                {drawWire(p0.l1, p1.l1, 70)}
                {drawWire(p0.r1, p1.r1, 70)}
                {drawWire(p0.l2, p1.l2, 80)}
                {drawWire(p0.r2, p1.r2, 80)}
                {drawWire(p0.l3, p1.l3, 90)}
                {drawWire(p0.r3, p1.r3, 90)}
              </g>
            );
          })}

          {/* Wires coming from off-screen left */}
          {(() => {
            const p0 = getPoints(towers[0].x, towers[0].y, towers[0].scale);
            const drawLeftWire = (end, sag) => {
              const startX = -200;
              const startY = end.y - 150;
              return <path d={`M ${startX} ${startY} Q ${(startX + end.x)/2} ${(startY + end.y)/2 + sag} ${end.x} ${end.y}`} className={styles.utilityLine} opacity="0.3" />;
            };
            return (
              <g>
                {drawLeftWire(p0.top, 50)}
                {drawLeftWire(p0.l1, 60)}
                {drawLeftWire(p0.r1, 60)}
                {drawLeftWire(p0.l2, 70)}
                {drawLeftWire(p0.r2, 70)}
                {drawLeftWire(p0.l3, 80)}
                {drawLeftWire(p0.r3, 80)}
              </g>
            );
          })()}

          {/* Wires going towards the neon facility */}
          {(() => {
            const lastT = towers[towers.length - 1];
            const p1 = getPoints(lastT.x, lastT.y, lastT.scale);
            const drawRightWire = (start, sag) => {
              const endX = 1650;
              const endY = 830; // base of the turbine
              return <path d={`M ${start.x} ${start.y} Q ${(start.x + endX)/2} ${(start.y + endY)/2 + sag} ${endX} ${endY}`} className={styles.utilityLine} opacity="0.2" />;
            };
            return (
              <g>
                {drawRightWire(p1.top, 40)}
                {drawRightWire(p1.l1, 50)}
                {drawRightWire(p1.r1, 50)}
                {drawRightWire(p1.l2, 60)}
                {drawRightWire(p1.r2, 60)}
                {drawRightWire(p1.l3, 70)}
                {drawRightWire(p1.r3, 70)}
              </g>
            );
          })()}
        </g>

        {/* Transmission Towers */}
        {towers.map((t, i) => (
          <g key={`tower-${i}`} transform={`translate(${t.x}, ${t.y}) scale(${t.scale})`}>
            <path d="M -80 0 L -20 -450 L 20 -450 L 80 0" className={styles.utilityLine} />
            <path d="M -20 -450 L 0 -550 L 20 -450 Z" className={styles.utilityLine} />
            
            <path d="M -120 -400 L 120 -400" className={styles.utilityLine} />
            <path d="M -150 -310 L 150 -310" className={styles.utilityLine} />
            <path d="M -120 -220 L 120 -220" className={styles.utilityLine} />
            
            <path d="M -80 0 L 65 -110 M 80 0 L -65 -110" className={styles.utilityLine} />
            <path d="M -65 -110 L 50 -220 M 65 -110 L -50 -220" className={styles.utilityLine} />
            <path d="M -50 -220 L 35 -335 M 50 -220 L -35 -335" className={styles.utilityLine} />
            <path d="M -35 -335 L 20 -450 M 35 -335 L -20 -450" className={styles.utilityLine} />
            
            <circle cx="0" cy="-550" r="4" className={styles.towerNode} />
            <circle cx="-120" cy="-400" r="4" className={styles.towerNode} />
            <circle cx="120" cy="-400" r="4" className={styles.towerNode} />
            <circle cx="-150" cy="-310" r="4" className={styles.towerNode} />
            <circle cx="150" cy="-310" r="4" className={styles.towerNode} />
            <circle cx="-120" cy="-220" r="4" className={styles.towerNode} />
            <circle cx="120" cy="-220" r="4" className={styles.towerNode} />
          </g>
        ))}

        {/* Glowing Data Nodes */}
        <g>
          {/* Glowing dots clustered towards the right */}
          <circle cx="1500" cy="850" r="3" className={`${styles.glowNode} ${styles.pulseNode}`} style={{ animationDelay: '0.5s' }} />
          <circle cx="1800" cy="880" r="4" className={`${styles.glowNode} ${styles.pulseNode}`} style={{ animationDelay: '2s' }} />
          <circle cx="2100" cy="890" r="3" className={`${styles.glowNode} ${styles.pulseNode}`} style={{ animationDelay: '1.2s' }} />
        </g>

        {/* City Skyline Silhouette */}
        <g transform="translate(1600, 850)" opacity="0.4">
          <path d="M -100 0 L -100 -150 L -50 -150 L -50 -100 L 0 -100 L 0 -220 L 50 -220 L 50 -180 L 100 -180 L 100 -80 L 150 -80 L 150 -280 L 250 -280 L 250 -180 L 300 -180 L 300 -350 L 350 -350 L 350 -250 L 400 -250 L 400 -150 L 450 -150 L 450 -50 L 500 -50 L 500 0 Z" className={styles.utilityFill} />
          {/* Glowing Windows (Dark Mode Only) */}
          <rect x="-80" y="-130" width="3" height="5" className={styles.windowLight} style={{animationDelay: '0.2s'}} />
          <rect x="-60" y="-90" width="3" height="5" className={styles.windowLight} style={{animationDelay: '1.5s'}} />
          <rect x="10" y="-200" width="3" height="5" className={styles.windowLight} style={{animationDelay: '3.1s'}} />
          <rect x="30" y="-160" width="3" height="5" className={styles.windowLight} style={{animationDelay: '0.8s'}} />
          <rect x="20" y="-120" width="3" height="5" className={styles.windowLight} style={{animationDelay: '2.4s'}} />
          <rect x="170" y="-250" width="3" height="5" className={styles.windowLight} style={{animationDelay: '1.1s'}} />
          <rect x="190" y="-250" width="3" height="5" className={styles.windowLight} style={{animationDelay: '0.4s'}} />
          <rect x="220" y="-180" width="3" height="5" className={styles.windowLight} style={{animationDelay: '3.7s'}} />
          <rect x="180" y="-140" width="3" height="5" className={styles.windowLight} style={{animationDelay: '1.9s'}} />
          <rect x="310" y="-320" width="3" height="5" className={styles.windowLight} style={{animationDelay: '0.5s'}} />
          <rect x="330" y="-320" width="3" height="5" className={styles.windowLight} style={{animationDelay: '2.8s'}} />
          <rect x="320" y="-270" width="3" height="5" className={styles.windowLight} style={{animationDelay: '1.4s'}} />
          <rect x="310" y="-150" width="3" height="5" className={styles.windowLight} style={{animationDelay: '4.2s'}} />
          <rect x="370" y="-220" width="3" height="5" className={styles.windowLight} style={{animationDelay: '0.9s'}} />
          <rect x="380" y="-180" width="3" height="5" className={styles.windowLight} style={{animationDelay: '2.2s'}} />
          <rect x="420" y="-120" width="3" height="5" className={styles.windowLight} style={{animationDelay: '1.7s'}} />
        </g>

        {/* Infrastructure Elements clustered bottom-right */}
        {/* Wind Turbine - Massive scale */}
        <g transform="translate(2000, 850) scale(1.8)">
          <path d="M -30 0 L 30 0" className={styles.utilityLine} />
          {/* Mast */}
          <path d="M -8 0 L -2 -350 L 2 -350 L 8 0 Z" className={styles.turbineBody} />
          {/* Nacelle/Hub */}
          <circle cx="0" cy="-350" r="8" className={styles.turbineBody} />
          <g className={styles.spinBlades} style={{ transformOrigin: '0px -350px', animationDuration: '40s' }}>
            {/* Top Blade */}
            <path d="M 0 -350 L -8 -500 L 0 -510 L 8 -500 Z" className={styles.turbineBody} />
            <polygon points="-7,-480 -8,-500 0,-510 8,-500 7,-480" className={styles.turbineTip} />
            
            {/* Right Blade */}
            <path d="M 0 -350 L 130 -275 L 140 -285 L 125 -295 Z" className={styles.turbineBody} />
            <polygon points="110,-286 130,-275 140,-285 125,-295 106,-303" className={styles.turbineTip} />
            
            {/* Left Blade */}
            <path d="M 0 -350 L -130 -275 L -140 -285 L -125 -295 Z" className={styles.turbineBody} />
            <polygon points="-110,-286 -130,-275 -140,-285 -125,-295 -106,-303" className={styles.turbineTip} />
            
            {/* Nose Cone */}
            <circle cx="0" cy="-350" r="4" className={styles.turbineBody} />
          </g>
        </g>

        {/* Solar Panel - Angled and ghosted */}
        <g transform="translate(1600, 850) scale(1.4)">
          <path d="M -40 0 L 40 0" className={styles.utilityLine} />
          <path d="M 0 0 L 0 -20" className={styles.utilityLine} />
          <g transform="translate(0, -20) skewX(-30)">
            <path d="M -70 -40 L 70 -40 L 80 40 L -60 40 Z" className={styles.solarPanelFill} />
            {/* Grid lines */}
            <path d="M -65 -20 L 75 -20" className={styles.solarPanelGrid} />
            <path d="M -60 0 L 80 0" className={styles.solarPanelGrid} />
            <path d="M -55 20 L 85 20" className={styles.solarPanelGrid} />
            
            <path d="M -30 -40 L -20 40" className={styles.solarPanelGrid} />
            <path d="M 0 -40 L 10 40" className={styles.solarPanelGrid} />
            <path d="M 30 -40 L 40 40" className={styles.solarPanelGrid} />
          </g>
          {/* Faint glowing node at the connection */}
          <circle cx="-80" cy="20" r="2" className={`${styles.glowNode} ${styles.pulseNode}`} style={{ animationDelay: '1s' }} />
        </g>

        {/* Battery Storage - Half Full */}
        <g transform="translate(1820, 850) scale(1.2)">
          <path d="M -40 0 L 40 0" className={styles.utilityLine} />
          {/* Terminal */}
          <rect x="-15" y="-90" width="30" height="10" rx="2" className={styles.batteryCasing} />
          {/* Casing */}
          <rect x="-30" y="-80" width="60" height="80" rx="4" className={styles.batteryCasing} />
          
          {/* Charge Level (40% Capacity - Dark Mode) */}
          <rect x="-26" y="-33" width="52" height="29" rx="2" className={styles.batteryChargeDark} />
          
          {/* Charge Level (80% Capacity - Light Mode) */}
          <rect x="-26" y="-62" width="52" height="58" rx="2" className={styles.batteryChargeLight} />
          
          {/* Lightning Bolt */}
          <path d="M 5 -65 L -12 -35 L 2 -35 L -5 -10 L 15 -45 L -2 -45 Z" className={styles.batteryLightning} />
          <circle cx="-30" cy="0" r="2" className={`${styles.glowNode} ${styles.pulseNode}`} style={{ animationDelay: '2s' }} />
        </g>

      </svg>
      <div className={styles.vignetteOverlay}></div>
    </div>
  );
};

export default HeroBackground;
