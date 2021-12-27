const express = require("express");
const dotenv = require('dotenv');
const connectdb = require('./config/db')
//route file
const taskRoute = require("./routes/task");
const errorHandlerMiddleware = require('./middlewares/errorHandler')

dotenv.config();

const app = express();

app.use(express.static('./public'));
app.use(express.json())



//mount route
app.use("/api/v1/task", taskRoute)

//errorHandling middleware
app.use(errorHandlerMiddleware)

const startServer = async () => {
    try{
        await connectdb()
        app.listen(3000, ()=>{
            console.log("Server started on port 3000")
        })
    }catch(error){
        console.log(error)
    }
}

startServer()

