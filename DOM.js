var h1 = document.querySelector("h1");
h1.style.color = "pink";

var h1 = document.querySelector(".myClass");
h1.style.color = "pink";

var h1 = document.querySelector("#border");
h1.style.border = "1px solid black" ;

var img1 = document.querySelector("img");
img1.setAttribute("src","https://luxway.pl/wp-content/uploads/2017/11/Ducati_6.png?x85208")

var header = document.querySelector("h1");
header.addEventListener("click", function(){
    alert("Some1 has clicked on header!")
})
header.addEventListener("click", function(){
   header.style.backgroundColor = "blue";
})

var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;
button.addEventListener("click",function(){
    if(isPurple === false){
        body.style.backgroundColor = "purple";
        isPurple = true;
    }
})
