const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

const server = app.listen(4000, function () {
  let port = server.address().port;

  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;