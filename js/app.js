
/*  Assignment:
        Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.
        Accept b and n from the user and display the result.
*/

/*  Steps:
        1. Get the base and exponent from the user.
        2. Compute using Math.pow(base, exponent).
        3. Display result.
*/

(function () {
    "use strict";

    /* Variables */
    var base = document.getElementById('base');
    var exponent = document.getElementById('exponent');
    var btnCalc = document.getElementById('btnCalc');
    var display = document.getElementById('resultDisplay');

    /* Functions */
    function expo(base,exp) {
        return Math.pow(base,exp);
    }

    function displayR(arg) {
        display.textContent = arg;
    }

    /* Events */
    btnCalc.addEventListener('click', () => {
        var userBase = base.value;
        var userExp = exponent.value;
        displayR(expo(userBase,userExp));
    });


}());











