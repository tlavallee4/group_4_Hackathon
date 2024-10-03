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

// Function to handle player's choice (more logic will be added in the next steps)
function playerChoice(choice) {
    console.log("Player chose: " + choice);
    // Further logic will be added here later for the game result
}

