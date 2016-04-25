#!/usr/bin/env node

//var nomo = require('node-monkey').start({port: 50501});

var fs = require('fs')
var util = require('util');
var logFile = fs.createWriteStream('msglog.txt', { flags: 'w' });
var logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;

/*
var Console = require('console').Console;
var fs = require('fs')
var stream = fs.createWriteStream('/usr/local/tmp/mylog');
var console = new Console(stream, stream);
var i = 0;

(function log () {
  console.log(i++);
  setTimeout(log, 1000);
} ())
*/

var app = require('../app');
var debug = require('debug')('dashboard:server'); // # export DEBUG=dashboard:server
var http = require('http');
var port = normalizePort(process.env.PORT || '666');
var favicon = require('serve-favicon');
app.set('port', port);
var server = http.createServer(app);
var io = require('socket.io')(server);
require('../dashboard/sockets/base')(io);
//require('../dashboard/sockets/websocket');

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
