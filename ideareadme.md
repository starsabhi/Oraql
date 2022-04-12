What features are needed to make this an application that people would use?
What features would be nice to have if the minimum viable product gets finished?
Will these features demonstrate everything we've learned during the first half of the course?

4 minimum features

Questions
Answers/comments on answers
Search Questions
Topics/Tags
Bonus: Upvotes, order questions by popularity
Bonus: Replies to comments
our bonus: profile page
our bonus: user flare

Four features:
Adequate styling
Smooth, bug-free navigation
Adequate and appropriate seed data to demonstrate the feature

scorecardLink - https://docs.google.com/spreadsheets/d/12f8Bn0xigmtaForkGSsLikNkq1EpewdTGmnvgalNKGA/edit#gid=1030287311

Association::
1- user hasMany questions and answers and comments, =>>>>one to Many
2-question hasMany answers ====>>>> one to many
3- answer hasMany comments ===>>>> one to many

Locally computer
0- update env file
1- npm install \*\*\*\*
2- create user oraql_app with password 'oraql_password' createdb;
3- create database oraql_data with owner oraql_app;
4- npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string
6- npx dotenv sequelize db:migrate \*\*\*\*
7- npm install csurf
8- npm install express-validator
9-SESSION_SECRET=02ed0d84-8377-4436-b809-d35d5049daa4 and env file
10- npm install bcryptjs

11-npx sequelize-cli model:generate --name Tag --attributes tagName:string
12 - npx sequelize-cli model:generate --name Question --attributes content:text,userId:integer,tagId:integer
13 - npx sequelize-cli model:generate --name Answer --attributes content:text,userId:integer,questionId:integer
14 - npx dotenv sequelize db:migrate
npx dotenv sequelize db:drop

npx dotenv sequelize db:create

npx dotenv sequelize-cli db:migrate
