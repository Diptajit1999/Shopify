const express=require("express")
const app=express()
app.use(express.json())

const {productRouter}=require("./routes/product.route")


app.use("/api/shop",productRouter)



module.exports={
    app
}