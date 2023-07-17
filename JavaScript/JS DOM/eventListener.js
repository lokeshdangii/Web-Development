// EventListener

// document.addEventListener('click', function() {
//     console.log('I have clicked on the document');
//   });

// document.removeEventListener('click', function() {
//     console.log('I have clicked on the document');
//   });




// function eventFun(){
//     console.log('I have clicked on the document');
// }
  

// document.addEventListener('click',eventFun);

// // removeEventListener

// document.removeEventListener('click',eventFun);

// Functions must be same to remove a event


// const ele = document.querySelectorAll('#para');
// // console.log(ele);

// ele.addEventListener('click', function(event){
//     console.log(event);
// });



// thirdlink.addEventListener('click', function(event){})
 

let links = document.querySelectorAll('a');
let thirdlink = links[2];


thirdlink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Maza Aaya');
})