//Banking
const transactionsList = document.querySelector('#bankingtransactions');

//Load Banking
db.collection('transactions').orderBy('Timestamp', 'desc').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderTransactions(change.doc);
    } else if (change.type == 'removed') {
      let transaction = transactionsList.querySelector('[data-id=' + change.doc.id + ']');
      transactionsList.removeChild(transaction);
    }
  })
});

//Display Transactions
function renderTransactions(doc) {
  let transaction = document.createElement('tr');
  let timestamp = document.createElement('td');
  let to = document.createElement('td');
  let from = document.createElement('td');
  let beginningbalance = document.createElement('td');
  let debit = document.createElement('td');
  let credit = document.createElement('td');
  let endingbalance = document.createElement('td');

  transaction.setAttribute('data-id', doc.id);
  timestamp.textContent = doc.data().Timestamp.toDate();
  beginningbalance.textContent = doc.data().BeginningBalance;
  if (doc.data().To != undefined) {
    to.textContent = doc.data().To;
    from.textContent = "";
    debit.textContent = `${doc.data().Total}`;
    credit.textContent = "-"
  }

  if (doc.data().From != undefined) {
    to.textContent = "";
    from.textContent = doc.data().From;
    debit.textContent = "-";
    credit.textContent = `${doc.data().Total}`;
  }

  endingbalance.textContent = doc.data().EndingBalance;

  transaction.appendChild(timestamp);
  transaction.appendChild(to);
  transaction.appendChild(from);
  transaction.appendChild(beginningbalance);
  transaction.appendChild(debit);
  transaction.appendChild(credit);
  transaction.appendChild(endingbalance);

  transaction.setAttribute('class', "modal-trigger");
  transaction.setAttribute('href', "#");
  transaction.setAttribute("data-target", "transactiondetails");
  transaction.setAttribute("onClick", getTransactionDetails());

  transactionsList.appendChild(transaction);
};


function getTransactionDetails() {
  $("tr").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');    
    let dataid = $(this).data('id');

    db.collection('transactions').doc(dataid).get().then(function (doc) {
      if (doc.exists) {
        renderTransactionDetails(doc);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    })
  });
};

function renderTransactionDetails(doc) {
  let category = doc.data().Category;
  let subcategory = doc.data().Subcategory;
  let timestamp = doc.data().Timestamp.toDate();
  let total = doc.data().Total;
  let transactionid = doc.data().TransactionID;

  document.getElementById("detailscategory").innerHTML = "Category: " + `${category}`;
  document.getElementById("detailssubcategory").innerHTML = "Subcategory: " + `${subcategory}`;
  document.getElementById("detailstimestamp").innerHTML = "Time: " + `${timestamp}`;
  document.getElementById("detailstotal").innerHTML = "Total: $" + `${total}`;
  document.getElementById("detailstransactionid").innerHTML = "TransactionID: " + `${transactionid}`;
}
