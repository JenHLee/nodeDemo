var http = require('http') // module? simillar to library (js library, java's package etc.)
var todaysDate = require('./myDate');
var url = require ('url')

http.createServer(function (req, res) { // createServer is inside of require('http') module
    res.writeHead(200, { 'Content-Type': 'text/html' }); // res will be html
    //res.write("Today's date is " + todaysDate.myDateTime());
    //res.end('Hello Node.js'); // wrte a response to the client
    var d = url.parse(req.url, true).query;    
    var txt = d.year + " " + d.month;
    //res.write();
    res.end(txt);// ending the response
}).listen(8080);
