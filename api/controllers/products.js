const _ = require('lodash')
const express = require('express')
const router = express.Router()

const Products = require('../models/products')

router.get('/', (req, res, next) => {
  Products.find({},function(err,data){
    if(err) {
      res.status(400).json({"message" : "Error fetching data"})
    } else {
      response = {"data" : data}
      res.status(200).json(data)
    }
  });

})

router.post('/', (req, res, next) => {
  Products.findOne({sku: req.body.sku},function(err, product){
    if(err) {
      res.status(400).json({"message" : err})
    } else {
      if(!product){
        product = new Products();
        product = _.assign(product, req.body)
      }

      product.save(function(err){
        if(err) {
          res.status(400).json({"message" : err})
        } else {
          res.status(200).json(product)
        }
      })
    }
  });

})

module.exports = router