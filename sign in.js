// Define the regular expressions for password validation
const passwordRegex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@%^&*]).{8,}$/;

const username = document.getElementById("username");
const password1 = document.getElementById("password");
const form1 = document.getElementById("myForm");

const validation1 = (event) => {
    var usernameValue = username.value.trim();
    var passwordValue = password.value.trim();

    if(usernameValue.length < 3){
        alert("username length must be longer than two chars");
        username.focus();
        event.preventDefault();
        return false;
    }

    if(!passwordRegex1.test(passwordValue)){
        alert("password wrong");
        password1.focus();
        event.preventDefault();
        return false;
    }
    return true;
}
form1.onsubmit = validation1;


// Define the regular expressions for email and password validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@%^&*]).{8,}$/;

const firstname =document.getElementById("firstname");
// const lastname =document.getElementById("lastname");
// const phone =document.getElementById("phone");
const email =document.getElementById("email");
// const description =document.getElementById("description");
const password =document.getElementById("password");
const confirm =document.getElementById("confirm");

const form2 =document.getElementById("form2");


// description.oninput = () => {
//     document.getElementById("text-length").textContent = description.value.length + " / 200";
// }

const validation2 = (event) =>{
    var firstnameValue = firstname.value.trim();
    // var lastnameValue = lastname.value.trim();
    // var phoneValue = phone.value.trim();
    var emailValue = email.value.trim();
    // var descriptionValue = description.value.trim();
    var passwordValue = password.value.trim();
    var confirmValue = confirm.value.trim();

    if(firstnameValue.length < 3){
        // document.getElementById("firstname-span").textContent = "invelid value";
        firstname.style.borderColor = "#f00";
        event.preventDefault();
        return false;
    }

    // if(lastnameValue.length < 3){
    //     document.getElementById("lastname-span").textContent = "invelid value";
    //     lastname.style.borderColor = "#f00";
    //     event.preventDefault();
    //     return false;
    // }

    // if(phoneValue.length < 10){
    //     document.getElementById("phone-span").textContent = "invelid value";
    //     phone.style.borderColor = "#f00";
    //     event.preventDefault();
    //     return false;
    // }

    if(!emailRegex.test(emailValue)){
        alert("email wrong");
        email.focus();
        event.preventDefault();
        return false;
    }

    if(!passwordRegex2.test(passwordValue)){
        alert("password wrong");
        password.focus();
        event.preventDefault();
        return false;
    }

    if(confirmValue !=  passwordValue){
        alert("password soree");
        confirm.focus();
        event.preventDefault();
        return false;
    }

    return true;

} 
form2.onsubmit = validation2;