// Create game options
let gameOptions = ["Rock", "Paper", "Scissors"];

// Generate the computer's choice
function computerChoice() {
    // Create generated numbers: 0, 1, 2
    let computerChoice = Math.floor(Math.random() * 3);
    // Return computer's choice
    return gameOptions[computerChoice];
}

// Function to handle user's choice and display results
function userChoice(userSelection) {
    // Display user's choice
    document.getElementById("user-choice").innerText = "You chose: " + userSelection;

    // Get computer's choice
    let computerSelection = computerChoice();
    document.getElementById("computer-choice").innerText = "Computer's choice: " + computerSelection;

    // Call displayResults with both selections
    displayResults(userSelection, computerSelection);
}

// Function to display results based on user and computer choices
function displayResults(userSelection, computerSelection) {
    let result;
    if (userSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Paper" && computerSelection === "Rock") ||
        (userSelection === "Scissors" && computerSelection === "Paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    // Display the result
    document.getElementById("result").innerText = "Result: " + result;
}

// Part 1: Handling button clicks
document.getElementById("rock").addEventListener("click", function() {
    userChoice("Rock");
});

document.getElementById("paper").addEventListener("click", function() {
    userChoice("Paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    userChoice("Scissors");
});
