        /*computer needs to make a choice-array*/

        /*user needs to make a choice-array*/

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedLetters = [/*?*/] /*array of user choices*/function display() {
    }
            /*
            var winsP = document.getElementById("wins");
            var losesP = document.getElementById("loses");
            var guessLeft = document.getElementById("guessLeft");
            var letterGuessed = document.getElementById("guessed");
            winsP.innerHTML = wins;
            losesP.innerHTML = loses;
            guessLeft.innerHTML = guessesLeft;
            letterGuessed.innerHTML = guessedLetters.join(','); 
 
            capture choices

                 function.(){
                     document.getElementById().innerhtml = "Enter your guess and then click the button"
             } 

                var arr = [];
                for(var i = 0; i < 10; i++)
                arr.push(prompt("Enter a number");


            read on the keyboard if the user is pressing something or not
            use -> alert("working!") <-  under the doc.onkey to test it out. 
    
            compare the choices made and determine a win or a loss*/

document.onkeyup = function(event) {
    var userguess = event.key;
    if (guess === letterToGuess) {
            win(/*add to win count*/);
        } else if (guessesLeft - 1 === 0) {
            lost (/*add to loss count*/);
        } else {
            fail(guess);
        }
        display();
    }
    console.log(userguess);
    
    resetGame();
    display();


            /*have computer choose letters from the above array*/

    var computerGuess = options[Math.floor(Math.random()*options.length)];

    console.log(computerGuess);

            /* when I tried to save this, the computer asked if i wanted to save this as code.workspace- any idea what that is?*/
