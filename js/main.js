var naame = document.getElementById("userName");
var mail = document.getElementById("userMali");
var pass = document.getElementById("userPass");
var login = document.getElementById("login-btn");
var welcome = document.getElementById("welc"); 
var emailLogin = document.getElementById("mail");
var passLogin = document.getElementById("pass");
var signupMessage = document.getElementById("message");
var signInMessage = document.getElementById("login-message");
var signup = document.getElementById("signUp");
var signupList;

// ====================the part of LocalStorage======================
if (localStorage.getItem("userRegist") === null) {
  signupList = [];
} else {
  signupList = JSON.parse(localStorage.getItem("userRegist"));
}


//==================Validation Function=====================

var nameRegExp = /^[A-Z]{1}\w{3,}(\s[A-Z]{1}\w{3,})?/;
var mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// var passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; //Complex Regex
var passRegExp = /^\d{6,8}/; //simple Regex;

function validate(element, regex) {
  if (regex.test(element.value)) {
    return true;
  } else {
    return false;
  }
}
//================== Create Function (Registration) =====================

function getSignup() {
  var regist = {
    uName: naame.value,
    uMail: mail.value,
    uPass: pass.value
  }

  if (validate(naame, nameRegExp) === true && validate(mail, mailRegExp) === true && validate(pass, passRegExp) === true) {
    // for (var i = 0; i <= signupList.length-1; i++) {
    //   if (signupList[i].uMail === mail.value) {
    //     signupMessage.innerHTML = "This email already exists write anoter one";
    //     signupMessage.style.color = "red";
    //     signupMessage.classList.replace("d-none", "d-block");
    //     multiFunc();
    //   } else {
    //   }
    // }
    signupList.push(regist);
    localStorage.setItem("userRegist", JSON.stringify(signupList));
    signupMessage.innerHTML = "Success";
    signupMessage.style.color = "#24D71E";
    signupMessage.classList.replace("d-none", "d-block");
    reset();
    // goLogin();
    }else if (validate(naame, nameRegExp) !== true ){
    signupMessage.innerHTML = "Your Name is not valid";
    signupMessage.style.color = "red";
    signupMessage.classList.replace("d-none", "d-block");
    multiFunc();
    }else if (validate(mail, mailRegExp) !== true){
    signupMessage.innerHTML = "Your Email is not valid ";
    signupMessage.style.color = "red";
    signupMessage.classList.replace("d-none", "d-block");
    multiFunc();
    } else if (validate(pass, passRegExp) !== true) {
    signupMessage.innerHTML = "Your Password is not valid ";
    signupMessage.style.color = "red";
    signupMessage.classList.replace("d-none", "d-block");
    multiFunc();
    }
  console.log(signupList);
  
};

//===============Close Message==============
function closeMess() {
  signupMessage.classList.replace("d-block", "d-none");
}
function multiFunc() {
  naame.addEventListener("focus", function () {
  closeMess();
  })
  mail.addEventListener("focus", function () {
  closeMess();
  })
  pass.addEventListener("focus", function () {
  closeMess();
  })
}



// ====================Reset inputs Function of Sign Up =======================
function reset() {
    naame.value = "";
    mail.value = "";
    pass.value = "";
}
// ============================go to login page============================
function goLogin() {
  location.href = "index.html";
  localStorage.removeItem('userName');
}
// =============================Login Page================================
function getSignin() {
  for (var i = 0; i < signupList.length; i++) {
    if (signupList[i].uMail === emailLogin.value && signupList[i].uPass === passLogin.value) {
      var userName = signupList[i].uName;
      localStorage.setItem("userName", userName);
      goHome(i);
    }else if(signupList[i].uMail !== emailLogin.value && signupList[i].uPass !== passLogin.value){
      signInMessage.innerHTML = "Incorrect Email And Password";
      signInMessage.style.color = "red";
      signInMessage.classList.replace("d-none", "d-block");
      multiLoginFunc();
    } else if (signupList[i].uMail !== emailLogin.value) {
      signInMessage.innerHTML = "Incorrect Email";
      signInMessage.style.color = "red";
      signInMessage.classList.replace("d-none", "d-block");
      multiLoginFunc();
    } else if(signupList[i].uPass !== passLogin.value) {
      signInMessage.innerHTML = "Incorrect Password";
      signInMessage.style.color = "red";
      signInMessage.classList.replace("d-none", "d-block");
      multiLoginFunc();
    } 
    
  }
};

// ==========================go to welcome page=======================
function goHome(index) {
  window.location.href = "welcome.html";
  // welcome.innerHTML = `${signupList[index].uName}`
}
//============ Close Login Message ==============

function closeLoginMess() {
  signInMessage.classList.replace("d-block", "d-none");
}
function multiLoginFunc() {
  emailLogin.addEventListener("focus", function () {
  closeLoginMess();
  })
  passLogin.addEventListener("focus", function () {
  closeLoginMess();
  })
}



//Welcome
