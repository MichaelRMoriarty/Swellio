const db = require('../db');
const User = require('../db/models/User.js');
const { checkConditions } = require('./controllers/conditions.js');
const { getSurfers } = require('./controllers/users.js');
const { sendText } = require('./controllers/send_sms.js');
const fetch = require('isomorphic-fetch');



const run = async function() {
  var conditions = await checkConditions();
  var surfers = await getSurfers();

  return Promise.all(surfers.map((surfer) => {
    sendText(conditions, surfer)
  }))
}
module.exports = run;

