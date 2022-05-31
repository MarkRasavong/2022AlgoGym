//https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isIsogram = str => (
  new Set(str.toLowerCase()).size === str.length
)