// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript

function rot13(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN";

  return str.replace(/[A-Za-z]/g, match => alpha[alpha.indexOf(match) + 13])
}