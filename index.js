//Get DOM
const typeIn = document.querySelector('.typeIn');
const button = document.getElementById('submit');
const feedBackMsg = document.querySelector('.feedBackMsg')
const logo = document.getElementById('theLogo')
const classImage = document.querySelector('.images');

console.log(button)
//hide images 
classImage.style.display = "none";

//using Regex
//starting with a +
//must start with 234 (for nigeria code)
//the \d{3} the numbers of digit to be containerd

// typeIn.addEventListener('keyup', (e)=>{
//     const validNumbrPattern = /^\+234-\d{3}-\d{3}-\d{4}$/;
//     if(validNumbrPattern.test(e.target.value)){
//         feedBackMsg.innerText = "Number Matches!"
//         feedBackMsg.classList.add("valid");
//         feedBackMsg.classList.remove("invalid")
//     }else{
//         feedBackMsg.innerText = "Number does NOT match!"
//         feedBackMsg.classList.add("invalid");
//         feedBackMsg.classList.remove("valid")
//     } 
//"0808", "0812", "0701", "0708", "0902", "0907", "0901"
// })

// airtel code
 //if the submit button is clicked the aitel-logo should pop up
 button.addEventListener('click', (e)=>{
    const airtelNumber = /^\0808/;
    if(airtelNumber.test(e.target.value)){
        classImage.innerHTML =`<img src="./logo/aitel-log.png" id="theLogo">`
    }else{
        feedBackMsg.innerText = "Number does NOT match!"
        feedBackMsg.classList.add("invalid");
    }
 })

// //mtn code
// const mtnNumber = /^"0814", "0806", "0703", "0706", "0810", "0813", "0814", "0816", "0903", "0906"/;

// //9mobile code
// const etisalatNumber = /^"0809", "0817", "0818", "0908", "0909"/;

// //glo code 
// const gloNumber = /^"0805", "0807", "0811", "0705", "0815", "0905", "0915"/;

//return error when submit is clicked but no num is inputed

document.getElementById('submit').addEventListener('click', (e)=> throwAnError(e));

function throwAnError(e){
    e.preventDefault()

    let phoneNumr = document.querySelector('.typeIn').value
    if (!phoneNumr){
        alert('Please, input a number');
        return;
    }
}

