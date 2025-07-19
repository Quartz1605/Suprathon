import { courseRegistrationController,eventRegistrationController } from "./registrationController.js";
import { Router } from "express";



const RegistrationRoutes = Router();


RegistrationRoutes.post("/courses",courseRegistrationController)
RegistrationRoutes.post("/events",eventRegistrationController)

export {RegistrationRoutes}




