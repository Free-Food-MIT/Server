require('dotenv').config()

const Koa = require('koa')
const mongoose = require('mongoose')
const morgan = require('koa-morgan')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');

const router = require('./routes')

const app = new Koa()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// Use middlewares
app.use(morgan('dev'))
app.use(bodyParser())
app.use(cors())
app.use(router())

app.listen(process.env.PORT || 8081)
console.log(`Listening @ http://${process.env.IP}:${process.env.PORT}`)
