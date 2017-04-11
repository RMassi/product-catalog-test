const express = require('express')
const router = express.Router()

const Products = require('../models/products')

router.get('/', (req, res, next) => {
  Products.find({},function(err,data){
    // Mongo command to fetch all data from collection.
    if(err) {
      res.status(400).json({"message" : "Error fetching data"})
    } else {
      response = {"error" : false,"message" : data}
      res.status(200).json(data)
    }
  });

})

module.exports = router