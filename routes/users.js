const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');


/* GET users listing. */
router.get('/sign-up', csrfProtection, (req, res) => {
  const user = db.User.build()
  res.render('sign-up', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken()
  })
});


const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username')
    .isLength({ max: 20 })
    .withMessage('Username must not be more than 20 characters long')
    .custom((value) => {
      return db.User.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Username is already in use by another account');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 30 })
    .withMessage('Password must not be more than 30 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 30 })
    .withMessage('Confirm Password must not be more than 30 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/sign-up', csrfProtection, userValidators, asyncHandler( async(req, res) => {
  const { username, email, password } = req.body;

  const user = db.User.build({
    username,
    email,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 12);

    user.password = hashedPassword;

    await user.save();
    loginUser(req, res, user);
    req.session.save(() => res.redirect("/"));

  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('sign-up', {
      title: 'Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken()
    });
  };
}));

router.get('/log-in', csrfProtection, (req, res) => {
  res.render('log-in', {
    title: 'Log In',
    csrfToken: req.csrfToken()
  });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/log-in', csrfProtection, loginValidators, asyncHandler( async(req, res) => {
  const {
    email,
    password
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);

      if (passwordCheck) {
        loginUser(req, res, user);
        return res.redirect('/');
      } else {
        errors.push('Incorrect password')
      }
    } else {
      errors.push('Email not found');
    }
  } else {
    errors = validatorErrors.array().map(error => error.msg);
  }

  res.render('log-in', {
    title: 'Log In',
    email,
    errors,
    csrfToken: req.csrfToken()
  });

}));


router.post('/log-out', (req, res) => {
  logoutUser(req, res);
  req.session.save(() => res.redirect("/"));
})

module.exports = router;
