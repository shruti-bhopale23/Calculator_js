const firstNumber = document.getElementById("firstNumber")
const operator = document.getElementById("operator")
const secondNumber = document.getElementById("secondNumber")
const calculateBtn = document.getElementById("calculateBtn")
const result = document.getElementById("result")
calculateBtn.addEventListener("click", function() {

    const num1 = firstNumber.value;
    const selectedOperator = operator.value;
    const num2 = secondNumber.value;
    if (num1 === "" || num2 === "") {
        result.textContent = "Please enter both numbers";
        return;
    }

    const number1 = Number(num1);
    const number2 = Number(num2);

    let resultValue;

    if (selectedOperator === "+") {
        resultValue = number1 + number2;
    }
    else if (selectedOperator === "-") {
        resultValue = number1 - number2;
    }
    else if (selectedOperator === "*") {
        resultValue = number1 * number2;
    }
    else if (selectedOperator === "/") {
        resultValue = number1 / number2;
       
    }
  result.textContent = resultValue;
});
