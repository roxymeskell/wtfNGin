/**
 * File: index.js
 * Entry point for wtfNGin
 *
 * @author Roxanna Meskell
 */

// Test that file is running
console.log('Hello NodeJS');

/*
// React-DOM Serverside rendering
const ReactDOMServer = require('react-dom/server');
const Express = require('express');
const app = Express();

const element = '<h1>Hello, world</h1>';

app.get('/', (req, res) => res.send(ReactDOMServer.renderToStaticMarkup(element)));
//app.listen(3000, () => console.log('Listening on port 3000'));
app.listen(3000, '0.0.0.0');
//*/


// Testing to get express working
const  express = require('express');
const https = require('https');
const http = require('http');
const app = express();
app.get('/', (req, res) => res.send('Hello World Foo Bar'));
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

