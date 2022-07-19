var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { address: 'Lowstreet 4'};
    var newAddress = { $set: {address: 'Lowstreet 4', name: 'Ali'}};
    dbo.collection("customers").updateOne(query, newAddress, function (err, result) {
        if (err) throw err;
        console.log('1 document updated'); 
        db.close();
    })
});
