const jwt = require('jsonwebtoken')
const routes = require('express').Router()

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const TaskController = require('./controllers/TaskController')

routes.get('/', (req, res) => {
  res.json({ message: 'Home' })
})

routes.get('/user', UserController.index)
routes.get('/user/task', (req, res, next) => {
  req.headers.user_iduser = jwt.verify(req.headers.token, process.env.API_SECRET)
  next()
}, UserController.getTasksByUser)
routes.get('/user/:id', UserController.show)
routes.post('/user', UserController.store)
routes.delete('/user', (req, res, next) => {
  req.headers.user_iduser = jwt.verify(req.headers.token, process.env.API_SECRET)
  next()
}, UserController.delete)

routes.put('/user', (req, res, next) => {
    req.headers.user_iduser = jwt.verify(req.headers.token, process.env.API_SECRET)
    next()
}, UserController.put)

routes.post('/login', SessionController.post)

routes.post('/task', (req, res, next) => {
  req.headers.user_iduser = jwt.verify(req.headers.token, process.env.API_SECRET)
  next()
}, TaskController.store)
routes.get('/task', TaskController.index)
routes.get('/task/:id', TaskController.show)

module.exports = routes
