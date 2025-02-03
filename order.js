const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const city = document.getElementById("city");
const email = document.getElementById("email");
const form = document.getElementById("form");

const validation = (event) => {
  var cityValue = city.value.trim();
  var emailValue = email.value.trim();


  if (cityValue.length < 2) {
    alert("الرجاء إدخال مدينة صحيحة");
    cityValue.style.borderColor = "red";
    event.preventDefault();
    return false;
  }

  if (!emailRegex.test(emailValue)) {
    alert("الرجاء إدخال بريد صحيح");
    email.style.borderColor = "red";
    email.focus();
    event.preventDefault();
    return false;
  }
  
  return true;

};

form.onsubmit = validation;
