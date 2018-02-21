var scores, roundScores, activePlayer, gamePlaying, winningScore;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
    
    // Exit if the game is not playing
    if (!gamePlaying) return;
    
    // Get random number between 1 and 6 (inclusive)
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // Get the dice dom object
    var diceDom = document.querySelector(".dice");
    var diceDom2 = document.querySelector(".dice2");

    // Display the dice and the correct dice image
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
    diceDom2.style.display = "block";
    diceDom2.src = "dice-" + dice2 + ".png";

    if(dice === 6 && dice2 === 6) {
        // Remove all the player's score
        scores[activePlayer] = 0;
        document.getElementById("score-" + activePlayer).textContent = '0';
        nextPlayer();
    } else if (dice > 1 && dice2 > 1) {
        // Increment round score and display it
        roundScore += dice + dice2
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        // Pass the turn
        nextPlayer();
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    // Exit if game is not playing
    if (!gamePlaying) return;
    
    // Increment players score by round score
    scores[activePlayer] += roundScore;

    // Display new score
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    // Check if the player won
    if (scores[activePlayer] >= winningScore) {
        // Display winner and appropriate styling
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        hideDice();
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    
        gamePlaying = false;
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

    hideDice();
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    // This initializes the game state

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    hideDice();

    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

    winningScore = Number(document.querySelector(".inp").value);
    console.log(winningScore);

    gamePlaying = true;
}

function hideDice() {
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
}