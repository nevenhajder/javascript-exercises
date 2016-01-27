
/*  Assignment:
        Count the number of vowels in a string (don't count Y)
        The quick brown fox > 5 vowels
*/

/*  Steps:
        1. Get user input.
        2. Convert the phrase to lower case.
        3. Create an array of vowels.
        4. Search for each vowel in the phrase.
        5. Count every time you come accross a vowel.
        6. Display the result.
*/

(function () {
    "use strict";


    /* Variables */

    var userInput = document.getElementById("userInput");
    var btnVoweler = document.getElementById("btnVoweler");
    var resultDisplay = document.getElementById("resultDisplay");

    var vowels = ["a","e","i","o","u"];

    /* Functions */
    function countVowels(phrase) {
        var total = 0;

        vowels.forEach(function(a) {
            for (var i = 0; i < phrase.length; i++) {
                if (phrase.charAt(i) === a) {
                    total += 1;
                }
            }
        });

        return total;
    }


    function displayResult(arg) {
        resultDisplay.textContent = arg;
    }


    /* Events */
    btnVoweler.addEventListener("click", function() {
        var userString = userInput.value;
        var numVowels = countVowels(userString);
        displayResult("Your phrase has "+ numVowels +" vowels in it.");
    });

}());

















