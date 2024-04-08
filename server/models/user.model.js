const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({

},{
    versionKey:false
})


const UserModel=mongoose.model("user",userSchema)


