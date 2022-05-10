//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript

//my solution
const duplicateCount = (text) => {
  const count = [...text.toLowerCase()].reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(count).filter(([, val]) => val > 1).map(([k]) => k).length
};


//clever solution
function duplicateCount1(text) {
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
};

const duplicateCount2 = (text) => (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;