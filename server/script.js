const db = require('../db');
const User = require('../db/models/User.js');

User.find({}, (err, docs) => {
  if (err) {
    throw err;
  }

  console.log(docs);
})