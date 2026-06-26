import React, { useState, useEffect } from "react";
import { Province, ProvinceId, MeaningfulMove, AdvisorDecree, TurnLog, AlignmentType } from "./types";
import KingdomMap from "./components/KingdomMap";
import ProvinceDetailCard from "./components/ProvinceDetailCard";
import AlignmentSelector, { alignments } from "./components/AlignmentSelector";
import { 
  Castle, 
  Flame, 
  Hammer, 
  Users, 
  Sparkles, 
  FileText, 
  Award, 
  Timer, 
  ChevronRight, 
  Bookmark, 
  HelpCircle,
  Crown
} from "lucide-react";

// Default provinces
const INITIAL_PROVINCES: Province[] = [
  {
    id: "citadel",
    name: "Citadel",
    title: "The Citadel of Mind",
    stability: 50,
    description: "The seat of reflection, memory, and cognitive fortress. Controls your mental capacity, reading habits, and clarity of thought.",
    poeticSubtitle: "Where high thoughts guard the borders of the self",
    color: "from-blue-600 to-indigo-700",
    accentColor: "#3b82f6",
    glowClass: "shadow-blue-500/20",
  },
  {
    id: "trainingGrounds",
    name: "Training Grounds",
    title: "The Training Grounds",
    stability: 50,
    description: "The arena of physiological energy, sleep hygiene, vigor, and bodily capacity. Dictates the endurance of the ruler.",
    poeticSubtitle: "The vessel of sovereign action and physical stamina",
    color: "from-rose-600 to-red-700",
    accentColor: "#ef4444",
    glowClass: "shadow-rose-500/20",
  },
  {
    id: "forge",
    name: "Forge",
    title: "The Forge of Fortune",
    stability: 50,
    description: "The workspace of engineering, craft, finances, and material progress. This is where high-quality deep-work and projects are forged.",
    poeticSubtitle: "Transmuting pure focus into permanent works of gold",
    color: "from-amber-600 to-amber-700",
    accentColor: "#f59e0b",
    glowClass: "shadow-amber-500/20",
  },
  {
    id: "sanctuary",
    name: "Sanctuary",
    title: "The Sanctuary of Heart",
    stability: 50,
    description: "The court of alliances, deep relationships, family, and inner emotional peace. Guards the emotional state from cold isolation.",
    poeticSubtitle: "The hearth of trust, keeping cold winds from the keep",
    color: "from-emerald-600 to-emerald-700",
    accentColor: "#10b981",
    glowClass: "shadow-emerald-500/20",
  },
];

const FALLBACK_DECREE: AdvisorDecree = {
  decreeTitle: "The Decree of Resolute Ascendancy",
  morningBrief: "Sire, the sun rises over your sovereign domain. Let us focus our realm's energy into exactly one deliberate expansion of stability today. All quadrants report readiness for your instructions.",
  provincesStatus: {
    citadel: "The libraries are peaceful; they await the ink of quiet study to dispel clouding mist.",
    trainingGrounds: "The garrisons require vigorous movement or deep rest to secure high stamina.",
    forge: "An anvil lies quiet, requiring direct focused labor to materialize modern code and wealth.",
    sanctuary: "No news is safe news, but kin and alliances require continuous warmth to prevent rust."
  },
  meaningfulMoves: [
    {
      title: "Consolidate the Archives",
      province: "Citadel",
      description: "Spend 20 minutes in silence with a difficult text, taking physical hand-written notes.",
      impact: "+15% Citadel Stability, curing cognitive fatigue",
      cost: "Requires 20 Mins of Solitude"
    },
    {
      title: "Vigorous Patrol along the Keep",
      province: "Training Grounds",
      description: "Complete a brisk, 30-minute outdoor physical perimeter walk, strictly offline.",
      impact: "+15% Training Grounds Stability, elevating circulatory energy",
      cost: "Requires 30 Mins offline"
    },
    {
      title: "Forge the Core Pillar",
      province: "Forge",
      description: "Dedicate 45 minutes of hyper-focused work to your primary active development task without distraction.",
      impact: "+20% Forge Stability, clearing long-standing backlogs",
      cost: "Requires 45 Mins Focus"
    }
  ]
};

