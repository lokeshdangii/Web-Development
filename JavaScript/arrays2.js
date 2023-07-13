let courses = [
    {no:1, naam:'Lokesh'},
    {no:2, naam:'Rahul'}
];

console.log(courses);

// let course = courses.find(function(course){
//     return course.naam === 'Lokesh';
//     //returns object which has name equal to 'Lokesh'
// })



// Shor notation --> Arrow Function
let course = courses.find(course => course.naam === 'Lokesh');


console.log(course);