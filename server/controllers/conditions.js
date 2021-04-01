const { sendText } = require('./send_sms.js');
const veniceId = '590927576a2e4300134fbed8';


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
      })
      .catch((err) => {
        throw err;
      })
  },
  checkConditions: () => {
    return new Promise((resolve, reject) => {
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

          resolve(final);
          // sendText(conditionsList, testUser, (message) => {
          //   res.send(conditionsList);
          // })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
};
