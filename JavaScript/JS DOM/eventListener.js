// EventListener

// document.addEventListener('click', function() {
//     console.log('I have clicked on the document');
//   });

// document.removeEventListener('click', function() {
//     console.log('I have clicked on the document');
//   });




function eventFun(){
    console.log('I have clicked on the document');
}
  

document.addEventListener('click',eventFun);

// removeEventListener

document.removeEventListener('click',eventFun);



// Functions must be same to remove a event