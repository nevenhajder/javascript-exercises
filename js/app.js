
/*  Assignment:
        Write a JavaScript function which says whether a number is perfect.
        Perfect number : equal to the sum of its positive divisors,
                         or equalt to half the sum of its positive divisors.
        Perfect Numbers: 6, 28, 496, 8128, 33550336, 8589869056 ...
*/

/*  Steps:
        1. Get number from user.
        2. Find all of the positive divisors for that number.
        3. Add all of the positive divisors together, except the number itself
            i. If equal to original number then it's perfect
        4. Add all of the positive divisors together, including the number itself
            i. If half of this sum is equal to the original number then it's perfect
        5. Tell user if the number is perfect.
*/

(function () {
    "use strict";

    /* Variables */
    var inputField = document.getElementById('userInput');
    var btnPerfect = document.getElementById('btnPerfect');
    var display = document.getElementById('resultDisplay');

    /* Functions */
    function getDivisors(num) {
        var divisors = [];

        for (var i = 0; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }

    function sum(arr) {
        var total = 0;
        arr.forEach(function(val){
            total += val;
        });
        return total;
    }

    function perfectClick() {
        var testNum = parseInt(inputField.value, 10);
        var divisors = getDivisors(testNum);
        var divSum = sum(divisors.slice(0,-1));
        var halfSum = sum(divisors.slice(0,-1));


        if (divSum === testNum || halfSum === testNum) {
            displayResult('It\'s perfect!');
        } else {
            displayResult('It\'s not perfect.');
        }
    }

    function displayResult(arr) {
        display.textContent = arr;
    }

    /* Events */
    btnPerfect.addEventListener('click', perfectClick);

}());











