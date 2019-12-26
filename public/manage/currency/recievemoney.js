//Get Subscription Fee
function getSubscriptionFee(subscriptiontype, subscriptionprice) {
    let subscriptiont = document.getElementById("subscriptiontype");
    let subscriptionfee = document.getElementById("subscriptionfee");
    subscriptionfee.innerHTML = "";

    db.collection('Banking').doc('fees').onSnapshot(function (doc) {
        if (subscriptiont.value == "Monthly") {
            let monthlysubscription = doc.data().MonthlySubscription;

            subscriptionfee.innerHTML = monthlysubscription;

            subscriptionGetTotal();
        } else if (subscriptiont.value == "Annual") {
            let annualsubscription = doc.data().AnnualSubscription;

            subscriptionfee.innerHTML = annualsubscription;

            subscriptionGetTotal();
        }
    })
};

//Get Fee & Total
//subscriber and non subscriber
async function subscriptionGetTotal() {
    db.collection('Banking').doc('fees').get().then(function (doc) {
        const subscriptionfee = document.getElementById("subscriptionfee").innerHTML;

        if (doc.exists && subscriptionfee > 0 && subscriptionfee != null) {
            const subscriptiontransactionfee = doc.data().NonSubscriptionFee;
            const total = parseFloat(`${subscriptionfee}`) + parseFloat(`${subscriptiontransactionfee}`);

            document.getElementById('subscriptiontransactionfee').innerHTML = subscriptiontransactionfee;
            document.getElementById("subscriptiontotal").innerHTML = total;

            subscriptiontransactionfee;
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
function subscriptionConfirm() {
    const subscriptiontotal = document.getElementById("subscriptiontotal").innerHTML;

    if (subscriptiontotal > 0) {
        subscriptionGetQuote();
    } else {
        console.log('Please Enter Amount')
    }
}

//Invoice
//Get Quote Form Information
function subscriptionGetQuote() {
    const subscriptiontype = document.getElementById("subscriptiontype").value;
    const subscriptionfee = document.getElementById("subscriptionfee").innerHTML;
    const subscriptiontransactionfee = document.getElementById("subscriptiontransactionfee").innerHTML;
    const subscriptiontotal = document.getElementById("subscriptiontotal").innerHTML;

    document.getElementById("subscriptioninvoice").style.display = "initial";
    document.getElementById("subscriptiontypeinvoice").innerHTML = subscriptiontype;
    document.getElementById("subscriptionfeeinvoice").innerHTML = subscriptionfee;
    document.getElementById("subscriptiontransactionfeeinvoice").innerHTML = subscriptiontransactionfee;
    document.getElementById("subscriptiontotalinvoice").innerHTML = subscriptiontotal;

    subscriptionGetLastTransaction();
}

//Get Last Transaction
function subscriptionGetLastTransaction() {
    db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                subscriptionRenderLastTransaction(change);
            } else if (change.type == 'removed') {
                subscriptionGetLastTransaction();
            }
        })
    })
};

//Show Current Balance & Last Transaction ID
function subscriptionRenderLastTransaction(change) {
    const total = document.getElementById("subscriptiontotalinvoice").innerHTML;
    const currentbalance = change.doc.data().EndingBalance;
    const endingbalance = parseFloat(`${currentbalance}`) - parseFloat(`${total}`);
    const lasttransactionid = change.doc.data().TransactionID;

    document.getElementById("subscriptioncurrentbalance").innerHTML = currentbalance;
    document.getElementById("subscriptionendingbalance").innerHTML = endingbalance;
    document.getElementById("subscriptionlasttransaction").innerHTML = lasttransactionid;

    console.log(currentbalance);
    console.log(endingbalance);
    console.log(lasttransactionid);
};

//Save Transaction
async function subscriptionSaveTransaction() {
    const subscriptiontype = document.getElementById("subscriptiontypeinvoice").innerHTML;
    const subscriptionfee = document.getElementById("subscriptionfeeinvoice").innerHTML;
    const subscriptiontransactionfee = document.getElementById("subscriptiontransactionfeeinvoice").innerHTML;
    const subscriptiontotal = document.getElementById("subscriptiontotalinvoice").innerHTML;
    const subscriptioncurrentbalance = document.getElementById("subscriptioncurrentbalance").innerHTML;
    const subscriptionendingbalance = document.getElementById("subscriptionendingbalance").innerHTML;
    const subscriptionlasttransaction = document.getElementById("subscriptionlasttransaction").innerHTML;

    db.collection('transactions').add({
        Timestamp: TimeStamp,
        SubscriptionType: subscriptiontype,
        SubscriptionFee: subscriptionfee,
        SubscriptionTransactionFee: subscriptiontransactionfee,
        SubscriptionTotal: subscriptiontotal,
        CurrentBalance: subscriptioncurrentbalance,
        EndingBalance: subscriptionendingbalance,
        LastTransactionID: subscriptionlasttransaction,
    });

    document.getElementById("subscriptionreceipt").style.display = "initial";
    setTimeout(subscriptionCreateReceipt, 3000);
};

//Hash Transaction and Update Database
async function subscriptionCreateReceipt() {
    db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                subscriptionConcatDetails(change);
            } else if (change.type == 'removed') {
                subscriptionCreateReceipt();
            }
        })
    })
};

//Combine Transaction Details
async function subscriptionConcatDetails(change) {
    const subscriptiontype = change.doc.data().SubscriptionType;
    const timestamp = change.doc.data().Timestamp;
    const subscriptionfee = change.doc.data().SubscriptionFee;
    const fee = change.doc.data().SubscriptionTransactionFee;
    const total = change.doc.data().SubscriptionTotal;
    const currentbalance = change.doc.data().CurrentBalance;
    const endingbalance = change.doc.data().EndingBalance;
    const lasttransactionid = change.doc.data().LastTransactionID;
    const transactiondetails =
        "Subscription Type: " + `${subscriptiontype}`.concat(
            " " + `${timestamp}`,
            " Subscription Fee : $" + `${subscriptionfee}`,
            " Subscription Transaction Fee: $" + `${fee}`,
            " Subscription Total: $" + `${total}`,
            " Subscription Current Balance: $" + `${currentbalance}`,
            " Subscription Ending Balance: $" + `${endingbalance}`,
            " Subscription Last Transaction ID: " + `${lasttransactionid}`);
    document.getElementById("subscriptioninput").innerHTML = transactiondetails;

    console.log(transactiondetails);
};

//Hash Transaction Details
(function subscriptionHashTransactionDetails($, window, document, undefined) {

    $(document).ready(function () {
        var input = $('#subscriptioninput');
        var output = $('#subscriptionoutput');
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
        $('#subscriptionexecute').click(execute);

    });
})(jQuery, window, document);


//Update Transaction with Hash
async function subscriptionUpdate() {
    db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                subscriptionAddHash(change);
            } else if (change.type == 'removed') {
                subscriptionUpdate();
            }
        })
    })
};

async function subscriptionAddHash(change) {
    const hash = document.getElementById("subscriptionoutput").innerHTML;

    transactions.doc(change.doc.id).update({
        TransactionID: hash
    });

    console.log(hash);
};