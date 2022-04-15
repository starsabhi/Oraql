const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require("../auth");
const { check, validationResult } = require("express-validator");

const db = require("../db/models");

router.get("/:id(\\d+)",csrfProtection, asyncHandler(async(req, res) => {
    const tagId = parseInt(req.params.id, 10);
    const questions = await db.Question.findAll({
        where: {
            tagId
        },
        include: [db.Tag, db.User]
    });
    const tag = await db.Tag.findByPk(tagId);
    const tags = await db.Tag.findAll();
    res.render('tag', { questions, tag, tags, title: 'view questions by tags'})
}))

module.exports = router;
