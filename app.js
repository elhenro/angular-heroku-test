const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('./server/routes/api');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile('dist/index.html);
});

var port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);
//server.listen(port, () => console.log('Running'));
server.listen(port, function() {
  console.log("App running auf port " + port);
});
