const Queue = require('firebase-queue');
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const firebaseConfig = {
  apiKey: "AIzaSyAPAZWDdVaO5C0roWiGSetzNG5uLd-qNHc",
  credential: admin.credential.cert(serviceAccount),
  authDomain: "theorb-f3a48.firebaseapp.com",
  databaseURL: "https://theorb-f3a48.firebaseio.com",
  projectId: "theorb-f3a48",
  storageBucket: "theorb-f3a48.appspot.com",
  messagingSenderId: "1073451047758",
  appId: "1:1073451047758:web:7389fd0497fa5d4c071c1f"
};
admin.initializeApp(firebaseConfig, "hashTransaction");
const sha256 = require('sha256');
var tasksRef = admin.database().ref('queue/tasks');
var specsRef = admin.database().ref('queue/specs');
var options = {
  'specId': 'hashTransaction',
  'numWorkers': 1
};
var hashQueue = new Queue({
  tasksRef: tasksRef,
  specsRef: specsRef
}, options, (data, progress, resolve, reject) => {
  let transaction = JSON.stringify(data);
  let hashTransaction = sha256(transaction);
  let block = {
    "successfulTransactionTimestamp": data.successfulTransactionTimestamp,
    "from": data.from,
    "to": data.to,
    "amount": data.amount,
    "fee": data.fee,
    "total": data.total,
    "transactionNumber": data.transactionNumber,
    "lastTransactionID": data.lastTransactionID,
    "transactionID": hashTransaction
  }
  resolve(block)
    .then(progress(75))
    .catch(error => reject(error))
});
hashQueue;
