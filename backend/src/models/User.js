const { Sequelize, sequelize } = require('../database')

const bcrypt = require('bcrypt')

module.exports = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  freezeTableName: true,
  hooks: {
    beforeCreate: user => user.password = bcrypt.hashSync(user.password, 4)
  }
})