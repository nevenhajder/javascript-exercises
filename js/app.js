
/*  Assignment:
        Write a JavaScript function that returns array elements larger than a number.

*/

(function () {
    "use strict";

    var testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 50, 13, 18];
    var testNum = 15;
    var largerList = [];

    function largerThan(n, arr) {
        largerList = arr.filter((el) => {
            return el > n;
        });

        return largerList;
    }

    console.log(largerThan(testNum, testArray));

}());











