const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  sku: {required: true, type: String},
  price: {required: true, type: Number},
  name: {required: true, type: String},
  description: {required: true, type: String},
  size: {required: true, type: mongoose.Schema.Types.Mixed},
  brand: {required: true, type: String},
  categories: {type: Array, required: true},
  product_image_url: {
    required: true,
    type: String,
    validate: {
      validator: function (value) {
        return (new RegExp('^(https?://)?(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpe?g|gif|png)$', 'i')).test(value);
      },
      message: "'{VALUE}' is not a valid product_image_url"
    }
  },
  special_price: {type: Number},
  created_at    : { type: Date },
  updated_at    : { type: Date }
});

schema.pre('validate', function(next){
  var now = new Date();
  this.created_at = (this.created_at == null) ? now : this.created_at;
  this.updated_at = now;
  next();
});

module.exports = mongoose.model('Products', schema)