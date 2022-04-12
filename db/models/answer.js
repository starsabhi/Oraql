'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content:{
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.Question, { foreignKey: 'questionId' })
    Answer.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Answer;
};
