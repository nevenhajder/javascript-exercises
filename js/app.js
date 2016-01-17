
/*  Assignment:
        Write a JavaScript function to test if a string is a palindrome.
        eg. madam, nurses run, redivider, A nut for a jar of tuna

/*  Steps:
        1. Get user's input
        2. Strip spaces and convert to lower case
        3. Check if palindrome
            - get first letter
            - get last letter
            - slice them off the string
            - compare them
            - if same, repeat
            - else not a palindrome
        4. Display result
*/

/*  Potential Improvements:
        1. Improve simplify function to extract all punctuation.
        2. Add some CSS classes for the display, eg. red text for error message.
        3. Do this with a recursive function? 
*/

(function () {
    "use strict";

    /* Variables */
    var userInput = document.getElementById("userInput");
    var btnCheck = document.getElementById("btnCheck");
    var resultDisplay = document.getElementById("resultDisplay");

    /* Functions */
    function simplify (arg) {
        /* Remove white spaces with a regex */
        arg = arg.replace(/\s+/g, '');

        /* Convert all characters to lower case */
        arg = arg.toLowerCase();

        /* Return the simplified string */
        return arg;
    }

    function isPalindrome (pali) {
        var fLetter;
        var lLetter;
        /* Simplify user input */
        var simplePali = simplify(pali);
        var length = simplePali.length;
        
        /* Check for appropriate length */
        if (length < 2) { return "Error!"; }

        /* Check that it's a palindrome and return true or false */
        for (var i = length; i > 1; i -= 2) {

            fLetter = simplePali.substr(0,1);
            lLetter = simplePali.substr(-1, 1);

            /* Compare first and last letters */
            if (fLetter !== lLetter) {
                return false;
            } else if (fLetter === lLetter) {
                /* Slice the first and last letters off the string */
                simplePali = simplePali.slice(1, -1);
            }

            /* Check simplePali length for the end */
            if (simplePali.length <= 1) {
                return true;
            }
        }
    }

    function display (arg) {
        resultDisplay.textContent = arg;
    }

    /* Events */
    btnCheck.addEventListener('click', function(){
        /* Get user input */
        var phrase = userInput.value;

        /* Check if user input is a palindrome */
        if (isPalindrome(phrase) === "Error!") {
            display("Error!");
        } else if (!isPalindrome(phrase)) {
            display("This is NOT a palindrome.");
        } else {
            display("This IS a palindrome.");
        }
    });

}());

















