'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderTime: DataTypes.DATE,
    totalPrice: DataTypes.FLOAT,
    status: DataTypes.ENUM(['Order created','In process','Finished','Paid'])
  }, {});
  Order.associate = function(models) {
    //forma 1 sin tabla intermedia
    /* Order.belongsTo(models.User, {
      foreignKey: "userId"
    }) */
    //forma 2
    Order.belongsTo(models.User, {
      as: 'user'
    })
  };
  return Order;
};