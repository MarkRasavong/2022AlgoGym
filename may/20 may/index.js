//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
const generateHashtag = (str) => {
  const text = str.replace(/\s+/ig, '')
  if (!text || text.length >= 140) {
    return false
  }

  return `#${str.match(/\w+/ig).map(wrd => wrd.charAt(0).toUpperCase() + wrd.slice(1)).join('')}`;
}

//CLEVER
function generateHashtag1(str) {

  var hashtag = str.split(' ').reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}