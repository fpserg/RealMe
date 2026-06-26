import React, { useState, useEffect } from "react";
import { Realm, RealmId, MeaningfulMove, AdvisorDecree, TurnLog } from "./types";
import { 
  Briefcase, 
  Heart, 
  Home, 
  Coins, 
  BookOpen, 
  Compass, 
  Crown, 
  Timer, 
  Award, 
  Scroll, 
  AlertCircle
} from "lucide-react";

// The six real-life Realms, fully grounded with immersive strategic descriptions
const INITIAL_REALMS: Realm[] = [
  {
    id: "career",
    name: "Career",
    description: "The conquest of profession, deep focus, investments, work performance, and valuation projects.",
    poeticSubtitle: "Professional Conquest",
    iconName: "briefcase",
    accentColor: "#3b82f6", // Royal blue
  },
  {
    id: "family",
    name: "Family",
    description: "The alliances of kin, close companions, partner, and parents. Guards against isolation.",
    poeticSubtitle: "Kinship & Alliances",
    iconName: "heart",
    accentColor: "#ec4899", // Deep pink
  },
  {
    id: "estate",
    name: "Estate",
    description: "The upkeep of your sanctuary, living quarters, and physical home base of operations.",
    poeticSubtitle: "The Castle Keep",
    iconName: "home",
    accentColor: "#10b981", // Emerald green
  },
  {
    id: "wealth",
    name: "Wealth",
    description: "The treasury, tracking budgets, financial buffers, and strategic reserves.",
    poeticSubtitle: "The Royal Treasury",
    iconName: "coins",
    accentColor: "#eab308", // Gold yellow
  },
  {
    id: "personalGrowth",
    name: "Personal Growth",
    description: "The citadel of mind, high study, reading, physical development, and health.",
    poeticSubtitle: "Sovereign Fortitude",
    iconName: "bookOpen",
    accentColor: "#a855f7", // Noble purple
  },
  {
    id: "adventures",
    name: "Adventures",
    description: "The expeditions of leisure, spontaneous play, curiosity-driven pursuits, and wild play.",
    poeticSubtitle: "Royal Expeditions",
    iconName: "compass",
    accentColor: "#f97316", // Amber orange
  },
];

const FALLBACK_DECREE: AdvisorDecree = {
  decreeTitle: "The Edict of Resolute Balance",
  morningBrief: "Sire, the sun rises over your sovereign domain. Let us focus our turn's energy into exactly one deliberate, high-impact move to reinforce the order of your life.",
  realmsStatus: {
    career: "The Career Front is active and demanding. One key valuation task is ready for completion today.",
    family: "The Family Realm is stable and strong. Recent attention has strengthened bonds.",
    estate: "The Estate has entered a dormant phase. No progress in recent days. Momentum is fading.",
    wealth: "The Wealth system is steady. No urgent shifts detected.",
    personalGrowth: "Learning momentum is low but stable. Small progress would compound well.",
    adventures: "New ideas are forming. This domain is quiet but open to exploration."
  },
  pressureNodes: [
    { realm: "Estate", status: "stalled progress (8 days)" },
    { realm: "Career", status: "high-impact task available" },
    { realm: "Family", status: "stable and low risk" }
  ],
  recommendedAction: {
    title: "Call the contractor and confirm electrical work for the Estate.",
    realm: "Estate",
    description: "Connect with the foreman to lock in the kitchen electrical rewiring schedule.",
    impact: "Restores momentum and reduces background cognitive load.",
    cost: "15 minutes"
  }
};

