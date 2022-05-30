//https://www.codewars.com/kata/56747fd5cb988479af000028/javascript
const getMiddle = (s) => (
  s.length % 2 === 0
    ? s.charAt(Math.round(s.length / 2) - 1) + s.charAt(Math.round(s.length / 2))
    : s.charAt(Math.round(s.length / 2) - 1)
);

// clever solution
function getMiddle2(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
