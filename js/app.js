
/*  Assignment:
        Write a JavaScript function which accepts an argument and returns the type.
*/

/*  Steps:
        1. Take input
        2. Use typeof()
        3. Return value
*/

(function () {
    "use strict";

    /* Functions */
    function whatType(arg) {
        return typeof(arg);
    }

    var hey = function(){};

    console.log(whatType(hey));

}());












