# https://nodejs.dev/learn/discover-javascript-timers
1. [Zero delay] : If you specify the timeout delay to 0, the callback function will be executed as soon as possible, but after the current function execution

2. This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing a heavy calculation, by queuing functions in the scheduler.

3. Node.js also provides setImmediate(), which is equivalent to using setTimeout(() => {}, 0),

4. 