const emailCont = document.querySelector("#email-cont");
const emailInp = document.querySelector("#email");
const emailErr = document.querySelector("#email-cont .error-msg");
const passCont = document.querySelector("#password-cont");
const passInp = document.querySelector("#password");
const passErr = document.querySelector("#password-cont .error-msg");
const passToggler = document.querySelector("#password-cont i");
const loginBtn = document.querySelector(".login-btn button");

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

emailInp.oninput = () => {
  if (!validateEmail(emailInp.value)) {
    emailErr.classList.remove("hide");
  } else {
    emailErr.classList.add("hide");
  }
};

passInp.oninput = () => {
  if (passInp.value.length <= 6) {
    passErr.classList.remove("hide");
  } else {
    passErr.classList.add("hide");
  }
};

passToggler.onclick = () => {
  if (
    passToggler.classList.contains("fa-eye") &&
    passInp.getAttribute("type") == "text"
  ) {
    passToggler.classList.add("fa-eye-slash");
    passToggler.classList.remove("fa-eye");

    passInp.setAttribute("type", "password");
  } else if (
    passToggler.classList.contains("fa-eye-slash") &&
    passInp.getAttribute("type") == "password"
  ) {
    passToggler.classList.add("fa-eye");
    passToggler.classList.remove("fa-eye-slash");

    passInp.setAttribute("type", "text");
  }
};

loginBtn.onclick = () => {
  if (!validateEmail(emailInp.value)) {
    emailCont.classList.add("error");
    emailErr.classList.remove("hide");
  } else {
    emailCont.classList.remove("error");
    emailErr.classList.add("hide");
  }

  if (passInp.value.length <= 6) {
    passCont.classList.add("error");
    passErr.classList.remove("hide");
  } else {
    passCont.classList.remove("error");
    passErr.classList.add("hide");
  }
};
