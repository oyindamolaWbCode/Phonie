//Get DOM
const typeIn = document.querySelector('.typeIn');
const button = document.getElementById('submit');

console.log(button)

//using Regex
//starting with a +
const validNumbrPattern = /^\+/
// // airtel code
// const airtelNumber = /^"0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901"/;

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

typeIn.addEventListener('keyUp', (event)=>{
    console.log(event.target.value);
})