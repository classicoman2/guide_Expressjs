var express = require('express')
var app = express()

var port = 3000

var myLogger = function(req, res, next) {
	console.log('LOGGED')
	//without next(), then app.get() wouldn't execute.
	next()
}

app.use('/user/:id', function (req, res, next) {
	console.log('ID:', req.params.id)
	next()
}, function (req, res, next) {
	res.send('User Info')
	next()
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
	res.end('id = ' + req.params.id)
})

console.log('http://localhost:'+port+'/user/125')

app.listen(port)

