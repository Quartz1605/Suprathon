import { Router } from "express";
import { addEventController } from "./eventControllers.js";
import { getAllEventsController } from "./eventControllers.js";
import { getEventDetailsController } from "./eventControllers.js";

const EventRoutes = Router()

EventRoutes.post("/addevent",addEventController)
EventRoutes.get("/eventdetails/:id",getEventDetailsController)
EventRoutes.get("/eventlist",getAllEventsController)

export {EventRoutes}