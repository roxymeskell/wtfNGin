/**
 * File: index.js
 * Entry point for wtfNGin
 *
 * @author Roxanna Meskell
 */

//var express = require('express');

console.log('Foo bar');

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

