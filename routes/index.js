const combineRouters = require('koa-combine-routers')

const food = require('./food')
const verify = require('./verify')

const router = combineRouters(
  food,
  verify
)

module.exports = router
