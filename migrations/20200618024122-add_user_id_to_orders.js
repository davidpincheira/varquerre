'use strict';

//en esta migracion estamos agregando una columna userId a la tabla orders
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orders', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: {  //modelo con el que se establece la relacion
          tableName: 'Users'
        },
        key: 'id'//con que otro campo estamos relacionando este atributo
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('orders', 'userId')
  }
};
