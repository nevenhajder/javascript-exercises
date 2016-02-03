
/*  Assignment:
        Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
*/

/*  Steps:
        1. Sort array of numbers from least to greatest.
        2. Access array[1] for second lowest and array[array.length-2] for second highest.
        3. Return the two numbers.
*/

(function () {
    "use strict";

    /* Variables */
    var numArray = [5,4,2,3,1];

    /* Functions */
    function secondMost(arr) {
        /* Sort the array in numerical order */
        var sortedArr = arr.sort(function(a,b){
            if (a<b) {return -1;}
            if (a>b) {return 1;}
            return 0;
        });

        console.log('2nd lowest : '+sortedArr[1]);
        console.log('2nd highest : '+sortedArr[sortedArr.length-2]);
    }

    secondMost(numArray);

}());












