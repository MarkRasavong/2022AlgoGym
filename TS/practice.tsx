const multiple = (n1: unknown, n2: unknown) => {
  if( typeof n1 === 'number' && typeof n2 === 'number') return n1 * n2;
  return
};

const incrementString = (string: string): string =>{
  return string.replace(/[a-b]/g, match => {
    if(!match) return '1';

    const parsedNum = String(parseInt(match) + 1);
    const diff = match.length - parsedNum.length;

    return diff > 0 ? '0'.repeat(diff) + parsedNum : parsedNum
  })
} 