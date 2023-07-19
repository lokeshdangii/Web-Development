async function utility(){

    let delhiMausam = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Delhi me bhot garmi hai");
        },4000);
    });


    let puneMausam = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Pune is Cool");
        },5000);
    });

    let dM =  delhiMausam;
    let pM = await puneMausam;  // next execution will wait till this one is completed


    return [dM, pM];
}