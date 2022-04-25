const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
console.log(add10(5)); // 15

function partialApply(){}