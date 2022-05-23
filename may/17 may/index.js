//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// if any of these values take in a callback pass the value to that callback to plus,minus,time or divideby(a) else just return the value

//my solution
const zero = (cb) => typeof cb === 'function' ? cb(0) : 0
const one = (cb) => typeof cb === 'function' ? cb(1) : 1
const two = (cb) => typeof cb === 'function' ? cb(2) : 2
const three = (cb) => typeof cb === 'function' ? cb(3) : 3
const four = (cb) => typeof cb === 'function' ? cb(4) : 4
const five = (cb) => typeof cb === 'function' ? cb(5) : 5
const six = (cb) => typeof cb === 'function' ? cb(6) : 6
const seven = (cb) => typeof cb === 'function' ? cb(7) : 7
const eight = (cb) => typeof cb === 'function' ? cb(8) : 8
const nine = (cb) => typeof cb === 'function' ? cb(9) : 9

// a refers to the value inside 
// b is the function before the opereator
function plus(a) {
  return function (b) {
    return a + b;
  }
}
const minus = (a) => (b) => parseInt(b - a)
const times = (a) => (b) => parseInt(a * b)
const dividedBy = (a) => (b) => parseInt(b / a)


//clever solutions
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/solutions/javascript
