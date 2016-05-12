module.exports = function() {
  var express = require('express');
  var app = express();
  app.use('/node_modules', express.static(__dirname + '/node_modules'));
  app.use(express.static(__dirname + '/public'));

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

  app.listen(3000);
}
