const express = require('express');
const userCtrl = require('./user.ctrl');
const router = express.Router();

/* GET home page. */
router.get('/', userCtrl.getUserList);

module.exports = router;