const router = require('express').Router();
const { getConditions } = require('./controllers/conditions.js');
const { addUser, getAllUsers, deleteUserByPhone } = require('./controllers/users.js');

router.get('/nearby', getConditions);
router.post('/user', addUser);
router.delete('/user', deleteUserByPhone);

module.exports = router;