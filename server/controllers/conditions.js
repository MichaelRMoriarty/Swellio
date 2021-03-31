
const veniceId = '590927576a2e4300134fbed8';

const { sendText } = require('./send_sms.js');

let conditionsList = null;

const conditionsNumericValue = {
  POOR_TO_FAIR: 4,
  FAIR: 5,
  FAIR_TO_GOOD: 6,
  GOOD: 7,
  VERY_GOOD: 8,
  GOOD_TO_EPIC: 9,
  EPIC: 10
};

const testUser =  {
  "_id": "6064e348b5ac8f5497db166e",
  "name": "MikeMo",
  "phone": "+16467092361",
  "spots": [
      {
          "_id": "6064e348b5ac8f5497db166f",
          "name": "Venice Breakwater",
          "id": "590927576a2e4300134fbed8"
      },
      {
          "_id": "6064e348b5ac8f5497db1670",
          "name": "El Porto Overview",
          "id": "584204214e65fad6a7709d24"
      }
  ],
  "condition": 10,
  "__v": 0
};



module.exports = {
  getConditions: (req, res) => {
    const conditionsNumericValue = {
      POOR_TO_FAIR: 4,
      FAIR: 5,
      FAIR_TO_GOOD: 6,
      GOOD: 7,
      VERY_GOOD: 8,
      GOOD_TO_EPIC: 9,
      EPIC: 10
    };

    fetch(`https://services.surfline.com/kbyg/spots/nearby?spotId=${veniceId}`)
      .then((response) => {
        if(response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((results) => {
        const { data } = results;
        const { spots } = data;
        const final = {};

        for (var spot of spots) {
          if (spot.conditions.value && spot.name) {
            final[spot.name] = conditionsNumericValue[spot.conditions.value];
          }
        }
        res.send(final);
        // sendText(conditionsList, testUser, (message) => {
        //   res.send(conditionsList);
        // })
      })
      .catch((err) => {
        throw err;
      })
  }
};
