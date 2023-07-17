let elment = document.querySelector('#artic');
elment.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('Span pr click' + event.target.textContent);

        // now event will only occur for the span element
    }
    
}); 