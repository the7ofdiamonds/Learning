const billpaymentform = document.getElementById('billpaymentform');
const billpaymentcompanylist = document.querySelector('#billpaymentcompany');

//Quote
//Get Company Name
function populateBillPayment(billpaymentcategory, billpaymentcompany) {
    let billpaymentcat = document.getElementById(billpaymentcategory);
    let billpaymentcomp = document.getElementById(billpaymentcompany);
    billpaymentcomp.innerHTML = "";

    if (billpaymentcat.value == "Finance") {
        getFinanceCompanyName()
    } else if (billpaymentcat.value == "Insurance") {
        getInsuranceCompanyName()
    }
};

//Get Finance Company Name
function getFinanceCompanyName() {
    db.collection('Finance').orderBy('FinanceCompanyName', 'asc').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                displayFinanceCompanyName(change);
            } else if (change.type == 'removed') {
                let company = billpaymentcompanylist.querySelector('[data-id=' + change.doc.id + ']');
                billpaymentcompanylist.removeChild(company);
            }
        })
    });
}

//Display Finance Company Name
function displayFinanceCompanyName(change) {
    let financecompanyname = change.doc.data().FinanceCompanyName;
    let option = document.createElement("option");
    let text = document.createTextNode(`${financecompanyname}`);

    option.setAttribute("value", `${financecompanyname}`)
    option.appendChild(text);
    document.getElementById("billpaymentcompany").appendChild(option);
};

//Get Insurance Company Name
function getInsuranceCompanyName() {
    db.collection('Insurance').orderBy('InsuranceCompanyName', 'asc').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                displayInsuranceCompanyName(change);
            } else if (change.type == 'removed') {
                let company = billpaymentcompanylist.querySelector('[data-id=' + change.doc.id + ']');
                billpaymentcompanylist.removeChild(company);
            }
        })
    });
}

//Display Insurance Company Name
function displayInsuranceCompanyName(change) {
    let insurancecompanyname = change.doc.data().InsuranceCompanyName;
    let option = document.createElement("option");
    let text = document.createTextNode(`${insurancecompanyname}`);

    option.setAttribute("value", `${insurancecompanyname}`)
    option.appendChild(text);
    document.getElementById("billpaymentcompany").appendChild(option);
};

//Get Fee & Total
async function billPaymentGetTotal() {
    db.collection('fees').doc('Banking').get().then(function (doc) {
        const billpaymentamount = document.getElementById("billpaymentamount").value;
        const billpaymentfee = doc.data().BillPaymentFee;

        if (doc.exists && billpaymentamount > 0 && billpaymentamount != null) {
            const total = parseFloat(`${billpaymentamount}`) + parseFloat(`${billpaymentfee}`);

            document.getElementById('billpaymentfee').innerHTML = billpaymentfee;
            document.getElementById("billpaymenttotal").innerHTML = total;

            billpaymentfee;
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
function billPaymentConfirm() {
    const billpaymenttotal = document.getElementById("billpaymenttotal").innerHTML;

    if (billpaymenttotal > 0) {
        getQuote();
    } else {
        console.log('Please Enter Amount')
    }
}

//Invoice
//Get Quote Form Information
function getQuote() {
    const category = document.getElementById("billpaymentcategory").value;
    const company = document.getElementById("billpaymentcompany").value;
    const amount = document.getElementById("billpaymentamount").value;
    const fee = document.getElementById("billpaymentfee").innerHTML;
    const total = document.getElementById("billpaymenttotal").innerHTML;

    document.getElementById("billpaymentinvoice").style.display = "initial";
    document.getElementById("invoicecategory").innerHTML = category;
    document.getElementById("invoicecompany").innerHTML = company;
    document.getElementById("invoiceamount").innerHTML = amount;
    document.getElementById("invoicefee").innerHTML = fee;
    document.getElementById("invoicetotal").innerHTML = total;

    billPaymentGetLastTransaction();
}

//Get Last Transaction
function billPaymentGetLastTransaction() {
    db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                billPaymentRenderLastTransaction(change);
            } else if (change.type == 'removed') {
                billPaymentGetLastTransaction();
            }
        })
    })
};

