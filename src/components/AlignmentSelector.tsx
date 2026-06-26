import React from "react";
import { AlignmentType, AlignmentDetail } from "../types";
import { Compass, Sparkles, Shield, Flame, Scale, Landmark } from "lucide-react";

interface AlignmentSelectorProps {
  selectedAlignment: AlignmentType;
  onSelectAlignment: (alignment: AlignmentType) => void;
}

export const alignments: AlignmentDetail[] = [
  {
    type: "Sovereign Balance",
    description: "Sustaining and developing all realms equally with deliberate, measured steps.",
    focusRealms: ["Career", "Family", "Estate", "Wealth", "Personal Growth", "Adventures"],
    iconName: "scale",
  },
  {
    type: "Expansion & Conquest",
    description: "Pushing forward on critical projects, professional expansion, and skill mastery.",
    focusRealms: ["Career", "Personal Growth"],
    iconName: "sparkles",
  },
  {
    type: "Home & Hearth",
    description: "Tending to the castle keep, household organization, and nurturing closest bonds.",
    focusRealms: ["Family", "Estate"],
    iconName: "shield",
  },
  {
    type: "Legacy & Treasury",
    description: "Organizing your material wealth, tracking budgets, and forging passive income reserves.",
    focusRealms: ["Wealth", "Career"],
    iconName: "landmark",
  },
  {
    type: "Sovereign Health",
    description: "Vigorous physiological focus, restorative rest, high nutrition, and clean spaces.",
    focusRealms: ["Personal Growth", "Estate"],
    iconName: "flame",
  },
  {
    type: "Spontaneous Exploration",
    description: "Seeking play, scheduling novel trips, engaging in hobbies, and exploring ideas.",
    focusRealms: ["Adventures", "Personal Growth"],
    iconName: "compass",
  },
];

export default function AlignmentSelector({
  selectedAlignment,
  onSelectAlignment,
}: AlignmentSelectorProps) {
  
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
      case "landmark":
        return <Landmark className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  return (
    <div id="alignment-selector" className="space-y-3">
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/80 font-bold">
          Turn Directive
        </span>
        <h4 className="font-serif text-base font-bold text-stone-200 mt-0.5">
          Select Your Daily Focus Alignment
        </h4>
        <p className="text-[11px] text-stone-400 mt-0.5">
          Your alignment directs the Grand Game Master's cognitive focus when analyzing your life and proposing today's single most meaningful move.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 max-h-[250px] overflow-y-auto pr-1">
        {alignments.map((item) => {
          const isSelected = selectedAlignment === item.type;
          return (
            <button
              key={item.type}
              onClick={() => onSelectAlignment(item.type)}
              id={`alignment-btn-${item.type.replace(/\s+/g, "-").toLowerCase()}`}
              className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex gap-3 items-start relative overflow-hidden ${
                isSelected
                  ? "bg-amber-950/20 border-amber-600/80 shadow-lg shadow-amber-950/30"
                  : "bg-stone-900/40 border-stone-800 hover:bg-stone-900/70 hover:border-stone-700"
              }`}
            >
              {/* Highlight bar */}
              {isSelected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
              )}

              {/* Icon */}
              <div className={`p-2 rounded-lg mt-0.5 ${
                isSelected ? "bg-amber-500/20 text-amber-400" : "bg-stone-950 text-stone-400"
              }`}>
                {getIcon(item.iconName, "w-4 h-4")}
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
                    <span className="text-[8px] font-mono bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded uppercase font-semibold tracking-widest">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-stone-300 mt-1 leading-normal">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5 items-center">
                  <span className="text-[9px] font-mono text-stone-500 uppercase">Focuses:</span>
                  {item.focusRealms.map((r) => (
                    <span key={r} className="text-[9px] font-mono bg-stone-950 text-stone-400 px-1 rounded">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
