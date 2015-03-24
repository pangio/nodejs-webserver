var express = require('express');
var app = express();

var server = require('http').createServer(app);
var people = require('./models/people');

/**
 *  Server static assets out of the public directory
 */
app.use(express.static('public'));

app.use(express.json());

/**
 *  Allows third party clients to connect to the socket server
 */
app.use(function(request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

server.listen(3000, function() {
  console.log('Listening on  %d', 3000);
});


/**
 *  Route Index
 */
app.get('/', function(req, res){
	res.sendfile('public/index.html');
});

/**
 *  Route Pie chart
 */
app.get('/pie', function(req, res){
  res.sendfile('public/pieChart.html');
});

/**
 *  Route Column chart
 */
app.get('/column', function(req, res){
  res.sendfile('public/columnChart.html');
});

var io = require('socket.io').listen(server);
var subSocket = require('./lib/socket');

/**
 *  Listen for connections
 */
io.sockets.on('connection', function(socket){
	console.log('New client has connected...');
  	people.get(function(err, peopleList){
	    peopleList.forEach(function(person){
	    	socket.emit('message', person);
	    });
  });
});

io.sockets.on('disconnect', function () {
	console.log("disconnect client... ");
});

/**
 *  When a message comes in from the pub/sub system, send it to the sockets
 */
subSocket.on('message', function(person){
	console.log("Broadcasting a New person > " + JSON.stringify(person));
	io.sockets.emit('message', person);
});


