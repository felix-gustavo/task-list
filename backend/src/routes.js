const routes = require('express').Router()

const UserController = require('./controllers/UserController')

routes.get('/', (req, res) => {
  res.json({ message: 'Home' })
})

routes.post('/user', UserController.store)
routes.delete('/user/:id', UserController.delete)

module.exports = routes
