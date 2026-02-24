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
    event.target.parentElement.querySelectorAll(".accountSelect-input-option").forEach(option => {
      option.classList.remove("show");
    })
  })
})

accountSelectPaginationContinueButton.addEventListener("click", (_) => {
  accountSelectSectionClose();
})

accountSelectPaginationBackButton.addEventListener("click", (_) => {
  accountSelectSectionClose();
  destinationOptionsSectionOpen();
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


export function setupHook() {
  userFirstNameElement.textContent = userData["name"]["firstName"];
  userBalanceElement.textContent = userData["balance"].toLocaleString();
  userLastUpdatedElement.textContent = userData["lastUpdated"];
}