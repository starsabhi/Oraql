'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tagName: {
      allowNull: false,
      type: DataTypes.STRING(20),
      unique:true
    }
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.hasMany(models.Question, { foreignKey: 'tagId' })
  };
  return Tag;
};
