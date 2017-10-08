var express =  require('express');
var app = express();
var PORT = 4000;

var middleware = {
  requireAuthentication: function (req, res,next) {
      console.log('Private route hit');
      next();
  },
  logger: function (req, res, next) {
    var date = new Date().toString();
    console.log('Request ' + date + ' '+ req.method + '  ' + req.originalUrl);
    next();
  }
};
// app.get('/', function (req, res) {
//   res.send('Hello Express');
// });
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About us page');
});


app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.listen(PORT, function () {
  console.log('Express Server started at port no :' +PORT);
});
