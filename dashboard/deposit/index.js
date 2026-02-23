const userBalanceElement = document.querySelector("#user-balance");
const userFirstNameElement = document.querySelector("#user-firstName");
const userData = await (await fetch('../../db/mock.json')).json();
const userLastUpdatedElement = document.querySelector("#user-lastUpdated");
const eWalletBalanceAmountText = document.querySelector("#fundSource-eWallet-balance-amount");

const fundSourceSection = document.querySelector("#fundSource-section");
const depositAmountSection = document.querySelector("#depositAmount-section");

const fundSourcePagination = document.querySelector("#fundSource-pagination");
const depositAmountPagination = document.querySelector("#depositAmount-pagination");

const fundSourcePaginationBackButton = document.querySelector("#fundSource-pagination-back");

const fundSourceEWalletContainer = document.querySelector("#fundSource-eWallet-container");
const fundSourceExternalBankSelect = document.querySelector("#fundSource-externalBank-select");

const depositAmountPaginationContinueButton = document.querySelector("#depositAmount-pagination-continue");
const depositAmountPaginationBackButton = document.querySelector("#depositAmount-pagination-back");

const depositAmountRequiredFieldWarning = document.querySelector("#depositAmount-warning-requiredField");

const depositAmountExternalBankText = document.querySelector("#depositAmount-externalBank");
const depositAmountExternalBankBalanceText = document.querySelector("#depositAmount-externalBankBalance");

const depositAmountInput = document.querySelector("#depositAmount-input");

const depositTransactionSection = document.querySelector("#depositTransaction-section");

const depositTransactionPagination = document.querySelector("#depositTransaction-pagination");
const depositTransactionPaginationBackButton = document.querySelector("#depositTransaction-pagination-back");

const receiptDepositedAmountText = document.querySelector("#receipt-deposited-amount");


eWalletBalanceAmountText.textContent = userData["externalBanks"]["eWallet"].toLocaleString();


fundSourcePaginationBackButton.addEventListener("click", (_) => {
  window.open('../', "_self");
})


fundSourceEWalletContainer.addEventListener("click", (_) => {
  fundSourcePagination.classList.remove("active");
  fundSourceSection.classList.remove("show");
  depositAmountSection.classList.add("show");
  depositAmountPagination.classList.add("active");
  depositAmountExternalBankText.textContent = "eWallet";
  depositAmountExternalBankBalanceText.textContent = userData["externalBanks"]["eWallet"].toLocaleString();
})

fundSourceExternalBankSelect.addEventListener("change", (_) => {
  fundSourcePagination.classList.remove("active");
  fundSourceSection.classList.remove("show");
  depositAmountSection.classList.add("show");
  depositAmountPagination.classList.add("active");
  depositAmountExternalBankText.textContent = fundSourceExternalBankSelect.value;
  depositAmountExternalBankBalanceText.textContent = userData["externalBanks"][fundSourceExternalBankSelect.value].toLocaleString();
})


depositAmountPaginationBackButton.addEventListener("click", (_) => {
  window.open('../', "_self");
})

depositAmountPaginationContinueButton.addEventListener("click", (_) => {
  if (!depositAmountInput.value) {
    depositAmountRequiredFieldWarning.classList.add("show");
    return;
  }

  if ((depositAmountInput.value < 0) || (userData["externalBanks"][depositAmountExternalBankText.textContent]) < depositAmountInput.value) return;

  depositAmountPagination.classList.remove("active");
  depositAmountSection.classList.remove("show");
  depositTransactionSection.classList.add("show");
  depositTransactionPagination.classList.add("active");
  receiptDepositedAmountText.textContent = Number(depositAmountInput.value).toLocaleString();
  userBalanceElement.textContent = (userData["balance"] + Number(depositAmountInput.value)).toLocaleString();
})


depositAmountInput.addEventListener("input", (_) => {
  depositAmountRequiredFieldWarning.classList.remove("show");

  if ((depositAmountInput.value < 0) || (userData["externalBanks"][depositAmountExternalBankText.textContent]) < depositAmountInput.value) {
    depositAmountInput.style.color = "red";
  } else {
    depositAmountInput.style.color = "black";
  }
})


depositTransactionPaginationBackButton.addEventListener("click", (_) => {
  window.open('../', "_self");
})


export function setupHook() {
  userFirstNameElement.textContent = userData["name"]["firstName"];
  userBalanceElement.textContent = userData["balance"].toLocaleString();
  userLastUpdatedElement.textContent = userData["lastUpdated"];
}