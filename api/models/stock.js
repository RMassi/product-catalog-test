const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'
  },
  size: {required: true, type: String},
  quantity: { type: Number},
  warehouse: { type: String},
  created_at    : { type: Date },
  updated_at    : { type: Date }
});

schema.pre('validate', function(next){
  var now = new Date();
  this.created_at = (this.created_at == null) ? now : this.created_at;
  this.updated_at = now;
  next();
});

module.exports = mongoose.model('Stock', schema)