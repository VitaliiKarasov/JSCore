//--------------------------1--------------------
 let isValid = true;
 function validateValue(value) {

    if (isNaN(value)) {
        alert('Incorrect input')
        isValid = false;
    }

 }

 const firstValue = Number(prompt('Enter a value:'));
 validateValue(firstValue);

 let secondValue;

 if (isValid) {
   secondValue = Number(prompt('Enter b value:'));
    validateValue(secondValue)
 }

 if (isValid) {
    let result = firstValue.toString(secondValue)
    console.log(result);
 }

//------------------------2---------------------
let isValidValue = true;
function validateValue(value) {
  if (isNaN(value)) {
    alert("Incorrect input");
    isValidValue = false;
  }
}

const a = Number(prompt("Enter a value:"));
validateValue(a);
let b;

if (isValidValue) {
  b = Number(prompt("Enter b value:"));
  validateValue(b);
}

if (isValidValue) {
  let c = a + b;
  let d = a / b;
  console.log(`Answer is: ${c}, ${d}.`);
}
