var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

/*
find only one row

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

   // dbo.collection("customers").findOne({}, function(err, result) { // result is first row
    dbo.collection("customers").findOne({ name: "Amy"}, function(err, result) { // result is first row
        if (err) throw err;
       // console.log(result.name); // show the result.name (name of result)
        console.log(result); // show all results (id, name, address)
        db.close();
    })
});


// find everything
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("customers").find({}).toArray (function(err, result) { 
        if (err) throw err;
        console.log(result); // show all results (id, name, address)
        db.close();
    })
});
*/

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("customers").find({name: 'Viewtech Ltd.'}).toArray(function(err, result) { // find, findOne is same 
        if (err) throw err;
        console.log(result[0].address); // show only address
        db.close();
    })
});