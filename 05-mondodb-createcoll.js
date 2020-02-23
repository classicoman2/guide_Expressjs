var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/mybasedades', function (err, db) {
	if (err) throw err
	console.log("connected to the database");
	var dbo = db.db("mydb");

	dbo.createCollection("clients", function(err, res) {
		if (err) throw err;
		console.log("Collection <clients> created!");
		db.close();
	});
})
