const emailElement = document.querySelector("#form-signIn-email");
const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const passwordElement = document.querySelector("#form-signIn-password");
const signInButtonElement = document.querySelector("#form-signIn-button");
const userData = await (await fetch('db/mock.json')).json();

window.signIn = signIn;
window.warnInvalidEmail = warnInvalidEmail;
window.warnIncorrectCredentials = warnIncorrectCredentials;


function signIn() {
  const email = document.querySelector("#form-signIn-email").value;
  const password = document.querySelector("#form-signIn-password").value;
  if (email.length == 0) return;
  if (!(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g).test(email)) {
    warnInvalidEmail(true);
    return;
  }
  if (validateCredentials(email, password)) window.open('./dashboard', "_self");
}


function validateCredentials(email, password) {
  if ((email != userData["credentials"]["email"]) || (password != userData["credentials"]["pass"])) {
    warnIncorrectCredentials(true);
    return false;
  }
  return true;
}


function warnIncorrectCredentials(state) {
  const element = document.querySelector("#warning-incorrectCredentials");
  if (state) {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}


function warnInvalidEmail(state) {
  const element = document.querySelector("#warning-invalidEmail");
  if (state) {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}