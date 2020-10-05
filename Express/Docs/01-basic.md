
1. Routing means how an application responds to a client request to a particular endpoint.

2. app.METHOD(PATH, HANDLER)

* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

[Serving static files in Express]
3. express.static built-in middleware function in Express.

 express.static(root, [options])

4. For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))

5. To use multiple static assets directories, call the express.static middleware function multiple times:

app.use(express.static('public'))
app.use(express.static('files'))

6. another way --> app.use('/static', express.static(path.join(__dirname, 'public')))

