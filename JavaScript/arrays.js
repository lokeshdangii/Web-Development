// Arrays of primitive values
let numbers = [1,3,5,6,];
console.log(numbers);


// INSERTION

// *End --> push()
numbers.push(9);
console.log(numbers);


// Beginning --> unshift()
numbers.unshift(0);
console.log(numbers);


// Mid --> splice()
numbers.splice(2,0,'a','b','c');  // 2 is index, 0 is delete count , 'a b c' are elements
console.log(numbers);


// SEARCHING  --> indexof(), includes()

console.log(numbers.indexOf(9));
console.log(numbers.includes(7));

console.log(numbers.indexOf(3,2)); //3 is element 2 is index of no. where to start 