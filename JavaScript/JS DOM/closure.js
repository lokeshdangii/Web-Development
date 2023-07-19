function outer(){
    let a = 5;

    function inner1(){
        let a = 3;
        console.log(a);
        return a;

        function inner2(){
            let a = 7;
        console.log(a);
        return a;

            function inner3(){
            
            console.log(a);
            return a;
            }
        }
    }
}

let b = inner2();
// console.log(b());
b();