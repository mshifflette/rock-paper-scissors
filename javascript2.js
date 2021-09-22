var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["R", "P", "S"];

function game() {
    //TODO: prompt user R,P,S, save that to a variable
    var userChoice = window.prompt("Rock, Paper or Scissors? Type R,P, or S.");
    if (
        userChoice !== "R"
        &&
        userChoice !== "P"
        &&
        userChoice !== "S"
    ) {
        alert("You MUST pick R, P, or S.");
        game()
    }
    //edge case: what if they use lowercase letters?
    userChoice = userChoice.toUpperCase();

    //TODO: generate computer choice
    //three outcomes, r,p,or s
    //randomly chose one 
    //save as a variable
    var randomIndex = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[randomIndex];

    alert("The computer choice is " + computerChoice)
    //TODO: compare choices
    //win
    //user rock, comp scissors || user paper comp rock || user scissors comp paper
    //loss
    // //comp rock, user scissors || comp paper user rock || comp scissors user paper
    //tie
    // //comp rock, user rock || comp paper user paper || comp scissors user scissors

    if (userChoice === computerChoice) {
        ties++;
        alert("Its a tie!");
    } else if ((userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")) {

        wins++;
        alert("You win!")
    } else {
        losses++;
        alert("You lose!")
    }
    alert("Wins:" + wins)

    var rematch = confirm("would you like a rematch?")
    if (rematch === true) {
        game()
    }
}

game();