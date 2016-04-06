var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var usd = require('./modules/usd.js');
var random = require('./modules/random.js');
var balance = require('./modules/balance.js');
var application = require('./modules/app.js')


app.use(express.static('public'));
//type in localhost:3000/balance into your url
app.get('/balance',function(req,res){
  res.send('Here\'s some more money' + balance.words() +  ' '  + balance.numbers());
});


app.listen(3000, function(){
  console.log('Server is running');
});
