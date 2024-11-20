/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { genkit } = require("genkit");
const { gemini10Pro, googleAI } = require("@genkit-ai/googleai");

const ai = genkit({
  plugins: [googleAI({ apiKey: "" })],
  model: gemini10Pro, // set default model
});

exports.question = onRequest(async (request, response) => {
  let prompt = "Give me a MCQ on bollywood, return only one question";
  const { text } = await ai.generate(prompt);
  response.send(text);
});
