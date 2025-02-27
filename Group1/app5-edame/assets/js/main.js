let btn = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");
let err = document.querySelector(".err_msg");

function passwordvalidation() {
    if (password.value.length <= 8) {
    err.style.visibility = "visible";
    err.style.color = "red";
    err.style.fontSize = "12px";
    err.innerHTML = "گذرواژه اشتباه است";
  }
  setTimeout(function () {
    // err.style.display = "none";
    err.style.visibility = "hidden";
  }, 2000);
}
function usernamevalidation() {
  if (username.value.length <= 3 || username.value.length >= 18) {
    // err.style.display = "block";
    err.style.visibility = "visible";
    err.style.color = "red";
    err.innerHTML = "نام کاربری اشتباه است";
  }
   setTimeout(function () {
    // err.style.display = "none";
    err.style.visibility = "hidden";
  }, 2000);
}


//-------------------- show password --------------------
let eye = document.getElementById("cheshm");
function showpassword() {
  if (eye.getAttribute("class") == "fa-regular fa-eye position-absolute showpass") {
    eye.setAttribute("class", "fa-regular fa-eye-slash position-absolute showpass");
    password.setAttribute("type", "text");
  } else {
    eye.setAttribute("class", "fa-regular fa-eye position-absolute showpass");
    password.setAttribute("type", "password");
  }
}

// console.log(eye.getAttribute("class"));
