const express = require('express');
const router = express.Router();
const firebase = require('firebase');
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
admin.initializeApp(firebaseConfig);
const updateTransaction = require('./updateTransaction');
const hashTransaction = require('./hashTransaction');
const saveTransaction = require('./saveTransaction');

router.post('', (req, res) => {
  var tasksRef = admin.database().ref('queue/tasks');
  var transaction = {
    "successfulTransactionTimestamp": firebase.database.ServerValue.TIMESTAMP,
    "from": req.body.from,
    "to": req.body.to,
    "amount": req.body.amount,
    "fee": req.body.fee,
    "total": req.body.total,
    "_state": req.body._state
  };

  return tasksRef.push(transaction)
    .then(res.status(201).json(
      "Your transaction was successful and is in queue to be added to blockchain"
    ))
    .catch(error => console.log(error));
});

module.exports = router;
