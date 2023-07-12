let rectangle = {
    length : 4,
    breadth : 3
};

// for in loop
// for(let key in rectangle){
//     console.log(key, "is", rectangle[key])
// }


// for of loop
for (let key of Object.keys(rectangle)){  // for keys
    console.log(key);
}


for (let key of Object.entries(rectangle)){  // for printing key- value pair
    console.log(key);
}