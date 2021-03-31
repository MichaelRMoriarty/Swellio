const User = require('../../db/models/User');

module.exports = {
  addUser: (req, res) => {
    const { name, phone, spots, condition } = req.body;
    const user = new User({
      name: name,
      phone: phone,
      spots: spots,
      condition: condition
    });

    user.save(function(err) {
      if (err) {
        throw err;
      }
      console.log('saved!');
      res.sendStatus(201);
    })
  },
  getAllUsers: (req, res) => {
    User.find({}, (err, docs) => {
      if (err) {
        throw err;
      }

      res.send(docs);
    })
  },

  /* request body example : { "phone" : "+16467092361" } */

  deleteUserByPhone: (req, res) => {
    const { phone } = req.body;
    User.findOneAndDelete({phone: phone}, (err, result) => {
      if (err) {
          throw err;
        }
      console.log(result);
      res.sendStatus(204);
    })
  }
}
