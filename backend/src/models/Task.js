const { Sequelize, sequelize } = require('../database')

const Task = sequelize.define('task', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrements: true, 
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = Task
