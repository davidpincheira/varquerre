'use strict';
module.exports = (sequelize, DataTypes) => {
  const Combo = sequelize.define('Combo', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Combo.associate = function(models) {
    // associations can be defined here
  };
  return Combo;
};