var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
   // var query = {address: /^1/, name:/^C/} // 정규식 표현 (Regular Expression)
   // dbo.collection("customers").find(query).toArray(function (err, result) {
    var nameSort = {name: 1}//assending sort
    //var nameSort = {name: -1}//dessending sort
    dbo.collection("customers").find({}).sort(nameSort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })
});
