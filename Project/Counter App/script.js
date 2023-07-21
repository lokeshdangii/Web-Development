 const countValue = document.querySelector('#counter');
// countValue is a Element  (div)


 function increment(){
    
    // get value from UI
    let value = parseInt(countValue.innerText); // value --> taking value from element(div)--> countValue
    
    // update value
    value = value+1;

    // Set the value on to UI
    countValue.innerText = value;
 }


 const decrement =() => {
     // get value from UI
    let value = parseInt(countValue.innerText);

    // update value
    value = value-1;

    // Set the value on to UI
    countValue.innerText = value;
 }