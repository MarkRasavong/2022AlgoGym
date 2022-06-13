//https://www.codewars.com/kata/

//match only numbers from beginning to end
const validatePIN = pin => pin.match(/^(\d{4}|\d{6})$/g) ? true : false;


//CLEVER
function validatePIN1(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}