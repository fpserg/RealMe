import React from "react";
import { AlignmentType, AlignmentDetail } from "../types";
import { Compass, Sparkles, Shield, Flame, Scale } from "lucide-react";

interface AlignmentSelectorProps {
  selectedAlignment: AlignmentType;
  onSelectAlignment: (alignment: AlignmentType) => void;
}

export const alignments: AlignmentDetail[] = [
  {
    type: "Sovereign Balance",
    description: "Even development across all borders. A day of harmonious, moderate progress.",
    bonus: "+5% stability to all provinces upon successful completion.",
    iconName: "scale",
  },
  {
    type: "Calm Reflection",
    description: "Deep research, memory consolidation, and mental restoration in the Citadel.",
    bonus: "+15% Citadel stability. Optimal for reading, meditation, and heavy study.",
    iconName: "compass",
  },
  {
    type: "Aggressive Growth",
    description: "High-octane expansion, tireless forging, and deep work focus.",
    bonus: "+15% Forge stability. Best for ambitious projects, coding, and building.",
    iconName: "sparkles",
  },
  {
    type: "Strategic Defense",
    description: "Repair vulnerable structures, reinforce outposts, and rest broken lines.",
    bonus: "+20% stability to whichever province is currently the weakest.",
    iconName: "shield",
  },
  {
    type: "Vitality Focus",
    description: "Requisitioning high-energy food, deep rest, and vigorous movement.",
    bonus: "+15% Training Grounds stability. Best for physical fitness and sleep recovery.",
    iconName: "flame",
  },
];

export default function AlignmentSelector({
  selectedAlignment,
  onSelectAlignment,
}: AlignmentSelectorProps) {
  // Render corresponding icon helper
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "compass":
        return <Compass className={className} />;
      case "sparkles":
        return <Sparkles className={className} />;
      case "shield":
        return <Shield className={className} />;
      case "flame":
        return <Flame className={className} />;
      case "scale":
        return <Scale className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  return (
    <div id="alignment-selector" className="space-y-3">
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/80 font-bold">
          Turn Preparation
        </span>
        <h4 className="font-serif text-lg font-bold text-stone-200 mt-0.5">
          Choose Your Sovereign Alignment
        </h4>
        <p className="text-xs text-stone-400 mt-0.5">
          Your alignment directs the Grand Advisor's focus when drafting today's state options and grants completing bonuses.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2.5 max-h-[280px] overflow-y-auto pr-1">
        {alignments.map((item) => {
          const isSelected = selectedAlignment === item.type;
          return (
            <button
              key={item.type}
              onClick={() => onSelectAlignment(item.type)}
              id={`alignment-btn-${item.type.replace(/\s+/g, "-").toLowerCase()}`}
              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex gap-3 items-start relative overflow-hidden ${
                isSelected
                  ? "bg-amber-950/20 border-amber-600/80 shadow-lg shadow-amber-950/30"
                  : "bg-stone-900/40 border-stone-800 hover:bg-stone-900/70 hover:border-stone-700"
              }`}
            >
              {/* Highlight bar for selection */}
              {isSelected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
              )}

              {/* Icon */}
              <div className={`p-2 rounded-lg mt-0.5 ${
                isSelected ? "bg-amber-500/20 text-amber-400" : "bg-stone-950 text-stone-400"
              }`}>
                {getIcon(item.iconName, "w-4.5 h-4.5")}
              </div>

              {/* Text detail */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isSelected ? "text-amber-400" : "text-stone-200"
                  }`}>
                    {item.type}
                  </span>
                  {isSelected && (
                    <span className="text-[9px] font-mono bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded uppercase font-semibold tracking-widest">
                      Active Focus
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-stone-300 mt-1 leading-normal">
                  {item.description}
                </p>
                <p className={`text-[10px] font-mono mt-1.5 flex items-center gap-1.5 font-medium ${
                  isSelected ? "text-amber-300" : "text-stone-400"
                }`}>
                  <span className="text-amber-500">★</span> 
                  <span>{item.bonus}</span>
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
