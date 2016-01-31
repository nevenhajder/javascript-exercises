
/*  Assignment:
        Write a JavaScript function which accepts N, and returns an identity matrix with dimensions NxN.
        For example,
        idMatrix(3);
            100
            010
            001
*/

/*  Steps:
        1. Get number from user.
        2. Use 2 for loops to traverse the matrix.
        3. When both loop counters are equal assign a 1 in that spot, otherwise assign a 0.
        4. ...
*/

(function () {
    "use strict";

    /* Variables */


    /* Functions */

    /* Create an identity matrix of specified size */
    function idMatrix(size) {
        var matrix = [];

        for (var row=0; row < size; row++) {
            for (var col=0; col < size; col++) {
                if (row === col) {
                    matrix.push(1);
                } else {
                    matrix.push(0);
                }
            }
        }

        return matrix;
    }

    /* Display the matrix in 2 dimensions */
    function displayMatrix(matrix, arg) {
        var line;

        for (var i=0; i<arg; i++) {
            line = matrix.slice(0,arg);
            matrix.splice(0,arg);
            console.log(line);
        }
    }


    displayMatrix(idMatrix(10),10);
}());












