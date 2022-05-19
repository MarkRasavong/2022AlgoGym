//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

const rot13 = (message) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
}