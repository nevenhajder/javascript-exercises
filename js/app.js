
/*  Assignment:
        Write a JavaScript function that generates a string id (specified length) of random characters.
        Sample: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

*/

(function () {
    "use strict";

    var btnID = document.getElementById('btnID');
    var display = document.getElementById('display');
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    function generateID(l) {
        var newID = '';
        for (var i = 0; i<l; i++) {
            newID += characters.charAt(Math.floor(Math.random()*characters.length));
        }
        return newID;
    }

    function displayResult(arg) {
        display.innerText = arg;
    }

    btnID.addEventListener('click', () => {
        displayResult(generateID(8));
    });

}());











