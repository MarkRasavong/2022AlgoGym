//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
  if (words.length === 0) return ""

  const customSort = (a, b) => (Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0])));

  return words.split(' ').sort(customSort).join(' ');
}

//clever solution
function order1(words) {

  return words.split(' ').sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}    