//https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

const partlist = (arr) => arr.map((w, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)