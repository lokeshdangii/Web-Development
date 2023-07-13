let numbers = [1,2,3,4,5];
let numbers2 = numbers;


// numbers = [] --> One way 

// numbers.length = 0;  --> Second way  Most used

// numbers.splice(0,numbers.length);
// Third Way 
//  second and third way is the best practice


// Another way

while(numbers.length > 0){
    numbers.pop();
}

console.log(numbers);
console.log(numbers2);