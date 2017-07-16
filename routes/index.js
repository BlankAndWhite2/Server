const express = require('express');
const user = require('./user/index');
const router = express.Router();

router.use('/user', user);

module.exports = router;
