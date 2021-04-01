const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');
const cron = require('node-cron');
const db = require('../db');
const run = require('./script.js');
const app = express();
const port = 3000;

const router = require('./routes.js');
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', router);

cron.schedule('0 7,11,14,18 * * * ', () => {
  run().then((data) => {
    console.log('success!')
  })
  .catch((err) => {
    throw err;
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
