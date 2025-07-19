import { Router } from "express";
import { addEventController } from "./eventControllers.js";

const EventRoutes = Router()

EventRoutes.post("/addevent",addEventController)

export {EventRoutes}