export default function App() {
  // Stages: 'BRIEFING' | 'EXECUTION' | 'RECONCILED'
  const [appStage, setAppStage] = useState<"BRIEFING" | "EXECUTION" | "RECONCILED">("BRIEFING");

  // State Management
  const [turnCount, setTurnCount] = useState<number>(1);
  const [advisorDecree, setAdvisorDecree] = useState<AdvisorDecree | null>(null);
  const [loadingDecree, setLoadingDecree] = useState<boolean>(false);
  const [selectedMove, setSelectedMove] = useState<MeaningfulMove | null>(null);
  const [logs, setLogs] = useState<TurnLog[]>([]);
  const [isFallbackActive, setIsFallbackActive] = useState<boolean>(false);

  // Execution Phase State
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

      const savedActiveMove = localStorage.getItem("realme_active_move");
      if (savedActiveMove) {
        const move = JSON.parse(savedActiveMove);
        setSelectedMove(move);
        setAppStage("EXECUTION");
        const savedTimer = localStorage.getItem("realme_timer_seconds");
        if (savedTimer) {
          setTimerSeconds(parseInt(savedTimer, 10));
          setIsTimerRunning(true);
        }
      }
    } catch (e) {
      console.error("Failed to restore state", e);
    }
  }, []);

  // Automatic Fetch of Advisor Decree on Stage 'BRIEFING'
  useEffect(() => {
    if (appStage === "BRIEFING" && !advisorDecree && !loadingDecree) {
      loadSovereignDecree();
    }
  }, [appStage, advisorDecree]);

  // Stopwatch interval
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

  // Fetch from Strategic Advisor
  const loadSovereignDecree = async () => {
    setLoadingDecree(true);
    setIsFallbackActive(false);

    try {
      // Build brief using the last action's logged outcome notes for continuity
      const lastOutcomeNote = logs[0]?.outcomeNotes || "";
      const lastActionTitle = logs[0]?.selectedMove?.title || "";
      const userBriefContext = lastOutcomeNote 
        ? `The sovereign recently aligned the ${logs[0]?.selectedMove?.realm} realm by completing the task: "${lastActionTitle}". Sovereign noted: "${lastOutcomeNote}".`
        : "The sovereign is maintaining a steady posture. All borders are quiet, with steady progress in the active campaigns.";

      const response = await fetch("/api/advisor/decree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          morningIntel: userBriefContext,
          alignment: "Sovereign Balance",
          history: logs.slice(0, 4),
          localTime: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Advisor responded with error status");
      }

      const data = await response.json();
      setAdvisorDecree(data);
      if (data.recommendedAction) {
        setSelectedMove(data.recommendedAction);
      }
    } catch (err) {
      console.warn("Could not fetch advisor counsel. Triggering local archive backups.", err);
      setIsFallbackActive(true);
      setAdvisorDecree(FALLBACK_DECREE);
      setSelectedMove(FALLBACK_DECREE.recommendedAction);
    } finally {
      setLoadingDecree(false);
    }
  };

  // Helper to map icons
  const getRealmIcon = (id: string, className: string) => {
    switch (id.toLowerCase()) {
      case "career":
        return <Briefcase className={className} />;
      case "family":
        return <Heart className={className} />;
      case "estate":
        return <Home className={className} />;
      case "wealth":
        return <Coins className={className} />;
      case "personalgrowth":
      case "personal growth":
        return <BookOpen className={className} />;
      case "adventures":
        return <Compass className={className} />;
      default:
        return <Crown className={className} />;
    }
  };

  // Settle turn and begin active offline Campaign
  const handleAffixSeal = () => {
    if (!selectedMove) return;
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setJournalEntry("");
    setAppStage("EXECUTION");

    localStorage.setItem("realme_active_move", JSON.stringify(selectedMove));
    localStorage.setItem("realme_timer_seconds", "0");
  };

  // Complete and log action
  const handleConcludeAction = () => {
    if (!selectedMove) return;
    setIsTimerRunning(false);

    const newLog: TurnLog = {
      turnNumber: turnCount,
      date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      decreeTitle: advisorDecree?.decreeTitle || "The Turn of Resolute Edict",
      selectedMove: selectedMove,
      completedAt: new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
      outcomeNotes: journalEntry.trim() || "The task was executed with deliberate offline focus.",
    };

    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem("realme_logs", JSON.stringify(updatedLogs));

    // Progress Turn Count
    const nextTurn = turnCount + 1;
    setTurnCount(nextTurn);
    localStorage.setItem("realme_turn_count", nextTurn.toString());

    // Clear state
    localStorage.removeItem("realme_active_move");
    localStorage.removeItem("realme_timer_seconds");

    setAppStage("RECONCILED");
  };

  // Reset to morning briefing
  const handleBeginNewTurn = () => {
    setJournalEntry("");
    setAdvisorDecree(null);
    setSelectedMove(null);
    setAppStage("BRIEFING");
  };

  // Format time display
  const formatTime = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs > 0 ? hrs + ":" : ""}${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Visual Atmospheric Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_0%,transparent_70%)]" />
      </div>

      <main className="flex-1 w-full max-w-md mx-auto px-5 py-8 z-10 flex flex-col justify-start">
        
        {/* STAGE 1: MORNING BRIEFING (PRIMARY SCREEN) */}
        {appStage === "BRIEFING" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* 🌅 1. HEADER (MINIMAL) */}
            <div className="text-center py-4 border-b border-stone-900">
              <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase font-bold">REALME</p>
              <h2 className="text-[11px] font-mono text-amber-500 uppercase tracking-widest mt-1.5 font-bold">
                Turn {turnCount} — Morning Briefing
              </h2>
              <h1 className="font-serif text-3xl font-bold mt-5 tracking-wide text-stone-100">
                Good morning, Sergey.
              </h1>
              <p className="font-serif text-lg text-stone-300 italic mt-2">
                The Realm awaits your command.
              </p>
              <p className="text-[11px] font-mono text-stone-500 mt-4 italic">
                “You do not need to solve everything today.”
              </p>
            </div>

            {loadingDecree ? (
              /* High counsel load spinner */
              <div className="py-24 text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-full border-2 border-stone-900 border-t-amber-500 animate-spin" />
                  <Crown className="w-4 h-4 text-amber-500 absolute inset-0 m-auto animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-amber-500 uppercase tracking-widest">
                    Assembling Turn Council...
                  </h3>
                  <p className="text-[11px] text-stone-500 max-w-xs mx-auto mt-1 italic leading-normal">
                    The High Advisor interprets past achievements and aligns active spheres...
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* 🧭 2. REALM STATUS OVERVIEW (CORE SECTION) */}
                <div className="space-y-4 bg-stone-900/30 border border-stone-900 rounded-2xl p-5">
                  <h3 className="text-[10px] font-mono tracking-widest text-stone-400 uppercase border-b border-stone-850/60 pb-2.5 font-black">
                    🧭 Realm Status Overview
                  </h3>
                  <div className="space-y-4">
                    {INITIAL_REALMS.map((realm) => {
                      // Grab descriptive sentence from advisor decree
                      const statusText = advisorDecree?.realmsStatus[realm.id] || "Aligning focus dynamics...";
                      return (
                        <div key={realm.id} className="flex gap-3.5 items-start">
                          <div 
                            className="p-2 bg-stone-950 rounded-xl shrink-0 border border-stone-900"
                            style={{ color: realm.accentColor }}
                          >
                            {getRealmIcon(realm.id, "w-4 h-4")}
                          </div>
                          <div>
                            <h4 className="font-serif text-xs font-bold text-stone-200">
                              {realm.name}
                            </h4>
                            <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                              {statusText}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ⚠️ 3. PRESSURE FOCUS PANEL (SMALL SECTION) */}
                <div className="bg-stone-900/30 border border-stone-900 rounded-2xl p-5 space-y-3">
                  <h3 className="text-[10px] font-mono tracking-widest text-stone-400 uppercase border-b border-stone-850/60 pb-2.5 font-black">
                    ⚠️ Current Pressure Nodes
                  </h3>
                  <ul className="space-y-2.5">
                    {advisorDecree?.pressureNodes?.map((node, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-stone-300 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="text-stone-400 font-bold uppercase tracking-wide">{node.realm}</span>
                        <span className="text-stone-600 font-light">—</span>
                        <span className="text-stone-300">{node.status}</span>
                      </li>
                    ))}
                    {(!advisorDecree?.pressureNodes || advisorDecree.pressureNodes.length === 0) && (
                      <li className="text-xs text-stone-500 font-mono italic">
                        No active pressure blockades detected.
                      </li>
                    )}
                  </ul>
                </div>

                {/* 🎯 4. SINGLE RECOMMENDED ACTION (MOST IMPORTANT) */}
                {selectedMove && (
                  <div className="bg-amber-950/10 border-2 border-amber-600/30 rounded-2xl p-6 space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <Crown className="w-24 h-24 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-black">
                        🎯 Recommended Focus
                      </h3>
                      <p className="text-[11px] text-stone-400 mt-1 font-mono">
                        One action will reduce the most pressure today:
                      </p>
                    </div>

                    <div className="border-l-2 border-amber-500 pl-4 py-1">
                      <h4 className="font-serif text-lg font-bold text-stone-100 tracking-wide">
                        {selectedMove.title}
                      </h4>
                      <p className="text-stone-300 text-xs mt-2.5 leading-relaxed">
                        {selectedMove.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-stone-900/80 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider block">
                          Estimated effort
                        </span>
                        <span className="text-amber-400 font-bold mt-1 block">
                          {selectedMove.cost}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider block">
                          Impact
                        </span>
                        <span className="text-emerald-400 font-bold mt-1 block">
                          {selectedMove.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ▶️ 5. PRIMARY ACTION BUTTON */}
                {selectedMove && (
                  <div className="pt-2">
                    <button
                      onClick={handleAffixSeal}
                      id="begin-turn-btn"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-black text-sm tracking-widest uppercase py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-amber-400/20"
                    >
                      <span>Begin Turn</span>
                    </button>
                  </div>
                )}

                {/* 🌙 6. FOOTER */}
                <div className="text-center py-4 text-xs text-stone-500 italic font-mono">
                  “The Realm responds to action, not intention.”
                </div>

              </div>
            )}
          </div>
        )}

        {/* STAGE 2: ACTIVE CAMPAIGN / EXECUTION IN PROGRESS */}
        {appStage === "EXECUTION" && selectedMove && (
          <div className="space-y-6 animate-fade-in py-2">
            
            <div className="text-center space-y-2 py-4">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black bg-amber-500/10 px-2.5 py-1 border border-amber-500/10 rounded">
                Active Turn Focus
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-100 tracking-wide pt-2">
                {selectedMove.title}
              </h2>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Sergey, you are currently engaged in a high-leverage focus campaign. Silence digital borders and proceed.
              </p>
            </div>

            {/* Strategic Details panel */}
            <div className="bg-stone-900/60 border border-stone-850 rounded-2xl p-5 shadow-xl space-y-4">
              <div>
                <span className="text-[9px] font-mono text-amber-500/80 uppercase tracking-widest font-bold">
                  Sovereign Action Protocol
                </span>
                <p className="text-stone-200 text-xs leading-relaxed mt-2.5">
                  {selectedMove.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-stone-800/60 text-xs">
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">
                    Strategic Realm
                  </span>
                  <span className="text-emerald-400 font-mono font-bold mt-1 block">
                    {selectedMove.realm}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">
                    Estimated commitment
                  </span>
                  <span className="text-amber-500 font-mono font-bold mt-1 block">
                    {selectedMove.cost}
                  </span>
                </div>
              </div>
            </div>

            {/* Stopwatch counter */}
            <div className="p-6 bg-stone-950 border border-stone-900 rounded-2xl text-center space-y-2.5">
              <div className="flex items-center justify-center gap-1.5 text-stone-400">
                <Timer className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                  Campaign Duration
                </span>
              </div>
              <div className="text-4xl font-mono font-light text-stone-100 tracking-wider">
                {formatTime(timerSeconds)}
              </div>
              <p className="text-[10px] text-stone-500 italic">
                Focus entirely on the action. Let the hours pass with absolute silence.
              </p>
            </div>

            {/* Chroniclers' Scroll */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold block pl-1">
                The Chronicle Scroll (Insights & Reflections for Tomorrow)
              </label>
              <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="Log any strategic notes, obstacles, or lessons to feed tomorrow's briefing counsel..."
                className="w-full h-24 bg-stone-900/40 border border-stone-850 hover:border-stone-800 focus:border-amber-500/50 rounded-xl p-3.5 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-500/15 transition-all resize-none"
              />
            </div>

            {/* Conclude Action */}
            <button
              onClick={handleConcludeAction}
              id="conclude-action-btn"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-750 hover:from-emerald-500 hover:to-emerald-600 text-stone-100 font-serif font-bold text-sm tracking-widest uppercase py-4 px-6 rounded-2xl border border-emerald-500/30 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Conclude Sovereign Action</span>
            </button>
          </div>
        )}

        {/* STAGE 3: RECONCILED / TURN SEALED */}
        {appStage === "RECONCILED" && (
          <div className="space-y-6 animate-fade-in py-4 text-center">
            
            <div className="inline-flex w-14 h-14 rounded-full bg-emerald-950/40 border border-emerald-500/30 items-center justify-center shadow-lg mb-1">
              <Award className="w-7 h-7 text-emerald-400 animate-bounce" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Turn Concluded Successfully
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-100 tracking-wide">
                The Turn is Sealed
              </h2>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Your action has been recorded in the Chronicles. Your domains stand aligned and guarded.
              </p>
            </div>

            {/* Log review */}
            {logs[0] && (
              <div className="bg-stone-900/60 border border-stone-850 rounded-2xl p-5 text-left space-y-3.5 max-w-sm mx-auto">
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                    Strategic Decree Edict
                  </span>
                  <span className="font-serif text-sm font-bold text-stone-100 block mt-0.5">
                    {logs[0].decreeTitle}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                    Focus Completed
                  </span>
                  <span className="text-stone-200 text-xs font-semibold block mt-1">
                    {logs[0].selectedMove.title} ({logs[0].selectedMove.realm})
                  </span>
                  <p className="text-[11px] text-stone-400 leading-normal mt-1">
                    {logs[0].selectedMove.description}
                  </p>
                </div>
                {logs[0].outcomeNotes && (
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                      Sovereign Insights
                    </span>
                    <p className="text-stone-300 text-xs italic leading-relaxed mt-1">
                      "{logs[0].outcomeNotes}"
                    </p>
                  </div>
                )}
                <div className="pt-2.5 border-t border-stone-800/60 flex justify-between items-center text-[9px] font-mono">
                  <span className="text-emerald-400 font-bold">★ Active Alignment Secured</span>
                  <span className="text-stone-500">{logs[0].completedAt}</span>
                </div>
              </div>
            )}

            {/* Next turn trigger */}
            <div className="pt-4">
              <button
                onClick={handleBeginNewTurn}
                id="begin-new-turn-btn"
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-black text-sm tracking-widest uppercase py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Settle Realms & Await Tomorrow</span>
              </button>
            </div>
          </div>
        )}

        {/* THE IMPERIAL CHRONICLES (HISTORY FEED) */}
        {logs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-stone-900 space-y-4">
            <div className="flex items-center gap-2 pl-1">
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
                  className="bg-stone-950 border border-stone-900 hover:border-stone-850 transition-all rounded-xl p-4 space-y-2.5 text-left"
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

      {/* Persistent Minimalist Footer */}
      <footer className="border-t border-stone-900 bg-stone-950 py-8 text-center text-[10px] font-mono text-stone-600 mt-12 z-10">
        <div className="max-w-md mx-auto space-y-1">
          <p>© 2026 RealMe OS. All domains are aligned, safe, and sovereign.</p>
          <p>No fantasy numbers. Real life, strategically commanded.</p>
        </div>
      </footer>
    </div>
  );
}
