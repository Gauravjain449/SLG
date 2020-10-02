# https://nodejs.dev/learn/the-nodejs-event-loop

1. The Node.js JavaScript code runs on a single thread. There is just one thing happening at a time.

** Single thread means: Just one thing happening at a time. 

2. Single thread : This is a limitation that's actually very helpful, as it simplifies a lot how you program without worrying about concurrency issues.

3. In general, in most browsers there is an event loop for every browser tab.

4. The environment manages multiple concurrent event loops, to handle API calls for example. Web Workers run in their own event loop as well.

5. 