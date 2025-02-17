const resultText = document.querySelector(".js-result");
const userInput = document.querySelector(".js-user-input");
const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", () => {
  // ---
  const input = userInput.value.trim();

  // check input validation
  if (input.length === 0) {
    resultText.innerHTML = "empty input!";
    return;
  }

  // check input validation
  if (input.length > 8) {
    resultText.innerHTML = "please enter a binary number with up to 8 digits";
    return;
  }

  for (let i = 0; i < input.length; i++) {
    const num = Number(input[i]);
    if (num > 1) {
      resultText.innerHTML =
        "invalid input! Please enter a binary number (only 0s and 1s)";
      userInput.value = "";
      return;
    }
  }

  // convert
  resultText.innerHTML = "decimal: " + convert(input);

  // ---
});

function convert(input) {
  let finalNumber = 0;
  let power = 0;
  // ---
  for (let i = input.length - 1; i >= 0; i--) {
    let num = Number(input[i]);
    finalNumber += num * Math.pow(2, power);
    power++;
  }

  return String(finalNumber);
}

function ezConvert(input) {
  return String(parseInt(input, 2));
}
