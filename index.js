let string = "0";
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.classList.add("button");
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === "=") {
      try {
        string = eval(string);
        display.textContent = string;
      } catch (error) {
        display.textContent = "Error";
      }
    } else if (buttonValue === "C") {
      string = "0";
      display.textContent = string;
    } else {
      // Check if the string is "0" (initial state) or an error message
      if (string === "0" || display.textContent === "Error") {
        string = buttonValue;
      } else {
        string = string + buttonValue;
      }
      display.textContent = string;
    }
  });
});
