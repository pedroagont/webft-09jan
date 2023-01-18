// SYNC
const mySyncVar = 123;
console.log('Sync running...');
console.log(1);

for (let i = 0; i < 100000; i++) {}
console.log('for loop finished!');

console.log(3);

// ASYNC
const myAsyncVar = 123;
console.log('Async running...');
console.log(1);

setTimeout(() => {
  for (let i = 0; i < 1000000; i++) {}
  console.log('for loop finished!');
}, 2000);

console.log(3);
