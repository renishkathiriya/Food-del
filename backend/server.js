import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import bodyParser from "body-parser"
import cartRouter from "./routes/cartRoute.js"


// app Config
const app = express()
const port = 4000

// Middlewere
app.use(bodyParser.json())
app.use(cors())

// DB Connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get("/",(req,res)=>{
      res.send("API Working")
})

app.listen(port,()=>{
      console.log(`Server Started on http://localhost:${port}`)
})