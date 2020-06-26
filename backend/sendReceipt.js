"use strict";
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
const creds = require('./creds');
const Queue = require('firebase-queue');
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const {
  stringify
} = require("querystring");
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
admin.initializeApp(firebaseConfig, "sendReceipt");
var tasksRef = admin.database().ref('queue/tasks');
var specsRef = admin.database().ref('queue/specs');
var options = {
  'specId': 'sendReceipt',
  'numWorkers': 1
};
var sendReceiptQueue = new Queue({
  tasksRef: tasksRef,
  specsRef: specsRef
}, options, async (data, progress, resolve, reject) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: creds.email, // generated ethereal user
      pass: creds.password, // generated ethereal password
    },
  });

  let handlebarsOptions = {
    viewEngine: {
      extName: '.handlebars',
      partialsDir: './views',
      layoutsDir: './views/layouts',
      defaultLayout: 'main.handlebars',
    },
    viewPath: './views',
    extName: '.handlebars'
  };

  transporter.use('compile', hbs(handlebarsOptions));
  // send mail with defined transport object
  return await transporter.sendMail({
      from: `'"ORB" <${data.from}>'`, // sender address
      to: `<${data.to}>`, // list of receivers
      subject: "Thank You, Here is your receipt.", // Subject line
      template: 'index',
      context: {
        receiptNumber: data.transactionNumber,
        transactionNumber: data.transactionNumber,
        timestamp: data.successfulTransactionTimestamp,
        from: data.from,
        to: data.to,
        amount: data.amount,
        fee: data.fee,
        total: data.total,
        transactionID: data.transactionID
      }
    })
    .then(progress(100))
    .then(resolve())
    .then(console.log(`Step 4/4 Complete - Transaction was successfully sent from ${data.from} to ${data.to}`))
    .catch((error) => reject(error))
});
