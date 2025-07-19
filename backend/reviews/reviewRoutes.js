import { Router } from "express"; 
import { eventReviewController,courseReviewController } from "./reviewControllers.js";


const ReviewRoutes = Router();

ReviewRoutes.post("/course/review",courseReviewController)
ReviewRoutes.post("/event/review",eventReviewController)


export {ReviewRoutes}