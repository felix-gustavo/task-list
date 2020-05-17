const express = require('express')

require('dotenv').config()

const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT)