
/*  Assignment:
        Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
        Web Development Tutorial > Development
*/

/*  Steps:
        1. Get user input.
        2. Break sentence into an array of words.
        3. Use the Array.sort() method to reorder the words based on length.
        4. Display the last word in the array as it will be the longest.
*/

(function () {
    "use strict";


    /* Variables */

    var userInput = document.getElementById("userInput");
    var btnLongest = document.getElementById("btnLongest");
    var resultDisplay = document.getElementById("resultDisplay");


    /* Functions */
    function btnLongestClick() {
        var phrase = userInput.value;
        var wordArray = phrase.split(' ');

        /* How .sort works:
            "If compareFunction(a, b) is less than 0,
            sort a to a lower index than b, i.e. a comes first."
        */
        wordArray = wordArray.sort(function(a,b) {

            if (a.length < b.length) { return -1; }

            if (a.length > b.length) { return 1; }

            return 0;
        });

        displayResult("This is the longest word in that phrase : "+wordArray[wordArray.length-1]);
        console.log(wordArray);
    }

    function displayResult(arg) {
        resultDisplay.textContent = arg;
    }


    /* Events */
    btnLongest.addEventListener("click", btnLongestClick);


}());

















