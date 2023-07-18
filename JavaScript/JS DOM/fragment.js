// Document Fragment

const t1 = performance.now();
let fragment = document.createDocumentFragment();

for (let i=0;i<=100;i++){
    let element = document.createElement('p');
    element.textContent = "This is para " + i;


    fragment.appendChild(element);
}


document.body.appendChild(fragment);  // 1 Reflow, 1 Repaint

const t2 = performance.now();
console.log("it took" + (t2-t1) + 'ms time');
