const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require("../auth");
const { check, validationResult } = require('express-validator');

const db = require("../db/models");

const checkPermissions = (question, currentUser) => {
  if (question.userId !== currentUser.id) {
    const err = new Error('Illegal operation.');
    err.status = 403; // Forbidden
    throw err;
  }
};

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
    .withMessage('Question cannot be empty')
    .isLength({ max: 140 })
    .withMessage('Question cannot be more than 140 characters long'),
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
  // console.log(req.body)
  if (validatorErrors.isEmpty()) {
    await question.save();
    res.redirect(`/questions/${newQuestion.id}`);
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
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId, { include: [db.User, { model: db.Answer, include: db.User }, db.Tag]});
  // console.log(question)
  // console.log(question.Answers[0].User.username);
  res.render('question-detail', { title: question.content, question })

}))

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);
  const tags = await db.Tag.findAll();

  checkPermissions(question, res.locals.user);

  res.render('update-question', {title: "Edit Your Question", question, tags, csrfToken: req.csrfToken() });
}));

router.post('/:id(\\d+)/edit', csrfProtection, questionValidators, asyncHandler(async(req, res) => {
  const { content, tagId } = req.body;
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);
  const tags = await db.Tag.findAll();

  const validatorErrors = validationResult(req);

  checkPermissions(question, res.locals.user);

  question.content = content;
  question.tagId = tagId;

  if (validatorErrors.isEmpty()) {

    await question.save();
    req.session.save(() => res.redirect(`/questions/${question.id}`));
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    // console.log('error content ', question.content)
    res.render("update-question", {
      title: "Edit Your Question",
      question,
      errors,
      csrfToken: req.csrfToken(),
      tags,
    });
  }
}));

router.get('/:id(\\d+)/delete', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);

  checkPermissions(question, res.locals.user);

  res.render(`question-delete`, {
    title: 'Delete Your Question',
    csrfToken: req.csrfToken(),
    question
  });

}));

router.post('/:id(\\d+)/delete', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);

  checkPermissions(question, res.locals.user);

  await question.destroy();

  req.session.save(() => res.redirect(`/`));

}));


module.exports = router;
