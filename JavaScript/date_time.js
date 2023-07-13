let date = new Date();
console.log(date);


let date2 = new Date('October 5 2001 11:30');
console.log(date2);

let date3 = new Date(2002,9,5,11);
console.log(date3);


// many setter getter are there to set values for month, date, day 

date3.setMonth(5);
date3.setFullYear(1947);
date3.setHours(10);
console.log(date3);