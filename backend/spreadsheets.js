const {
  GoogleSpreadsheet
} = require('google-spreadsheet');
const {
  promisify
} = require('util');
const serviceAccount = require('./serviceAccountKey.json');
var admin = require('firebase-admin');
var Queue = require('firebase-queue');
var firebaseConfig = {
  apiKey: "AIzaSyAPAZWDdVaO5C0roWiGSetzNG5uLd-qNHc",
  credential: admin.credential.cert(serviceAccount),
  authDomain: "theorb-f3a48.firebaseapp.com",
  databaseURL: "https://theorb-f3a48.firebaseio.com",
  projectId: "theorb-f3a48",
  storageBucket: "theorb-f3a48.appspot.com",
  messagingSenderId: "1073451047758",
  appId: "1:1073451047758:web:7389fd0497fa5d4c071c1f"
};
admin.initializeApp(firebaseConfig, "spreadsheets");
var tasksRef = admin.database().ref('queue/tasks');
var specsRef = admin.database().ref('queue/specs');
var options = {
  'specId': 'spreadsheets',
  'numWorkers': 1
};
var spreadsheetsQueue = new Queue({
  tasksRef: tasksRef,
  specsRef: specsRef
}, options, (data, progress, resolve, reject) => {

  async function saveToSpreadsheet() {
    // spreadsheet key is the long id in the sheets URL
    const spreadsheetID = '1zmcgm2HNh8imxgMb-ZNlXRkgzUniyY_0-KH895b63fw';
    const doc = new GoogleSpreadsheet(spreadsheetID);
    await doc.useServiceAccountAuth({
      client_email: serviceAccount.client_email,
      private_key: serviceAccount.private_key,
    });

    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    await sheet.addRow({
      "Transaction Number": data.transactionNumber,
      "Timestamp": data.successfulTransactionTimestamp,
      "From": data.from,
      "To": data.to,
      "Amount": data.amount,
      "Fee": data.fee,
      "Total": data.total,
      "Last Transaction ID": data.lastTransactionID,
      "Transaction ID": data.transactionID
    })
    console.log(`Step 3/4 Complete - Transaction was successfully saved to Google Sheets ID : ${spreadsheetID} Title: ${doc.title} on Sheet: ${sheet.title}`)
  };

  return saveToSpreadsheet()
    .then(progress(80))
    .then(resolve(data))
    .catch((error) => reject(error))
});
