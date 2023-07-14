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