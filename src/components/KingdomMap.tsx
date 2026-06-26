import React from "react";
import { Province, ProvinceId } from "../types";
import { Castle, Flame, Hammer, Users, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface KingdomMapProps {
  provinces: Province[];
  activeProvinceId: ProvinceId | null;
  onSelectProvince: (id: ProvinceId) => void;
  activeCampaignProvince: string | null;
}

export default function KingdomMap({
  provinces,
  activeProvinceId,
  onSelectProvince,
  activeCampaignProvince,
}: KingdomMapProps) {
  // Map province ID to corresponding Lucide Icon component
  const getProvinceIcon = (id: ProvinceId, className: string) => {
    switch (id) {
      case "citadel":
        return <Castle className={className} />;
      case "trainingGrounds":
        return <Flame className={className} />;
      case "forge":
        return <Hammer className={className} />;
      case "sanctuary":
        return <Users className={className} />;
    }
  };

  // Province positions on our 320x320 grid map
  const positions: Record<ProvinceId, { cx: number; cy: number; labelX: number; labelY: number }> = {
    citadel: { cx: 80, cy: 90, labelX: 80, labelY: 155 },
    trainingGrounds: { cx: 240, cy: 90, labelX: 240, labelY: 155 },
    forge: { cx: 80, cy: 230, labelX: 80, labelY: 295 },
    sanctuary: { cx: 240, cy: 230, labelX: 240, labelY: 295 },
  };

  return (
    <div id="kingdom-map-container" className="relative w-full aspect-square max-w-[340px] mx-auto bg-stone-950 border border-amber-900/40 rounded-3xl p-4 overflow-hidden shadow-2xl shadow-black/80">
      {/* Ancient Map Texture & Gradients */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(40,25,10,0.15)_0%,rgba(0,0,0,0.85)_100%] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Main Map SVG Grid */}
      <svg
        viewBox="0 0 320 320"
        className="w-full h-full relative z-10 select-none overflow-visible"
      >
        {/* SVG Definitions for Gradients, Glows, and Path Markers */}
        <defs>
          <filter id="royal-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="map-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Trade Routes / Connective Roads between Provinces */}
        {/* Horizontal routes */}
        <line
          x1="80"
          y1="90"
          x2="240"
          y2="90"
          stroke="#451a03"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <line
          x1="80"
          y1="230"
          x2="240"
          y2="230"
          stroke="#451a03"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        {/* Vertical routes */}
        <line
          x1="80"
          y1="90"
          x2="80"
          y2="230"
          stroke="#451a03"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <line
          x1="240"
          y1="90"
          x2="240"
          y2="230"
          stroke="#451a03"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        {/* Diagonal routes */}
        <line
          x1="80"
          y1="90"
          x2="240"
          y2="230"
          stroke="#451a03"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          opacity="0.6"
        />
        <line
          x1="240"
          y1="90"
          x2="80"
          y2="230"
          stroke="#451a03"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          opacity="0.6"
        />

        {/* Animated trade carts pulsing along the roads */}
        <circle r="2" fill="#f59e0b">
          <animateMotion
            path="M 80,90 L 240,90"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="2" fill="#10b981">
          <animateMotion
            path="M 240,90 L 240,230"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="2" fill="#3b82f6">
          <animateMotion
            path="M 240,230 L 80,230"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="2" fill="#ec4899">
          <animateMotion
            path="M 80,230 L 80,90"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Central Compass Rose / Empire Seat */}
        <circle cx="160" cy="160" r="45" fill="url(#map-center-glow)" />
        <g transform="translate(160, 160)" className="opacity-40">
          <line x1="0" y1="-30" x2="0" y2="30" stroke="#f59e0b" strokeWidth="1" />
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#f59e0b" strokeWidth="1" />
          {/* Compass diamond diamond */}
          <path d="M 0,-15 L 5,0 L 0,15 L -5,0 Z" fill="#78350f" stroke="#f59e0b" strokeWidth="0.5" />
          <path d="M -15,0 L 0,-5 L 15,0 L 0,5 Z" fill="#78350f" stroke="#f59e0b" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="3" fill="#f59e0b" />
        </g>

        {/* Render Provinces as map nodes */}
        {provinces.map((province) => {
          const pos = positions[province.id];
          const isSelected = activeProvinceId === province.id;
          const radius = 32;
          const strokeWidth = 3;
          // Calculate SVG circular progress dash array
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (province.stability / 100) * circumference;

          // Check if this province is currently target of active campaign
          const isCampaignTarget = 
            activeCampaignProvince?.toLowerCase().includes(province.name.toLowerCase()) ||
            activeCampaignProvince?.toLowerCase().includes(province.id.toLowerCase());

          return (
            <g
              key={province.id}
              onClick={() => onSelectProvince(province.id)}
              className="cursor-pointer group"
              id={`province-node-${province.id}`}
            >
              {/* Pulse effect if selected or part of campaign */}
              {(isSelected || isCampaignTarget) && (
                <circle
                  cx={pos.cx}
                  cy={pos.cy}
                  r={radius + 8}
                  fill="none"
                  stroke={province.accentColor}
                  strokeWidth="1.5"
                  className="animate-ping opacity-25"
                  style={{ animationDuration: "3s" }}
                />
              )}

              {/* Background Plate */}
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r={radius}
                fill="#1c1917"
                stroke="#44403c"
                strokeWidth="1.5"
                className="transition-all duration-300 group-hover:fill-stone-800"
              />

              {/* Stability Progress Ring */}
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r={radius}
                fill="none"
                stroke={province.accentColor}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${pos.cx} ${pos.cy})`}
                className="transition-all duration-1000 ease-out"
                filter="url(#royal-glow)"
                opacity={province.stability > 20 ? 0.85 : 0.4}
              />

              {/* Embedded Interactive Click Target (translucent overlay) */}
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r={radius + 5}
                fill="transparent"
              />

              {/* Province Icon Container */}
              <foreignObject
                x={pos.cx - 11}
                y={pos.cy - 11}
                width="22"
                height="22"
                className="pointer-events-none"
              >
                <div className="w-full h-full flex items-center justify-center text-stone-100">
                  {getProvinceIcon(
                    province.id,
                    `w-5.5 h-5.5 transition-transform duration-300 group-hover:scale-115 ${
                      isSelected ? "text-amber-400" : "text-stone-300"
                    }`
                  )}
                </div>
              </foreignObject>

              {/* Status Alert Badge if stability is critical */}
              {province.stability <= 30 && (
                <g transform={`translate(${pos.cx + 20}, ${pos.cy - 20})`}>
                  <circle r="7" fill="#dc2626" />
                  <foreignObject x="-5" y="-5" width="10" height="10">
                    <div className="w-full h-full flex items-center justify-center text-[8px] text-white font-bold leading-none">
                      !
                    </div>
                  </foreignObject>
                </g>
              )}

              {/* Label Banner / Text */}
              <g transform={`translate(${pos.labelX}, ${pos.labelY})`}>
                {/* Banner background */}
                <rect
                  x="-48"
                  y="-18"
                  width="96"
                  height="22"
                  rx="4"
                  fill="#1c1917"
                  stroke={isSelected ? "#f59e0b" : "#44403c"}
                  strokeWidth={isSelected ? "1.5" : "1"}
                  className="transition-all duration-300 shadow-lg"
                />

                {/* Province Name */}
                <text
                  x="0"
                  y="-4"
                  textAnchor="middle"
                  fill={isSelected ? "#f59e0b" : "#e7e5e4"}
                  className="font-serif text-[10px] font-bold tracking-widest uppercase"
                >
                  {province.name}
                </text>

                {/* Stability Value */}
                <text
                  x="0"
                  y="7"
                  textAnchor="middle"
                  fill={province.stability < 35 ? "#ef4444" : "#a8a29e"}
                  className="font-mono text-[9px] font-medium"
                >
                  {province.stability}% STABILITY
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Floating Sparkle indicators for current campaign */}
      {activeCampaignProvince && (
        <div className="absolute top-2 right-2 bg-amber-900/40 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm z-20">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-[10px] font-mono font-semibold text-amber-300 uppercase tracking-widest">
            Campaign Underway
          </span>
        </div>
      )}
    </div>
  );
}
