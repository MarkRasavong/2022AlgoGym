//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

const incrementString = (string) => {
  //regex (/d*$) => select a digit 0 or more at the end of the digit($)
  // replace any digit => does not tamper with words in this replace method
  string.replace(/\d*$/, match => {
    // if there is no digit / match at the end of the string => append 1 at the end of string 
    !match && '1'
    // convert stringy digit to an interger and increment by 1 then convert back as a string
    const numString = String(parseInt(match) + 1)
    //get the match.length and see the different with our parsed numString.length
    const diff = match.length - numString.length
    // if there is a difference in length
    return diff > 0
      //get the difference in string length to place the zeros in front of the our string
      ? '0'.repeat(diff) + numString
      // else return our entire string with our new increment.
      : numString
  })
}

//CLEVER SOLUTION
let incrementString1 = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)