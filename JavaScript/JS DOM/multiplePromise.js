let waadaa1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('setTimeOut1 Started')
    },2000);

    resolve(true);
});

let output = waadaa1.then(()=> {
    let waadaa2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('setTimeOut2   Started')
        },3000);
    
        resolve("Wadaa 2 resolved....!");
    })

    return waadaa2;
})

output.then((value) => console.log(value));