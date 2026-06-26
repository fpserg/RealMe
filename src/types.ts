export type ProvinceId = "citadel" | "trainingGrounds" | "forge" | "sanctuary";

export interface Province {
  id: ProvinceId;
  name: string;
  title: string;
  stability: number; // 0 - 100
  description: string;
  poeticSubtitle: string;
  color: string; // Tailwind class
  accentColor: string; // hex or similar
  glowClass: string;
}

export interface MeaningfulMove {
  title: string;
  province: string; // E.g., "Citadel", "Training Grounds", "Forge", "Sanctuary"
  description: string;
  impact: string;
  cost: string;
}

export interface AdvisorDecree {
  decreeTitle: string;
  morningBrief: string;
  provincesStatus: {
    citadel: string;
    trainingGrounds: string;
    forge: string;
    sanctuary: string;
  };
  meaningfulMoves: MeaningfulMove[];
}

export interface TurnLog {
  turnNumber: number;
  date: string;
  decreeTitle: string;
  selectedMove: MeaningfulMove;
  completedAt: string | null;
  outcomeNotes?: string;
  stabilityAdjustments?: Record<ProvinceId, number>;
}

export type AlignmentType = 
  | "Calm Reflection" 
  | "Aggressive Growth" 
  | "Strategic Defense" 
  | "Vitality Focus" 
  | "Sovereign Balance";

export interface AlignmentDetail {
  type: AlignmentType;
  description: string;
  bonus: string;
  iconName: string;
}
