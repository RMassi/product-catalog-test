const express     =   require("express")
const app         =   express()
const bodyParser  =   require("body-parser")
const router      =   express.Router()

const mongoose    =   require("mongoose")
mongoose.connect('mongodb://localhost:27017/product-catalog')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({"extended" : false}))


router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"})
})

app.use('/',router)

app.use('/products', require('./api/controllers/products'))


app.listen(3000)
console.log("Listening to PORT 3000")
