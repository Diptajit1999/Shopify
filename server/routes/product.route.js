const express=require("express")
const productRouter=express.Router()
const {getAllProducts}=require("../controllers/product.controller")

console.log(productRouter)
// productRouter.route("/products").get(getAllProducts)
productRouter.get("/products",getAllProducts)


module.exports={
    productRouter
}