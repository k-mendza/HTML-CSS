var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var scoreLimit = 5;

p1Button.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === scoreLimit) {
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;
});
p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === scoreLimit) {
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});
resetButton.addEventListener("click",function(){
    var p1Score = 0;
    var p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
});