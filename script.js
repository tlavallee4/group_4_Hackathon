// Create game options
let gameOptions = ["Rock", "Paper", "Scissors"]

// Generate the computers choice
function computerChoice() {
    // create generated numbers: 0, 1, 2
    let computerChoice = Math.floor(Math.random() * 3);
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

}

buttonOptions();