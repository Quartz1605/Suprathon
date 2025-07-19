import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import { UserRoutes } from "./auth/authRoutes.js"
import { CourseRoutes } from "./courses/courseRoutes.js"
import { InstituteRoutes } from "./institute/instituteRoutes.js"
import { EventRoutes } from "./events/eventRoutes.js"
import { CourseMiddleware } from "./middlewares/CourseMiddleware.js"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => {console.log("Connection Successfull")}).catch((e) => {console.log("Some error happened " + e)})

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get("/",(req,res) => {
  res.send("Welcome to the backend.")
})

// Auth 
app.use("/api/v1/auth",UserRoutes)

// Courses
app.use("/courses",CourseMiddleware ,CourseRoutes)

// Auth routes
app.use("/api/v1/auth",UserRoutes)


// Institute routes
app.use("/api/v1/institute/auth",InstituteRoutes)

// Events
app.use("/events", EventRoutes)

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:3000`)
})








