console.log("JavaScript");

// object Creation

// let rectangle = {

//     // properties
//     length : 1,    
//     breadth : 2,


//     // method() behaviour
//     // draw: function(){
//     //     console.log('drawing rectangle');
//     // }

//     draw(){
//         console.log('drawing rectangle');
//     }
// };

// console.log(rectangle);
// console.log(rectangle.length);
// console.log(rectangle.breadth);


function createRectangle() {

    return rectangle = {

        length : 1,    
        breadth : 2,
    
        draw: function(){
            console.log('drawing rectangle');
        }
}
};


let recobj1 = createRectangle();

console.log(recobj1)
console.log(recobj1.breadth)