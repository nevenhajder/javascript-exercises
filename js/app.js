
/*  Assignment:
        Write a function that takes a word and arranges all its characters alphabetically.
        eg. webmaster -> abeemrstw
*/

/*  Steps:
        1. Get user input.
        2. Go through the string and compare each character to the rest.
        3. ...

*/

/*  The key to inserting characters at a specific point in a string
    var output = [userInput.slice(0, 2), '?', userInput.slice(2)].join('');
*/

/*  Potential Improvement:
        A much more elegant solution:
            userInput.split('').sort().join('');
        .split(''): converts the string to an array, separated by ''.
        .sort(): rearranges the array 'according to string Unicode code points'.
        .join(''): joins the array with '' as a separator.
*/

(function () {
    "use strict";


    /* Variables */

    var userInput = document.getElementById("userInput");
    var btnAlphabetize = document.getElementById("btnAlphabetize");
    var resultDisplay = document.getElementById("resultDisplay");


    /* Functions */

    function alphabetize (str) {
        var alphaStr = '';

        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j <= alphaStr.length; j++) {
                /*  If less than the character in alphaString,
                    insert it in the appropriate spot.
                */
                if (str.charAt(i) < alphaStr.charAt(j)) {
                    alphaStr = [alphaStr.slice(0, j), str.charAt(i), alphaStr.slice(j)].join('');
                    break;
                }
                /*  If greater than last character in alphaString,
                    add to the end of alphaString.
                */
                else if (str.charAt(i) > alphaStr.charAt(alphaStr.length - 1)) {
                    alphaStr = alphaStr + str.charAt(i);
                    break;
                }
            }
        }
        return alphaStr;
    }


    function display(arg) {
        resultDisplay.innerText = arg;
    }


    /* Events */

    btnAlphabetize.addEventListener('click', function() {
        var userString = userInput.value;
        display(alphabetize(userString));
    });

}());

















