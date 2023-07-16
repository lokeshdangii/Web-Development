let person = {
    fName : "Lokesh",
    lName : "Dangi",


    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){

        if (typeof value != String){
            throw new Error("You have not sent a String");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

try{
    person.fullName = true; 
}
catch(e){
    // alert("Not passed String")
    alert(e);
}


console.log(person.fullName);