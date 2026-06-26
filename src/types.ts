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
  impact: string; // Real-world benefit
  cost: string; // Estimated effort/cost
}

export interface PressureNode {
  realm: string;
  status: string; // e.g. "stalled progress (8 days)", "high-impact task available", "stable and low risk"
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
  pressureNodes: PressureNode[]; // Current Pressure Nodes
  recommendedAction: MeaningfulMove; // ONE recommended focus
  alternativeMoves?: MeaningfulMove[]; // Pivot options (optional in new v1 spec but good for fallback)
  closingMotivation?: string;
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
