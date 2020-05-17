const User = require('../models/User')

exports.store = async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.create({name, email, password})

  user ?
  res.json(user) :
  res.status(500).json({error: 'Erro ao criar usuário'})
}

exports.delete = async (req, res) => {
  const { id } = req.params
  
  const user = await User.destroy({where: { id }})

  !user ? 
  res.status(404).json('Usuário não encontrado') :
  res.json()
}