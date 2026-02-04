
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY || ""
});
export const getGeminiAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `Je bent de virtuele assistent van 'Boer2 Bouw & Installatie', een professioneel Nederlands bouwbedrijf uit Linschoten. 
        De eigenaren zijn Wim Boer en Mark den Boer.
        Je spreekt Nederlands. Geef kort en bondig advies over bouw, renovatie en installatie. 
        Wees vriendelijk, nuchter en professioneel. 
        Als iemand vraagt naar contactgegevens:
        - Wim Boer: 06 4702 7152
        - Mark den Boer: 06 1260 9139
        - Adres: Molentocht 8, Linschoten.
        Adviseer bij offertes altijd om het contactformulier in te vullen of direct te bellen met Wim of Mark.`,
      },
    });
    return response.text || "Excuses, ik kan momenteel geen antwoord geven. Neem contact op via het formulier of bel Wim of Mark.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Er is een fout opgetreden bij het verwerken van je vraag.";
  }
};
