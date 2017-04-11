const mongoose    =   require("mongoose")
mongoose.connect('mongodb://localhost:27017/product-catalog')

const Products = require('./api/models/products.js')

let productsData = require('./wms_product_data.json')

Products.insertMany(productsData, (err, result) => {
  if (err) return console.log(err)
  console.log('Products successfully imported!')
})