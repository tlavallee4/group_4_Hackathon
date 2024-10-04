// Create game options
<<<<<<< HEAD
let gameOptions = ["Rock", "Paper", "Scissors"];
 
=======
let gameOptions = ["Rock", "Paper", "Scissors"]

>>>>>>> 3de34637c427f607180761ad8691f99418b787df
// Generate the computers choice
function computerChoice() {
    // create generated numbers: 0, 1, 2
    let computerChoice = Math.floor(Math.random() * 3);
<<<<<<< HEAD
    // return computers choice
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
=======
    // return computers choice 
    return gameOptions[computerChoice]
}

function userChoice() {

}

function displayChosenResults() {
    // Update computer choice in html
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice()}!`;
}

function buttonOptions() {

// Part 1: Handling button clicks
document.getElementById("rock").addEventListener("click", function() {
    playerChoice("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playerChoice("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playerChoice("scissors");
});

} 

// Function to handle player's choice (more logic will be added in the next steps)
function playerChoice(choice) {
    console.log("Player chose: " + choice);
    // Further logic will be added here later for the game result
>>>>>>> 3de34637c427f607180761ad8691f99418b787df
}
