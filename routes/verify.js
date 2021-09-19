const Router = require('koa-router')
// const mongoose = require('mongoose')
// const moment = require('moment')

// MongoDB models
const { User } = require('../models')

const router = new Router({ prefix: '/user' })

router.get('/', async (ctx) => {
  ctx.body = await User.find()
})

router.post('/create', async (ctx) => {
  // await FoodEntry.create({

  // })
  ctx.status = 200
})

module.exports = router
