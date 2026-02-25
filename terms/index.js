const navigationBarLogInElement = document.querySelector("#navigationBar-logIn");
const navigationBarSignUpElement = document.querySelector("#navigationBar-signUp");

const bannerImage = document.querySelector("#banner");


bannerImage.addEventListener("click", (_) => {
  window.open('../', "_self");
})


navigationBarLogInElement.addEventListener("click", (_) => window.open('../login', "_self"));
navigationBarSignUpElement.addEventListener("click", (_) => window.open('../signup', "_self"));