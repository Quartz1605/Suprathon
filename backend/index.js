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
import { pdFGenRoutes } from "./pdfGenerator/pdfGeneratorRoutes.js"
import { ReviewRoutes } from "./reviews/reviewRoutes.js"
import { upload } from "./middlewares/multerMiddleware.js"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => {console.log("Connection Successfull")}).catch((e) => {console.log("Some error happened " + e)})

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}))

app.get("/",(req,res) => {
  res.send("Welcome to the backend.")
})

// Auth 
app.use("/user",UserRoutes)

// Courses
app.use("/api/v1/courses",InstituteMiddleware ,CourseRoutes)


// Institute routes
app.use("/api/v1/institute/auth",InstituteRoutes)

// Events
app.use("/api/v1/events",InstituteMiddleware,EventRoutes)


//Course & Events Registration routes
app.use("/api/v1/registration",UserMiddleware,RegistrationRoutes)


//Bookmark Routes
app.use("/api/v1/bookmarks", UserMiddleware, BookmarkRoutes)   

// Dashboard
app.use("/api/v1/dashboard", UserMiddleware, DashboardRoutes) 


// Chatbot routes
app.use("/api/v1/chat",ChatbotRoutes) //Some DB errors need to be resolved.


//Certificate generator routes.
app.use("/api/v1/certificate",UserMiddleware,pdFGenRoutes) //Frontend mein Blob or something.


//Review routes
app.use("/api/v1",UserMiddleware,ReviewRoutes)



app.listen(process.env.PORT, () => {
  console.log(`http://localhost:3000`)
})  




//Certificate Route - http://localhost:3000/api/v1/certificate/generatePdf
//ChatBot Route = http://localhost:3000/api/v1/chat/chatbot



