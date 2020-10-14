setImmediate(() => {
  console.log('setImmediate');
});

// ---
setTimeout(() => {
  console.log('setTimeout');
}, 10);
// ---

console.log('1');

// ---

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// ---

// ---
setTimeout(() => {
  console.log('setTimeout0');
}, 0);

setImmediate(() => {
  console.log('setImmediateEnd');
});



