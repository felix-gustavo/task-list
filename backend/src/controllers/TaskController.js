const Task = require('../models/Task')
require('../models/associations/UserTask')

exports.post = async (req, res) => {
  const { title, description, color='white' } = req.body
  const { user_iduser } = req.headers

  const task = await Task.create({ 
    title, 
    description,
    color,
    user_iduser
  })

  res.json(task)
}