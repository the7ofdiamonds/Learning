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
const functions = require('firebase-functions');

//1. Financial Institution
exports.sendMoney = functions.https.onCall((transactionDetails) => {
  const timestamp = transactionDetails.timestamp;
  const from = transactionDetails.from;
  const to = transactionDetails.to;
  const amount = transactionDetails.amount;
  const fee = transactionDetails.fee;
  const total = transactionDetails.total;
  const currentbalance = transactionDetails.currentbalance;
  const endingbalance = transactionDetails.endingbalance;
  const hash = transactionDetails.endingbalance;

  return db
    .collection('transactions')
    .doc(hash)
    .set({
      "Timestamp": timestamp,
      "From": from,
      "To": to,
      "Amount": amount,
      "Fee": fee,
      "Total": total,
      "Current Balance": currentbalance,
      "Ending Balance": endingbalance
    });
});
