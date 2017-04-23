const express = require('express')
const router = express.Router()

router.use('/products', require('./controllers/products'))
router.use('/stock', require('./controllers/stock'))
router.use('/cms', require('./controllers/cms'))

module.exports = router