var counter = -10;

while(counter < 20){
    console.log(counter);
    counter++;
}

counter = 10;
while(counter <= 40){
    console.log(counter);
    counter+=2;
}

while(counter <= 40){
    if(counter % 2 === 0){
        console.log(counter);
    }
    counter+=1;
}

counter = 5;
while(counter <= 333){
    if(counter % 5 === 0 && counter % 3 === 0){
        console.log(counter)
    }
    counter += 1;
}


for(var i = 1; i < 20; i++){
    console.log(i);
}

for(var i = -10; i < 19; i++){
    console.log(i);
}

for(var i = 10; i <= 40; i+=2){
    console.log(i);
}