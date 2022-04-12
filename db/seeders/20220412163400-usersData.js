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
      "Users",
      [
        {username: 'lackey', email: 'lackery@bmail.com', password: '$2a$12$aEittMHfzfAgiUAO/VzdBuBDy9bQRxi.czuht2MOmIvmklJScvn52', createdAt: '2019-04-12', updatedAt: '2019-04-12'},
        {username: 'lujan', email: 'lujan@bmail.com', password: '$2a$12$KyUmnShNjuixUPtgiFhOq.2a77nvh.5rzbVhgL3mX0la3g8WstcVe', createdAt: '2018-05-12', updatedAt: '2018-05-01'},
        {username: 'quinn', email: 'quinn@bmail.com', password: '$2a$12$4ufdcsftGAWdOq83l.XTHelhjOKpWz2Ff5HDWnJXDH3CR2c05svX2', createdAt: '2018-05-12', updatedAt: '2018-03-12'},
        {username: 'kennedy', email: 'kennedy@bmail.com', password: '$2a$12$BNog4tI5yEKs1z7k0KByZ.Bi34ihPRRpp.tqRcZ4rdMjQTZgRCPUy', createdAt: '2019-01-30', updatedAt: '2019-01-30'},
        {username: 'brackett', email: 'brackett@bmail.com', password: '$2a$12$.rjwrxe1BzEKSExYRToLPeC.0sIFHfZmqug2aR9bo5aXB57NFEooy', createdAt: '2017-11-20', updatedAt: '2017-11-20'},
        {username: 'davis', email: 'davis@bmail.com', password: '$2a$12$VtzHmsHu43RoIzOp5wud/OqG45QAq52gOV8xEZqu/35lP6XgoPlz6', createdAt: '2018-02-17', updatedAt: '2018-02-17'},
        {username: 'valkenburg', email: 'valkenburg@bmail.com', password: '$2a$12$DWe1EGhZ486GpsWQLTf6Uu8Gc/a1Te04zVzZGxbc1Dnxus2IHFFFi', createdAt: '2017-05-13', updatedAt: '2017-05-13'},
        {username: 'hart', email: 'hart@bmail.com', password: '$2a$12$WskwYvliCptlVIiy30xBPOSnCWxJA1Th6X8bmGhTZ/HsDLkdyBIn.', createdAt: '2020-08-08', updatedAt: '2020-08-08'},
        {username: 'Prue_Halliwell', email: 'prue_halliwell@bmail.com', password: '$2a$12$ZjDg/37L7hH/oDKbbnjjTemD.1Y87x2J1o6ZjxGkNEihGgEKTMK12', createdAt: '2020-08-08', updatedAt: '2020-08-08'},
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
    return queryInterface.bulkDelete("Users", null, {});
  }
};
