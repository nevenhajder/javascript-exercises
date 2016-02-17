
/*  Assignment:

- Write the `init` function to set up an event listener on the form. The event listener should pass the value of the input element to the `check` function.
- Write the `check` function to accept a value from the event listener and check it against the `targetNumber`.
  - If the values match, call the `showWin` function
  - If the values do not match, call the `showError` function.
  - If the values do not match, and the player has made more than five guesses, call the `showLoss` function.
- Write the `showWin` function to remove the form and any error message, and show a message telling the player they win.
- Write the `showError` function to show a message telling the player their guess is incorrect.
- Write the `showLoss` function to remove the form and show a message telling the player they lose.
*/

(function () {
    "use strict";

    var form = document.getElementsByTagName('form')[0];
    var targetNumber = Math.floor(Math.random() * 10) + 1;
    var guesses = 0;

    function init () {
        form.addEventListener('submit', function(e) {
            /* Prevent form submission */
            e.preventDefault();
            guesses++;
            var userNum = parseInt(document.getElementsByTagName('input')[0].value,10);
            check(userNum);
        });
    }

    function check (value) {
        console.log('Guess: '+value);
        console.log('Guesses: '+guesses);

        if (targetNumber !== value && guesses > 5) {
            showLoss();
        } else if (targetNumber === value) {
            showWin();
        } else {
            showError();
        }
    }

    function showWin () {
        /* Remove the form */
        form.parentNode.removeChild(form);
        alert('You win!');
    }

    function showError () {
        alert('You guessed wrong :(');
    }

    function showLoss () {
        /* Remove the form */
        form.parentNode.removeChild(form);
        alert('You lose ... ');
    }

    init();

})();











