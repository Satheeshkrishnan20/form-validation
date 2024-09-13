const username = document.getElementById("user-name");
const usermail = document.getElementById("user-email");
const usernum = document.getElementById("user-number");
const usercountry = document.getElementById("user-country");
const usergender = document.getElementById("user-gender");
const userfeedback = document.getElementById("user-feedback");

document.querySelector("button").addEventListener("click", () => {
  window.history.back();
});

const params = new URLSearchParams(window.location.search);

const arr = [...params];

console.log(arr);

username.textContent = arr[0][1];
usermail.textContent = arr[1][1];
usernum.textContent = arr[2][1];
usercountry.textContent = arr[3][1];
usergender.textContent = arr[4][1];
userfeedback.textContent = arr[5][1];
