const password = document.querySelector("#inputPassword");
const ctrlPassword = document.querySelector("#inputPasswordConfirm");
const identical = document.querySelector("#passwordCheckIdentical");
const strPassword = document.querySelector("#strengthOfPassword");
const space = document.querySelector("#passSpace");

//Strength of password control
password.addEventListener("keyup", () => {
  //check if password contains "space"
  if (password.value.includes(" ")) {
    setAlert(space, "warning");
    space.innerText = "Lösenordet får ej innehålla mellanslag";

    //Disable submit button if true
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.disabled = true;
  } else {
    space.innerText = "";
    submitBtn.disabled = false;
    space.classList.remove("alert");
    space.classList.remove("alert-warning");
  }
  const uppercasePattern = /.*[A-Z].*[A-Z]/;
  const specialCharacterPattern = /.*[!@#$&*]/;
  const digitPattern = /.*[0-9].*[0-9]/;
  const lowercasePattern = /.*[a-z].*[a-z].*[a-z]/;
  const lengthPattern = /.{8}$/;

  let safetyCounter = 0;

  if (uppercasePattern.test(password.value)) {
    safetyCounter++;
  }
  if (specialCharacterPattern.test(password.value)) {
    safetyCounter++;
  }
  if (digitPattern.test(password.value)) {
    safetyCounter++;
  }
  if (lowercasePattern.test(password.value)) {
    safetyCounter++;
  }
  if (lengthPattern.test(password.value)) {
    safetyCounter++;
  }

  //Clear classlist
  strPassword.classList.forEach((className) => {
    strPassword.classList.remove(className);
  });

  console.log(safetyCounter); // Check the safety counter in the console
  switch (safetyCounter) {
    case 0:
      // Very weak password
      strPassword.innerText = "Very weak password";
      setAlert(strPassword, "danger");
      break;
    case 1:
      // Very weak password
      strPassword.innerText = "Very weak password";
      setAlert(strPassword, "danger");
      break;
    case 2:
      // Weak password
      strPassword.innerText = "Weak password";
      setAlert(strPassword, "warning");
      break;
    case 3:
      // Medium strength password
      strPassword.innerText = "Medium strength password";
      setAlert(strPassword, "info");
      break;
    case 4:
      // Strong password
      strPassword.innerText = "Strong password";
      setAlert(strPassword, "info");
      break;
    case 5:
      // Very strong password
      strPassword.innerText = "Very strong password";
      setAlert(strPassword, "success");
      break;
  }

  //Resetting if length is 0
  if (password.value.length == 0) {
    strPassword.className = "";

    strPassword.innerText = "";
    strPassword.classList.add("rounded-3");
    strPassword.classList.add("mb-3");
    strPassword.classList.add("mt-1");
  }
});

//Adding alert tag with correct propperties
function setAlert(object, alertLevel) {
  object.classList.add("alert");
  object.classList.add(`alert-${alertLevel}`);
}

//Control if passwords are identical
ctrlPassword.addEventListener("keyup", () => {
  if (password.value !== ctrlPassword.value) {
    setAlert(identical, "danger");
    identical.innerText = "Passwords are not identical";
  }
  if (password.value == ctrlPassword.value && ctrlPassword.value.length != 0) {
    identical.classList.remove("alert-danger");
    setAlert(identical, "success");

    // identical.classList.remove("d-none"); // Corrected class name
    identical.innerText = "Passwords are identical";
  }

  if (ctrlPassword.value.length === 0) {
    // Remove all classes from the 'identical' element
    identical.className = "";
    identical.innerText = "";
    identical.classList.add("rounded-3");
    identical.classList.add("mb-1");
    identical.classList.add("mt-1");
  }
});

//Check for unique user
const email = document.querySelector("#inputEmail");
const emailHelpBlock = document.querySelector("#emailHelpBlock");

email.addEventListener("keyup", () => {
  email.classList.remove("border");
  email.classList.remove("border-danger");
  emailHelpBlock.classList.remove("text-danger");

  const username = email.value.split("@")[0];
  const domain = email.value.split("@")[1];
  const uniqueName = username.replace(/\./g, "") + domain.split(".")[0];
  console.log(uniqueName);

  //If the user exists, clears the input field and tells the user with placeholder and border-red
  if (localStorage.getItem(uniqueName)) {
    email.classList.add("border");
    email.classList.add("border-danger");
    emailHelpBlock.classList.add("text-danger");

    email.value = "";
    email.placeholder = "Oops, Email alredy exists";
  }
});

const submitBtn = document.querySelector("#submitBtn");
const submitForm = document.querySelector("#submitForm");
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#inputEmail").value;
  const username = email.split("@")[0];
  const domain = email.split("@")[1];
  const name = username.replace(/\./g, "") + domain.split(".")[0];

  if (password.value === ctrlPassword.value && password.value.length !== 0) {
    const savedProfile = {
      firstName: document.querySelector("#inputFirstname").value,
      lastName: document.querySelector("#inputLastname").value,
      email: document.querySelector("#inputEmail").value,
      password: password.value,
      username: name,
    };

    window.localStorage.setItem(name, JSON.stringify(savedProfile));
    console.log("User profile saved:", savedProfile);

    window.location.href = "./login.html";
  } else {
    console.log("Passwords do not match or are empty.");
  }
});
