import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client on the server side
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not defined.");
}

// Grand Game Master / Strategic Advisor API Endpoint
app.post("/api/advisor/decree", async (req, res) => {
  try {
    if (!ai) {
      return res.status(500).json({
        error: "Sovereign Game Master is unavailable. Please check that GEMINI_API_KEY is configured in your Secrets."
      });
    }

    const { morningIntel, alignment, history, localTime } = req.body;
    const userAlignment = alignment ?? "Sovereign Balance";
    const userBrief = morningIntel ?? "The sovereign is maintaining a steady posture. All borders are quiet, with steady progress in the active campaigns.";

    const promptText = `
User Local Time: ${localTime || new Date().toISOString()}
User Selected Daily Alignment focus: "${userAlignment}"

The Sovereign's Daily State context (interpreted from past moves and the active state):
"${userBrief}"

Recent historical tactical moves or achievements logged:
${JSON.stringify(history || [])}

Analyze the sovereign's current posture and generate a daily strategic alignment. You are the High Game Master of 'RealMe', translating real-life goals, challenges, and concerns into a grand strategy turn. Keep the tone completely high-agency, calm, majestic, and wise (refer to the user as "Sergey", "Sire", "Your Majesty", "Your Grace", or "My Sovereign").

Do NOT include any numerical statistics, sliders, or RPG-like health percentages in your descriptions.

Evaluate how the user's state affects the six real-life Realms:
1. Career: Professional expansion, deep focus, investments, work performance, valuation projects.
2. Family: Immediate relationships, partner, parents, close alliances.
3. Estate: Living space, organization, construction projects, physical home base.
4. Wealth: Financial reserves, budgets, tracking, material safety.
5. Personal Growth: Mind, vigor, physical development, study, health.
6. Adventures: Spontaneous play, curiosity-driven pursuits, exploration. (Framed with the strongest fantasy language since leisure represents the adventurous outer marches).

Your analysis must build a daily briefing following these exact components:
1. Opening narrative (Game Master voice): Evaluate the sovereign's current focus and morning status.
2. Status of each Realm: Exactly one or two calm narrative sentences. NO numbers, NO percentages, NO stats.
   Example formats:
   - Career: The Career Front is active and demanding. One key valuation task is ready for completion today.
   - Family: The Family Realm is stable and strong. Recent attention has strengthened bonds.
   - Estate: The Estate has entered a dormant phase. No progress in recent days. Momentum is fading.
   - Wealth: The Wealth system is steady. No urgent shifts detected.
   - Personal Growth: Learning momentum is low but stable. Small progress would compound well.
   - Adventures: New ideas are forming. This domain is quiet but open to exploration.
3. Current Pressure Nodes (At least 3 nodes, but with absolutely no score or guilt language): List of active pressure points.
   Format of status: "stalled progress (8 days)", "high-impact task available", "stable and low risk", "demanding attention", etc.
4. ONE recommended action: The SINGLE highest-leverage Recommended Focus today.
   - Must correspond to exactly one of the six Realms.
   - Give it a simple, noble, and direct real-life focus title (e.g., "Call the contractor and confirm electrical work for the Estate", "Complete the valuations spreadsheet review", "Draft the core software schema").
   - Define a single, high-leverage real-world action to execute.
   - Highlight the real-world strategic benefit of completing this move (e.g., "Restores momentum and reduces background cognitive load", "Dissolves project paralysis").
   - Define a real-world resource requirement or commitment (e.g., "15 minutes", "30 minutes focus", "Requires 1 hour of quiet").
5. TWO alternative moves: Provide exactly 2 optional backup tactics in the same schema format as the recommended action.
6. Optional closing motivational line (Game Master fantasy voice).
`;

    // Resilient fallback models and automatic retry logic
    const modelsToTry = ["gemini-3.5-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
    let responseText = "";
    let lastError: any = null;

    for (const modelName of modelsToTry) {
      let attempts = 2; // Try each model up to 2 times
      for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
          console.log(`[Game Master API] Consulting ${modelName} (attempt ${attempt}/${attempts})...`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: promptText,
            config: {
              systemInstruction: "You are the wise Royal Game Master and Sovereign Advisor of the RealMe life operating system. You draft immersive, majestic, real-world strategic decrees for the King's life. Avoid empty stats or numeric meters. Ground your response in practical, noble, high-agency real life actions.",
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  decreeTitle: {
                    type: Type.STRING,
                    description: "The name of today's Turn Edict or Decree."
                  },
                  morningBrief: {
                    type: Type.STRING,
                    description: "The Game Master's morning opening narrative report (2-3 sentences max)."
                  },
                  realmsStatus: {
                    type: Type.OBJECT,
                    properties: {
                      career: { type: Type.STRING, description: "Calm narrative status for Career (1-2 sentences)." },
                      family: { type: Type.STRING, description: "Calm narrative status for Family (1-2 sentences)." },
                      estate: { type: Type.STRING, description: "Calm narrative status for Estate (1-2 sentences)." },
                      wealth: { type: Type.STRING, description: "Calm narrative status for Wealth (1-2 sentences)." },
                      personalGrowth: { type: Type.STRING, description: "Calm narrative status for Personal Growth (1-2 sentences)." },
                      adventures: { type: Type.STRING, description: "Calm narrative status for Adventures (1-2 sentences)." }
                    },
                    required: ["career", "family", "estate", "wealth", "personalGrowth", "adventures"]
                  },
                  pressureNodes: {
                    type: Type.ARRAY,
                    description: "Exactly three pressure points corresponding to Realms.",
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        realm: { type: Type.STRING, description: "One of: Career, Family, Estate, Wealth, Personal Growth, Adventures" },
                        status: { type: Type.STRING, description: "Status description e.g. 'stalled progress (8 days)', 'high-impact task available', 'stable and low risk'" }
                      },
                      required: ["realm", "status"]
                    }
                  },
                  keyFrictionPoints: {
                    type: Type.STRING,
                    description: "A short, vivid summary of the main friction blocking or pressing the Sovereign today."
                  },
                  recommendedAction: {
                    type: Type.OBJECT,
                    description: "The single highest leverage recommended focus for today.",
                    properties: {
                      title: { type: Type.STRING, description: "Epic/direct title of the action." },
                      realm: { type: Type.STRING, description: "One of: Career, Family, Estate, Wealth, Personal Growth, Adventures" },
                      description: { type: Type.STRING, description: "Practical, real-world action to execute." },
                      impact: { type: Type.STRING, description: "Real-world strategic benefit of this action." },
                      cost: { type: Type.STRING, description: "Resource requirement, e.g. '15 minutes' or '30 minutes focus'." }
                    },
                    required: ["title", "realm", "description", "impact", "cost"]
                  },
                  alternativeMoves: {
                    type: Type.ARRAY,
                    description: "Exactly two secondary backup tactical options if the sovereign pivots.",
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        title: { type: Type.STRING, description: "Backup option title." },
                        realm: { type: Type.STRING, description: "One of: Career, Family, Estate, Wealth, Personal Growth, Adventures" },
                        description: { type: Type.STRING, description: "Practical, real-world action to execute." },
                        impact: { type: Type.STRING, description: "Real-world strategic benefit." },
                        cost: { type: Type.STRING, description: "Resource requirement." }
                      },
                      required: ["title", "realm", "description", "impact", "cost"]
                    }
                  },
                  closingMotivation: {
                    type: Type.STRING,
                    description: "A short majestic, closing motivational remark in character."
                  }
                },
                required: ["decreeTitle", "morningBrief", "realmsStatus", "pressureNodes", "keyFrictionPoints", "recommendedAction", "alternativeMoves", "closingMotivation"]
              }
            }
          });

          if (response && response.text) {
            responseText = response.text;
            break; // Succeeded! Break out of retry attempts
          }
        } catch (err: any) {
          lastError = err;
          console.warn(`[Game Master API] Failed attempt ${attempt} for model ${modelName}:`, err.message || err);
          if (attempt < attempts) {
            await new Promise((resolve) => setTimeout(resolve, attempt * 500));
          }
        }
      }

      if (responseText) {
        break; // Successfully got response from this model, stop fallback loop
      }
    }

    if (!responseText) {
      throw lastError || new Error("All recommended AI game masters are temporarily offline.");
    }

    const result = JSON.parse(responseText.trim());
    return res.json(result);

  } catch (error: any) {
    console.error("Error in /api/advisor/decree:", error);
    return res.status(500).json({
      error: "The High Council has encountered a communication disturbance: " + (error.message || error)
    });
  }
});

// Setup Vite development server or production static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`RealMe sovereign server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
