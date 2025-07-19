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
import { BookmarkRoutes } from "./bookmarks/bookmarkRoutes.js"
import { DashboardRoutes } from "./dashboard/dashboardRoutes.js"
import { RegistrationRoutes } from "./registrations/registrationRoutes.js"
import { EventMiddleware } from "./middlewares/EventMiddleware.js"

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
app.use("/api/v1/courses",CourseMiddleware ,CourseRoutes)


// Institute routes
app.use("/api/v1/institute/auth",InstituteRoutes)

// Events
app.use("/api/v1/events",CourseMiddleware ,EventRoutes)


//Registration routes

app.use("/api/v1/registration",EventMiddleware,RegistrationRoutes)


//Bookmark Routes
app.use("api/v1/bookmarks", BookmarkRoutes)   // Not Tested Yet. User Middleware ??

// Dashboard
app.use("api/v1/dashboard", DashboardRoutes) 

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:3000`)
})








