/*GAME FUNCTIONS
- player must guess a number between
  min-max
- player gets certain amount of guesses
- Notify player of guesses remaining
- Notify player of answer if loose
- Let player choose to play again
*/

//Game values
let min = 1,
  max = 10,
  winningNum = 2,
guessesLeft = 3;

//UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guesses
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);


    
    //validate
    if (isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter a number ${min} and ${max}`, 'red');
    }

    //check IF WON
   if(guess ===winningNum){
    //Disable input
    guessInput.disabled=true;

    //change border color
    guessInput.style.borderColor = 'green';

    //set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green')

   } else {

   }

});
    function setMessage(msg, color) {
        message.style.color = color;
        message.textContent = msg;
        
    }