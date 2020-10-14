# https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks

1. Asynchronous means that things can happen independently of the main program flow.

2. We can do this because JavaScript has first-class functions, which can be assigned to variables and passed around to other functions (called higher-order functions)

3. [Handling errors in callbacks] : Node.js adopted: the first parameter in any callback function is the error object: error-first callbacks

4. [Understanding JavaScript Promises] :
[How promises work, in brief] : 
a. Once a promise has been called, it will start in a pending state.
b. The created promise will eventually end in a resolved state, or in a rejected state, calling the respective callback functions (passed to then and catch) upon finishing.

5. [Chaining promises] : A promise can be returned to another promise, creating a chain of promises.
a. A great example of chaining promises is the Fetch API,

6. When anything in the chain of promises fails and raises an error or rejects the promise, the control goes to the nearest catch() statement down the chain.

7. If inside the catch() you raise an error, you can append a second catch() to handle it, and so on.

8. [Orchestrating promises] : [Promise.all()]
const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')
Promise.all([f1, f2]).then(([res1, res2]) => {
  console.log('Results', res1, res2)
})

9. [Promise.race()] : Promise.race() runs when the first of the promises you pass to it resolves, and it runs the attached callback just once, with the result of the first promise resolved.

Example: 
const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'second')
})

Promise.race([first, second]).then(result => {
  console.log(result) // second
})

10. 


