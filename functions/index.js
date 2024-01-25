/* eslint-disable max-len */
const { logger } = require("firebase-functions");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { setGlobalOptions } = require("firebase-functions/v2/options");

const OpenAI = require("openai");

initializeApp();

setGlobalOptions(
  { timeoutSeconds: 5, cors: true, maxInstances: 10 }
)

const openai = new OpenAI({
  apiKey: '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',
});

exports.createrecipe = onDocumentCreated("/recipes/{documentId}", async (event) => {
  // Grab the current value of what was written to Firestore.
  const recipe = event.data?.data();

  //implement openai request to get description, ingredients and steps return JSON
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Response should be Turkish. I want to create a recipe from title. The given title is ${recipe.title}. Return ingredients, steps and description according to title as a JSON format. No extra character. Just JSON. Description can be max 3 sentences. Steps should be short but clear.` }],
    model: 'gpt-3.5-turbo',
  });
  console.log('response ', response)
  logger.log("open ai response", response);
  const { description = '', ingredients = [], steps = [] } = JSON.parse(response.choices[0].message.content);
  recipe.description = description
  recipe.ingredients = ingredients
  recipe.steps = steps

  return event.data?.ref.set(recipe, { merge: true });
});
