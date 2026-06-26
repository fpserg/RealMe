export type RealmId = "career" | "family" | "estate" | "wealth" | "personalGrowth" | "adventures";

export interface Realm {
  id: RealmId;
  name: string;
  description: string;
  poeticSubtitle: string;
  iconName: string;
  accentColor: string;
}

export interface MeaningfulMove {
  title: string;
  realm: string; // Matches one of the Realms
  description: string;
  impact: string; // Real-world effect e.g. "Creates spatial clarity in your sanctuary"
  cost: string; // Real-world cost e.g. "Requires 15 Minutes"
}

export interface AdvisorDecree {
  decreeTitle: string;
  morningBrief: string; // Opening narrative
  realmsStatus: {
    career: string;
    family: string;
    estate: string;
    wealth: string;
    personalGrowth: string;
    adventures: string;
  };
  keyFrictionPoints: string; // Key friction points (what is blocked/demanding attention)
  recommendedAction: MeaningfulMove; // ONE recommended action (highest leverage move)
  alternativeMoves: MeaningfulMove[]; // Pivot options
  closingMotivation?: string; // Optional closing motivational line in fantasy tone
}

export interface TurnLog {
  turnNumber: number;
  date: string;
  decreeTitle: string;
  selectedMove: MeaningfulMove;
  completedAt: string | null;
  outcomeNotes?: string;
}

export type AlignmentType = 
  | "Expansion & Conquest" 
  | "Home & Hearth" 
  | "Legacy & Treasury" 
  | "Sovereign Health" 
  | "Spontaneous Exploration"
  | "Sovereign Balance";

export interface AlignmentDetail {
  type: AlignmentType;
  description: string;
  focusRealms: string[];
  iconName: string;
}
