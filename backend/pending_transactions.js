const express = require('express');
const router = express.Router();

router.post('', (req, res, next) => {
  var firebase = require('firebase');
  var admin = require('firebase-admin');
  var firebaseConfig = {
    apiKey: "AIzaSyAPAZWDdVaO5C0roWiGSetzNG5uLd-qNHc",
    authDomain: "theorb-f3a48.firebaseapp.com",
    databaseURL: "https://theorb-f3a48.firebaseio.com",
    projectId: "theorb-f3a48",
    storageBucket: "theorb-f3a48.appspot.com",
    messagingSenderId: "1073451047758",
    appId: "1:1073451047758:web:7389fd0497fa5d4c071c1f"
  };
  admin.initializeApp(firebaseConfig);
  var Queue = require('firebase-queue');
  var jobsRef = firebase.database().ref('queue/task');
  var specsRef = firebase.database().ref('queue/specs');
  var ref = {
    'taskRef': jobsRef,
    'specsRef': specsRef
  };
  var queue = new Queue(ref, (transaction, progress, resolve, reject) => {

    return console.log(transaction)
      .then(progress(25))
      .then(resolve(transaction))
      .then(progress(100))
      .catch((error) => console.log(error))
      .then(
        process.on('SIGINT', async () => {
          console.log('Starting queue shutdown');
          await queue.shutdown();
          console.log('Finished queue shutdown');
          process.exit(0);
        })
      );
  });

  return taskRef.push(transaction)
    .then(queue)
    .then(Resolve(transaction))
    .then(progress(25))
    .catch(error);
});

router.get('', (req, res, next) => {
  res.status(200).json({
    message: 'GET last transaction number and previous hash from task queue /pending_Transactions'
  });
});

router.patch('', (req, res, next) => {
    res.status(200).json({
      message: 'PATCH last transaction number and previous hash at task queue /pending_Transactions'
    });
  });

router.get('', (req, res, next) => {
  res.status(200).json({
    message: 'GET hash of transaction from /pending_transactions'
  });
});

router.patch('', (req, res, next) => {
  res.status(200).json({
    message: 'PATCH hash of transaction at /pending_transactions'
  });
});

router.post('', (req, res, next) => {
    res.status(200).json({
      message: 'POST request to /transactions'
    });
  });
  
module.exports = router;
