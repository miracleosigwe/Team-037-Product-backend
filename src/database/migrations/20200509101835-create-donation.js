// 'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Donations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'user_id',
        reference: {
          model: 'Users',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      description: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface /* , Sequelize */) => {
    return queryInterface.dropTable('Donations');
  }
};