import React from "react";
import { Province, ProvinceId } from "../types";
import { Sparkles, AlertTriangle, ShieldCheck, HelpCircle, Activity } from "lucide-react";

interface ProvinceDetailCardProps {
  province: Province;
  onCalibrationChange: (id: ProvinceId, val: number) => void;
  canCalibrate: boolean;
  advisorComment?: string;
}

export default function ProvinceDetailCard({
  province,
  onCalibrationChange,
  canCalibrate,
  advisorComment,
}: ProvinceDetailCardProps) {
  // Get status color & badge text based on stability
  const getStatusDetails = (stability: number) => {
    if (stability <= 30) {
      return {
        label: "Vulnerable & Neglected",
        desc: "Requires urgent focus and immediate reinforcing decrees. Unrest or fatigue is imminent.",
        color: "text-red-500",
        bg: "bg-red-950/40 border-red-900/30",
        icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
      };
    } else if (stability <= 65) {
      return {
        label: "Stables & Holding",
        desc: "Holding defensive lines, but active development is needed to unlock full empire potential.",
        color: "text-amber-500",
        bg: "bg-amber-950/20 border-amber-900/30",
        icon: <Activity className="w-4 h-4 text-amber-500" />,
      };
    } else {
      return {
        label: "Prosperous & Fortified",
        desc: "Sovereign power is exceptionally high. Fully fortified and radiating calm, optimistic strength.",
        color: "text-emerald-500",
        bg: "bg-emerald-950/20 border-emerald-900/30",
        icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
      };
    }
  };

  const status = getStatusDetails(province.stability);

  return (
    <div
      id={`province-card-${province.id}`}
      className="w-full bg-stone-900/80 border border-stone-800 rounded-2xl p-5 shadow-xl relative overflow-hidden backdrop-blur-md"
    >
      {/* Absolute colored accent blur behind card */}
      <div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full filter blur-[40px] opacity-20 pointer-events-none"
        style={{ backgroundColor: province.accentColor }}
      />

      {/* Header and Title */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/80 font-bold">
            Province Report
          </span>
          <h3 className="font-serif text-xl font-bold text-stone-100 flex items-center gap-2 mt-0.5">
            {province.title}
          </h3>
          <p className="text-xs text-stone-400 italic mt-0.5">{province.poeticSubtitle}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className={`text-2xl font-serif font-black ${status.color}`}>
            {province.stability}%
          </span>
          <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider">
            Current Stability
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-300 text-xs leading-relaxed mb-4">
        {province.description}
      </p>

      {/* Strategic Status Badge */}
      <div className={`p-3 rounded-xl border ${status.bg} flex items-start gap-2.5 mb-4`}>
        <div className="mt-0.5">{status.icon}</div>
        <div>
          <h4 className={`text-xs font-semibold ${status.color} uppercase tracking-wider`}>
            {status.label}
          </h4>
          <p className="text-[11px] text-stone-400 leading-normal mt-0.5">
            {status.desc}
          </p>
        </div>
      </div>

      {/* Calibrator Slider (if allowed, i.e., during morning configuration setup) */}
      {canCalibrate ? (
        <div className="p-3.5 bg-stone-950/60 border border-stone-800/40 rounded-xl">
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-mono text-stone-300 font-medium flex items-center gap-1.5">
              <span>Calibrate Province Strength</span>
              <HelpCircle className="w-3.5 h-3.5 text-stone-500" title="Adjust to match your actual real-world state this morning." />
            </label>
            <span className="text-xs font-mono text-amber-500 font-bold">
              {province.stability}%
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={province.stability}
            onChange={(e) => onCalibrationChange(province.id, parseInt(e.target.value, 10))}
            className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[9px] font-mono text-stone-500 mt-1">
            <span>Critical (10%)</span>
            <span>Balanced (50%)</span>
            <span>Fortified (100%)</span>
          </div>
        </div>
      ) : (
        /* Advisor Commentary view (active decree) */
        advisorComment && (
          <div className="p-3.5 bg-amber-950/10 border border-amber-900/10 rounded-xl relative">
            <div className="absolute top-2 right-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500/40" />
            </div>
            <h4 className="text-[10px] font-mono text-amber-500/80 uppercase tracking-widest font-bold mb-1">
              Advisor's Chronicle Edict
            </h4>
            <p className="text-[11px] text-stone-300 italic leading-relaxed">
              "{advisorComment}"
            </p>
          </div>
        )
      )}
    </div>
  );
}
