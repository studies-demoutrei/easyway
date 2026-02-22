const changePasswordPaginationBackButton = document.querySelector("#changePassword-pagination-back");
const changePasswordPaginationChangeButton = document.querySelector("#changePassword-pagination-change");

const changePasswordSection = document.querySelector("#changePassword-section");
const authenticationSection = document.querySelector("#authentication-section");

const authenticationPaginationVerifyButton = document.querySelector("#authentication-pagination-verify");
const authenticationPaginationBackButton = document.querySelector("#authentication-pagination-back");


changePasswordPaginationBackButton.addEventListener("click", (_) => {
  window.open('../login', "_self");
})

changePasswordPaginationChangeButton.addEventListener("click", (_) => {
  changePasswordSection.classList.remove("show");
  authenticationSection.classList.add("show");
})


authenticationPaginationVerifyButton.addEventListener("click", (_) => {
  window.open('../login', "_self");
})

authenticationPaginationBackButton.addEventListener("click", (_) => {
  authenticationSection.classList.remove("show");
  changePasswordSection.classList.add("show");
})