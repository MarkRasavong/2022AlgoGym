//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

const betterThanAverage = (classPoints, yourPoints) => {
  classPoints = classPoints.reduce((a, c) => a + c) / classPoints.length
  return yourPoints < classPoints ? false : true
}
