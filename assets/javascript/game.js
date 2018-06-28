        /*computer needs to make a choice-array*/

        /*user needs to make a choice-array*/

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedLetters;

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    //console.log(userGuess);

    var span = document.createElement("span");
    var t = document.createTextNode(userGuess);
    span.appendChild(t);
    document.getElementById("guesses").appendChild(span);

    function fail(){};
    function win(){};
function startGame(){
        if (userGuess === computerGuess) {
            wins++;
            //alert ("you have won " + wins + " times")
            document.getElementById("wins").innerText = wins;
            // debugger;
        } else  {
            losses++;
            //alert ("you have lost " + losses + " times")
            document.getElementById("losses").innerText = losses;
        } 
    }
    if (losses < 9) {
    startGame();       
    }
    else {
        alert("you lost. try again, loser.");
    }
    
        display();
    }
    
    function resetGame(){};
    function display(){};


            /*have computer choose letters from the above array*/

    

            /* when I tried to save this, the computer asked if i wanted to save this as code.workspace- any idea what that is?*/
