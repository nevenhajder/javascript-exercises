
/*  Assignment:
        Write a program to convert Celsius to Farenheit and vice versa.
*/

/*  Steps:
        1. Get the number from the user.
        2. Have to user select which units they want (radio buttons).
        3. Press button to convert.
*/

(function () {
    "use strict";

    /* Variables */
    var userNum = document.getElementById("userNum");
    var radioC = document.getElementById("units1");
    var btnConvert = document.getElementById("btnConvert");
    var resultDisplay = document.getElementById("resultDisplay");

    /* Functions */
    function checkUnits() {
        if (radioC.checked) {
            return 'c';
        } else {
            return 'f';
        }
    }

    function convert() {
        var arg = parseInt(userNum.value, 10);

        if (checkUnits() === 'c') {
            return Math.round((arg - 32) / 1.8);
        } else {
            return Math.round(arg * 1.8 + 32);
        }
    }

    function display() {
        resultDisplay.innerHTML = convert();
    }


    /* Events */
    btnConvert.addEventListener('click', function () {
        display();
    });

}());

















