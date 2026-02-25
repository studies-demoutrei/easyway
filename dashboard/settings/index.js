const userBalanceElement = document.querySelector("#user-balance");
const userFirstNameElement = document.querySelector("#user-firstName");
const userData = await (await fetch('../../db/mock.json')).json();
const userLastUpdatedElement = document.querySelector("#user-lastUpdated");

const termsAndConditionsActionButton = document.querySelector("#termsAndConditions");
const logoutActionButton = document.querySelector("#logout");
const paginationHomeButton = document.querySelector("#pagination-home");


termsAndConditionsActionButton.addEventListener("click", (_) => {
  window.open('../../terms', "_self");
})

logoutActionButton.addEventListener("click", (_) => {
  window.open('../../login', "_self");
})


paginationHomeButton.addEventListener("click", (_) => {
  window.open('../', "_self");
})


export function setupHook() {
  userFirstNameElement.textContent = userData["name"]["firstName"];
  userBalanceElement.textContent = userData["balance"].toLocaleString();
  userLastUpdatedElement.textContent = userData["lastUpdated"];
}