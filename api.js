var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('This is our private api... bug off.');
});

var articles = [
  {id: 1, title: 'A story that will warm your heart', content: 'there. done.', publishDate: new Date("Mon May 09 2016 23:40:30 GMT-0500 (CDT)")},
  {id: 2, title: 'My favorite story', content: 'there. done.', publishDate: new Date("Mon May 09 2016 23:41:47 GMT-0500 (CDT)")},
  {id: 3, title: 'Once uppon a time...', content: 'there. done.', publishDate: new Date("Mon May 09 2016 23:42:00 GMT-0500 (CDT)")},
];

router.get('/articles', (req, res) => {
  var response = {data: articles};
  res.send(JSON.stringify(response));
});

router.get('/article/:id', (req, res) => {
  var id = +req.params.id;
  console.log(id);
  var response = {data: articles[id-1]};
  res.send(JSON.stringify(response));
});

router.post('/article', (req, res) => {
  var article = {id: 100};
  articles[3] = article;
  var response = {data: article};
  res.send(JSON.stringify(response));
});

router.put('/article/:id', (req, res) => {
  var response = {};
  var options = req.body;
  console.log(options);

  if (options.action == 'save') {

  }

  if (options.action == 'publish') {
    if (options.publish == true) {
      console.log('publish it');
      response.publishDate = new Date();
    }

    else if (options.publish == false) {
      console.log('unpublish it');
    }
  }
  console.log(response);
  res.send(response);
  // if (options.title) {
  //   articles[3].title = options.title;
  // }
  //
  // if (options.content) {
  //   articles[3].content = options.content;
  // }

});

module.exports = router;
