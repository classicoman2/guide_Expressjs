var express = require('express')
//Create the express app
var app = express()
var port = 3000

app.get('/', function(req, res) {
	res.send('Hello World!')
})

app.listen(port)
