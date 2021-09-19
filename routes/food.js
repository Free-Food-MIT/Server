const Router = require('koa-router')
const { Joi, bodySchema } = require('koa-body-validator')

// MongoDB models
const { FoodEntry } = require('../models')

const router = new Router({ prefix: '/food' })

// Routes
router.get('/', async (ctx) => {
  ctx.body = await FoodEntry.find()
})

router.post('/create', bodySchema({
  poster: Joi.string().required(),
  posterEmail: Joi.string().email().required(),
  location: Joi.string().required(),
  description: Joi.string(),
  tags: Joi.string().valid('EVENT'),
  food: Joi.string().required()
}), async (ctx) => {
  const foodEntry = await FoodEntry.create({
    poster: ctx.request.body.poster,
    posterEmail: ctx.request.body.posterEmail,
    location: ctx.request.body.location,
    description: ctx.request.body.description,
    tags: ctx.request.body.tags,
    food: ctx.request.body.food
  })
  ctx.body = foodEntry
})

router.post('/:id/report', async (ctx) => {
  ctx.status = 200
})

module.exports = router
