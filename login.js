const email = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#inputPassword");
const loginBtn = document.querySelector("#loginButton");
const loginForm = document.querySelector("#loginForm");
const submitInfo = document.querySelector("#submitFormInfo");

// Check if the user is logged in and redirect to the user profile page if they are
const loggedInUser = window.localStorage.getItem("loginUser");
if (loggedInUser) {
    window.location.href = "./userprofile.html";
}

// Show the login form after a short delay
const showLoginForm = () => {
    loginForm.classList.remove("d-none");
};

setTimeout(showLoginForm, 50);


loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = email.value.split("@")[0];
  const domain = email.value.split("@")[1];
  const fetchUser = username.replace(/\./g, "") + domain.split(".")[0];
  const existingUser = JSON.parse(window.localStorage.getItem(fetchUser));


  try {
    if (existingUser != null) {
      console.log("user exists");
      if (existingUser.password === loginPassword.value) {
        console.log("Pass works");
        console.log("Welcome Master");
        
        existingUser.username = fetchUser;
        window.localStorage.setItem("loginUser", JSON.stringify(existingUser))
        window.location.href = "./userprofile.html";

      }  else {
        console.log("uh uh uuuh, nope");
        submitInfo.innerText = "Wrong username or password"
        email.classList.add("border-danger")
        loginPassword.classList.add("border-danger")
        setTimeout(() => {
          submitInfo.innerText ="";
          email.classList.remove("border-danger")
          loginPassword.classList.remove("border-danger")
        }, 5000)
      } 
    }
  } catch (e) {
    console.log(e);
  }

});
