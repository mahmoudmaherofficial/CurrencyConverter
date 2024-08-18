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

  // Function to convert the amount
  function convert(price) {
    finalAmount.value = amount * price;
  }

  // Using if statement
  // if (userChoice.value === "USD") {
  //   convert(48.86)
  // } else if (userChoice.value === "EUR") {
  //   convert(53.9)
  // } else if (userChoice.value === "SAR") {
  //   convert(13.02);
  // } else if (userChoice.value === "AED") {
  //   convert(13.3);
  // } else if (userChoice.value === "KWD") {
  //   convert(160.5);
  // } else if (userChoice.value === "QAR") {
  //   convert(13.42);
  // }

  // Using switch statement
  switch (userChoice.value) {
    case "USD":
      convert(48.86);
      break;
    case "EUR":
      convert(53.9);
      break;
    case "SAR":
      convert(13.02);
      break;
    case "AED":
      convert(13.3);
      break;
    case "KWD":
      convert(160.5);
      break;
    case "QAR":
      convert(13.42);
      break;
  }
});
