// Retrieve the loginUser string from localStorage
const loginUserString = window.localStorage.getItem("loginUser");

  const getProfileName = JSON.parse(loginUserString);
  const getActiveProfile = window.localStorage.getItem(getProfileName.username);
  const activeProfile = JSON.parse(getActiveProfile);
  console.log("Login profile:",activeProfile);

if (activeProfile) {
  // Parse the cleaned loginUser string as JSON
  try {
    const firstName = document.querySelector("#firstName");
    if (activeProfile.firstName !== undefined) {
      firstName.value = activeProfile.firstName;
    }
  } catch {}

  try {
    const lastName = document.querySelector("#lastName");
    if (activeProfile.lastName !== undefined) {
      lastName.value = activeProfile.lastName;
    }
  } catch {}
  try {
    const email = document.querySelector("#email");
    if (activeProfile.email !== undefined) {
      email.value = activeProfile.email;
    }
  } catch {}
  try {
    const phonenumber = document.querySelector("#phonenumber");
    if (activeProfile.phonenumber !== undefined) {
      phonenumber.value = activeProfile.phonenumber;
    }
  } catch {}
  try {
    const homeAdress = document.querySelector("#homeAdress");
    if (activeProfile.homeAdress !== undefined) {
      homeAdress.value = activeProfile.homeAdress;
    }
  } catch {}
  try {
    const city = document.querySelector("#city");
    if (activeProfile.city !== undefined) {
      city.value = activeProfile.city;
    }
  } catch {}
  try {
    const zipcode = document.querySelector("#zipcode");
    if (activeProfile.zipcode !== undefined) {
      zipcode.value = activeProfile.zipcode;
    }
  } catch {}
} else {
  console.error("No loginUser data found in localStorage");
}



const profile = document.querySelector("#profileInfo");
profile.addEventListener("submit", (e) => {
  e.preventDefault();

  if(firstName.value !== activeProfile.firstName){
    activeProfile.firstName = firstName.value;
  }

  if(lastName.value !== activeProfile.lastName){
    activeProfile.lastName = lastName.value;
  }
  
  if(email.value !== activeProfile.email){
    activeProfile.email = email.value;
  }
  
  if(phonenumber.value !== activeProfile.phonenumber){
    activeProfile.phonenumber = phonenumber.value;
  }
  
  if(homeAdress.value !== activeProfile.homeAdress){
    activeProfile.homeAdress = homeAdress.value;
  }
  
  if(city.value !== activeProfile.city){
    activeProfile.city = city.value;
  }
  
  if(zipcode.value !== activeProfile.zipcode){
    activeProfile.zipcode = zipcode.value;
  }
window.localStorage.setItem(activeProfile.username, JSON.stringify(activeProfile))

  console.log(activeProfile);
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", () =>{
  window.localStorage.removeItem("loginUser")
  window.location.href ="./login.html"
});
