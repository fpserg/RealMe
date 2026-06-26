import React from "react";
import { Realm, RealmId } from "../types";
import { Briefcase, Heart, Home, Coins, BookOpen, Compass, Sparkles } from "lucide-react";

interface RealmsDashboardProps {
  realms: Realm[];
  activeRealmId: RealmId | null;
  onSelectRealm: (id: RealmId) => void;
  activeCampaignRealm?: string | null;
  advisorComments?: Record<string, string>;
}

export default function RealmsDashboard({
  realms,
  activeRealmId,
  onSelectRealm,
  activeCampaignRealm,
  advisorComments,
}: RealmsDashboardProps) {
  
  const getRealmIcon = (id: RealmId, className: string) => {
    switch (id) {
      case "career":
        return <Briefcase className={className} />;
      case "family":
        return <Heart className={className} />;
      case "estate":
        return <Home className={className} />;
      case "wealth":
        return <Coins className={className} />;
      case "personalGrowth":
        return <BookOpen className={className} />;
      case "adventures":
        return <Compass className={className} />;
    }
  };

  return (
    <div className="space-y-5">
      {/* Realms Grid */}
      <div className="grid grid-cols-2 gap-3" id="realms-grid">
        {realms.map((realm) => {
          const isSelected = activeRealmId === realm.id;
          const isCampaignTarget = 
            activeCampaignRealm?.toLowerCase().includes(realm.name.toLowerCase()) ||
            activeCampaignRealm?.toLowerCase().includes(realm.id.toLowerCase());

          return (
            <button
              key={realm.id}
              onClick={() => onSelectRealm(realm.id)}
              id={`realm-btn-${realm.id}`}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between aspect-square select-none cursor-pointer group ${
                isSelected
                  ? "bg-stone-900 border-amber-600/80 shadow-lg shadow-black/40"
                  : "bg-stone-900/40 border-stone-900 hover:bg-stone-900/70 hover:border-stone-800"
              }`}
            >
              {/* Corner accent glow */}
              <div
                className={`absolute -top-12 -right-12 w-24 h-24 rounded-full filter blur-[24px] opacity-15 transition-all duration-500 ${
                  isSelected ? "opacity-30 scale-125" : "group-hover:opacity-25"
                }`}
                style={{ backgroundColor: realm.accentColor }}
              />

              {/* Campaign target badge */}
              {isCampaignTarget && (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 px-1.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-[7px] font-mono font-bold uppercase text-amber-300 tracking-wider">
                    Target
                  </span>
                </div>
              )}

              {/* Icon Container */}
              <div className={`p-2.5 rounded-xl inline-flex self-start transition-colors duration-300 ${
                isSelected ? "bg-amber-500/10 text-amber-400" : "bg-stone-950 text-stone-400 group-hover:text-stone-200"
              }`}>
                {getRealmIcon(realm.id, "w-5 h-5")}
              </div>

              {/* Label & Description Summary */}
              <div className="mt-4">
                <h4 className={`font-serif text-sm font-bold tracking-wide transition-colors ${
                  isSelected ? "text-amber-400" : "text-stone-100"
                }`}>
                  {realm.name}
                </h4>
                <p className="text-[10px] text-stone-400 font-mono mt-0.5 uppercase tracking-widest leading-tight">
                  {realm.poeticSubtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Panel */}
      {activeRealmId && (
        <div 
          id="realm-showcase-panel"
          className="bg-stone-900/80 border border-stone-800 rounded-2xl p-5 shadow-xl relative overflow-hidden backdrop-blur-md"
        >
          {(() => {
            const selectedRealm = realms.find((r) => r.id === activeRealmId)!;
            const activeComment = advisorComments?.[activeRealmId];

            return (
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/80 font-bold">
                      Realm Focus
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-100 flex items-center gap-2 mt-0.5">
                      {selectedRealm.name}
                    </h3>
                  </div>
                  <div className="p-2 bg-stone-950 rounded-xl text-stone-400">
                    {getRealmIcon(selectedRealm.id, "w-4.5 h-4.5")}
                  </div>
                </div>

                <p className="text-stone-300 text-xs leading-relaxed">
                  {selectedRealm.description}
                </p>

                {/* Advisor's Commentary or Guide */}
                {activeComment ? (
                  <div className="p-3.5 bg-amber-950/10 border border-amber-900/20 rounded-xl relative">
                    <div className="absolute top-2 right-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500/30" />
                    </div>
                    <h4 className="text-[9px] font-mono text-amber-500/80 uppercase tracking-widest font-bold mb-1">
                      Advisor's Active Chronicle
                    </h4>
                    <p className="text-[11px] text-stone-300 italic leading-relaxed">
                      "{activeComment}"
                    </p>
                  </div>
                ) : (
                  <div className="p-3.5 bg-stone-950/40 border border-stone-800/40 rounded-xl">
                    <h4 className="text-[9px] font-mono text-stone-500 uppercase tracking-widest font-bold mb-1">
                      Realm Sovereignty Advice
                    </h4>
                    <p className="text-[11px] text-stone-400 leading-normal">
                      Sovereigns evaluate and align this domain daily to discover the single most valuable action that prevents decay and unlocks peaceful growth.
                    </p>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
