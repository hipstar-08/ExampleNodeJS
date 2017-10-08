var express =  require('express');
var app = express();
var PORT = process.env.PORT || 4000;

var middleware = require('./middleware.js');
// app.get('/', function (req, res) {
//   res.send('Hello Express');
// });
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About us page!!!!!!!!!!!');
});


app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.listen(PORT, function () {
  console.log('Express Server started at port no :' +PORT);
});
