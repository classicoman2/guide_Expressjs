/**
*  https://expressjs.com/en/guide/database-integration.html
*/

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/mybasedades', function (err, db) {
	if (err) throw err

	var dbo = db.db("mydb");
	dbo.collection('customers').find().toArray(function (err, result) {
		if (err) throw err
		console.log(result)
	})
})
