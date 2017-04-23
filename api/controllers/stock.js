const express = require('express')
const router = express.Router()

const Stock = require('../models/stock')
const Products = require('../models/stock')
const _ = require("lodash")

router
  .get('/:sku/:size', (req, res, next) => {
    let product = Products.findOne({sku: req.params.sku})

    Stock.find({product: product._id, size: req.params.size},function(err,data){
      if(err) {
        res.status(400).json({"message" : "Error fetching data"})
      } else {
        response = {"data" : data}
        res.status(200).json(data)
      }
    });
  })
  .put('/:sku/:size', (req, res, next) => {
    let product = Products.findOne({sku: req.params.sku})

    Stock.findOne(
      {product: product._id, size: req.params.size}, function(err,stock){
      console.log(err,stock);
      if(err) {
        res.status(400).json({"message" : err})
      } else {
        if(!stock){
          stock = new Stock()
          _.assign(stock, {
            product: product._id,
            size: req.params.size,
            quantity: req.body.quantity,
            warehouse: req.body.warehouse
          })
        }

        stock.save((err) =>{
          if(err){
            res.status(400).json({"message": err})
          }

          res.status(200).json(stock)
        })
      }
    });
  })

module.exports = router