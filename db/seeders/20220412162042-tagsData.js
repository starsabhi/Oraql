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
      "Tags",
      [
        {tagName: 'alien', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'angel', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'demon', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'divination', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'heaven', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'karma', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'magic', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'prophecy', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'reincarnation', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'religion', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'spirit', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'underworld', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
        {tagName: 'witchcraft', createdAt: '2018-01-01', updatedAt: '2018-01-01' },
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
   return queryInterface.bulkDelete("Tags", null, {});
  }
};
