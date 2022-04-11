const express = require('express');
const router = express.Router();

const db = require("../db/models");

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req);
  res.render('index', { title: 'Oraql Home Page' });
});

module.exports = router;
