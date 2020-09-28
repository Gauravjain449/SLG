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

7. 
