const Task = require('../models/Task')
require('../models/associations/UserTask')

exports.post = async (req, res) => {
  const { title, description } = req.body
  const { user_iduser } = req.headers

  const task = await Task.create({ 
    title, 
    description,
    user_iduser
  })

  res.json(task)
}

exports.index = async (req, res) => {
  const tasks = await Task.findAll()
  if(!tasks) return res.status(404).json({error: 'Nenhuma tarefa cadastrada'})
  res.json(tasks)
}

exports.show = async (req, res) => {
  const { id } = req.params

  const task = await Task.findByPk(id, {
    include: { 
      association: 'user',
      attributes: ['id', 'name', 'email']
    },
    attributes: ['id', 'title', 'description']
  })
  if(!task) return res.status(404).json({error: 'Tarefa não encontrada'})
  res.json(task)
}
