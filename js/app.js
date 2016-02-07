
/*  Assignment:
        Write a JavaScript function to extract unique characters from a string.
        Master string : 'thequickbrownfoxjumpsoverthelazydog'
*/

/*  Steps:
        1. Present a string to the user.
        2. Ask them to type the string of characters they want to extract.
        3. Extract characters from string
        4. Display result.
*/

(function () {
    "use strict";

    /* Variables */
    var display = document.getElementById('display');
    var userInput = document.getElementById('userInput');
    var btnExtract = document.getElementById('btnExtract');

    /* Functions */
    function extractClick() {
        var masterString = display.textContent;
        var userString = userInput.value;
        var stringPosition = masterString.indexOf(userString);

        return stringPosition === -1 ? 'nope' : masterString.substr(stringPosition, userString.length);
        // return masterString.contains(userString);
    }

    function updateDisplay(arg) {
        display.textContent = arg;
    }

    /* Events */
    btnExtract.addEventListener('click', () => {
        updateDisplay(extractClick());
    });


}());











