var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").drop(function (err, obj) {
        if (err) throw err;
        if (obj)
        console.log('collection delted.'); 
        db.close();
    })
});
