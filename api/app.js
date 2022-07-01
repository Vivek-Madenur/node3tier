var express = require('express');
var app = express();
var uuid = require('node-uuid');

const bunyan = require('bunyan');
// Imports the Google Cloud client library for Bunyan
const {LoggingBunyan} = require('@google-cloud/logging-bunyan');
// Creates a Bunyan Cloud Logging client
const loggingBunyan = new LoggingBunyan();
// Create a Bunyan logger that streams to Cloud Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/bunyan_log"
const logger = bunyan.createLogger({
  // The JSON payload of the log as it appears in Cloud Logging
  // will contain "name": "my-service"
  name: 'node3tier-api',
  streams: [
    // Log to the console at 'info' and above
    {stream: process.stdout, level: 'info'},
    // And log to Cloud Logging, logging at 'info' and above
    loggingBunyan.stream('info'),
  ],
});

// Writes some log entries
// logger.error('warp nacelles offline');
// logger.info('shields at 99%');

var pg = require('pg');
const conString = {
    user: process.env.DBUSER,
    database: process.env.DB,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT
    
    // user: "postgres",
    // database: "postgres",
    // password: "",
    // host: "",
    // port: "5432"                
};

// Routes
app.get('/api/status', function(req, res) {

  console.info('*** conString attributes in /api/status:: ');
  console.info('user = ' + conString.user)
  console.info('password = ' + conString.password)
  console.info('database = ' + conString.database)
  console.info('host = ' + conString.host)
  console.info('port = ' + conString.port)

  // console.info('************************Console**********************');
  // console.debug('debug');
  // console.info('info');
  // console.warn('warn');
  // console.error('error');
  
  // logger.info('************************Logger**********************');
  // logger.debug('debug');
  // logger.info('info');
  // logger.warn('warn');
  // logger.error('error');
  
  //'SELECT now() as time', [], function(err, result
  
  const Pool = require('pg').Pool
  const pool = new Pool(conString)
  // connection using created pool
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT now() as time', (err, result) => {
      release()
    if (err) {
      console.log(err);
      return console.error('Error executing query', err.stack)
    }
    res.status(200).send(result.rows + " Hi from API!");
  });
});

  // pool shutdown
  pool.end()
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
