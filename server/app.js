const express=require("express")
const app=express()
app.use(express.json())
const errorMiddleware=require("./middlewares/error")
const {productRouter}=require("./routes/product.route")


app.use("/api/shop",productRouter)

// middleware for Errors
app.use(errorMiddleware)
module.exports={
    app
}