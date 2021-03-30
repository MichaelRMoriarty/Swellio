const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');
const app = express();
const port = 3000;

const veniceId = '590927576a2e4300134fbed8';

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   fetch('https://services.surfline.com/search/site?q=venice+breakwater')
//     .then((response) => {
//       if(response.status >= 400) {
//         throw new Error("Bad response from server");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       res.send(data);
//     })
// })

app.get('/report', (req, res) => {
  fetch(`https://services.surfline.com/kbyg/spots/reports?spotId=${veniceId}`)
    .then((response) => {
      if(response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(({forecast}) => {
      console.log(forecast);
      res.send(forecast);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})