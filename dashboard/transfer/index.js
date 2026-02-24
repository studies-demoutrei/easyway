const userBalanceElement = document.querySelector("#user-balance");
const userFirstNameElement = document.querySelector("#user-firstName");
const userData = await (await fetch('../../db/mock.json')).json();
const userLastUpdatedElement = document.querySelector("#user-lastUpdated");

const destinationOptionsSection = document.querySelector("#destinationOptions-section");
const destinationOptionsInternalOption = document.querySelector("#destinationOptions-internal");
const destinationOptionsExternalOption = document.querySelector("#destinationOptions-external");
const destinationOptionsPagination = document.querySelector("#destinationOptions-pagination-container");
const destinationOptionsPaginationBackButton = destinationOptionsPagination.querySelector("#destinationOptions-pagination-back");

const accountSelectSection = document.querySelector("#accountSelect-section");
const accountSelectPagination = document.querySelector("#accountSelect-pagination-container");
const accountSelectPlaceholderArray = document.querySelectorAll(".accountSelect-input-placeholder");
const accountSelectDestinationAccountContainer = document.querySelector("#accountSelect-destinationAccount-container");
for (const bank in userData["externalBanks"]) {
  if (bank === "eWallet") continue;
  const option = document.createElement("div");
  option.classList.add("accountSelect-input-option");
  option.textContent = bank;
  accountSelectDestinationAccountContainer.appendChild(option);
}
const accountSelectOptionArray = document.querySelectorAll(".accountSelect-input-option");
const accountSelectPaginationContinueButton = document.querySelector("#accountSelect-pagination-continue");
const accountSelectPaginationBackButton = document.querySelector("#accountSelect-pagination-back");
let sourceAccount = null;
let destinationAccount = null;

const transferAmountSection = document.querySelector("#transferAmount-section");
const transferAmountPagination = document.querySelector("#transferAmount-pagination-container");
const transferAmountPaginationConfirmButton = transferAmountPagination.querySelector("#transferAmount-pagination-confirm");
const transferAmountPaginationBackButton = transferAmountPagination.querySelector("#transferAmount-pagination-back");
const transferAmountAccountNumberInput = document.querySelector("#transferAmount-accountNumber-input");
const transferAmountAmountInput = document.querySelector("#transferAmount-amount-input");
const transferAmountNoteInput = document.querySelector("#transferAmount-note-input");
const transferAmountSavingsBalanceText = document.querySelector("#transferAmount-savingsBalance");

const receiptSection = document.querySelector("#receipt-section");
const receiptPagination = document.querySelector("#receipt-pagination");
const receiptPaymentAmountText = receiptSection.querySelector("#receipt-payment-amount");
const receiptBankAccountText = receiptSection.querySelector("#receipt-bankAccount");
const receiptPaginationBackButton = receiptPagination.querySelector("#receipt-pagination-back");


destinationOptionsInternalOption.addEventListener("click", (_) => {
  destinationOptionsSectionClose();
  accountSelectSectionOpen();
})

destinationOptionsExternalOption.addEventListener("click", (_) => {
  destinationOptionsSectionClose();
  accountSelectSectionOpen();
})

destinationOptionsPaginationBackButton.addEventListener("click", (_) => {
  window.open('../', "_self");
})


accountSelectPlaceholderArray.forEach(element => {
  element.addEventListener("click", (event) => {
    event.target.parentElement.querySelectorAll(".accountSelect-input-option").forEach(option => {
      option.classList.toggle("show");
    })
  })
})

accountSelectOptionArray.forEach(element => {
  element.addEventListener("click", (event) => {
    event.target.parentElement.querySelector(".accountSelect-input-placeholder").textContent = event.target.textContent;
    if (event.target.parentElement.getAttribute("id") === "accountSelect-sourceAccount-container") {
      sourceAccount = event.target.textContent;
    } else if (event.target.parentElement.getAttribute("id") === "accountSelect-destinationAccount-container") {
      destinationAccount = event.target.textContent;
    }
    event.target.parentElement.querySelectorAll(".accountSelect-input-option").forEach(option => {
      option.classList.remove("show");
    })
  })
})

accountSelectPaginationContinueButton.addEventListener("click", (_) => {
  if (!sourceAccount || !destinationAccount) return;
  
  accountSelectSectionClose();
  transferAmountSectionOpen();
})

accountSelectPaginationBackButton.addEventListener("click", (_) => {
  accountSelectSectionClose();
  destinationOptionsSectionOpen();
})


transferAmountPaginationConfirmButton.addEventListener("click", (_) => {
  if (!transferAmountAccountNumberInput.value || !transferAmountAmountInput.value) return;
  transferAmountSectionClose();
  receiptPaymentAmountText.textContent = Number(transferAmountAmountInput.value).toLocaleString();
  receiptBankAccountText.textContent = destinationAccount;
  userBalanceElement.textContent = (userData.balance - Number(transferAmountAmountInput.value) - 10.00).toLocaleString();
  userLastUpdatedElement.textContent = "02-27-26";
  receiptSectionOpen();
})

transferAmountPaginationBackButton.addEventListener("click", (_) => {
  transferAmountSectionClose();
  accountSelectSectionOpen();
})

transferAmountAmountInput.addEventListener("input", (_) => {
  if (((Number(transferAmountAmountInput.value) < 1) || ((userData.balance - 10.00) < Number(transferAmountAmountInput.value)))) {
    transferAmountAmountInput.style.color = "red";
  } else {
    transferAmountAmountInput.style.color = "black";
  }
})


receiptPaginationBackButton.addEventListener("click", (_) => {
  window.open('../', "_self");
})


function accountSelectSectionClose() {
  accountSelectPagination.classList.remove("active");
  accountSelectSection.classList.remove("show");
}

function accountSelectSectionOpen() {
  accountSelectSection.classList.add("show");
  accountSelectPagination.classList.add("active");
}


function destinationOptionsSectionClose() {
  destinationOptionsPagination.classList.remove("active");
  destinationOptionsSection.classList.remove("show");
}

function destinationOptionsSectionOpen() {
  destinationOptionsSection.classList.add("show");
  destinationOptionsPagination.classList.add("active");
}


function transferAmountSectionClose() {
  transferAmountPagination.classList.remove("active");
  transferAmountSection.classList.remove("show");
}

function transferAmountSectionOpen() {
  transferAmountSection.classList.add("show");
  transferAmountPagination.classList.add("active");
}


function receiptSectionClose() {
  receiptPagination.classList.remove("active");
  receiptSection.classList.remove("show");
}

function receiptSectionOpen() {
  receiptSection.classList.add("show");
  receiptPagination.classList.add("active");
}


export function setupHook() {
  userFirstNameElement.textContent = userData["name"]["firstName"];
  userBalanceElement.textContent = userData["balance"].toLocaleString();
  userLastUpdatedElement.textContent = userData["lastUpdated"];
  transferAmountSavingsBalanceText.textContent = userData.balance.toLocaleString();

  // destinationOptionsSectionClose();
  // receiptSectionOpen();
}