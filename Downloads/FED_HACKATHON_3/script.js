// Game options
let gameOptions = ["Rock", "Paper", "Scissors"];

// Function to generate computer's choice
function computerChoice() {
    let randomIndex = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randomIndex];
}

// Function to handle user's choice and determine winner
function userChoice(userSelection) {
    // Update user choice display
    document.getElementById("user-choice").innerText = "You chose: " + userSelection;

    // Get computer's choice
    let computerSelection = computerChoice();
    document.getElementById("computer-choice").innerText = "Computer's choice: " + computerSelection;

    // Determine the result
    let result = determineWinner(userSelection, computerSelection);
    document.getElementById("result").innerText = "Result: " + result;
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Paper" && computerSelection === "Rock") ||
        (userSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Adding event listeners to buttons for user choices
document.getElementById("rock-btn").addEventListener("click", function() {
    userChoice("Rock");
});

document.getElementById("paper-btn").addEventListener("click", function() {
    userChoice("Paper");
});

document.getElementById("scissors-btn").addEventListener("click", function() {
    userChoice("Scissors");
});


