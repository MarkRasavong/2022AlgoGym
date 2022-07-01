//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/solutions/javascript

const warnTheSheep = (queue) => queue[queue.length - 1] === "sheep"
  ? `Oi! Sheep number ${queue.length - queue.lastIndexOf('wolf') - 1}! You are about to be eaten by a wolf!`
  : 'Pls go away and stop eating my sheep';

//CLEVER

function warnTheSheep1(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}