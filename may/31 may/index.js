//https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isIsogram = str => {
  const lCaseStr = str.toLowerCase();
  if (str === '') return true;

  for (let i = 0; i < str.length; i++) {
    let char = lCaseStr[i];

    if (lCaseStr.indexOf(char) === i && lCaseStr.indexOf(char, i + 1) === -1) {
      return true;
    } else {
      return false;
    }
  }
};