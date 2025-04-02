const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

display.readOnly = true;
display.focus();

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      display.value = eval(display.value);
    } else if (btn.id === "clear") {
      display.value = "";
    } else if (btn.id === "delete") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
    }
  });
});

display.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/[0-9]/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    display.value += key;
  }
  else if (key === 'Enter' || key === '=') {
    display.value = eval(display.value);
  }
  else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
  else if (key === 'Escape') {
    display.value = '';
  }

  event.preventDefault();
});
