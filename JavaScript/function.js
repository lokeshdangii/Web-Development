// Function in JS

// Hoisting --> is the process of shifting fuction declarations to the top of the file, ans so we can call function above the declaration block;
// done automatically by JS engine

// Function declaration

printHello();
function printHello (){
    console.log("Helloo....")
}

// printHello();


// Named Function Assignment

// bhaag(); --> will not run give error --> only possible in declaration not in assignment. 

let bhaag = function run(){
    console.log("Running.....!")
}
bhaag();

// Anonymous function Assignment

let dod = function(){
    console.log("Running.....!")
}


let jump = bhaag;
jump();

dod();


function sum(a,b){
    console.log(arguments);
    return a+b;
}

console.log(sum(1,2));    
console.log(sum(1));  // O/P --> NaN
console.log(sum());   // O/P --> NaN
console.log(sum(1,2,3,4,5));  // o/p --> 1+2 = 3  extra arguments will store in  a argument object which can be seen by console.log(arguments);


sum(1,2,4,6,8,0,3); 


// Argumet is the special object in JS function

function add(){              // Declaring argument in function definition in not must
    total = 0
    for(let value of arguments){       // this way we can add/use multiple arguments
        total = total + value;
    }

    return total;
}


console.log(add(1,2,3,4,5,7));



function addition(...args){
    console.log(args);
}

addition(10,45,12,15,19,17);       // O/P --> Array of arguments


//  REST Operator 

function addition1(num1, num2 , ...args){    // first two arguments will assign to num1 and num2
    console.log(args);
}

addition1(2,4,6,7,9,1,23,44,55);




// Default parameter

function interest(p,r=3,t=4){   // default 
    return (p*r*t)/100;
}

console.log(interest(700,4,2)); 





