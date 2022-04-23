"use strict";
//6kyu https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
const arrayDiff = (a, b) => {

    if (a.length === 0) return a;
    if (b.length === 0) return a;

    return a.filter((num) => !b.includes(num));
};