//Show Current Balance & Last Transaction ID
function billPaymentRenderLastTransaction(change) {
    const total = document.getElementById("invoicetotal").innerHTML;
    const currentbalance = change.doc.data().EndingBalance;
    const endingbalance = parseFloat(`${currentbalance}`) - parseFloat(`${total}`);
    const lasttransactionid = change.doc.data().TransactionID;

    document.getElementById("billpaymentcurrentbalance").innerHTML = currentbalance;
    document.getElementById("billpaymentendingbalance").innerHTML = endingbalance;
    document.getElementById("billpaymentlasttransaction").innerHTML = lasttransactionid;

    console.log(currentbalance);
    console.log(endingbalance);
    console.log(lasttransactionid);
};

//Save Transaction
async function billPaymentSaveTransaction() {
    const categoryoption = document.getElementById("billpaymentcategory").options;
    const categoryindex = document.getElementById("billpaymentcategory").selectedIndex;
    const category = categoryoption[categoryindex].text;
    const companyoption = document.getElementById("billpaymentcompany").options;
    const companyindex = document.getElementById("billpaymentcompany").selectedIndex;
    const company = companyoption[companyindex].text;
    const amount = document.getElementById("billpaymentamount").value;
    const fee = document.getElementById("billpaymentfee").innerHTML;
    const total = document.getElementById("billpaymenttotal").innerHTML;
    const currentbalance = document.getElementById("billpaymentcurrentbalance").innerHTML;
    const endingbalance = document.getElementById("billpaymentendingbalance").innerHTML;
    const lasttransactionid = document.getElementById("billpaymentlasttransaction").innerHTML;

    db.collection('transactions').add({
        Timestamp: TimeStamp,
        Category: category,
        BillPaymentCompany: company,
        Amount: amount,
        Fee: fee,
        Total: total,
        CurrentBalance: currentbalance,
        EndingBalance: endingbalance,
        LastTransactionID: lasttransactionid,
    });

    document.getElementById("billpaymentreceipt").style.display = "initial";
    setTimeout(billPaymentCreateReceipt, 3000);
};

//Hash Transaction and Update Database
async function billPaymentCreateReceipt() {
    db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                billPaymentConcatDetails(change);
            } else if (change.type == 'removed') {
                billPaymentCreateReceipt();
            }
        })
    })
};

//Combine Transaction Details
async function billPaymentConcatDetails(change) {
    const category = change.doc.data().Category;
    const company = change.doc.data().BillPaymentCompany;
    const timestamp = change.doc.data().Timestamp;
    const amount = change.doc.data().Amount;
    const fee = change.doc.data().Fee;
    const total = change.doc.data().Total;
    const currentbalance = change.doc.data().CurrentBalance;
    const endingbalance = change.doc.data().EndingBalance;
    const lasttransactionid = change.doc.data().LastTransactionID;
    const transactiondetails =
        "Category: " + `${category}`.concat(
            " BillPaymentCompany: " + `${company}`,
            " " + `${timestamp}`,
            " Amount: $" + `${amount}`,
            " Fee: $" + `${fee}`,
            " Total: $" + `${total}`,
            " Current Balance: $" + `${currentbalance}`,
            " Ending Balance: $" + `${endingbalance}`,
            " Last Transaction ID: " + `${lasttransactionid}`);
    document.getElementById("billpaymentinput").innerHTML = transactiondetails;

    console.log(transactiondetails);
};

//Hash Transaction Details
(function billPaymentHashTransactionDetails($, window, document, undefined) {

    $(document).ready(function () {
        var input = $('#billpaymentinput');
        var output = $('#billpaymentoutput');
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
        $('#billpaymentexecute').click(execute);

    });
})(jQuery, window, document);


//Update Transaction with Hash
async function billPaymentUpdate() {
    db.collection('transactions').orderBy('Timestamp', 'desc').limit(1).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                billPaymentAddHash(change);
            } else if (change.type == 'removed') {
                billPaymentUpdate();
            }
        })
    })
};

async function billPaymentAddHash(change) {
    const hash = document.getElementById("billpaymentoutput").innerHTML;

    transactions.doc(change.doc.id).update({
        TransactionID: hash
    });

    console.log(hash);
};