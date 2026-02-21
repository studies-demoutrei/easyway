const navigationBarLogInElement = document.querySelector("#navigationBar-logIn");
const navigationBarSignUpElement = document.querySelector("#navigationBar-signUp");


navigationBarLogInElement.addEventListener("click", (_) => window.open('./login', "_self"));
navigationBarSignUpElement.addEventListener("click", (_) => window.open('./signup', "_self"));