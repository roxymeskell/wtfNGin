/**
 * File: index.js
 * Purpose: Entry point for wtfNGin
 *
 * Author: Roxanna Meskell (roxymeskell)
 */

// Test that file is running
console.log('Hello NodeJS');

/*
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log(sum);
});
//*/


// React-DOM Serverside rendering
const config = require('./config.js');
const { Client } = require('pg');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Express = require('express');
const Path = require('path');

const app = Express();
const db = new Client(config.db);
//var promise = db.query('SELECT $1::text as message', ['Hello world!']);
//var res = await promise;
//const res = await db.query('SELECT $1::text as message', ['Hello world!']);

/*
 * Want to create a factory to take
 * {random} objects and parameters
 * from filter passed in through Get,
 * and return a formatted result object.
 * Factory would be initialized using
 * database object.
 */

//const Result = require('./result.js');
const Result = React.createFactory(require('./result.js'));

//const element = React.createElement('h1', null, ['Hello, world!']);
const element = Result({html: '<h1>Hello, World!</h1>'});

// Serving static files
//app.use('/static', Express.static('public'));
app.use('/static', Express.static(Path.join(__dirname, 'public')));

// Serving main page
//app.get('/', (req, res) => res.send(ReactDOMServer.renderToStaticMarkup(element)));
app.get('/', function(req, res){
  res.send(ReactDOMServer.renderToStaticMarkup(element));
});
app.listen(3000, '0.0.0.0');
//*/


// Testing to get express working
/*
const  express = require('express');
const https = require('https');
const http = require('http');
const app = express();
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000, '0.0.0.0', () => console.log('Listening on port 3000'));
//app.listen(3000, '0.0.0.0');
//*/

/*
// Testing to get node-postgres working
const { Client } = require('pg');
const client = new Client({
  host: 'postgres-01',
  port: 5432,
  database: 'wtfngin',
  user: 'wtfngin',
  password: 'tits123'
});

client.connect();

client.query('SELECT $1::text as message', ['Hello world!'],
  (err, res) => {
    console.log(err ? err.stack : res.rows[0].message);
    client.end();
  });
//*/

