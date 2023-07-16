// let --> Only inside the block Local
// var --> if defined inside the function the scope is only in the function else in the complete file

for(var v=0;v<=10;v++){

}
console.log(v);



if(true){
    var a = 10;
}
console.log(a);


function a(){
    const ans = 5;
}
// console.log(ans);  //ans is not defined
function b(){
    const ans = 8;
}

// console.log(ans);