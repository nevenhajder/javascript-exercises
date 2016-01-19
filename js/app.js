
/*  Assignment:
        Write a JavaScript function that converts the first letter of each word of the string in upper case.
        the quick brown fox -> The Quick Brown Fox
*/

/*  Steps:
        1. Get user input.
        2. Break sentence into an array of words.
        3. Convert the first letter of each word to uppercase.
        4. Join the array back into a single string.
        5. Display the new string to the user.

*/

(function () {
    "use strict";


    /* Variables */

    var userInput = document.getElementById("userInput");
    var btnCapitalize = document.getElementById("btnCapitalize");
    var resultDisplay = document.getElementById("resultDisplay");


    /* Functions */

    function capitalize(arg) {
        var words = arg.split(' ');

        words.forEach(function(entry, i){
            words[i] = entry[0].toUpperCase() + entry.slice(1);
        });

        return words.join(' ');
    }

    function display(arg) {
        resultDisplay.innerText = arg;
    }


    /* Events */
    btnCapitalize.addEventListener('click', function(){
        var phrase = userInput.value;

        display(capitalize(phrase));
    });


}());

















