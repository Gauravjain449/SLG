var express = require('express');

var app = express();

const PORT = process.env.PORT || 1000;

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})




app.listen(PORT, () => {
  console.log(`Application at listen ${PORT}`);
})