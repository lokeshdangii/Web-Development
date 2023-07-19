let meraPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("I am in Promise1")
    },5000)

    // resolve(23234);
    reject(new Error('Error aa gayi'));
    
});


meraPromise1.then((value)=> console.log(value));

meraPromise1.catch((error) => {console.log("Recieved an error")});

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(fun ction(){
//         console.log("I am in Promise1")
//     },5000)
// });


console.log("Pehlaa");  