// What will be in the console?

console.log(1);

setTimeout(function () {
  console.log(2);
}, 1000);

setTimeout(function () {
  console.log(3);
}, 0);

requestAnimationFrame(() => console.log(6));

new Promise((resolve, reject) => resolve()).then(() => console.log(4));

console.log(5);
