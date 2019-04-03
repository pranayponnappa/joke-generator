var express = require('express');
var app = express();
var jokes = require('./jokes');

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

app.get('/', function (req, res) {
    var result=randomEl(jokes.jokes);
    var response = {};
    response[result[0]] = result[1];
    res.send(response);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});