const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require("dotenv").config();




app.use(cors({
    origin: ' https://tawjihi-two.vercel.app',
  }));
  

app.use(express.json())






app.use("/" , require("./routes/userRoute"))





mongoose.connect("process.env.DATABASE_URL").then(() => {
    app.listen(process.env.PORT,() =>{
        console.log("Server is ready to take off");
        
    })
})
.catch((err) =>{
    console.log(err);
    

})




















