const Router = require('koa-router')
// const mongoose = require('mongoose')
// const moment = require('moment')

// MongoDB models
const { FoodEntry } = require('../models')

const router = new Router({ prefix: '/food' })

router.get('/', async (ctx) => {
  ctx.body = await FoodEntry.find()
})

router.post('/create', async (ctx) => {
  // await FoodEntry.create({

  // })
  ctx.status = 200
})

module.exports = router
