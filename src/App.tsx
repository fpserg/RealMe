import React, { useState, useEffect } from "react";
import { Realm, RealmId, MeaningfulMove, AdvisorDecree, TurnLog, AlignmentType } from "./types";
import RealmsDashboard from "./components/RealmsDashboard";
import AlignmentSelector, { alignments } from "./components/AlignmentSelector";
import { 
  Briefcase, 
  Heart, 
  Home, 
  Coins, 
  BookOpen, 
  Compass, 
  Sparkles, 
  Award, 
  Timer, 
  ChevronRight, 
  Bookmark, 
  Crown,
  Scroll,
  HelpCircle,
  AlertCircle
} from "lucide-react";

// The six real-life Realms, fully grounded with immersive strategic descriptions
const INITIAL_REALMS: Realm[] = [
  {
    id: "career",
    name: "Career",
    description: "The conquest of profession, deep work, coding, and production. Governs your active craft output, architecture designs, and professional milestones.",
    poeticSubtitle: "Professional Conquest",
    iconName: "briefcase",
    accentColor: "#3b82f6", // Royal blue
  },
  {
    id: "family",
    name: "Family",
    description: "The alliances of kin, close companions, partners, and friends. Guards the sovereign's heart against the cold drafts of isolation.",
    poeticSubtitle: "Kinship & Alliances",
    iconName: "heart",
    accentColor: "#ec4899", // Deep pink
  },
  {
    id: "estate",
    name: "Estate",
    description: "The upkeep of your sanctuary and living base of operations. Governs household organization, physical order, deep cooking, and home security.",
    poeticSubtitle: "The Castle Keep",
    iconName: "home",
    accentColor: "#10b981", // Emerald green
  },
  {
    id: "wealth",
    name: "Wealth",
    description: "The royal treasury, passive engines, budgets, and strategic financial reserves. Governs material autonomy, tracking protocols, and legacy defense.",
    poeticSubtitle: "The Royal Treasury",
    iconName: "coins",
    accentColor: "#eab308", // Gold yellow
  },
  {
    id: "personalGrowth",
    name: "Personal Growth",
    description: "The citadel of mind, high study, reading, restorative sleep, physical fitness, and mental stamina.",
    poeticSubtitle: "Sovereign Fortitude",
    iconName: "bookOpen",
    accentColor: "#a855f7", // Noble purple
  },
  {
    id: "adventures",
    name: "Adventures",
    description: "The expeditions of leisure, spontaneous travels, refreshing hobbies, and wild play that renew the spirit of the ruler.",
    poeticSubtitle: "Royal Expeditions",
    iconName: "compass",
    accentColor: "#f97316", // Amber orange
  },
];

const FALLBACK_DECREE: AdvisorDecree = {
  decreeTitle: "The Decree of Resolute Alignment",
  morningBrief: "Sire, the sun rises over your sovereign domain. Let us focus our turn's energy into exactly one deliberate, high-impact move to reinforce the order of your life.",
  realmsStatus: {
    career: "The Career front demands focus today; professional backlogs must be dissolved with high-efficiency work.",
    family: "The Family realm flourishes when we dispatch a timely alliance-strengthening communication.",
    estate: "The Estate has grown quiet; organizing your central keep restores high psychological clarity.",
    wealth: "The Wealth treasury is stable, but guarding against silent material leakages preserves sovereign autonomy.",
    personalGrowth: "Personal Growth is ready for a restorative offline session to recharge mental stamina.",
    adventures: "A new opportunity for brief, spontaneous exploration awaits in the outer marches of leisure."
  },
  keyFrictionPoints: "Demanding professional pressures have left little energy for your physical home base and restorative rest.",
  recommendedAction: {
    title: "Draft the Core Blueprint",
    realm: "Career",
    description: "Dedicate 35 minutes of offline, uninterrupted coding or planning to your primary active development project.",
    impact: "+ Career momentum, dissolving cognitive overload",
    cost: "Requires 35 Minutes Focus"
  },
  alternativeMoves: [
    {
      title: "Consolidate the Central Keep",
      realm: "Estate",
      description: "Perform a quick 15-minute sweep of your physical workspace, returning stray items to their designated posts.",
      impact: "+ Clean workspace, relieving daily ambient stress",
      cost: "Requires 15 Minutes"
    },
    {
      title: "Vigorous Perimeter Patrol",
      realm: "Personal Growth",
      description: "Complete a brisk, 25-minute outdoor walk without looking at any digital screens (no phone).",
      impact: "+ Vigor, restorative oxygenation, clarity",
      cost: "Requires 25 Mins Offline"
    }
  ],
  closingMotivation: "Tackle your chosen campaign with silent resolution. Your realms stand aligned, Sire."
};

