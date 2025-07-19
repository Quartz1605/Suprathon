import { Router } from "express";
import { userDashboard } from "./dashboardControllers.js";

const DashboardRoutes = Router()

DashboardRoutes.get("/userdashboard", userDashboard)

export {DashboardRoutes}

