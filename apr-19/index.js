/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. 
*/

function getCount(str) {
  var vowels = ["a", "i", "e", "o", "u"]
  return str.toLowerCase().split("").filter(ltr => vowels.includes(ltr)).length;
};

function getCount2(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}