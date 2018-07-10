function myFunction(){
    console.log("This is myFunction START");
    console.log("This is myFunction END");
}

function square(num){
    console.log(num*num);
}

var number1 = 10;
var number2 = 32;
function sumOfTwo(num1, num2){
    console.log("First argument is: " + num1);
    console.log("Second argument is: " + num2);
    console.log("The sum of arguments is: " + (num1+num2));
    return num1+num2;
}

function isEven(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}