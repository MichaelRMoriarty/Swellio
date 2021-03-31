const { token, id } = require('../../twilio.authToken.js');

const accountSid = id;
const authToken = token;
const client = require('twilio')(accountSid, authToken);

const conditionsTextValue = {
  4: 'POOR to FAIR',
  5: 'FAIR',
  6: 'FAIR to GOOD',
  7: 'GOOD',
  8: 'VERY GOOD',
  9: 'GOOD to EPIC',
  10: 'EPIC!!'
};

module.exports = {
  sendText: (currentConditions, user, callback) => {
    const { name, phone, spots, condition } = user;
    const meetsStandards = [];

    for (var spot of spots) {
      const currentConditionNum = currentConditions[spot.name];
      if (currentConditionNum >= condition) {
        meetsStandards.push([spot.name, conditionsTextValue[currentConditionNum]]);
      }
    }

    if (meetsStandards.length < 1) {
      return;
    }

    let body = `Heads up, ${name}! The waves are ${meetsStandards[0][1]} at ${meetsStandards[0][0]}`;

    if (meetsStandards.length > 1) {
      for (var i = 1; i < meetsStandards.length; i++) {
        if (i === meetsStandards.length - 1) {
          body += `, and ${meetsStandards[i][1]} at ${meetsStandards[i][0]}`
        } else {
          body += `. ${meetsStandards[i][1]} at ${meetsStandards[i][0]}`
        }
      }
    }

    client.messages.create({
      body: body,
      from: '+13616009283',
      to: phone
    })
    .then((message) => {
      callback(message);
    })
    .catch((err) => {
      throw new err;
    });
  }
};
