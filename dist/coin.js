var ranNum = Math.floor(Math.random() * 2);
var arrCoin = ["Head", "Tail"];
localStorage.setItem("random", JSON.stringify(arrCoin[ranNum]));
let finalGuess = JSON.parse(localStorage.getItem("random"));
console.log(finalGuess);
//variables
let score1 = JSON.parse(localStorage.getItem("player"));
let score2 = JSON.parse(localStorage.getItem("computer"));
var buttons = document.getElementsByClassName("coins");
let start = document.getElementById("start");
let msg = document.getElementById("msg");
let player = document.getElementById("player");
var computer = document.getElementById("computer");
let results = document.getElementById("results");
let finish = document.getElementById("finish");
//click to guesss
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", guess);
  function guess(e) {
    let clicked = e.target.innerHTML;
    localStorage.setItem("clicked", JSON.stringify(clicked));
    if (clicked == finalGuess) {
      score1++;
      localStorage.setItem("player", score1);
    } else {
      score2++;
      localStorage.setItem("computer", score2);
    }
  }
}
if (JSON.parse(localStorage.getItem("player")) == null) {
  player.innerHTML = 0;
} else {
  player.innerHTML = JSON.parse(localStorage.getItem("player"));
}
if (JSON.parse(localStorage.getItem("computer")) == null) {
  computer.innerHTML = 0;
} else {
  computer.innerHTML = JSON.parse(localStorage.getItem("computer"));
}

//get results
results.addEventListener("click", () => {
  console.log("results button clicked");
  clicked = JSON.parse(localStorage.getItem("clicked"));
  if (clicked == finalGuess) {
    msg.innerHTML = `Correct guess.`;
    msg.style.color = "green";
  } else {
    msg.innerHTML = `Wrong guess.`;
    msg.style.color = "red";
  }
});
//play again function
start.addEventListener("click", () => {
  location.reload();
});
//clear the game
finish.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
