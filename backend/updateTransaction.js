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
admin.initializeApp(firebaseConfig, "updateTransaction");

var tasksRef = admin.database().ref('queue/tasks');
var specsRef = admin.database().ref('queue/specs');
var options = {
  'specId': 'updateTransaction',
  'numWorkers': 1
};
var updateQueue = new Queue({
  tasksRef: tasksRef,
  specsRef: specsRef
}, options, (data, progress, resolve, reject) => {
  var db = admin.firestore();
  const getLastTransaction = db.collection('transactions').orderBy('successfulTransactionTimestamp', 'desc')
    .limit(1);

  return getLastTransaction.get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
          let transactionNumber = doc.data().transactionNumber + 1;
          let lastTransactionID = doc.data().transactionID;
          const updateTransaction = {
            "successfulTransactionTimestamp": data.successfulTransactionTimestamp,
            "from": data.from,
            "to": data.to,
            "amount": data.amount,
            "fee": data.fee,
            "total": data.total,
            "transactionNumber": transactionNumber,
            "lastTransactionID": lastTransactionID
          };
          resolve(updateTransaction)

        })
        progress(25)
        .catch(reject())
    })
})
