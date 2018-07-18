var toDoList = [];

var input = prompt("What would you like to do?");

while (input !== "quit"){
    if(input==="list"){
        console.log(todolist);
    } else if(input === "new") {
        var newToDo = prompt("Enter new todo");
        toDoList.push(newToDo);
    }
}
console.log("END OF PROCESS");
