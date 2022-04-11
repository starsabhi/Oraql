const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/sign-up', csrfProtection, function(req, res) {
  res.render('sign-up')
});

module.exports = router;
