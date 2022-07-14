//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

const number = (busStops) => busStops.map(([entr, out]) => entr - out).reduce((acc, curr) => acc + curr)


const numberClever = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);