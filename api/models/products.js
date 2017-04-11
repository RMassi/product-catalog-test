const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  sku: {required: true, type: String},
  price: {required: true, type: Number},
  name: {required: true, type: String},
  description: {required: true, type: String},
//  size: {required: true, type: Mixed (return value can be an array list or single value)},
  brand: {required: true, type: String},
  categories: {type: Array, required: true, lowercase: true},
//  product_image_url: {required: true, type: String, valid URL, valid image extension (jpg, jpeg, png, gif), http as protocol can be prepended if domain is valid},
  special_price: {type: Number},


});

module.exports = mongoose.model('Products', schema)