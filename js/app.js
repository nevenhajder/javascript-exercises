
/*  Assignment:
        Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
        *A prime number is only divisible by 1 and itself. eg. 3,7,11,13.
*/

/*  Steps:
        1. Get number from user.
        2. Start a loop from 1 to the userNumber.
        3. Use % on the userNumber to check for remainder.
        4. If there is no remainder, count that number as a divisor.
        5. If there are more than 2 divisors, then the number is not prime.
        6. Display the result.
*/

(function () {
    "use strict";


    /* Variables */

    var userInput = document.getElementById("userInput");
    var btnIsPrime = document.getElementById("btnIsPrime");
    var resultDisplay = document.getElementById("resultDisplay");


    /* Functions */
    function isPrime(num) {
        var divisors = 0;

        for (var i = 1; i <= num; i++) {
            /* If there is no remainder, increment divisors. */
            if ((num % i) === 0) {
                divisors += 1;
            }
        }

        if (divisors > 2) {
            return false;
        }

        return true;
    }

    function displayResult(arg) {
        resultDisplay.textContent = arg;
    }

    /* Events */
    btnIsPrime.addEventListener('click', function() {
        var userNum = userInput.value;

        if (isPrime(userNum)) {
            displayResult("You're number is a prime one!");
        } else {
            displayResult("You're number, sadly, is not prime.");
        }
    });
}());

















