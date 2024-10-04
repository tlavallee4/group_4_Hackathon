// Create game options
let gameOptions = ["Rock", "Paper", "Scissors"];

// Generate the computer's choice
function computerChoice() {
    // create generated numbers: 0, 1, 2
    let computerChoice = Math.floor(Math.random() * 3);
    // return computer's choice
    return gameOptions[computerChoice];
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

// Placeholder for user choice function
function userChoice() {
    // This can be linked to user input, if needed
}

// Function to display results (you can call this with user choice and computer choice)
function displayResults(userSelection) {
    // Get computer's choice
    let computerSelection = computerChoice();
    
    // Determine the result
    let result = determineWinner(userSelection, computerSelection);
    
    // Display results in the console or wherever needed
    console.log("User choice: " + userSelection);
    console.log("Computer choice: " + computerSelection);
    console.log("Result: " + result);
}
