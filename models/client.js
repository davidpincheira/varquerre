'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    orderTime: DataTypes.DATE,
    phone: DataTypes.INTEGER,
    ip: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};