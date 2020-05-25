const jwt = require('jsonwebtoken')
const routes = require('express').Router()

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const TaskController = require('./controllers/TaskController')

routes.get('/', (req, res) => {
  res.json({ message: 'Home' })
})

routes.get('/user', UserController.index)
routes.get('/user/:id', UserController.show)
routes.get('/user/:id/task', UserController.getTasksByUser)
routes.post('/user', UserController.store)
routes.delete('/user/:id', UserController.delete)

routes.post('/login', SessionController.post)

routes.post('/task', (req, res, next) => {
  req.headers.user_iduser = jwt.verify(req.headers.token, process.env.API_SECRET)
  next()
}, TaskController.post)
routes.get('/task', TaskController.index)
routes.get('/task/:id', TaskController.show)

module.exports = routes
