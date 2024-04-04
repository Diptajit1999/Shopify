const {app}=require("./app")
const dotenv=require("dotenv")
const {connection}=require("./config/db/db")
//config
dotenv.config({path:"server/.env"})
const Port=process.env.Port||7004;
app.listen(Port,async()=>{
    try {
        await connection
        console.log("connected to the Database")
        console.log(`server is running at port - ${Port}`)
    } catch (error) {
        console.log(error)
    }
    
})