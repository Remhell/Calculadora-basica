document.getElementById("number1");
document.getElementById("number2");
document.getElementById("operation");
document.getElementById("calculate").onclick = function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operation = document.getElementById("operation").value;
  let result;

  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      result = "Error";
  }

  document.getElementById("result").value = result;
};

document.getElementById("calculate").onclick();
