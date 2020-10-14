# https://nodejs.dev/learn/the-nodejs-event-loop

1. The Node.js JavaScript code runs on a single thread. There is just one thing happening at a time.

** Single thread means: Just one thing happening at a time. 

2. Single thread : This is a limitation that's actually very helpful, as it simplifies a lot how you program without worrying about concurrency issues.

3. In general, in most browsers there is an event loop for every browser tab, to make every process isolated

4. The environment manages multiple concurrent event loops, to handle API calls for example. Web Workers run in their own event loop as well.

5. [Call stack] : The call stack is a LIFO queue (Last In, First Out). 
a. The event loop continuously checks the call stack to see if there's any function that needs to run.

6. [Message Queue] : The callback function is put in the Message Queue.

7. [Event loop] : The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.

8. [IMP] : We don't have to wait for functions like setTimeout, fetch or other things to do their own work, because they are provided by the browser, and they live on their own threads.

9. [ES6 Job Queue]: ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.

a. Promises that resolve before the current function ends will be executed right after the current function.

[Example]: I find nice the analogy of a rollercoaster ride at an amusement park: the message queue puts you at the back of the queue, behind all the other people, where you will have to wait for your turn, while the job queue is the fastpass ticket that lets you take another ride right after you finished the previous one.

[Example] :
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()

10. [Should Check Output] : 
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()

const bar1 = () => console.log('bar1')

const baz1 = () => console.log('baz1')

const foo1 = () => {
  console.log('foo1')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz1, before bar1')
  ).then(resolve => console.log(resolve))
  baz1()
}

foo1()

11. [process-nexttick] : https://nodejs.dev/learn/understanding-process-nexttick

12. [Understanding setImmediate]: https://nodejs.dev/learn/understanding-setimmediate
a. Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.

13. [How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), and from process.nextTick()?]

a. A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.

14. A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

15. 