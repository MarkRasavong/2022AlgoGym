//https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

const toUnderscore = (str) => String(str).split(/(?=[A-Z])/g).join('_').toLowerCase();
