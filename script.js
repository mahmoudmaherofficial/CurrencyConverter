// Initialize Variables
let userChoice = document.getElementById("from");
let inputAmount = document.getElementById("from-amount");
let finalAmount = document.getElementById("to-amount");
let curIndicator = document.getElementById("basic-addon1");
let conBtn = document.getElementById("convert");

// Changing the currency type
userChoice.addEventListener("change", (el) => {
  curIndicator.innerHTML = el.target.value;
  conBtn.click();
});

// Converting the amount
conBtn.addEventListener("click", (el) => {
  el.preventDefault();

  let amount = inputAmount.value;

  // Using if statement
  // if (userChoice.value === "USD") {
  //   finalAmount.value = amount * 48.86;
  // } else if (userChoice.value === "EUR") {
  //   finalAmount.value = amount * 53.9;
  // } else if (userChoice.value === "SAR") {
  //   finalAmount.value = amount * 13.02;
  // } else if (userChoice.value === "AED") {
  //   finalAmount.value = amount * 13.3;
  // } else if (userChoice.value === "KWD") {
  //   finalAmount.value = amount * 160.5;
  // } else if (userChoice.value === "QAR") {
  //   finalAmount.value = amount * 13.42;
  // }

  // Using switch statement
  switch (userChoice.value) {
    case "USD":
      finalAmount.value = amount * 48.86;
      break;
    case "EUR":
      finalAmount.value = amount * 53.9;
      break;
    case "SAR":
      finalAmount.value = amount * 13.02;
      break;
    case "AED":
      finalAmount.value = amount * 13.3;
      break;
    case "KWD":
      finalAmount.value = amount * 160.5;
      break;
    case "QAR":
      finalAmount.value = amount * 13.42;
      break;
  }
});
