//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript

const rps = (p1, p2) => {
  if (p1 === p2) return `Draw!`
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
}