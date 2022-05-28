//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

const accum = string => {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i].toUpperCase() + string[i].toLowerCase().repeat(i))
  }
  return arr.join('-');
};

//clever!

const accum1 = string => {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i].toUpperCase() + string[i].toLowerCase().repeat(i))
  }
  return arr.join('-');
};