import { Router } from "express";
import { userSignupController } from "./authControllers.js";

const UserRoutes = Router()

UserRoutes.post("/signup",userSignupController)

export {UserRoutes}