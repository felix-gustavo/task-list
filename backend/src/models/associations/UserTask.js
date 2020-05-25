const Task = require('../Task')
const User = require('../User')

Task.belongsTo(User, { foreignKey: 'user_iduser' })
User.hasMany(Task, { foreignKey: 'user_iduser' })