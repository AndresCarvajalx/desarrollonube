import { createUserEmailPassword, sendEmail } from "./global.js";

const signInBtn = document.getElementById("signin-btn");

async function signIn() {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;

  let passwordValue = password.value;
  createUserEmailPassword(email.trim(), passwordValue)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmail(user);
      alert("Se envio un correo de verificacion");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  signInBtn.addEventListener("click", signIn);
});
