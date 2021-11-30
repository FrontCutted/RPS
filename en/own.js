// In The Name Of God
// score
var computerScore = 0;
var userScore = 0;
var computerScoreElem = document.querySelector("#computer-score");
var userScoreElem = document.querySelector("#user-score");
// Choosing:
var choices = ["rock", "paper", "scissors"];
var resultElem = document.querySelector("#result");
var userChoiceElem = document.querySelector("#user-choice");
var computerChoiceElem = document.querySelector("#computer-choice");
// styling
var style = "px-2 py-1 m-1 font-bold ";
var style_win = style + "text-green-500";
var style_lose = style + "text-red-500";
var style_draw = style + "text-gray-200";
// conditions
var conditions = {
  "rock": {
    "rock": "draw",
    "paper": "lose",
    "scissors": "win"
  },
  "paper": {
    "rock": "win",
    "paper": "draw",
    "scissors": "lose"
  },
  "scissors": {
    "rock": "lose",
    "paper": "win",
    "scissors": "draw"
  }
};
// main func
function chose(input){
  var num = Math.floor(Math.random() * 3);
  let computerChoice = choices[num];
  userChoiceElem.innerHTML = input;
  computerChoiceElem.innerHTML = computerChoice;
  switch(conditions[input][computerChoice]){
    case "win":
      resultElem.setAttribute("class", style_win);
      resultElem.innerHTML = "You Won!";
      userScore++;
      break;
    case "lose":
      resultElem.setAttribute("class", style_lose);
      resultElem.innerHTML = "Computer Won!";
      computerScore++;
      break;
    default:
      resultElem.setAttribute("class", style_draw);
      resultElem.innerHTML = "Draw...";
  }
  computerScoreElem.innerHTML = computerScore;
  userScoreElem.innerHTML = userScore;  
}