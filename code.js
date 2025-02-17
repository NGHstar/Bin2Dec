const resultText = document.querySelector(".js-result");
const userInput = document.querySelector(".js-user-input");
const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", () => {
  // ---
  const input = userInput.value.trim();

  // check input validation
  if (input.length === 0) {
    resultText.innerHTML = "please enter a binary number up to 8 digits";
    return;
  }

  // check input validation
  if (input.length > 8) {
    resultText.innerHTML = "please enter an 8 digits number or less";
    return;
  }

  for (let i = 0; i < input.length; i++) {
    const num = Number(input[i]);
    if (num > 1) {
      resultText.innerHTML = "your number is not binary (0 and 1 only)";
      userInput.value = "";
      return;
    }
  }

  // convert
  resultText.innerHTML = convert(input);

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
