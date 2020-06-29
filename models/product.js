'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.INTEGER,
    description: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    offerPrice: DataTypes.FLOAT,
    image: DataTypes.STRING,
    discountDueDate: DataTypes.DATE
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};