const SUGGESTED_TEMPLATES = [
  "Working on heavy software development today under major timeline pressure. Feeling focused but my physical desk is a total mess.",
  "High vigor morning! Aiming to track family finances, tidy up the living quarters, and schedule a weekend hike with a partner.",
  "Feeling slightly isolated. Need to check in on parents, work on code backlogs, and do a solid workout to clear my head.",
  "Drained from intense work sprint. Need a slow day prioritizing health, small home organization chores, and early rest."
];

export default function App() {
  // Current user screen stage
  // 'PREP': Morning input & setup
  // 'DECISION': View advice, pick a single move
  // 'EXECUTION': Do the chosen move with stopwatch
  // 'RECONCILED': Successful completion & seal
  const [appStage, setAppStage] = useState<"PREP" | "DECISION" | "EXECUTION" | "RECONCILED">("PREP");

  // App States
  const [morningIntel, setMorningIntel] = useState<string>("");
  const [selectedAlignment, setSelectedAlignment] = useState<AlignmentType>("Sovereign Balance");
  const [activeRealmId, setActiveRealmId] = useState<RealmId>("career");
  
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

  // Draft decrees (AI Fetch)
  const handleDraftDecrees = async () => {
    if (!morningIntel.trim()) {
      alert("Please brief the Game Master on your current life state before drafting the turn decree, Sire.");
      return;
    }

    setLoadingDecree(true);
    setAppStage("DECISION");

    try {
      setIsFallbackActive(false);
      const response = await fetch("/api/advisor/decree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          morningIntel: morningIntel.trim(),
          alignment: selectedAlignment,
          history: logs.slice(0, 4), // provide brief context of past accomplishments
          localTime: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Advisor responded with error code");
      }

      const data = await response.json();
      setAdvisorDecree(data);
      // Pre-select primary recommended move
      if (data.recommendedAction) {
        setSelectedMove(data.recommendedAction);
        const mapToId = getRealmIdByLabel(data.recommendedAction.realm);
        if (mapToId) setActiveRealmId(mapToId);
      } else if (data.meaningfulMoves && data.meaningfulMoves.length > 0) {
        // Backwards compatibility or alternative structure
        setSelectedMove(data.meaningfulMoves[0]);
        const mapToId = getRealmIdByLabel(data.meaningfulMoves[0].realm);
        if (mapToId) setActiveRealmId(mapToId);
      }
    } catch (err) {
      console.warn("Could not retrieve strategic AI scroll, deploying Royal Reserves.", err);
      setIsFallbackActive(true);
      setAdvisorDecree(FALLBACK_DECREE);
      setSelectedMove(FALLBACK_DECREE.recommendedAction);
    } finally {
      setLoadingDecree(false);
    }
  };

  // Convert text labels to standard ID values
  const getRealmIdByLabel = (label: string): RealmId | null => {
    const norm = label.toLowerCase();
    if (norm.includes("career") || norm.includes("work") || norm.includes("conquest")) return "career";
    if (norm.includes("family") || norm.includes("kin") || norm.includes("alliance")) return "family";
    if (norm.includes("estate") || norm.includes("house") || norm.includes("keep") || norm.includes("home")) return "estate";
    if (norm.includes("wealth") || norm.includes("treasury") || norm.includes("finance")) return "wealth";
    if (norm.includes("personal") || norm.includes("growth") || norm.includes("fortitude") || norm.includes("health") || norm.includes("mind") || norm.includes("citadel")) return "personalGrowth";
    if (norm.includes("adventure") || norm.includes("expedition") || norm.includes("leisure") || norm.includes("play")) return "adventures";
    return null;
  };

  // Handle click on tactical move recommendation
  const handleSelectMove = (move: MeaningfulMove) => {
    setSelectedMove(move);
    const id = getRealmIdByLabel(move.realm);
    if (id) {
      setActiveRealmId(id);
    }
  };

  // Commit and Affix Sovereign Seal to begin active turn campaign
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

  // Complete active move & save log entry
  const handleConcludeAction = () => {
    if (!activeMove) return;

    // Stop timer
    setIsTimerRunning(false);

    // Save turn log
    const newLog: TurnLog = {
      turnNumber: turnCount,
      date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      decreeTitle: advisorDecree?.decreeTitle || "The Daily Edict",
      selectedMove: activeMove,
      completedAt: new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
      outcomeNotes: journalEntry.trim() || "The sovereign task was successfully accomplished with absolute focus.",
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

  // Re-enter morning preparation
  const handleBeginNewTurn = () => {
    setJournalEntry("");
    setMorningIntel("");
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

  const activeCampaignRealm = activeMove ? activeMove.realm : selectedMove ? selectedMove.realm : null;

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background visual atmospheric elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-20%] w-[80%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Royal Masthead Header */}
      <header className="border-b border-amber-950/40 bg-stone-950/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3 shadow-lg shadow-black/40">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center border border-amber-500/30 shadow-inner">
              <Crown className="w-4.5 h-4.5 text-amber-100" />
            </div>
            <div>
              <h1 className="font-serif text-base font-bold tracking-wider text-stone-100 uppercase flex items-center gap-1.5">
                RealMe <span className="text-[10px] font-mono font-medium text-amber-500 px-1.5 bg-amber-500/10 border border-amber-500/20 rounded">Turn {turnCount}</span>
              </h1>
              <p className="text-[9px] text-stone-400 uppercase tracking-widest font-semibold font-mono">
                Sovereign Life OS
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-serif font-bold text-amber-400 tracking-wide uppercase">
              {new Date().toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
            </span>
            <div className="text-[9px] font-mono text-stone-500 uppercase tracking-wider">
              2026 Turn
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 py-6 z-10 flex flex-col justify-start">
        
        {/* STAGE 1: MORNING PREPARATION & INTEL INPUT */}
        {appStage === "PREP" && (
          <div className="space-y-6 flex flex-col justify-between animate-fade-in">
            
            {/* Visual greeting card */}
            <div className="text-center py-6 px-4 bg-radial-[circle_at_center,rgba(120,53,15,0.08)_0%,transparent_100%] border-b border-stone-900">
              <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-widest">
                Sovereign Morning Briefing
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-100 mt-2 tracking-wide leading-tight">
                Brief Your Grand Game Master
              </h2>
              <p className="text-xs text-stone-400 mt-2 max-w-xs mx-auto">
                No sliders. No numeric safety meters. Just high-agency narrative strategy mapping real-life responsibilities.
              </p>
            </div>

            {/* Realms Dashboard Grid Component */}
            <RealmsDashboard
              realms={INITIAL_REALMS}
              activeRealmId={activeRealmId}
              onSelectRealm={(id) => setActiveRealmId(id)}
              activeCampaignRealm={null}
            />

            {/* Morning Intel TextArea */}
            <div className="space-y-3 bg-stone-900/40 border border-stone-900 rounded-2xl p-4">
              <div>
                <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">
                  Sovereign Intelligence
                </span>
                <h4 className="font-serif text-base font-bold text-stone-200 mt-0.5">
                  Declare Your Daily State
                </h4>
                <p className="text-xs text-stone-400 mt-0.5">
                  Brief the Game Master on active work deadlines, fatigue levels, active household projects, budgets, or family priorities.
                </p>
              </div>

              <textarea
                value={morningIntel}
                onChange={(e) => setMorningIntel(e.target.value)}
                placeholder="Sire, brief your advisor... (e.g., 'Intense code review delivery by noon today. Desk is a disaster, partner wants to connect tonight, and need to check my retirement tracking update.')"
                className="w-full h-28 bg-stone-950 border border-stone-900 focus:border-amber-500/50 rounded-xl p-3 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-500/15 transition-all resize-none"
              />

              {/* Inspiration Template Badges */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">
                  Quick Turn Brief Templates (Click to apply):
                </span>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTED_TEMPLATES.map((tmpl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMorningIntel(tmpl)}
                      className="text-left text-[11px] text-stone-400 hover:text-amber-300 transition-colors bg-stone-950/60 p-2 border border-stone-900 rounded-lg block truncate cursor-pointer"
                    >
                      💡 {tmpl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Turn Directive focus alignment selector */}
            <div className="bg-stone-900/40 border border-stone-900 rounded-2xl p-4">
              <AlignmentSelector
                selectedAlignment={selectedAlignment}
                onSelectAlignment={setSelectedAlignment}
              />
            </div>

            {/* Strategic Decree CTA Button */}
            <button
              onClick={handleDraftDecrees}
              id="draft-decrees-btn"
              className="w-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-950 hover:from-amber-500 hover:to-amber-900 text-stone-100 font-serif font-bold text-sm tracking-widest uppercase py-4 px-6 rounded-2xl border border-amber-500/40 hover:border-amber-400/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Consult Game Master</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

        {/* STAGE 2: DECISION MAP & MOVES REPORT */}
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
                    Consulting High Advisor...
                  </h3>
                  <p className="text-xs text-stone-400 max-w-xs mx-auto mt-1 italic">
                    "Sire, the High Advisor interprets your real life signals, identifying stagnations and charting today's single most meaningful campaign..."
                  </p>
                </div>
              </div>
            ) : (
              /* Live Turn Decision Dashboard */
              <div className="space-y-5">
                
                {/* Advisor's Grand Narrative Decree Panel */}
                <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10">
                    <Crown className="w-20 h-20 text-amber-500" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-amber-500/80 font-bold bg-amber-500/10 px-2 py-0.5 border border-amber-500/10 rounded">
                      Game Master Narration
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

                  <h3 className="font-serif text-xl font-bold text-amber-400 mt-3 tracking-wide">
                    {advisorDecree?.decreeTitle}
                  </h3>
                  <p className="text-xs text-stone-200 mt-2.5 leading-relaxed italic">
                    "{advisorDecree?.morningBrief}"
                  </p>
                </div>

                {/* Key Friction Points block */}
                {advisorDecree?.keyFrictionPoints && (
                  <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4 flex gap-3 items-start">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                        Active Friction Blockade
                      </h5>
                      <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                        {advisorDecree.keyFrictionPoints}
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive Realms Dashboard showing the 6 realms */}
                <div className="py-1">
                  <div className="flex justify-between items-center mb-2 px-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400">
                      Select Realm to inspect Advisor state:
                    </span>
                  </div>
                  <RealmsDashboard
                    realms={INITIAL_REALMS}
                    activeRealmId={activeRealmId}
                    onSelectRealm={(id) => setActiveRealmId(id)}
                    activeCampaignRealm={activeCampaignRealm}
                    advisorComments={advisorDecree?.realmsStatus}
                  />
                </div>

                {/* Question Headline */}
                <div className="text-center py-4 bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-amber-500/5 border-y border-stone-900/80 my-2">
                  <h3 className="font-serif text-base font-bold text-stone-100 uppercase tracking-wider">
                    “What is the most meaningful move I can make today?”
                  </h3>
                  <p className="text-[10px] text-stone-400 font-mono mt-1">
                    Commit to one clear strategy to dissolve daily complexity.
                  </p>
                </div>

                {/* Meaningful Moves - Primacy of recommendedAction, alternatives listed below */}
                <div className="space-y-4">
                  
                  {/* Recommended action (The central hero move) */}
                  {advisorDecree?.recommendedAction && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black block pl-1">
                        👑 Game Master's Highest Leverage Move
                      </span>
                      {(() => {
                        const move = advisorDecree.recommendedAction;
                        const isSelected = selectedMove?.title === move.title;
                        const mappedId = getRealmIdByLabel(move.realm);
                        const realmColor = INITIAL_REALMS.find(r => r.id === mappedId)?.accentColor || "#d97706";

                        return (
                          <button
                            onClick={() => handleSelectMove(move)}
                            id="recommended-move-btn"
                            className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                              isSelected
                                ? "bg-amber-950/20 border-amber-500 shadow-xl shadow-amber-950/40 scale-[1.01]"
                                : "bg-stone-900 border-stone-800/80 hover:bg-stone-900/80 hover:border-stone-700"
                            }`}
                          >
                            <div 
                              className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                              style={{ backgroundColor: realmColor }}
                            />

                            <div className="flex justify-between items-start gap-2 w-full pl-2">
                              <div>
                                <span 
                                  className="text-[10px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-stone-950 border border-stone-900 inline-block"
                                  style={{ color: realmColor }}
                                >
                                  ⚔ {move.realm} Domain
                                </span>
                                <h4 className="font-serif text-base font-bold text-stone-100 mt-2">
                                  {move.title}
                                </h4>
                              </div>
                              <span className="text-[8px] font-mono text-amber-950 bg-amber-400 px-2 py-0.5 rounded-full uppercase font-bold tracking-widest shadow-inner shrink-0">
                                Recommended
                              </span>
                            </div>

                            <p className="text-stone-200 text-xs leading-relaxed mt-3 pl-2">
                              {move.description}
                            </p>

                            <div className="flex justify-between items-center mt-4 pt-3 border-t border-stone-800 pl-2 text-[11px] font-mono">
                              <span className="text-emerald-400 font-bold">{move.impact}</span>
                              <span className="italic text-stone-400">{move.cost}</span>
                            </div>
                          </button>
                        );
                      })()}
                    </div>
                  )}

                  {/* Alternative Tactical options */}
                  {advisorDecree?.alternativeMoves && advisorDecree.alternativeMoves.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block pl-1 font-semibold">
                        Alternative Tactical Pivots
                      </span>
                      <div className="grid grid-cols-1 gap-2.5">
                        {advisorDecree.alternativeMoves.map((move, index) => {
                          const isSelected = selectedMove?.title === move.title;
                          const mappedId = getRealmIdByLabel(move.realm);
                          const realmColor = INITIAL_REALMS.find(r => r.id === mappedId)?.accentColor || "#d97706";

                          return (
                            <button
                              key={index}
                              onClick={() => handleSelectMove(move)}
                              id={`alternative-move-btn-${index}`}
                              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                                isSelected
                                  ? "bg-amber-950/20 border-amber-600/80 shadow-md shadow-black/20"
                                  : "bg-stone-900/40 border-stone-800/80 hover:bg-stone-900/70"
                              }`}
                            >
                              <div 
                                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                                style={{ backgroundColor: isSelected ? "#f59e0b" : realmColor }}
                              />

                              <div className="flex justify-between items-start gap-2 w-full pl-1">
                                <div>
                                  <span 
                                    className="text-[9px] font-mono font-bold uppercase tracking-widest"
                                    style={{ color: realmColor }}
                                  >
                                    {move.realm} Route
                                  </span>
                                  <h4 className="font-serif text-sm font-bold text-stone-100 mt-0.5">
                                    {move.title}
                                  </h4>
                                </div>
                                {isSelected && (
                                  <span className="text-[9px] font-mono text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded uppercase font-semibold tracking-widest">
                                    Sovereign Chosen
                                  </span>
                                )}
                              </div>

                              <p className="text-stone-300 text-[11px] leading-relaxed mt-2 pl-1">
                                {move.description}
                              </p>

                              <div className="flex justify-between items-center mt-3 pt-2 border-t border-stone-800/40 pl-1 text-[10px] font-mono text-stone-400">
                                <span className="text-emerald-400 font-semibold">{move.impact}</span>
                                <span className="italic text-stone-500">{move.cost}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Closing Motivation Line */}
                  {advisorDecree?.closingMotivation && (
                    <p className="text-[11px] text-stone-400 text-center italic mt-4 px-4 leading-normal">
                      "{advisorDecree.closingMotivation}"
                    </p>
                  )}
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
                      <span>Affix Sovereign Seal & Begin Campaign</span>
                    </button>
                    <button
                      onClick={() => setAppStage("PREP")}
                      className="w-full mt-2.5 text-stone-500 hover:text-stone-300 font-mono text-[10px] uppercase tracking-widest py-1 transition-colors cursor-pointer"
                    >
                      ← Re-Brief the Game Master
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* STAGE 3: ACTIVE CAMPAIGN / MOVE IN PROGRESS */}
        {appStage === "EXECUTION" && activeMove && (
          <div className="space-y-6 animate-fade-in py-4">
            
            {/* Focal Header card */}
            <div className="text-center space-y-2 py-4 relative">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-2.5 py-1 border border-amber-500/10 rounded">
                Active Turn Focus
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-100 tracking-wide pt-1">
                {activeMove.title}
              </h2>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Your Grace, you are currently engaged in a high-leverage move. Focus completely offline.
              </p>
            </div>

            {/* Realms view in focus state */}
            <div className="opacity-70 scale-90 select-none py-1 pointer-events-none">
              <RealmsDashboard
                realms={INITIAL_REALMS}
                activeRealmId={getRealmIdByLabel(activeMove.realm)}
                onSelectRealm={() => {}}
                activeCampaignRealm={activeMove.realm}
              />
            </div>

            {/* Strategic instructions */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div>
                <span className="text-[9px] font-mono text-amber-500/80 uppercase tracking-widest font-bold">
                  Sovereign Action Protocol
                </span>
                <p className="text-stone-200 text-xs leading-relaxed mt-1">
                  {activeMove.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-stone-800/60 text-xs">
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">
                    Strategic Realm
                  </span>
                  <span className="text-emerald-400 font-mono font-bold mt-0.5 block">
                    {activeMove.realm}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">
                    Committed Cost
                  </span>
                  <span className="text-amber-500 font-mono font-bold mt-0.5 block">
                    {activeMove.cost}
                  </span>
                </div>
              </div>
            </div>

            {/* High Impact Timer */}
            <div className="p-6 bg-stone-950 border border-stone-900 rounded-2xl text-center space-y-2.5">
              <div className="flex items-center justify-center gap-1.5 text-stone-400">
                <Timer className="w-4.5 h-4.5 text-amber-500" />
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

            {/* Chroniclers' Scroll (Notes Box) */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold block pl-1">
                The Chronicle Scroll (Insights & Reflections)
              </label>
              <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="Sire, log your insights, obstacles overcome, or strategic notes on today's move..."
                className="w-full h-24 bg-stone-900/40 border border-stone-800 hover:border-stone-700 focus:border-amber-500/50 rounded-xl p-3 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-500/15 transition-all resize-none"
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
                Turn Concluded Successfully
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-100 tracking-wide">
                The Turn is Sealed
              </h2>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Your tactical decision has been executed. The chronicles have been written, and your realms stand aligned and defended.
              </p>
            </div>

            {/* Realms grid in passive state */}
            <div className="py-2">
              <RealmsDashboard
                realms={INITIAL_REALMS}
                activeRealmId={null}
                onSelectRealm={() => {}}
                activeCampaignRealm={null}
              />
            </div>

            {/* Reconciled review block */}
            {logs[0] && (
              <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 text-left space-y-3.5 max-w-sm mx-auto">
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block">
                    Turn Decree Edict
                  </span>
                  <span className="font-serif text-sm font-bold text-stone-100 block">
                    {logs[0].decreeTitle}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block">
                    Meaningful Move Executed
                  </span>
                  <span className="text-stone-300 text-xs font-semibold block mt-0.5">
                    {logs[0].selectedMove.title} ({logs[0].selectedMove.realm})
                  </span>
                  <p className="text-[11px] text-stone-400 leading-normal mt-0.5">
                    {logs[0].selectedMove.description}
                  </p>
                </div>
                {logs[0].outcomeNotes && (
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block">
                      Sovereign Insights Logged
                    </span>
                    <p className="text-stone-300 text-xs italic leading-relaxed mt-1">
                      "{logs[0].outcomeNotes}"
                    </p>
                  </div>
                )}
                <div className="pt-2.5 border-t border-stone-800/60 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase">
                    ★ Realm aligned
                  </span>
                  <span className="text-[9px] font-mono text-stone-500">
                    Sealed @ {logs[0].completedAt}
                  </span>
                </div>
              </div>
            )}

            {/* Complete turn and hold action */}
            <div className="pt-4">
              <button
                onClick={handleBeginNewTurn}
                id="begin-new-turn-btn"
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-black text-sm tracking-widest uppercase py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Settle Realms & Await Tomorrow</span>
              </button>
            </div>
          </div>
        )}

        {/* THE IMPERIAL CHRONICLES / TURN HISTORY SECTION */}
        {logs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-stone-900 space-y-4">
            <div className="flex items-center gap-2.5 pl-1">
              <Scroll className="w-4 h-4 text-amber-500" />
              <h3 className="font-serif text-sm font-bold text-stone-200 tracking-wider uppercase">
                The Imperial Chronicles
              </h3>
            </div>

            <div className="space-y-3">
              {logs.map((log, index) => (
                <div 
                  key={index} 
                  id={`chronicle-item-${index}`}
                  className="bg-stone-950 border border-stone-900 hover:border-stone-800 transition-all rounded-xl p-4 space-y-2.5 text-left"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-serif font-bold text-amber-500">
                      Turn {log.turnNumber}: {log.selectedMove.title}
                    </span>
                    <span className="text-[9px] font-mono text-stone-500">
                      {log.date} @ {log.completedAt}
                    </span>
                  </div>

                  <p className="text-stone-300 text-[11px] leading-relaxed italic">
                    "{log.outcomeNotes}"
                  </p>

                  <div className="flex justify-between items-center text-[9px] font-mono pt-2 border-t border-stone-900">
                    <span className="text-stone-500">
                      Decree: <span className="text-stone-400">{log.decreeTitle}</span>
                    </span>
                    <span className="text-amber-400 font-semibold uppercase">
                      {log.selectedMove.realm} Aligned
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Sovereign footer */}
      <footer className="border-t border-stone-900 bg-stone-950 py-8 text-center text-[10px] font-mono text-stone-600 mt-12 z-10">
        <div className="max-w-md mx-auto space-y-1">
          <p>© 2026 RealMe OS. All domains are aligned, safe, and sovereign.</p>
          <p>No fantasy numbers. Real life, strategically commanded.</p>
        </div>
      </footer>
    </div>
  );
}
