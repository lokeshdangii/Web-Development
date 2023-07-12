// Constructor Function

function Rectangle(length,breadth){
    this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log("drawing");
    }
}


// Object creation using constructor function

let rectanleObject = new Rectangle(4,6);
// console.log(rectanleObject);

rectanleObject.color = "Yellow";
// console.log(rectanleObject);

delete rectanleObject.color;
// console.log(rectanleObject);

console.log(rectanleObject.constructor); 
console.log(Rectangle.constructor);


let Rectangle1 = new Function('length','breadth',`this.length = length;
this.breadth = breadth;
this.draw = function(){
    console.log("drawing");
}`);


let obj1 = new Rectangle1(5,7);
console.log(obj1);

