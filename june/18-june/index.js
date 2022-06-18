//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

const isPangram = str => {
  str = new Set(str.toLowerCase().match(/[a-z]/g)).size;

  return str === 26 ? true : false;
};

