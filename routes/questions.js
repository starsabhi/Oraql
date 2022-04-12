const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require("../auth");
const { check, validationResult } = require('express-validator');

const db = require("../db/models");

router.get("/new", requireAuth, csrfProtection, asyncHandler(async(req, res) => {
  const question = db.Question.build();

  const tags = await db.Tag.findAll();

//   const { content } = req.body
//   console.log('content' , content)
//   console.log('REQ BODY ========   ', req.body)

  res.render("new-question", {
    title: "Ask a Question",
    question,
    csrfToken: req.csrfToken(),
    tags,
    data: {}
  });
}));

const questionValidators = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Question cannot be empty'),
  check('tagId')
    .exists({ checkFalsy: true })
    .withMessage('Please select a tag for your question')
];

router.post("/new", requireAuth, csrfProtection, questionValidators, asyncHandler(async(req, res) => {
  // console.log(req.body.content)
  const { content, tagId } = req.body;
  const { userId } = req.session.auth;
  const tags = await db.Tag.findAll();

  const question = await db.Question.build({
    content,
    tagId,
    userId
  });

  const validatorErrors = validationResult(req);
  console.log(req.body)
  if (validatorErrors.isEmpty()) {
    await question.save();
    // res.redirect(`/questions/${newQuestion.id}`);
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    console.log('error content ', question.content)
    res.render("new-question", {
      title: "Ask a Question",
      question,
      errors,
      csrfToken: req.csrfToken(),
      tags,
      data: req.body
    });
  }
}));



router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id,10);
  const question = await db.Question.findByPk(questionId, { include: [db.User, { model: db.Answer, include: db.User }, db.Tag]});
  // console.log(question)
  // console.log(question.Answers[0].User.username);
  res.render('question-detail', { title: question.content, question })

}))





module.exports = router;
