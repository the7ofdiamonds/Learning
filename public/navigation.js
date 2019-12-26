//Setup materialize components
document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});

//Home
//Account Details
function accountDetailsPage() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("accountdetails").style.display = "initial";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const modal = document.querySelector('#modal-home');
    M.Modal.getInstance(modal).close();
};

//Shop
function shop() {
    document.getElementById("shop").style.display = "initial";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const modal = document.querySelector('#modal-home');
    M.Modal.getInstance(modal).close();
}

//Learn
//Read
function read() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "initial";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const modal = document.querySelector('#modal-learn');
    M.Modal.getInstance(modal).close();
};

//Play
function play() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "initial";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const modal = document.querySelector('#modal-learn');
    M.Modal.getInstance(modal).close();
};

//Manage
function ledgerNetworth() {
    document.getElementById("ledger").style.display = "initial";
    document.getElementById("ledgerNetworth").style.display = "initial";
    document.getElementById("ledgerBanking").style.display = "none";
    document.getElementById("ledgerFinance").style.display = "none";
    document.getElementById("ledgerRealEstate").style.display = "none";
    document.getElementById("ledgerInsurance").style.display = "none";
    document.getElementById("ledgerPaperAssets").style.display = "none";
    document.getElementById("ledgerTangibleAssets").style.display = "none";
    document.getElementById("ledgerNetworthHeader").style.display = "initial";
    document.getElementById("ledgerBankingHeader").style.display = "none";
    document.getElementById("ledgerFinanceHeader").style.display = "none";
    document.getElementById("ledgerRealEstateHeader").style.display = "none";
    document.getElementById("ledgerInsuranceHeader").style.display = "none";
    document.getElementById("ledgerPaperAssetsHeader").style.display = "none";
    document.getElementById("ledgerTangibleAssetsHeader").style.display = "none";
    const modal = document.querySelector('#modal-manage');
    M.Modal.getInstance(modal).close();
};

function ledgerBanking() {
    document.getElementById("ledgerNetworth").style.display = "none";
    document.getElementById("ledgerBanking").style.display = "initial";
    document.getElementById("ledgerFinance").style.display = "none";
    document.getElementById("ledgerRealEstate").style.display = "none";
    document.getElementById("ledgerInsurance").style.display = "none";
    document.getElementById("ledgerPaperAssets").style.display = "none";
    document.getElementById("ledgerTangibleAssets").style.display = "none";
    document.getElementById("ledgerNetworthHeader").style.display = "none";
    document.getElementById("ledgerBankingHeader").style.display = "initial";
    document.getElementById("ledgerFinanceHeader").style.display = "none";
    document.getElementById("ledgerRealEstateHeader").style.display = "none";
    document.getElementById("ledgerInsuranceHeader").style.display = "none";
    document.getElementById("ledgerPaperAssetsHeader").style.display = "none";
    document.getElementById("ledgerTangibleAssetsHeader").style.display = "none";
}

function ledgerFinance() {
    document.getElementById("ledgerNetworth").style.display = "none";
    document.getElementById("ledgerBanking").style.display = "none";
    document.getElementById("ledgerFinance").style.display = "initial";
    document.getElementById("ledgerRealEstate").style.display = "none";
    document.getElementById("ledgerInsurance").style.display = "none";
    document.getElementById("ledgerPaperAssets").style.display = "none";
    document.getElementById("ledgerTangibleAssets").style.display = "none";
    document.getElementById("ledgerNetworthHeader").style.display = "none";
    document.getElementById("ledgerBankingHeader").style.display = "none";
    document.getElementById("ledgerFinanceHeader").style.display = "initial";
    document.getElementById("ledgerRealEstateHeader").style.display = "none";
    document.getElementById("ledgerInsuranceHeader").style.display = "none";
    document.getElementById("ledgerPaperAssetsHeader").style.display = "none";
    document.getElementById("ledgerTangibleAssetsHeader").style.display = "none";
}

