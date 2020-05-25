const User = require('../models/User')
const Task = require('../models/Task')

exports.store = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.create({name, email, password})

  !user ?
  res.status(500).json({error: 'Erro ao criar usuário'}) :
  res.json(user)
}

exports.delete = async (req, res) => {
  const user = await User.destroy({where: { id: req.params.id }})
  !user ?
  res.status(404).json('Usuário não encontrado') :
  res.json()
}

exports.index = async (req, res) => {
  res.json(await User.findAll())
}

exports.show = async (req, res) => {
  const user = await User.findByPk(req.params.id)
  !user ?
  res.status(404).json({error: 'Usuário não encontrado'}) :
  res.json(user)
}

exports.getTasksByUser = async (req, res) => {
  const { id } = req.params
  const tasks = await User.findByPk(id, {
    include: { 
      model: Task,
      where: { user_iduser: id },
      attributes: ['id', 'title', 'description']
    }
  })
  if(tasks.length === 0) return res.status(404).json({error: 'Nenhuma tarefa cadastrada para este usuário'})
  res.json(tasks)
}
