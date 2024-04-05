const express=require("express")
const productRouter=express.Router()
const {getAllProducts,createProduct,updateProduct}=require("../controllers/product.controller")

console.log(productRouter)
// productRouter.route("/products").get(getAllProducts)
productRouter.get("/products",getAllProducts)
productRouter.post("/products/add",createProduct)
productRouter.put("/products/update/:id",updateProduct)


module.exports={
    productRouter
}