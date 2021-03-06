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
        {username: 'piper_h', email: 'piper@bmail.com', password:'$2a$12$BHAoqmMGs4Q6FKoJh8NXI.pLwBgeKHSc4WCA4rnvYCPp7M3Xtq5eq', createdAt: '2014-10-08', updatedAt: '2015-08-21'},
        {username: 'phoebeHal', email: 'phobeH@bmail.com', password:'$2a$12$9zPcVWPtlptlBvgnbuM9QOL6m5a49Qeqku8T7l5oxDN37KYtL3ImC', createdAt: '2011-05-15', updatedAt: '2015-08-21'},
        {username: 'MatPaige', email: 'paige@bmail.com', password:'$2a$12$bwvqxcLY5V9RBOOpYaTldOYUuCu3KdcDkYbHLoKVT5yJUTOOeNDOK', createdAt: '2013-11-01', updatedAt: '2014-09-30'},
        {username: 'hironakam', email: 'hiro@bmail.com', password:'$2a$12$hSMJcQZ.V0b1jFkspaxEuuy/gpTQdetDqiKqo3RdCZd8m0ywl2jXm', createdAt: '2011-07-16', updatedAt: '2015-02-24'},
        {username: 'saveThe_cheerleader', email: 'cheerleader@bmail.com', password:'$2a$12$xIzftuuL4blixQZNCwAa1ObfdZ.TWuz2i33i03IY19J88WeTLtGi6', createdAt: '2011-05-15', updatedAt: '2017-05-13'},
        {username: 'noahBen', email: 'noah@bmail.com', password:'$2a$12$8Mw2NPn6j/0jpFQ1Ross6OnpwNbXj4QPUgOhexRbdesH7cr1QxIOG', createdAt: '2011-05-15', updatedAt: '2017-05-13'},
        {username: 'edWarren', email: 'warren@bmail.com', password:'$2a$12$kuC8lDl7ggKnVv35RIEt/.X5e.To52.miVdkfT/fz2NWAs.Xw5QQO', createdAt: '2011-05-15', updatedAt: '2017-05-13'},
        {username: 'warren_Lorraine', email: 'lorraine@bmail.com', password:'$2a$12$i3Dn22HWGC4A7.E0PcyUlOoC/MuQKaBognqB6wp.9fGiQH9mAwJSu', createdAt: '2011-05-15', updatedAt: '2017-05-13'},
        {username: 'katie_f', email: 'katie@bmail.com', password:'$2a$12$bot1pII4z9VYrNE4kWdkj.dBy9DBATeE7Pu.rOpoqoAa120435r/G', createdAt: '2011-05-15', updatedAt: '2017-05-13'},
        {username: 'Micah', email: 'micah@bmail.com', password:'$2a$12$JuLVFUZTzWQeQkwcoqq/F.2o2teF/5aSonrCH2XQBZok44wx0zauu', createdAt: '2011-05-15', updatedAt: '2017-05-13'},
        {username: 'rSerling', email: 'serling@bmail.com', password:'$2a$12$aFfxqpoTEDssj3IiFyRW5uOFYsmYVRXh4Or9qzPsSUvIcKWSw0eqi', createdAt: '2011-05-15', updatedAt: '2017-05-13'},
        {username: 'phuru', email: 'phuru@bmail.com', password:'$2a$12$00hSC36A.57d3uo6vGNUueU783S9vLQq7KYPGRGeNwoji9I0xpTbS', createdAt: '2011-05-15', updatedAt: '2017-05-13'},

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
