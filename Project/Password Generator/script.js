const inputSlider = document.querySelector("[data-lengthSlider]");
  // fetching custom attribute --> data-lengthSlider --> Sq bracket must

const lengthDisplay = document.querySelector("[data-lenghtNumber]");
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
let checkcCoutn = 1;
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

    }
    
}