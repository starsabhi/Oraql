const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require("../auth");

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
    data: req.body
  });
}));

module.exports = router;
