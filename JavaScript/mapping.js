// Mapping

let number = [1,2,3,4,5];

let mapped = number.map(value => "Student_no" + value);
// console.log(mapped);


// let number1 = [1,3,6,-2.-3];
// let filtered = number1.filter(value => value >= 0);

// let items = filtered.map(num => { value :num } );

// console.log(items);




// chaining

let number1 = [1,3,6,-2, 4,-3];

let items = number1.filter(value => value >= 0).map(num => { value : num } );

console.log(items);
