import { Router } from "express";
import { instituteSignupController,institueLoginController } from "./instituteControllers.js";

const InstituteRoutes = Router();


InstituteRoutes.post("/signup",instituteSignupController)
InstituteRoutes.post("/login",institueLoginController)


export {InstituteRoutes}

