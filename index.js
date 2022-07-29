//Get DOM
const typeIn = document.querySelector('.typeIn');
const button = document.getElementById('submit');
const feedBackMsg = document.querySelector('.feedBackMsg');
const logo = document.getElementById('theLogo');
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
//"0808", "", "", "", "", "", ""
// })

// airtel code
 //if the submit button is clicked the aitel-logo should pop up
 button.addEventListener('click', ()=>{
    const airtelNumber = /(0808|0812|0701|0708|0902|0907|0901)/;
    if(airtelNumber.test(typeIn.value)){
        classImage.style.display = "block";
        classImage.innerHTML=`<img src="./image/airtel.png" alt="L" id="theLogo">`
    }else{
        feedBackMsg.innerText = "Number Matches!"
        feedBackMsg.classList.add("valid");
        feedBackMsg.classList.remove("invalid");
    }
 })

// //mtn code
button.addEventListener('click', ()=>{
    const mtnNumber = /(0814|0806|0703|0706|0810|0813|0814|0816|0903|0906)/;
    if(mtnNumber.test(typeIn.value)){
        classImage.style.display = "block";
        classImage.innerHTML=`<img src="./image/mtn.jpg" id="theLogo">`
    }else{
        feedBackMsg.innerText = "Number Matches!"
        feedBackMsg.classList.add("valid");
        feedBackMsg.classList.remove("invalid");
    }
 })

// //9mobile code
button.addEventListener('click', ()=>{
     const etisalatNumber = /(0809|0817|0818|0908|0909)/;
     if(etisalatNumber.test(typeIn.value)){
        classImage.style.display = "block";
        classImage.innerHTML=`<img src="./image/mobile.png" id="theLogo">`
    }else{
        feedBackMsg.innerText = "Number Matches!!"
        feedBackMsg.classList.add("valid");
        feedBackMsg.classList.remove("invalid");
    }
})

// //glo code 
button.addEventListener('click', ()=>{
    const gloNumber = /(0805|0807|0811|0705|0815|0905|0915)/;
    if(gloNumber.test(typeIn.value)){
        classImage.style.display = "block";
        classImage.innerHTML=` <img src="./image/glo.jpg" id="theLogo">`
    }else{
        feedBackMsg.innerText = "Number Matches!"
        feedBackMsg.classList.add("valid");
        feedBackMsg.classList.remove("invalid");
    }
})

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

