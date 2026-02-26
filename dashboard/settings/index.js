const userBalanceElement = document.querySelector("#user-balance");
const userFirstNameElement = document.querySelector("#user-firstName");
const userData = await (await fetch('../../db/mock.json')).json();
const userLastUpdatedElement = document.querySelector("#user-lastUpdated");

const termsAndConditionsActionButton = document.querySelector("#termsAndConditions");
const logoutActionButton = document.querySelector("#logout");
const themeActionButton = document.querySelector("#theme");
const paginationHomeButton = document.querySelector("#pagination-home");

const bodyElement = document.querySelector("body");

const iconImage = document.querySelector("#icon");


termsAndConditionsActionButton.addEventListener("click", (_) => {
  window.open('../../terms', "_blank");
})

logoutActionButton.addEventListener("click", (_) => {
  window.open('../../login', "_self");
})

themeActionButton.addEventListener("click", (_) => {
  bodyElement.setAttribute("theme", bodyElement.getAttribute("theme", "light") == "light" ? "dark" : "light");
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