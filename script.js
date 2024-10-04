// Function to handle the player's choice
function playerChoice(choice) {
    // Display the user's choice in the DOM
    document.getElementById('user-choice').textContent = `You chose: ${choice}`;

    // Generate the computer's choice
    const computerChoice = generateComputerChoice();
    
    // Display the computer's choice in the DOM
    document.getElementById('computer-choice-text').textContent = computerChoice;

    // Determine the winner and display the result
    const result = determineWinner(choice, computerChoice);
    document.getElementById('result').textContent = result;
}

// Function to generate the computer's choice
function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
    return choices[randomIndex];
}

// Function to determine the winner based on choices
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", function() {
    playerChoice("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playerChoice("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playerChoice("scissors");
});