function ledgerRealEstate() {
    document.getElementById("ledgerNetworth").style.display = "none";
    document.getElementById("ledgerBanking").style.display = "none";
    document.getElementById("ledgerFinance").style.display = "none";
    document.getElementById("ledgerRealEstate").style.display = "initial";
    document.getElementById("ledgerInsurance").style.display = "none";
    document.getElementById("ledgerPaperAssets").style.display = "none";
    document.getElementById("ledgerTangibleAssets").style.display = "none";
    document.getElementById("ledgerNetworthHeader").style.display = "none";
    document.getElementById("ledgerBankingHeader").style.display = "none";
    document.getElementById("ledgerFinanceHeader").style.display = "none";
    document.getElementById("ledgerRealEstateHeader").style.display = "initial";
    document.getElementById("ledgerInsuranceHeader").style.display = "none";
    document.getElementById("ledgerPaperAssetsHeader").style.display = "none";
    document.getElementById("ledgerTangibleAssetsHeader").style.display = "none";
}

function ledgerInsurance() {
    document.getElementById("ledgerNetworth").style.display = "none";
    document.getElementById("ledgerBanking").style.display = "none";
    document.getElementById("ledgerFinance").style.display = "none";
    document.getElementById("ledgerRealEstate").style.display = "none";
    document.getElementById("ledgerInsurance").style.display = "initial";
    document.getElementById("ledgerPaperAssets").style.display = "none";
    document.getElementById("ledgerTangibleAssets").style.display = "none";
    document.getElementById("ledgerNetworthHeader").style.display = "none";
    document.getElementById("ledgerBankingHeader").style.display = "none";
    document.getElementById("ledgerFinanceHeader").style.display = "none";
    document.getElementById("ledgerRealEstateHeader").style.display = "none";
    document.getElementById("ledgerInsuranceHeader").style.display = "initial";
    document.getElementById("ledgerPaperAssetsHeader").style.display = "none";
    document.getElementById("ledgerTangibleAssetsHeader").style.display = "none";
}

function ledgerPaperAssets() {
    document.getElementById("ledgerNetworth").style.display = "none";
    document.getElementById("ledgerBanking").style.display = "none";
    document.getElementById("ledgerFinance").style.display = "none";
    document.getElementById("ledgerRealEstate").style.display = "none";
    document.getElementById("ledgerInsurance").style.display = "none";
    document.getElementById("ledgerPaperAssets").style.display = "initial";
    document.getElementById("ledgerTangibleAssets").style.display = "none";
    document.getElementById("ledgerNetworthHeader").style.display = "none";
    document.getElementById("ledgerBankingHeader").style.display = "none";
    document.getElementById("ledgerFinanceHeader").style.display = "none";
    document.getElementById("ledgerRealEstateHeader").style.display = "none";
    document.getElementById("ledgerInsuranceHeader").style.display = "none";
    document.getElementById("ledgerPaperAssetsHeader").style.display = "initial";
    document.getElementById("ledgerTangibleAssetsHeader").style.display = "none";

}

function ledgerTangibleAssets() {
    document.getElementById("ledgerNetworth").style.display = "none";
    document.getElementById("ledgerBanking").style.display = "none";
    document.getElementById("ledgerFinance").style.display = "none";
    document.getElementById("ledgerRealEstate").style.display = "none";
    document.getElementById("ledgerInsurance").style.display = "none";
    document.getElementById("ledgerPaperAssets").style.display = "none";
    document.getElementById("ledgerTangibleAssets").style.display = "initial";
    document.getElementById("ledgerNetworthHeader").style.display = "none";
    document.getElementById("ledgerBankingHeader").style.display = "none";
    document.getElementById("ledgerFinanceHeader").style.display = "none";
    document.getElementById("ledgerRealEstateHeader").style.display = "none";
    document.getElementById("ledgerInsuranceHeader").style.display = "none";
    document.getElementById("ledgerPaperAssetsHeader").style.display = "none";
    document.getElementById("ledgerTangibleAssetsHeader").style.display = "initial";
};

//Services
//Banking
function sendMoney() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "initial";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const banking = document.querySelector('#modal-banking');
    M.Modal.getInstance(banking).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

