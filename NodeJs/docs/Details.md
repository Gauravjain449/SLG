1. Node.js is a cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser.

2. It uses an asynchronous, event-driven model.

3. It almost never blocks

4. Node.js work

a. (Ref)  Node.js_Architecture_Workflow.png

b. Clients send requests to the webserver to interact with the web application. Requests can be non-blocking or blocking:

c. Node.js retrieves the incoming requests and adds those to the Event Queue

d. The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough to not require any external resources

e. The Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients

f. A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing external resources, such as computation, database, file system, etc.

g. Once the task is carried out completely, the response is sent to the Event Loop that in turn sends that response back to the client.

5. Node.js Pros
a. Fast processing and an event-based model
b. Uses JavaScript, which is well-known amongst developers
c. Best suited for streaming huge amounts of data and I/O intensive operations

6. Node.js Cons
a. Not suitable for heavy computational tasks
b. Dealing with relational databases is not a good option for Node.js
c. Since Node.js is single-threaded, CPU intensive tasks is not its strong suit

7. Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

8. A Node.js app is run in a single process, without creating a new thread for every request.

9. Express: It provides one of the most simple yet powerful ways to create a web server. Its minimalist approach, unopinionated, focused on the core features of a server, is key to its success.

10. JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

11. The process core module provides a handy method that allows you to programmatically exit from a Node.js program: process.exit().

12. Note: REPL also known as Read Evaluate Print Loop is a programming language environment(Basically a console window) that takes single expression as user input and returns the result back to the console after execution.

13. > console.log('test')
test
undefined
>

The first value, test, is the output we told the console to print, then we get undefined which is the return value of running console.log().

14. What's the difference between module.exports and exports?
a. The first exposes the object it points to. The latter exposes the properties of the object it points to.

e.g. 
module.exports = car

exports.car = car

15. The package-lock.json file needs to be committed to your Git repository, so it can be fetched by other people, if the project is public or you have collaborators, or if you use Git as a source for deployments.

16. You need to set the --production flag (npm install --production) to avoid installing those development dependencies.

17. 
