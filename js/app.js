
/*  Assignment:
        Write a JavaScript function to  get the number of occurrences of each letter in specified string.
        eg. neven -> n = 2, v = 1, e = 2
*/

(function () {
    "use strict";

    /* Variables */
    var userInput = document.getElementById('userInput');
    var btnCount = document.getElementById('btnCount');
    var display = document.getElementById('display');

    /* Functions */
    function countChars(str) {
        var regex;
        var count;
        var results = [];

        while (str.length > 0) {
            /* Create a new RegExp with the first letter in str */
            regex = new RegExp(str.charAt(0), 'g');

            /* Search the string using regex */
            count = str.match(regex).length;

            /* Push the character and its count to the results array */
            results.push('\n'+str.charAt(0)+' = '+count);

            /* Remove the counted character in the string */
            str = str.replace(regex, '');
        }

        return results;
    }

    function displayResults(arg) {
        display.innerText = arg;
    }

    /* Events */
    btnCount.addEventListener('click', () => {
        var userString = userInput.value;
        displayResults(countChars(userString));
    });




    countChars('thtequickbrownfxjmpsvlazydg');

}());











