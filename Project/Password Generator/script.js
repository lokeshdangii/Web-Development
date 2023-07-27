const inputSlider = document.querySelector("[data-lengthSlider]");
  // fetching custom attribute --> data-lengthSlider --> Sq bracket must
const lengthDisplay = document.querySelector("[data-lenghtNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copyBtn]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type = checkbox]");

const symbols = '~`!@#$%^&*()_-+={}[]|';


let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

//set strength circle color to grey

// Set password Length
function handleSlider(){
     inputSlider.value = passwordLength;
     lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow 
}
 
function getRandomInteger(min,max){
    Math.floor(Math.random()*(max-min)+min);
}

function generateRandomNumber(){
    return getRandomInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

 function generateSymbol(){
     const randomNum = generateRandomNumber(0,symbols.length);
     return symbols.charAt(randomNum);
 }


 function calcStrength(){
     let hasUpper = false;
     let hasLower = false;
     let hasNum = false;
     let hasSym = false;
     
     if (upppercaseCheck.checked) hasUpper = true;
     if (lowercaseCheck.checked) hasLower = true;
     if (numbersCheck.checked) hasNum = true;
     if (symbolsCheck.checked) hasSym = true;


     if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0"); // color
     } else if ( (hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >=6){
        setIndicator("ff0");
     } else {
        setIndicator("f00");
     }
 }

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    //to make copy span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    },2000);
}

function shufflePassword(array){
     // Fisher Yates Method
     for(let i= array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
     }

     let str = "";
     array.forEach((el) => (str += el));
     return str; 

}

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked){
            checkCount++;
        }
    })

    if(passwordLength <checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) =>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})


inputSlider.addEventListener('input',(e) => {
    passwordLength = e.target.value;
    handleSlider(); 
})


copyBtn.addEventListener('click', () => {
    if(passwordLength>0){
        copyContent()
    }    
})

generateBtn.addEventListener('click', () => {
     // none of the checkbox are selected
     if(checkCount == 0){
        return;
     }
        
     
     if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
     }

     // let's start the journey  to find new password


     // remove old password
     password = ""

     // let's put the stuff mentioned by checkboxes

    //  if(upppercaseCheck.checked){
    //     password += generateUpperCase();
    //  }

    //  if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    //  }

    //  if(numberscaseCheck.checked){
    //     password += generateRandomNumber();
    //  }

    //  if(symbolsCheck.checked){
    //     password += generateSymbol();
    //  }


    let funcArr = [];
    
    if(upppercaseCheck.checked)
        funcArr.push(generateUpperCase());

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase());
    
    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber());

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol());


    // compulsory addition

    for(let i=0;i<funcArr.length;i++){
        password += funcArr[i];
    }console.log("password in remaining additon loop : " + password);

    //remaining addition
    for(let i=0; i<passwordLength-funcArr.length; i++){
        let randIndex = getRandomInteger(0, funcArr.length);
        password += funcArr[randIndex]; 
    }

    console.log("password in remaining additon loop : " + password);

    // shuffle the password
    console.log("Password while shuffling... :- "+password)
    password = shufflePassword(Array.from(password));

    // show in UI --> in input 
    passwordDisplay.value = password;
    console.log(password);
    // calculate strength
    calcStrength();

})
  