'use strict';
//Selecting Elements
const scoreEl = document.querySelector(".score");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const test = document.querySelector(".test--1");
const NameNormal = document.querySelector(".name");
const Name0 = document.getElementById("name--0");
const Name1 = document.getElementById("name--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
//the setting
let score,currentScore,activePlayer,playing ;
const init = function(){
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    Name0.textContent = "PLAYER 1";
    Name1.textContent = "PLAYER 2";
    NameNormal.style.fontSize = "4rem";
    test.style.fontSize = "4rem";

    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
};
init();
//Swiching Player
const swichPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0 ;
    activePlayer = activePlayer === 0 ?  1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}
//rolling the dice
btnRoll.addEventListener("click", function(){
    if (playing){
        const dice = Math.trunc(Math.random() *6 ) +1;
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove("hidden");
        if (dice!==1){
            currentScore += dice ;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        } else {
            swichPlayer();
        }
    }
});
//chick who are the winner
btnHold.addEventListener("click",function(){
    if(playing){
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if(score[activePlayer] >= 100){
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.getElementById(`name--${activePlayer}`).style.fontSize = "1.5rem";
            document.getElementById(`name--${activePlayer}`).textContent = "WINNER WINNER CHICKEN DINNER";
            playing = false;
            diceEl.classList.add("hidden");
        } else {
            swichPlayer();
        }
    }
});
//resit the game
btnNew.addEventListener("click",init);