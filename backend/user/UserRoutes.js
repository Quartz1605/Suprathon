import { Router } from "express";
import { userSignupController } from "./UserControllers.js";

const UserRoutes = Router()

UserRoutes.post("/signup",userSignupController)

export {UserRoutes}