const display = document.querySelector(".display input");
//display handler
document.querySelectorAll(".inputBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedBtn = e.target.innerText;
    let displayValue = display.value;

    if (displayValue === "" && ["+", "-", "*", "/"].includes(clickedBtn)) {
      //no code for if display is empty and first clicked operator
    } else {
      let lastChar = displayValue[displayValue.length - 1];
      if (
        ["+", "-", "*", "/"].includes(lastChar) &&
        ["+", "-", "*", "/"].includes(clickedBtn)
      ) {
        //no code if last character is an operator
      } else {
        display.value += clickedBtn;
      }
    }
  });
});

//clear button handler
document
  .querySelector(".clear")
  .addEventListener("click", () => (display.value = ""));

//evaluate button handler
document.querySelector(".evaluate").addEventListener("click", () => {
  const displayValue = display.value;
  if (["+", "-", "/", "*"].includes(displayValue[displayValue.length - 1])) {
    const evaluateString = displayValue.slice(0, displayValue.length - 1);
    const result = eval(evaluateString);
    display.value = result;
  } else {
    const result = eval(display.value);
    display.value = result;
  }
});
