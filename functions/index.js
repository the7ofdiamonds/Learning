var firebaseConfig = {
  apiKey: "AIzaSyAPAZWDdVaO5C0roWiGSetzNG5uLd-qNHc",
  authDomain: "theorb-f3a48.firebaseapp.com",
  databaseURL: "https://theorb-f3a48.firebaseio.com",
  projectId: "theorb-f3a48",
  storageBucket: "theorb-f3a48.appspot.com",
  messagingSenderId: "1073451047758",
  appId: "1:1073451047758:web:7389fd0497fa5d4c071c1f"
};

const admin = require('firebase-admin');
admin.initializeApp(firebaseConfig);
const db = admin.firestore();
const firebase = require('firebase');
const functions = require('firebase-functions');

//1. Financial Institution
exports.sendMoney = functions.https.onCall((transaction) => {
  const timestamp = admin.firestore.Timestamp.now();
  const from = transaction.name;
  const to = transaction.to;
  const amount = transaction.amount;
  const fee = transaction.fee;
  const total = transaction.total;

  return db
    .collection('transactions')
    .doc('receipts')
    .set({
      "Timestamp": timestamp,
      "From": from,
      "To": to,
      "Amount": amount,
      "Fee": fee,
      "Total": total,
    });
});

exports.useToken = functions.https.onCall((transactionDetails) => {
  const timestamp = admin.firestore.Timestamp.now();
  const from = transactionDetails.name;
  const to = transactionDetails.to;
  const amount = transactionDetails.amount;
  const beginningbalance = transactionDetails.beginningbalance;
  const endingbalance = transactionDetails.endingbalance;

  return db
    .collection('transactions')
    .doc('tokens')
    .set({
      "Timestamp": timestamp,
      "From": from,
      "To": to,
      "Amount": amount,
      "Beginning Balance": beginningbalance,
      "Ending Balance": endingbalance
    });
});
