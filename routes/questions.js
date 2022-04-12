const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

router.get("/new", requireAuth, csrfProtection, (req, res) => {
  const question = db.Question.build();
  res.render("new-question", {
    title: "Ask a Question",
    question,
    csrfToken: req.csrfToken(),
  });
});

module.exports = router;
