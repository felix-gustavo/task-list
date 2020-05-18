const User = require('../models/User')

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
