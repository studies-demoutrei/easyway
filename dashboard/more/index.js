const userBalanceElement = document.querySelector("#user-balance");
const userFirstNameElement = document.querySelector("#user-firstName");
const userData = await (await fetch('../../db/mock.json')).json();
const userLastUpdatedElement = document.querySelector("#user-lastUpdated");

const accountSettingsButton = document.querySelector("#account-settings-container");
const accountLogOutButton = document.querySelector("#account-logout-container");
const paginationHomeButton = document.querySelector("#pagination-home");

const iconImage = document.querySelector("#icon");


accountSettingsButton.addEventListener("click", (_) => {
  window.open('../settings', "_self");
})

accountLogOutButton.addEventListener("click", (_) => {
  window.open('../../login', "_self");
})


paginationHomeButton.addEventListener("click", (_) => {
  window.open('../', "_self");
})


iconImage.addEventListener("click", (_) => {
  window.open('../', "_self");
})


export function setupHook() {
  userFirstNameElement.textContent = userData["name"]["firstName"];
  userBalanceElement.textContent = userData["balance"].toLocaleString();
  userLastUpdatedElement.textContent = userData["lastUpdated"];
}