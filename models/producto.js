'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.INTEGER,
    description: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    offerPrice: DataTypes.FLOAT,
    image: DataTypes.STRING,
    discountDueDate: DataTypes.DATE
  }, {});
  Producto.associate = function(models) {
    // associations can be defined here
  };
  return Producto;
};