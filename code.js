const resultText = document.querySelector(".js-result");
const userInput = document.querySelector(".js-user-input");
const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", () => {
  // ---
  const input = String(userInput.value);

  // check input validation
  if (input.length > 8) {
    resultText.innerHTML = "please enter 8 number or less";
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

function convert() {
  // ---

  return "";
}
