/* eslint-disable max-len */
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { setGlobalOptions } = require("firebase-functions/v2/options");

initializeApp();

setGlobalOptions(
  { timeoutSeconds: 15, cors: true, maxInstances: 10 }
)

exports.createrecipe = onDocumentCreated("/recipes/{documentId}", (event) => {
  // Grab the current value of what was written to Firestore.
  const recipe = event.data?.data();

  recipe.description = "Köfte, Türk mutfağında popüler bir yemek olup genellikle kıyma, baharat ve ekmek kırıntılarından yapılır.";
  recipe.ingredients = [
    "500 gram kıyma",
    "1 adet soğan",
    "1 adet yumurta",
    "1 su bardağı ekmek kırıntısı",
    "1 çay kaşığı tuz",
    "1 çay kaşığı karabiber",
    "1 çay kaşığı kimyon",
  ];
  recipe.steps = [
    "Kıyma, soğan, yumurta, ekmek kırıntısı, tuz, karabiber ve kimyonu karıştırın.",
    "Köfte harcından ceviz büyüklüğünde parçalar koparın ve yuvarlayın.",
    "Köfteleri ızgarada pişirin.",
  ];

  // You must return a Promise when performing
  // asynchronous tasks inside a function
  // such as writing to Firestore.
  // Setting an 'uppercase' field in Firestore document returns a Promise.
  return event.data?.ref.set(recipe, { merge: true });
});
