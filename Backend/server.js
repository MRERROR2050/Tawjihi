const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

require("dotenv").config()





app.use(cors())

app.use(express.json())






app.use("/" , require("./routes/userRoute"))





mongoose.connect("mongodb+srv://abdalfatahaljuaidi:Mrerror2002@cluster0.b1gih.mongodb.net/Tawjihi?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    app.listen(4000,() =>{
        console.log("Server is ready to take off");
        
    })
})
.catch((err) =>{
    console.log(err);
    

})




















