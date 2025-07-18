import { Router } from "express";
import { userSignupController,userLoginController } from "./authControllers.js";

const UserRoutes = Router()

UserRoutes.post("/signup",userSignupController)
UserRoutes.post("/login",userLoginController)

export {UserRoutes}