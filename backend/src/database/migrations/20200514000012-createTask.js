'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('task', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_iduser: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('task')
};
