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
    const userBrief = morningIntel ?? "The sovereign did not declare any custom morning challenges. All borders are quiet.";

    const promptText = `
User Local Time: ${localTime || new Date().toISOString()}
User Selected Daily Alignment focus: "${userAlignment}"

The Sovereign's Morning Intel report (User's description of their current state, challenges, deadlines, fatigue levels, relationships, and priorities):
"${userBrief}"

Recent historical tactical moves or achievements logged:
${JSON.stringify(history || [])}

Analyze the user's description and generate a daily strategic alignment. You are the High Game Master of 'RealMe', translating real-life goals, challenges, and concerns into a grand strategy turn. Keep the tone completely high-agency, calm, majestic, and wise (refer to the user as "Sire", "Your Majesty", "Your Grace", or "My Sovereign").

Do NOT include any numerical statistics, sliders, or RPG-like health percentages in your descriptions.

Evaluate how the user's morning description affects the six real-life Realms:
1. Career: Professional expansion, coding, focus hours, work output, projects.
2. Family: Immediate relationships, partner, parents, children, key friendships.
3. Estate: Living space, organization, cooking, physical home base.
4. Wealth: Financial buffers, tracking, budget clarity, investment engines.
5. Personal Growth: Mind, sleep, vigor, study, physical health, reading.
6. Adventures: Play, hobbies, exploration, trips, scheduling leisure. (Framed with the strongest fantasy language since leisure represents the adventurous outer marches).

Your analysis must build a daily briefing following these exact components:
1. Opening narrative (Game Master voice): Evaluate the sovereign's current focus and morning status.
2. Status of each Realm: Exactly one-sentence descriptive status updates indicating if it's flourishing, neglected, demanding upkeep, or building momentum.
3. Key friction points: Summarize what is currently blocked, neglected, or causing cognitive anxiety / pressure.
4. ONE recommended action: The SINGLE highest-leverage Meaningful Move for today. 
   - Must correspond to exactly one of the six Realms (e.g., "Career", "Family", "Estate", "Wealth", "Personal Growth", "Adventures").
   - Give it an epic, fantasy strategy title (e.g. "Consolidate the Central Archives", "Fortify the Northern Perimeter", "Gather Kin to the Banquet Table").
   - Define a single, high-leverage real-world action to execute (e.g., "Review your project's index file for 20 minutes without looking at emails", "Message a sibling to coordinate a phone call", "Clean the kitchen counter until spotless to secure your base of operations").
   - Highlight the real-world strategic impact of completing this move (e.g., "+ Career momentum, removing executive paralysis").
   - Define a real-world resource requirement or commitment (e.g., "Requires 20 Minutes of offline focus", "Requires an act of courage", "Requires 1 Hour of screen-free quiet").
5. TWO alternative moves: Provide exactly 2 optional backup tactics (in the same schema format as the recommended action) representing alternative pivots if the Sovereign must steer elsewhere.
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
                      career: { type: Type.STRING, description: "One-sentence strategic guidance for Career." },
                      family: { type: Type.STRING, description: "One-sentence strategic guidance for Family." },
                      estate: { type: Type.STRING, description: "One-sentence strategic guidance for Estate." },
                      wealth: { type: Type.STRING, description: "One-sentence strategic guidance for Wealth." },
                      personalGrowth: { type: Type.STRING, description: "One-sentence strategic guidance for Personal Growth." },
                      adventures: { type: Type.STRING, description: "One-sentence strategic guidance for Adventures." }
                    },
                    required: ["career", "family", "estate", "wealth", "personalGrowth", "adventures"]
                  },
                  keyFrictionPoints: {
                    type: Type.STRING,
                    description: "A short, vivid summary of the main friction blocking or pressing the Sovereign today."
                  },
                  recommendedAction: {
                    type: Type.OBJECT,
                    description: "The single highest leverage recommended move for today.",
                    properties: {
                      title: { type: Type.STRING, description: "Epic historical/strategy title for the move." },
                      realm: { type: Type.STRING, description: "One of: Career, Family, Estate, Wealth, Personal Growth, Adventures" },
                      description: { type: Type.STRING, description: "Practical, real-world action to execute." },
                      impact: { type: Type.STRING, description: "Real-world strategic benefit of this action." },
                      cost: { type: Type.STRING, description: "Resource requirement or duration description." }
                    },
                    required: ["title", "realm", "description", "impact", "cost"]
                  },
                  alternativeMoves: {
                    type: Type.ARRAY,
                    description: "Exactly two secondary backup tactical options if the sovereign pivots.",
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        title: { type: Type.STRING, description: "Epic historical/strategy title." },
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
                required: ["decreeTitle", "morningBrief", "realmsStatus", "keyFrictionPoints", "recommendedAction", "alternativeMoves", "closingMotivation"]
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