export default function App() {
  // Current user screen stage
  // 'PREP': Morning setup/calibration
  // 'DECISION': View map & advice, pick a move
  // 'EXECUTION': Do the chosen move
  // 'RECONCILED': Show successful completion & reflection
  const [appStage, setAppStage] = useState<"PREP" | "DECISION" | "EXECUTION" | "RECONCILED">("PREP");

  // App States
  const [provinces, setProvinces] = useState<Province[]>(INITIAL_PROVINCES);
  const [selectedAlignment, setSelectedAlignment] = useState<AlignmentType>("Sovereign Balance");
  const [activeProvinceId, setActiveProvinceId] = useState<ProvinceId>("citadel");
  
  // Turn states
  const [turnCount, setTurnCount] = useState<number>(1);
  const [advisorDecree, setAdvisorDecree] = useState<AdvisorDecree | null>(null);
  const [loadingDecree, setLoadingDecree] = useState<boolean>(false);
  const [selectedMove, setSelectedMove] = useState<MeaningfulMove | null>(null);
  const [activeMove, setActiveMove] = useState<MeaningfulMove | null>(null);
  const [logs, setLogs] = useState<TurnLog[]>([]);
  const [isFallbackActive, setIsFallbackActive] = useState<boolean>(false);

  // Execution phase notes & stopwatch/timer
  const [journalEntry, setJournalEntry] = useState<string>("");
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const savedProvinces = localStorage.getItem("realme_provinces");
      if (savedProvinces) {
        setProvinces(JSON.parse(savedProvinces));
      }

      const savedTurnCount = localStorage.getItem("realme_turn_count");
      if (savedTurnCount) {
        setTurnCount(parseInt(savedTurnCount, 10));
      }

      const savedLogs = localStorage.getItem("realme_logs");
      if (savedLogs) {
        setLogs(JSON.parse(savedLogs));
      }

      // Check if there was an active move in progress
      const savedActiveMove = localStorage.getItem("realme_active_move");
      if (savedActiveMove) {
        const move = JSON.parse(savedActiveMove);
        setActiveMove(move);
        setAppStage("EXECUTION");
        const savedTimer = localStorage.getItem("realme_timer_seconds");
        if (savedTimer) {
          setTimerSeconds(parseInt(savedTimer, 10));
          setIsTimerRunning(true);
        }
      }
    } catch (e) {
      console.error("Failed to restore previous save state", e);
    }
  }, []);

  // Update timer in background
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          const next = prev + 1;
          localStorage.setItem("realme_timer_seconds", next.toString());
          return next;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Save current province metrics
  const saveProvincesToStorage = (updated: Province[]) => {
    localStorage.setItem("realme_provinces", JSON.stringify(updated));
  };

  // Province calibration handler
  const handleCalibrationChange = (id: ProvinceId, val: number) => {
    const updated = provinces.map((p) => (p.id === id ? { ...p, stability: val } : p));
    setProvinces(updated);
    saveProvincesToStorage(updated);
  };

  // Draft decrees (AI Fetch)
  const handleDraftDecrees = async () => {
    setLoadingDecree(true);
    setAppStage("DECISION");

    const mappedProvinces = {
      citadel: provinces.find((p) => p.id === "citadel")?.stability ?? 50,
      trainingGrounds: provinces.find((p) => p.id === "trainingGrounds")?.stability ?? 50,
      forge: provinces.find((p) => p.id === "forge")?.stability ?? 50,
      sanctuary: provinces.find((p) => p.id === "sanctuary")?.stability ?? 50,
    };

    try {
      setIsFallbackActive(false);
      const response = await fetch("/api/advisor/decree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provinces: mappedProvinces,
          alignment: selectedAlignment,
          history: logs.slice(0, 5), // pass brief context of last 5 turns
          localTime: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Advisor responded with error");
      }

      const data = await response.json();
      setAdvisorDecree(data);
      // Automatically pre-select first recommended move
      if (data.meaningfulMoves && data.meaningfulMoves.length > 0) {
        setSelectedMove(data.meaningfulMoves[0]);
        // Set active province node on the map to match this move's target
        const mapToId = getProvinceIdByLabel(data.meaningfulMoves[0].province);
        if (mapToId) setActiveProvinceId(mapToId);
      }
    } catch (err) {
      console.warn("Could not retrieve strategic AI scroll, deploying Royal Reserves.", err);
      // Implement fallback data gracefully
      setIsFallbackActive(true);
      setAdvisorDecree(FALLBACK_DECREE);
      setSelectedMove(FALLBACK_DECREE.meaningfulMoves[0]);
    } finally {
      setLoadingDecree(false);
    }
  };

  // Convert "Citadel" text labels to standard ID values
  const getProvinceIdByLabel = (label: string): ProvinceId | null => {
    const norm = label.toLowerCase();
    if (norm.includes("citadel")) return "citadel";
    if (norm.includes("training") || norm.includes("body")) return "trainingGrounds";
    if (norm.includes("forge") || norm.includes("craft")) return "forge";
    if (norm.includes("sanctuary") || norm.includes("relations") || norm.includes("heart")) return "sanctuary";
    return null;
  };

  // Handle click on tactical move recommendation
  const handleSelectMove = (move: MeaningfulMove) => {
    setSelectedMove(move);
    const id = getProvinceIdByLabel(move.province);
    if (id) {
      setActiveProvinceId(id);
    }
  };

  // Commit and Affix Sovereign Seal
  const handleAffixSeal = () => {
    if (!selectedMove) return;
    setActiveMove(selectedMove);
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setJournalEntry("");
    setAppStage("EXECUTION");

    localStorage.setItem("realme_active_move", JSON.stringify(selectedMove));
    localStorage.setItem("realme_timer_seconds", "0");
  };

  // Complete move & calculate outcome
  const handleConcludeAction = () => {
    if (!activeMove) return;

    // Stop timer
    setIsTimerRunning(false);

    // Parse the stability changes
    const targetProvId = getProvinceIdByLabel(activeMove.province);
    const adjustments: Record<ProvinceId, number> = {
      citadel: 0,
      trainingGrounds: 0,
      forge: 0,
      sanctuary: 0,
    };

    // Calculate baseline boost from move impact text
    let baseBoost = 15;
    if (activeMove.impact.includes("20%")) baseBoost = 20;
    if (activeMove.impact.includes("10%")) baseBoost = 10;

    if (targetProvId) {
      adjustments[targetProvId] = baseBoost;
    }

    // Apply alignment bonuses
    if (selectedAlignment === "Sovereign Balance") {
      adjustments.citadel += 5;
      adjustments.trainingGrounds += 5;
      adjustments.forge += 5;
      adjustments.sanctuary += 5;
    } else if (selectedAlignment === "Calm Reflection") {
      adjustments.citadel += 15;
    } else if (selectedAlignment === "Aggressive Growth") {
      adjustments.forge += 15;
    } else if (selectedAlignment === "Vitality Focus") {
      adjustments.trainingGrounds += 15;
    } else if (selectedAlignment === "Strategic Defense") {
      // Find weakest province
      let weakestId: ProvinceId = "citadel";
      let minVal = 100;
      provinces.forEach((p) => {
        if (p.stability < minVal) {
          minVal = p.stability;
          weakestId = p.id;
        }
      });
      adjustments[weakestId] += 20;
    }

    // Update real state
    const updatedProvinces = provinces.map((p) => {
      const addition = adjustments[p.id];
      const nextVal = Math.min(100, p.stability + addition);
      return { ...p, stability: nextVal };
    });

    setProvinces(updatedProvinces);
    saveProvincesToStorage(updatedProvinces);

    // Save turn log
    const newLog: TurnLog = {
      turnNumber: turnCount,
      date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      decreeTitle: advisorDecree?.decreeTitle || "The Daily Edict",
      selectedMove: activeMove,
      completedAt: new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
      outcomeNotes: journalEntry.trim() || "The Sovereign task was successfully accomplished with focused execution.",
      stabilityAdjustments: adjustments,
    };

    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem("realme_logs", JSON.stringify(updatedLogs));

    // Progress turn count
    const nextTurn = turnCount + 1;
    setTurnCount(nextTurn);
    localStorage.setItem("realme_turn_count", nextTurn.toString());

    // Clear state
    localStorage.removeItem("realme_active_move");
    localStorage.removeItem("realme_timer_seconds");
    setActiveMove(null);

    setAppStage("RECONCILED");
  };

  // Re-enter setup morning calibration
  const handleBeginNewTurn = () => {
    setJournalEntry("");
    setAdvisorDecree(null);
    setSelectedMove(null);
    setAppStage("PREP");
  };

  // Format countdown clock
  const formatTime = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs > 0 ? hrs + ":" : ""}${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Determine current active campaign province
  const activeCampaignProvince = activeMove ? activeMove.province : selectedMove ? selectedMove.province : null;

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background visual atmosphere elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Ambient gold radial glow top right */}
        <div className="absolute top-[-20%] right-[-20%] w-[80%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.06)_0%,transparent_70%)]" />
        {/* Ambient blue radial glow bottom left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)]" />
      </div>

      {/* Royal Masthead */}
      <header className="border-b border-amber-900/20 bg-stone-950/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3 shadow-lg shadow-black/40">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center border border-amber-500/30 shadow-inner">
              <Crown className="w-4.5 h-4.5 text-amber-100 animate-pulse" />
            </div>
            <div>
              <h1 className="font-serif text-base font-bold tracking-wider text-stone-100 uppercase flex items-center gap-1">
                RealMe <span className="text-[10px] font-mono font-medium text-amber-500 px-1 bg-amber-500/10 border border-amber-500/20 rounded">Turn {turnCount}</span>
              </h1>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold font-mono">
                Sovereign Morning Alignment
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-serif font-bold text-amber-400 tracking-wide uppercase">
              {new Date().toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
            </span>
            <div className="text-[9px] font-mono text-stone-400 uppercase tracking-wider">
              {new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 py-6 z-10 flex flex-col justify-start">
        
        {/* STAGE 1: MORNING PREPARATION & CALIBRATION */}
        {appStage === "PREP" && (
          <div className="space-y-6 flex flex-col justify-between animate-fade-in">
            {/* Visual greeting card */}
            <div className="text-center py-6 px-4 bg-radial-[circle_at_center,rgba(120,53,15,0.1)_0%,transparent_100%] border-b border-stone-900">
              <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-widest">
                A New Day Dawns, Sire
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-100 mt-2 tracking-wide leading-tight">
                Review the State of Your Provinces
              </h2>
              <p className="text-xs text-stone-400 mt-2 max-w-xs mx-auto">
                Evaluate your personal boundaries this morning. Be candid about where you feel strong and where you feel neglected.
              </p>
            </div>

            {/* Kingdom Interactive SVG Map */}
            <KingdomMap
              provinces={provinces}
              activeProvinceId={activeProvinceId}
              onSelectProvince={(id) => setActiveProvinceId(id)}
              activeCampaignProvince={null}
            />

            {/* Current Selected Province Detail / Calibration panel */}
            {activeProvinceId && (
              <ProvinceDetailCard
                province={provinces.find((p) => p.id === activeProvinceId)!}
                onCalibrationChange={handleCalibrationChange}
                canCalibrate={true}
              />
            )}

            {/* Alignment Strategy Selector Component */}
            <div className="bg-stone-900/40 border border-stone-900 rounded-2xl p-4">
              <AlignmentSelector
                selectedAlignment={selectedAlignment}
                onSelectAlignment={setSelectedAlignment}
              />
            </div>

            {/* Turn Draft Button */}
            <button
              onClick={handleDraftDecrees}
              id="draft-decrees-btn"
              className="w-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-950 hover:from-amber-500 hover:to-amber-900 text-stone-100 font-serif font-bold text-sm tracking-widest uppercase py-4 px-6 rounded-2xl border border-amber-500/40 hover:border-amber-400/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Draft Sovereign Decree</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

        {/* STAGE 2: DECISION MAP & RECOMMENDED MOVES */}
        {appStage === "DECISION" && (
          <div className="space-y-6 animate-fade-in">
            {loadingDecree ? (
              /* Royal counsel loader */
              <div className="py-24 text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full border-2 border-stone-800 border-t-amber-500 animate-spin" />
                  <Crown className="w-6 h-6 text-amber-500 absolute inset-0 m-auto animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-500 uppercase tracking-widest">
                    Consulting the Advisor...
                  </h3>
                  <p className="text-xs text-stone-400 max-w-xs mx-auto mt-1 italic">
                    "Sire, the Grand Advisor compiles today's alignment matrix based on your current province stats and alignment..."
                  </p>
                </div>
              </div>
            ) : (
              /* Live Strategic Dashboard */
              <div className="space-y-5">
                {/* Advisor's Decree Panel */}
                <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-4.5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-15">
                    <Crown className="w-16 h-16 text-amber-500" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-amber-500/80 font-bold bg-amber-500/10 px-2 py-0.5 border border-amber-500/10 rounded">
                      Vizier's Morning Report
                    </span>
                    {isFallbackActive && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 border border-amber-500/30 rounded animate-pulse">
                        ✦ Local Scribe Scroll
                      </span>
                    )}
                  </div>
                  
                  {isFallbackActive && (
                    <div className="mt-2.5 p-2 bg-amber-950/20 border border-amber-500/25 rounded-lg text-[10px] text-amber-300 font-mono leading-relaxed">
                      👑 <span className="font-semibold">Scribe's Notice:</span> Heavy clouds currently obscure the advisor's astronomical glass, but the Royal Archive Scribes have drafted today's Alignment Decrees with standard efficacy.
                    </div>
                  )}

                  <h3 className="font-serif text-xl font-bold text-amber-400 mt-2.5 tracking-wide">
                    {advisorDecree?.decreeTitle}
                  </h3>
                  <p className="text-xs text-stone-200 mt-2.5 leading-relaxed italic">
                    "{advisorDecree?.morningBrief}"
                  </p>
                </div>

                {/* Main Interactive Map Grid */}
                <div className="py-2">
                  <KingdomMap
                    provinces={provinces}
                    activeProvinceId={activeProvinceId}
                    onSelectProvince={(id) => setActiveProvinceId(id)}
                    activeCampaignProvince={activeCampaignProvince}
                  />
                </div>

                {/* Selected Node Status Evaluator */}
                {activeProvinceId && (
                  <ProvinceDetailCard
                    province={provinces.find((p) => p.id === activeProvinceId)!}
                    onCalibrationChange={handleCalibrationChange}
                    canCalibrate={false}
                    advisorComment={
                      activeProvinceId === "citadel" ? advisorDecree?.provincesStatus.citadel :
                      activeProvinceId === "trainingGrounds" ? advisorDecree?.provincesStatus.trainingGrounds :
                      activeProvinceId === "forge" ? advisorDecree?.provincesStatus.forge :
                      advisorDecree?.provincesStatus.sanctuary
                    }
                  />
                )}

                {/* Tactical Moves Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold">
                      The Strategic Recommendations
                    </span>
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Select Exactly One
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {advisorDecree?.meaningfulMoves.map((move, index) => {
                      const isSelected = selectedMove?.title === move.title;
                      const mappedId = getProvinceIdByLabel(move.province);
                      const provColor = provinces.find(p => p.id === mappedId)?.accentColor || "#d97706";

                      return (
                        <button
                          key={index}
                          onClick={() => handleSelectMove(move)}
                          id={`tactical-move-btn-${index}`}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative flex flex-col justify-between ${
                            isSelected
                              ? "bg-amber-950/20 border-amber-600/80 shadow-lg shadow-black/30"
                              : "bg-stone-900/40 border-stone-800/80 hover:bg-stone-900/70"
                          }`}
                        >
                          {/* Left Border Accent color matches province */}
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                            style={{ backgroundColor: isSelected ? "#f59e0b" : provColor }}
                          />

                          {/* Move Header */}
                          <div className="flex justify-between items-start gap-2 w-full pl-1">
                            <div>
                              <span 
                                className="text-[9px] font-mono font-bold uppercase tracking-widest"
                                style={{ color: provColor }}
                              >
                                {move.province} Edict
                              </span>
                              <h4 className="font-serif text-sm font-bold text-stone-100 mt-0.5">
                                {move.title}
                              </h4>
                            </div>
                            {isSelected && (
                              <span className="text-[9px] font-mono text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded uppercase font-semibold tracking-widest">
                                Target Move
                              </span>
                            )}
                          </div>

                          {/* Move Body */}
                          <p className="text-stone-300 text-[11px] leading-relaxed mt-2 pl-1">
                            {move.description}
                          </p>

                          {/* Move Footer Stats */}
                          <div className="flex justify-between items-center mt-3 pt-2 border-t border-stone-800/40 pl-1 text-[10px] font-mono text-stone-400">
                            <span className="text-emerald-400 font-semibold">{move.impact}</span>
                            <span className="italic text-stone-500">{move.cost}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action CTA Block */}
                {selectedMove && (
                  <div className="pt-3">
                    <button
                      onClick={handleAffixSeal}
                      id="affix-sovereign-seal-btn"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-black text-sm tracking-widest uppercase py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Bookmark className="w-4 h-4 fill-stone-950" />
                      <span>Affix Sovereign Seal & Begin Move</span>
                    </button>
                    <button
                      onClick={() => setAppStage("PREP")}
                      className="w-full mt-2.5 text-stone-500 hover:text-stone-300 font-mono text-[10px] uppercase tracking-widest py-1 transition-colors"
                    >
                      ← Re-Calibrate Province Borders
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* STAGE 3: EXECUTION / MOVE RUNNING PHASE */}
        {appStage === "EXECUTION" && activeMove && (
          <div className="space-y-6 animate-fade-in py-4">
            {/* Focal Header card */}
            <div className="text-center space-y-2 py-4 relative">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-2.5 py-1 border border-amber-500/10 rounded">
                Active Strategic Campaign
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-100 tracking-wide pt-1">
                {activeMove.title}
              </h2>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                The Crown's focus is dedicated solely to this single task. Complete it offline with absolute concentration.
              </p>
            </div>

            {/* Main Interactive Map in focus-shrunk state */}
            <div className="opacity-70 scale-90 select-none py-1 pointer-events-none">
              <KingdomMap
                provinces={provinces}
                activeProvinceId={getProvinceIdByLabel(activeMove.province)}
                onSelectProvince={() => {}}
                activeCampaignProvince={activeMove.province}
              />
            </div>

            {/* Instructions box */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div>
                <span className="text-[9px] font-mono text-amber-500/80 uppercase tracking-widest font-bold">
                  Sovereign Instructions
                </span>
                <p className="text-stone-200 text-xs leading-relaxed mt-1">
                  {activeMove.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-stone-800/60 text-xs">
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">
                    Strategic Outcome
                  </span>
                  <span className="text-emerald-400 font-mono font-bold mt-0.5 block">
                    {activeMove.impact}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">
                    Committed Resource
                  </span>
                  <span className="text-amber-500 font-mono font-bold mt-0.5 block">
                    {activeMove.cost}
                  </span>
                </div>
              </div>
            </div>

            {/* Focused Timer Clock */}
            <div className="p-6 bg-stone-950 border border-stone-900 rounded-2xl text-center space-y-2.5">
              <div className="flex items-center justify-center gap-1.5 text-stone-400">
                <Timer className="w-4.5 h-4.5 text-amber-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">
                  Campaign Duration
                </span>
              </div>
              <div className="text-4xl font-mono font-light text-stone-100 tracking-wider">
                {formatTime(timerSeconds)}
              </div>
              <p className="text-[10px] text-stone-500 italic">
                Let the hours pass with absolute patience, Sire.
              </p>
            </div>

            {/* Chroniclers' Scroll (Reflection Box) */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold block pl-1">
                The Chroniclers' Scroll (Notes & Reflection)
              </label>
              <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="What occurred during your reign's effort? Log insights, blocks, or thoughts..."
                className="w-full h-24 bg-stone-900/40 border border-stone-800 hover:border-stone-700 focus:border-amber-500/50 rounded-xl p-3 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
              />
            </div>

            {/* Conclude CTA */}
            <button
              onClick={handleConcludeAction}
              id="conclude-action-btn"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-stone-100 font-serif font-bold text-sm tracking-widest uppercase py-4 px-6 rounded-2xl border border-emerald-500/30 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Conclude Sovereign Action</span>
            </button>
          </div>
        )}

        {/* STAGE 4: TURN CONCLUDED / RECONCILED VIEW */}
        {appStage === "RECONCILED" && (
          <div className="space-y-6 animate-fade-in py-4 text-center">
            {/* Victory Badge */}
            <div className="inline-flex w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/30 items-center justify-center shadow-lg shadow-emerald-950/20 mb-1">
              <Award className="w-8 h-8 text-emerald-400 animate-bounce" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Campaign Victorious
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-100 tracking-wide">
                The Turn is Sealed
              </h2>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Your tactical move has successfully concluded. Your provinces report increased resilience, strengthening your boundaries.
              </p>
            </div>

            {/* Map demonstrating new stability values */}
            <div className="py-2">
              <KingdomMap
                provinces={provinces}
                activeProvinceId={null}
                onSelectProvince={() => {}}
                activeCampaignProvince={null}
              />
            </div>

            {/* Recurrent review box */}
            {logs[0] && (
              <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-4.5 text-left space-y-3.5 max-w-sm mx-auto">
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block">
                    Recorded Edict
                  </span>
                  <span className="font-serif text-sm font-bold text-stone-100 block">
                    {logs[0].decreeTitle}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block">
                    Meaningful Move Finished
                  </span>
                  <span className="text-stone-300 text-xs font-semibold block mt-0.5">
                    {logs[0].selectedMove.title} ({logs[0].selectedMove.province})
                  </span>
                </div>
                {logs[0].outcomeNotes && (
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block">
                      Chronicler's Notes
                    </span>
                    <p className="text-stone-300 text-xs italic leading-relaxed mt-1">
                      "{logs[0].outcomeNotes}"
                    </p>
                  </div>
                )}
                <div className="pt-2 border-t border-stone-800/60">
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block mb-1">
                    Province Stability Restored
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(logs[0].stabilityAdjustments || {}).map(([key, val]) => {
                      if (val === 0) return null;
                      const pName = key === "citadel" ? "Citadel" : key === "trainingGrounds" ? "Training Grounds" : key === "forge" ? "Forge" : "Sanctuary";
                      return (
                        <span key={key} className="text-[9px] font-mono bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                          {pName} +{val}%
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Conclude and hold action */}
            <div className="pt-4">
              <button
                onClick={handleBeginNewTurn}
                id="begin-new-turn-btn"
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-black text-sm tracking-widest uppercase py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Settle Realm & Await Tomorrow</span>
              </button>
            </div>
          </div>
        )}

        {/* IMPERIAL CHRONICLES / HISTORY SECTION */}
        {logs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-stone-900 space-y-4">
            <div className="flex items-center gap-2 pl-1">
              <FileText className="w-4 h-4 text-amber-500" />
              <h3 className="font-serif text-sm font-bold text-stone-200 tracking-wider uppercase">
                The Imperial Chronicles
              </h3>
            </div>

            <div className="space-y-3">
              {logs.map((log, index) => (
                <div 
                  key={index} 
                  id={`chronicle-item-${index}`}
                  className="bg-stone-950 border border-stone-900 hover:border-stone-800 transition-all rounded-xl p-3.5 space-y-2.5 text-left"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-serif font-bold text-amber-500">
                      Turn {log.turnNumber}: {log.selectedMove.title}
                    </span>
                    <span className="text-[9px] font-mono text-stone-500">
                      {log.date} @ {log.completedAt}
                    </span>
                  </div>

                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    {log.outcomeNotes}
                  </p>

                  <div className="flex justify-between items-center text-[9px] font-mono pt-1.5 border-t border-stone-900">
                    <span className="text-stone-500">
                      Decree: <span className="text-stone-400">{log.decreeTitle}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold uppercase">
                      +{log.selectedMove.province} Restored
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Royal footer */}
      <footer className="border-t border-stone-900 bg-stone-950 py-6 text-center text-[10px] font-mono text-stone-600 mt-12 z-10">
        <div className="max-w-md mx-auto space-y-1">
          <p>© 2026 RealMe App. All borders are safe and sovereign.</p>
          <p>Designed with desktop precision and high-contrast light-eye styling.</p>
        </div>
      </footer>
    </div>
  );
}
