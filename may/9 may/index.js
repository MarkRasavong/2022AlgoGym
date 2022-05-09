//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// my solution
const digital_root = (num) => {
    const numSum = [...String(num)]
        .map(num => Number(num))
        .reduce((acc, cur) => acc + cur).toString()

    return numSum.length === 1 ? Number(numSum) : digital_root(Number(numSum))
};

//other clever solutions
function digital_root1(n) {
    return (n - 1) % 9 + 1;
}

function digital_root2(n) {
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}