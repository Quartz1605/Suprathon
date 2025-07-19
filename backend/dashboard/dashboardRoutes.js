import { Router } from "express";
import { getUserDashboard } from "./dashboardControllers.js";
import { getProfile } from "./dashboardControllers.js";
import { updateProfile } from "./dashboardControllers.js";


const DashboardRoutes = Router()


DashboardRoutes.get("/userdashboard/main", getUserDashboard)   // For Courses, Events, Bookmarks
DashboardRoutes.get("/userdashboard/getprofile", getProfile)   // For About, skills, etc
DashboardRoutes.put("/userdashboard/updateprofile", updateProfile)   // Update Profile

export {DashboardRoutes}

