// https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript

const maskify = cc => {
  const ccLength = cc.length - 4;

  return ccLength <= 0 ? cc : cc.replace(cc.slice(0, ccLength), '#'.repeat(ccLength))
};

// clever

function maskify1(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}