import { Router } from "express";
import { addCourseController } from "./courseControllers.js";
import { getCourseDetailsController } from "./courseControllers.js";
import { getAllCoursesController } from "./courseControllers.js";

const CourseRoutes = Router()

CourseRoutes.post("/addcourse",addCourseController)
CourseRoutes.get("/coursedetails/:id", getCourseDetailsController)
CourseRoutes.get("/courselist", getAllCoursesController)

export {CourseRoutes}