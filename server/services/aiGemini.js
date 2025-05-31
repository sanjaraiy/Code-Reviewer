const { GoogleGenAI } = require("@google/genai");

const env = require('dotenv');
env.config();


const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });


async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
//   console.log(response.text);
  return response.text;
}

module.exports = main;