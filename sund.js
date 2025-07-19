var overlay = document.getElementById("popup-overlay");
var box = document.getElementById("popup-box");
var popup = document.getElementById("popup");
var cancel = document.querySelector(".cancel");

popup.addEventListener("click", function () {
  overlay.style.display = "block";
  box.style.display = "block";
});

cancel.addEventListener("click", function () {
  overlay.style.display = "none";
  box.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");
  var addbox = document.getElementById("add-box");
  var booktitleinput = document.getElementById("book-title-input");
  var bookauthorinput = document.getElementById("book-author-input");
  var textareainput = document.getElementById("text-area-input");
  var overlay = document.getElementById("popup-overlay");
  var box = document.getElementById("popup-box");
  var log = document.getElementById("log");

  addbox.addEventListener("click", function (event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    div.innerHTML = `
      <h2>${booktitleinput.value}</h2>
      <h3>${bookauthorinput.value}</h3>
      <p>${textareainput.value}</p>
      <button class="abb" onClick="deletebook(event)">Delete</button>
    `;

    container.append(div);

    overlay.style.display = "none";
    box.style.display = "none";
  });
  var but = document.querySelector(".in");
  var fora = document.getElementById("view");

  but.addEventListener("click", function () {
    overlay.style.display = "block";
    fora.style.display = "flex";
  });
  log.addEventListener("click", function () {
    overlay.style.display = "none";
    fora.style.display = "none";
  });
});

function deletebook(event) {
  event.target.parentElement.remove();
}

var form = document.getElementById("view");
var name = document.getElementById("name");
var mail = document.getElementById("mail");
var pass = document.getElementById("pass");
var cpass = document.getElementById("cpass");

// formvalidation

// Get the form and inputs
const form1 = document.getElementById("view");
const usernameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");

// Get error message elements
const usernameError = document.getElementById("error");
const emailError = document.getElementById("errorm");
const passwordError = document.getElementById("errorp");
const confirmPasswordError = document.getElementById("errorpr");

// Function to validate username
function validateUsername() {
  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username is not required.";
    return false;
  } else {
    usernameError.textContent = "";
    return true;
  }
}

// Function to validate email
function validateEmail() {
  const emailPattern = /^(?!.*\.\.)[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,63})@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is not required.";
    return false;
  } else if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Function to validate password
function validatePassword() {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (pass.value.trim() === "") {
    passwordError.textContent = "Password is not required.";
    return false;
  } else if (!passwordPattern.test(pass.value)) {
    passwordError.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    return false;   
  }
   else {
    passwordError.textContent = "";
    return true;
  }
}

// Function to validate confirm password
function validateConfirmPassword() {
  if (cpass.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm password is not required.";
    return false;
  } else if (cpass.value !== pass.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

// Add input event listeners to dynamically validate on user input
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
pass.addEventListener("input", validatePassword);
cpass.addEventListener("input", validateConfirmPassword);

// Add submit event listener to validate before form submission
form1.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting if validation fails
  if ((validateUsername() && validateEmail())&& validatePassword() && validateConfirmPassword()) {
    alert("Form Submitted Successfully!");
    form.reset(); // Reset the form
  }
  
});

let clear= document.getElementById("can");
clear.addEventListener("click", function () {
  form1.style.display = "none";
  overlay.style.display = "none";
  clear.style.cursor = "pointer";
});
