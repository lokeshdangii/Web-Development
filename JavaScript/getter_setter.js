// getter --> Access Properties
// setter --> Set or mutate Properties

// getter setter is not a function but a property

let person = {
    fName : "Lokesh",
    lName : "Dangi",


    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// console.log(person);


// person.fullName(Lokesh, Rahul); // can't set value this way

person.fullName = "LOkesh Rahul";     // Right way
gett = person.fullName;

console.log(gett);
// console.log(sett);