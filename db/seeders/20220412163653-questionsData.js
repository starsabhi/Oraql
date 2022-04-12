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
