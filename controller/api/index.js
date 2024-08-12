const router = require('express').Router();
const user = require('./user.routes');
const login = require('./login.routes');

router.use('/login', login);
router.use('/user', user);

module.exports = router;
