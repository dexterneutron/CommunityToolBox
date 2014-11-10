/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app);

if ('development' == app.get('env')) {
  app.set('mongodb_uri', 'mongo://localhost/dev');
}

app.get('/', function(req, res) {
  res.send("Hello world!");
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});