var fs = require('fs'); // reading file module
var http = require('http')

/* read file
http.createServer(function (req, res) {
    fs.readFile('myFile.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
*/

//fs.appendFile('myNewFile.txt', 'Hello NodeJs!', function (err, data) {
fs.open('myNewFile.txt', 'w', function (err, file) {
    if (err) throw err
    console.log('Saved!');
}); // add file
