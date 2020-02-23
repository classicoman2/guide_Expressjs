var express = require('express')
var app = express()

var port = 3000

var myLogger = function(req, res, next) {
	console.log('LOGGED')
	//without next(), then app.get() wouldn't execute.
	next()
}

//To load the middleware function, call app.use(), specifying the middleware function.
//For example, the following code loads the myLogger middleware function before the route to the root path (/).
app.use(myLogger)

//Every time the app receives a request, it prints the message “LOGGED” to the terminal.

//The order of middleware loading is important: middleware functions that are loaded first are also executed first.

//If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

//The middleware function myLogger simply prints a message, then passes on the request to the next middleware function in the stack by calling the next() function.
app.get('/', function(req, res) {
	res.send('Hello World!')
})

console.log('http://localhost:'+port)

app.listen(port)

