const display = document.querySelector(".display input");

//display clear button handler
document
  .querySelector(".clearBtn")
  .addEventListener("click", () => (display.value = "0"));

//input handler
document.querySelectorAll(".inputBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickedBtn = e.target.innerText;
    let displayValue = display.value;

    if (
      displayValue === "0" &&
      ["+", "-", "*", "/", "%", "0"].includes(clickedBtn)
    ) {
      //no code for if display is empty and first clicked operator
    } else if (displayValue === "0" && clickedBtn === ".") {
      display.value = displayValue + clickedBtn;
    } else if (displayValue === "0") {
      display.value = clickedBtn;
    } else {
      let lastChar = displayValue[displayValue.length - 1];
      if (
        ["+", "-", "*", "/", "%", "."].includes(lastChar) &&
        ["+", "-", "*", "/", "%", "."].includes(clickedBtn)
      ) {
        //no code if last character is an operator
      } else {
        if (display.value.length <= 9) {
          display.value += clickedBtn;
        }
      }
    }
  });
});
//delete button handler
document.querySelector(".deleteBtn").addEventListener("click", () => {
  const displayValue = display.value;
  if (displayValue.length === 1) {
    display.value = "0";
  } else {
    display.value = displayValue.slice(0, displayValue.length - 1);
  }
});

//percent btn handler
document.querySelector(".percentBtn").addEventListener("click", () => {
  const displayValue = display.value;
  for (let i = displayValue.length - 1; i >= 0; i--) {
    if (["+", "-", "/", "*"].includes(displayValue[i])) {
      const indexOfOperator = displayValue.lastIndexOf(displayValue[i]);
      const evaluatePart = displayValue.slice(0, indexOfOperator + 1);
      const percentagePart = displayValue.slice(indexOfOperator + 1);
      const newString = `${evaluatePart}${Number(percentagePart) / 100}`;
      display.value = newString;
      break;
    }
  }
});

//evaluate or = button handler
document.querySelector(".evaluate").addEventListener("click", () => {
  try {
    const displayValue = display.value;
    if (["+", "-", "/", "*"].includes(displayValue[displayValue.length - 1])) {
      const evaluateString = displayValue.slice(0, displayValue.length - 1);
      const result = eval(evaluateString);
      display.value = result;
    } else {
      const result = eval(display.value);
      display.value = result;
    }
  } catch (err) {
    console.log(err);
  }
});

document.querySelector("#open").addEventListener("click", () => {
  document.querySelector(".calculator").style.display = "flex";
  document.querySelector(".modalOpener").style.display = "none";
});

document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector(".calculator").style.display = "node";
  document.querySelector(".modalOpener").style.display = "flex";
  display.value = "";
});

//on off button handler
document.querySelector(".onOffBtn").addEventListener("click", (e) => {
  if (e.target.textContent === "ON") {
    e.target.textContent = "OFF";
    display.value = "0";
  } else {
    e.target.textContent = "ON";
    display.value = "";
  }
  document.querySelectorAll(".btn").forEach((btn) => {
    if (!btn.classList.contains("onOffBtn")) {
      if (btn.disabled) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    }
  });
});
