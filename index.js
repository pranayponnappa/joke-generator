var express = require('express');
var app = express();


//Joke array
var jokes = [
    ['What did the spider do on the computer?','Made a website!'],
    ['What did the computer do at lunchtime?', 'Had a byte!'],
    ['What does a baby computer call his father?','Data!'],
    ['Why did the computer keep sneezing?','It had a virus!'],
    ['What is a computer virus?','A terminal illness!'],
    ['Why was the computer cold?','It left it\'s Windows open!'],
    ['Why was there a bug in the computer?','Because it was looking for a byte to eat?'],
    ['Why did the computer squeak?','Because someone stepped on it\'s mouse!'],
    ['What do you get when you cross a computer and a life guard?','A screensaver!'],
    ['Where do all the cool mice live?','In their mousepads'],
    ['What do you get when you cross a computer with an elephant?','Lots of memory!']
];

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

var result=randomEl(jokes);
var response = {};
response[result[0]] = result[1];

app.get('/', function (req, res) {
    res.send(response);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});