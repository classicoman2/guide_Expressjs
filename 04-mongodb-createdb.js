var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/mybasedades', function (err, db) {
	if (err) throw err
	console.log("Database created!");
	db.close();
})

