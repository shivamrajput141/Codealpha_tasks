const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

// BONUS: Keyboard support
document.addEventListener("keydown", (event) => {
  if (/[0-9+\-*/.]/.test(event.key)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key.toLowerCase() === "c") {
    display.value = "";
  }
});
