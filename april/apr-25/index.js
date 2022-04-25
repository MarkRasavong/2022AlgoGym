//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript
const descendingOrder = (n) => (
  parseInt(n.toString().split("").sort((a, b) => b - a).join(""))
);

// Another solution
function descendingOrder1(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}