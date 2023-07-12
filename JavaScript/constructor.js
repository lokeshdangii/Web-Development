// Constructor Function

function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log("drawing");
    }
}


// Object creation using constructor function

let rectanleObject = new Rectangle(4,6);
console.log(rectanleObject);


