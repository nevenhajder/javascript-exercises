
/*  Assignment:
        Write a program to multiply or divide two numbers, entered by the user.
*/

/*  Steps:
        1. Get the first number from the user.
        2. Get the second number from the user.
        3. Multiply or Divide the two numbers.
        4. Display the result.
*/

(function () {
    "use strict";

    /* Variables */
    var inpFirstNum = document.getElementById("firstNumber");
    var inpSecondNum = document.getElementById("secondNumber");
    var btnMultiply = document.getElementById("btnMultiply");
    var btnDivide = document.getElementById("btnDivide");
    var resultDisplay = document.getElementById("resultDisplay");

    /* Functions */
    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    /* Events */
    btnMultiply.addEventListener("click", function () {
        var userNum1 = inpFirstNum.value;
        var userNum2 = inpSecondNum.value;

        resultDisplay.innerHTML = "The product is " + multiply(userNum1, userNum2);
    });

    btnDivide.addEventListener("click", function () {
        var userNum1 = inpFirstNum.value;
        var userNum2 = inpSecondNum.value;

        resultDisplay.innerHTML = "The answer is " + divide(userNum1, userNum2);
    });

}());

















