var express = require('express');
 
var app = express();//Respond with "hello world of cloud" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send(' zala re ');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
