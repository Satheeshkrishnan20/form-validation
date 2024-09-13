const form = document.getElementById("form");

const name = document.getElementById("fullname");
const email = document.getElementById("email");
const number = document.getElementById("phone");
const country = document.getElementById("country");
const ratio = document.getElementById("ratio");
const ratio1 = document.getElementById("ratio1");
const text = document.getElementById("text");

form.addEventListener("submit", (e) => {
  const namevalue = name.value;
  const emailvalue = email.value;
  const numvalue = number.value;
  const couvalue = country.value;
  const textvalue = text.value;
  document.getElementById("err-fullname").textContent = "";
  document.getElementById("err-email").textContent = "";
  document.getElementById("err-phone").textContent = "";
  document.getElementById("err-select").textContent = "";
  document.getElementById("err-gender").textContent = "";
  document.getElementById("err-feedback").textContent = "";
  //name-validation
  if (namevalue === "") {
    document.getElementById("err-fullname").textContent =
      "*please fill the full name";
    e.preventDefault();
  } else if (namevalue.length < 3 || namevalue.length > 15) {
    document.getElementById("err-fullname").textContent =
      "*minimum 3 letters and maximum 15 letters";
    e.preventDefault();
  }

  //email-validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailvalue == "") {
    document.getElementById("err-email").textContent = "*please fill the Email";
    e.preventDefault();
  } else if (emailRegex.test(emailvalue) != true) {
    document.getElementById("err-email").textContent = "*Enter a valid mail";
    e.preventDefault();
  }

  //phone number validation
  if (numvalue == "") {
    document.getElementById("err-phone").textContent =
      "*please fill the Phone Number";
    e.preventDefault();
  }

  //select validation
  if (couvalue === "") {
    document.getElementById("err-select").textContent =
      "*please Select the country";
    e.preventDefault();
  }

  //ratio-btn validation
  if (ratio.checked == true || ratio1.checked == true) {
    result = 1;
  } else {
    document.getElementById("err-gender").textContent =
      "*Please select your gender";
    e.preventDefault();
  }

  //text-area validation

  if (textvalue == "") {
    document.getElementById("err-feedback").textContent =
      "*please fill the feedback";
    e.preventDefault();
  }
});
