const mongoose=require("mongoose")
require("dotenv").config({path:"server/.env"})
const connection=mongoose.connect(process.env.mongodbURL)

module.exports={
    connection
}