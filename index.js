var path = require('path');

module.exports = function(port) {
  var express = require('express');
  var app = express();
  app.use('/node_modules', express.static(path.join(__dirname, '../')));
  app.use(express.static(__dirname + '/public'));

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

  app.listen(port);
}
