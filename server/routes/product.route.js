const express=require("express")
const productRouter=express.Router()
const {getAllProducts,singleProductDetails,createProduct,updateProduct,deleteProduct}=require("../controllers/product.controller")

// console.log(productRouter)
// productRouter.route("/products").get(getAllProducts)
productRouter.get("/products",getAllProducts)
productRouter.get("/singleProduct/:id",singleProductDetails)
productRouter.post("/products/add",createProduct)
productRouter.put("/products/update/:id",updateProduct)
productRouter.delete("/products/delete/:id",deleteProduct)


module.exports={
    productRouter
}