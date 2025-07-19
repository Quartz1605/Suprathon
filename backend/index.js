import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import { UserRoutes } from "./auth/authRoutes.js"
import { CourseRoutes } from "./courses/courseRoutes.js"
import { InstituteRoutes } from "./institute/instituteRoutes.js"
import { EventRoutes } from "./events/eventRoutes.js"
import { InstituteMiddleware } from "./middlewares/InstituteMiddleware.js"
import { BookmarkRoutes } from "./bookmarks/bookmarkRoutes.js"
import { DashboardRoutes } from "./dashboard/dashboardRoutes.js"
import { RegistrationRoutes } from "./registrations/registrationRoutes.js"
import { UserMiddleware } from "./middlewares/UserMiddleware.js"
import { ChatbotRoutes } from "./chatbot/ChatbotRoutes.js"

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
app.use("/api/v1/courses",InstituteMiddleware ,CourseRoutes)


// Institute routes
app.use("/api/v1/institute/auth",InstituteRoutes)

// Events
app.use("/api/v1/events",InstituteMiddleware ,EventRoutes)


//Registration routes

app.use("/api/v1/registration",UserMiddleware,RegistrationRoutes)


//Bookmark Routes
app.use("api/v1/bookmarks", BookmarkRoutes)   // Not Tested Yet. User Middleware ??

// Dashboard
app.use("api/v1/dashboard", DashboardRoutes) 


// Chatbot routes
app.use("/api/v1/chat",ChatbotRoutes)

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:3000`)
})








