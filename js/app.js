
/*  Assignment:
        Write a program that reverses a number.
*/

/*  Steps:
        1. Get the number from the user.
        2. Have to user press the button.
        3. Reverse the number.
        4. Display the number.
*/

(function () {
    "use strict";

    /* Variables */
    var userInput = document.getElementById("userInput");
    var btnReverse = document.getElementById("btnReverse");
    var resultDisplay = document.getElementById("resultDisplay");

    /* Functions */
    function reverse(string) {
        var revString = '';
        var loopCount = string.length;

        for (var i = 0; i < loopCount; i++) {
            // Take the last character in string and add it to revString
            revString = revString + string.substr(-1);
            // Slice the last character from string
            string = string.slice(0, -1);
        }

        return revString;
    }

    function display(arg) {
        resultDisplay.textContent = arg;
    }


    /* Events */
    btnReverse.addEventListener('click', function () {
        
        var stringNum = userInput.value.toString();
        display(reverse(stringNum));
        
    });

}());

















