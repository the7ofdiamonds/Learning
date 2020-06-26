var admin = require('firebase-admin');
var Queue = require('firebase-queue');
var admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");
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
admin.initializeApp(firebaseConfig, "saveTransaction");
var tasksRef = admin.database().ref('queue/tasks');
var specsRef = admin.database().ref('queue/specs');
var options = {
  'specId': 'saveTransaction',
  'numWorkers': 1
};
var saveQueue = new Queue({
  tasksRef: tasksRef,
  specsRef: specsRef
}, options, async function (data, progress, resolve, reject) {
  const db = admin.firestore();
  async function transaction() {
    const saveToFirestore = await db.collection('transactions').add({
      "transactionNumber": data.transactionNumber,
      "successfulTransactionTimestamp": data.successfulTransactionTimestamp,
      "from": data.from,
      "to": data.to,
      "amount": data.amount,
      "fee": data.fee,
      "total": data.total,
      "lastTransactionID": data.lastTransactionID,
      "transactionID": data.transactionID
    })
    console.log('Step 2/4 Complete - Transaction was successfully saved to Google Firebase Database Doc ID: ', saveToFirestore.id)
  };

  return transaction()
    .then(progress(75))
    .then(resolve(data))
    .catch((error) => {
      reject(error)
    })
});
