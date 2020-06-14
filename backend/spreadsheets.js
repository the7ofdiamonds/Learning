const {
  GoogleSpreadsheet
} = require('google-spreadsheet');
const {
  promisify
} = require('util');
const creds = require('./serviceAccountKey.json');
var admin = require('firebase-admin');
var Queue = require('firebase-queue');
var firebaseConfig = {
  apiKey: "AIzaSyAPAZWDdVaO5C0roWiGSetzNG5uLd-qNHc",
  credential: admin.credential.cert(creds),
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
}, options, function (data, progress, resolve, reject) {

  async function saveToSpreadsheet() {
    // spreadsheet key is the long id in the sheets URL
    const doc = new GoogleSpreadsheet('1zmcgm2HNh8imxgMb-ZNlXRkgzUniyY_0-KH895b63fw');
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    // loads document properties and worksheets
    await doc.loadInfo();
    console.log(`Title: ${doc.title}`);

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    console.log(sheet.title);
    console.log(sheet.rowCount);

    const newTransaction = await sheet.addRow({
      "Transaction Number": data.transactionNumber,
      "Timestamp": data.successfulTransactionTimestamp,
      "From": data.from,
      "To": data.to,
      "Amount": data.amount,
      "Fee": data.fee,
      "Total": data.total,
      "Last Transaction ID": data.lastTransactionID,
      "Transaction ID": data.transactionID
    });

    return newTransaction;

  };
saveToSpreadsheet()
.then(progress(100))
.then(resolve())
.catch(reject());

});
