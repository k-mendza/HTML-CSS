var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i <squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
};

function generateRandomColors(num){
    var array = [];
    for (var i = 0; i < num; i++){
        array.push(randomColor());
    };
    return array;
};

function randomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")"; 
};

function changeColors(color){
    for (var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = color;
    };
};

function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}