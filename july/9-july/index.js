//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/
const century = (year) => (year / 100) % 1 === 0 ? Math.round(year / 100) : Math.ceil(year / 100)

//CLEVER

const century1 = year => Math.ceil(year / 100)