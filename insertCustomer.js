var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb"

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    var myobj = { name: "ConnectMe Ltd.", address: "17 Ave SE" }; //name, address = column name
    dbo.collection("customers").insertOne(myobj, function (err, res) { // insertOne = one document (row) insert
        if (err) throw err;
        console.log("many document inserted");
        db.close();
    })
});
