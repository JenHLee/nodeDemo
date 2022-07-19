var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb"

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    var myobj = {_id: 456, name: "Viewtech Ltd.", address: "16 Ave SE" }; //name, address = column name
    dbo.collection("customers").insertOne(myobj, function (err, res) { // insertOne = one document (row) insert
        if (err) throw err;
        console.log("1 document inserted");
        console.log(res);
        db.close();
    })
});
