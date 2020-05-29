const { Sequelize, sequelize } = require('../database')

const bcrypt = require('bcrypt')

const hashPassword = async user => user.password = await bcrypt.hashSync(user.password, 4)

const User = sequelize.define('user', {
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
  hooks: { beforeCreate: hashPassword, beforeUpdate: hashPassword }
})

User.isPassword = (password, encondedPassword) => bcrypt.compareSync(password, encondedPassword)

module.exports = User
