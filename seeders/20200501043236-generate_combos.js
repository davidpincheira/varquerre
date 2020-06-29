'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    


      return queryInterface.bulkInsert('combos', [
        {
          id: 1,
          name: 'Mario kart',
          description: "hamburguesa con doble queso y cheddar",
          price: 450.00,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('combos', null, {});
   
  }
};
