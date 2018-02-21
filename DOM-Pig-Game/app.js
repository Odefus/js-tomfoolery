/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

document.querySelector(".btn-roll").addEventListener("click", function() {
    // Get random number between 1 and 6 (inclusive)
    var dice = Math.floor(Math.random() * 6) + 1;

    // Get the dice dom object
    var diceDom = document.querySelector(".dice");

    // Display the dice and the correct dice image
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    // Check if the player rolled a 1
    if (dice > 1) {
        // Increment round score and display it
        roundScore += dice
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        // Pass the turn
        nextPlayer();
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    // Increment players score by round score
    scores[activePlayer] += roundScore;

    // Display new score
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    // Check if the player won
    if (scores[activePlayer] >= 100) {
        // Display winner and appropriate styling
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }
    else {
        // Pass the turn to the next player
        nextPlayer();
    }
});

function nextPlayer() {
    // Toggle active player and reset round score
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // Do the necessary UI things -->
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}