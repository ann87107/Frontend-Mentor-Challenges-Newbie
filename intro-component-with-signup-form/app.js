const form = document.getElementById("sign-up__form"),
  firstName = document.getElementById("fName"),
  lastName = document.getElementById("lName"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  inputs = document.querySelectorAll("input");
 
// Back to normal 
inputs.forEach(input => {
  input.addEventListener("click", () => {
    const formControl = input.parentElement;
    formControl.className = "sign-up__form-control";
  })
})
  
// Check each input to see if it is empty
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieleName(input)} cannot be empty`);
    } else {
      showSuccess(input);
    }
  })
}

// Show error 
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "sign-up__form-control error";
  const errorMessage = formControl.querySelector("small");
  errorMessage.innerHTML = message;
}

// Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "sign-up__form-control success";
}

// Get the name of the input 
function getFieleName(input){
  if (input.id === "fName"){
    return "First name";
  } else if (input.id === "lName"){
    return "Last name";
  } else {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
}

// Check email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Looks like this is not an email");
  }
}

// Check password
function checkPassword(input, min, max) {
  if (input.value.trim().length < min) {
    showError(input, `${getFieleName(input)} must be more than ${min} characters.`);
  } else if (input.value.trim().length > max) {
    showError(input, `${getFieleName(input)} must be less than ${max} characters.`)
  } else {
    showSuccess(input);
  }
  
}
// Event Listener
form.addEventListener("submit", e => {
  e.preventDefault();
  checkRequired([firstName, lastName, email, password]);
  checkEmail(email);
  checkPassword(password, 8, 20);
  })


