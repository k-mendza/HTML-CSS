var secretNumber =4;
var guess = Number(prompt("Guess a number"));

if(guess === secretNumber) {
	alert("You guessed it!");
}
else if(guess > secretNumber){
	alert("Too high");
}
else {
	alert("Too low");
}