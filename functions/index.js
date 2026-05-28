const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { google } = require("googleapis");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp();

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SPREADSHEET_ID = "YOUR_SHEET_ID";
const SHEET_NAME = "Sheet1";

exports.sendLeadToSheets = functions.firestore
  .document("leads/{docId}")
  .onCreate(async (snap, context) => {
    try {
      const data = snap.data();

      const client = await auth.getClient();

      const sheets = google.sheets({
        version: "v4",
        auth: client,
      });

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:D`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            data.name || "",
            data.phone || "",
            data.email || "",
            new Date().toISOString()
          ]],
        },
      });

      console.log("Lead added to Google Sheets");

    } catch (error) {
      console.error(error);
    }
  });

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
