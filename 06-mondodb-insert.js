var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/mybasedades', function (err, db) {
	if (err) throw err
	console.log("connected to the database");

	var dbo = db.db("mydb");

	var myobj = { name: "Peter Sellers", address: "c/The Pink Panther, 15" };
	dbo.collection("customers").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
	});

})