function billPayment() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "initial";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const banking = document.querySelector('#modal-banking');
    M.Modal.getInstance(banking).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

function recieveMoney() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "initial";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const banking = document.querySelector('#modal-banking');
    M.Modal.getInstance(banking).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Open Subscription
function openSubscription() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "initial";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const banking = document.querySelector('#modal-banking');
    M.Modal.getInstance(banking).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
}

//Finance
//Auto
function autoFinance() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "initial";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const finance = document.querySelector('#modal-finance');
    M.Modal.getInstance(finance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Mortgage
function mortgage() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "initial";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const finance = document.querySelector('#modal-finance');
    M.Modal.getInstance(finance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Business
function businessFinance() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "initial";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const finance = document.querySelector('#modal-finance');
    M.Modal.getInstance(finance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Insurance
function lifeInsurance() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "initial";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const insurance = document.querySelector('#modal-insurance');
    M.Modal.getInstance(insurance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Property Insurance
function propertyInsurance() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "initial";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const insurance = document.querySelector('#modal-insurance');
    M.Modal.getInstance(insurance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Renters Insurance
function rentersInsurance() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "initial";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const insurance = document.querySelector('#modal-insurance');
    M.Modal.getInstance(insurance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Auto Insurance
function autoInsurance() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "initial";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const insurance = document.querySelector('#modal-insurance');
    M.Modal.getInstance(insurance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Business Insurance
function businessInsurance() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "initial";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const insurance = document.querySelector('#modal-insurance');
    M.Modal.getInstance(insurance).close();
    const manage = document.querySelector('#modal-manage');
    M.Modal.getInstance(manage).close();
};

//Invest
//Real Estate
//Residential Real Estate
function residentialRealEstate() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "initial";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const realestate = document.querySelector('#modal-realestate');
    M.Modal.getInstance(realestate).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};

//Commercial Real Estate
function commercialRealEstate() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "initial";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const realestate = document.querySelector('#modal-realestate');
    M.Modal.getInstance(realestate).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};

//Paper Assets
//Stocks
function stocks() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "initial";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const paperassets = document.querySelector('#modal-paperassets');
    M.Modal.getInstance(paperassets).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};

//Bonds
function bonds() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "initial";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const paperassets = document.querySelector('#modal-paperassets');
    M.Modal.getInstance(paperassets).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};

//Liens
function liens() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "initial";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const paperassets = document.querySelector('#modal-paperassets');
    M.Modal.getInstance(paperassets).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};

//Notes
function notes() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "initial";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "none";
    const paperassets = document.querySelector('#modal-paperassets');
    M.Modal.getInstance(paperassets).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};

//Tangible Assets
//Investment Properties
function investmentProperties() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "initial";
    document.getElementById("business").style.display = "none";
    const tangibleassets = document.querySelector('#modal-tangibleassets');
    M.Modal.getInstance(tangibleassets).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};

//Business
function business() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("ledger").style.display = "none";
    document.getElementById("sendmoney").style.display = "none";
    document.getElementById("billpayment").style.display = "none";
    document.getElementById("recievemoney").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("autofinance").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("businessfinance").style.display = "none";
    document.getElementById("lifeinsurance").style.display = "none";
    document.getElementById("propertyinsurance").style.display = "none";
    document.getElementById("rentersinsurance").style.display = "none";
    document.getElementById("autoinsurance").style.display = "none";
    document.getElementById("businessinsurance").style.display = "none";
    document.getElementById("residentialrealestate").style.display = "none";
    document.getElementById("commercialrealestate").style.display = "none";
    document.getElementById("stocks").style.display = "none";
    document.getElementById("bonds").style.display = "none";
    document.getElementById("liens").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("investmentproperties").style.display = "none";
    document.getElementById("business").style.display = "initial";
    const tangibleassets = document.querySelector('#modal-tangibleassets');
    M.Modal.getInstance(tangibleassets).close();
    const modal = document.querySelector('#modal-invest');
    M.Modal.getInstance(modal).close();
};