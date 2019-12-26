const sendmoneyform = document.getElementById('sendmoneyform');
const transactions = db.collection('transactions');

//Quote
//Get Fee & Total
async function sendMoneyGetTotal() {
  db.collection('fees').doc('Banking').get().then(function (doc) {
    const amount = document.getElementById("amount").value;
    const sendmoneyfee = doc.data().SendMoneyFee;

    if (doc.exists && amount > 0 && amount != null) {
      const total = parseFloat(`${amount}`) + parseFloat(`${sendmoneyfee}`);

      document.getElementById('fee').innerHTML = sendmoneyfee;
      document.getElementById("total").innerHTML = total;

      sendmoneyfee;
      total;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  })
};

//Confim Amount
function sendMoneyConfirm() {
  const total = document.getElementById("total").innerHTML;

  if (total > 0) {
    sendMoneyGetLastTransaction();
  } else {
    console.log('Please Enter Amount')
  }
}

//Invoice
//Get Last Transaction
function sendMoneyGetLastTransaction() {
  db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        sendMoneyRenderInvoice(change);
      } else if (change.type == 'removed') {
        console.log('Transaction Removed');
      }
    })
  })
};

//Show Current Balance & Last Transaction ID
function sendMoneyRenderInvoice(change) {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;
  const fee = document.getElementById("fee").innerHTML;
  const total = document.getElementById("total").innerHTML;
  const currentbalance = change.doc.data().EndingBalance;
  const endingbalance = parseFloat(`${currentbalance}`) - parseFloat(`${total}`);
  const lasttransactionid = change.doc.data().TransactionID;

  document.getElementById("sendmoneyinvoice").style.display = "initial";
  document.getElementById("from").innerHTML = from;
  document.getElementById("to").innerHTML = to;
  document.getElementById("amount").innerHTML = amount;
  document.getElementById("fee").innerHTML = fee;
  document.getElementById("total").innerHTML = total;
  document.getElementById("currentbalance").innerHTML = currentbalance;
  document.getElementById("endingbalance").innerHTML = endingbalance;
  document.getElementById("lasttransaction").innerHTML = lasttransactionid;
};

//Save Transaction
async function sendMoneySaveTransaction() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;
  const fee = document.getElementById("fee").innerHTML;
  const total = document.getElementById("total").innerHTML;
  const currentbalance = document.getElementById("currentbalance").innerHTML;
  const endingbalance = document.getElementById("endingbalance").innerHTML;
  const lasttransactionid = document.getElementById("lasttransaction").innerHTML;

  db.collection('transactions').add({
    Timestamp: TimeStamp,
    From: from,
    To: to,
    Amount: amount,
    Fee: fee,
    Total: total,
    CurrentBalance: currentbalance,
    EndingBalance: endingbalance,
    LastTransactionID: lasttransactionid,
  });

  document.getElementById("sendmoneyreceipt").style.display = "initial";
  setTimeout(createReceipt, 3000);
};

//Hash Transaction and Update Database
async function sendMoneyCreateReceipt() {
  db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        sendMoneyConcatDetails(change);
      } else if (change.type == 'removed') {
        sendMoneyCreateReceipt();
      }
    })
  })
};

//Combine Transaction Details
async function sendMoneyConcatDetails(change) {
  const timestamp = change.doc.data().Timestamp;
  const from = change.doc.data().From;
  const to = change.doc.data().To;
  const amount = change.doc.data().Amount;
  const fee = change.doc.data().Fee;
  const total = change.doc.data().Total;
  const currentbalance = change.doc.data().CurrentBalance;
  const endingbalance = change.doc.data().EndingBalance;
  const lasttransactionid = change.doc.data().LastTransactionID;
  const transactiondetails =
    `${timestamp}`.concat(
      " From: " + `${from}`,
      " To: " + `${to}`,
      " Amount: $" + `${amount}`,
      " Fee: $" + `${fee}`,
      " Total: $" + `${total}`,
      " Current Balance: $" + `${currentbalance}`,
      " Ending Balance: $" + `${endingbalance}`,
      " Last Transaction ID: " + `${lasttransactionid}`);
  document.getElementById("input").innerHTML = transactiondetails;

  console.log(transactiondetails);
};

//Hash Transaction Details
(function sendMoneyHashTransactionDetails($, window, document, undefined) {

  $(document).ready(function () {
    var input = $('#input');
    var output = $('#output');
    var checkbox = $('#auto-update');
    var option = $('[data-option]');

    var execute = function () {
      try {
        output.text(method(input.text(), option.val()));
      } catch (e) {
        output.text(e);
      }
    }

    function autoUpdate() {
      if (!checkbox[0].checked) {
        return;
      }
      execute();
    }

    input.on('contentchange', autoUpdate);
    $('#execute').click(execute);

  });
})(jQuery, window, document);


//Update Transaction with Hash
async function sendMoneyUpdate() {
  db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        sendMoneyAddHash(change);
      } else if (change.type == 'removed') {
        sendMoneyUpdate();
      }
    })
  })
};

async function sendMoneyAddHash(change) {
  const hash = document.getElementById("output").innerHTML;

  transactions.doc(change.doc.id).update({
    TransactionID: hash
  });

  console.log(hash);
};