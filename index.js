var express = require('express')
var app = express()
var http = require('http')
var server = http.Server(app)
var marked = require('marked')
var fs = require('fs')
var AIM = require('aimjs')

app.use(express.static(__dirname + '/public'))
app.use('/AIM', express.static(__dirname + '/node_modules/aimjs'))

//Convert README into html
var readMe = fs.readFileSync(__dirname + '/node_modules/aimjs/README.md', 'utf-8');
var markdownReadMe = marked(readMe);
fs.writeFileSync(__dirname + '/public/README.html', markdownReadMe);

app.get("*", function (req, res) {
	res.sendFile(__dirname + "/public/index.html")
})

server.listen(8000, function () {
    console.log("AIMjs started on port 8000")
})
