let meraPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("I am in Promise1")
    },5000)
});


let meraPromise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("I am in Promise1")
    },5000)
});


console.log("Pehlaa");