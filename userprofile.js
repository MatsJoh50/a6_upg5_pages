// Retrieve the loginUser string from localStorage
const loginUserString = window.localStorage.getItem("loginUser");
try{

    const getProfileName = JSON.parse(loginUserString)
    const activeProfile = window.localStorage.getItem(getProfileName.username);
    console.log(activeProfile)

} catch(e){console.log(e)};

if (loginUserString) {
    // Parse the cleaned loginUser string as JSON
    const loginUser = JSON.parse(loginUserString);
    try {
        if(loginUser.firstName !== undefined){
            const firstName = document.querySelector("#firstName");
            firstName.value = loginUser.firstName;

        }
    } catch {}

    try {
        if(loginUser.lastName !== undefined){
            const lastName = document.querySelector("#lastName");
            lastName.value = loginUser.lastName;
        }
    } catch {}
    try {
        if(loginUser.email !== undefined){
            const email = document.querySelector("#email");
            email.value = loginUser.email;
            
        }
    } catch {}
    try {
        if(loginUser.phonenumber !== undefined){
            const phonenumber = document.querySelector("#phonenumber");
            phonenumber.value = loginUser.phonenumber;
            
        }
    } catch {}
    try {
        if(loginUser.homeAdress !== undefined){
            const homeAdress = document.querySelector("#homeAdress");
            homeAdress.value = loginUser.homeAdress;
        }
    } catch {}
    try {
        if(loginUser.city !== undefined){
            const city = document.querySelector("#city");
            city.value = loginUser.city
        }
    } catch {}
    try {
        if(loginUser.zipcode !== undefined){
            const zipcode = document.querySelector("#zipcode");
            zipcode.value = loginUser.zipcode
            
        }
    } catch {}
} else {
  console.error("No loginUser data found in localStorage");
}

function setValue(query) {
    try {
        // Check if loginUser object exists and has the property specified by 'query'
        if (loginUser && loginUser[query] !== undefined) {
            const element = document.querySelector(`#${query}`);
            if (element) {
                element.value = loginUser[query];
            } else {
                console.error(`Element with ID '${query}' not found`);
            }
        }
    } catch (error) {
        console.error('Error setting value:', error);
    }
}


const logout = document.querySelector("#logout");

const profile = document.querySelector("#profileInfo");
profile.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(loginUser);
});
