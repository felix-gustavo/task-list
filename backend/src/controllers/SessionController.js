const jwt = require('jsonwebtoken')

const User = require('../models/User')

exports.post = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })

  if(!user) return res.status(404).json({error: 'Usuário não encontrado'})
  if(!User.isPassword(password, user.password)) 
    return res.status(404).json({error: 'Senha incorreta'})
  
  res.json({token: jwt.sign(user.id, process.env.API_SECRET)})
}