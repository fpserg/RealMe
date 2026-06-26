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

// Grand Advisor API Endpoint
app.post("/api/advisor/decree", async (req, res) => {
  try {
    if (!ai) {
      return res.status(500).json({
        error: "Sovereign Advisor is unavailable. Please make sure GEMINI_API_KEY is configured in your Settings > Secrets panel."
      });
    }

    const { provinces, alignment, history, localTime } = req.body;

    const citadelVal = provinces?.citadel ?? 50;
    const trainingVal = provinces?.trainingGrounds ?? 50;
    const forgeVal = provinces?.forge ?? 50;
    const sanctuaryVal = provinces?.sanctuary ?? 50;
    const userAlignment = alignment ?? "Calm Alignment";

    const promptText = `
User Local Time: ${localTime || new Date().toISOString()}
User Alignment Strategy Chosen: "${userAlignment}"

Current Stability levels of the Provinces (0% is completely neglected/vulnerable, 100% is exceptionally strong and secure):
- The Citadel (Mind & Reflection): ${citadelVal}%
- The Training Grounds (Body & Vitality): ${trainingVal}%
- The Forge (Craft & Fortune): ${forgeVal}%
- The Sanctuary (Relations & Heart): ${sanctuaryVal}%

Recent historical moves or achievements recorded:
${JSON.stringify(history || [])}

Generate a morning turn briefing that makes the user feel exactly like a King opening their strategic map at the beginning of a turn in a grand strategy game. The tone must be:
- Calm, dignified, optimistic, high-agency, and completely in control.
- Sovereign-supportive (refer to the user as "Sire", "My Sovereign", "Your Grace", or "Your Majesty").
- Grounded and realistic, not overhyped, silly, or dramatic AI slop. It should sound like a wise Grand Chancellor or Royal Vizier briefing a ruler.
- Focused on inviting the user to make exactly ONE meaningful, focused move today.

Provide:
1. A majestic and title-appropriate name for today's Decree (e.g. "The Decree of Golden Restoration", "The Edict of the Silent Forge").
2. A clear morning brief (2-3 sentences) evaluating the state of the realm and offering quiet, sovereign encouragement.
3. Brief reports for each of the four provinces (Citadel, Training Grounds, Forge, Sanctuary) advising on how they stand and what they need. Keep them to 1 concise sentence each.
4. Exactly 3 tactical options for "One Meaningful Move" (quests/actions the user can perform today in real life). 
   - Each option must target a specific province (map it to one of: "Citadel", "Training Grounds", "Forge", or "Sanctuary").
   - Give each a thematic medieval/strategy title (e.g. "Consolidate the Archives", "Requisition Vital Rest", "Reinforce the Outposts", "Assemble the High Council").
   - A clear, simple real-world action description (e.g. "Read 10 pages of your target volume", "Take an evening walk along the perimeter with a trusted companion", "Dedicate 25 minutes of focus to outline your key project code").
   - The strategic impact (e.g., "+10% Forge stability, clearing administrative fog").
   - A fun thematic cost or resource requirement (e.g., "Requires 25 Focus points", "Requires 1 Hour of Solitude", "Requires an act of courage").
`;

    // Resilient fallback models and automatic retry logic
    const modelsToTry = ["gemini-3.5-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
    let responseText = "";
    let lastError: any = null;

    for (const modelName of modelsToTry) {
      let attempts = 2; // Try each model up to 2 times
      for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
          console.log(`[Advisor API] Calling Gemini model ${modelName} (attempt ${attempt}/${attempts})...`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: promptText,
            config: {
              systemInstruction: "You are the wise Royal Chancellor and Grand Vizier of 'RealMe'. You draft clean, highly immersive, sovereign-supportive daily strategic briefs for the King's personal life. Your feedback is noble, crisp, optimistic, and highly professional. Never write generic AI fluff.",
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  decreeTitle: {
                    type: Type.STRING,
                    description: "The name of today's decree or edict."
                  },
                  morningBrief: {
                    type: Type.STRING,
                    description: "The wise grand advisor's morning strategic report (2-3 sentences max)."
                  },
                  provincesStatus: {
                    type: Type.OBJECT,
                    properties: {
                      citadel: { type: Type.STRING, description: "One-sentence evaluation of the Citadel (Mind)." },
                      trainingGrounds: { type: Type.STRING, description: "One-sentence evaluation of the Training Grounds (Body)." },
                      forge: { type: Type.STRING, description: "One-sentence evaluation of the Forge (Craft)." },
                      sanctuary: { type: Type.STRING, description: "One-sentence evaluation of the Sanctuary (Relations)." }
                    },
                    required: ["citadel", "trainingGrounds", "forge", "sanctuary"]
                  },
                  meaningfulMoves: {
                    type: Type.ARRAY,
                    description: "Three distinct, elegant tactical move options for today.",
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        title: { type: Type.STRING, description: "Medieval-sounding title for the action." },
                        province: { type: Type.STRING, description: "One of: Citadel, Training Grounds, Forge, Sanctuary" },
                        description: { type: Type.STRING, description: "Practical, real-world action to execute." },
                        impact: { type: Type.STRING, description: "Strategic benefit to the sector stability." },
                        cost: { type: Type.STRING, description: "Thematic resource cost or duration." }
                      },
                      required: ["title", "province", "description", "impact", "cost"]
                    }
                  }
                },
                required: ["decreeTitle", "morningBrief", "provincesStatus", "meaningfulMoves"]
              }
            }
          });

          if (response && response.text) {
            responseText = response.text;
            break; // Succeeded! Break out of retry attempts
          }
        } catch (err: any) {
          lastError = err;
          console.warn(`[Advisor API] Failed attempt ${attempt} for model ${modelName}:`, err.message || err);
          if (attempt < attempts) {
            // Exponential backoff wait before retrying (500ms, 1000ms, etc.)
            await new Promise((resolve) => setTimeout(resolve, attempt * 500));
          }
        }
      }

      if (responseText) {
        break; // Successfully got response from this model, stop fallback loop
      }
    }

    if (!responseText) {
      throw lastError || new Error("All recommended AI advisors are temporarily engaged in regional diplomacy (down).");
    }

    const result = JSON.parse(responseText.trim());
    return res.json(result);

  } catch (error: any) {
    console.error("Error in /api/advisor/decree:", error);
    return res.status(500).json({
      error: "The Royal Council has suffered an administrative disturbance: " + (error.message || error)
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
    console.log(`RealMe server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
