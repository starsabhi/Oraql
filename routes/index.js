const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('./utils');

const db = require("../db/models");

/* GET home page. */
router.get('/', asyncHandler(async(req, res, next) => {
  // console.log(req);
  const questions = await db.Question.findAll({
    include: [
      { model: db.User },
      { model: db.Tag }
    ],
    order: [['createdAt', 'DESC']]
  })

  console.log('HERE ARE QUESTIONS', questions)

  res.render('index', { title: 'Oraql Home Page', questions });
}));

module.exports = router;
