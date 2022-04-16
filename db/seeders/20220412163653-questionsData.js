'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Questions",
      [
        {content: 'Do you believe in ghosts? If so, why?', userId: 8, tagId: 11, createdAt: '2018-10-07', updatedAt: '2018-10-07'},
        {content: 'Have you ever met an angel?', userId: 7, tagId: 2, createdAt: '2020-01-30', updatedAt: '2020-01-30'},
        {content: 'Is it possible to come into contact with a spirit?', userId: 2, tagId: 11, createdAt: '2021-01-12', updatedAt: '2021-01-12'},
        {content: 'What are the scientific attempts, if any, to verify if magic and paranormal phenomena are real', userId: 1, tagId: 7, createdAt: '2019-01-03', updatedAt: '2019-01-03'},
        {content: 'Does Area 51 have aliens inside it?', userId: 5, tagId: 1, createdAt: '2020-03-30', updatedAt: '2020-03-30'},
        {content: 'Can humans become demons?', userId: 3, tagId: 3, createdAt: '2019-12-30', updatedAt: '2019-12-30'},
        {content: 'What does it mean if I find random, extremely large seed pods in my backyard? ', userId: 20, tagId: 1, createdAt: '2019-10-07', updatedAt: '2019-10-07'},
        {content: 'Has anyone ever encountered the Kanamits? They have just arrived in my city, should I trust them?', userId: 13, tagId: 1, createdAt: '2020-12-07', updatedAt: '2020-12-07'},
        {content: 'What is the most paranormal experience you\'ve had as a child?', userId: 17, tagId: 11, createdAt: '2018-10-07', updatedAt: '2018-10-07'},
        {content: 'What is the meaning of underworld?', userId: 18, tagId: 12, createdAt: '2022-03-15', updatedAt: '2022-03-15'},
        {content: 'If you were a god, what would your version of the underworld (or hell) look like?', userId: 16, tagId: 12, createdAt: '2021-04-29', updatedAt: '2021-04-29'},
        {content: 'What signs do we get when there is any kind of spirit around us?', userId: 10, tagId: 11, createdAt: '2022-03-29', updatedAt: '2022-03-29'},
        {content: 'How do I know if there\'s a spirit/entity in my home? How do I deal with it?', userId: 19, tagId: 11, createdAt: '2019-11-20', updatedAt: '2019-11-20'},
        {content: 'Why do demons want souls? In most every story, myth, or legend, the main goal of a demon is the soul. What do they do with the soul?', userId: 12, tagId: 3, createdAt: '2018-10-04', updatedAt: '2018-10-04'},
        {content: 'Who is Shax?', userId: 9, tagId: 3, createdAt: '2021-09-12', updatedAt: '2021-09-12'},
        {content: 'Do you feel you\'ve ever met an angel or alien and didn\'t know it?', userId: 14, tagId: 2, createdAt: '2022-04-14', updatedAt: '2022-04-14'},
        {content: 'Have you ever felt that you have been reincarnated?', userId: 9, tagId: 9, createdAt: '2022-04-02', updatedAt: '2022-04-02'},
        {content: 'What are some real life examples, good or bad, of karma?', userId: 20, tagId: 6, createdAt: '2022-04-11', updatedAt: '2022-04-11'},
        {content: 'Why are occult secrets secret?', userId: 13, tagId: 4, createdAt: '2022-03-04', updatedAt: '2022-03-04'},
        {content: 'If we go to heaven at the age of 60, how will we look in heaven? Young, older, or permanently look old?', userId: 13, tagId: 5, createdAt: '2021-12-04', updatedAt: '2021-12-04'},
        {content: 'What are the types of magic?', userId: 6, tagId: 7, createdAt: '2022-02-04', updatedAt: '2021-02-04'},
        {content: 'What predictions actually came true?', userId: 9, tagId: 8, createdAt: '2022-04-12', updatedAt: '2022-04-12'},
        {content: 'Have aliens ever visited earth?', userId: 8, tagId: 5, createdAt: '2019-10-07', updatedAt: '2019-10-07'},
        {content: 'Do you believe in "aliens"? Why or why not?', userId: 10, tagId: 1, createdAt: '2020-10-07', updatedAt: '2020-10-07'},
        {content: 'Do aliens really exist and if so can we prove it?', userId: 12, tagId: 1, createdAt: '2020-10-07', updatedAt: '2020-10-07'},
        {content: 'Is it possible that humans become demons?', userId: 13, tagId: 3, createdAt: '2020-02-07', updatedAt: '2020-02-07'},
        {content: 'What is heaven like?', userId: 14, tagId: 5, createdAt: '2020-02-07', updatedAt: '2020-02-07'},
        {content: 'What is life in heaven?', userId: 12, tagId: 5, createdAt: '2020-02-07', updatedAt: '2020-02-07'},
        {content: 'Is science just another religion?', userId: 12, tagId: 10, createdAt: '2020-10-07', updatedAt: '2020-10-07'},
        {content: 'How does karma affect our life?', userId: 8, tagId: 6, createdAt: '2020-10-07', updatedAt: '2020-10-07'}

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Questions", null, {});
  }
};
