1. Explain callback in Node.js.

a. A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

2. Why is Node.js Single-threaded?

a. Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved as opposed to the typical thread-based implementation.

3. What is NPM?

a. NPM stands for Node Package Manager, which is responsible for managing all the packages and modules for Node.js.

4. What are the modules in Node.js?
a. Modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions. To include a module in a Node.js application, use the require() function with the parentheses containing the name of the module.

e.g. 

zlib -> Includes methods to compress or decompress files

5. Which database is more popularly used with Node.js?
a. MongoDB is the most common database used with Node.js. It is a NoSQL, cross-platform, document-oriented database that provides high performance, high availability, and easy scalability.

6. What are some of the most commonly used libraries in Node.js?
a. ExpressJS - Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications.
b. Mongoose - Mongoose is also a Node.js web application framework that makes it easy to connect an application to a database.

7. What does event-driven programming mean?
a. An event-driven programming approach uses events to trigger various functions. 
b. An event can be anything, such as typing a key or clicking a mouse button.
c. A call-back function already registered with the element executes whenever an event is triggered.

8. What is an Event Loop in Node.js?
a. Event loops handle asynchronous callbacks in Node.js.

9. What is an EventEmitter in Node.js?
a. EventEmitter is a class that holds all the objects that can emit events
b. Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously
c. Ref. eventemitter.jpg

10. What are the two types of API functions in Node.js?
a.  Asynchronous, non-blocking functions
b. Synchronous, blocking functions

11. What are streams in Node.js?
a. Streams are objects that enable you to read data or write data continuously.
b. There are four types of streams:
c. Readable – Used for reading operations
d. Writable − Used for write operations
e. Duplex − Can be used for both reading and write operations
f. Transform − A type of duplex stream where the output is computed based on input

12. What is the purpose of module.exports?
a. A module in Node.js is used to encapsulate all the related codes into a single unit of code, which can be interpreted by shifting all related functions into a single file.
b.  You can export a module using the module.exports, which allows it to be imported into another file using a required keyword

13. What is a callback function in Node.js?
a. A callback is a function called at the completion of a given task. 
b. This prevents any blocking and enables other code to run in the meantime.

14. What is REPL in Node.js?
a. REPL stands for Read Eval Print Loop
b. and it represents a computer environment. It’s similar to a Windows console or Unix/Linux shell in which a command is entered. Then, the system responds with an output
c. ref. repl2.jpg

15. What is the control flow function?
a. The control flow function is a piece of code that runs in between several asynchronous function calls.

16. How does control flow manage the function calls?
ref. function-calls.jpg

17. What is the buffer class in Node.js?
a. Buffer class stores raw data similar to an array of integers, but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data

18. What is piping in Node.js?
a. Piping is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve data from one stream, and pass output to another stream

19. What are some of the flags used in the read/write operations in files?
ref. flags.jpg

20. What is callback hell?
a. Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug
b. improper implementation of the asynchronous logic causes callback hell

21. What is a reactor pattern in Node.js?
a. A reactor pattern is a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation. As soon as an I/O request is generated, it is then submitted to a demultiplexer

---

22. The Event loop handles all async callbacks. Node.js (or JavaScript) is a single-threaded, event-driven language. This means that we can attach listeners to events, and when a said event fires, the listener executes the callback we provided.

Whenever we are call setTimeout, http.get and fs.readFile, Node.js runs this operations and further continue to run other code without waiting for the output. When the operation is finished, it receives the output and runs our callback function.

So all the callback functions are queued in an loop, and will run one-by-one when the response has been received.

23. What is the difference between Asynchronous and Non-blocking?
a. Asynchronous literally means not synchronous. We are making HTTP requests which are asynchronous, means we are not waiting for the server response. We continue with other block and respond to the server response when we received.

b. The term Non-Blocking is widely used with IO. For example non-blocking read/write calls return with whatever they can do and expect caller to execute the call again. Read will wait until it has some data and put calling thread to sleep.

24. What is Tracing in Node.js?
a. Tracing provides a mechanism to collect tracing information generated by V8, Node core and userspace code in a log file. Tracing can be enabled by passing the --trace-events-enabled flag when starting a Node.js application.

The set of categories for which traces are recorded can be specified using the --trace-event-categories flag followed by a list of comma separated category names. By default the node and v8 categories are enabled.
Running Node.js with tracing enabled will produce log files that can be opened in the chrome://tracing tab of Chrome.

# ref: 1_gaM6bjJjwacw6o861eTKBA.jpeg

25. How will you debug an application in Node.js?

a. Node.js includes a debugging utility called debugger. To enable it start the Node.js with the debug argument followed by the path to the script to debug.

b. Inserting the statement debugger; into the source code of a script will enable a breakpoint at that position in the code:

# Ref: 1_qy5HcWVLICvVaRLI_-pt9w.jpeg

26. What is process.nextTick()
a. https://medium.com/@vsvaibhav2016/process-nexttick-in-node-js-816796b82db6






