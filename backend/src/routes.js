const routes = require('express').Router()

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')

routes.get('/', (req, res) => {
  res.json({ message: 'Home' })
})

routes.get('/user', UserController.index)
routes.get('/user/:id', UserController.show)
routes.post('/user', UserController.store)
routes.delete('/user/:id', UserController.delete)

routes.post('/login', SessionController.post)

module.exports = routes
