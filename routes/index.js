const combineRouters = require('koa-combine-routers')

const food = require('./food')
const user = require('./user')

const router = combineRouters(
  food,
  user
)

module.exports = router
