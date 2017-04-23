const _ = require('lodash')
const express = require('express')
const router = express.Router()

const Products = require('../models/products')
const Stock = require('../models/stock')

const propertiesMap = {
  sku: 'sku',
  category: 'categories'
}

router.get('/:searchType(sku|category)/:search', (req, res, next) => {
  let query = {}
  query[propertiesMap[req.params.searchType]] = req.params.search

  Products.find(query,function(err,data){
    if(err) {
      res.status(400).json({"message" : "Error fetching data"})
    } else {
      response = {"content" : data}
      res.status(200).json(data)
    }
  });
})

module.exports = router