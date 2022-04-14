const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require("../auth");
const { check, validationResult } = require('express-validator');
const { Op } = require("sequelize");
const db = require("../db/models");


const inputValidators = [
    check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Username")
    .isLength({ max: 50 })
    .withMessage("Username must not be more than 20 characters long")
    .custom((value) => !/^ *$/.test(value))
    .withMessage("Username")

]

router.post('/results', inputValidators, asyncHandler(async(req,res)=>{
    // console.log(req.body.searchText);
    let words = req.body.searchText.trim().split(/\s+/);
    // console.log(words);
    words = words.map(word =>`%${word}%`)
    const questions = await db.Question.findAll({
        where: {
            content :{
                [Op.iLike]: {
                    [Op.any] : words
                }
            }
        },
        include: [
            { model: db.User },
            { model: db.Tag }
        ],
        order: [['createdAt', 'DESC']]
    })
    // console.log(questions)

    // questions.forEach(question=> console.log(question.content,question.User.username,question.Tag.tagName));


    res.render('search-results', { title: "Search Results", questions, search: req.body.searchText })


}))









module.exports = router;
