const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require("../auth");
const { check, validationResult } = require('express-validator');
const { Op } = require("sequelize");
const db = require("../db/models");


const inputValidators = [
    check("searchText")
    .exists({ checkFalsy: true })
    .withMessage("Cannot be empty")
    .isLength({ max: 50 })
    .withMessage("Input too long")
    .custom((value) => !/^ *$/.test(value))
    .withMessage("Cannot be empty")
]

router.post('/results', inputValidators, asyncHandler(async(req,res)=>{
    // console.log(req.body.searchText);
    let words = req.body.searchText.trim().split(/\s+/);
    // console.log(words);

    const validatorErrors = validationResult(req);

    if (!validatorErrors.isEmpty()) {
        // console.log(req)
        // console.log("req.orginalURL !!!!!!!! ", req.originalUrl)
        backURL=req.header('Referer') || '/';
        // console.log("BACKURL ======        ====== ", backURL);
        return res.redirect(backURL);
        // return res.redirect('back');
    }







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

    // console.log("QUESTIONSSSSSSS      ", questions)

    // questions.forEach(question=> console.log(question.content,question.User.username,question.Tag.tagName));


    res.render('search-results', { title: "Search Results", questions, search: req.body.searchText })


}))









module.exports = router;
