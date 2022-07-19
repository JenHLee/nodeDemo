var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
/*
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
   var query = {address: 'Apple st 652'};
    dbo.collection("customers").deleteOne(query, function (err, ojb) {
        if (err) throw err;
        console.log('1 document deleted');
        db.close();
    })
});
*/


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
   var query = {name: /^B/};
    dbo.collection("customers").deleteMany(query, function (err, obj) {
        if (err) throw err;
        console.log(obj.deletedCount + 'documents deleted'); // how many obj is deleted
        db.close();
    })
});
