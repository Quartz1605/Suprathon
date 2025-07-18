import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import { UserRoutes } from "./user/UserRoutes.js"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => {console.log("Connection Successfull")}).catch((e) => {console.log("Some error happened " + e)})

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get("/",(req,res) => {
  res.send("Welcome to the backend.")
})

app.use("/api/v1/auth",UserRoutes)

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:3000`)
})








