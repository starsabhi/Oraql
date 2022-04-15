# Oraql
Oraql is a website for users to ask and answer questions about supernatural phenomena. It is inspired by [Quora](https://www.quora.com/).

Try asking and answering questions at our live site: [Oraql](https://oraql.herokuapp.com/)

# Index

|
[MVP Feature List](https://github.com/starsabhi/Oraql/wiki/Oraql-feature-list) |
[Database Schema](https://github.com/starsabhi/Oraql/wiki/Database-Schema) |
[API Documentation](https://github.com/starsabhi/Oraql/wiki/API-Documentation) |
[Frontend Routes](https://github.com/starsabhi/Oraql/wiki/Front-End-Routes) |
[User Stories](https://github.com/starsabhi/Oraql/wiki/User-Stories) |

# Technologies Used

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/><img  src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667"  height=40/>

# Getting started

1. Clone this repository

   `git clone git@github.com:starsabhi/Oraql.git`

2. Install dependencies

   `npm install`

3. Create a .env file based on the .env.example given

4. Setup your username and database based on what you setup in your .env

5. Migrate and Seed models

   `npx dotenv sequelize db:migrate` &&
   `npx dotenv sequelize db:seed:all`

6. Start the app using:

   `npm start`

7. You can use the Demo user or create an account

# Live

# Database Schema

![image](https://user-images.githubusercontent.com/95883222/163646085-82bc0651-9784-4b96-a7f8-e2a7f05b82b7.png)



### Features

Oraql is a question-and-answer website for users to post/edit/delete questions and answers. Logged in sers can dynamically edit and delete answers without redirecting.

Logged out users can:

- View Questions and Associated Answers
- Search for Questions
- View Questions by Topics/Tags 

Logged in users can:

- Add/Edit/Delete Questions
- Add/Edit/Delete Answers
- Search for Questions
- View Questions by Topics/Tags 

### Home Page

![image](https://user-images.githubusercontent.com/95883222/163636079-46fe6865-8996-4a02-b1bb-ec2c782e26e8.png)

### User Log In Page

![image](https://user-images.githubusercontent.com/95883222/163647096-86e80eea-8fc7-4412-9e9d-be6d771b9774.png)

### User Sign Up Page

![image](https://user-images.githubusercontent.com/95883222/163648546-c8dce78e-5b2c-4d98-8fc6-5af32423ad01.png)

### Add Question Page

![image](https://user-images.githubusercontent.com/95883222/163648233-fc1358d7-800d-4681-9fe0-6305dd99abea.png)

### Question Detail Page
![image](https://user-images.githubusercontent.com/95883222/163648383-7313edd3-7919-4825-8876-8fdd55133094.png)

### Search Results Page
![image](https://user-images.githubusercontent.com/95883222/163648473-96310fdc-284a-4340-aafd-2fd84bd4be4a.png)

### List of Question with Tags

![image](https://user-images.githubusercontent.com/95883222/163648721-813593d0-e1fc-4092-a4ea-8199e404e4e7.png)



# Future Features

- Comments on Answers:
  - Logged-in users can add comments on answers.
  - Logged-in users can upvote comments/answers/questions.
- Likes on Questions/Answers/Comments
  - Logged-in users can remove their own like from questions/answers/comments.
  - All users can see how many users have liked a question/answer/comment.
- User profiles

# Technical Implementation

- One of our first challenges was search bar functionality: how to process an input and search for related information in the database. Our solution is to segment the input string into a list of words and query the question.content column for data containing any of the words.

```javascript
router.post(
  "/results",
  inputValidators,
  asyncHandler(async (req, res) => {
    let words = req.body.searchText.trim().split(/\s+/);

    const validatorErrors = validationResult(req);

    if (!validatorErrors.isEmpty()) {
      backURL = req.header("Referer") || "/";
      return res.redirect(backURL);
    }

    words = words.map((word) => `%${word}%`);
    const questions = await db.Question.findAll({
      where: {
        content: {
          [Op.iLike]: {
            [Op.any]: words,
          },
        },
      },
      include: [{ model: db.User }, { model: db.Tag }],
      order: [["createdAt", "DESC"]],
    });

    res.render("search-results", {
      title: "Search Results",
      questions,
      search: req.body.searchText,
    });
  })
);
```

- The other challenge was how to display a question and a list of answers on the question which are sorted by createdAt date. Our solution is to perform an eager loading to query of several different models, including Question, Answer and User, at once. Then we sort the answers of a question by createdAt and display the sorted answer on the page.

```javascript
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId, {
      include: [
        db.User,
        {
          model: db.Answer,
          include: db.User,
        },
        db.Tag,
      ],
    });

    const answers = question.Answers;

    answers.sort((a, b) => {
      const keyA = new Date(a.createdAt);
      const keyB = new Date(b.createdAt);
      return keyA < keyB ? -1 : 1;
    });

    answers.forEach((answer) => {
      answer.date = answer.createdAt.toDateString();
    });

    res.render("question-detail", {
      title: question.content,
      question,
      answers,
    });
  })
);
```

- custom validations on sign up input

```javascript
const userValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Username")
    .isLength({ max: 20 })
    .withMessage("Username must not be more than 20 characters long")
    .custom((value) => {
      return db.User.findOne({ where: { username: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided Username is already in use by another account"
          );
        }
      });
    })
    .custom((value) => !/^ *$/.test(value))
    .withMessage("Username cannot be empty"),
];
```

- Dynamically update answers without redirection

```javascript
submitBtn.addEventListener("click", async (submitEvent) => {
    submitEvent.preventDefault();
    const contentValue = document.getElementById(
        `${answerId}-edit-content`
    ).value;

    const questionId = parseInt(
        submitEvent.target.classList[0].split("-")[1],
        10
    );

    const res = await fetch(`/questions/${questionId}/answers/${answerId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        content: contentValue,
        }),
    });

    const data = await res.json();
    if (data.message === "Success") {
        let contentEle = document.getElementById(`answer-content-${answerId}`);
        let lines = data.answer.content.split("\n");
        lines = lines.map((line) => `<div>${line}</div>`);
        contentEle.innerHTML = lines.join("");

        form.classList.add("hidden");
        answerContent.classList.remove("hidden");
        editAnswerButton.classList.remove("hidden");
        deleteAnswerButton.classList.remove("hidden");
    } else {
        if (data.message === "Failure") {
        const errorDiv = document.getElementById(`edit-errors-${answerId}`);
        errorDiv.innerHTML = data.errors[0];
        }
    }
});
```




