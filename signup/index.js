const stepOneEnumerationItem = document.querySelector("#steps-enumeration-stepOne");
const stepTwoEnumerationItem = document.querySelector("#steps-enumeration-stepTwo");
const stepThreeEnumerationItem = document.querySelector("#steps-enumeration-stepThree");

const stepOneContainer = document.querySelector("#stepOne");
const stepTwoContainer = document.querySelector("#stepTwo");

const stepOneInformationFormContainer = document.querySelector("#stepOne-informationForm");
const stepOneUserFormContainer = document.querySelector("#stepOne-userForm");

const stepOnePaginationInformationFormContainer = document.querySelector("#stepOne-pagination-informationForm");
const stepOnePaginationInformationFormNextButton = stepOnePaginationInformationFormContainer.querySelector("#stepOne-pagination-informationForm-next");

const stepOnePaginationUserFormContainer = document.querySelector("#stepOne-pagination-userForm");
const stepOnePaginationUserFormBackButton = stepOnePaginationUserFormContainer.querySelector("#stepOne-pagination-userForm-back");
const stepOnePaginationUserFormNextButton = stepOnePaginationUserFormContainer.querySelector("#stepOne-pagination-userForm-next");

const fullLegalNameInput = document.querySelector("#stepOne-informationForm-fullLegalName");
const dateOfBirthInput = document.querySelector("#stepOne-informationForm-dateOfBirth");
const mobileNumberInput = document.querySelector("#stepOne-informationForm-mobileNumber");
const emailAddressInput = document.querySelector("#stepOne-informationForm-emailAddress");
const usernameInput = document.querySelector("#stepOne-userForm-username");
const passwordInput = document.querySelector("#stepOne-userForm-password");
const passwordToggleButton = document.querySelector("#stepOne-userForm-password-toggle");

const fullLegalNameRequiredFieldWarning = document.querySelector("#informationForm-fullLegalName-warning-requiredField");
const fullLegalNameInvalidLegalNameWarning = document.querySelector("#informationForm-fullLegalName-warning-invalidLegalName");
const dateOfBirthRequiredFieldWarning = document.querySelector("#informationForm-dateOfBirth-warning-requiredField");
const mobileNumberRequiredFieldWarning = document.querySelector("#informationForm-mobileNumber-warning-requiredField");
const mobileNumberInvalidNumberWarning = document.querySelector("#informationForm-mobileNumber-warning-invalidNumber");
const emailAddressRequiredFieldWarning = document.querySelector("#informationForm-emailAddress-warning-requiredField");
const emailAddressInvalidAddressWarning = document.querySelector("#informationForm-emailAddress-warning-invalidAddress");
const usernameRequiredFieldWarning = document.querySelector("#userForm-username-warning-requiredField");
const usernameInvalidUsernameWarning = document.querySelector("#userForm-username-warning-invalidUsername");
const passwordRequiredFieldWarning = document.querySelector("#userForm-password-warning-requiredField");
const passwordInvalidWarning = document.querySelector("#userForm-password-warning-invalid");

const fullLegalNameRegex = /^[\p{L}\s'-]+$/u;
const emailAddressRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/m;
const mobileNumberRegex = /^[1-9]{1}[0-9]{7,14}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,})/;


fullLegalNameInput.addEventListener("input", (_) => {
  warn(fullLegalNameRequiredFieldWarning, false);
  warn(fullLegalNameInvalidLegalNameWarning, false);
});

dateOfBirthInput.addEventListener("input", (_) => warn(dateOfBirthRequiredFieldWarning, false));

mobileNumberInput.addEventListener("input", (_) => {
  warn(mobileNumberRequiredFieldWarning, false);
  warn(mobileNumberInvalidNumberWarning, false);
});

emailAddressInput.addEventListener("input", (_) => {
  warn(emailAddressRequiredFieldWarning, false);
  warn(emailAddressInvalidAddressWarning, false);
});

usernameInput.addEventListener("input", (_) => {
  warn(usernameRequiredFieldWarning, false);
  warn(usernameInvalidUsernameWarning, false);
});

passwordInput.addEventListener("input", (_) => {
  warn(passwordRequiredFieldWarning, false);
  warn(passwordInvalidWarning, false);
})

stepOnePaginationInformationFormNextButton.addEventListener("click", (_) => {
  if (!fullLegalNameInput.value) {
    warn(fullLegalNameRequiredFieldWarning, true);
    return;
  } else if (!fullLegalNameRegex.test(fullLegalNameInput.value)) {
    warn(fullLegalNameInvalidLegalNameWarning, true);
    return;
  }

  if (!dateOfBirthInput.value) {
    warn(dateOfBirthRequiredFieldWarning, true);
    return;
  }
  
  if (!mobileNumberInput.value) {
    warn(mobileNumberRequiredFieldWarning, true);
    return;
  } else if (!mobileNumberRegex.test(mobileNumberInput.value)) {
    warn(mobileNumberInvalidNumberWarning, true);
    return;
  }

  if (!emailAddressInput.value) {
    warn(emailAddressRequiredFieldWarning, true);
    return;
  } else if (!emailAddressRegex.test(emailAddressInput.value)) {
    warn(emailAddressInvalidAddressWarning, true);
    return;
  }
  
  stepOneInformationFormContainer.classList.remove("view");
  stepOneUserFormContainer.classList.add("view");
  stepOnePaginationInformationFormContainer.classList.remove("active");
  stepOnePaginationUserFormContainer.classList.add("active");
})

stepOnePaginationUserFormBackButton.addEventListener("click", (_) => {
  stepOneInformationFormContainer.classList.add("view");
  stepOneUserFormContainer.classList.remove("view");
  stepOnePaginationInformationFormContainer.classList.add("active");
  stepOnePaginationUserFormContainer.classList.remove("active");
})

stepOnePaginationUserFormNextButton.addEventListener("click", (_) => {
  if (!usernameInput.value) {
    warn(usernameRequiredFieldWarning, true);
    return;
  } else if (!usernameRegex.test(usernameInput.value)) {
    warn(usernameInvalidUsernameWarning, true);
    return;
  }
  
  if (!passwordInput.value) {
    warn(passwordRequiredFieldWarning, true);
    return;
  } else if (!passwordRegex.test(passwordInput.value)) {
    warn(passwordInvalidWarning, true);
    return;
  }

  stepOneEnumerationItem.classList.remove("active");
  stepOneContainer.classList.remove("show");
  stepTwoEnumerationItem.classList.add("active");
  stepTwoContainer.classList.add("show");
})

passwordToggleButton.addEventListener("click", (_) => {
  if (passwordToggleButton.innerHTML == "view") {
    passwordInput.setAttribute("type", "text");
    passwordToggleButton.innerHTML = "hide";
  } else {
    passwordInput.setAttribute("type", "password");
    passwordToggleButton.innerHTML = "view";
  }
})


function warn(warning, state) {
  if (state) {
    warning.classList.add("show");
  } else {
    warning.classList.remove("show");
  }
}


// stepOneEnumerationItem.classList.remove("active");
// stepOneContainer.classList.remove("show");
// stepTwoEnumerationItem.classList.add("active");
// stepTwoContainer.classList.add("show");