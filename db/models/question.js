'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tagId:{
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.User, { foreignKey: 'userId' })
    Question.belongsTo(models.Tag, { foreignKey: 'tagId' })
    Question.hasMany(models.Answer, { foreignKey: 'questionId' })

  };
  return Question;
};
