let myDiv = document.createElement('div');

function parafun(event){
    // console.log('I have Clicked on Para');
    console.log(' ' +event.target.textContent);
};

myDiv.addEventListener('click', parafun)

for(let i=0; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;


    newElement.addEventListener('click', parafun);

    myDiv.appendChild(newElement);
};

document.body.appendChild(myDiv);



// the target property returns the elment where the event occured


